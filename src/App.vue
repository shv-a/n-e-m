<template>
  <v-app>
    <v-app-bar app>
    </v-app-bar>

    <v-content>
        <login-form></login-form>
    </v-content>
  </v-app>
</template>

<script>
import LoginForm from "@/components/Login/LoginForm";

export default {
  name: 'App',
  components: {
      LoginForm
  },
  data: () => ({
  }),
};
</script>
