import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import supabase from 'src/supabase/index.js';
import { USER_STATES } from 'src/constants/userStates.js';
import { useQuasar } from 'quasar';

export const useUserStore = defineStore('user', () => {
  const $q = useQuasar();

  const user = ref(null);
  const status = ref(USER_STATES.UNKNOWN);

  const loading = ref(false);

  const getUserSession = async () => {
    const { data } = await supabase.auth.getSession();
    updateUser(data.session);
  };

  const updateUser = (session) => {
    if (session) {
      user.value = session.user;
      status.value = USER_STATES.LOGGED_IN;
    } else {
      user.value = null;
      status.value = USER_STATES.NON_LOGIN;
    }
  };

  const clearUser = () => {
    user.value = null;
    status.value = USER_STATES.NON_LOGIN;
  };

  const listenToAuthChanges = () => {
    supabase.auth.onAuthStateChange((_, session) => {
      updateUser(session);
    });
  };

  const supabaseLogin = async (values) => {
    loading.value = true;
    try {
      const { error } = await supabase.auth.signInWithOtp(values);
      if (error) {
        $q.notify({
          type: 'negative',
          message: error.message,
          position: 'top',
          icon: 'report_problem'
        });
      } else {
        $q.notify({
          type: 'positive',
          message: 'Login successfully',
          position: 'top',
          icon: 'check_circle'
        });
      }
    } catch (err) {
      $q.notify({
        type: 'negative',
        message: err.message,
        position: 'top',
        icon: 'report_problem'
      });
    } finally {
      loading.value = false;
    }
  };

  const supabaseLogout = async () => {
    loading.value = true;
    try {
      await supabase.auth.signOut();
      const userStore = useUserStore();
      userStore.clearUser();
      $q.notify({
        type: 'positive',
        message: 'Logged out successfully',
        position: 'top',
        icon: 'check_circle'
      });
    } catch (err) {
      $q.notify({
        type: 'negative',
        message: err.message,
        position: 'top',
        icon: 'report_problem'
      });
    } finally {
      loading.value = false;
    }
  };

  return {
    user: computed(() => user.value),
    status: computed(() => status.value),
    getUserSession,
    clearUser,
    listenToAuthChanges,
    supabaseLogin,
    supabaseLogout,
    loading
  };
});
