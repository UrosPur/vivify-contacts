<template>
    <ul class="list-group">
        <li v-for="(contact,key) in contacts" :key="key" class="list-group-item">{{ contact.name}}</li>
    </ul>
</template>

<script>
    export default {
        name: "ContactList",
        props: ['contacts']
    }
</script>

<style scoped>

</style>