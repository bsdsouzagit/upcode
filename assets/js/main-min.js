!function($,t,e){$(function(){"use strict";$(".banner").slick({dots:!0,arrows:!1,infinite:!1,speed:750,slidesToShow:1,slidesToScroll:1,autoplay:!1,autoplaySpeed:3500}),$(".responsivo").slick({dots:!0,arrows:!1,infinite:!1,speed:750,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),jQuery("img.change-color").each(function(){var t=jQuery(this),e=t.attr("id"),s=t.attr("class"),i=t.attr("src");jQuery.get(i,function(i){var o=jQuery(i).find("svg");void 0!==e&&(o=o.attr("id",e)),void 0!==s&&(o=o.attr("class",s+" replaced-svg")),o=o.removeAttr("xmlns:a"),!o.attr("viewBox")&&o.attr("height")&&o.attr("width")&&o.attr("viewBox","0 0 "+o.attr("height")+" "+o.attr("width")),t.replaceWith(o)},"xml")}),$('.wpcf7-form input[type="submit"]').replaceWith('<button id="submit" type="submit" class="btn icon">'+$('.wpcf7-form input[type="submit"]').val()+"</button>");var t=function(t){return 11===t.replace(/\D/g,"").length?"(00) 00000-0000":"(00) 0000-00009"},e={onKeyPress:function(e,s,i,o){i.mask(t.apply({},arguments),o)}};$('.mask-phone, input[type="tel"]').mask(t,e),$("select").not(".multiple").wrap('<div class="select-box"></div>'),$("a[href$='.jpg'], a[href$='.png'], a[href$='.jpeg'], a[href$='.gif'], .fancybox").fancybox({loop:!1}),$("a.smoothscroll").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}})})}(jQuery,this);