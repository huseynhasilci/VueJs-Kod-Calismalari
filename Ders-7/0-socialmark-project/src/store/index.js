import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import SecureLS from "secure-ls";
const ls = new SecureLS({ isCompression: false });

export default createStore({
  state: {
    user: null,
    saltKey: "booklike123!456?",
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    logoutUser(state){
        state.user = null;
    },
    setLikes(state,bookmarkIds){
      state.user.likes = bookmarkIds;
    },
    setBookmarks(state,bookmarkIds){
      state.user.bookmarks = bookmarkIds;
    }
  },
  getters: {
    _isAuthenticated: (state) => state.user !== null,
    _getCurrentUser(state) {
      const user = state.user;
      delete user?.password;
      return user;
    },
    _userLikes: (state) => state.user?.likes || [],
    _userBookmarks: (state) => state.user?.bookmarks || [],
    _currentUserId: (state) => state?.user?.id,
    _saltKey: (state) => state.saltKey,
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});
