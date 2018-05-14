const rules = {

    REQUIRED: 'required',
    NUMBER: 'number',
    EMAIL: 'email'

}

const MESSAGES_CLASSNAME = 'validator-messages'

const removeOldMessages = (el) => {

    let oldMessageElement = el.querySelector(`#${MESSAGES_CLASSNAME}`)

    if (oldMessageElement) {

        oldMessageElement.remove()
    }

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


                let validationsRules = binding.value

                // console.log('event', Object.keys(validationsRules))

                el.addEventListener('submit', (event) => {

                    event.preventDefault()

                    Object.keys(validationsRules).forEach(key => {

                        let input = el.querySelector(`#${key}`)

                        if (!input) {
                            throw new Error(
                                `element for validations rule ${key}  not found!`
                            )
                        }

                        if (validationsRules[key].indexOf(rules.REQUIRED) > -1 && !input.value.length) {
                            let messageElement = document.createElement('div')
                            messageElement.id = MESSAGES_CLASSNAME

                            //remove element
                            removeOldMessages(el)

                            console.log(250)

                            messageElement.innerHTML = `this field ${key.toUpperCase()} is required`
                            el.appendChild(messageElement)
                        } else {

                            removeOldMessages(el)
                            console.log(350)

                        }

                    });

                })

            }


        })

    }

}

export default MyDirectives