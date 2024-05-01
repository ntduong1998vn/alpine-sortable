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

window.sort = () => {
  return {
    list: ["Kazunari", "Mitsunori", "Seiko"],
    config: {
      animation: 150,
      ghostClass: 'opacity-20',
      dragClass: 'bg-blue-50',
    },
    init() {
      console.log(this.$refs)
      // Sortable.create(this.$refs.items, this.config);
    },
  }
}

Alpine.plugin(sort)
Alpine.start()

var counter = 3,
  slaves = [];

var byId = function (id) {
  return document.getElementById(id);
}

/* Master Section */
var master = Sortable.create(byId('multi'), {
  animation: 150,
  draggable: '.tile',
  handle: '.tile__name',
  ghostClass: "sortable-ghost",
});

/* Slaves Section */

function initSlaves() {
  // destroy all existing sortable slaves to prevent overloading the RAM
  // and empty our array
  if (slaves.length !== 0) {
    var i;
    for (i = slaves.length - 1; i >= 0; i -= 1) {
      slaves[i].destroy();
      slaves.splice(i, 1);
    }
  }
  [].forEach.call(byId('multi').getElementsByClassName('tile__list'), function (el) {
    slaves.push(Sortable.create(el, {
      group: 'photo',
      animation: 150
    }));
  });
};
initSlaves();
// execute the function on load.

$(document).on('click', '.add-el', function () {
  var template = '<img src="https://via.placeholder.com/50x50&text=11">';

  var lst = $(this).parent().find('.tile__list');

  lst.append(template);
});



