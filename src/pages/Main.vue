<template>
    <v-row align="center">
        <v-container class="fill-height" fluid>
            <v-layout align-center justify-center>
                <h1>This is Qopy Pasta</h1>
            </v-layout>
            <post-pasta/>
        </v-container>
    </v-row>
</template>

<script>
import PostPasta from "@/components/PostPasta/PostPasta";

export default {
    name: "Main",
    components: {
        PostPasta
    }
}
</script>

<style scoped>

</style>
