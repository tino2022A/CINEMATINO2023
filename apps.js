document.addEventListener('DOMContentLoaded', function() {
  var fileInput = document.getElementById('fileInput');
  var loadButton = document.getElementById('loadButton');
  var playlist = document.getElementById('playlist');
  var player = document.getElementById('player');
  var qualitySelect = document.getElementById('quality');
  var wirelessScreenCheckbox = document.getElementById('wirelessScreen');

  loadButton.addEventListener('click', function() {
    var file = fileInput.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = function(e) {
        var content = e.target.result;
        var urls = content.trim().split('\n');
        playlist.innerHTML = '';
        for (var i = 0; i < urls.length; i++) {
          var url = urls[i].trim();
          if (url) {
            var item = document.createElement('div');
            item.classList.add('playlist-item');
            item.textContent = url;
            item.addEventListener('click', function() {
              player.src = this.textContent;
              player.play();
            });
            playlist.appendChild(item);
          }
        }
      }
      reader.readAsText(file);
    }
  });

  qualitySelect.addEventListener('change', function() {
    player.src = player.src.replace(/\.mp4\?.*/, '.' + qualitySelect.value + '.mp4');
    player.load();
  });

  wirelessScreenCheckbox.addEventListener('change', function() {
    if (wirelessScreenCheckbox.checked) {
      // Agrega aquí el código para habilitar la pantalla inalámbrica
    } else {
      // Agrega aquí el código para deshabilitar la pantalla inalámbrica
    }
  });
});
