<template>
    <div>
        <div class="container">
            <div class="row">

                <div class="col-sm-4 mt-4">
                    <ContactList :contacts="contacts"/>
                </div>

                <div class="col-sm-8 mt-4">
                    <ContactDetails @onDelete="singleDelete" :contact="routeContact"/>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

    import {customerService} from "../services/CustomerService";

    import ContactList from '../components/ContactList'
    import ContactDetails from '../components/ContactDetails'


    export default {

        name: "Contacts",

        components: {

            ContactList,
            ContactDetails
        },

        created(){

          this.getAll()
        },

        data() {

            return {



                contacts: []
            }


        },
        computed: {

            routeContact() {

                return this.contacts.find(contact => contact.id == this.$route.params.id)

            }
        },

        methods: {

            getAll(){

                customerService.getAll()
                    .then((response) =>{

                        console.log(response.data)

                        this.contacts = response.data

                    });

            },

            singleDelete(id){


                // this.contacts = this.contacts.filter(contact => contact.id != id)

                let index = this.contacts.findIndex(contact => contact.id == id)


                this.contacts.splice(index,1)
                console.log(id)

            }


        }

    }


</script>

<style scoped>

</style>