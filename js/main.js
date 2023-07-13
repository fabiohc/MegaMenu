!(function () {
  window.NodeList &&
    !NodeList.prototype.forEach &&
    (NodeList.prototype.forEach = function (e, t) {
      t = t || window;
      for (var o = 0; o < this.length; o++) e.call(t, this[o], o, this);
    });
  var e = document.querySelector(
      ".header__language-switcher .lang_list_class li:first-child"
    ),
    t = document.querySelector(".header__language-switcher .lang_list_class"),
    o = document.querySelector(".header__navigation"),
    s = document.querySelector(".header__language-switcher"),
    n = document.querySelector(".header__search"),
    c = document.querySelectorAll(".header--toggle"),
    l = document.querySelector(".header__navigation--toggle"),
    a = document.querySelector(".header__language-switcher--toggle"),
    d = document.querySelector(".header__search--toggle"),
    r = document.querySelector(".header__close--toggle"),
    i = document.querySelectorAll(".header--element, .header--toggle");

  function u() {
    document.body.classList.add("enable-focus-styles"),
      document.body.classList.remove("disable-focus-styles");
  }

  function m() {
    document.body.classList.add("disable-focus-styles"),
      document.body.classList.remove("enable-focus-styles");
  }

  function g() {
    t.classList.add("first-active");
  }

  function y() {
    t.classList.remove("first-active");
  }

  function h() {
    c.forEach(function (e) {
      e.classList.toggle("hide");
    }),
      o.classList.toggle("open"),
      l.classList.toggle("open"),
      r.classList.toggle("show");
  }

  function f() {
    c.forEach(function (e) {
      e.classList.toggle("hide");
    }),
      s.classList.toggle("open"),
      a.classList.toggle("open"),
      r.classList.toggle("show");
  }

  function L() {
    c.forEach(function (e) {
      e.classList.toggle("hide");
    }),
      n.classList.toggle("open"),
      d.classList.toggle("open"),
      r.classList.toggle("show");
  }

  function v() {
    i.forEach(function (e) {
      e.classList.remove("hide", "open");
    }),
      r.classList.remove("show");
  }
  var _ = document.querySelector(".hideBtn");
  _ &&
    _.addEventListener("click", function () {
      (document.querySelector(".elements-overlay-search").style.opacity = 0),
        setTimeout(function () {
          document.querySelector(".elements-overlay-search").style.display =
            "none";
        }, 400),
        (document.getElementById("searchBar").style.WebkitTransform =
          "translate(0px,-100px)");
    });
  var p,
    E = document.querySelector(".showBtn");
  E &&
    E.addEventListener("click", function () {
      var e = document.querySelector(".elements-overlay-search");
      e &&
        ((e.style.display = "block"),
        setTimeout(function () {
          e.style.opacity = 1;
        }, 100),
        setTimeout(function () {
          document.getElementById("searchBar").style.WebkitTransform =
            "translate(0px,100px)";
        }, 5),
        v());
    }),
    (p = function () {
      document.body &&
        (document.body.addEventListener("keydown", u),
        document.body.addEventListener("mousemove", m),
        document.body.addEventListener("mousedown", m),
        document.body.addEventListener("mouseup", m),
        s &&
          (e &&
            (e.addEventListener("mouseover", g),
            e.addEventListener("mouseout", y)),
          a && a.addEventListener("click", f)),
        l && l.addEventListener("click", h),
        d && d.addEventListener("click", L),
        r && r.addEventListener("click", v));
    }),
    ["interactive", "complete"].indexOf(document.readyState) >= 0
      ? p()
      : document.addEventListener("DOMContentLoaded", p);
})();

