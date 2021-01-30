import CardFilmView from "../view/card.js";
import PopupView from "../view/popup.js";
import {KeyboardKeys, isOnline} from "../utils/common.js";
import {UserAction, UpdateType, CommentElementState} from "../consts.js";
import {render, RenderPosition, addElement, removeElement, replace, remove} from "../utils/render.js";
import {toast} from "../utils/toast/toast.js";
import dayjs from "dayjs";

const Mode = {
  POPUP_CLOSED: `CLOSED`,
  POPUP_OPEN: `OPEN`
};

export default class Film {
  constructor(filmListContainer, siteBody, changeData, changeMode, comments, renderMostCommentedFilms, userRankComponent) {
    this._filmListContainer = filmListContainer;
    this._siteBody = siteBody;
    this._changeData = changeData;
    this._changeMode = changeMode;
    this._renderMostCommentedFilms = renderMostCommentedFilms;

    this._userRankComponent = userRankComponent;
    this._filmComponent = null;
    this._popupComponent = null;
    this._mode = Mode.POPUP_CLOSED;
    this._comments = comments;

    this._handleOpenClick = this._handleOpenClick.bind(this);
    this._onPopupEscPress = this._onPopupEscPress.bind(this);
    this._handleCloseClick = this._handleCloseClick.bind(this);
    this._handleWatchListClick = this._handleWatchListClick.bind(this);
    this._handleWatchedClick = this._handleWatchedClick.bind(this);
    this._handleFavouriteClick = this._handleFavouriteClick.bind(this);
    this._handleDeleteCommentClick = this._handleDeleteCommentClick.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  init(film) {
    this._film = film;

    const prevFilmComponent = this._filmComponent;
    const prevPopupComponent = this._popupComponent;

    this._filmComponent = new CardFilmView(this._film, this._comments);
    this._popupComponent = new PopupView(this._film, this._comments);

    this._filmComponent.setPosterClickHandler(this._handleOpenClick);
    this._filmComponent.setCommentsClickHandler(this._handleOpenClick);
    this._filmComponent.setTitleClickHandler(this._handleOpenClick);
    this._filmComponent.setWatchListClickHandler(this._handleWatchListClick);
    this._filmComponent.setWatchedClickHandler(this._handleWatchedClick);
    this._filmComponent.setFavouriteClickHandler(this._handleFavouriteClick);
    this._popupComponent.setWatchListClickHandler(this._handleWatchListClick);
    this._popupComponent.setWatchedClickHandler(this._handleWatchedClick);
    this._popupComponent.setFavouriteClickHandler(this._handleFavouriteClick);
    this._popupComponent.setDeleteCommentClickHandler(this._handleDeleteCommentClick);
    this._popupComponent.setFormSubmitHandler(this._handleFormSubmit);

    if (prevFilmComponent === null || prevPopupComponent === null) {
      render(this._filmListContainer, this._filmComponent, RenderPosition.BEFOREEND);
      return;
    }

    if (this._filmListContainer.getElement().contains(prevFilmComponent.getElement())) {
      replace(this._filmComponent, prevFilmComponent);
    }

    if (this._mode === Mode.POPUP_OPEN) {
      replace(this._popupComponent, prevPopupComponent);
      this._popupComponent.setCloseButtonClickHandler(this._handleCloseClick);
      this._popupComponent.setDeleteCommentClickHandler(this._handleDeleteCommentClick);
    }

    remove(prevFilmComponent);
    remove(prevPopupComponent);
  }

  destroy() {
    remove(this._filmComponent);
    remove(this._popupComponent);
  }

  resetView() {
    if (this._mode !== Mode.POPUP_CLOSED) {
      this._closePopup();
      this._siteBody.classList.add(`hide-overflow`);
    }
  }

  setViewState(state, commentId) {
    const resetFormState = () => {
      this._popupComponent.updateData({
        commentAdding: false,
      });
    };

    switch (state) {
      case CommentElementState.ADDING:
        this._popupComponent.updateData({
          commentAdding: true,
        });
        break;
      case CommentElementState.DELETING:
        this._popupComponent.disabledDeleteCommentElement(commentId);
        break;
      case CommentElementState.ABORTING:
        this._popupComponent.shake(resetFormState);
        break;
      case CommentElementState.ABORTING_DELETING:
        this._popupComponent.enabledDeleteCommentElement(commentId);
        break;
    }
  }

  _closePopup() {
    this._popupComponent.reset(this._film);
    removeElement(this._siteBody, this._popupComponent);
    this._siteBody.classList.remove(`hide-overflow`);
    document.removeEventListener(`keydown`, this._onPopupEscPress);
    this._renderMostCommentedFilms();
    this._mode = Mode.POPUP_CLOSED;
  }

  _openPopup() {
    this._changeMode(this);
    this._changeData(UserAction.LOCAL_UPDATE_FILM, UpdateType.PATCH, this._film);
    addElement(this._siteBody, this._popupComponent);
    this._siteBody.classList.add(`hide-overflow`);
    document.addEventListener(`keydown`, this._onPopupEscPress);
    this._popupComponent.setCloseButtonClickHandler(this._handleCloseClick);
    this._popupComponent.setFormSubmitHandler(this._handleFormSubmit);
    this._mode = Mode.POPUP_OPEN;
  }

  _onPopupEscPress(evt) {
    if (evt.key === KeyboardKeys.ESCAPE) {
      evt.preventDefault();
      this._closePopup();
    }
  }

  _handleOpenClick() {
    this._openPopup();
  }

  _handleCloseClick() {
    this._closePopup();
  }

  _handleFormSubmit(newComment) {
    if (!isOnline()) {
      this._popupComponent.shake();
      toast(`You can't add comment offline`);
      return;
    }

    this._changeData(
        UserAction.ADD_COMMENT,
        UpdateType.PATCH,
        this._film,
        newComment
    );
  }

  _handleWatchListClick() {
    this._changeData(
        UserAction.UPDATE_FILM,
        UpdateType.MINOR,
        Object.assign(
            {},
            this._film,
            {
              isWatchList: !this._film.isWatchList
            }
        )
    );
  }

  _handleWatchedClick() {
    this._changeData(
        UserAction.UPDATE_FILM,
        UpdateType.MINOR,
        Object.assign(
            {},
            this._film,
            {
              isWatched: !this._film.isWatched,
              watchedDate: !this._film.isWatched ? dayjs() : null
            }
        )
    );
  }

  _handleFavouriteClick() {
    this._changeData(
        UserAction.UPDATE_FILM,
        UpdateType.MINOR,
        Object.assign(
            {},
            this._film,
            {
              isFavourite: !this._film.isFavourite
            }
        )
    );
  }

  _handleDeleteCommentClick(id) {
    if (!isOnline()) {
      toast(`You can't delete comment offline`);
      return;
    }

    this._changeData(
        UserAction.DELETE_COMMENT,
        UpdateType.PATCH,
        Object.assign(
            {},
            this._film,
            {
              comments: this._film.comments.filter((item) => item !== id)
            }
        ),
        id
    );
  }
}
