import './style.css'

import Sortable from "sortablejs";
import Alpine from "alpinejs";
import sort from "@alpinejs/sort";

window.Alpine = Alpine

Alpine.directive('log', (el, { expression }, { evaluate }) => {
  // expression === 'message'

  console.log(
      evaluate(expression)
  )
})
