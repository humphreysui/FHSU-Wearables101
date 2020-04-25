$(document).ready(function () {
  
  // scrolling effect
  let scrollLink = $('.scroll');

  scrollLink.click(function (e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  })

  //showcase img onclick
  $(function () {
    $(".showcase-content").css('display', 'none');

    $(".showcase-image").click(function () {
      //
      var obj = $(this).next('.showcase-content');
      $(obj).show();

      //
      $(obj).siblings('.showcase-content').each(function () {
        //
        $(this).hide();
      })
    })
  })  
  

})

