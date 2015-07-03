window.onload = function() {
  (function() {
    var print_img_id = 'print_img';
    if (checkFileApi()) {
      //ファイル選択
      var file_image = document.getElementById('file-image');
      file_image.addEventListener('change', selectReadfile, false);
    }

    // FileAPIに対応しているか
    function checkFileApi() {
      // Check for the various File API support.
      if (window.File && window.FileReader && window.FileList && window.Blob) {
        // Great success! All the File APIs are supported.
        return true;
      }
      alert('The File APIs are not fully supported in this browser.');
      return false;
    }

    //ファイルが選択されたら読み込む
    function selectReadfile(e) {
      var file = e.target.files;
      var reader = new FileReader();
      //dataURL形式でファイルを読み込む
      reader.readAsDataURL(file[0]);
      //ファイルの読込が終了した時の処理
      reader.onload = function() {
        readImage(reader, print_img_id);
      }
    }

    //ファイルの読込が終了した時の処理
    function readImage(reader, print_image_id) {
      //ファイル読み取り後の処理
      var result_DataURL = reader.result;

      //読み込んだ画像を書き出す
      var img = document.getElementById(print_image_id);
      var src = document.createAttribute('src');
      src.value = result_DataURL;
      img.setAttributeNode(src);
    }
  })();
}
