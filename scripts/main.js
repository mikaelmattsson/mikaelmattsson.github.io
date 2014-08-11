(function() {

  window.addEventListener('click', function(e) {
    e.preventDefault();

    document.body.className = colors[Math.round(Math.random() * (colors.length-1))];
  });

}());
