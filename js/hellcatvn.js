$(function(){
  $('.trans1').easyTicker({
    direction: 'up',
    easing: 'swing',
    visible: 3
  });    
});
$.getJSON( "json/transaction.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    console.log(val);
    $('#listtrans').append('<li><img class="img-circle" src="https://graph.facebook.com/'+val.midmanfbid+'/picture?type=large"/><a href="'+val.midmanfb+'" target="_blank">'+val.midmanname+'</a><p>Người Thuê:'+val.hirename+'</p><p>Số Tiền Giao Dịch:'+val.price+'</p><p>Dịch Vụ Được Thuê:'+val.service+'</p></li>');
  });
});