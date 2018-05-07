<template>
    <ul class="list-group">
        <router-link :to="{ name: 'contact-details', params: { id:contact.id}}"
                     tag="button"
                     exact-active-class="active"
                     v-for="(contact,key) in contacts" :key="key"
        >
            {{ contact.name }}
        </router-link>
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