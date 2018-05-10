import axios from 'axios'


export default class CustomerService{

    constructor(){

        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }


    getAll(){

        return  axios.get('contacts')


    }

    add(value){

        return axios.post('contacts',value)
    }

    get (id) {

        // return axios.get(`contacts/${id}`)
    }

    edit (contact) {
        // return axios.put(`contacts/${contact.id}`, contact)
    }

    remove (id) {


        // return axios.delete(`contacts/${id}`)
    }


}

export const customerService = new CustomerService();