<template>
    <v-app>
        <!--    <v-app-bar app>-->
        <!--    </v-app-bar>-->

        <v-content>
            <login-form v-if="!isLoggedIn"></login-form>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import LoginForm from "@/components/Login/LoginForm";
import {mapGetters} from 'vuex';

export default {
    name: 'App',
    components: {
        LoginForm
    },
    computed: {
        ...mapGetters(['isLoggedIn'])
    },
    data: () => ({}),
};
</script>
