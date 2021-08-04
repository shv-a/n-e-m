<template>
    <div class="snackbars-container">
        {{ messages }}
<!--        <FlashMessage v-for="(message, index) in messages" :key="index" :time="timeout" :color="message.color" :position="'right bottom'">-->
<!--            {{message.text}}-->
<!--        </FlashMessage>-->

    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    data: () => ({
        timeout: 3000,
    }),

    computed: {
        ...mapState(['messages'])
    },
};
</script>

<style lang="sass">
.snackbars-container
    position: fixed
    top: 0
    right: 0
    z-index: 9999999999
    display: flex
    width: 100vw
    flex-direction: column-reverse
    align-items: flex-end
    justify-content: space-around
    .v-snack
        position: relative !important
        margin-bottom: 8px

</style>
