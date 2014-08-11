(function() {

  var a = ['red', 'blue', 'green', 'purple'];

  window.addEventListener('click', function(e) {
    e.preventDefault();

    document.body.className = a[Math.round(Math.random() * (a.length - 1))];
  });

}());
