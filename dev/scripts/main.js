var app = {};


app.menu = ()=> {
  $('.burger').on('click', ()=>{
    if ($('.burger').hasClass('active')){
      $('.navItem').fadeOut();
      $('.burger').toggleClass('active');
    } else {
      $('.navItem').fadeIn();
      $('.burger').toggleClass('active');
    }
  });
}

app.sticky = ()=> {
  $(window).on('scroll', ()=>{
    let scroll = $(window).scrollTop();
    if (scroll > 800){
      $('.menu').addClass('sticky gradient');
    } else {
      $('.menu').removeClass('sticky gradient');
    }
  });
}

// window.addEventListener("hashchange", offsetAnchor);
//
// app.offsetAnchor = () => {
//   if (location.hash.length !==0) {
//     window.scrollTo(window.scrollX, window.scrollY - 100);
//   }
// }



app.init = ()=> {
  app.menu();
  app.sticky();
  // app.offsetAnchor();
}

$(function(){
  app.init();
});
