
const MyDirectives = {

    install: function (Vue,options) {

        Vue.directive('focus', {

            inserted: function (element,binding) {

                element.focus()
                console.log('adasd',element,binding)

            }

        })


    }
    
}

export default MyDirectives