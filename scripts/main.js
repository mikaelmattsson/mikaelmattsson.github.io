(function() {
  var images = document.querySelectorAll('article img'),
      i = images.length;

  while (i--) {
    images[i].parentNode.style.border = 'none';
  }
})();
