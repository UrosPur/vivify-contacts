<template>
    <div>
        This is the child component

    </div>
</template>


<script>

import parent from './parent.vue'

    export default {
        name: "child",
        extends: parent,
        created() {
            console.log('Child')
        }
    }
</script>

<style scoped>

</style>