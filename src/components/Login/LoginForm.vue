<template>
    <v-row align="center">
        <v-container class="fill-height" fluid>

            <v-layout align-center justify-center>
                <v-form ref="form" v-model="valid" :lazy-validation="false" v-if="formType === 'login'">
<!--                    <v-text-field v-model="name" :counter="64" :rules="nameRules" label="Name" required></v-text-field>-->
                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" :type="'email'" required></v-text-field>
                    <v-text-field v-model="password" :rules="passwordRules" label="Password" :type="'password'" autocomplete="off" required></v-text-field>

<!--                    <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item" required></v-select>-->

                    <v-checkbox v-model="checkbox" label="Remember me"></v-checkbox>

                    <v-btn :disabled="!valid" color="success" class="mr-4" @click="login">
                        Login
                    </v-btn>

                    <v-btn color="primary" class="mr-4" @click="switchFormTo('signup')">
                        Sign Up
                    </v-btn>

<!--                    <v-btn color="error" class="mr-4" @click="reset">-->
<!--                        Reset Form-->
<!--                    </v-btn>-->

<!--                    <v-btn color="warning" @click="resetValidation">-->
<!--                        Reset Validation-->
<!--                    </v-btn>-->
                </v-form>
                <v-form ref="form" v-model="valid" :lazy-validation="false" v-if="formType === 'signup'">
                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" :type="'email'" required></v-text-field>
                    <v-text-field v-model="password" :rules="passwordRules" label="Password" :type="'password'" autocomplete="off" required></v-text-field>
                    <v-text-field v-model="name" :counter="64" :rules="nameRules" label="Name" required></v-text-field>

                    <!--                    <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item" required></v-select>-->

                    <v-checkbox v-model="checkbox" label="Remember me"></v-checkbox>

                    <v-btn :disabled="!valid" color="success" class="mr-4" @click="login">
                        Sign Up
                    </v-btn>

                    <v-btn color="primary" class="mr-4" @click="switchFormTo('login')">
                        Login
                    </v-btn>

                    <!--                    <v-btn color="error" class="mr-4" @click="reset">-->
                    <!--                        Reset Form-->
                    <!--                    </v-btn>-->

                    <!--                    <v-btn color="warning" @click="resetValidation">-->
                    <!--                        Reset Validation-->
                    <!--                    </v-btn>-->
                </v-form>
            </v-layout>
        </v-container>
    </v-row>
</template>

<script>
export default {
    name: "LoginForm",
    data: () => ({
        formType: 'login',
        valid: false,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 64) || 'Name must be less than 64 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        password: '',
        passwordRules: [
            v => !!v || 'Password is required'
        ],
        // select: null,
        // items: [
        //     'Item 1',
        //     'Item 2',
        //     'Item 3',
        //     'Item 4',
        // ],
        checkbox: true,
    }),

    methods: {
        login() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('login').then(resp => {
                    console.log(resp);
                })
            }
        },
        switchFormTo(type) {
            this.$refs.form.reset();
            this.$refs.form.resetValidation();
            this.formType = type;
        }
        // reset () {
        //     this.$refs.form.reset()
        // },
        // resetValidation () {
        //     this.$refs.form.resetValidation()
        // },
    },
}
</script>