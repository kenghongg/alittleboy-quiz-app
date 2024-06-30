<template>
  <q-form @submit.prevent="formSubmit" class="form-register" ref="personalInfoform">
    <div>
      <InputField :label="'Real Name'">
        <template #input>
          <q-input
            v-model="formPersonalInfoInputs.displayName"
            :rules="[(val) => (val && val.length > 0) || 'Please insert real name']"
            label-color="brand"
            placeholder="Please insert real name"
            ref="realNameRef"
            type="text"
            hide-bottom-space
            autocomplete="name"
            outlined
            readonly
          >
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>
        </template>
      </InputField>
    </div>

    <div>
      <InputField :label="'Email'">
        <template #input>
          <q-input
            v-model="formPersonalInfoInputs.email"
            :rules="[
              (val) => (val && val.length > 0) || 'Please insert email',
              (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || 'Please insert a valid email'
            ]"
            label-color="brand"
            placeholder="Please insert email"
            ref="emailRef"
            type="email"
            hide-bottom-space
            autocomplete="email"
            outlined
            readonly
          >
            <template v-slot:prepend>
              <q-icon name="mail" />
            </template>

            <template v-slot:append>
              <q-btn
                :label="formPersonalInfoInputs.emailVerified ? 'Verified' : 'Verify'"
                :disable="formPersonalInfoInputs.emailVerified"
                no-caps
                push
                color="primary"
                size="md"
              />
            </template>

            <template v-slot:hint v-if="!formPersonalInfoInputs.emailVerified">Email not verify yet</template>
          </q-input>
        </template>
      </InputField>
    </div>

    <div>
      <InputField :label="'Password'">
        <template #input>
          <q-input
            v-model="formPersonalInfoInputs.password"
            :rules="[(val) => (val && val.length > 0) || 'Please insert password']"
            autocomplete="new-password"
            label-color="brand"
            placeholder="Please insert password"
            ref="passwordRef"
            type="password"
            hide-bottom-space
            outlined
            readonly
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>

            <template v-slot:append>
              <q-btn label="Change Password" no-caps push color="primary" size="md" />
            </template>
          </q-input>
        </template>
      </InputField>
    </div>

    <div class="text-caption">
      Created at:
      <span class="date">{{ formattedDate }}</span>
      <!-- &nbsp;|&nbsp; -->
      <!-- <span class="time">{{ formattedTime }}</span> -->
    </div>
  </q-form>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import InputField from 'components/forms/InputField.vue';
import { useUserStore } from 'stores/user';
// import FirebaseRegister from 'src/firebase/firebase-register';

const router = useRouter();
const userStore = useUserStore();
const user = userStore.user;

// loading / submitting state.
const submitting = ref(false);

// form ref.
const personalInfoForm = ref(null);

// form inputs ref.
const realNameRef = ref();
const emailRef = ref();
const passwordRef = ref();

// form inputs for v-model.
const formPersonalInfoInputs = reactive({
  email: '',
  password: '',
  displayName: '',
  emailVerified: false
});

// form inputs fill in.
const getFromPersonalInfoInputs = () => {
  formPersonalInfoInputs.email = user.email;
  formPersonalInfoInputs.password = '***********';
  formPersonalInfoInputs.displayName = user.displayName;
  formPersonalInfoInputs.emailVerified = user.emailVerified;
};

// form submit action.
const formSubmit = async () => {
  submitting.value = true;

  try {
    // if (registerForm.value.validate() && !!(await FirebaseRegister(formPersonalInfoInputs))) {
    //   router.push('/app');
    // }
  } finally {
    submitting.value = false;
  }
};

// date / time format
const formattedDate = computed(() => {
  const timestamp = userStore.user?.createdAt;
  return timestamp ? new Date(Number(timestamp)).toLocaleDateString() : '';
});

const formattedTime = computed(() => {
  const timestamp = userStore.user?.createdAt;
  return timestamp ? new Date(Number(timestamp)).toLocaleTimeString() : '';
});

onMounted(() => {
  getFromPersonalInfoInputs();
});
</script>

<style scoped lang="scss">
.form-register {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  :deep(.q-field__messages) {
    color: #ab003c;
  }

  .text-caption {
    text-align: center;
  }
}
</style>
