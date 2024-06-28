import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';
import { auth } from 'src/firebase';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: LocalStorage.getItem('user') || null
  }),

  actions: {
    setUser(user) {
      this.user = user;
      LocalStorage.set('user', user);
    },

    clearUser() {
      this.user = null;
      LocalStorage.remove('user');
    },

    // Initialize the store with the current Firebase auth state
    initializeAuthState() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.setUser(user);
        } else {
          this.clearUser();
        }
      });
    }
  }
});
