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

  <q-dialog v-model="isSendAccessLink" persistent full-width>
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <div class="card-title">Check email</div>
        <q-space />
        <q-btn icon="close" flat round dense @click="router.push('/')" />
      </q-card-section>
      <q-card-section>
        <div class="card-content">
          <div class="mail-list">
            <a :href="gmailLink" target="_self" class="list-item">
              <img src="../../assets/login/email-icon-gmail.png" />
            </a>
            <a :href="outlookLink" target="_self" class="list-item">
              <img src="../../assets/login/email-icon-outlook.png" />
            </a>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from 'stores/user';
import { Platform } from 'quasar';
import InputField from 'components/forms/InputField.vue';

const router = useRouter();
const userStore = useUserStore();

const loading = ref(false);
const loginForm = ref(null);
const emailRef = ref();

const isSendAccessLink = ref(false);

const formLoginInputs = reactive({
  email: null
});

// form submit action.
const formSubmit = async () => {
  loading.value = true;

  try {
    // Validate the form and log in the user
    if (loginForm.value.validate()) {
      console.log('QWEQWEQWE');
      const loginSuccess = await userStore.supabaseLogin(formLoginInputs);

      if (loginSuccess) {
        isSendAccessLink.value = true;
        console.log(formLoginInputs, 'Check Email');
      }
    }
  } catch (error) {
    console.error('Error during login:', error);
  } finally {
    loading.value = false;
    console.log('1231231231');
  }
};

// email links
const gmailLink = computed(
  () =>
    Platform.is.mobile
      ? 'googlegmail://co?to=' // Link format to open Gmail app on mobile devices
      : 'https://mail.google.com/mail/u/0/#inbox' // Web link to Gmail inbox
);

const outlookLink = computed(
  () =>
    Platform.is.mobile
      ? 'ms-outlook://compose' // Link format to open Outlook app on mobile devices
      : 'https://outlook.live.com/mail/0/inbox' // Web link to Outlook inbox
);
</script>

<style scoped lang="scss">
.form-login {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  height: calc(100dvh - 50px);
}

.card-title {
  font-size: 1rem;
  font-weight: 600;
}

.card-content {
  .mail-list {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;

    .list-item {
      border-radius: 50%;
      background-color: #ffffff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 70px;
      width: 70px;
      padding: 1rem;

      img {
        display: block;
        width: 100%;
      }
    }
  }
}
</style>
