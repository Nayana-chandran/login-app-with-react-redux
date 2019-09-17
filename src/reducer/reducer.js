const LOGIN_PENDING = "LOGIN_PENDING";
const LOGIN_SUCESS = "LOGIN_SUCESS";
const LOGIN_FAILED = "LOGIN_FAILED";

function setLoginPending(isLoginPending) {
  return { type: LOGIN_PENDING, isLoginPending };
}

function setLoginSuccess(isLoginSuccess) {
  return { type: LOGIN_SUCESS, isLoginSuccess };
}
function setLoginFailed(loginFailed) {
  return { type: LOGIN_FAILED, loginFailed };
}

export function login(email, password) {
  return dispatch => {
    dispatch(setLoginPending(true));

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
    if (email === "nayanakrish777@gmail.com" && password === "12345") {
      return callback(null);
    } else {
      return callback(new Error("Invalid email and password"));
    }
  }, 1000);
}

export default function reducer(
  state = {
    isLoginSuccess: false,
    isLoginPending: false,
    loginFailed: null
  },
  action
) {
  switch (action.type) {
    case LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case LOGIN_SUCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case LOGIN_FAILED:
      return Object.assign({}, state, {
        loginFailed: action.loginFailed
      });

    default:
      return state;
  }
}
