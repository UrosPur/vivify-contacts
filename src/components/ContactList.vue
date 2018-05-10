<template>
    <ul class="list-group">
        <router-link class="button" :to="{ name: 'contact-details', params: { id: contact.id}}"
                     tag="button"
                     exact-active-class="active"
                     v-for="(contact,key) in contacts" :key="key"
        >
            {{ contact.first_name }} , {{ contact.last_name}}
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

    .button{
        text-align: left;
        background: aqua;
    }

    .delete-button{
        text-align: center;
        background: firebrick;
    }

</style>