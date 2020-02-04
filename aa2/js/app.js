"use strict";

function reactshshs(e, pic1, pic2, pic3, kvadratura, cena, komnat) {
  var idapp = document.getElementById('app');

  var renderAll = function renderAll() {
    var template = React.createElement("div", null, React.createElement("div", {
      className: "owl-carousel owl-theme"
    }, React.createElement("div", {
      className: "item"
    }, React.createElement("img", {
      src: pic1
    })), React.createElement("div", {
      className: "item"
    }, React.createElement("img", {
      src: pic2
    })), React.createElement("div", {
      className: "item"
    }, React.createElement("img", {
      src: pic3
    }))), React.createElement("h4", null, e), React.createElement("h5", null, "\u0426\u0435\u043D\u0430: ", cena), React.createElement("p", null, "\u041A\u0432\u0430\u0434\u0440\u0430\u0442\u0443\u0440\u0430: ", kvadratura), React.createElement("p", null, "\u041A\u043E\u043B-\u0432\u043E \u043A\u043E\u043C\u043D\u0430\u0442: ", komnat));
    ReactDOM.render(template, idapp);
  };

  renderAll();
  $('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  });



  setTimeout(()=>{

},3000);

}