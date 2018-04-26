<template>
    <div>
        <div class="container">
            <div class="row">

                <div class="col-sm-4 mt-4">
                    <ContactList :contacts="contacts"/>
                </div>

                <div class="col-sm-8 mt-4">
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
        },

        data(){

            return{


                contacts:[

            {   name: 'John '},
            {   name: 'Sima '},
            {   name: 'Pera '},
            {   name: 'Djordje '},


            ]}


        }

    }


</script>

<style scoped>

</style>