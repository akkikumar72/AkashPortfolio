/*! project-name v0.0.1 | (c) 2019 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
function isMobile(){return $(window).width()<992}$((function(){if(soundEffects=$("html").hasClass("sound-effects"),soundEffects&&(wind=document.createElement("audio"),wind.setAttribute("src",$("html").data("audio-wind")),windReverse=document.createElement("audio"),windReverse.setAttribute("src",$("html").data("audio-wind-reverse")),tick=document.createElement("audio"),tick.setAttribute("src",$("html").data("audio-tick"))),$(".header-wrap > img").length&&$(".header").css("background-image","url("+$(".header-wrap > img").attr("src")+")"),showLoader(),$("html").hasClass("one-page-layout")){var e=$(".cover-media").data("image-url");if(void 0!==e){var a=new Image;a.src=e,a.onload=function(){$("html").addClass("is-card-loaded"),$(".card-3d-right-side, .card-3d-bottom-side").css("background-image","url("+e+")"),$(".cover-media").css("background-image","url("+e+")").addClass("is-image-loaded")}}isMobile()&&($(".one-page-layout .cover-media").height($(window).height()),$(window).on("resize",(function(){$(".one-page-layout .cover-media").height($(window).height())}))),$("#card-open, .cover-link").on("click",(function(e){e.preventDefault(),showCard()})),$(".close-card").on("click",(function(){return $("html").removeClass("is-card-open is-card-opened"),$(".close-card").removeClass("is-visible"),soundEffects&&windReverse.play(),closePage(),!1})),$(".card-nav li").each((function(e,a){var t=$(this).find("a"),o=t.attr("href"),i=t.data("slug");t.attr("href","#/"+i),t.data("file-url",o)})),portfolioKeyword=$("#portfolio-link").data("slug"),setActivePage(),$.address.change((function(){setActivePage();var e=giveDetailUrl();-1!==e?showProjectDetails(e):-1!==$.address.path().indexOf("/"+portfolioKeyword)&&porftolioSingleActive&&(hideProjectDetails(!0,!1),porftolioSingleJustClosed=!1,$(".card-content").is(":empty")&&setActivePage())}))}$(".search-toggle").on("click",(function(){$("html").toggleClass("is-search-toggled-on"),$(".header-search input").trigger("focus")})),FastClick.attach(document.body),$("a[href='#card']").on("click",(function(){return $("html, body").animate({scrollTop:0},800,"easeInOutExpo"),console.log("Yes"),!1})),"ontouchstart"in window||navigator.msMaxTouchPoints?$("html").addClass("touch"):$("html").addClass("no-touch"),$("html").removeClass("no-js"),$("html").addClass("ready"),setup()})),$(window).on("load",(function(){hideLoader(),$("html").addClass("loaded")}));