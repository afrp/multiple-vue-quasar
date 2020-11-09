<template>
  <q-page>
    <div class="logo-gpskutop">
      <q-img src="statics/logo-gpsku.png" class="logo-gpsku" />
    </div>
    <q-card flat class="kartu-login absolute-center">
      <login-user />
    </q-card>
  </q-page>
</template>

<script>
export default {
  components: {
    "login-user": require("components/InputLogin.vue").default
  }
};
</script>

<style lang="scss" scoped>
.logo-gpsku {
  width: 150px;
}
.logo-gpskutop {
  padding-top: 150px;
  text-align: center;
}
.kartu-login {
  width: 60%;
}
</style>