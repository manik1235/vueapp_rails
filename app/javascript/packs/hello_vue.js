import Vue from 'vue/dist/vue.esm'

document.addEventListener("DOMContentLoaded", () => {
  var app = new Vue({
    el: "#app",
    data: {
      message: "Hello Vue!"
    }
  });

  var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Data().toLocaleString()
    }
  });
})
