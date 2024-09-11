export const loginUser = (tokenData, loginData) => ({
  type: "SET_STORE_DATA",
  token: tokenData,
  data: loginData,
});

export const updateLoginUser = (loginData) => ({
  type: "SET_UPDATE_DATA",
  data: loginData,
});

export const logoutUser = () => ({
  type: "SET_LOGOUT_USER",
  token: null,
  data: null,
});
