<template>
    <v-row align="center">
        <v-container class="fill-height" fluid>
            <v-layout align-center justify-center>
                <v-form ref="form">
                    <v-text-field v-model="title" :rules="titleRules" label="Title" :type="'text'" autocomplete="off" required @blur="validate"></v-text-field>
                    <v-textarea v-model="body" :rules="bodyRules" label="Text" :type="'text'" autocomplete="off" required @blur="validate"></v-textarea>
                    <v-text-field v-model="tags" :rules="tagsRules" label="Tags" :type="'text'" autocomplete="off" @blur="validate"></v-text-field>
                    <v-btn :disabled="!valid" color="success" class="mr-4" @click="postPasta">
                        Post Pasta
                    </v-btn>
                    <v-btn color="success" class="mr-4" @click="getPasta">
                        Get Pasta
                    </v-btn>
                    <v-btn color="warning" class="mr-4" @click="test">
                        Test
                    </v-btn>
                </v-form>
            </v-layout>
        </v-container>
    </v-row>
</template>

<script>
export default {
    name: "LoginForm",
    data: () => ({
        valid: false,
        title: 'TestPasta1',
        body: 'TestPasta1 text TestPasta1 text TestPasta1 text TestPasta1 text TestPasta1 text TestPasta1 text TestPasta1 text TestPasta1 text TestPasta1 text TestPasta1 text ',
        tags: 'tag test testtag',
        titleRules: [
            v => !!v || 'Title is required',
            v => (v && v.length <= 64) || 'Title must be less than 64 characters',
        ],
        bodyRules: [
            v => !!v || 'Text is required'
        ],
        tagsRules: [],
    }),
    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                this.valid = true;
            }
        },
        postPasta() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('postPasta', {title: this.title, body: this.body, tags: this.tags}).then(resp => {
                    if (resp.status === 200) {
                        this.title = '';
                        this.body = '';
                        this.tags = '';

                        this.flashMessage.show({
                            status: 'success',
                            title: 'Alright!',
                            message: 'Pasta successfully saved!',
                            time: 2000,
                            position: 'right bottom',
                            icon: '/success.png'
                        });
                    }
                })
            }
        },
        getPasta() {
            this.$store.dispatch('getPasta').then(resp => {
                console.log(resp);
            })
        },
        test() {
            this.flashMessage.show({
                status: 'error',
                title: 'Error Message Title',
                message: 'Oh, you broke my heart! Shame on you!',
                time: 2000,
                position: 'right bottom',
                icon: '/error.png'

            });


            this.$http.get('/apitest').then(resp => {console.log(resp)});
        },
        switchFormTo(type) {
            this.$refs.form.reset();
            this.$refs.form.resetValidation();
            this.formType = type;
        }
    },
}
</script>
