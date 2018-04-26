<template>
    <div>
        <div class="container">
            <div class="row">

                <div class="col">
                    <ContactList/>
                </div>

                <div class="col">
                    <ContactDetails/>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

    import ContactList from '../components/ContactList'
    import ContactDetails from '../components/ContactDetails'

    export default {

        name: "Contacts",

        components: {

            ContactList,
            ContactDetails
        }

    }


</script>

<style scoped>

</style>