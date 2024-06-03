import './style.css'

import jQuery from "jquery"

window.$ = window.jQuery = jQuery
import select2 from "select2/dist/js/select2.min.js";
import "select2/dist/css/select2.min.css" 
import "select2-bootstrap-5-theme/dist/select2-bootstrap-5-theme.min.css"
select2()


import Alpine from "alpinejs";
import sort from '@alpinejs/sort'

Alpine.plugin(sort)
window.Alpine = Alpine
Alpine.start()