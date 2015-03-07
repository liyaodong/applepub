$(function() {
  var threshold = 768,
      $body = $('body'),
      pageH = $(document).height(),
      pageW = $(document).width(),
      weiboJS = 'http://tjs.sjs.sinajs.cn/open/api/js/wb.js';

  if(pageW < 768) {
    $body.addClass('mobile');

    loadTemplate('mobile-template.html', function(data) {
      $('#mobile-shell').append(data);
      $body.append('<script src="'+ weiboJS +'"></script>');
      $('#weibo-live').attr('height', pageH - 45);
      mobileJS();
    });
  } else {
    $body.addClass('pc');

    loadTemplate('pc-template.html', function(data) {
      $('#pc-shell').append(data);
      $body.append('<script src="'+ weiboJS +'"></script>');
    });
  }


  function mobileJS () {
    var $root = $('#mobile-slider'),
        $hongdian = $('#hongdian-iframe'),
        $weibo = $('#weibo-iframe'),
        $article = $('#page-article');

    $root.height(pageH);
    $hongdian.width(pageW).height(pageH - 45);
    $article.find('iframe').height(pageH);

    // adjust webio iframe height when it loaded
    $weibo.width(pageW).height(pageH - 45);

    var mySwiper = new Swiper('#mobile-slider', {
      speed: 400,
      spaceBetween: 100,
      direction: 'vertical'
    });

    // mobile nav

    $('#mobile-nav').find('.item').on('click', function () {
      var index = $(this).data('index');

      mySwiper.slideTo(index);
    });


    // mobile home 'hongdian' btn
    $root.find('#go-page-hongdian').on('click', function () {
      mySwiper.slideTo(1);
    });
  }

  function loadTemplate (templateURL, callback) {
    $.ajax({
      url: templateURL,
      dataType: 'html'
    })
    .done(function(data) {
      callback(data);
    })
    .fail(function() {
      console.error('Load '+ templateURL +' failure .');
    });
  }


});
