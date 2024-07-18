<template>
  <q-form @submit.prevent="formSubmit" class="form-login" ref="loginForm">
    <div>
      <InputField :label="'Email'">
        <template #input>
          <q-input
            v-model="formLoginInputs.email"
            :rules="[
              (val) => (val && val.length > 0) || 'Please insert email',
              (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || 'Please insert a valid email'
            ]"
            autocomplete="email"
            label-color="brand"
            placeholder="Please insert email"
            ref="emailRef"
            type="email"
            hide-bottom-space
            outlined
          >
            <template v-slot:prepend>
              <q-icon name="mail" />
            </template>
          </q-input>
        </template>
      </InputField>
    </div>

    <div class="q-mt-auto">
      <q-btn
        type="submit"
        :loading="loading"
        color="primary"
        label="Send Access Link"
        size="lg"
        no-caps
        style="width: 100%"
      >
        <template v-slot:loading>
          <q-spinner-facebook />
        </template>
      </q-btn>
    </div>
  </q-form>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from 'stores/user';
import InputField from 'components/forms/InputField.vue';

const router = useRouter();
const userStore = useUserStore();

const loading = ref(false);
const loginForm = ref(null);
const emailRef = ref();

const formLoginInputs = reactive({
  email: null
});

// form submit action.
const formSubmit = async () => {
  loading.value = true;

  try {
    if (loginForm.value.validate() && !!(await userStore.supabaseLogin(formLoginInputs))) {
      // router.push('/app');
      console.log(formLoginInputs, 'Check Email');
    }
  } finally {
    loading.value = false;
  }
};

// const formSubmit = async () => {
//   submitting.value = true;

//   try {
//     if (loginForm.value.validate() && !!(await FirebaseLogin(formLoginInputs))) {
//       router.push('/app');
//     }
//   } finally {
//     submitting.value = false;
//   }
// };
</script>

<style scoped lang="scss">
.form-login {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  height: calc(100dvh - 50px);
}
</style>
