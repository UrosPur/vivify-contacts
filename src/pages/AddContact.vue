<template>
    <div>
        <div class="container">
            <div class="row">
                <!--<form @submit.prevent="addContact"-->
                <form
                      v-validate="validationConfig">
                    <div class="form-group row">
                        <label for="text" class="col-4 col-form-label">First Name</label>
                        <div class="col-8">
                            <div class="input-group">
                                <div class="input-group-addon">
                                    <i class="fa fa-address-card-o"></i>
                                </div>
                                <input
                                        v-model="newContact.first_name"
                                        id="text" name="first_name"
                                        type="text"
                                        class="form-control here"
                                        v-focus="focus"
                                >
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="text2" class="col-4 col-form-label">Last Name</label>
                        <div class="col-8">
                            <input v-model="newContact.last_name" id="text2" name="last_name" type="text"
                                   class="form-control here">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="email" class="col-4 col-form-label">Email</label>
                        <div class="col-8">
                            <input
                                    v-model="newContact.email"
                                    id="email"
                                    name="email"
                                    type="text"
                                   class="form-control here"
                            >
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="text4" class="col-4 col-form-label">number</label>
                        <div class="col-8">
                            <input v-model="newContact.number" id="text4" name="number" type="text"
                                   class="form-control here">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="offset-4 col-8">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script>

    import {customerService} from "../services/CustomerService";

    export default {
        name: "AddContact",
        created() {
            if (this.$route.params.id) {

                customerService.get(this.$route.params.id)
                    .then((response) => {

                        this.newContact = response.data

                    })

            }

        },
        data() {

            return {

                newContact: {

                    first_name: '',
                    last_name: '',
                    email: '',
                    number: '',
                },

                focus:true,

                validationConfig:{

                validationRules: {
                    email: ['required','email']
                },

                submitCallBack: () => {
                    this.addContact()
                }

                },

            }
        },
        methods: {

            addContact() {

                customerService.add(this.newContact)

                this.$router.push({name: 'contacts-list'});


            }

        },

        directive: {}

    }
</script>

<style scoped>

</style>