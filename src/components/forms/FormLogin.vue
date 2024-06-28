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

    <div>
      <InputField :label="'Password'">
        <template #input>
          <q-input
            v-model="formLoginInputs.password"
            :rules="[(val) => (val && val.length > 0) || 'Please insert password']"
            :type="showPassword ? 'text' : 'password'"
            autocomplete="password"
            label-color="brand"
            placeholder="Please insert password"
            ref="passwordRef"
            hide-bottom-space
            outlined
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="showPassword ? 'visibility_off' : 'visibility'"
                @click="togglePasswordVisibility"
              />
            </template>
          </q-input>
        </template>
      </InputField>
    </div>

    <!-- <div style="margin-top: 20px">
      <q-btn @click="googleSignIn" color="red" label="Sign in with Google" size="lg" style="width: 100%">
        <template v-slot:prepend>
          <q-icon name="fab fa-google" />
        </template>
      </q-btn>
    </div> -->

    <div class="q-mt-auto">
      <q-btn
        type="submit"
        :loading="submitting"
        color="primary"
        label="Login"
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
import InputField from 'components/forms/InputField.vue';
import FirebaseLogin from 'src/firebase/firebase-login';

const router = useRouter();

// loading / submitting state.
const submitting = ref(false);

// form ref.
const loginForm = ref(null);

// form inputs ref.
const emailRef = ref();
const passwordRef = ref();

// form inputs for v-model.
const formLoginInputs = reactive({
  email: null,
  password: null
});

// password input show / hide.
const showPassword = ref(false);
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

// form submit action.
const formSubmit = async () => {
  submitting.value = true;

  try {
    if (loginForm.value.validate() && !!(await FirebaseLogin(formLoginInputs))) {
      router.push('/app');
    }
  } finally {
    submitting.value = false;
  }
};
</script>

<style scoped lang="scss">
@import 'styles/FormLogin';
</style>
