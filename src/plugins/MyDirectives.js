import validator from 'validator';

const rules = {

    REQUIRED: 'required',
    NUMBER: 'number',
    EMAIL: 'email'

}

const MESSAGES_CLASSNAME = 'validator-messages'

const removeOldMessages = (el) => {

    let oldMessageElements = el.querySelectorAll(`#${MESSAGES_CLASSNAME}`)


    oldMessageElements.forEach((oldMessageElement) => {

        oldMessageElement.remove()
    })

    // if (oldMessageElements) {
    //
    //     oldMessageElements.remove()
    // }

}


const showMessageErrorElement = (el, message) => {
    let messageElement = document.createElement('div')
    messageElement.id = MESSAGES_CLASSNAME
    messageElement.innerHTML = message
    el.appendChild(messageElement)
}


const MyDirectives = {

    install: function (Vue, options) {

        Vue.directive('focus', {

            inserted: function (element, binding) {

                element.focus()
                console.log('adasd', element, binding)

            }

        })

        // Vue.mixin({
        //
        //     mounted: function () {
        //
        //         console.log(this.$el)
        //
        //     }
        //
        // })

        // v-validate: requiered.email
        Vue.directive('validate', {

            inserted: function (el, binding) {


                let validationConfig = binding.value
                    let validationsRules = validationConfig.validationRules

                // console.log('event', Object.keys(validationsRules))

                el.addEventListener('submit', (event) => {

                    let errorCounter = 0

                    event.preventDefault()

                    Object.keys(validationsRules).forEach(key => {

                        let input = el.querySelector(`#${key}`)

                        if (!input) {
                            throw new Error(`element for validations rule ${key}  not found!`)
                        }

                        //remove element
                        removeOldMessages(el)

                        if (validationsRules[key].indexOf(rules.EMAIL) > -1 && !validator.isEmail(input.value)) {

                            errorCounter++
                            showMessageErrorElement(el, `this field must be of type email`)
                        }

                        if (validationsRules[key].indexOf(rules.REQUIRED) > -1 && !input.value.length) {
                            errorCounter++
                            showMessageErrorElement(el, `this field ${key.toUpperCase()} is required`)
                            console.log(250)

                        }



                    });

                    if(errorCounter === 0){

                  validationConfig.submitCallBack()

                    }
                })

            }


        })

    }

}

export default MyDirectives