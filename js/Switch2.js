!function (t) { "use strict"; function e() { function t() { AOS.refresh() } AOS.init({ disable: "mobile", offset: 120, once: !0, duration: 1e3, easing: "ease" }), t(), VLTJS.debounceResize(t) } var i = t(".sf-menu-onepage"), n = i.find("a"), s = t("section"); if (VLTJS.window.on("load scroll", function () { var e = VLTJS.window.scrollTop(); n.each(function () { var i = t(this), n = s.filter(i.attr("href")); n.offset().top <= e + 90 && n.offset().top + n.outerHeight() > e + 90 ? i.parent("li").addClass("current-menu-item") : i.parent("li").removeClass("sfHover current-menu-item") }) }), t("section").each(function () { var e = 0; t(".vlt-demo-feature--style-2", this).each(function () { t(this).height() > e && (e = t(this).height()) }), t(".vlt-demo-feature--style-2", this).height(e) }), t("ul.sf-menu li.current-menu-item").parents("li").addClass("current-menu-item"), void 0 !== t.fn.stickySidebar && VLTJS.document.imagesLoaded(function () { t(".vlt-sticky-sidebar").stickySidebar({ topSpacing: 60, bottomSpacing: 60 }) }), void 0 !== t.fn.jarallax && t(".jarallax").jarallax({ speed: .8 }), "undefined" != typeof lax) { lax.setup(); const a = function () { lax.update(window.scrollY), window.requestAnimationFrame(a) }; window.requestAnimationFrame(a), VLTJS.debounceResize(function () { lax.updateElements() }) } "function" == typeof FastClick && FastClick.attach(document.body), "undefined" != typeof AOS && VLTJS.window.on("vlt.site-loaded", e), void 0 !== t.fn.fancybox && (t.fancybox.defaults.btnTpl = { close: '<button data-fancybox-close class="fancybox-button fancybox-button--close"><i class="icon-cross"></i></button>', arrowLeft: '<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" href="javascript:;"><i class="icon-arrow-left"></i></a>', arrowRight: '<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" href="javascript:;"><i class="icon-arrow-right"></i></a>', smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small"><i class="icon-cross"></i></button>' }, t.fancybox.defaults.buttons = ["close"], t.fancybox.defaults.infobar = !1, t.fancybox.defaults.transitionEffect = "slide") }(jQuery), function (t) { "use strict"; VLTJS.submenuEffectStyle1 = { config: { easing: "power2.out" }, init: function () { function e(t) { var e = t.closest(n), i = e.find("ul.sf-menu"), s = i.find("li.menu-item-has-children.open > ul.sub-menu:not(.closed)"), a = ""; s.length && (a = s.innerHeight()), i.css({ height: a, minHeight: a }) } function i(t, e) { var i = e.find("> ul.sub-menu > li > a"), n = e.parent().find("> li > a"); if (t) e.addClass("open").parent().addClass("closed"); else { e.removeClass("open").parent().removeClass("closed"); var s = i; i = n, n = s } gsap.set(i, { x: t ? "15%" : "-15%", opacity: 0, display: "block" }), gsap.timeline({ defaults: { ease: VLTJS.submenuEffectStyle1.config.easing } }).to(i, .2, { x: "0%", opacity: 1, stagger: { amount: .2 } }).to(n, .2, { x: t ? "-15%" : "15%", opacity: 0, stagger: { amount: .2 }, onComplete: function () { n.css("display", "none") } }, -.15) } var n = t('[data-submenu-effect="style-1"]'), s = n.find("ul.sf-menu"); s.find("ul.sub-menu").prepend('<li class="sub-menu-back"><a href="#">' + s.data("back-text") + "</a></li>"), s.on("click", "li.menu-item-has-children > a", function (n) { i(!0, t(this).parent()), e(t(this)), n.preventDefault() }), s.on("click", "li.sub-menu-back > a", function (n) { i(!1, t(this).parent().parent().parent()), e(t(this)), n.preventDefault() }) } }, VLTJS.submenuEffectStyle1.init(), VLTJS.submenuEffectStyle2 = { config: { easing: "power2.out" }, init: function () { function e(t) { var e = t.closest(n), i = e.find("ul.sf-menu"), s = i.find("li.menu-item-has-children.open > ul.sub-menu:not(.closed)"), a = ""; s.length && (a = s.innerHeight()), i.css({ height: a, minHeight: a }) } function i(t, e) { var i = e.find("> ul.sub-menu > li > a"), n = e.parent().find("> li > a"); if (t) e.addClass("open").parent().addClass("closed"); else { e.removeClass("open").parent().removeClass("closed"); var s = i; i = n, n = s } gsap.set(i, { opacity: 0, display: "block" }), gsap.timeline({ defaults: { ease: VLTJS.submenuEffectStyle2.config.easing } }).to(n, .2, { opacity: 0, stagger: { amount: .2 }, onComplete: function () { n.css("display", "none") } }).to(i, .2, { opacity: 1, stagger: { amount: .2 } }) } var n = t('[data-submenu-effect="style-2"]'), s = n.find("ul.sf-menu"); s.find("ul.sub-menu").prepend('<li class="sub-menu-back"><a href="#">' + s.data("back-text") + "</a></li>"), s.on("click", "li.menu-item-has-children > a", function (n) { i(!0, t(this).parent()), e(t(this)), n.preventDefault() }), s.on("click", "li.sub-menu-back > a", function (n) { i(!1, t(this).parent().parent().parent()), e(t(this)), n.preventDefault() }) } }, VLTJS.submenuEffectStyle2.init(), VLTJS.submenuEffectStyle3 = { config: { easing: "power2.out" }, init: function () { var e = t('[data-submenu-effect="style-3"]'), i = e.find("ul.sf-menu"); void 0 !== t.fn.superclick && i.superclick({ delay: 300, cssArrows: !1, animation: { opacity: "show", height: "show" }, animationOut: { opacity: "hide", height: "hide" } }) } }, VLTJS.submenuEffectStyle3.init() }(jQuery), function (t) { "use strict"; var e = !1; VLTJS.menuCreative = { init: function () { var i = t(".vlt-nav--creative"), n = t(".js-creative-menu-toggle"), s = i.find("ul.sf-menu > li"); n.on("click", function (t) { t.preventDefault(), e ? (n.removeClass("vlt-menu-burger--opened"), VLTJS.menuCreative.close_menu(i)) : (n.addClass("vlt-menu-burger--opened"), VLTJS.menuCreative.open_menu(i, s)) }), VLTJS.document.keyup(function (t) { 27 === t.keyCode && e && (t.preventDefault(), VLTJS.menuCreative.close_menu(i)) }) }, open_menu: function (t, i) { e = !0, t.addClass("is-open"), "undefined" != typeof gsap && gsap.fromTo(i, { autoAlpha: 0 }, { autoAlpha: 1, duration: .3, delay: .3, stagger: { amount: .2 } }) }, close_menu: function (t) { e = !1, t.removeClass("is-open") } }, VLTJS.menuCreative.init() }(jQuery), function (t) { "use strict"; VLTJS.menuDefault = { init: function () { var e = t(".vlt-nav--default"), i = e.find("ul.sf-menu"); void 0 !== t.fn.superfish && i.superfish({ popUpSelector: "ul.sub-menu", delay: 0, speed: 300, speedOut: 300, cssArrows: !1, animation: { opacity: "show", marginTop: "0", visibility: "visible" }, animationOut: { opacity: "hide", marginTop: "10px", visibility: "hidden" } }) } }, VLTJS.menuDefault.init() }(jQuery), function (t) { "use strict"; var e = !1; VLTJS.menuFullscreen = { init: function () { var i = t(".vlt-nav--fullscreen"), n = t(".js-fullscreen-menu-toggle"), s = i.find("ul.sf-menu > li"); n.on("click", function (t) { t.preventDefault(), e ? (n.removeClass("vlt-menu-burger--opened"), VLTJS.menuFullscreen.close_menu(i)) : (n.addClass("vlt-menu-burger--opened"), VLTJS.menuFullscreen.open_menu(i, s)) }), VLTJS.document.keyup(function (t) { 27 === t.keyCode && e && (t.preventDefault(), VLTJS.menuFullscreen.close_menu(i)) }) }, open_menu: function (t, i) { e = !0, t.addClass("is-open"), "undefined" != typeof gsap && gsap.fromTo(i, { autoAlpha: 0, translateY: -30 }, { autoAlpha: 1, translateY: 0, duration: .3, delay: .3, stagger: { amount: .2 } }) }, close_menu: function (t) { e = !1, t.removeClass("is-open") } }, VLTJS.menuFullscreen.init() }(jQuery), function (t) { "use strict"; if (void 0 !== t.fn.superclick) { var e = !1; VLTJS.menuMobile = { init: function () { var i = t(".vlt-nav--mobile"), n = t(".js-mobile-menu-toggle"); n.on("click", function (t) { t.preventDefault(), e ? VLTJS.menuMobile.close_menu(i, n) : VLTJS.menuMobile.open_menu(i, n) }), VLTJS.document.keyup(function (t) { 27 === t.keyCode && (t.preventDefault(), VLTJS.menuMobile.close_menu(i, n)) }) }, open_menu: function (t, i) { t.slideDown(), i.addClass("vlt-menu-burger--opened"), VLTJS.html.css(overflow, "hidden"), e = !0 }, close_menu: function (t, i) { t.slideUp(), i.removeClass("vlt-menu-burger--opened"), VLTJS.html.css(overflow, "inherit"), e = !1 } }, VLTJS.menuMobile.init() } }(jQuery), function (t) { "use strict"; var e = !1; VLTJS.menuOffcanvas = { config: { easing: "power2.out" }, init: function () { var i = t(".vlt-nav--offcanvas"), n = t(".js-offcanvas-menu-toggle"), s = i.find("ul.sf-menu > li"), a = t(".vlt-site-overlay"); n.on("click", function (t) { t.preventDefault(), e ? VLTJS.menuOffcanvas.close_menu(n, i, a) : VLTJS.menuOffcanvas.open_menu(n, i, s, a) }), VLTJS.document.keyup(function (t) { 27 === t.keyCode && e && (t.preventDefault(), VLTJS.menuOffcanvas.close_menu(n, i, a)) }), a.on("click", function () { e && VLTJS.menuOffcanvas.close_menu(n, i, a) }) }, open_menu: function (t, i, n, s) { e = !0, t.addClass("vlt-menu-burger--opened"), i.addClass("is-open"), "undefined" != typeof gsap && gsap.timeline({ defaults: { ease: this.config.easing } }).set(VLTJS.html, { overflow: "hidden" }).to(s, .3, { autoAlpha: 1 }).fromTo(n, { autoAlpha: 0, translateY: -30 }, { autoAlpha: 1, translateY: 0, duration: .3, delay: .5, stagger: { amount: .2 } }, "-.3") }, close_menu: function (t, i, n) { e = !1, t.removeClass("vlt-menu-burger--opened"), i.removeClass("is-open"), gsap.timeline({ defaults: { ease: this.config.easing } }).set(VLTJS.html, { overflow: "inherit" }).to(n, .3, { autoAlpha: 0 }) } }, VLTJS.menuOffcanvas.init() }(jQuery), function (t) { "use strict"; var e = !1; VLTJS.menuSlide = { config: { easing: "power2.out" }, init: function () { var i = t(".vlt-nav--slide"), n = t(".js-slide-menu-toggle"), s = i.find("ul.sf-menu > li"), a = t(".vlt-site-overlay"); n.on("click", function (t) { t.preventDefault(), e ? VLTJS.menuSlide.close_menu(n, i, a) : VLTJS.menuSlide.open_menu(n, i, s, a) }), VLTJS.document.keyup(function (t) { 27 === t.keyCode && e && (t.preventDefault(), VLTJS.menuSlide.close_menu(n, i, a)) }), a.on("click", function () { e && VLTJS.menuSlide.close_menu(n, i, a) }) }, open_menu: function (t, i, n, s) { e = !0, t.addClass("vlt-menu-burger--opened"), i.addClass("is-open"), "undefined" != typeof gsap && gsap.timeline({ defaults: { ease: this.config.easing } }).set(VLTJS.html, { overflow: "hidden" }).to(s, .3, { autoAlpha: 1 }).fromTo(n, { autoAlpha: 0, translateY: -30 }, { autoAlpha: 1, translateY: 0, duration: .3, delay: .5, stagger: { amount: .2 } }, "-.3") }, close_menu: function (t, i, n) { e = !1, t.removeClass("vlt-menu-burger--opened"), i.removeClass("is-open"), gsap.timeline({ defaults: { ease: this.config.easing } }).set(VLTJS.html, { overflow: "inherit" }).to(n, .3, { autoAlpha: 0 }) } }, VLTJS.menuSlide.init() }(jQuery), function (t) { "use strict"; void 0 !== t.fn.validate && (VLTJS.contactForm = { init: function () { t(".vlt-contact-form, .vlt-apply-position-form").each(function () { var e = t(this), i = e.find(".message.success"), n = e.find(".message.danger"); e.validate({ errorClass: "error", errorPlacement: function () { return !1 }, submitHandler: function (e) { t.ajax({ type: "POST", url: "handler.php", data: new FormData(e), cache: !1, contentType: !1, processData: !1, success: function () { i.fadeIn(), setTimeout(function () { i.fadeOut() }, 5e3) }, error: function () { n.fadeIn(), setTimeout(function () { n.fadeOut() }, 5e3) } }) } }) }) } }, VLTJS.contactForm.init()) }(jQuery), function (t) { "use strict"; "undefined" != typeof gsap && (VLTJS.isMobile.any() || (VLTJS.cursor = { init: function () { var e = t(".vlt-cursor"), i = e.find(".outer, .inner"), n = { x: 0, y: 0 }, s = { x: 0, y: 0 }, a = .25; e.length && (gsap.set(i, { xPercent: -50, yPercent: -50 }), VLTJS.document.on("mousemove", function (t) { var e = window.pageYOffset || document.documentElement.scrollTop; n.x = t.pageX, n.y = t.pageY - e }), gsap.ticker.add(function () { s.x += (n.x - s.x) * a, s.y += (n.y - s.y) * a, gsap.set(i, { x: s.x, y: s.y }) }), VLTJS.document.on("mouseenter", ".has-cursor", function () { e.addClass("is-active is-visible") }).on("mouseleave", ".has-cursor", function () { e.removeClass("is-active is-visible") })) } }, VLTJS.cursor.init())) }(jQuery), function (t) { "use strict"; VLTJS.devideSection = { init: function () { t(".vlt-devide-section").each(function () { var e = t(this), i = e.outerHeight() / 2; e.find(">div").css("margin-top", -i), e.closest("section").css("margin-top", i) }) } }, VLTJS.devideSection.init(), VLTJS.debounceResize(function () { VLTJS.devideSection.init() }) }(jQuery), function (t) { "use strict"; VLTJS.devideElement = { init: function () { t(".vlt-devide-element").each(function () { var e = t(this), i = e.outerHeight() / 2; e.find(">div").css("margin-top", -i), e.hasClass("reset-mobile") && VLTJS.window.outerWidth() <= 768 && e.find(">div").css("margin-top", "") }) } }, VLTJS.devideElement.init(), VLTJS.debounceResize(function () { VLTJS.devideElement.init() }) }(jQuery), function (t) { "use strict"; VLTJS.columnSpaceToContainer = { init: function () { var e = VLTJS.window.width(); t(".vlt-column-space-to-container").each(function () { var i = t(this), n = t(".container"), s = n.outerWidth(), a = n.offset(), r = a.left + (parseFloat(n.css("padding-left")) || 0), o = e - s + (parseFloat(n.css("padding-right")) || 0); i.hasClass("to-left") ? i.css({ "padding-left": r }) : i.css({ "padding-right": o / 2 }) }) } }, VLTJS.columnSpaceToContainer.init(), VLTJS.debounceResize(function () { VLTJS.columnSpaceToContainer.init() }) }(jQuery), function (t) { "use strict"; "undefined" != typeof gsap && (VLTJS.isMobile.any() || (VLTJS.fixedFooterEffect = { init: function () { var e = t(".vlt-footer").filter(".vlt-footer--fixed"), i = 0; e.length && VLTJS.window.outerWidth() >= 768 && (VLTJS.window.on("load scroll", function () { var n = e.outerHeight(), s = VLTJS.window.outerHeight(), a = VLTJS.document.outerHeight(); i = .75 * (Math.max(0, t(this).scrollTop() + s - (a - n)) - n) }), gsap.ticker.add(function () { gsap.set(e, { translateY: i, translateZ: 0 }) })) } }, VLTJS.fixedFooterEffect.init(), VLTJS.debounceResize(function () { VLTJS.fixedFooterEffect.init() }))) }(jQuery), function (t) { "use strict"; function e() { t("[data-marquee]").each(function () { var e = t(this), i = e.data("marquee") || .5, n = e.find("[data-marquee-text]").first(), s = n.outerWidth(), a = n.outerHeight(), r = s / a * i + "s"; "undefined" != typeof gsap && gsap.set(e.find("[data-marquee-text]"), { animationDuration: r }) }) } function i() { var e = t(".vlt-work--style-4"); e.length && e.each(function () { var e = t(this), i = e.find(".vlt-work__meta"); i.length && e.on("change", function (t, e) { var n = 1.5 * parseFloat(e.tiltX), s = 1.5 * -parseFloat(e.tiltY); i.css("transform", "translateY(" + s + "px) translateX(" + n + "px)") }).on("tilt.mouseLeave", function () { i.css("transform", "") }), e.addClass("vlt-work--tilt").tilt({ maxTilt: 15, perspective: 1e3, easing: "cubic-bezier(0.445, 0.05, 0.55, 0.95)", speed: 600, transition: 600 }) }) } function n() { t(".vlt-hover-reveal").remove(), t("[data-tooltip-image]").each(function (e) { function i(t) { var e = VLTJS.getMousePos(t), i = { left: VLTJS.body.scrollLeft() + VLTJS.document.scrollLeft(), top: VLTJS.body.scrollTop() + VLTJS.document.scrollTop() }; gsap.set(d, { top: e.y - .5 * f - i.top + "px", left: e.x - .25 * p - i.left + "px" }) } function n(t) { i(t), r() } function s(t) { requestAnimationFrame(function () { i(t) }) } function a() { o() } function r() { gsap.killTweensOf(u), gsap.killTweensOf(h), gsap.timeline({ onStart: function () { gsap.set(d, { opacity: 1 }), gsap.set(l, { zIndex: 1e3 }) } }).fromTo(u, 1, { x: "-100%" }, { x: "0%", ease: Quint.easeOut }).fromTo(h, 1, { x: "100%" }, { x: "0%", ease: Quint.easeOut }, "-=1") } function o() { gsap.killTweensOf(u), gsap.killTweensOf(h), gsap.timeline({ onStart: function () { gsap.set(l, { zIndex: 999 }) }, onComplete: function () { gsap.set(l, { zIndex: "" }), gsap.set(d, { opacity: 0 }) } }).to(u, .5, { x: "100%", ease: Quint.easeOut }).to(h, .5, { x: "-100%", ease: Quint.easeOut }, "-=0.5") } var l = t(this), c = !!l.data("tooltip-size") && l.data("tooltip-size").split("x"); VLTJS.body.append('<div class="vlt-hover-reveal"><div class="vlt-hover-reveal__inner"><div class="vlt-hover-reveal__img" style="background-image: url(' + l.data("tooltip-image") + ');"></div></div></div>'), c && VLTJS.body.find(".vlt-hover-reveal").css({ width: c[0] + "px", height: c[1] + "px" }); var d = VLTJS.body.find(".vlt-hover-reveal").eq(e), u = d.find(".vlt-hover-reveal__inner"), h = d.find(".vlt-hover-reveal__img"), p = h.outerWidth(), f = h.outerHeight(); l.on("mouseenter", n), l.on("mousemove", s), l.on("mouseleave", a) }) } i(), e(), n(), VLTJS.initPluginIsotope = { init: function () { "undefined" != typeof Isotope && t(".vlt-isotope-grid").each(function () { function e(t, e, i) { VLTJS.window.width() >= 992 ? (t.css({ "margin-top": -i[0] / 2 + "px", "margin-right": -e[0] / 2 + "px", "margin-bottom": -i[0] / 2 + "px", "margin-left": -e[0] / 2 + "px" }), t.find(".grid-item").css({ "padding-top": i[0] / 2 + "px", "padding-right": e[0] / 2 + "px", "padding-bottom": i[0] / 2 + "px", "padding-left": e[0] / 2 + "px" })) : (t.css({ "margin-top": -i[1] / 2 + "px", "margin-right": -e[1] / 2 + "px", "margin-bottom": -i[1] / 2 + "px", "margin-left": -e[1] / 2 + "px" }), t.find(".grid-item").css({ "padding-top": i[1] / 2 + "px", "padding-right": e[1] / 2 + "px", "padding-bottom": i[1] / 2 + "px", "padding-left": e[1] / 2 + "px" })) } var i = t(this), n = i.data("controls"), s = i.data("layout"), a = i.data("x-gap").split("|"), r = i.data("y-gap").split("|"), o = i.data("load-more-selector"); e(i, a, r), VLTJS.debounceResize(function () { e(i, a, r) }); var l = []; l = t(n); var c = i.isotope({ itemSelector: ".grid-item", layoutMode: s, filter: ".filter-blog", filter: l ? l.find("[data-filter]").data("filter") : "*", masonry: { columnWidth: ".grid-sizer" }, cellsByRow: { columnWidth: ".grid-sizer" } }); c.imagesLoaded().progress(function () { c.isotope("layout") }), c.on("layoutComplete", function () { e(i, a, r) }), l.length && l.on("click", "[data-filter]", function (e) { e.preventDefault(); var i = t(this), n = i.data("filter"); i.addClass("active").siblings().removeClass("active"), c.isotope({ filter: n }) }); var d = !1; t(o).on("click", "a", function (e) { if (e.preventDefault(), !d) { var i = t(this), n = i.attr("href"); t.ajax({ type: "POST", url: n, dataType: "html", success: function (e) { var i = t(e); c.append(i).isotope("appended", i), c.imagesLoaded().progress(function () { c.isotope("layout") }), c.isotope("layout"), VLTJS.document.trigger("vlt-ajax-load-more") } }), i.addClass("disabled"), d = !0 } }) }) } }, VLTJS.initPluginIsotope.init(), VLTJS.document.on("vlt-ajax-load-more", function (t) { i(), e(), n() }) }(jQuery), function (t) { "use strict"; VLTJS.maskCircle = { init: function () { var e = t(".vlt-project-showcase--style-4 .vlt-project-showcase__background"), i = { x: 0, y: 0 }, n = { x: 0, y: 0 }; e.css({ "--x": "50%", "--y": "50%" }), VLTJS.document.on("mousemove", function (t) { var s = window.pageYOffset || document.documentElement.scrollTop; i.x = t.pageX, i.y = t.pageY - s, n.x += i.x - n.x, n.y += i.y - n.y, e.css({ "--x": n.x + "px", "--y": n.y + "px" }) }) } }, VLTJS.maskCircle.init() }(jQuery), function (t) { "use strict"; void 0 !== t.fn.scrollTo && t('a[href^="#"]').not('[href="#"]').on("click", function (e) { e.preventDefault(), VLTJS.html.scrollTo(t(this).attr("href"), 500) }) }(jQuery), function (t) { "use strict"; var e = !1; VLTJS.searchPopup = { config: { easing: "power2.out" }, init: function () { var i = t(".vlt-search-popup"), n = t(".js-search-form-open"), s = t(".js-search-form-close"), a = t(".vlt-site-overlay"); n.on("click", function (t) { t.preventDefault(), e || VLTJS.searchPopup.open_search(i, a) }), s.on("click", function (t) { t.preventDefault(), e && VLTJS.searchPopup.close_search(i, a) }), a.on("click", function (t) { t.preventDefault(), e && VLTJS.searchPopup.close_search(i, a) }), VLTJS.document.keyup(function (t) { 27 === t.keyCode && e && (t.preventDefault(), VLTJS.searchPopup.close_search(i, a)) }) }, open_search: function (t, i) { e = !0, "undefined" != typeof gsap && gsap.timeline({ defaults: { ease: this.config.easing } }).set(VLTJS.html, { overflow: "hidden" }).to(i, .3, { autoAlpha: 1 }).fromTo(t, .6, { y: "-100%" }, { y: 0, visibility: "visible" }, "-=.3") }, close_search: function (t, i) { e = !1, "undefined" != typeof gsap && gsap.timeline({ defaults: { ease: this.config.easing } }).set(VLTJS.html, { overflow: "inherit" }).to(t, .6, { y: "-100%" }).set(t, { visibility: "hidden" }).to(i, .3, { autoAlpha: 0 }, "-=.6") } }, VLTJS.searchPopup.init() }(jQuery), function (t) { "use strict"; if ("undefined" != typeof gsap) { var e = t(".vlt-site-preloader"), i = e.data("animate-to"); gsap.to(e.find("#vlt-site-preloader-path"), 1, { attr: { d: i } }), VLTJS.document.imagesLoaded(function () { setTimeout(function () { e.addClass("is-loaded") }, 1e3) }), e.length ? e.on(VLTJS.transitionEnd, function () { VLTJS.window.trigger("vlt.site-loaded") }) : VLTJS.window.on("load", function () { VLTJS.window.trigger("vlt.site-loaded") }) } }(jQuery), function (t) { "use strict"; VLTJS.stickyNavbar = { init: function () { function e() { s.addClass("vlt-navbar--fixed"), o.show() } function i() { s.removeClass("vlt-navbar--fixed"), o.hide() } function n() { VLTJS.window.scrollTop() >= r ? e() : i() } var s = t(".vlt-header:not(.vlt-header--slide) .vlt-navbar--main"), a = s.length ? s.outerHeight() : 0, r = s.hasClass("vlt-navbar--offset") ? VLTJS.window.outerHeight() : a, o = t('<div class="vlt-fake-navbar">').hide(); s.hasClass("vlt-navbar--sticky") && (VLTJS.window.on("scroll resize", n), n(), s.after(o), o.height(s.innerHeight()), VLTJS.debounceResize(function () { o.height(s.innerHeight()) })); var l = s.filter(".vlt-navbar--hide-on-scroll"); VLTJS.throttleScroll(function (t, e) { function i() { l.removeClass("vlt-on-scroll-hide").addClass("vlt-on-scroll-show") } function n() { l.removeClass("vlt-on-scroll-show").addClass("vlt-on-scroll-hide") } "down" === t && e > 450 ? n() : "up" !== t && "end" !== t && "start" !== t || i(), s.hasClass("vlt-navbar--transparent") && s.hasClass("vlt-navbar--sticky") && (e > a ? s.addClass("vlt-navbar--solid") : s.removeClass("vlt-navbar--solid")) }) } }, VLTJS.stickyNavbar.init() }(jQuery), function (t) { "use strict"; VLTJS.stretchElement = { init: function () { var e = VLTJS.window.outerWidth(); t(".vlt-stretch-block").each(function () { var i = t(this), n = i.offset().left, s = i.outerWidth(); i.hasClass("to-left") && i.find(">*").css("margin-left", -n), i.hasClass("to-right") && i.find(">*").css("margin-right", n + s - e), i.hasClass("reset-mobile") && VLTJS.window.outerWidth() <= 768 && i.find(">*").css({ "margin-left": "", "margin-right": "" }) }) } }, VLTJS.stretchElement.init(), VLTJS.debounceResize(function () { VLTJS.stretchElement.init() }) }(jQuery), function (t) { "use strict"; VLTJS.button = { init: function () { t(".vlt-btn").find("span").length || t(".vlt-btn").append("<span>"), t(".vlt-btn").on("mouseenter", function (e) { var i = t(this), n = i.offset(), s = e.pageX - n.left, a = e.pageY - n.top; i.find("span").css({ top: a, left: s }) }).on("mouseout", function (e) { var i = t(this), n = i.offset(), s = e.pageX - n.left, a = e.pageY - n.top; i.find("span").css({ top: a, left: s }) }) } }, VLTJS.button.init() }(jQuery), function (t) { "use strict"; VLTJS.casesSlider = { init: function () { var e = t(".vlt-cases-slider"), i = e.data("navigation-anchor"); if (e.length) { var n = new Swiper(e.find(".swiper-container"), { init: !1, speed: 1e3, loop: !0, grabCursor: !0, spaceBetween: 100, slidesPerView: 1 }); n.on("init slideChange", function () { var s = t(i), a = n.realIndex, r = e.find(".swiper-slide").not(".swiper-slide-duplicate").length, o = (a + 1) / r; "vertical" == s.data("direction") ? (s.find(".current").text(VLTJS.addLedingZero(a + 1)), s.find(".total").text(VLTJS.addLedingZero(r))) : (s.find(".current").text(a + 1), s.find(".total").text(r)), s.find(".bar > span").css({ "--scaleX": o, "--speed": n.params.speed + "ms" }) }), n.init() } } }, VLTJS.casesSlider.init() }(jQuery), function (t) { "use strict"; VLTJS.contentSlider = { init: function () { "undefined" != typeof Swiper && t(".vlt-content-slider").each(function () { var e = t(this), i = e.find(".swiper-container"), n = e.data("navigation-anchor"), s = e.data("gap") || 0, a = e.data("loop") || !1, r = e.data("speed") || 1e3, o = !!e.data("autoplay"), l = !!e.data("slides-centered"), c = !!e.data("free-mode"), d = !!e.data("slider-offset"), u = !!e.data("mousewheel"), h = e.data("autoplay-speed"), p = e.data("slide-settings"), f = new Swiper(i, { init: !1, spaceBetween: s, grabCursor: !0, initialSlide: p.initial_slide ? p.initial_slide : 0, loop: a, speed: r, centeredSlides: l, freeMode: c, mousewheel: u, autoplay: !!o && { delay: h, disableOnInteraction: !1 }, autoHeight: !0, slidesOffsetBefore: 100, slidesOffsetBefore: !!d && t(".container").get(0).getBoundingClientRect().left + 15, slidesOffsetAfter: !!d && t(".container").get(0).getBoundingClientRect().left + 15, navigation: { nextEl: t(n).find(".vlt-swiper-button-next"), prevEl: t(n).find(".vlt-swiper-button-prev") }, pagination: { el: t(n).find(".vlt-swiper-pagination"), clickable: !1, type: "fraction", renderFraction: function (t, e) { return '<span class="' + t + '"></span><span class="sep">/</span><span class="' + e + '"></span>' } }, breakpoints: { 576: { slidesPerView: p.slides_to_show_mobile || p.slides_to_show_tablet || p.slides_to_show || 1, slidesPerGroup: p.slides_to_scroll_mobile || p.slides_to_scroll_tablet || p.slides_to_scroll || 1 }, 768: { slidesPerView: p.slides_to_show_tablet || p.slides_to_show || 1, slidesPerGroup: p.slides_to_scroll_tablet || p.slides_to_scroll || 1 }, 992: { slidesPerView: p.slides_to_show || 1, slidesPerGroup: p.slides_to_scroll || 1 } } }); f.on("init slideChange", function () { var i = t(n), s = f.realIndex, a = e.find(".swiper-slide").not(".swiper-slide-duplicate").length, r = (s + 1) / a; "vertical" == i.data("direction") ? (i.find(".current").text(VLTJS.addLedingZero(s + 1)), i.find(".total").text(VLTJS.addLedingZero(a))) : (i.find(".current").text(s + 1), i.find(".total").text(a)), i.find(".bar > span").css({ "--scaleX": r, "--speed": f.params.speed + "ms" }) }), f.init() }) } }, VLTJS.contentSlider.init() }(jQuery), function (t) { "use strict"; VLTJS.countdown = { init: function (e) { void 0 !== t.fn.countdown && t(".vlt-countdown").each(function () { var e = t(this), i = e.data("due-date") || !1; e.countdown(i, function (t) { e.find("[data-days]").html(t.strftime("%D")), e.find("[data-hours]").html(t.strftime("%H")), e.find("[data-minutes]").html(t.strftime("%M")), e.find("[data-seconds]").html(t.strftime("%S")) }) }) } }, VLTJS.countdown.init() }(jQuery), function (t) { "use strict"; void 0 !== t.fn.numerator && (VLTJS.counterUp = { init: function () { var e = t(".vlt-counter-up"); e.each(function () { var i = t(this), n = i.data("animation-speed") || 1e3, s = i.find(".vlt-counter-up__counter"), a = s.text(), r = i.data("delimiter") || !1; e.hasClass("vlt-counter-up--style-2") && s.css({ "min-width": s.outerWidth() + "px" }), i.one("inview", function () { s.text("0"), s.numerator({ easing: "linear", duration: n, delimiter: r, toValue: a }) }) }) } }, VLTJS.counterUp.init()) }(jQuery), function (t) { "use strict"; VLTJS.justifiedGallery = { init: function () { if (void 0 !== t.fn.justifiedGallery) { t(".vlt-justified-gallery").each(function () { var e = t(this), i = e.data("row-height") || 360, n = e.data("margins") || 0; e.imagesLoaded(function () { e.justifiedGallery({ rowHeight: i, margins: n, border: 0 }) }) }) } } }, VLTJS.justifiedGallery.init() }(jQuery), function (t) { "use strict"; VLTJS.particleImage = { init: function () { var e = t(".vlt-particle"), i = "animate__"; VLTJS.window.on("vlt.site-loaded", function () { e.each(function () { var e = t(this); e.one("inview", function () { var t = e.data("animation-name"); e.addClass(i + "animated").addClass(i + t) }) }) }) } }, VLTJS.particleImage.init() }(jQuery), function (t) { "use strict"; VLTJS.progressBar = { init: function () { if ("undefined" != typeof gsap) { t(".vlt-progress-bar").each(function () { var e = t(this), i = e.data("final-value") || 0, n = e.data("animation-speed") || 0, s = 500, a = { count: 0 }; e.one("inview", function () { gsap.to(a, n / 1e3 / 2, { count: i, delay: s / 1e3, onUpdate: function () { e.find(".vlt-progress-bar__title > .counter").text(Math.round(a.count)) } }), gsap.to(e.find(".vlt-progress-bar__bar > span"), n / 1e3, { width: i + "%", delay: s / 1e3 }) }) }) } } }, VLTJS.progressBar.init() }(jQuery), function (t) { "use strict"; VLTJS.projectShowcase2 = { init: function () { var e = t(".vlt-project-showcase--style-2"), i = e.data("navigation-anchor"); if (e.length) { var n = new Swiper(e.find(".swiper-container"), { init: !1, initialSlide: 1, speed: 1e3, loop: !0, grabCursor: !0, spaceBetween: 0, direction: "vertical", centeredSlides: !0, slidesPerView: "auto", mousewheel: !0 }); n.on("init slideChange", function () { var s = t(i), a = n.realIndex, r = e.find(".swiper-slide").not(".swiper-slide-duplicate").length, o = (a + 1) / r; "vertical" == s.data("direction") ? (s.find(".current").text(VLTJS.addLedingZero(a + 1)), s.find(".total").text(VLTJS.addLedingZero(r))) : (s.find(".current").text(a + 1), s.find(".total").text(r)), s.find(".bar > span").css({ "--scaleX": o, "--speed": n.params.speed + "ms" }) }), n.init() } } }, VLTJS.projectShowcase2.init(), VLTJS.projectShowcase3 = { init: function () { var e = t(".vlt-project-showcase--style-3"), i = e.data("navigation-anchor"); if (e.length) { var n = new Swiper(e.find(".swiper-container"), { init: !1, speed: 1e3, spaceBetween: 0, grabCursor: !0, direction: "vertical", slidesPerView: 1, mousewheel: !0, loop: !0, parallax: !0 }); n.on("init slideChange", function () { var s = t(i), a = n.realIndex, r = e.find(".swiper-slide").not(".swiper-slide-duplicate").length, o = (a + 1) / r; "vertical" == s.data("direction") ? (s.find(".current").text(VLTJS.addLedingZero(a + 1)), s.find(".total").text(VLTJS.addLedingZero(r))) : (s.find(".current").text(a + 1), s.find(".total").text(r)), s.find(".bar > span").css({ "--scaleX": o, "--speed": n.params.speed + "ms" }) }), n.init(), e.on("click", ".vlt-project-showcase__next-slide a", function (t) { t.preventDefault(), n.slideNext() }) } } }, VLTJS.projectShowcase3.init(), VLTJS.projectShowcase4 = { init: function () { var e = t(".vlt-project-showcase--style-4"), i = e.data("navigation-anchor"); if (e.length) { var n = new Swiper(e.find(".swiper-container"), { init: !1, speed: 1e3, direction: "vertical", slidesPerView: 1, mousewheel: !0, parallax: !0 }); n.on("init slideChange", function () { switch (e.find(".swiper-slide").eq(n.realIndex).find(".vlt-project-showcase__item").data("brightness")) { case "light": t(".vlt-navbar").hasClass("vlt-navbar--white-text-on-top") && t(".vlt-navbar").removeClass("vlt-navbar--white-text-on-top"), t(".vlt-site-fixed-bar").hasClass("has-white-color") && t(".vlt-site-fixed-bar").removeClass("has-white-color"); break; case "dark": t(".vlt-navbar").hasClass("vlt-navbar--white-text-on-top") || t(".vlt-navbar").addClass("vlt-navbar--white-text-on-top"), t(".vlt-site-fixed-bar").hasClass("has-white-color") || t(".vlt-site-fixed-bar").addClass("has-white-color") } }), n.on("init slideChange", function () { var s = t(i), a = n.realIndex, r = e.find(".swiper-slide").not(".swiper-slide-duplicate").length, o = (a + 1) / r; "vertical" == s.data("direction") ? (s.find(".current").text(VLTJS.addLedingZero(a + 1)), s.find(".total").text(VLTJS.addLedingZero(r))) : (s.find(".current").text(a + 1), s.find(".total").text(r)), s.find(".bar > span").css({ "--scaleX": o, "--speed": n.params.speed + "ms" }) }), n.init(), e.on("click", ".vlt-project-showcase__next-slide a", function (t) { t.preventDefault(), n.slideNext() }) } } }, VLTJS.projectShowcase4.init(), VLTJS.projectShowcase5 = { init: function () { var e = t(".vlt-project-showcase--style-5"), i = e.data("navigation-anchor"); if (e.length) { var n = new Swiper(e.find(".swiper-container"), { init: !1, speed: 1e3, grabCursor: !0, slidesPerView: 1, parallax: !0, navigation: { nextEl: t(i).find(".vlt-swiper-button-next"), prevEl: t(i).find(".vlt-swiper-button-prev") } }); n.on("init slideChange", function () { var s = t(i), a = n.realIndex, r = e.find(".swiper-slide").not(".swiper-slide-duplicate").length, o = (a + 1) / r; "vertical" == s.data("direction") ? (s.find(".current").text(VLTJS.addLedingZero(a + 1)), s.find(".total").text(VLTJS.addLedingZero(r))) : (s.find(".current").text(a + 1), s.find(".total").text(r)), s.find(".bar > span").css({ "--scaleX": o, "--speed": n.params.speed + "ms" }) }), n.init() } } }, VLTJS.projectShowcase5.init(), VLTJS.projectShowcase6 = { init: function () { function e() { i.find(".vlt-project-showcase__item").each(function () { var e = t(this), i = e.find(".vlt-project-showcase__image").offset().left, n = e.find(".vlt-project-showcase__title.original").outerWidth(), s = e.find(".vlt-project-showcase__title.original").offset().left, a = n + s - i; e.find(".vlt-project-showcase__title.mask").css({ "clip-path": "inset(0 " + a + "px 0 0)" }) }) } var i = t(".vlt-project-showcase--style-6"), n = i.data("navigation-anchor"); if (i.length) { var s = new Swiper(i.find(".swiper-container"), { init: !1, grabCursor: !0, speed: 1e3, slidesPerView: 1, effect: "fade", touchReleaseOnEdges: !0, navigation: { nextEl: t(n).find(".vlt-swiper-button-next"), prevEl: t(n).find(".vlt-swiper-button-prev") } }); e(), s.on("resize", e), s.on("init slideChange", function () { var e = t(n), a = s.realIndex, r = i.find(".swiper-slide").not(".swiper-slide-duplicate").length, o = (a + 1) / r; "vertical" == e.data("direction") ? (e.find(".current").text(VLTJS.addLedingZero(a + 1)), e.find(".total").text(VLTJS.addLedingZero(r))) : (e.find(".current").text(a + 1), e.find(".total").text(r)), e.find(".bar > span").css({ "--scaleX": o, "--speed": s.params.speed + "ms" }) }), s.init() } } }, VLTJS.projectShowcase6.init(), VLTJS.projectShowcase7 = { init: function () { var e = t(".vlt-project-showcase--style-7"), i = e.data("navigation-anchor"), n = e.find(".vlt-project-showcase__navigation > li"); if (e.length) { var s = new Swiper(e.find(".swiper-container"), { init: !1, grabCursor: !0, speed: 1e3, slidesPerView: 1, effect: "fade", touchReleaseOnEdges: !0, navigation: { nextEl: t(i).find(".vlt-swiper-button-next"), prevEl: t(i).find(".vlt-swiper-button-prev") } }); s.on("init slideChange", function () { switch (e.find(".swiper-slide").eq(s.realIndex).find(".vlt-project-showcase__item").data("brightness")) { case "light": t(".vlt-navbar").hasClass("vlt-navbar--white-text-on-top") && t(".vlt-navbar").removeClass("vlt-navbar--white-text-on-top"), t(".vlt-site-fixed-bar").hasClass("has-white-color") && t(".vlt-site-fixed-bar").removeClass("has-white-color"); break; case "dark": t(".vlt-navbar").hasClass("vlt-navbar--white-text-on-top") || t(".vlt-navbar").addClass("vlt-navbar--white-text-on-top"), t(".vlt-site-fixed-bar").hasClass("has-white-color") || t(".vlt-site-fixed-bar").addClass("has-white-color") } }), s.on("init", function () { var e = s.realIndex; n.eq(e).addClass("is-active"), n.on("click", function () { var e = t(this), i = e.index(); n.removeClass("is-active"), e.addClass("is-active"), s.slideTo(i) }) }), s.on("init slideChange", function () { var n = t(i), a = s.realIndex, r = e.find(".swiper-slide").not(".swiper-slide-duplicate").length, o = (a + 1) / r; "vertical" == n.data("direction") ? (n.find(".current").text(VLTJS.addLedingZero(a + 1)), n.find(".total").text(VLTJS.addLedingZero(r))) : (n.find(".current").text(a + 1), n.find(".total").text(r)), n.find(".bar > span").css({ "--scaleX": o, "--speed": s.params.speed + "ms" }) }), s.init() } } }, VLTJS.projectShowcase7.init() }(jQuery), function (t) { "use strict"; VLTJS.tabs = { init: function () { var e = t(".vlt-tabs"), i = t(".vlt-tabs-image li"); e.on("mouseenter", "li", function () { var n = t(this), s = n.index(); i.removeClass("is-active"), e.find("li").removeClass("is-active"), n.addClass("is-active"), i.eq(s).addClass("is-active") }) } }, VLTJS.tabs.init() }(jQuery), function (t) { "use strict"; VLTJS.typesList = { init: function () { var e = t(".vlt-types-list"), i = e.find(".vlt-types-list__item"), n = t(".vlt-types-background"), s = n.find(".vlt-types-background__image"); i.on("mouseenter", function () { var e = t(this), i = e.index(), n = e.siblings(".vlt-types-list__item"); VLTJS.typesList.add_opacity(n), VLTJS.typesList.current_background(i, s) }).on("mouseleave", function () { VLTJS.typesList.remove_opacity(i) }), e.on("mouseenter", function () { e.addClass("is-active"), n.addClass("is-active") }).on("mouseleave", function () { e.removeClass("is-active"), s.removeClass("is-active"), n.removeClass("is-active") }) }, add_opacity: function (e) { e.each(function () { t(this).addClass("is-opacity") }) }, current_background: function (t, e) { e.removeClass("is-active"), e.eq(t).addClass("is-active") }, remove_opacity: function (t) { t.removeClass("is-opacity") } }, VLTJS.typesList.init() }(jQuery);