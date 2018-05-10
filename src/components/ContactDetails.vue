<template>
    <div>
        <div class="card">
            <ul class="list-group list-group-flush listnew" v-if="contact">
                <li class="list-group-item"><i class="fas fa-user fa-fw"></i> {{ contact.first_name }}</li>
                <li class="list-group-item"><i class="fas fa-user fa-fw"></i> {{ contact.last_name }}</li>
                <li class="list-group-item"><i class="fas fa-envelope fa-fw"></i> {{ contact.email }}</li>
                <li class="list-group-item"><i class="fas fa-phone fa-fw"></i> {{ contact.number }}</li>
                <li class="list-group-item">

                    <i class="fas fa-trash-alt btn btn-danger"  @click="onDelete(contact)" ></i>

                    <router-link :to="{ name: 'edit', params: { id: contact.id}}" >
                    <i class="fas fa-pencil-alt mr-4 btn btn-primary"></i>
                    </router-link>


                </li>

            </ul>
            <div class="card-body" v-else>
                &larr; Please select a contact you want to see or click <router-link to="/add-contact">here</router-link> to create a new contact.
            </div>
        </div>
    </div>
</template>

<script>

   import {customerService} from "../services/CustomerService";

   export default {
        name: "ContactDetails",
        props:['contact'],
        methods:{

            onDelete(contact){

                customerService.remove(contact.id)
                    .then((response) =>{

                            this.$emit('onDelete',contact.id)



                    });

            },



        }
    }

</script>

<style scoped>

</style>