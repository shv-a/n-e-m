<template>
    <v-app>
        <!--    <v-app-bar app>-->
        <!--    </v-app-bar>-->

        <v-main>
            <login-form v-if="!isLoggedIn"/>
            <router-view/>
            <FlashMessage></FlashMessage>
        </v-main>
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
}
</script>
