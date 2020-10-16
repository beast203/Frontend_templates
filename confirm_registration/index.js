
$(function () {
    $(".btn").click(function () {
      $(".body").addClass("active");
      $(".btn").addClass("active");
      $('.icon').addClass("active");
      $('.clock').addClass("active");
      $('.text').addClass("active");
      setTimeout(function () {
        $('.text').removeClass('active').text('Reservation Confirmed').css('padding-left', '0');
      }, 3000);
      setTimeout(function () {
        $('.icon').addClass('fade-top');
      }, 7000);
      setTimeout(function () {
        $('#tick polyline').addClass('active');
      }, 6000);
      setTimeout(function () {
        $('body').removeClass('active').addClass('green-bg');
      }, 5000);
    });
  });