jQuery(document).ready(function ($) {
  //if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
  var MqL = 1170;
  //move nav element position according to window width
  moveNavigation();
  $(window).on("resize", function () {
    !window.requestAnimationFrame
      ? setTimeout(moveNavigation, 300)
      : window.requestAnimationFrame(moveNavigation);
  });

  //mobile - open lateral menu clicking on the menu icon
  $(".cd-nav-trigger").on("click", function (event) {
    event.preventDefault();
    if ($(".cd-main-content").hasClass("nav-is-visible")) {
      closeNav();
      $(".cd-overlay").removeClass("is-visible");
    } else {
      $(this).addClass("nav-is-visible");
      $(".cd-primary-nav").addClass("nav-is-visible");
      $(".cd-main-header").addClass("nav-is-visible");
      $(".cd-main-content")
        .addClass("nav-is-visible")
        .one(
          "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
          function () {
            $("body").addClass("overflow-hidden");
          }
        );
      toggleSearch("close");
      $(".cd-overlay").addClass("is-visible");
    }
  });

  //open search form
  $(".cd-search-trigger").on("click", function (event) {
    event.preventDefault();
    toggleSearch();
    closeNav();
  });

  //close lateral menu on mobile
  $(".cd-overlay").on("swiperight", function () {
    if ($(".cd-primary-nav").hasClass("nav-is-visible")) {
      closeNav();
      $(".cd-overlay").removeClass("is-visible");
    }
  });
  $(".nav-on-left .cd-overlay").on("swipeleft", function () {
    if ($(".cd-primary-nav").hasClass("nav-is-visible")) {
      closeNav();
      $(".cd-overlay").removeClass("is-visible");
    }
  });
  $(".cd-overlay").on("click", function () {
    closeNav();
    toggleSearch("close");
    $(".cd-overlay").removeClass("is-visible");
  });

  //prevent default clicking on direct children of .cd-primary-nav
  $(".cd-primary-nav")
    .children(".has-children")
    .children("a")
    .on("click", function (event) {
      event.preventDefault();
    });
  //open submenu
  $(".has-children")
    .children("a")
    .on("click", function (event) {
      if (!checkWindowWidth()) event.preventDefault();
      var selected = $(this);
      if (selected.next("ul").hasClass("is-hidden")) {
        //desktop version only
        selected
          .addClass("selected")
          .next("ul")
          .removeClass("is-hidden")
          .end()
          .parent(".has-children")
          .parent("ul")
          .addClass("moves-out");
        selected
          .parent(".has-children")
          .siblings(".has-children")
          .children("ul")
          .addClass("is-hidden")
          .end()
          .children("a")
          .removeClass("selected");
        $(".cd-overlay").addClass("is-visible");
      } else {
        selected
          .removeClass("selected")
          .next("ul")
          .addClass("is-hidden")
          .end()
          .parent(".has-children")
          .parent("ul")
          .removeClass("moves-out");
        $(".cd-overlay").removeClass("is-visible");
      }
      toggleSearch("close");
    });

  //submenu items - go back link
  $(".go-back").on("click", function () {
    $(this)
      .parent("ul")
      .addClass("is-hidden")
      .parent(".has-children")
      .parent("ul")
      .removeClass("moves-out");
  });

  function closeNav() {
    $(".cd-nav-trigger").removeClass("nav-is-visible");
    $(".cd-main-header").removeClass("nav-is-visible");
    $(".cd-primary-nav").removeClass("nav-is-visible");
    $(".has-children ul").addClass("is-hidden");
    $(".has-children a").removeClass("selected");
    $(".moves-out").removeClass("moves-out");
    $(".cd-main-content")
      .removeClass("nav-is-visible")
      .one(
        "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
        function () {
          $("body").removeClass("overflow-hidden");
        }
      );
  }

  function toggleSearch(type) {
    if (type == "close") {
      //close serach
      $(".cd-search").removeClass("is-visible");
      $(".cd-search-trigger").removeClass("search-is-visible");
      $(".cd-overlay").removeClass("search-is-visible");
    } else {
      //toggle search visibility
      $(".cd-search").toggleClass("is-visible");
      $(".cd-search-trigger").toggleClass("search-is-visible");
      $(".cd-overlay").toggleClass("search-is-visible");
      if ($(window).width() > MqL && $(".cd-search").hasClass("is-visible"))
        $(".cd-search").find('input[type="search"]').focus();
      $(".cd-search").hasClass("is-visible")
        ? $(".cd-overlay").addClass("is-visible")
        : $(".cd-overlay").removeClass("is-visible");
    }
  }

  function checkWindowWidth() {
    //check window width (scrollbar included)
    var e = window,
      a = "inner";
    if (!("innerWidth" in window)) {
      a = "client";
      e = document.documentElement || document.body;
    }
    if (e[a + "Width"] >= MqL) {
      return true;
    } else {
      return false;
    }
  }

  function moveNavigation() {
    var navigation = $(".cd-nav");
    var desktop = checkWindowWidth();
    if (desktop) {
      navigation.detach();
      navigation.insertBefore(".cd-header-buttons");
    } else {
      navigation.detach();
      navigation.insertAfter(".cd-main-content");
    }
  }
});
