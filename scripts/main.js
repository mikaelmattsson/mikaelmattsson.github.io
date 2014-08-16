(function() {

  var a = ['red', 'blue', 'green', 'purple'];

  document.getElementsByTagName('header')[0].addEventListener('click', function(e) {
    e.preventDefault();

    document.body.className = a[Math.round(Math.random() * (a.length - 1))];
  });

  var images = document.querySelectorAll('article img'),
      i = images.length;

  while (i--) {
    images[i].parentNode.style.border = 'none';
  }

})();
