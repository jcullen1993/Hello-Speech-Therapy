<<<<<<< HEAD
"use strict";var userAgent=navigator.userAgent.toLowerCase(),initialDate=new Date(),$document=$(document),$window=$(window),$html=$("html"),isDesktop=$html.hasClass("desktop"),isFirefox=navigator.userAgent.toLowerCase().indexOf("firefox")>-1,isIE=userAgent.indexOf("msie")!=-1?parseInt(userAgent.split("msie")[1]):userAgent.indexOf("trident")!=-1?11:userAgent.indexOf("edge")!=-1?12:false,isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isTouch="ontouchstart" in window,onloadCaptchaCallback,plugins={pointerEvents:isIE<11?"js/pointer-events.min.js":false,smoothScroll:$html.hasClass("use--smoothscroll")?"js/smoothscroll.min.js":false,bootstrapTooltip:$("[data-toggle='tooltip']"),bootstrapModalDialog:$(".modal"),bootstrapTabs:$(".tabs-custom"),rdNavbar:$(".rd-navbar"),rdParallax:$(".rd-parallax"),rdGoogleMaps:$(".rd-google-map"),rdMailForm:$(".rd-mailform"),rdInputLabel:$(".form-label"),regula:$("[data-constraints]"),owl:$(".owl-carousel"),swiper:$(".swiper-slider"),search:$(".rd-search"),searchResults:$(".rd-search-results"),mfp:$("[data-lightbox]").not('[data-lightbox="gallery"] [data-lightbox]'),mfpGallery:$('[data-lightbox^="gallery"]'),statefulButton:$(".btn-stateful"),isotope:$(".isotope"),popover:$('[data-toggle="popover"]'),viewAnimate:$(".view-animate"),photoSwipeGallery:$("[data-photo-swipe-item]"),radio:$("input[type='radio']"),checkbox:$("input[type='checkbox']"),customToggle:$("[data-custom-toggle]"),counter:$(".counter"),progressLinear:$(".progress-linear"),circleProgress:$(".progress-bar-circle"),dateCountdown:$(".DateCountdown"),pageLoader:$("#page-loader"),flickrfeed:$(".flickr"),selectFilter:$("select"),rdAudioPlayer:$(".rd-audio"),rdVideoBG:$(".rd-video"),jPlayerInit:$(".jp-player-init"),customParallax:$(".custom-parallax"),slick:$(".slick-slider"),countDown:$(".countdown"),calendar:$(".rd-calendar"),bookingCalendar:$(".booking-calendar"),bootstrapDateTimePicker:$("[data-time-picker]"),facebookWidget:$("#fb-root"),twitterfeed:$(".twitter-timeline"),rdRange:$(".rd-range"),stepper:$("input[type='number']"),customWaypoints:$("[data-custom-scroll-to]"),scroller:$(".scroll-wrap"),captcha:$(".recaptcha")};$document.ready(function(){var p=window.xMode;function aa(d,c){var j=d.attr("data-"+c),i;if(!j){return undefined}i=j.match(/(px)|(%)|(vh)$/i);if(i.length){switch(i[0]){case"px":return parseFloat(j);case"vh":return $(window).height()*(parseFloat(j)/100);case"%":return d.width()*(parseFloat(j)/100)}}else{return undefined}}function ar(d){var c=$(d.slides[d.previousIndex]),j=$(d.slides[d.activeIndex]),i;c.find("video").each(function(){this.pause()});i=j.find("video");if(i.length){i.get(0).play()}}function w(d){var c=$(d.container),i=$(d.slides[d.activeIndex]);c.find("[data-caption-animate]").each(function(){var j=$(this);j.removeClass("animated").removeClass(j.attr("data-caption-animate")).addClass("not-animated")});i.find("[data-caption-animate]").each(function(){var k=$(this),j=k.attr("data-caption-delay");if(!p){setTimeout(function(){k.removeClass("not-animated").addClass(k.attr("data-caption-animate")).addClass("animated")},j?parseInt(j):0)}else{k.removeClass("not-animated")}})}function ax(j,o,d,i){var aN=window.scrollY||window.pageYOffset;if(i!=aN){i=aN;j.addClass("no-transition");j[0].style.transform="translate3d(0,"+-aN*(1-o)+"px,0)";j.height();j.removeClass("no-transition");if(j.attr("data-fade")==="true"){var aJ=j[0].getBoundingClientRect(),k=aJ.top*2+aN,s=d.outerHeight(),aL=d.offset().top+s/2,c=k+j.outerHeight()/2,aM=s/6,aK;if(aL+aM>c&&aL-aM<c){j[0].style.opacity=1}else{if(aL-aM<c){aK=1+((aL+aM-c)/s/3*5)}else{aK=1-((aL-aM-c)/s/3*5)}j[0].style.opacity=aK<0?0:aK>1?1:aK.toFixed(2)}}}requestAnimationFrame(function(){ax(j,o,d,i)})}function O(d){var c=$(d);if(!p){c.on("click",function(i){i.preventDefault();$("body, html").stop().animate({scrollTop:$("#"+$(this).attr("data-custom-scroll-to")).offset().top},1000,function(){$window.trigger("resize")})})}}function aE(d){if(p){return}var c=$(d.container),i=$(d.slides[d.activeIndex]);c.find(".custom-parallax").each(function(){var j=$(this);am=$(".custom-parallax-wrap"),X=true,n;if(X&&!isIE&&!isMobile){if(n=j.attr("data-speed")){ax(j,n,am,false)}}});i.find(".custom-parallax").each(function(){var j=$(this);am=$(".custom-parallax-wrap"),X=true,n;if(X&&!isIE&&!isMobile){if(n=j.attr("data-speed")){ax(j,n,am,false)}}})}function af(d){var c=$(d.container),i=$(d.slides[d.activeIndex]);c.find("[data-custom-scroll-to]").each(function(){var j=$(this);O(j)});i.find("[data-custom-scroll-to]").each(function(){var j=$(this);O(j)})}function J(aL){var aK=["-","-xs-","-sm-","-md-","-lg-","-xl-"],i=[0,480,768,992,1200,1600],aJ={},o,d;for(o=0;o<i.length;o++){aJ[i[o]]={};for(d=o;d>=-1;d--){if(!aJ[i[o]]["items"]&&aL.attr("data"+aK[d]+"items")){aJ[i[o]]["items"]=d<0?1:parseInt(aL.attr("data"+aK[d]+"items"))}if(!aJ[i[o]]["stagePadding"]&&aJ[i[o]]["stagePadding"]!==0&&aL.attr("data"+aK[d]+"stage-padding")){aJ[i[o]]["stagePadding"]=d<0?0:parseInt(aL.attr("data"+aK[d]+"stage-padding"))}if(!aJ[i[o]]["margin"]&&aJ[i[o]]["margin"]!==0&&aL.attr("data"+aK[d]+"margin")){aJ[i[o]]["margin"]=d<0?30:parseInt(aL.attr("data"+aK[d]+"margin"))}}}if(aL.attr("data-dots-custom")){aL.on("initialized.owl.carousel",function(c){var k=$(c.currentTarget),aM=$(k.attr("data-dots-custom")),j=0;if(k.attr("data-active")){j=parseInt(k.attr("data-active"))}k.trigger("to.owl.carousel",[j,300,true]);aM.find("[data-owl-item='"+j+"']").addClass("active");aM.find("[data-owl-item]").on("click",function(aN){aN.preventDefault();k.trigger("to.owl.carousel",[parseInt(this.getAttribute("data-owl-item")),300,true])});k.on("translate.owl.carousel",function(aN){aM.find(".active").removeClass("active");aM.find("[data-owl-item='"+aN.item.index+"']").addClass("active")})})}if(typeof(aL.attr("data-numbering"))!=="undefined"){var s=$(aL.attr("data-numbering"));aL.on("initialized.owl.carousel changed.owl.carousel",function(c){return function(j){if(!j.namespace){return}c.find(".numbering-current").text((j.item.index+1)%j.item.count+1);c.find(".numbering-count").text(j.item.count)}}(s))}aL.owlCarousel({autoplay:aL.attr("data-autoplay")==="true",loop:p?false:aL.attr("data-loop")!=="false",items:1,dotsContainer:aL.attr("data-pagination-class")||false,navContainer:aL.attr("data-navigation-class")||false,mouseDrag:p?false:aL.attr("data-mouse-drag")!=="false",nav:aL.attr("data-nav")==="true",dots:aL.attr("data-dots")==="true",dotsEach:aL.attr("data-dots-each")?parseInt(aL.attr("data-dots-each")):false,animateIn:aL.attr("data-animation-in")?aL.attr("data-animation-in"):false,animateOut:aL.attr("data-animation-out")?aL.attr("data-animation-out"):false,responsive:aJ,navText:$.parseJSON(aL.attr("data-nav-text"))||[],navClass:$.parseJSON(aL.attr("data-nav-class"))||["owl-prev","owl-next"]})}function ay(c){var d=$(window);return c.offset().top+c.outerHeight()>=d.scrollTop()&&c.offset().top<=d.scrollTop()+d.height()}function l(c,d){var i=jQuery(window);i.on("load scroll",function(){if((!c.hasClass("lazy-loaded")&&(ay(c)))){d.call();c.addClass("lazy-loaded")}})}if(plugins.pageLoader.length>0){$window.on("load",function(){var c=setTimeout(function(){plugins.pageLoader.addClass("loaded");$window.trigger("resize")},10)})}if(plugins.smoothScroll){$.getScript(plugins.smoothScroll)}function D(o){var k=[];for(var j=0;j<o.length;j++){var s=o[j],c=$(s).data();k[j]={};for(var d in c){k[j][d.replace("jp","").toLowerCase()]=c[d]}}return k}function aw(c,i,d){return new jPlayerPlaylist({jPlayer:i.getElementsByClassName("jp-jplayer")[0],cssSelectorAncestor:".jp-audio-"+c},d,{playlistOptions:{enableRemoveControls:false},supplied:"ogv, m4v, oga, mp3",useStateClassSkin:true,volume:0.4})}if(plugins.jPlayerInit.length){$html.addClass("ontouchstart" in window||"onmsgesturechange" in window?"touch":"no-touch");$.each(plugins.jPlayerInit,function(d,j){var i=D($(j).find(".jp-player-list .jp-player-list-item")),k=aw(d,j,i);if($(j).data("jp-player-name")){var c=$('[data-jp-playlist-relative-to="'+$(j).data("jp-player-name")+'"]'),o=c.find("[data-jp-playlist-item]");o.on("click",c.data("jp-playlist-play-on"),function(aJ){var s=D(o),aK=$(aJ.delegateTarget);if(!JSON.stringify(k.playlist)===JSON.stringify(s)||!k.playlist.length){k.setPlaylist(s)}if(!aK.hasClass("playing")){k.pause();if(aK.hasClass("last-played")){k.play()}else{k.play(o.index(aK))}o.removeClass("playing last-played");aK.addClass("playing")}else{o.removeClass("playing last-played");aK.addClass("last-played");k.pause()}});$(k.cssSelector.jPlayer).bind($.jPlayer.event.play,function(aK){var aJ=function(aN,aM){var aL=o.index(o.filter(aN));if(aL!==-1){if(o.eq(aL+aM).length!==0){o.eq(aL).removeClass("play-next play-prev playing last-played").end().eq(aL+aM).addClass("playing")}}};aJ(".play-next",+1);aJ(".play-prev",-1);var s=o.filter(".last-played");if(s.length){s.addClass("playing").removeClass("last-played play-next")}});$(k.cssSelector.jPlayer).bind($.jPlayer.event.pause,function(s){o.filter(".playing").addClass("last-played").removeClass("playing");$(k.cssSelector.cssSelectorAncestor).addClass("jp-state-visible")});$(j).find(".jp-next").on("click",function(s){o.filter(".playing, .last-played").addClass("play-next")});$(j).find(".jp-previous").on("click",function(s){o.filter(".playing, .last-played").addClass("play-prev")})}})}if(plugins.owl.length){var Q;for(Q=0;Q<plugins.owl.length;Q++){J($(plugins.owl[Q]))}}function ai(c){$("#"+c.live).removeClass("cleared").html();c.current++;c.spin.addClass("loading");$.get(e,{s:decodeURI(c.term),liveSearch:c.live,dataType:"html",liveCount:c.liveCount,filter:c.filter,template:c.template},function(i){c.processed++;var d=$("#"+c.live);if(c.processed==c.current&&!d.hasClass("cleared")){d.find("> #search-results").removeClass("active");d.html(i);setTimeout(function(){d.find("> #search-results").addClass("active")},50)}c.spin.parents(".rd-search").find(".input-group-addon").removeClass("loading")})}function at(j){for(var d=0;d<j.length;d++){var k=$(j[d]),c;k.addClass("form-control-has-validation").after("<span class='form-validation'></span>");c=k.parent().find(".form-validation");if(c.is(":last-child")){k.addClass("form-control-last-child")}}j.on("input change propertychange blur",function(s){var o=$(this),i;if(s.type!="blur"){if(!o.parent().hasClass("has-error")){return}}if(o.parents(".rd-mailform").hasClass("success")){return}if((i=o.regula("validate")).length){for(d=0;d<i.length;d++){o.siblings(".form-validation").text(i[d].message).parent().addClass("has-error")}}else{o.siblings(".form-validation").text("").parent().removeClass("has-error")}}).regula("bind")}function b(i,c){var d,k=0;if(i.length){for(P=0;P<i.length;P++){var j=$(i[P]);if((d=j.regula("validate")).length){for(N=0;N<d.length;N++){k++;j.siblings(".form-validation").text(d[N].message).parent().addClass("has-error")}}else{j.siblings(".form-validation").text("").parent().removeClass("has-error")}}if(c){if(c.length){return aC(c)&&k==0}}return k==0}return true}function aC(d){var c=d.find(".g-recaptcha-response").val();if(c==""){d.siblings(".form-validation").html("Please, prove that you are not robot.").addClass("active");d.closest(".form-group").addClass("has-error");d.bind("propertychange",function(){var j=$(this),i=j.find(".g-recaptcha-response").val();if(i!=""){j.closest(".form-group").removeClass("has-error");j.siblings(".form-validation").removeClass("active").html("");j.unbind("propertychange")}});return false}return true}onloadCaptchaCallback=function(){for(Q=0;Q<plugins.captcha.length;Q++){var c=$(plugins.captcha[Q]);grecaptcha.render(c.attr("id"),{sitekey:c.attr("data-sitekey"),size:c.attr("data-size")?c.attr("data-size"):"normal",theme:c.attr("data-theme")?c.attr("data-theme"):"light",callback:function(d){$(".recaptcha").trigger("propertychange")}});c.after("<span class='form-validation'></span>")}};function au(c){if(window.innerWidth<599){plugins.bootstrapTooltip.tooltip("destroy");plugins.bootstrapTooltip.tooltip({placement:"bottom"})}else{plugins.bootstrapTooltip.tooltip("destroy");plugins.bootstrapTooltip.tooltipPlacement;plugins.bootstrapTooltip.tooltip()}}var M=$("#copyright-year");if(M.length){M.text(initialDate.getFullYear())}if(navigator.platform.match(/(Mac)/i)){$html.addClass("mac-os")}if(isFirefox){$html.addClass("firefox")}if(isIE){if(isIE<10){$html.addClass("lt-ie-10")}if(isIE<11){if(plugins.pointerEvents){$.getScript(plugins.pointerEvents).done(function(){$html.addClass("ie-10");PointerEventsPolyfill.initialize({})})}}if(isIE===11){$("html").addClass("ie-11")}if(isIE===12){$("html").addClass("ie-edge")}}if(plugins.bootstrapTooltip.length){var a=plugins.bootstrapTooltip.attr("data-placement");au(a);$(window).on("resize orientationchange",function(){au(a)})}if(plugins.bootstrapModalDialog.length>0){var Q=0;for(Q=0;Q<plugins.bootstrapModalDialog.length;Q++){var g=$(plugins.bootstrapModalDialog[Q]);g.on("hidden.bs.modal",$.proxy(function(){var c=$(this),i=c.find("video"),d=c.find("iframe");if(i.length){i[0].pause()}if(d.length){var j=d.attr("src");d.attr("src","").attr("src",j)}},g))}}if(plugins.rdGoogleMaps.length){var Q;$.getScript("//maps.google.com/maps/api/js?key=AIzaSyAwH60q5rWrS8bXwpkZwZwhw9Bw0pqKTZM&sensor=false&libraries=geometry,places&v=3.7",function(){var d=document.getElementsByTagName("head")[0],c=d.insertBefore;d.insertBefore=function(k,j){if(k.href&&k.href.indexOf("//fonts.googleapis.com/css?family=Roboto")!=-1||k.innerHTML.indexOf("gm-style")!=-1){return}c.call(d,k,j)};for(Q=0;Q<plugins.rdGoogleMaps.length;Q++){var i=$(plugins.rdGoogleMaps[Q]);l(i,$.proxy(function(){var k=$(this),j=k.attr("data-styles");k.googleMap({styles:j?JSON.parse(j):[],onInit:function(aM){var aJ=$("#rd-google-map-address");if(aJ.length){var s=aJ;var aL=new google.maps.Geocoder();var o=new google.maps.Marker({map:aM,icon:"images/gmap_marker.png",});var aK=new google.maps.places.Autocomplete(aJ[0]);aK.bindTo("bounds",aM);aJ.attr("placeholder","");aJ.on("change",function(){$("#rd-google-map-address-submit").trigger("click")});aJ.on("keydown",function(aN){if(aN.keyCode==13){$("#rd-google-map-address-submit").trigger("click")}});$("#rd-google-map-address-submit").on("click",function(aO){aO.preventDefault();var aN=s.val();aL.geocode({address:aN},function(aQ,aP){if(aP==google.maps.GeocoderStatus.OK){var aS=aQ[0].geometry.location.lat();var aR=aQ[0].geometry.location.lng();aM.setCenter(new google.maps.LatLng(parseFloat(aS),parseFloat(aR)));o.setPosition(new google.maps.LatLng(parseFloat(aS),parseFloat(aR)))}})})}}})},i))}})}if(plugins.radio.length){var Q;for(Q=0;Q<plugins.radio.length;Q++){var H=$(plugins.radio[Q]);H.addClass("radio-custom").after("<span class='radio-custom-dummy'></span>")}}if(plugins.checkbox.length){var Q;for(Q=0;Q<plugins.checkbox.length;Q++){var H=$(plugins.checkbox[Q]);H.addClass("checkbox-custom").after("<span class='checkbox-custom-dummy'></span>")}}if(plugins.popover.length){if(window.innerWidth<767){plugins.popover.attr("data-placement","bottom");plugins.popover.popover()}else{plugins.popover.popover()}}if(plugins.statefulButton.length){$(plugins.statefulButton).on("click",function(){var c=$(this).button("loading");setTimeout(function(){c.button("reset")},2000)})}if(isDesktop&&!p){$().UItoTop({easingType:"easeOutQuart",containerClass:"ui-to-top"})}if(plugins.rdNavbar.length){plugins.rdNavbar.RDNavbar({stickUpClone:(plugins.rdNavbar.attr("data-stick-up-clone")&&!p)?plugins.rdNavbar.attr("data-stick-up-clone")==="true":false,responsive:{0:{stickUp:(!p)?plugins.rdNavbar.attr("data-stick-up")==="true":false},768:{stickUp:(!p)?plugins.rdNavbar.attr("data-sm-stick-up")==="true":false},992:{stickUp:(!p)?plugins.rdNavbar.attr("data-md-stick-up")==="true":false},1200:{stickUp:(!p)?plugins.rdNavbar.attr("data-lg-stick-up")==="true":false}},callbacks:{onStuck:function(){var c=this.$element.find(".rd-search input");if(c){c.val("").trigger("propertychange")}},onUnstuck:function(){if(this.$clone===null){return}var c=this.$clone.find(".rd-search input");if(c){c.val("").trigger("propertychange");c.blur()}}}});if(plugins.rdNavbar.attr("data-body-class")){document.body.className+=" "+plugins.rdNavbar.attr("data-body-class")}}if(plugins.viewAnimate.length){var Q;for(Q=0;Q<plugins.viewAnimate.length;Q++){var aI=$(plugins.viewAnimate[Q]).not(".active");$document.on("scroll",$.proxy(function(){if(ay(this)){this.addClass("active")}},aI)).trigger("scroll")}}if(plugins.swiper.length){var Q;for(Q=0;Q<plugins.swiper.length;Q++){var L=$(plugins.swiper[Q]);var u=L.find(".swiper-pagination"),ah=L.find(".swiper-button-next"),G=L.find(".swiper-button-prev"),ab=L.find(".swiper-scrollbar"),X=L.parents(".rd-parallax").length,an=L.find(".swiper-slide"),aq=false;for(P=0;P<an.length;P++){var H=$(an[P]),A;if(A=H.attr("data-slide-bg")){H.css({"background-image":"url("+A+")","background-size":"cover"})}}an.end().find("[data-caption-animate]").addClass("not-animated").end().swiper({autoplay:p?null:L.attr("data-autoplay")?L.attr("data-autoplay")==="false"?undefined:L.attr("data-autoplay"):5000,direction:L.attr("data-direction")?L.attr("data-direction"):"horizontal",effect:L.attr("data-slide-effect")?L.attr("data-slide-effect"):"slide",speed:L.attr("data-slide-speed")?L.attr("data-slide-speed"):600,keyboardControl:L.attr("data-keyboard")==="true",mousewheelControl:L.attr("data-mousewheel")==="true",mousewheelReleaseOnEdges:L.attr("data-mousewheel-release")==="true",nextButton:ah.length?ah.get(0):null,prevButton:G.length?G.get(0):null,pagination:u.length?u.get(0):null,paginationClickable:u.length?u.attr("data-clickable")!=="false":false,paginationBulletRender:u.length?u.attr("data-index-bullet")==="true"?function(c,d){return'<span class="'+d+'">'+(c+1)+"</span>"}:null:null,scrollbar:ab.length?ab.get(0):null,scrollbarDraggable:ab.length?ab.attr("data-draggable")!=="false":true,scrollbarHide:ab.length?ab.attr("data-draggable")==="false":false,loop:p?false:L.attr("data-loop")!=="false",simulateTouch:L.attr("data-simulate-touch")&&!p?L.attr("data-simulate-touch")==="true":false,onTransitionStart:function(c){ar(c)},onTransitionEnd:function(c){w(c)},onInit:function(c){ar(c);w(c);aE(c);af(c);$(window).on("resize",function(){c.update(true)})}});$(window).on("resize",function(){var c=aa(L,"min-height"),d=aa(L,"height");if(d){L.css("height",c?c>d?c:d:d)}}).trigger("resize")}}if(plugins.dateCountdown.length){var Q;for(Q=0;Q<plugins.dateCountdown.length;Q++){var Y=$(plugins.dateCountdown[Q]),V={Days:{text:"Days",show:true,color:Y.attr("data-color")?Y.attr("data-color"):"#f9f9f9"},Hours:{text:"Hours",show:true,color:Y.attr("data-color")?Y.attr("data-color"):"#f9f9f9"},Minutes:{text:"Minutes",show:true,color:Y.attr("data-color")?Y.attr("data-color"):"#f9f9f9"},Seconds:{text:"Seconds",show:true,color:Y.attr("data-color")?Y.attr("data-color"):"#f9f9f9"}};Y.TimeCircles({color:Y.attr("data-color")?Y.attr("data-color"):"rgba(247, 247, 247, 1)",animation:"smooth",bg_width:Y.attr("data-bg-width")?Y.attr("data-bg-width"):0.6,circle_bg_color:Y.attr("data-bg")?Y.attr("data-bg"):"rgba(0, 0, 0, 1)",fg_width:Y.attr("data-width")?Y.attr("data-width"):0.03});$(window).on("load resize orientationchange",function(){if(window.innerWidth<479){Y.TimeCircles({time:{Days:{text:"Days",show:true,color:Y.attr("data-color")?Y.attr("data-color"):"#f9f9f9"},Hours:{text:"Hours",show:true,color:Y.attr("data-color")?Y.attr("data-color"):"#f9f9f9"},Minutes:{text:"Minutes",show:true,color:Y.attr("data-color")?Y.attr("data-color"):"#f9f9f9"},Seconds:{text:"Seconds",show:false,color:Y.attr("data-color")?Y.attr("data-color"):"#f9f9f9"}}}).rebuild()}else{if(window.innerWidth<767){Y.TimeCircles({time:{Days:{text:"Days",show:true,color:Y.attr("data-color")?Y.attr("data-color"):"#f9f9f9"},Hours:{text:"Hours",show:true,color:Y.attr("data-color")?Y.attr("data-color"):"#f9f9f9"},Minutes:{text:"Minutes",show:true,color:Y.attr("data-color")?Y.attr("data-color"):"#f9f9f9"},Seconds:{text:"",show:false,color:Y.attr("data-color")?Y.attr("data-color"):"#f9f9f9"}}}).rebuild()}else{Y.TimeCircles({time:V}).rebuild()}}})}}if(plugins.search.length||plugins.searchResults){var e="bat/rd-search.php";var ao='<h6 class="search_title"><a target="_top" href="#{href}" class="search_link">#{title}</a></h6><p class="match">#{href}</p><p>...#{token}...</p>';var aF="*.html";if(plugins.search.length){for(Q=0;Q<plugins.search.length;Q++){var y=$(plugins.search[Q]),ae={element:y,filter:(y.attr("data-search-filter"))?y.attr("data-search-filter"):aF,template:(y.attr("data-search-template"))?y.attr("data-search-template"):ao,live:(y.attr("data-search-live"))?y.attr("data-search-live"):false,liveCount:(y.attr("data-search-live-count"))?parseInt(y.attr("data-search-live")):4,current:0,processed:0,timer:{}};if($(".rd-navbar-search-toggle").length){var ac=$(".rd-navbar-search-toggle");ac.on("click",function(){if(!($(this).hasClass("active"))){y.find("input").val("").trigger("propertychange")}})}if(ae.live){var r=false;y.find("input").on("keyup input propertychange",$.proxy(function(){this.term=this.element.find("input").val().trim();this.spin=this.element.find(".input-group-addon");clearTimeout(this.timer);if(this.term.length>2){this.timer=setTimeout(ai(this),200);if(r==false){r=true;$("body").on("click",function(c){if($(c.toElement).parents(".rd-search").length==0){$("#rd-search-results-live").addClass("cleared").html("")}})}}else{if(this.term.length==0){$("#"+this.live).addClass("cleared").html("")}}},ae,this))}y.submit($.proxy(function(){$("<input />").attr("type","hidden").attr("name","filter").attr("value",this.filter).appendTo(this.element);return true},ae,this))}}if(plugins.searchResults.length){var v=/\?.*s=([^&]+)\&filter=([^&]+)/g;var ap=v.exec(location.search);if(ap!=null){$.get(e,{s:decodeURI(ap[1]),dataType:"html",filter:ap[2],template:ao,live:""},function(c){plugins.searchResults.html(c)})}}}if(plugins.isotope.length){var Q,P,C=[];for(Q=0;Q<plugins.isotope.length;Q++){var K=plugins.isotope[Q],m=$(K).closest(".isotope-wrap").find("[data-isotope-filter]"),R;R=new Isotope(K,{itemSelector:".isotope-item",layoutMode:K.getAttribute("data-isotope-layout")?K.getAttribute("data-isotope-layout"):"masonry",filter:"*",masonry:{columnWidth:0.42}});C.push(R);m.on("click",function(j){j.preventDefault();var d=$(this),i=$('.isotope[data-isotope-group="'+this.getAttribute("data-isotope-group")+'"]'),c=d.closest(".isotope-filters");c.find(".active").removeClass("active");d.addClass("active");i.isotope({itemSelector:".isotope-item",layoutMode:i.attr("data-isotope-layout")?i.attr("data-isotope-layout"):"masonry",filter:this.getAttribute("data-isotope-filter")=="*"?"*":'[data-filter*="'+this.getAttribute("data-isotope-filter")+'"]',masonry:{columnWidth:0.42}});$window.trigger("resize")}).eq(0).trigger("click")}$(window).on("load",function(){setTimeout(function(){var c;for(c=0;c<C.length;c++){C[c].element.className+=" isotope--loaded";C[c].layout()}},600);setTimeout(function(){$window.trigger("resize")},800)})}if(isDesktop&&$html.hasClass("wow-animation")&&$(".wow").length){new WOW().init()}if(plugins.bootstrapTabs.length){var Q;for(Q=0;Q<plugins.bootstrapTabs.length;Q++){var B=$(plugins.bootstrapTabs[Q]);if(B.find(".owl-carousel").length){var U=B.find(".tab-content .tab-pane.active .owl-carousel");var f=p?1500:300;J(U);B.find(".tabs-custom-list > li > a").on("click",$.proxy(function(){var c=$(this);setTimeout(function(){var d=c.find(".tab-content .tab-pane.active .owl-carousel").not(".owl-initialised");if(d.length){for(var i=0;i<d.length;i++){var k=$(d[i]);J(k);k.addClass("owl-initialised")}}},f)},B))}if(B.find(".slick-slider").length){B.find(".tabs-custom-list > li > a").on("click",$.proxy(function(){var c=$(this);var d=p?1500:300;setTimeout(function(){c.find(".tab-content .tab-pane.active .slick-slider").slick("setPosition")},d)},B))}}}if(plugins.rdInputLabel.length){plugins.rdInputLabel.RDInputLabel()}if(plugins.regula.length){at(plugins.regula)}if(plugins.captcha.length){var Q;$.getScript("//www.google.com/recaptcha/api.js?onload=onloadCaptchaCallback&render=explicit&hl=en")}if(plugins.rdMailForm.length){var Q,P,N,I={MF000:"Successfully sent!",MF001:"Recipients are not set!",MF002:"Form will not work locally!",MF003:"Please, define email field in your form!",MF004:"Please, define type of your form!",MF254:"Something went wrong with PHPMailer!",MF255:"Aw, snap! Something went wrong."};for(Q=0;Q<plugins.rdMailForm.length;Q++){var E=$(plugins.rdMailForm[Q]),aH=false;E.attr("novalidate","novalidate").ajaxForm({data:{"form-type":E.attr("data-form-type")||"contact",counter:Q},beforeSubmit:function(){var s=$(plugins.rdMailForm[this.extraData.counter]),i=s.find("[data-constraints]"),k=$("#"+s.attr("data-form-output")),o=s.find(".recaptcha"),d=true;k.removeClass("active error success");if(b(i,o)){if(o.length){var c=o.find(".g-recaptcha-response").val(),j={CPT001:'Please, setup you "site key" and "secret key" of reCaptcha',CPT002:"Something wrong with google reCaptcha"};aH=true;$.ajax({method:"POST",url:"bat/reCaptcha.php",data:{"g-recaptcha-response":c},async:false}).done(function(aJ){if(aJ!="CPT000"){if(k.hasClass("snackbars")){k.html('<p><span class="icon text-middle linear-icon-check icon-xxs"></span><span>'+j[aJ]+"</span></p>");setTimeout(function(){k.removeClass("active")},3500);d=false}else{k.html(j[aJ])}k.addClass("active")}})}if(!d){return false}s.addClass("form-in-process");if(k.hasClass("snackbars")){k.html('<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>');k.addClass("active")}}else{return false}},error:function(c){var i=$(plugins.rdMailForm[this.extraData.counter]),d=$("#"+$(plugins.rdMailForm[this.extraData.counter]).attr("data-form-output"));d.text(I[c]);i.removeClass("form-in-process");if(aH){grecaptcha.reset()}},success:function(c){var i=$(plugins.rdMailForm[this.extraData.counter]),d=$("#"+i.attr("data-form-output"));i.addClass("success").removeClass("form-in-process");if(aH){grecaptcha.reset()}c=c.length==5?c:"MF255";d.text(I[c]);if(c==="MF000"){if(d.hasClass("snackbars")){d.html('<p><span class="icon text-middle linear-icon-check icon-xxs"></span><span>'+I[c]+"</span></p>")}else{d.addClass("active success")}}else{if(d.hasClass("snackbars")){d.html(' <p class="snackbars-left"><span class="icon icon-xxs linear-icon-warning text-middle"></span><span>'+I[c]+"</span></p>")}else{d.addClass("active error")}}i.clearForm();i.find("input, textarea").blur();setTimeout(function(){d.removeClass("active error success");i.removeClass("success")},3500)}})}}if(plugins.photoSwipeGallery.length&&!p){$document.delegate("[data-photo-swipe-item]","click",function(c){c.preventDefault();var aJ=$(this),j=aJ.parents("[data-photo-swipe-gallery]").find("a[data-photo-swipe-item]"),k=document.querySelectorAll(".pswp")[0],i={},d=[],aK,s=0,o;if(j.length==0){j=aJ}j.each(function(){var aM=$(this),aO=aM.attr("href"),aN=aM.attr("data-size").split("x"),aL;if(aM.is(":visible")){if(!i[aO]){aL={src:aO,w:parseInt(aN[0],10),h:parseInt(aN[1],10),el:aM};i[aO]={item:aL,index:s};d.push(aL);s++}}});aK={index:i[aJ.attr("href")].index,getThumbBoundsFn:function(aL){var aM=d[aL].el,aN=aM.offset();return{x:aN.left,y:aN.top,w:aM.width()}}};o=new PhotoSwipe(k,PhotoSwipeUI_Default,d,aK);o.init()})}if(plugins.customToggle.length){var Q;for(Q=0;Q<plugins.customToggle.length;Q++){var H=$(plugins.customToggle[Q]);H.on("click",$.proxy(function(d){d.preventDefault();var c=$(this);$(c.attr("data-custom-toggle")).add(this).toggleClass("active")},H));if(H.attr("data-custom-toggle-hide-on-blur")==="true"){$("body").on("click",H,function(c){if(c.target!==c.data[0]&&$(c.data.attr("data-custom-toggle")).find($(c.target)).length&&c.data.find($(c.target)).length==0){$(c.data.attr("data-custom-toggle")).add(c.data[0]).removeClass("active")}})}if(H.attr("data-custom-toggle-disable-on-blur")==="true"){$("body").on("click",H,function(c){if(c.target!==c.data[0]&&$(c.data.attr("data-custom-toggle")).find($(c.target)).length==0&&c.data.find($(c.target)).length==0){$(c.data.attr("data-custom-toggle")).add(c.data[0]).removeClass("active")}})}}}if(plugins.counter.length){var Q;for(Q=0;Q<plugins.counter.length;Q++){var h=$(plugins.counter[Q]).not(".animated");$document.on("scroll",$.proxy(function(){var c=this;if((!c.hasClass("animated"))&&(ay(c))){c.countTo({refreshInterval:40,from:0,to:parseInt(c.text(),10),speed:c.attr("data-speed")||1000});c.addClass("animated")}},h)).trigger("scroll")}}if(plugins.circleProgress.length){var Q;for(Q=0;Q<plugins.circleProgress.length;Q++){(function(){var d=$.circleProgress.defaults,c=d.drawEmptyArc;d.emptyThickness=5;d.drawEmptyArc=function(j){var k=this.getThickness,i=this.getThickness(),o=this.emptyThickness||_oldThickness.call(this),aJ=this.radius,s=(i-o)/2;this.getThickness=function(){return o};this.radius=aJ-s;this.ctx.save();this.ctx.translate(s,s);c.call(this,j);this.ctx.restore();this.getThickness=k;this.radius=aJ}})();var aA=$(plugins.circleProgress[Q]);$document.on("scroll",$.proxy(function(){var d=$(this);if(!d.hasClass("animated")&&ay(d)){var c=d.attr("data-gradient").split(",");d.circleProgress({value:d.attr("data-value"),size:d.attr("data-size")?d.attr("data-size"):175,fill:{gradient:c,gradientAngle:Math.PI/4},startAngle:-Math.PI/4*2,emptyFill:d.attr("data-empty-fill")?d.attr("data-empty-fill"):"rgb(245,245,245)",thickness:d.attr("data-thickness")?parseInt(d.attr("data-thickness")):10,emptyThickness:1,}).on("circle-animation-progress",function(k,j,i){$(this).find("span").text(String(i.toFixed(2)).replace("0.","").replace("1.","1"))});d.addClass("animated")}},aA)).trigger("scroll")}}if(plugins.progressLinear.length){for(Q=0;Q<plugins.progressLinear.length;Q++){var aG=$(plugins.progressLinear[Q]);$window.on("scroll load",$.proxy(function(){var d=$(this);if(!d.hasClass("animated-first")&&ay(d)){var c=parseInt($(this).find(".progress-value").text(),10);d.find(".progress-bar-linear").css({width:c+"%"});d.find(".progress-value").countTo({refreshInterval:40,from:0,to:c,speed:500});d.addClass("animated-first")}},aG))}}if(plugins.rdParallax.length){var Q;if(!p){$.RDParallax()}else{for(Q=0;Q<plugins.rdParallax.length;Q++){var X=$(plugins.rdParallax[Q]);var Z=X.find(".rd-parallax-layer[data-type=media]").first().attr("data-url");X.css({"background-image":"url("+Z+")","background-attachment":"fixed","background-size":"cover"})}}if(!isIE&&!isMobile&&!p){$(window).on("scroll",function(){for(Q=0;Q<plugins.rdParallax.length;Q++){var c=$(plugins.rdParallax[Q]);if(ay(c)){c.find(".rd-parallax-inner").css("position","fixed")}else{c.find(".rd-parallax-inner").css("position","absolute")}}})}$("a[href='#'], a[href^='#']").on("click",function(c){setTimeout(function(){$(window).trigger("resize")},300)})}if(plugins.customParallax.length&&!p){for(var N=0;N<plugins.customParallax.length;N++){var H=$(plugins.customParallax[N]),am=$(".custom-parallax-wrap"),X=true,n;if(X&&!isIE&&!isMobile){if(n=H.attr("data-speed")){ax(H,n,am,false)}}}}if(plugins.selectFilter.length){var Q;for(Q=0;Q<plugins.selectFilter.length;Q++){var aB=$(plugins.selectFilter[Q]);aB.select2({theme:"bootstrap"}).next().addClass(aB.attr("class").match(/(input-sm)|(input-lg)|($)/i).toString().replace(new RegExp(",","g")," "))}}if(plugins.flickrfeed.length>0){var Q;for(Q=0;Q<plugins.flickrfeed.length;Q++){var al=$(plugins.flickrfeed[Q]);al.RDFlickr({callback:function(){var c=al.find("[data-photo-swipe-item]");if(c.length&&!p){for(var d=0;d<c.length;d++){var i=new Image();i.setAttribute("data-index",d);i.onload=function(){c[this.getAttribute("data-index")].setAttribute("data-size",this.naturalWidth+"x"+this.naturalHeight)};i.src=c[d].getAttribute("href")}}}});setTimeout(function(){var c=al.find("[data-photo-swipe-item]");if(c.length&&p){for(var d=0;d<c.length;d++){c[d].setAttribute("href","#");c[d].addEventListener("click",function(i){i.preventDefault();return false})}}},350)}}if(plugins.rdVideoBG.length){var Q;for(Q=0;Q<plugins.rdVideoBG.length;Q++){var ag=$(plugins.rdVideoBG[Q]);ag.RDVideo({})}}if(plugins.rdAudioPlayer.length&&!p){var Q;for(Q=0;Q<plugins.rdAudioPlayer.length;Q++){$(plugins.rdAudioPlayer[Q]).RDAudio()}}if(plugins.mfp.length>0||plugins.mfpGallery.length>0&&p!="designMode"){if(plugins.mfp.length){for(Q=0;Q<plugins.mfp.length;Q++){var aj=plugins.mfp[Q];$(aj).magnificPopup({type:aj.getAttribute("data-lightbox")})}}if(plugins.mfpGallery.length){for(Q=0;Q<plugins.mfpGallery.length;Q++){var F=$(plugins.mfpGallery[Q]).find("[data-lightbox]");for(var T=0;T<F.length;T++){$(F).addClass("mfp-"+$(F).attr("data-lightbox"))}F.end().magnificPopup({delegate:"[data-lightbox]",type:"image",gallery:{enabled:true}})}}}if(plugins.slick.length){var Q;for(Q=0;Q<plugins.slick.length;Q++){var q=$(plugins.slick[Q]);q.slick({slidesToScroll:parseInt(q.attr("data-slide-to-scroll"))||1,asNavFor:q.attr("data-for")||false,dots:q.attr("data-dots")=="true",infinite:p?false:q.attr("data-loop")=="true",focusOnSelect:true,arrows:q.attr("data-arrows")=="true",swipe:q.attr("data-swipe")=="true",autoplay:q.attr("data-autoplay")=="true",vertical:q.attr("data-vertical")=="true",centerMode:q.attr("data-center-mode")=="true",centerPadding:q.attr("data-center-padding")?q.attr("data-center-padding"):"0.50",mobileFirst:true,responsive:[{breakpoint:0,settings:{slidesToShow:parseInt(q.attr("data-items"))||1,}},{breakpoint:479,settings:{slidesToShow:parseInt(q.attr("data-xs-items"))||1,}},{breakpoint:767,settings:{slidesToShow:parseInt(q.attr("data-sm-items"))||1,}},{breakpoint:991,settings:{slidesToShow:parseInt(q.attr("data-md-items"))||1,}},{breakpoint:1199,settings:{slidesToShow:parseInt(q.attr("data-lg-items"))||1,swipe:false}}]}).on("afterChange",function(d,c,o,k){var j=$(this),i=j.attr("data-child");if(i){$(i+" .slick-slide").removeClass("slick-current");$(i+" .slick-slide").eq(o).addClass("slick-current")}})}}if(plugins.calendar.length){var Q;for(Q=0;Q<plugins.calendar.length;Q++){var aD=$(plugins.calendar[Q]);aD.rdCalendar({days:aD.attr("data-days")?aD.attr("data-days").split(/\s?,\s?/i):["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],month:aD.attr("data-months")?aD.attr("data-months").split(/\s?,\s?/i):["January","February","March","April","May","June","July","August","September","October","November","December"]})}}if(plugins.bookingCalendar.length){var Q;for(Q=0;Q<plugins.bookingCalendar.length;Q++){var aD=$(plugins.bookingCalendar[Q]);aD.rdCalendar({days:aD.attr("data-days")?aD.attr("data-days").split(/\s?,\s?/i):["S","M","T","W","T","F","S"],month:aD.attr("data-months")?aD.attr("data-months").split(/\s?,\s?/i):["January","February","March","April","May","June","July","August","September","October","November","December"]});var ad=$(".rdc-table_has-events");for(Q=0;Q<ad.length;Q++){var H=$(ad[Q]);H.on("click",Q,function(j){j.preventDefault();j.stopPropagation();$(this).toggleClass("opened");var i=$(".rdc-table_events"),d=i.outerHeight(),c=$(this).children(".rdc-table_events"),o=$("#calendarEvent"+j.data),k=250;if($(this).hasClass("opened")){$(this).parent().after("<tr id='calendarEvent"+j.data+"' style='height: 0'><td colspan='7'></td></tr>");c.clone().appendTo($("#calendarEvent"+j.data+" td"));$("#calendarEvent"+j.data+" .rdc-table_events").css("height","0");$("#calendarEvent"+j.data+" .rdc-table_events").animate({height:d+"px"},k)}else{$("#calendarEvent"+j.data+" .rdc-table_events").animate({height:"0"},k);setTimeout(function(){o.remove()},k)}})}$(window).on("resize",function(){if($(".rdc-table_has-events").hasClass("active")){var d=$(".rdc-table_events"),c=d.outerHeight(),i=$(".rdc-table_events-count");i.css({height:c+"px"})}});$('input[type="radio"]').on("click",function(){if($(this).attr("value")=="register"){$(".register-form").hide();$(".login-form").fadeIn("slow")}if($(this).attr("value")=="login"){$(".register-form").fadeIn("slow");$(".login-form").hide()}});$(".rdc-next, .rdc-prev").on("click",function(){var c=$(".rdc-table_has-events");for(Q=0;Q<c.length;Q++){var d=$(c[Q]);d.on("click",Q,function(o){o.preventDefault();o.stopPropagation();$(this).toggleClass("opened");var k=$(".rdc-table_events"),j=k.outerHeight(),i=$(this).children(".rdc-table_events"),aJ=$("#calendarEvent"+o.data),s=250;if($(this).hasClass("opened")){$(this).parent().after("<tr id='calendarEvent"+o.data+"' style='height: 0'><td colspan='7'></td></tr>");i.clone().appendTo($("#calendarEvent"+o.data+" td"));$("#calendarEvent"+o.data+" .rdc-table_events").css("height","0");$("#calendarEvent"+o.data+" .rdc-table_events").animate({height:j+"px"},s)}else{$("#calendarEvent"+o.data+" .rdc-table_events").animate({height:"0"},s);setTimeout(function(){aJ.remove()},s)}})}$(window).on("resize",function(){if($(".rdc-table_has-events").hasClass("active")){var j=$(".rdc-table_events"),i=j.outerHeight(),k=$(".rdc-table_events-count");k.css({height:i+"px"})}});$('input[type="radio"]').on("click",function(){if($(this).attr("value")=="login"){$(".register-form").hide();$(".login-form").fadeIn("slow")}if($(this).attr("value")=="register"){$(".register-form").fadeIn("slow");$(".login-form").hide()}})})}}if(plugins.bootstrapDateTimePicker.length){var Q;for(Q=0;Q<plugins.bootstrapDateTimePicker.length;Q++){var av=$(plugins.bootstrapDateTimePicker[Q]);var ae={};ae.format="dddd DD MMMM YYYY - HH:mm";if(av.attr("data-time-picker")=="date"){ae.format="DD-MM-YYYY";ae.minDate=new Date()}else{if(av.attr("data-time-picker")=="time"){ae.format="HH:mm"}}ae.time=(av.attr("data-time-picker")!="date");ae.date=(av.attr("data-time-picker")!="time");ae.shortTime=true;av.bootstrapMaterialDatePicker(ae)}}var x=$(".calendar-box-list-view");x.collapse({toggle:false});$("body").on("click",x,function(c){x.collapse("hide")});if(plugins.facebookWidget.length){l(plugins.facebookWidget,function(){(function(k,c,o){var j,i=k.getElementsByTagName(c)[0];if(k.getElementById(o)){return}j=k.createElement(c);j.id=o;j.src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";i.parentNode.insertBefore(j,i)}(document,"script","facebook-jssdk"))})}if(plugins.twitterfeed.length){window.twttr=(function(o,i,aJ){var k,j=o.getElementsByTagName(i)[0],c=window.twttr||{};if(o.getElementById(aJ)){return c}k=o.createElement(i);k.id=aJ;k.src="//platform.twitter.com/widgets.js";j.parentNode.insertBefore(k,j);c._e=[];c.ready=function(d){c._e.push(d)};return c}(document,"script","twitter-timeline"))}if(plugins.rdRange.length&&!p){plugins.rdRange.RDRange({})}if(plugins.stepper.length){plugins.stepper.stepper({labels:{up:"",down:""}})}if(plugins.countDown.length){var Q;for(Q=0;Q<plugins.countDown.length;Q++){var z=plugins.countDown[Q],S=new Date(),W=z.getAttribute("data-type"),V=z.getAttribute("data-time"),t=z.getAttribute("data-format"),az=[];S.setTime(Date.parse(V)).toLocaleString();az[W]=S;az.format=t;$(z).countdown(az)}}if(plugins.customWaypoints.length&&!p){var Q;for(Q=0;Q<plugins.customWaypoints.length;Q++){var H=$(plugins.customWaypoints[Q]);O(H)}}if(plugins.scroller.length){var Q;for(Q=0;Q<plugins.scroller.length;Q++){var ak=$(plugins.scroller[Q]);ak.mCustomScrollbar({theme:ak.attr("data-theme")?ak.attr("data-theme"):"minimal",scrollInertia:100,scrollButtons:{enable:false}})}}});
=======
/**
 * Global variables
 */
"use strict";

var userAgent = navigator.userAgent.toLowerCase(),
  initialDate = new Date(),

  $document = $(document),
  $window = $(window),
  $html = $("html"),

  isDesktop = $html.hasClass("desktop"),
  isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
  isIE = userAgent.indexOf("msie") != -1 ? parseInt(userAgent.split("msie")[1]) : userAgent.indexOf("trident") != -1 ? 11 : userAgent.indexOf("edge") != -1 ? 12 : false,
  isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isTouch = "ontouchstart" in window,
  onloadCaptchaCallback,

  plugins = {
    pointerEvents: isIE < 11 ? "js/pointer-events.min.js" : false,
    smoothScroll: $html.hasClass("use--smoothscroll") ? "js/smoothscroll.min.js" : false,
    bootstrapTooltip: $("[data-toggle='tooltip']"),
    bootstrapModalDialog: $('.modal'),
    bootstrapTabs: $(".tabs-custom"),
    rdNavbar: $(".rd-navbar"),
    rdParallax: $(".rd-parallax"),
    rdGoogleMaps: $(".rd-google-map"),
    rdMailForm: $(".rd-mailform"),
    rdInputLabel: $(".form-label"),
    regula: $("[data-constraints]"),
    owl: $(".owl-carousel"),
    swiper: $(".swiper-slider"),
    search: $(".rd-search"),
    searchResults: $('.rd-search-results'),
    mfp: $('[data-lightbox]').not('[data-lightbox="gallery"] [data-lightbox]'),
    mfpGallery: $('[data-lightbox^="gallery"]'),
    statefulButton: $('.btn-stateful'),
    isotope: $(".isotope"),
    popover: $('[data-toggle="popover"]'),
    viewAnimate: $('.view-animate'),
    photoSwipeGallery: $("[data-photo-swipe-item]"),
    radio: $("input[type='radio']"),
    checkbox: $("input[type='checkbox']"),
    customToggle: $("[data-custom-toggle]"),
    counter: $(".counter"),
    progressLinear: $(".progress-linear"),
    circleProgress: $(".progress-bar-circle"),
    dateCountdown: $('.DateCountdown'),
    pageLoader: $("#page-loader"),
    flickrfeed: $(".flickr"),
    selectFilter: $("select"),
    rdAudioPlayer: $(".rd-audio"),
    rdVideoBG: $(".rd-video"),
    jPlayerInit: $(".jp-player-init"),
    customParallax: $(".custom-parallax"),
    slick: $('.slick-slider'),
    countDown: $(".countdown"),
    calendar: $(".rd-calendar"),
    bookingCalendar: $(".booking-calendar"),
    bootstrapDateTimePicker: $("[data-time-picker]"),
    facebookWidget: $('#fb-root'),
    twitterfeed: $(".twitter-timeline"),
    rdRange: $('.rd-range'),
    stepper: $("input[type='number']"),
    customWaypoints: $('[data-custom-scroll-to]'),
    scroller: $(".scroll-wrap"),
    captcha: $('.recaptcha')
  };

/**
 * Initialize All Scripts
 */
$document.ready(function () {
  var isNoviBuilder = window.xMode;

  /**
   * getSwiperHeight
   * @description  calculate the height of swiper slider basing on data attr
   */
  function getSwiperHeight(object, attr) {
    var val = object.attr("data-" + attr),
      dim;

    if (!val) {
      return undefined;
    }

    dim = val.match(/(px)|(%)|(vh)$/i);

    if (dim.length) {
      switch (dim[0]) {
        case "px":
          return parseFloat(val);
        case "vh":
          return $(window).height() * (parseFloat(val) / 100);
        case "%":
          return object.width() * (parseFloat(val) / 100);
      }
    } else {
      return undefined;
    }
  }

  /**
   * toggleSwiperInnerVideos
   * @description  toggle swiper videos on active slides
   */
  function toggleSwiperInnerVideos(swiper) {
    var prevSlide = $(swiper.slides[swiper.previousIndex]),
      nextSlide = $(swiper.slides[swiper.activeIndex]),
      videos;

    prevSlide.find("video").each(function () {
      this.pause();
    });

    videos = nextSlide.find("video");
    if (videos.length) {
      videos.get(0).play();
    }
  }

  /**
   * toggleSwiperCaptionAnimation
   * @description  toggle swiper animations on active slides
   */
  function toggleSwiperCaptionAnimation(swiper) {
    var prevSlide = $(swiper.container),
      nextSlide = $(swiper.slides[swiper.activeIndex]);

    prevSlide
      .find("[data-caption-animate]")
      .each(function () {
        var $this = $(this);
        $this
          .removeClass("animated")
          .removeClass($this.attr("data-caption-animate"))
          .addClass("not-animated");
      });

    nextSlide
      .find("[data-caption-animate]")
      .each(function () {
        var $this = $(this),
          delay = $this.attr("data-caption-delay");


        if (!isNoviBuilder) {
          setTimeout(function () {
            $this
              .removeClass("not-animated")
              .addClass($this.attr("data-caption-animate"))
              .addClass("animated");
          }, delay ? parseInt(delay) : 0);
        } else {
          $this
            .removeClass("not-animated")
        }
      });
  }

  /**
   * makeParallax
   * @description  create swiper parallax scrolling effect
   */
  function makeParallax(el, speed, wrapper, prevScroll) {
    var scrollY = window.scrollY || window.pageYOffset;

    if (prevScroll != scrollY) {
      prevScroll = scrollY;
      el.addClass('no-transition');
      el[0].style['transform'] = 'translate3d(0,' + -scrollY * (1 - speed) + 'px,0)';
      el.height();
      el.removeClass('no-transition');

      if (el.attr('data-fade') === 'true') {
        var bound = el[0].getBoundingClientRect(),
          offsetTop = bound.top * 2 + scrollY,
          sceneHeight = wrapper.outerHeight(),
          sceneDevider = wrapper.offset().top + sceneHeight / 2.0,
          layerDevider = offsetTop + el.outerHeight() / 2.0,
          pos = sceneHeight / 6.0,
          opacity;


        if (sceneDevider + pos > layerDevider && sceneDevider - pos < layerDevider) {
          el[0].style["opacity"] = 1;
        } else {
          if (sceneDevider - pos < layerDevider) {
            opacity = 1 + ((sceneDevider + pos - layerDevider) / sceneHeight / 3.0 * 5);
          } else {
            opacity = 1 - ((sceneDevider - pos - layerDevider) / sceneHeight / 3.0 * 5);
          }
          el[0].style["opacity"] = opacity < 0 ? 0 : opacity > 1 ? 1 : opacity.toFixed(2);
        }
      }
    }

    requestAnimationFrame(function () {
      makeParallax(el, speed, wrapper, prevScroll);
    });
  }

  /**
   * makeWaypointScroll
   * @description  init smooth anchor animations
   */
  function makeWaypointScroll(obj) {
    var $this = $(obj);
    if (!isNoviBuilder) {
      $this.on('click', function (e) {
        e.preventDefault();
        $("body, html").stop().animate({
          scrollTop: $("#" + $(this).attr('data-custom-scroll-to')).offset().top
        }, 1000, function () {
          $window.trigger("resize");
        });
      });
    }
  }


  /**
   * initSwiperCustomParallax
   * @description  toggle swiper parallax on active slides
   */
  function initSwiperCustomParallax(swiper) {
    if (isNoviBuilder) return;
    var prevSlide = $(swiper.container),
      nextSlide = $(swiper.slides[swiper.activeIndex]);

    prevSlide
      .find(".custom-parallax")
      .each(function () {
        var $this = $(this)
          wrapper = $('.custom-parallax-wrap'),
          parallax = true,
          speed;

        if (parallax && !isIE && !isMobile) {
          if (speed = $this.attr("data-speed")) {
            makeParallax($this, speed, wrapper, false);
          }
        }
      });

    nextSlide
      .find(".custom-parallax")
      .each(function () {
        var $this = $(this)
        wrapper = $('.custom-parallax-wrap'),
          parallax = true,
          speed;

        if (parallax && !isIE && !isMobile) {
          if (speed = $this.attr("data-speed")) {
            makeParallax($this, speed, wrapper, false);
          }
        }
      });
  }

  /**
   * initSwiperWaypoints
   * @description  toggle waypoints on active slides
   */
  function initSwiperWaypoints(swiper) {
    var prevSlide = $(swiper.container),
      nextSlide = $(swiper.slides[swiper.activeIndex]);

    prevSlide
      .find('[data-custom-scroll-to]')
      .each(function () {
        var $this = $(this);
        makeWaypointScroll($this);
      });

    nextSlide
      .find('[data-custom-scroll-to]')
      .each(function () {
        var $this = $(this);
        makeWaypointScroll($this);
      });
  }


  /**
   * initOwlCarousel
   * @description  Init owl carousel plugin
   */
  function initOwlCarousel(c) {
    var aliaces = ["-", "-xs-", "-sm-", "-md-", "-lg-", "-xl-"],
      values = [0, 480, 768, 992, 1200, 1600],
      responsive = {},
      j, k;

    for (j = 0; j < values.length; j++) {
      responsive[values[j]] = {};
      for (k = j; k >= -1; k--) {
        if (!responsive[values[j]]["items"] && c.attr("data" + aliaces[k] + "items")) {
          responsive[values[j]]["items"] = k < 0 ? 1 : parseInt(c.attr("data" + aliaces[k] + "items"));
        }
        if (!responsive[values[j]]["stagePadding"] && responsive[values[j]]["stagePadding"] !== 0 && c.attr("data" + aliaces[k] + "stage-padding")) {
          responsive[values[j]]["stagePadding"] = k < 0 ? 0 : parseInt(c.attr("data" + aliaces[k] + "stage-padding"));
        }
        if (!responsive[values[j]]["margin"] && responsive[values[j]]["margin"] !== 0 && c.attr("data" + aliaces[k] + "margin")) {
          responsive[values[j]]["margin"] = k < 0 ? 30 : parseInt(c.attr("data" + aliaces[k] + "margin"));
        }
      }
    }

    // Enable custom pagination
    if (c.attr('data-dots-custom')) {
      c.on("initialized.owl.carousel", function (event) {
        var carousel = $(event.currentTarget),
          customPag = $(carousel.attr("data-dots-custom")),
          active = 0;

        if (carousel.attr('data-active')) {
          active = parseInt(carousel.attr('data-active'));
        }

        carousel.trigger('to.owl.carousel', [active, 300, true]);
        customPag.find("[data-owl-item='" + active + "']").addClass("active");

        customPag.find("[data-owl-item]").on('click', function (e) {
          e.preventDefault();
          carousel.trigger('to.owl.carousel', [parseInt(this.getAttribute("data-owl-item")), 300, true]);
        });

        carousel.on("translate.owl.carousel", function (event) {
          customPag.find(".active").removeClass("active");
          customPag.find("[data-owl-item='" + event.item.index + "']").addClass("active")
        });
      });
    }

    // Create custom numbering
    if (typeof(c.attr("data-numbering")) !== 'undefined') {
      var numberingObject = $(c.attr("data-numbering"));

      c.on('initialized.owl.carousel changed.owl.carousel', function (numberingObject) {
        return function (e) {
          if (!e.namespace) return;
          numberingObject.find('.numbering-current').text((e.item.index + 1) % e.item.count + 1);
          numberingObject.find('.numbering-count').text(e.item.count);
        };
      }(numberingObject));
    }

    c.owlCarousel({
      autoplay: c.attr("data-autoplay") === "true",
      loop: isNoviBuilder ? false : c.attr("data-loop") !== "false",
      items: 1,
      dotsContainer: c.attr("data-pagination-class") || false,
      navContainer: c.attr("data-navigation-class") || false,
      mouseDrag: isNoviBuilder ? false : c.attr("data-mouse-drag") !== "false",
      nav: c.attr("data-nav") === "true",
      dots: c.attr("data-dots") === "true",
      dotsEach: c.attr("data-dots-each") ? parseInt(c.attr("data-dots-each")) : false,
      animateIn: c.attr('data-animation-in') ? c.attr('data-animation-in') : false,
      animateOut: c.attr('data-animation-out') ? c.attr('data-animation-out') : false,
      responsive: responsive,
      navText: $.parseJSON(c.attr("data-nav-text")) || [],
      navClass: $.parseJSON(c.attr("data-nav-class")) || ['owl-prev', 'owl-next']
    });
  }

  /**
   * isScrolledIntoView
   * @description  check the element whas been scrolled into the view
   */
  function isScrolledIntoView(elem) {
    var $window = $(window);
    return elem.offset().top + elem.outerHeight() >= $window.scrollTop() && elem.offset().top <= $window.scrollTop() + $window.height();
  }

  /**
   * initOnView
   * @description  calls a function when element has been scrolled into the view
   */
  function lazyInit(element, func) {
    var $win = jQuery(window);
    $win.on('load scroll', function () {
      if ((!element.hasClass('lazy-loaded') && (isScrolledIntoView(element)))) {
        func.call();
        element.addClass('lazy-loaded');
      }
    });
  }

  /**
   * Page loader
   * @description Enables Page loader
   */
  if (plugins.pageLoader.length > 0) {

    $window.on("load", function () {
      var loader = setTimeout(function () {
        plugins.pageLoader.addClass("loaded");
        $window.trigger("resize");
      }, 10);
    });
  }

  /**
   * Smooth scrolling
   * @description  Enables a smooth scrolling for Google Chrome (Windows)
   */
  if (plugins.smoothScroll) {
    $.getScript(plugins.smoothScroll);
  }

  /**
   * jpFormatePlaylistObj
   * @description  create playlist object for jPlayer script
   */
  function jpFormatePlaylistObj(playlistHtml) {
    var playlistObj = [];

    // Format object with audio
    for (var i = 0; i < playlistHtml.length; i++){
      var playlistItem = playlistHtml[i],
        itemData = $(playlistItem).data();
      playlistObj[i] = {};

      for ( var key in itemData ){
        playlistObj[i][key.replace('jp', '').toLowerCase()] = itemData[key];
      }
    }

    return playlistObj;
  }

  /**
   * initJplayerBase
   * @description  base Jplayer init obj
   */
  function initJplayerBase(index, item, mediaObj) {
    return new jPlayerPlaylist({
      jPlayer: item.getElementsByClassName("jp-jplayer")[0],
      cssSelectorAncestor: ".jp-audio-" + index // Need too bee a selector not HTMLElement or Jq object, so we make it unique
    }, mediaObj, {
      playlistOptions: {
        enableRemoveControls: false
      },
      supplied: "ogv, m4v, oga, mp3",
      useStateClassSkin: true,
      volume: 0.4
    });
  }

  /**
   * Jp Audio player
   * @description  Custom jPlayer script
   */

  if ( plugins.jPlayerInit.length ) {
    $html.addClass( 'ontouchstart' in window || 'onmsgesturechange' in window ? 'touch' : 'no-touch' );

    $.each(plugins.jPlayerInit, function (index, item) {
      var mediaObj = jpFormatePlaylistObj($(item).find('.jp-player-list .jp-player-list-item')),
        playerInstance = initJplayerBase(index, item, mediaObj);


      // Custom playlist for fixed player
      if( $(item).data('jp-player-name') ){
        var customJpPlaylists = $('[data-jp-playlist-relative-to="' + $(item).data('jp-player-name') + '"]'),
          playlistItems = customJpPlaylists.find("[data-jp-playlist-item]");

        // Toggle audio play on custom playlist play button click
        playlistItems.on('click', customJpPlaylists.data('jp-playlist-play-on'), function (e) {
          var mediaObj = jpFormatePlaylistObj(playlistItems),
            $clickedItem = $(e.delegateTarget);

          if ( !JSON.stringify(playerInstance.playlist) === JSON.stringify(mediaObj) || !playerInstance.playlist.length ) {
            playerInstance.setPlaylist(mediaObj);
          }

          if ( !$clickedItem.hasClass('playing') ) {
            playerInstance.pause();

            if ( $clickedItem.hasClass('last-played') ) {
              playerInstance.play();
            } else{
              playerInstance.play(playlistItems.index($clickedItem));
            }

            playlistItems.removeClass('playing last-played');
            $clickedItem.addClass('playing');
          } else {
            playlistItems.removeClass('playing last-played');
            $clickedItem.addClass('last-played');
            playerInstance.pause();
          }

        });


        // Callback for custom playlist
        $(playerInstance.cssSelector.jPlayer).bind($.jPlayer.event.play, function(e) {

          var toggleState = function (elemClass, index) {
            var activeIndex = playlistItems.index(playlistItems.filter(elemClass));

            if ( activeIndex !== -1 ) {
              if ( playlistItems.eq(activeIndex + index).length !== 0 ) {
                playlistItems.eq(activeIndex)
                  .removeClass('play-next play-prev playing last-played')
                  .end()
                  .eq(activeIndex + index)
                  .addClass('playing');
              }
            }
          };

          // Check if user select next or prev track
          toggleState('.play-next', +1);
          toggleState('.play-prev', -1);

          var lastPlayed = playlistItems.filter('.last-played');

          // If user just press pause and than play on same track
          if (lastPlayed.length){
            lastPlayed.addClass('playing').removeClass('last-played play-next');
          }
        });


        // Add temp marker of last played audio
        $(playerInstance.cssSelector.jPlayer).bind($.jPlayer.event.pause, function(e) {
          playlistItems.filter('.playing').addClass('last-played').removeClass('playing');

          $(playerInstance.cssSelector.cssSelectorAncestor).addClass('jp-state-visible');
        });

        // Add temp marker that user want to play next audio
        $(item).find('.jp-next')
          .on('click', function (e) {
            playlistItems.filter('.playing, .last-played').addClass('play-next');
          });

        // Add temp marker that user want to play prev audio
        $(item).find('.jp-previous')
          .on('click', function (e) {
            playlistItems.filter('.playing, .last-played').addClass('play-prev');
          });
      }
    });
  }


  /**
   * Owl carousel
   * @description Enables Owl carousel plugin
   */
  if (plugins.owl.length) {
    var i;
    for (i = 0; i < plugins.owl.length; i++) {
      initOwlCarousel($(plugins.owl[i]));
    }
  }

  /**
   * Live Search
   * @description  create live search results
   */
  function liveSearch(options) {
    $('#' + options.live).removeClass('cleared').html();
    options.current++;
    options.spin.addClass('loading');
    $.get(handler, {
      s: decodeURI(options.term),
      liveSearch: options.live,
      dataType: "html",
      liveCount: options.liveCount,
      filter: options.filter,
      template: options.template
    }, function (data) {
      options.processed++;
      var live = $('#' + options.live);
      if (options.processed == options.current && !live.hasClass('cleared')) {
        live.find('> #search-results').removeClass('active');
        live.html(data);
        setTimeout(function () {
          live.find('> #search-results').addClass('active');
        }, 50);
      }
      options.spin.parents('.rd-search').find('.input-group-addon').removeClass('loading');
    })
  }

  /**
   * attachFormValidator
   * @description  attach form validation to elements
   */
  function attachFormValidator(elements) {
    for (var i = 0; i < elements.length; i++) {
      var o = $(elements[i]), v;
      o.addClass("form-control-has-validation").after("<span class='form-validation'></span>");
      v = o.parent().find(".form-validation");
      if (v.is(":last-child")) {
        o.addClass("form-control-last-child");
      }
    }

    elements
      .on('input change propertychange blur', function (e) {
        var $this = $(this), results;

        if (e.type != "blur") {
          if (!$this.parent().hasClass("has-error")) {
            return;
          }
        }

        if ($this.parents('.rd-mailform').hasClass('success')) {
          return;
        }

        if ((results = $this.regula('validate')).length) {
          for (i = 0; i < results.length; i++) {
            $this.siblings(".form-validation").text(results[i].message).parent().addClass("has-error")
          }
        } else {
          $this.siblings(".form-validation").text("").parent().removeClass("has-error")
        }
      })
      .regula('bind');
  }

  /**
   * isValidated
   * @description  check if all elemnts pass validation
   */
  function isValidated(elements, captcha) {
    var results, errors = 0;

    if (elements.length) {
      for (j = 0; j < elements.length; j++) {

        var $input = $(elements[j]);
        if ((results = $input.regula('validate')).length) {
          for (k = 0; k < results.length; k++) {
            errors++;
            $input.siblings(".form-validation").text(results[k].message).parent().addClass("has-error");
          }
        } else {
          $input.siblings(".form-validation").text("").parent().removeClass("has-error")
        }
      }

      if (captcha) {
        if (captcha.length) {
          return validateReCaptcha(captcha) && errors == 0
        }
      }

      return errors == 0;
    }
    return true;
  }


  /**
   * validateReCaptcha
   * @description  validate google reCaptcha
   */
  function validateReCaptcha(captcha) {
    var $captchaToken = captcha.find('.g-recaptcha-response').val();

    if ($captchaToken == '') {
      captcha
        .siblings('.form-validation')
        .html('Please, prove that you are not robot.')
        .addClass('active');
      captcha
        .closest('.form-group')
        .addClass('has-error');

      captcha.bind('propertychange', function () {
        var $this = $(this),
          $captchaToken = $this.find('.g-recaptcha-response').val();

        if ($captchaToken != '') {
          $this
            .closest('.form-group')
            .removeClass('has-error');
          $this
            .siblings('.form-validation')
            .removeClass('active')
            .html('');
          $this.unbind('propertychange');
        }
      });

      return false;
    }

    return true;
  }


  /**
   * onloadCaptchaCallback
   * @description  init google reCaptcha
   */
  onloadCaptchaCallback = function () {
    for (i = 0; i < plugins.captcha.length; i++) {
      var $capthcaItem = $(plugins.captcha[i]);

      grecaptcha.render(
        $capthcaItem.attr('id'),
        {
          sitekey: $capthcaItem.attr('data-sitekey'),
          size: $capthcaItem.attr('data-size') ? $capthcaItem.attr('data-size') : 'normal',
          theme: $capthcaItem.attr('data-theme') ? $capthcaItem.attr('data-theme') : 'light',
          callback: function (e) {
            $('.recaptcha').trigger('propertychange');
          }
        }
      );
      $capthcaItem.after("<span class='form-validation'></span>");
    }
  };
  
  /**
   * Init Bootstrap tooltip
   * @description  calls a function when need to init bootstrap tooltips
   */
  function initBootstrapTooltip(tooltipPlacement) {
    if (window.innerWidth < 599) {
      plugins.bootstrapTooltip.tooltip('destroy');
      plugins.bootstrapTooltip.tooltip({
        placement: 'bottom'
      });
    } else {
      plugins.bootstrapTooltip.tooltip('destroy');
      plugins.bootstrapTooltip.tooltipPlacement;
      plugins.bootstrapTooltip.tooltip();
    }
  }

  /**
   * Copyright Year
   * @description  Evaluates correct copyright year
   */
  var o = $("#copyright-year");
  if (o.length) {
    o.text(initialDate.getFullYear());
  }

  /**
   * Is Mac os
   * @description  add additional class on html if mac os.
   */
  if (navigator.platform.match(/(Mac)/i)) $html.addClass("mac-os");

  /**
   * Is Firefox
   * @description  add additional class on html if mac os.
   */
  if (isFirefox) $html.addClass("firefox");

  /**
   * IE Polyfills
   * @description  Adds some loosing functionality to IE browsers
   */
  if (isIE) {
    if (isIE < 10) {
      $html.addClass("lt-ie-10");
    }

    if (isIE < 11) {
      if (plugins.pointerEvents) {
        $.getScript(plugins.pointerEvents)
          .done(function () {
            $html.addClass("ie-10");
            PointerEventsPolyfill.initialize({});
          });
      }
    }

    if (isIE === 11) {
      $("html").addClass("ie-11");
    }

    if (isIE === 12) {
      $("html").addClass("ie-edge");
    }
  }

  /**
   * Bootstrap Tooltips
   * @description Activate Bootstrap Tooltips
   */
  if (plugins.bootstrapTooltip.length) {
    var tooltipPlacement = plugins.bootstrapTooltip.attr('data-placement');
    initBootstrapTooltip(tooltipPlacement);
    $(window).on('resize orientationchange', function () {
      initBootstrapTooltip(tooltipPlacement);
    })
  }

  /**
   * bootstrapModalDialog
   * @description Stap vioeo in bootstrapModalDialog
   */
  if (plugins.bootstrapModalDialog.length > 0) {
    var i = 0;

    for (i = 0; i < plugins.bootstrapModalDialog.length; i++) {
      var modalItem = $(plugins.bootstrapModalDialog[i]);

      modalItem.on('hidden.bs.modal', $.proxy(function () {
        var activeModal = $(this),
          rdVideoInside = activeModal.find('video'),
          youTubeVideoInside = activeModal.find('iframe');

        if (rdVideoInside.length) {
          rdVideoInside[0].pause();
        }

        if (youTubeVideoInside.length) {
          var videoUrl = youTubeVideoInside.attr('src');

          youTubeVideoInside
            .attr('src', '')
            .attr('src', videoUrl);
        }
      }, modalItem))
    }
  }

  /**
   * RD Google Maps
   * @description Enables RD Google Maps plugin
   */
  if (plugins.rdGoogleMaps.length) {
    var i;

    $.getScript("//maps.google.com/maps/api/js?key=AIzaSyAwH60q5rWrS8bXwpkZwZwhw9Bw0pqKTZM&sensor=false&libraries=geometry,places&v=3.7", function () {
      var head = document.getElementsByTagName('head')[0],
        insertBefore = head.insertBefore;

      head.insertBefore = function (newElement, referenceElement) {
        if (newElement.href && newElement.href.indexOf('//fonts.googleapis.com/css?family=Roboto') != -1 || newElement.innerHTML.indexOf('gm-style') != -1) {
          return;
        }
        insertBefore.call(head, newElement, referenceElement);
      };

      for (i = 0; i < plugins.rdGoogleMaps.length; i++) {

        var $googleMapItem = $(plugins.rdGoogleMaps[i]);

        lazyInit($googleMapItem, $.proxy(function () {
          var $this = $(this),
            styles = $this.attr("data-styles");

          $this.googleMap({
            styles: styles ? JSON.parse(styles) : [],
            onInit: function (map) {
              var inputAddress = $('#rd-google-map-address');

              if (inputAddress.length) {
                var input = inputAddress;
                var geocoder = new google.maps.Geocoder();
                var marker = new google.maps.Marker(
                  {
                    map: map,
                    icon: "images/gmap_marker.png",
                  }
                );
                var autocomplete = new google.maps.places.Autocomplete(inputAddress[0]);
                autocomplete.bindTo('bounds', map);
                inputAddress.attr('placeholder', '');
                inputAddress.on('change', function () {
                  $("#rd-google-map-address-submit").trigger('click');
                });
                inputAddress.on('keydown', function (e) {
                  if (e.keyCode == 13) {
                    $("#rd-google-map-address-submit").trigger('click');
                  }
                });


                $("#rd-google-map-address-submit").on('click', function (e) {
                  e.preventDefault();
                  var address = input.val();
                  geocoder.geocode({'address': address}, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                      var latitude = results[0].geometry.location.lat();
                      var longitude = results[0].geometry.location.lng();

                      map.setCenter(new google.maps.LatLng(
                        parseFloat(latitude),
                        parseFloat(longitude)
                      ));
                      marker.setPosition(new google.maps.LatLng(
                        parseFloat(latitude),
                        parseFloat(longitude)
                      ))
                    }
                  });
                });
              }
            }
          });
        }, $googleMapItem));
      }
    });
  }

  /**
   * Radio
   * @description Add custom styling options for input[type="radio"]
   */
  if (plugins.radio.length) {
    var i;
    for (i = 0; i < plugins.radio.length; i++) {
      var $this = $(plugins.radio[i]);
      $this.addClass("radio-custom").after("<span class='radio-custom-dummy'></span>")
    }
  }

  /**
   * Checkbox
   * @description Add custom styling options for input[type="checkbox"]
   */
  if (plugins.checkbox.length) {
    var i;
    for (i = 0; i < plugins.checkbox.length; i++) {
      var $this = $(plugins.checkbox[i]);
      $this.addClass("checkbox-custom").after("<span class='checkbox-custom-dummy'></span>")
    }
  }

  /**
   * Popovers
   * @description Enables Popovers plugin
   */
  if (plugins.popover.length) {
    if (window.innerWidth < 767) {
      plugins.popover.attr('data-placement', 'bottom');
      plugins.popover.popover();
    }
    else {
      plugins.popover.popover();
    }
  }

  /**
   * Bootstrap Buttons
   * @description  Enable Bootstrap Buttons plugin
   */
  if (plugins.statefulButton.length) {
    $(plugins.statefulButton).on('click', function () {
      var statefulButtonLoading = $(this).button('loading');

      setTimeout(function () {
        statefulButtonLoading.button('reset')
      }, 2000);
    })
  }

  /**
   * UI To Top
   * @description Enables ToTop Button
   */
  if (isDesktop && !isNoviBuilder) {
    $().UItoTop({
      easingType: 'easeOutQuart',
      containerClass: 'ui-to-top'
    });
  }

  /**
   * RD Navbar
   * @description Enables RD Navbar plugin
   */
  if (plugins.rdNavbar.length) {
    plugins.rdNavbar.RDNavbar({
      stickUpClone: (plugins.rdNavbar.attr("data-stick-up-clone") && !isNoviBuilder) ? plugins.rdNavbar.attr("data-stick-up-clone") === 'true' : false,
      responsive: {
        0: {
          stickUp: (!isNoviBuilder) ? plugins.rdNavbar.attr("data-stick-up") === 'true' : false
        },
        768: {
          stickUp: (!isNoviBuilder) ? plugins.rdNavbar.attr("data-sm-stick-up") === 'true' : false
        },
        992: {
          stickUp: (!isNoviBuilder) ? plugins.rdNavbar.attr("data-md-stick-up") === 'true' : false
        },
        1200: {
          stickUp: (!isNoviBuilder) ? plugins.rdNavbar.attr("data-lg-stick-up") === 'true' : false
        }
      },
      callbacks: {
        onStuck: function () {
          var navbarSearch = this.$element.find('.rd-search input');

          if (navbarSearch) {
            navbarSearch.val('').trigger('propertychange');
          }
        },
        onUnstuck: function () {
          if (this.$clone === null)
            return;

          var navbarSearch = this.$clone.find('.rd-search input');

          if (navbarSearch) {
            navbarSearch.val('').trigger('propertychange');
            navbarSearch.blur();
          }
        }
      }
    });
    if (plugins.rdNavbar.attr("data-body-class")) {
      document.body.className += ' ' + plugins.rdNavbar.attr("data-body-class");
    }
  }
  /**
   * ViewPort Universal
   * @description Add class in viewport
   */
  if (plugins.viewAnimate.length) {
    var i;
    for (i = 0; i < plugins.viewAnimate.length; i++) {
      var $view = $(plugins.viewAnimate[i]).not('.active');
      $document.on("scroll", $.proxy(function () {
        if (isScrolledIntoView(this)) {
          this.addClass("active");
        }
      }, $view))
        .trigger("scroll");
    }
  }

  /**
   * Swiper 3.1.7
   * @description  Enable Swiper Slider
   */
  if (plugins.swiper.length) {
    var i;
    for (i = 0; i < plugins.swiper.length; i++) {
      var s = $(plugins.swiper[i]);
      var pag = s.find(".swiper-pagination"),
        next = s.find(".swiper-button-next"),
        prev = s.find(".swiper-button-prev"),
        bar = s.find(".swiper-scrollbar"),
        parallax = s.parents('.rd-parallax').length,
        swiperSlide = s.find(".swiper-slide"),
        autoplay = false;

      for (j = 0; j < swiperSlide.length; j++) {
        var $this = $(swiperSlide[j]),
          url;

        if (url = $this.attr("data-slide-bg")) {
          $this.css({
            "background-image": "url(" + url + ")",
            "background-size": "cover"
          })
        }
      }


      swiperSlide.end()
        .find("[data-caption-animate]")
        .addClass("not-animated")
        .end()
        .swiper({
          autoplay: isNoviBuilder ? null : s.attr('data-autoplay') ? s.attr('data-autoplay') === "false" ? undefined : s.attr('data-autoplay') : 5000,
          direction: s.attr('data-direction') ? s.attr('data-direction') : "horizontal",
          effect: s.attr('data-slide-effect') ? s.attr('data-slide-effect') : "slide",
          speed: s.attr('data-slide-speed') ? s.attr('data-slide-speed') : 600,
          keyboardControl: s.attr('data-keyboard') === "true",
          mousewheelControl: s.attr('data-mousewheel') === "true",
          mousewheelReleaseOnEdges: s.attr('data-mousewheel-release') === "true",
          nextButton: next.length ? next.get(0) : null,
          prevButton: prev.length ? prev.get(0) : null,
          pagination: pag.length ? pag.get(0) : null,
          paginationClickable: pag.length ? pag.attr("data-clickable") !== "false" : false,
          paginationBulletRender: pag.length ? pag.attr("data-index-bullet") === "true" ? function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          } : null : null,
          scrollbar: bar.length ? bar.get(0) : null,
          scrollbarDraggable: bar.length ? bar.attr("data-draggable") !== "false" : true,
          scrollbarHide: bar.length ? bar.attr("data-draggable") === "false" : false,
          loop: isNoviBuilder ? false : s.attr('data-loop') !== "false",
          simulateTouch: s.attr('data-simulate-touch') && !isNoviBuilder ? s.attr('data-simulate-touch') === "true" : false,
          onTransitionStart: function (swiper) {
            toggleSwiperInnerVideos(swiper);
          },
          onTransitionEnd: function (swiper) {
            toggleSwiperCaptionAnimation(swiper);
          },
          onInit: function (swiper) {
            toggleSwiperInnerVideos(swiper);
            toggleSwiperCaptionAnimation(swiper);
            initSwiperCustomParallax(swiper);
            initSwiperWaypoints(swiper);
            $(window).on('resize', function () {
              swiper.update(true);
            })
          }
        });

      $(window)
        .on("resize", function () {
          var mh = getSwiperHeight(s, "min-height"),
            h = getSwiperHeight(s, "height");
          if (h) {
            s.css("height", mh ? mh > h ? mh : h : h);
          }
        })
        .trigger("resize");
    }
  }

  /**
   * TimeCircles
   * @description  Enable TimeCircles plugin
   */
  if (plugins.dateCountdown.length) {
    var i;
    for (i = 0; i < plugins.dateCountdown.length; i++) {
      var dateCountdownItem = $(plugins.dateCountdown[i]),
        time = {
          "Days": {
            "text": "Days",
            "show": true,
            color: dateCountdownItem.attr("data-color") ? dateCountdownItem.attr("data-color") : "#f9f9f9"
          },
          "Hours": {
            "text": "Hours",
            "show": true,
            color: dateCountdownItem.attr("data-color") ? dateCountdownItem.attr("data-color") : "#f9f9f9"
          },
          "Minutes": {
            "text": "Minutes",
            "show": true,
            color: dateCountdownItem.attr("data-color") ? dateCountdownItem.attr("data-color") : "#f9f9f9"
          },
          "Seconds": {
            "text": "Seconds",
            "show": true,
            color: dateCountdownItem.attr("data-color") ? dateCountdownItem.attr("data-color") : "#f9f9f9"
          }
        };

      dateCountdownItem.TimeCircles({
        color: dateCountdownItem.attr("data-color") ? dateCountdownItem.attr("data-color") : "rgba(247, 247, 247, 1)",
        animation: "smooth",
        bg_width: dateCountdownItem.attr("data-bg-width") ? dateCountdownItem.attr("data-bg-width") : 0.6,
        circle_bg_color: dateCountdownItem.attr("data-bg") ? dateCountdownItem.attr("data-bg") : "rgba(0, 0, 0, 1)",
        fg_width: dateCountdownItem.attr("data-width") ? dateCountdownItem.attr("data-width") : 0.03
      });

      $(window).on('load resize orientationchange', function () {
        if (window.innerWidth < 479) {
          dateCountdownItem.TimeCircles({
            time: {
              "Days": {
                "text": "Days",
                "show": true,
                color: dateCountdownItem.attr("data-color") ? dateCountdownItem.attr("data-color") : "#f9f9f9"
              },
              "Hours": {
                "text": "Hours",
                "show": true,
                color: dateCountdownItem.attr("data-color") ? dateCountdownItem.attr("data-color") : "#f9f9f9"
              },
              "Minutes": {
                "text": "Minutes",
                "show": true,
                color: dateCountdownItem.attr("data-color") ? dateCountdownItem.attr("data-color") : "#f9f9f9"
              },
              Seconds: {
                "text": "Seconds",
                show: false,
                color: dateCountdownItem.attr("data-color") ? dateCountdownItem.attr("data-color") : "#f9f9f9"
              }
            }
          }).rebuild();
        } else if (window.innerWidth < 767) {
          dateCountdownItem.TimeCircles({
            time: {
              "Days": {
                "text": "Days",
                "show": true,
                color: dateCountdownItem.attr("data-color") ? dateCountdownItem.attr("data-color") : "#f9f9f9"
              },
              "Hours": {
                "text": "Hours",
                "show": true,
                color: dateCountdownItem.attr("data-color") ? dateCountdownItem.attr("data-color") : "#f9f9f9"
              },
              "Minutes": {
                "text": "Minutes",
                "show": true,
                color: dateCountdownItem.attr("data-color") ? dateCountdownItem.attr("data-color") : "#f9f9f9"
              },
              Seconds: {
                text: '',
                show: false,
                color: dateCountdownItem.attr("data-color") ? dateCountdownItem.attr("data-color") : "#f9f9f9"
              }
            }
          }).rebuild();
        } else {
          dateCountdownItem.TimeCircles({time: time}).rebuild();
        }
      });
    }
  }

  /**
   * RD Search
   * @description Enables search
   */
  if (plugins.search.length || plugins.searchResults) {
    var handler = "bat/rd-search.php";
    var defaultTemplate = '<h6 class="search_title"><a target="_top" href="#{href}" class="search_link">#{title}</a></h6>' +
      '<p class="match">#{href}</p>' +
      '<p>...#{token}...</p>';
    var defaultFilter = '*.html';

    if (plugins.search.length) {

      for (i = 0; i < plugins.search.length; i++) {
        var searchItem = $(plugins.search[i]),
          options = {
            element: searchItem,
            filter: (searchItem.attr('data-search-filter')) ? searchItem.attr('data-search-filter') : defaultFilter,
            template: (searchItem.attr('data-search-template')) ? searchItem.attr('data-search-template') : defaultTemplate,
            live: (searchItem.attr('data-search-live')) ? searchItem.attr('data-search-live') : false,
            liveCount: (searchItem.attr('data-search-live-count')) ? parseInt(searchItem.attr('data-search-live')) : 4,
            current: 0, processed: 0, timer: {}
          };

        if ($('.rd-navbar-search-toggle').length) {
          var toggle = $('.rd-navbar-search-toggle');
          toggle.on('click', function () {
            if (!($(this).hasClass('active'))) {
              searchItem.find('input').val('').trigger('propertychange');
            }
          });
        }

        if (options.live) {
          var clearHandler = false;

          searchItem.find('input').on("keyup input propertychange", $.proxy(function () {
            this.term = this.element.find('input').val().trim();
            this.spin = this.element.find('.input-group-addon');

            clearTimeout(this.timer);

            if (this.term.length > 2) {
              this.timer = setTimeout(liveSearch(this), 200);

              if (clearHandler == false) {
                clearHandler = true;

                $("body").on("click", function (e) {
                  if ($(e.toElement).parents('.rd-search').length == 0) {
                    $('#rd-search-results-live').addClass('cleared').html('');
                  }
                })
              }

            } else if (this.term.length == 0) {
              $('#' + this.live).addClass('cleared').html('');
            }
          }, options, this));
        }

        searchItem.submit($.proxy(function () {
          $('<input />').attr('type', 'hidden')
            .attr('name', "filter")
            .attr('value', this.filter)
            .appendTo(this.element);
          return true;
        }, options, this))
      }
    }

    if (plugins.searchResults.length) {
      var regExp = /\?.*s=([^&]+)\&filter=([^&]+)/g;
      var match = regExp.exec(location.search);

      if (match != null) {
        $.get(handler, {
          s: decodeURI(match[1]),
          dataType: "html",
          filter: match[2],
          template: defaultTemplate,
          live: ''
        }, function (data) {
          plugins.searchResults.html(data);
        })
      }
    }
  }

  /**
   * Isotope
   * @description Enables Isotope plugin
   */
  if (plugins.isotope.length) {
    var i, j, isogroup = [];
    for (i = 0; i < plugins.isotope.length; i++) {
      var isotopeItem = plugins.isotope[i],
        filterItems = $(isotopeItem).closest('.isotope-wrap').find('[data-isotope-filter]'),
        iso;

      iso = new Isotope(isotopeItem, {
        itemSelector: '.isotope-item',
        layoutMode: isotopeItem.getAttribute('data-isotope-layout') ? isotopeItem.getAttribute('data-isotope-layout') : 'masonry',
        filter: '*',
        masonry: {
          columnWidth: 0.42
        }
      });

      isogroup.push(iso);

      filterItems.on("click", function (e) {
        e.preventDefault();
        var filter = $(this),
          iso = $('.isotope[data-isotope-group="' + this.getAttribute("data-isotope-group") + '"]'),
          filtersContainer = filter.closest(".isotope-filters");

        filtersContainer
          .find('.active')
          .removeClass("active");
        filter.addClass("active");

        iso.isotope({
          itemSelector: '.isotope-item',
          layoutMode: iso.attr('data-isotope-layout') ? iso.attr('data-isotope-layout') : 'masonry',
          filter: this.getAttribute("data-isotope-filter") == '*' ? '*' : '[data-filter*="' + this.getAttribute("data-isotope-filter") + '"]',
          masonry: {
            columnWidth: 0.42
          }
        });

        $window.trigger('resize');

      }).eq(0).trigger("click");
    }

    $(window).on('load', function () {
      setTimeout(function () {
        var i;
        for (i = 0; i < isogroup.length; i++) {
          isogroup[i].element.className += " isotope--loaded";
          isogroup[i].layout();
        }
      }, 600);

      setTimeout(function () {
        $window.trigger('resize');
      }, 800);
    });
  }

  /**
   * WOW
   * @description Enables Wow animation plugin
   */
  if (isDesktop && $html.hasClass("wow-animation") && $(".wow").length) {
    new WOW().init();
  }

  /**
   * Bootstrap tabs
   * @description Activate Bootstrap Tabs
   */
  if (plugins.bootstrapTabs.length) {
    var i;
    for (i = 0; i < plugins.bootstrapTabs.length; i++) {
      var bootstrapTabsItem = $(plugins.bootstrapTabs[i]);

      //If have owl carousel inside tab - resize owl carousel on click
      if (bootstrapTabsItem.find('.owl-carousel').length) {
        // init first open tab
        var carouselObj = bootstrapTabsItem.find('.tab-content .tab-pane.active .owl-carousel');
        var setTimeOutTime = isNoviBuilder ? 1500 : 300;
        initOwlCarousel(carouselObj);

        //init owl carousel on tab change
        bootstrapTabsItem.find('.tabs-custom-list > li > a').on('click', $.proxy(function () {
          var $this = $(this);

          setTimeout(function () {
            var carouselObj = $this.find('.tab-content .tab-pane.active .owl-carousel').not('.owl-initialised');

            if (carouselObj.length) {
              for (var j = 0; j < carouselObj.length; j++) {
                var carouselItem = $(carouselObj[j]);
                initOwlCarousel(carouselItem);
                carouselItem.addClass('owl-initialised');
              }
            }
          }, setTimeOutTime);

        }, bootstrapTabsItem));
      }

      //If have slick carousel inside tab - resize slick carousel on click
      if (bootstrapTabsItem.find('.slick-slider').length) {
        bootstrapTabsItem.find('.tabs-custom-list > li > a').on('click', $.proxy(function () {
          var $this = $(this);
          var setTimeOutTime = isNoviBuilder ? 1500 : 300;

          setTimeout(function () {
            $this.find('.tab-content .tab-pane.active .slick-slider').slick('setPosition');
          }, setTimeOutTime);
        }, bootstrapTabsItem));
      }
    }
  }


  /**
   * RD Input Label
   * @description Enables RD Input Label Plugin
   */
  if (plugins.rdInputLabel.length) {
    plugins.rdInputLabel.RDInputLabel();
  }

  /**
   * Regula
   * @description Enables Regula plugin
   */
  if (plugins.regula.length) {
    attachFormValidator(plugins.regula);
  }

  /**
   * Google ReCaptcha
   * @description Enables Google ReCaptcha
   */
  if (plugins.captcha.length) {
    var i;
    $.getScript("//www.google.com/recaptcha/api.js?onload=onloadCaptchaCallback&render=explicit&hl=en");
  }

  /**
   * RD Mailform
   */
  if (plugins.rdMailForm.length) {
    var i, j, k,
      msg = {
        'MF000': 'Successfully sent!',
        'MF001': 'Recipients are not set!',
        'MF002': 'Form will not work locally!',
        'MF003': 'Please, define email field in your form!',
        'MF004': 'Please, define type of your form!',
        'MF254': 'Something went wrong with PHPMailer!',
        'MF255': 'Aw, snap! Something went wrong.'
      };

    for (i = 0; i < plugins.rdMailForm.length; i++) {
      var $form = $(plugins.rdMailForm[i]),
        formHasCaptcha = false;

      $form.attr('novalidate', 'novalidate').ajaxForm({
        data: {
          "form-type": $form.attr("data-form-type") || "contact",
          "counter": i
        },
        beforeSubmit: function () {
          var form = $(plugins.rdMailForm[this.extraData.counter]),
            inputs = form.find("[data-constraints]"),
            output = $("#" + form.attr("data-form-output")),
            captcha = form.find('.recaptcha'),
            captchaFlag = true;

          output.removeClass("active error success");

          if (isValidated(inputs, captcha)) {

            // veify reCaptcha
            if (captcha.length) {
              var captchaToken = captcha.find('.g-recaptcha-response').val(),
                captchaMsg = {
                  'CPT001': 'Please, setup you "site key" and "secret key" of reCaptcha',
                  'CPT002': 'Something wrong with google reCaptcha'
                }

              formHasCaptcha = true;

              $.ajax({
                method: "POST",
                url: "bat/reCaptcha.php",
                data: {'g-recaptcha-response': captchaToken},
                async: false
              })
                .done(function (responceCode) {
                  if (responceCode != 'CPT000') {
                    if (output.hasClass("snackbars")) {
                      output.html('<p><span class="icon text-middle linear-icon-check icon-xxs"></span><span>' + captchaMsg[responceCode] + '</span></p>')

                      setTimeout(function () {
                        output.removeClass("active");
                      }, 3500);

                      captchaFlag = false;
                    } else {
                      output.html(captchaMsg[responceCode]);
                    }

                    output.addClass("active");
                  }
                });
            }

            if (!captchaFlag) {
              return false;
            }

            form.addClass('form-in-process');

            if (output.hasClass("snackbars")) {
              output.html('<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>');
              output.addClass("active");
            }
          } else {
            return false;
          }
        },
        error: function (result) {
          var form = $(plugins.rdMailForm[this.extraData.counter]),
            output = $("#" + $(plugins.rdMailForm[this.extraData.counter]).attr("data-form-output"));
          output.text(msg[result]);
          form.removeClass('form-in-process');

          if (formHasCaptcha) {
            grecaptcha.reset();
          }
        },
        success: function (result) {
          var form = $(plugins.rdMailForm[this.extraData.counter]),
            output = $("#" + form.attr("data-form-output"));

          form
            .addClass('success')
            .removeClass('form-in-process');

          if (formHasCaptcha) {
            grecaptcha.reset();
          }

          result = result.length == 5 ? result : 'MF255';
          output.text(msg[result]);

          if (result === "MF000") {
            if (output.hasClass("snackbars")) {
              output.html('<p><span class="icon text-middle linear-icon-check icon-xxs"></span><span>' + msg[result] + '</span></p>');
            } else {
              output.addClass("active success");
            }
          } else {
            if (output.hasClass("snackbars")) {
              output.html(' <p class="snackbars-left"><span class="icon icon-xxs linear-icon-warning text-middle"></span><span>' + msg[result] + '</span></p>');
            } else {
              output.addClass("active error");
            }
          }

          form.clearForm();
          form.find('input, textarea').blur();

          setTimeout(function () {
            output.removeClass("active error success");
            form.removeClass('success');
          }, 3500);
        }
      });
    }
  }

  /**
   * PhotoSwipe Gallery
   * @description Enables PhotoSwipe Gallery plugin
   */
  if (plugins.photoSwipeGallery.length && !isNoviBuilder) {

    // init image click event
    $document.delegate("[data-photo-swipe-item]", "click", function (event) {
      event.preventDefault();

      var $el = $(this),
        $galleryItems = $el.parents("[data-photo-swipe-gallery]").find("a[data-photo-swipe-item]"),
        pswpElement = document.querySelectorAll('.pswp')[0],
        encounteredItems = {},
        pswpItems = [],
        options,
        pswpIndex = 0,
        pswp;

      if ($galleryItems.length == 0) {
        $galleryItems = $el;
      }

      // loop over the gallery to build up the photoswipe items
      $galleryItems.each(function () {
        var $item = $(this),
          src = $item.attr('href'),
          size = $item.attr('data-size').split('x'),
          pswdItem;

        if ($item.is(':visible')) {

          // if we have this image the first time
          if (!encounteredItems[src]) {
            // build the photoswipe item
            pswdItem = {
              src: src,
              w: parseInt(size[0], 10),
              h: parseInt(size[1], 10),
              el: $item // save link to element for getThumbBoundsFn
            };

            // store that we already had this item
            encounteredItems[src] = {
              item: pswdItem,
              index: pswpIndex
            };

            // push the item to the photoswipe list
            pswpItems.push(pswdItem);
            pswpIndex++;
          }
        }
      });

      options = {
        index: encounteredItems[$el.attr('href')].index,

        getThumbBoundsFn: function (index) {
          var $el = pswpItems[index].el,
            offset = $el.offset();

          return {
            x: offset.left,
            y: offset.top,
            w: $el.width()
          };
        }
      };

      // open the photoswipe gallery
      pswp = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, pswpItems, options);
      pswp.init();
    });
  }

  /**
   * Custom Toggles
   */
  if (plugins.customToggle.length) {
    var i;

    for (i = 0; i < plugins.customToggle.length; i++) {
      var $this = $(plugins.customToggle[i]);

      $this.on('click', $.proxy(function (event) {
        event.preventDefault();
        var $ctx = $(this);
        $($ctx.attr('data-custom-toggle')).add(this).toggleClass('active');
      }, $this));

      if ($this.attr("data-custom-toggle-hide-on-blur") === "true") {
        $("body").on("click", $this, function (e) {
          if (e.target !== e.data[0]
            && $(e.data.attr('data-custom-toggle')).find($(e.target)).length
            && e.data.find($(e.target)).length == 0) {
            $(e.data.attr('data-custom-toggle')).add(e.data[0]).removeClass('active');
          }
        })
      }

      if ($this.attr("data-custom-toggle-disable-on-blur") === "true") {
        $("body").on("click", $this, function (e) {
          if (e.target !== e.data[0] && $(e.data.attr('data-custom-toggle')).find($(e.target)).length == 0 && e.data.find($(e.target)).length == 0) {
            $(e.data.attr('data-custom-toggle')).add(e.data[0]).removeClass('active');
          }
        })
      }
    }
  }
  /**
   * jQuery Count To
   * @description Enables Count To plugin
   */
  if (plugins.counter.length) {
    var i;

    for (i = 0; i < plugins.counter.length; i++) {
      var $counterNotAnimated = $(plugins.counter[i]).not('.animated');
      $document
        .on("scroll", $.proxy(function () {
          var $this = this;

          if ((!$this.hasClass("animated")) && (isScrolledIntoView($this))) {
            $this.countTo({
              refreshInterval: 40,
              from: 0,
              to: parseInt($this.text(), 10),
              speed: $this.attr("data-speed") || 1000
            });
            $this.addClass('animated');
          }
        }, $counterNotAnimated))
        .trigger("scroll");
    }
  }

  /**
   * Circle Progress
   * @description Enable Circle Progress plugin
   */
  if (plugins.circleProgress.length) {
    var i;
    for (i = 0; i < plugins.circleProgress.length; i++) {
      ;
      (function () {
        var proto = $.circleProgress.defaults,
          originalDrawEmptyArc = proto.drawEmptyArc;

        proto.emptyThickness = 5; // just a default value;
                                  // you may override it on init

        // overriding original method
        proto.drawEmptyArc = function (v) {
          var oldGetThickness = this.getThickness,
            oldThickness = this.getThickness(),
            emptyThickness = this.emptyThickness || _oldThickness.call(this),
            oldRadius = this.radius,
            delta = (oldThickness - emptyThickness) / 2;

          this.getThickness = function () {
            return emptyThickness;
          };

          this.radius = oldRadius - delta;
          this.ctx.save();
          this.ctx.translate(delta, delta);

          originalDrawEmptyArc.call(this, v);

          this.ctx.restore();
          this.getThickness = oldGetThickness;
          this.radius = oldRadius;
        };
      })();

      var circleProgressItem = $(plugins.circleProgress[i]);
      $document
        .on("scroll", $.proxy(function () {
          var $this = $(this);

          if (!$this.hasClass('animated') && isScrolledIntoView($this)) {

            var arrayGradients = $this.attr('data-gradient').split(",");

            $this.circleProgress({
              value: $this.attr('data-value'),
              size: $this.attr('data-size') ? $this.attr('data-size') : 175,
              fill: {gradient: arrayGradients, gradientAngle: Math.PI / 4},
              startAngle: -Math.PI / 4 * 2,
              emptyFill: $this.attr('data-empty-fill') ? $this.attr('data-empty-fill') : "rgb(245,245,245)",
              thickness: $this.attr('data-thickness') ? parseInt($this.attr('data-thickness')) : 10,
              emptyThickness: 1,

            }).on('circle-animation-progress', function (event, progress, stepValue) {
              $(this).find('span').text(String(stepValue.toFixed(2)).replace('0.', '').replace('1.', '1'));
            });
            $this.addClass('animated');
          }
        }, circleProgressItem))
        .trigger("scroll");
    }
  }

  /**
   * Linear Progress bar
   * @description  Enable progress bar
   */
  if (plugins.progressLinear.length) {
    for (i = 0; i < plugins.progressLinear.length; i++) {
      var progressBar = $(plugins.progressLinear[i]);
      $window
        .on("scroll load", $.proxy(function () {
          var bar = $(this);
          if (!bar.hasClass('animated-first') && isScrolledIntoView(bar)) {
            var end = parseInt($(this).find('.progress-value').text(), 10);
            bar.find('.progress-bar-linear').css({width: end + '%'});
            bar.find('.progress-value').countTo({
              refreshInterval: 40,
              from: 0,
              to: end,
              speed: 500
            });
            bar.addClass('animated-first');
          }
        }, progressBar));
    }
  }

  /**
   * RD Parallax
   * @description Enables RD Parallax plugin
   */
  if (plugins.rdParallax.length) {
    var i;

    if (!isNoviBuilder) {
      $.RDParallax();
    } else {
      for (i = 0; i < plugins.rdParallax.length; i++) {
        var parallax = $(plugins.rdParallax[i]);
        var imgPath = parallax.find(".rd-parallax-layer" + "[data-type=media]").first().attr("data-url");
        parallax.css({
          "background-image": 'url(' + imgPath + ')',
          "background-attachment": "fixed",
          "background-size": "cover"
        });
      }
    }
    
    if (!isIE && !isMobile && !isNoviBuilder) {
      $(window).on("scroll", function () {
        for (i = 0; i < plugins.rdParallax.length; i++) {
          var parallax = $(plugins.rdParallax[i]);
          if (isScrolledIntoView(parallax)) {
            parallax.find(".rd-parallax-inner").css("position", "fixed");
          } else {
            parallax.find(".rd-parallax-inner").css("position", "absolute");
          }
        }
      });
    }

    $("a[href='#'], a[href^='#']").on("click", function (event) {
      setTimeout(function () {
        $(window).trigger("resize");
      }, 300);
    });
  }

  if (plugins.customParallax.length && !isNoviBuilder) {
    for (var k = 0; k < plugins.customParallax.length; k++) {
      var $this = $(plugins.customParallax[k]),
        wrapper = $('.custom-parallax-wrap'),
        parallax = true,
        speed;

      if (parallax && !isIE && !isMobile) {
        if (speed = $this.attr("data-speed")) {
          makeParallax($this, speed, wrapper, false);
        }
      }
    }
  }


  /**
   * Select2
   * @description Enables select2 plugin
   */
  if (plugins.selectFilter.length) {
    var i;
    for (i = 0; i < plugins.selectFilter.length; i++) {
      var select = $(plugins.selectFilter[i]);

      select.select2({
        theme: "bootstrap"
      }).next().addClass(select.attr("class").match(/(input-sm)|(input-lg)|($)/i).toString().replace(new RegExp(",", 'g'), " "));
    }
  }

  /**
   * RD Flickr Feed
   * @description Enables RD Flickr Feed plugin
   */
  if (plugins.flickrfeed.length > 0) {
    var i;
    for (i = 0; i < plugins.flickrfeed.length; i++) {
      var flickrfeedItem = $(plugins.flickrfeed[i]);
      flickrfeedItem.RDFlickr({
        callback: function () {
          var items = flickrfeedItem.find("[data-photo-swipe-item]"); 

          if (items.length && !isNoviBuilder) {
            for (var j = 0; j < items.length; j++) {
              var image = new Image();
              image.setAttribute('data-index', j);
              image.onload = function () {
                items[this.getAttribute('data-index')].setAttribute('data-size', this.naturalWidth + 'x' + this.naturalHeight);
              };
              image.src = items[j].getAttribute('href');
            }
          }
        }
      });
      
      setTimeout(function() {
        var items = flickrfeedItem.find("[data-photo-swipe-item]"); 
        if (items.length && isNoviBuilder) { 
          for (var j = 0; j < items.length; j++) { 
            items[j].setAttribute('href', '#'); 
            items[j].addEventListener('click', function(e) {
              e.preventDefault();
              return false;
            });
          }
        }
      }, 350);
    }
  }

  /**
   * RD Video
   * @description Enables RD Video plugin
   */
  if (plugins.rdVideoBG.length) {
    var i;
    for (i = 0; i < plugins.rdVideoBG.length; i++) {
      var videoItem = $(plugins.rdVideoBG[i]);
      videoItem.RDVideo({});
    }
  }

  /**
   * RD Audio player
   * @description Enables RD Audio player plugin
   */
  if (plugins.rdAudioPlayer.length && !isNoviBuilder) {
    var i;
    for (i = 0; i < plugins.rdAudioPlayer.length; i++) {
      $(plugins.rdAudioPlayer[i]).RDAudio();
    }
  }

  /**
   * @module       Magnific Popup
   * @author       Dmitry Semenov
   * @see          http://dimsemenov.com/plugins/magnific-popup/
   * @version      v1.0.0
   */
  if (plugins.mfp.length > 0 || plugins.mfpGallery.length > 0 && isNoviBuilder != "designMode") {
    if (plugins.mfp.length) {
      for (i = 0; i < plugins.mfp.length; i++) {
        var mfpItem = plugins.mfp[i];

        $(mfpItem).magnificPopup({
          type: mfpItem.getAttribute("data-lightbox")
        });
      }
    }
    if (plugins.mfpGallery.length) {
      for (i = 0; i < plugins.mfpGallery.length; i++) {
        var mfpGalleryItem = $(plugins.mfpGallery[i]).find('[data-lightbox]');

        for (var c = 0; c < mfpGalleryItem.length; c++) {
          $(mfpGalleryItem).addClass("mfp-" + $(mfpGalleryItem).attr("data-lightbox"));
        }

        mfpGalleryItem.end()
          .magnificPopup({
            delegate: '[data-lightbox]',
            type: "image",
            gallery: {
              enabled: true
            }
          });
      }
    }
  }

  /**
   * Slick carousel
   * @description  Enable Slick carousel plugin
   */
  if (plugins.slick.length) {
    var i;
    for (i = 0; i < plugins.slick.length; i++) {
      var $slickItem = $(plugins.slick[i]);

      $slickItem.slick({
        slidesToScroll: parseInt($slickItem.attr('data-slide-to-scroll')) || 1,
        asNavFor: $slickItem.attr('data-for') || false,
        dots: $slickItem.attr("data-dots") == "true",
        infinite:  isNoviBuilder ? false : $slickItem.attr("data-loop") == "true",
        focusOnSelect: true,
        arrows: $slickItem.attr("data-arrows") == "true",
        swipe: $slickItem.attr("data-swipe") == "true",
        autoplay: $slickItem.attr("data-autoplay") == "true",
        vertical: $slickItem.attr("data-vertical") == "true",
        centerMode: $slickItem.attr("data-center-mode") == "true",
        centerPadding: $slickItem.attr("data-center-padding") ? $slickItem.attr("data-center-padding") : '0.50',
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 0,
            settings: {
              slidesToShow: parseInt($slickItem.attr('data-items')) || 1,
            }
          },
          {
            breakpoint: 479,
            settings: {
              slidesToShow: parseInt($slickItem.attr('data-xs-items')) || 1,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: parseInt($slickItem.attr('data-sm-items')) || 1,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: parseInt($slickItem.attr('data-md-items')) || 1,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: parseInt($slickItem.attr('data-lg-items')) || 1,
              swipe: false
            }
          }
        ]
      })
        .on('afterChange', function (event, slick, currentSlide, nextSlide) {
          var $this = $(this),
            childCarousel = $this.attr('data-child');

          if (childCarousel) {
            $(childCarousel + ' .slick-slide').removeClass('slick-current');
            $(childCarousel + ' .slick-slide').eq(currentSlide).addClass('slick-current');
          }
        });
    }
  }

  /**
   * RD Calendar
   * @description Enables RD Calendar plugin
   */
  if (plugins.calendar.length) {
    var i;
    for (i = 0; i < plugins.calendar.length; i++) {
      var calendarItem = $(plugins.calendar[i]);

      calendarItem.rdCalendar({
        days: calendarItem.attr("data-days") ? calendarItem.attr("data-days").split(/\s?,\s?/i) : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        month: calendarItem.attr("data-months") ? calendarItem.attr("data-months").split(/\s?,\s?/i) : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      });
    }
  }

  /**
   * RD Booking Calendar
   * @description Enables RD Calendar plugin
   */
  if (plugins.bookingCalendar.length) {
    var i;
    for (i = 0; i < plugins.bookingCalendar.length; i++) {
      var calendarItem = $(plugins.bookingCalendar[i]);

      calendarItem.rdCalendar({
        days: calendarItem.attr("data-days") ? calendarItem.attr("data-days").split(/\s?,\s?/i) : ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        month: calendarItem.attr("data-months") ? calendarItem.attr("data-months").split(/\s?,\s?/i) : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      });

      var temp = $('.rdc-table_has-events');

      for (i = 0; i < temp.length; i++) {
        var $this = $(temp[i]);

        $this.on("click", i, function (event) {
          event.preventDefault();
          event.stopPropagation();

          $(this).toggleClass("opened");

          var tableEvents = $('.rdc-table_events'),
            ch = tableEvents.outerHeight(),
            currentEvent = $(this).children('.rdc-table_events'),
            eventCell = $('#calendarEvent' + event.data ),
            animationDuration = 250;

          if($(this).hasClass("opened")){

            $(this).parent().after("<tr id='calendarEvent"+event.data+"' style='height: 0'><td colspan='7'></td></tr>");
            currentEvent.clone().appendTo($('#calendarEvent' +event.data+ ' td'));
            $('#calendarEvent' +event.data+ ' .rdc-table_events').css("height" , "0");
            $('#calendarEvent' +event.data+ ' .rdc-table_events').animate({height: ch + "px"}, animationDuration);

          } else {
            $('#calendarEvent' +event.data+ ' .rdc-table_events').animate({height: "0"}, animationDuration);

            setTimeout(function(){
              eventCell.remove();
            }, animationDuration );

          }
        });
      };

      $(window).on('resize', function () {
        if ($('.rdc-table_has-events').hasClass('active')) {
          var tableEvents = $('.rdc-table_events'),
            ch = tableEvents.outerHeight(),
            tableEventCounter = $('.rdc-table_events-count');
          tableEventCounter.css({
            height: ch + 'px'
          });
        }
      });

      $('input[type="radio"]').on("click", function () {
        if ($(this).attr("value") == "register") {
          $(".register-form").hide();
          $(".login-form").fadeIn('slow');
        }
        if ($(this).attr("value") == "login") {
          $(".register-form").fadeIn('slow');
          $(".login-form").hide();
        }
      });

      $('.rdc-next, .rdc-prev').on("click", function () {
        var temp = $('.rdc-table_has-events');

        for (i = 0; i < temp.length; i++) {
          var $this = $(temp[i]);

          $this.on("click", i, function (event) {
            event.preventDefault();
            event.stopPropagation();

            $(this).toggleClass("opened");

            var tableEvents = $('.rdc-table_events'),
              ch = tableEvents.outerHeight(),
              currentEvent = $(this).children('.rdc-table_events'),
              eventCell = $('#calendarEvent' + event.data ),
              animationDuration = 250;

            if($(this).hasClass("opened")){

              $(this).parent().after("<tr id='calendarEvent"+event.data+"' style='height: 0'><td colspan='7'></td></tr>");
              currentEvent.clone().appendTo($('#calendarEvent' +event.data+ ' td'));
              $('#calendarEvent' +event.data+ ' .rdc-table_events').css("height" , "0");
              $('#calendarEvent' +event.data+ ' .rdc-table_events').animate({height: ch + "px"}, animationDuration);

            } else {
              $('#calendarEvent' +event.data+ ' .rdc-table_events').animate({height: "0"}, animationDuration);

              setTimeout(function(){
                eventCell.remove();
              }, animationDuration );

            }
          });
        };

        $(window).on('resize', function () {
          if ($('.rdc-table_has-events').hasClass('active')) {
            var tableEvents = $('.rdc-table_events'),
              ch = tableEvents.outerHeight(),
              tableEventCounter = $('.rdc-table_events-count');
            tableEventCounter.css({
              height: ch + 'px'
            });
          }
        });

        $('input[type="radio"]').on("click", function () {
          if ($(this).attr("value") == "login") {
            $(".register-form").hide();
            $(".login-form").fadeIn('slow');
          }
          if ($(this).attr("value") == "register") {
            $(".register-form").fadeIn('slow');
            $(".login-form").hide();
          }
        });
      });
    }
  }


  /**
   * Bootstrap Date time picker
   */
  if (plugins.bootstrapDateTimePicker.length) {
    var i;
    for (i = 0; i < plugins.bootstrapDateTimePicker.length; i++) {
      var $dateTimePicker = $(plugins.bootstrapDateTimePicker[i]);
      var options = {};

      options['format'] = 'dddd DD MMMM YYYY - HH:mm';
      if ($dateTimePicker.attr("data-time-picker") == "date") {
        options['format'] = 'DD-MM-YYYY';
        options['minDate'] = new Date();
      } else if ($dateTimePicker.attr("data-time-picker") == "time") {
        options['format'] = 'HH:mm';
      }

      options["time"] = ($dateTimePicker.attr("data-time-picker") != "date");
      options["date"] = ($dateTimePicker.attr("data-time-picker") != "time");
      options["shortTime"] = true;

      $dateTimePicker.bootstrapMaterialDatePicker(options);
    }
  }
  /**
   * Bootstrap collapse
   *
   */
  var bootstrapCollapse = $('.calendar-box-list-view');
  bootstrapCollapse.collapse({
    toggle: false
  });

  $("body").on("click", bootstrapCollapse, function (e) {
    bootstrapCollapse.collapse('hide');
  });

  /**
   * Facebook widget
   * @description  Enables official Facebook widget
   */
  if (plugins.facebookWidget.length) {
    lazyInit(plugins.facebookWidget, function () {
      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    });
  }

  /**
   * RD Twitter Feed
   * @description Enables RD Twitter Feed plugin
   */
  if (plugins.twitterfeed.length) {

    window.twttr = (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = "//platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function (f) {
        t._e.push(f);
      };

      return t;
    }(document, "script", "twitter-timeline"));

  }
  
  /**
   * RD Range
   * @description Enables RD Range plugin
   */
  if (plugins.rdRange.length && !isNoviBuilder) {
    plugins.rdRange.RDRange({});
  }

  /**
   * Stepper
   * @description Enables Stepper Plugin
   */
  if (plugins.stepper.length) {
    plugins.stepper.stepper({
      labels: {
        up: "",
        down: ""
      }
    });
  }

  /**
   * jQuery Countdown
   * @description  Enable countdown plugin
   */
  if (plugins.countDown.length) {
    var i;
    for (i = 0; i < plugins.countDown.length; i++) {
      var countDownItem = plugins.countDown[i],
        d = new Date(),
        type = countDownItem.getAttribute('data-type'),
        time = countDownItem.getAttribute('data-time'),
        format = countDownItem.getAttribute('data-format'),
        settings = [];

      d.setTime(Date.parse(time)).toLocaleString();
      settings[type] = d;
      settings['format'] = format;
      $(countDownItem).countdown(settings);
    }
  }

  /**
   * Custom Waypoints
   */
  if (plugins.customWaypoints.length && !isNoviBuilder) {
    var i;
    for (i = 0; i < plugins.customWaypoints.length; i++) {
      var $this = $(plugins.customWaypoints[i]);
      makeWaypointScroll($this);
    }
  }

  /**
   * JQuery mousewheel plugin
   * @description  Enables jquery mousewheel plugin
 */
  if (plugins.scroller.length) {
    var i;
    for (i = 0; i < plugins.scroller.length; i++) {
      var scrollerItem = $(plugins.scroller[i]);

      scrollerItem.mCustomScrollbar({
        theme: scrollerItem.attr('data-theme') ? scrollerItem.attr('data-theme') : 'minimal',
        scrollInertia: 100,
        scrollButtons: {enable: false}
      });
    }
  }
});

>>>>>>> 3048fd785c6098b8f5e3868b5cb55dd9f37832e9
