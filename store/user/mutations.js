export default {
  SET_USER_ID(state, userId) {
    state.userId = userId;
  },
  SET_USERNAME(state, username) {
    state.username = username;
  },
  SET_CONNECTION(state, isConnected) {
    state.connected = isConnected;
  },
};
