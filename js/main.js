/*------------------------------------------------------------------------
MAIN NAV MENU
MENU SCROLLING
SLIDE NAV - MAIN NAV MENU
SPACE TOP ON MOBILE
STICK MENU
TEXT ON A CIRCLE
APPEAR
COUNTER
BACK TO TOP
TOGGLE CLASS - ELEMEMT
TOGGLE CLASS - WRAPPER
DATA PLACEHOLDER
FILTER
LIGHTBOX STYLE 1
LIGHTBOX STYLE 2 - LIGHTBOX GALLERY
LIGHTBOX STYLE 3 - ZOOM GALLERY
POST MANSORY
PROGRESS CIRCLE - PIE CHART - SHORTCODES
PROGRESS CIRCLE STYLE 2 - PIE CHART - SHORTCODES
DATA HREF
FADE ANIMATION SLIDER - SHORTCODES
AUTO ANIMATION SLIDER - SHORTCODES
RANDOM SLIDER WITH TIMER - SHORTCODES
JPLAYER VIDEO 1 (HORIZONTAL TAB - SHORTCODES PAGE)
ART SLIDESHOW HOME
ART SLIDER ABOUT US
PIE CHART - EXPERTIES SKILLS SLIDER - ART SLIDER ABOUT US
ART SLIDER TESTIMONIAL
ART SLIDER LOGO BRAND
MAP CONTACT
POST #5 SLIDER
BUSINESS SLIDESHOW HOME
BUSINESS SLIDER OUR AMAZING TEAM
BUSINESS SLIDER TESTIMONIAL
POST #25 SLIDER
SET HEIGHT - COMING SOON PAGE
COUNTDOWN - COMING SOON PAGE
------------------------------------------------------------------------ */
/**/
/**/
/**/
$(document).ready(function() {
  /* --------------------------------------------------------------------- */
  /* MAIN NAV MENU
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$(".main-nav").length) return;

    // superfish menu
    $(".main-nav .sf-menu").superfish({
      cssArrows: false
    });

    // add class: .active
    $(".main-nav li.active").parents("li").addClass("active");
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* MENU SCROLLING
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$(".main-nav").length) return;

    // set active #home menu after load homepage
    if (window.location.hash === "#home" || window.location.hash === "") {
      $("html, body").animate({
        scrollTop: 100
      }, 100);

      $("html, body").animate({
        scrollTop: 0
      }, 100);
    }

    // height of header when added class affix
    var headerAffixHeight = 60;

    // set active menu after load homepage
    var bookmark = window.location.hash;

    // console.log(bookmark);

    if (bookmark != "") {
      var item = $("" + bookmark + "");

      $(window).on("load", function() {
        $("html, body").animate({
          scrollTop: item.offset().top - headerAffixHeight
        }, 100);
      });
    }

    // ScrollSpy: automatically updating nav targets based on scroll position.
    $("body").scrollspy({
      target: ".main-nav",
      offset: headerAffixHeight
    });

    // Smooth Scrolling, bookmark Link
    $(".main-nav > ul > li > a, .art-slideshow-home .btn-contact").on("click", function(event) {
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top - headerAffixHeight + 1
      }, {
        queue: false,
        duration: 1200
      });

      event.preventDefault();
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* SLIDE NAV - MAIN NAV MENU
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$(".has-slide-nav").length) return;

    // create: .slide-nav
    $(".has-slide-nav .main-nav").prepend(
      $("<div />").addClass("slide-nav").append(
        $("<div />").addClass("line").append(
          $("<div />").addClass("circle").append()
        )
      )
    );

    // set position circle after load and scroll
    $(window).on("load scroll", function() {
      var menuItemActive = $(".has-slide-nav .main-nav > ul > li.active");
      var widthmenuItemActive = menuItemActive.width();
      $(".has-slide-nav .slide-nav .circle").css("left", menuItemActive.position().left + (widthmenuItemActive / 2));
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* SPACE TOP ON MOBILE
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$(".header").length) return;

    // space top on mobile (<= 991)
    var getViewport = function() {
      var e = window,
        a = 'inner';
      if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
      }
      return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
      };
    };

    var spaceTop = function() {
      if (getViewport().width <= 991) {
        $(".site").css({
          "padding-top": $(".header").outerHeight()
        });
      } else {
        $(".site").css({
          "padding-top": ""
        });
      }
    };

    $(document).on("ready", function() {
      spaceTop();
    });

    $(window).on("scroll resize", function() {
      spaceTop();
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* STICK MENU
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$(".header").length) return;

    $(window).on("scroll load", function() {
      var header = $(".header");
      var elmHeight = header.outerHeight(true);
      var scrolltop = $(window).scrollTop();

      if (scrolltop > elmHeight) {
        if (!header.hasClass("affix")) {
          header.addClass("affix");
          $("body").addClass("has-header-affix");
        }
      } else {
        header.removeClass("affix");
        $("body").removeClass("has-header-affix");
      }
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* TEXT ON A CIRCLE
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$(".gr-text-circle").length) return;

    $('.gr-text-circle').each(function() {
      var letter = $(this).find("li");
      var degree = 0;

      letter.each(function() {
        $(this).css("transform", "translate(-50%, 0) rotate(" + degree + "deg)");
        degree += 7;
      });
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* APPEAR
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$(".gr-animated").length) return;

    $(".gr-animated").appear();

    $(document.body).on("appear", ".gr-animated", function() {
      $(this).addClass("go");
    });

    $(document.body).on("disappear", ".gr-animated", function() {
      $(this).removeClass("go");
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* COUNTER
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$(".gr-number-counter").length) return;

    $(".gr-number-counter").appear(); // require jquery-appear

    $(document.body).on("appear", ".gr-number-counter", function() {
      var counter = $(this);

      if (!counter.hasClass("count-complete")) {
        counter.countTo({
          speed: 1500,
          refreshInterval: 100,
          onComplete: function() {
            counter.addClass("count-complete");
          }
        });
      }
    });

    $(document.body).on("disappear", ".gr-number-counter", function() {
      $(this).removeClass("count-complete");
    });
  })(jQuery);




  /* --------------------------------------------------------------------- */
  /* BACK TO TOP
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$(".gr-btn-back-to-top").length) return;

    $(document.body).on("click", ".gr-btn-back-to-top", function(event) {
      event.preventDefault();

      $("html, body").animate({
        scrollTop: 0
      }, 500);

      return false;
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* TOGGLE CLASS - ELEMEMT
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$("[data-gr-toggle-class]").length) return;

    $("[data-gr-toggle-class]").on("click", function() {
      var thisClass = $(this).attr("data-gr-toggle-class");
      $(this).toggleClass(thisClass);
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* TOGGLE CLASS - WRAPPER
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$(".gr-toggle-class-wrapper").length) return;

    $(".gr-toggle-class-wrapper").each(function() {
      var wrapper = $(this);
      var buttonToggle = wrapper.find(".gr-btn-toggle");

      buttonToggle.on("click", function() {
        if (!wrapper.hasClass("open")) {
          wrapper.addClass("open");
        } else {
          wrapper.removeClass("open");
        }
      });
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* DATA PLACEHOLDER
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$("[data-gr-placeholder]").length) return;

    $("[data-gr-placeholder]").each(function() {
      var placeholderContent = $(this).attr("data-gr-placeholder");
      $(this).attr("placeholder", placeholderContent);

      $(this).on("focus", function() {
        $(this).attr("placeholder", "");
      });

      $(this).on("blur", function() {
        $(this).attr("placeholder", placeholderContent);
      });
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* FILTER
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$("[class*='gr-filter']").length) return;

    $("[class*='gr-filter-list']").isotope({
      itemSelector: "[class*='gr-filter-list'] .item",
      layoutMode: "fitRows"
    });

    // init Isotope
    var grid = $("[class*='gr-filter-list']").isotope({
      itemSelector: "[class*='gr-filter-list'] .item",
      layoutMode: "fitRows"
    });

    // bind filter button click
    $("[class*='gr-filter-button']").on("click", "button", function() {
      var filterValue = $(this).attr("data-filter");

      grid.isotope({
        filter: filterValue
      });
    });

    // change is-checked class on buttons
    $("[class*='gr-filter-button']").each(function() {
      var button = $(this);

      button.on("click", "button", function() {
        button.find(".is-checked").removeClass("is-checked");
        $(this).addClass("is-checked");
      });
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* LIGHTBOX STYLE 1
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$(".gr-lightbox-style-1").length) return;

    $(".gr-lightbox-style-1").each(function() {
      var wrapper = $(this);
      var btnOpen = wrapper.find(".gr-lightbox-style-1-btn-open");

      btnOpen.magnificPopup({
        type: "inline",
        midClick: true,

        gallery: {
          enabled: true,
          tPrev: "Previous",
          tNext: "Next"
        },

        callbacks: {
          buildControls: function() {
            if (btnOpen.length >= 2) {
              this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
            }
          },

          open: function() {
            $("body").addClass("has-lightbox");
            $(".mfp-wrap").addClass("gr-lightbox-style-1-popup");
            $(".mfp-close").empty();
          },

          close: function() {
            $("body").removeClass("has-lightbox");

            // fix error height when close lightbox
            $("body").find(".gr-filter-list-style-2 > .item > .item-inner").each(function() {
              $(this).css("position", "static");
            });

            setTimeout(function() {
              $("body").find(".gr-filter-list-style-2 > .item > .item-inner").each(function() {
                $(this).css("position", "relative");
              });
            }, 100);
          }
        }
      });
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* LIGHTBOX STYLE 2 - LIGHTBOX GALLERY
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$(".gr-lightbox-style-2").length) return;

    $(".gr-lightbox-style-2").each(function() {
      var wrapper = $(this);

      wrapper.magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',

        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1]
        },

        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',

          titleSrc: function(item) {
            return item.el.attr('title');
          }
        },

        callbacks: {
          open: function() {
            $("body").addClass("has-lightbox");
            $(".mfp-wrap").addClass("gr-lightbox-style-2-popup");
          },

          close: function() {
            $("body").removeClass("has-lightbox");
          }
        }
      });
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* LIGHTBOX STYLE 3 - ZOOM GALLERY
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$(".gr-lightbox-style-3").length) return;


    $(".gr-lightbox-style-3").each(function() {
      var wrapper = $(this);

      wrapper.magnificPopup({
        delegate: "a",
        type: "image",
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: "mfp-with-zoom mfp-img-mobile",
        tLoading: "Loading image #%curr%...",

        image: {
          verticalFit: true,
          tError: "<a href='%url%'>The image #%curr%</a> could not be loaded.",

          titleSrc: function(item) {
            return item.el.attr("title");
          }
        },

        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1]
        },

        zoom: {
          enabled: true,
          duration: 400, // don't foget to change the duration also in CSS
          opener: function(element) {
            return element.find(".content-lightbox-thumbnail");
          }
        },

        callbacks: {
          open: function() {
            $("body").addClass("has-lightbox");
            $(".mfp-wrap").addClass("gr-lightbox-style-3-popup");
          },

          close: function() {
            $("body").removeClass("has-lightbox");
          }
        }
      });
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* POST MANSORY
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$(".gr-post-mansory-wrapper").length) return;

    $(".gr-post-mansory-wrapper").each(function() {
      $(this).isotope({
        itemSelector: '.post-mansory'
      });
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* PROGRESS CIRCLE - PIE CHART - SHORTCODES
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$(".gr-progress-circle").length) return;

    $(".gr-progress-circle").asPieProgress({
      namespace: 'gr-progress-circle',

      classes: {
        svg: 'gr-progress-circle-svg',
        element: 'gr-progress-circle',
        number: 'gr-progress-circle-number'
      }
    });

    $(".gr-progress-circle").appear(); // require jquery-appear

    $(document.body).on("appear", ".gr-progress-circle", function() {
      $(this).asPieProgress('start');
    });

    $(document.body).on("disappear", ".gr-progress-circle", function() {
      $(this).asPieProgress('reset');
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* PROGRESS CIRCLE STYLE 2 - PIE CHART - SHORTCODES
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$(".gr-progress-circle-style-2").length) return;

    $(".gr-progress-circle-style-2").each(function() {
      var wrapper = $(this);
      var label = wrapper.find(".gr-progress-circle-label");
      var bgCopy = wrapper.find(".bg-copy");
      var barcolor = wrapper.find("[data-barcolor]").attr("data-barcolor");

      bgCopy.css("border-color", "" + barcolor + "");

      wrapper.on({
        mouseenter: function() {
          bgCopy.css("background-color", "" + barcolor + "");
          label.css("color", "" + barcolor + "");
        },

        mouseleave: function() {
          bgCopy.css("background-color", "");
          label.css("color", "");
        }
      });
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* DATA HREF
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$("[data-gr-href]").length) return;

    $(document.body).on("click", "[data-gr-href]", function() {
      window.location = $(this).attr("data-gr-href");
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* FADE ANIMATION SLIDER - SHORTCODES
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$("#fade-animation-slider").length) return;

    $("#fade-animation-slider .gr-slider-wrapper").carouFredSel({
      infinite: true,
      circular: true,
      responsive: true,
      debug: false,

      scroll: {
        items: 1,
        duration: 600,
        pauseOnHover: "resume",
        fx: "fade"
      },

      auto: {
        timeoutDuration: 6000,
        play: true
      },

      swipe: {
        onTouch: true,
        onMouse: true
      },

      pagination: {
        container: "#fade-animation-slider-indicators"
      },

      prev: {
        button: "#fade-animation-slider-prev"
      },

      next: {
        button: "#fade-animation-slider-next"
      }
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* AUTO ANIMATION SLIDER - SHORTCODES
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$("#auto-animation-slider").length) return;

    $("#auto-animation-slider .gr-slider-wrapper").carouFredSel({
      infinite: true,
      circular: true,
      responsive: true,
      debug: false,

      scroll: {
        items: 1,
        duration: 600,
        pauseOnHover: "resume",
        fx: "scroll"
      },

      auto: {
        timeoutDuration: 6000,
        play: true
      },

      swipe: {
        onTouch: true,
        onMouse: true
      },
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* RANDOM SLIDER WITH TIMER - SHORTCODES
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$("#random-slider-with-timer").length) return;

    $("#random-slider-with-timer .gr-slider-wrapper").carouFredSel({
      infinite: true,
      circular: true,
      responsive: true,
      debug: false,

      items: {
        start: "random"
      },

      scroll: {
        items: 1,
        duration: 600,
        pauseOnHover: "resume",
        fx: "scroll"
      },

      auto: {
        timeoutDuration: 6000,
        play: true,
        progress: {
          bar: "#random-slider-with-timer-timer"
        }
      },

      swipe: {
        onTouch: true,
        onMouse: true
      },

      pagination: {
        container: "#random-slider-with-timer-indicators"
      }
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* JPLAYER VIDEO 1 (HORIZONTAL TAB - SHORTCODES PAGE)
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$("#jplayer-video-1").length) return;

    $("#jplayer-video-1").jPlayer({
      ready: function() {
        $(this).jPlayer("setMedia", {
          m4v: "http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v"
        })
      },

      size: {
        width: "100%",
        height: "100%"
      },

      swfPath: "../libs/jplayer/dist/jplayer",
      cssSelectorAncestor: "#jplayer-interface-video-1",
      supplied: "m4v,"
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* ART SLIDESHOW HOME
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$("#art-slideshow-home").length) return;

    $('#art-slideshow-home .gr-slider-wrapper').carouFredSel({
      infinite: true,
      circular: true,
      responsive: true,
      debug: false,

      scroll: {
        items: 1,
        duration: 600,
        pauseOnHover: "resume",
        fx: "scroll"
      },

      auto: {
        timeoutDuration: 6000,
        play: true
      },

      swipe: {
        onTouch: true,
        onMouse: true
      }
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* ART SLIDER ABOUT US
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$("#art-slider-about-us").length) return;

    $('#art-slider-about-us .gr-slider-wrapper').carouFredSel({
      infinite: true,
      circular: true,
      responsive: true,
      debug: false,

      scroll: {
        items: 1,
        duration: 600,
        pauseOnHover: "resume",
        fx: "scroll"
      },

      auto: {
        timeoutDuration: 6000,
        play: true
      },

      swipe: {
        onTouch: true,
        onMouse: true
      },

      prev: {
        button: "#art-slider-about-us-prev"
      },

      next: {
        button: "#art-slider-about-us-next"
      }
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* PIE CHART - EXPERTIES SKILLS SLIDER - ART SLIDER ABOUT US
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$(".slider-experties-skills .gr-progress-circle").length) return;

    $(".slider-experties-skills .gr-progress-circle").asPieProgress("start");
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* ART SLIDER TESTIMONIAL
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$("#art-slider-testimonial").length) return;

    var highlight = function() {
      var $this = $("#art-slider-testimonial .gr-slider-wrapper");
      var items = $this.triggerHandler("currentVisible");

      $this.children().removeClass("active");
      $this.children().addClass("inactive");

      items.addClass("active").removeClass("inactive");
    };

    $("#art-slider-testimonial .gr-slider-wrapper").carouFredSel({
      infinite: true,
      circular: true,
      responsive: true,
      debug: false,

      items: {
        height: "variable",
        visible: {
          min: 1,
          max: 3
        }
      },

      scroll: {
        items: null,
        duration: 600,
        pauseOnHover: "resume",
        fx: "scroll",
        onAfter: highlight
      },

      onCreate: highlight,

      auto: {
        timeoutDuration: 6000,
        play: true
      },

      swipe: {
        onTouch: true,
        onMouse: true
      },

      pagination: {
        container: "#art-slider-testimonial-indicators"
      },

      prev: {
        button: "#art-slider-testimonial-prev"
      },

      next: {
        button: "#art-slider-testimonial-next"
      }
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* ART SLIDER LOGO BRAND
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$("#art-slider-logo-brand").length) return;

    $("#art-slider-logo-brand .gr-slider-wrapper").carouFredSel({
      infinite: true,
      circular: true,
      responsive: true,
      debug: false,

      items: {
        height: "variable",
        visible: {
          min: 1,
          max: 5
        }
      },

      scroll: {
        items: null,
        duration: 600,
        pauseOnHover: "resume",
        fx: "scroll"
      },

      auto: {
        timeoutDuration: 6000,
        play: true
      },

      swipe: {
        onTouch: true,
        onMouse: true
      },

      prev: {
        button: "#art-slider-logo-brand-prev"
      },

      next: {
        button: "#art-slider-logo-brand-next"
      }
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* MAP CONTACT
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$("#gr-map-canvas").length) return;

    var latitude = $("#gr-map-canvas").attr("data-latitude");
    var longitude = $("#gr-map-canvas").attr("data-longitude");
    var address = $("#gr-map-canvas").attr("data-address");

    function mapInitialize() {
      var myLatlng = new google.maps.LatLng(latitude, longitude)
      var mapOptions = {
        center: myLatlng,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        draggable: true
      };

      var map = new google.maps.Map(document.getElementById("gr-map-canvas"), mapOptions);

      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
      });

      var infowindow = new google.maps.InfoWindow({
        content: address
      });

      google.maps.event.addListener(marker, "click", function() {
        infowindow.open(map, marker);
      });
    }

    mapInitialize();
    
    $(".art-contact [data-toggle='tab']").on("shown.bs.tab", function (e) {
      mapInitialize();
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* POST #5 SLIDER
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$(".post.format-gallery-slider .gr-caroufredsel").length) return;

    $("#post5-slider .gr-slider-wrapper").carouFredSel({
      infinite: true,
      circular: true,
      responsive: true,
      debug: false,

      scroll: {
        items: 1,
        duration: 600,
        pauseOnHover: "resume",
        fx: "scroll"
      },

      auto: {
        timeoutDuration: 6000,
        play: true
      },

      swipe: {
        onTouch: true,
        onMouse: true
      },

      prev: {
        button: "#post5-slider-prev"
      },

      next: {
        button: "#post5-slider-next"
      }
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* BUSINESS SLIDESHOW HOME
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$("#business-slideshow-home").length) return;

    var businessSlideshowHome = $("#business-slideshow-home .gr-slider-wrapper").lightSlider({
      gallery: true,
      item: 1,
      auto: true,
      loop: true,
      slideEndAnimation: true,
      speed: 600,
      pause: 6000,
      keyPress: false,
      controls: false,
      slideMargin: 0,
      galleryMargin: 0,
      thumbMargin: 0,
      thumbItem: 7
    });

    businessSlideshowHome.goToSlide(4);
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* BUSINESS SLIDER OUR AMAZING TEAM
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$("#business-slider-our-amazing-team").length) return;

    $("#business-slider-our-amazing-team .gr-slider-wrapper").carouFredSel({
      infinite: true,
      circular: true,
      responsive: true,
      debug: false,

      items: {
        height: "variable",
        visible: {
          min: 1,
          max: 5
        }
      },

      scroll: {
        items: null,
        duration: 600,
        pauseOnHover: "resume",
        fx: "scroll"
      },

      auto: {
        timeoutDuration: 6000,
        play: true
      },

      swipe: {
        onTouch: true,
        onMouse: true
      },

      prev: {
        button: "#business-slider-our-amazing-team-prev"
      },

      next: {
        button: "#business-slider-our-amazing-team-next"
      }
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* BUSINESS SLIDER TESTIMONIAL
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$("#business-slider-testimonial").length) return;

    var businessSlideshowHome = $("#business-slider-testimonial .gr-slider-wrapper").lightSlider({
      gallery: true,
      item: 1,
      auto: true,
      loop: true,
      slideEndAnimation: true,
      speed: 600,
      pause: 6000,
      keyPress: false,
      controls: false,
      slideMargin: 0,
      galleryMargin: 0,
      thumbMargin: 0,
      thumbItem: 15
    });

    businessSlideshowHome.goToSlide(8);
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* POST #25 SLIDER
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$(".post.format-gallery-slider .gr-caroufredsel").length) return;

    $("#post25-slider .gr-slider-wrapper").carouFredSel({
      infinite: true,
      circular: true,
      responsive: true,
      debug: false,

      scroll: {
        items: 1,
        duration: 600,
        pauseOnHover: "resume",
        fx: "scroll"
      },

      auto: {
        timeoutDuration: 6000,
        play: true
      },

      swipe: {
        onTouch: true,
        onMouse: true
      },

      prev: {
        button: "#post25-slider-prev"
      },

      next: {
        button: "#post25-slider-next"
      }
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* SET HEIGHT - COMING SOON PAGE
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$(".coming-soon-page").length) return;

    var getViewport = function() {
      var e = window,
        a = 'inner';
      if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
      }
      return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
      };
    };

    function heightComingSoonPage() {
      var comingSoonPage = $(".coming-soon-page");
      comingSoonPage.outerHeight() < getViewport().height ? comingSoonPage.css("height", getViewport().height) : comingSoonPage.css("height", "")
    };

    $(document).on("ready", function() {
      heightComingSoonPage();
    });

    $(window).on("resize", function() {
      heightComingSoonPage();
    });
  })(jQuery);



  /* --------------------------------------------------------------------- */
  /* COUNTDOWN - COMING SOON PAGE
  /* --------------------------------------------------------------------- */
  (function($) {
    if (!$(".coming-soon-page").length) return;

    jQuery('#countdown-coming-soon').countDown({
      targetDate: {
        'day': 16,
        'month': 7,
        'year': 2018,
        'hour': 11,
        'min': 00,
        'sec': 00
      },
      omitWeeks: true
    });
  })(jQuery);



});
