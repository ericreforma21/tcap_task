const AuthReducer = {
  loginUser: (state, action) => {
    state.isLogin = action?.payload?.isLogin;
    state.userData = action?.payload?.userData;
  },
  logoutUser: (state) => {
    state.isLogin = false;
  },
};

export default AuthReducer;
