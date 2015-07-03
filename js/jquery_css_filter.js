$(function() {
  (function() {
    var ranges = $('input[type="range"]');
    var img = $('#print_img');
    var properties = "";
    ranges.on('change', function() {
      properties = "";
      ranges.each(function(idx) {
        var id_name = this.id;
        var unit = this.dataset.unit || 'px';
        var value = this.value + unit;
        var property = id_name + '(' + value + ') ';
        properties += property;
        // console.log("properties:" + properties);
        //繰り返しのラストで行う処理
        if (idx == ranges.length - 1) {
          img.css('-webkit-filter', properties);
          img.css('filter', properties);
        }
        // 表示
        showCurrentValue(this, value);
      });
    }).each(function() {
      var unit = this.dataset.unit || 'px';
      var value = this.value + unit;
      showCurrentValue(this, value);
    });

    // functions
    function showCurrentValue(range, value) {
      var $range = $(range);
      var result = $range.siblings('.current-value');
      result.text('[' + value + ']');
    }
  })();
});
