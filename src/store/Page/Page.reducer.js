const PageReducer = {
  setCurrentPage: (state, action) => {
    state.activePage = action?.payload;
  },
  setPageHeight: (state, action) => {
    state.authPageHeight = action?.payload
  },
};

export default PageReducer;
