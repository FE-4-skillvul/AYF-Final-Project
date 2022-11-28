import {
  GET_LIST_USER,
  ADD_USER,
  ADD_POST,
  LOGOUT,
  UPDATE_PUBLISH,
  UNPUBLISH,
  GET_COUNTRY,
  LOGIN,
  GET_UNAME,
  GET_CATEGORY,
  GET_COMMENTS,
  ADD_COMMENT,
} from "../../actions/userAction";

const initialState = {
  getListUserResult: false,
  getListUserLoading: false,
  getListUserError: false,

  addUserResult: false,
  addUserLoading: false,
  addUserError: false,

  loginResult: false,
  loginLoading: false,
  loginError: false,

  addPostResult: false,
  addPostLoading: false,
  addPostError: false,

  LogoutResult: false,

  updatePublishResult: false,
  updatePublishLoading: false,
  updatePublishError: false,

  unPublishResult: false,
  unPublishLoading: false,
  unPublishError: false,

  getListCountryResult: false,
  getListCountryLoading: false,
  getListCountryError: false,

  getUnameResult: false,
  getUnameLoading: false,
  getUnameError: false,

  getCategoryResult: false,
  getCategoryLoading: false,
  getCategoryError: false,

  getCommentsResult: false,
  getCommentsLoading: false,
  getCommentsError: false,

  addCommentsResult: false,
  addCommentsLoading: false,
  addCommentsError: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_USER:
      return {
        ...state,
        getListUserResult: action.payload.data,
        getListUserLoading: action.payload.loading,
        getListUserError: action.payload.errorMessage,
      };

    case GET_COMMENTS:
      return {
        ...state,
        getCommentsResult: action.payload.data,
        getCommentsLoading: action.payload.loading,
        getCommentsError: action.payload.errorMessage,
      };

    case ADD_COMMENT:
      return {
        ...state,
        addCommentsResult: action.payload.data,
        addCommentsLoading: action.payload.loading,
        addCommentsError: action.payload.errorMessage,
      };

    case GET_COUNTRY:
      return {
        ...state,
        getListCountryResult: action.payload.data,
        getListCountryLoading: action.payload.loading,
        getListCountryError: action.payload.errorMessage,
      };
    case GET_CATEGORY:
      return {
        ...state,
        getCategoryResult: action.payload.data,
        getCategoryLoading: action.payload.loading,
        getCategoryError: action.payload.errorMessage,
      };
    case GET_UNAME:
      return {
        ...state,
        getUnameResult: action.payload.data,
        getUnameLoading: action.payload.loading,
        getUnameError: action.payload.errorMessage,
      };

    case ADD_USER:
      return {
        ...state,
        addUserResult: action.payload.data,
        addUserLoading: action.payload.loading,
        addUserError: action.payload.errorMessage,
      };
    case LOGIN:
      return {
        ...state,
        loginResult: action.payload.data,
        loginLoading: action.payload.loading,
        loginError: action.payload.errorMessage,
      };
    case ADD_POST:
      return {
        ...state,
        addPostResult: action.payload.data,
        addPostLoading: action.payload.loading,
        addPostError: action.payload.errorMessage,
      };

    case LOGOUT:
      return {
        ...state,
        LogoutResult: action.payload.data,
      };

    case UPDATE_PUBLISH:
      return {
        ...state,
        updatePublishResult: action.payload.data,
        updatePublishLoading: action.payload.loading,
        updatePublishError: action.payload.errorMessage,
      };

    case UNPUBLISH:
      return {
        ...state,
        unPublishResult: action.payload.data,
        unPublishLoading: action.payload.loading,
        unPublishError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default user;
