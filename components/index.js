
import Button from './Button/Button.vue'
import Modal from './Modal/Modal.vue'
import Abc from './Abc/Abc.vue'

var components = {
  Button,
  Modal,
  Abc
}
var VuePlugin = {}
VuePlugin.install = function(Vue, options) {
    for(let component in components) {
        Vue.component('yw'+component, components[component]);
    }
}
export default VuePlugin
