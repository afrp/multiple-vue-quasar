<template>
  <form @submit.prevent="loginForm">
    <div class="input-email">
      <q-input
        v-model="formData.email"
        :rules="[ val => isValidEmailAddress(val) || 'Silahkan masukan alamat email yang valid.']"
        ref="email"
        rounded
        lazy-rules
        outlined
        dense
        color="yellow"
        label="Email"
      >
        <template v-slot:prepend>
          <q-icon name="fas fa-user" size="20px" />
        </template>
      </q-input>
    </div>
    <br/>
    <div class="input-password">
      <q-input
        v-model="formData.password"
        :rules="[ val => val.length >= 6 || 'Password tidak boleh kurang dari 6 karakter.']"
        ref="password"
        lazy-rules
        rounded
        dense
        type="password"
        outlined
        label="Password"
      >
        <template v-slot:prepend>
          <q-icon name="fas fa-lock" size="20px" />
        </template>
      </q-input>
    </div>
    <br/>
    <q-btn
      @click="loginForm"
      type="submit"
      class="coba full-width q-mt-md"
      rounded
      color="black"
      label="Login"
      to="/halamanapp"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    isValidEmailAddress(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    loginForm() {
      this.$refs.email.validate();
      this.$refs.password.validate();
      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        console.log("login the user");
      }
    }
  }
};
</script>

<style scoped>
.input-email {
  margin-bottom: -10px;
}
.input-password {
  margin-bottom: -10px;
}
</style>