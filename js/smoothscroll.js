jQuery_2_2_4(document).ready(function() {
    var lastId,
    topMenu = jQuery_2_2_4("nav-bar-reference"),
    topMenuHeight = topMenu.outerHeight()+15,
    menuItems = topMenu.find('a[href^="#"]'),
    scrollItems = menuItems.map(function(){
      var item = jQuery_2_2_4(jQuery_2_2_4(this).attr("href"));
      if (item.length) { return item; }
    });
    menuItems.click(function(e){
    var href = jQuery_2_2_4(this).attr("href"),
    offsetTop = href === "#" ? 0 : jQuery_2_2_4(href).offset().top-topMenuHeight+1;
    jQuery_2_2_4('html, body').stop().animate({ 
      scrollTop: offsetTop
    }, 300);
    e.preventDefault();
    });
    jQuery_2_2_4(window).scroll(function(){
    var fromTop = jQuery_2_2_4(this).scrollTop()+topMenuHeight;
    var cur = scrollItems.map(function(){
     if (jQuery_2_2_4(this).offset().top < fromTop)
       return this;
    });
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";
   if (lastId !== id) {
       lastId = id;
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});
});
