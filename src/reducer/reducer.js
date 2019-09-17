const LOGIN_PENDING = "LOGIN_PENDING";
const LOGIN_SUCESS = "LOGIN_SUCESS";
const LOGIN_FAILED = "LOGIN_FAILED";

function setLoginPending(isLoginPending) {
  return { type: LOGIN_PENDING, isLoginPending };
}

function setLoginSuccess(isLoginSucess) {
  return { type: LOGIN_SUCESS, isLoginSucess };
}
function setLoginFailed(loginFailed) {
  return { type: LOGIN_FAILED, loginFailed };
}

export function login() {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginFailed(null));

    var email = "";
    var password = "";
    callLoginApi(email, password, error => {
      dispatch(setLoginPending(false));
      if (!error) {
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginFailed(error));
      }
    });
  };
}

function callLoginApi(email, password, callback) {
  setTimeout(() => {
    if (email === "nayana@contus.in" && password === "12345") {
      return callback(null);
    } else {
      return callback(new Error("Invalid email and password"));
    }
  }, 1000);
}

const SET_LOGIN_PENDING = "SET_LOGIN_PENDING";
const SET_LOGIN_SUCCESS = "SET_LOGIN_SUCCESS";
const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";

export default function reducer(
  state = {
    isLoginSuccess: false,
    isLoginPending: false,
    loginFailed: null
  },
  action
) {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginFailed: action.loginFailed
      });

    default:
      return state;
  }
}
