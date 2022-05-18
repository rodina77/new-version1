jQuery(function($) {
    jQuery('.navvo').show();
});
jQuery(function($) {
    jQuery('.navvo2').hide();
});
$(window).scroll(function() {
    if ($(this).scrollTop()<0)
     {
        $('.navvo2').hide();
     }
    if ($(this).scrollTop()>600.7999877929688)
     {
        $('.navvo').hide();
     }
     if ($(this).scrollTop()>600.7999877929688)
     {
        $('.navvo2').show();
     }

     if ($(this).scrollTop()<600.7999877929688)
     {
        $('.navvo').show();
     }

     if ($(this).scrollTop()<600.7999877929688)
     {
        $('.navvo2').hide();
     }
 });