const AdminReducer = {
  setAdminData: (state, action) => {
    state.adminData = action?.payload?.adminData;
  },
};

export default AdminReducer;
