<template>
    <div>
        <div class="container">
            <div class="row">

                <div class="col-sm-4 mt-4">
                    <ContactList :contacts="contacts"/>
                </div>

                <div class="col-sm-8 mt-4">
                    <ContactDetails :contact="routeContact"/>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

    import axios from 'axios'

    import ContactList from '../components/ContactList'
    import ContactDetails from '../components/ContactDetails'


    export default {

        name: "Contacts",

        components: {

            ContactList,
            ContactDetails
        },

        created(){

          this.getContact()
        },

        data() {

            return {


                // contacts: [
                //
                //     {id: 1, name: 'John Johnson',email: 'john@gmail.com',number: '4567-4684'},
                //
                //     {id: 2,name: 'Sima Simic',email: 'sima@gmail.com',number: '4547-4684'},
                //
                //     {id: 3,name: 'Pera Peric',email: 'pera@gmail.com',number: '3367-4684'},
                //
                //     { id: 4,name: 'Dragan Dragic',email: 'dragan@gmail.com',number: '4567-4684'},
                //
                // ]

                contacts: []
            }


        },
        computed: {

            routeContact() {

                return this.contacts.find(contact => contact.id == this.$route.params.id)

            }
        },

        methods: {

            getContact(){

                axios.get('https://api.randomuser.me/')

                    .then((response) => {

                        let contact = {}

                        console.log(response)


                        contact.id = response.data.results[0].id.name
                        contact.name = response.data.results[0].name.first
                        contact.email = response.data.results[0].email
                        contact.cell = response.data.results[0].cell
                        this.contacts.push(contact)

                    })

                .catch((error) =>{

                // console.log(error)

                })

                axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com/'

                axios.post('http://jsonplaceholder.typicode.com/posts',{
                    body: { firstName : 'Sima'}
                }).then((response) => {

                    console.log(response)

                }).catch((error) => {

                    console.log(error)
                })

            }


        }

    }


</script>

<style scoped>

</style>