__do__loader__([4], {
    105: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = new CustomEvent("srcLoaded");
        t.default = function(e) {
            e.dataset.hasOwnProperty("lazySrc") && e.dataset.lazySrc && (e.addEventListener("load", function() {
                document.dispatchEvent(n)
            }),
            e.src = e.dataset.lazySrc,
            e.removeAttribute("data-lazy-src"))
        }
    },
    109: function(e, t, i) {
        e.exports = function() {
            return new Promise(function(e) {
                i.e(45).then(function(t) {
                    e(i(128))
                }
                .bind(null, i)).catch(i.oe)
            }
            )
        }
    },
    110: function(e, t, i) {
        e.exports = function() {
            return new Promise(function(e) {
                i.e(45).then(function(t) {
                    e(i(108))
                }
                .bind(null, i)).catch(i.oe)
            }
            )
        }
    },
    126: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            addStyles: function(e, t) {
                const i = Array.from(document.styleSheets).filter(e=>e.href && e.href.startsWith(document.location.href)).flatMap(i=>[...function i(n) {
                    const o = [];
                    return Array.from(n).forEach(function(n) {
                        if (n instanceof CSSStyleRule)
                            n.selectorText.includes(e) && o.push(n.cssText.replace(new RegExp(e,"g"), t));
                        else if (n instanceof CSSMediaRule) {
                            let e = i(n.cssRules);
                            e.length && (e = e.map(e=>"\t" + e),
                            o.push(`\n@media ${n.conditionText} {`, ...e, "}"))
                        }
                    }),
                    o
                }(i.cssRules)])
                  , n = document.createElement("style");
                return n.innerHTML = i.join("\n"),
                document.body.append(n),
                i
            }
        }
    },
    127: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {
                this.elements = new Map,
                this.timer = 0,
                this.start()
            }
            return e.prototype.check = function() {
                this.elements.size ? this.timer || this.start() : this.timer && this.stop()
            }
            ,
            e.prototype.add = function(e, t) {
                this.elements.set(e, {
                    callback: t,
                    visible: !0
                }),
                this.check()
            }
            ,
            e.prototype.remove = function(e) {
                this.elements.delete(e),
                this.check()
            }
            ,
            e.prototype.stop = function() {
                window.clearInterval(this.timer),
                this.timer = 0
            }
            ,
            e.prototype.start = function() {
                var e = this;
                this.timer = window.setInterval(function() {
                    e.elements.forEach(function(e, t) {
                        var i = e.visible
                          , n = e.callback
                          , o = t.offsetHeight > 0 && t.offsetWidth > 0;
                        o !== i && (e.visible = o,
                        n(o))
                    })
                }, 200)
            }
            ,
            e
        }();
        t.default = new n
    },
    181: function(e, t, i) {
        e.exports = function() {
            return new Promise(function(e) {
                i.e(59).then(function(t) {
                    e(i(182))
                }
                .bind(null, i)).catch(i.oe)
            }
            )
        }
    },
    79: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(92)
          , o = this && this.__assign || Object.assign || function(e) {
            for (var t, i = 1, n = arguments.length; i < n; i++)
                for (var o in t = arguments[i])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
          , r = this && this.__awaiter || function(e, t, i, n) {
            return new (i || (i = Promise))(function(o, r) {
                function s(e) {
                    try {
                        l(n.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function a(e) {
                    try {
                        l(n.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(e) {
                    e.done ? o(e.value) : new i(function(t) {
                        t(e.value)
                    }
                    ).then(s, a)
                }
                l((n = n.apply(e, t || [])).next())
            }
            )
        }
          , s = this && this.__generator || function(e, t) {
            var i, n, o, r, s = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function a(r) {
                return function(a) {
                    return function(r) {
                        if (i)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (i = 1,
                                n && (o = 2 & r[0] ? n.return : r[0] ? n.throw || ((o = n.return) && o.call(n),
                                0) : n.next) && !(o = o.call(n, r[1])).done)
                                    return o;
                                switch (n = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    n = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        s.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && s.label < o[1]) {
                                        s.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && s.label < o[2]) {
                                        s.label = o[2],
                                        s.ops.push(r);
                                        break
                                    }
                                    o[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                r = t.call(e, s)
                            } catch (e) {
                                r = [6, e],
                                n = 0
                            } finally {
                                i = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, a])
                }
            }
        }
        ;
        t.default = function(e) {
            return r(this, void 0, void 0, function() {
                var t, a, l, c, d, u, f, _, p, h, m, b, v, k, w, y, g, S, C, A, T = this;
                return s(this, function(x) {
                    switch (x.label) {
                    case 0:
                        return [4, i(93)()];
                    case 1:
                        return t = x.sent(),
                        [4, i(99).default];
                    case 2:
                        return a = x.sent(),
                        [4, i(126).default];
                    case 3:
                        return l = x.sent().addStyles,
                        c = null,
                        [4, i(94)];
                    case 4:
                        return d = x.sent(),
                        u = d.default("data-do-blocklist", e),
                        f = {
                            FADE: "fade",
                            SLIDE: "slide",
                            COVERFLOW: "coverflow",
                            FLIP: "flip",
                            CUBE: "cube"
                        },
                        _ = {
                            VERTICAL: "vertical",
                            HORIZONTAL: "horizontal"
                        },
                        p = t(e).children(".blocklist__controls_container").find(".blocklist__pagination2"),
                        h = t(e).children(".blocklist__pagination_wrapper").find(".blocklist__pagination"),
                        m = p.length ? new Array(p.children().length).fill(p.children().attr("class")) : [],
                        b = h.length ? new Array(h.children().length).fill(h.children().attr("class")) : [],
                        v = "is-removed",
                        k = "is-current",
                        w = "slick-last-slide",
                        y = "slick-fade",
                        g = "slick-initialized",
                        S = function(t) {
                            var i = e.querySelector(".blocklist__items_wrapper");
                            return (i ? i.clientWidth : 0) > t.reduce(function(e, t) {
                                return e + t.clientWidth
                            }, 0)
                        }
                        ,
                        C = function(i) {
                            var n = e.querySelector(".blocklist__list");
                            if (n) {
                                var o = n ? Array.from(n.querySelectorAll(".blocklist__item__outer")).filter(function(e) {
                                    return e.parentElement === n
                                }) : []
                                  , r = t().add(t(e).children(".blocklist__arrows_wrapper").find(".blocklist__arrow--prev")).add(t(e).children(".blocklist__controls_container").find(".blocklist__arrow--prev2"))
                                  , s = t().add(t(e).children(".blocklist__arrows_wrapper").find(".blocklist__arrow--next")).add(t(e).children(".blocklist__controls_container").find(".blocklist__arrow--next2"))
                                  , a = i.controlsGroup ? t(e).children(".blocklist__controls_container").find(".blocklist__pagination2") : t(e).children(".blocklist__pagination_wrapper").find(".blocklist__pagination")
                                  , l = i.controlsGroup ? m : b
                                  , c = {
                                    centerPadding: "0px",
                                    touchMove: i.swipe,
                                    pauseOnHover: !1,
                                    swipe: i.swipe,
                                    draggable: i.swipe,
                                    slidesToShow: "auto" !== i.column ? parseInt(i.column, 10) : 1,
                                    slidesToScroll: parseInt(i.columnGroup, 10),
                                    rows: 0,
                                    speed: i.speed,
                                    infinite: i.loop,
                                    autoplay: i.autoplay,
                                    autoplaySpeed: i.delay,
                                    fade: i.effect === f.FADE,
                                    cssEase: "ease",
                                    vertical: i.direction === _.VERTICAL,
                                    verticalSwiping: i.direction === _.VERTICAL,
                                    variableWidth: "auto" === i.column,
                                    centerMode: i.center,
                                    prevArrow: r,
                                    nextArrow: s,
                                    dots: !0,
                                    appendDots: a,
                                    customPaging: function(e, t) {
                                        var n = l[t] ? l[t] : i.controlsGroup ? "blocklist__pagination_item2" : "blocklist__pagination_item";
                                        return "number" === i.dotsType ? '<div class="' + n + '"><div class="text-block-wrap-div">' + (t + 1) + "</div></div>" : "number from 01" === i.dotsType ? t < 9 ? '<div class="' + n + '"><div class="text-block-wrap-div">0' + (t + 1) + "</div></div>" : '<div class="' + n + '"><div class="text-block-wrap-div">' + (t + 1) + "</div></div>" : '<div class="' + n + '"></div>'
                                    }
                                };
                                if ("auto" === i.column && S(o))
                                    return t(e).removeClass(w),
                                    r.addClass(v),
                                    s.addClass(v),
                                    a.addClass(v),
                                    void t(e).find(".blocklist__list").addClass("slick-variable-width");
                                if (n) {
                                    var d = t(n);
                                    i.effect === f.FADE && d.addClass(y),
                                    "auto" === i.column ? (d.removeClass("slick-variable-width"),
                                    d.css("width", "100%")) : d.css("width", ""),
                                    d.find(".blocklist__item").removeClass(k),
                                    d.on("init", function(n, o) {
                                        var r = o.currentSlide || 0;
                                        if (o.slideCount > o.options.slidesToShow && d.find('.blocklist__item__outer[data-slick-index="' + r + '"] .blocklist__item').addClass(k),
                                        "pager" === i.dotsType) {
                                            var s = t(e).children(".blocklist__pagination_wrapper").find(".blocklist__page");
                                            o.slideCount > o.options.slidesToShow ? s.removeClass(v) : s.addClass(v),
                                            a.hide(),
                                            o.$dots && (o._pageActive = o.$dots.siblings().find(".blocklist__page--active, .blocklist__page--active2"),
                                            o._pageTotal = o.$dots.siblings().find(".blocklist__page--amount, .blocklist__page--amount2"),
                                            o._pageTotal.text(o.slideCount))
                                        }
                                    });
                                    var u, p = function() {
                                        d.slick("slickCurrentSlide") + c.slidesToShow >= o.length && d.slick("slickGoTo", 0)
                                    }, h = function() {
                                        d.slick("slickCurrentSlide") || d.slick("slickGoTo", o.length - c.slidesToShow)
                                    };
                                    d.one("init", function(e, t) {
                                        i.returnToFirst && (r.on("click", h),
                                        s.on("click", p))
                                    }),
                                    d.one("destroy", function() {
                                        d.find(".blocklist__item").removeClass(k),
                                        r.off("click", h),
                                        s.off("click", p)
                                    }),
                                    d.slick(c),
                                    d.on("beforeChange", function(e, i, n, r) {
                                        var s;
                                        s = 1 === Math.abs(r - n) ? r - n > 0 ? "right" : "left" : r - n > 0 ? "left" : "right",
                                        0 === r && ("right" === s ? d.find('.blocklist__item__outer[data-slick-index="' + (n + 1) + '"] .blocklist__item').addClass(k) : d.find('.blocklist__item__outer[data-slick-index="' + (n - 1) + '"] .blocklist__item').addClass(k)),
                                        d.find(".slick-slide").each(function(e, i) {
                                            var n = t(i)
                                              , o = n.find(".blocklist__item");
                                            n.hasClass("slick-current") && o.removeClass(k)
                                        }),
                                        "left" === s && r === o.length - 1 && d.find('.blocklist__item__outer[data-slick-index="' + (n - 1) + '"] .blocklist__item').addClass(k),
                                        d.find('.blocklist__item__outer[data-slick-index="' + r + '"] .blocklist__item').addClass(k)
                                    }),
                                    d.on("afterChange", function(e, n, r) {
                                        if (d.find(".slick-slide").each(function(e, i) {
                                            var n = t(i)
                                              , o = n.find(".blocklist__item");
                                            n.hasClass("slick-current") || o.removeClass(k)
                                        }),
                                        "pager" === i.dotsType) {
                                            var s = (r || 0) + 1;
                                            n._pageActive.text(s),
                                            n._pageTotal.text(n.slideCount)
                                        }
                                        i.autoplay && i.returnToFirst && !i.loop && (r + c.slidesToShow >= o.length ? u = setTimeout(function() {
                                            return d.slick("slickGoTo", 0)
                                        }, Number(i.delay)) : clearTimeout(u))
                                    }),
                                    a.removeClass(v),
                                    r.removeClass(v),
                                    s.removeClass(v),
                                    i.lastSlideArrow && t(e).addClass(w)
                                }
                            }
                        }
                        ,
                        A = function() {
                            t(e).find("> .blocklist__items_wrapper > .blocklist__list").slick("unslick")
                        }
                        ,
                        a.add(function(a) {
                            return r(T, void 0, void 0, function() {
                                var r, d, f, _, p, h, m, b, k, w, y, S;
                                return s(this, function(s) {
                                    switch (s.label) {
                                    case 0:
                                        return r = n.d.indexOf(a),
                                        d = u(r),
                                        f = e.querySelector(".blocklist__list"),
                                        _ = t(e).children(".js-marquee-wrapper"),
                                        p = f ? Array.from(f.querySelectorAll(".blocklist__item__outer")) : [],
                                        h = i(127).default,
                                        d.isMarquee ? [4, i(181)()] : [3, 2];
                                    case 1:
                                        return s.sent().default(t),
                                        t(f).hasClass(g) && (A(),
                                        h.remove(e)),
                                        _.length && t(e).marquee("destroy"),
                                        p.length && t(e).marquee({
                                            direction: d.marquee.direction,
                                            duration: 1e3 * d.marquee.scrollSpeed,
                                            duplicated: !0,
                                            pauseOnHover: d.marquee.hoverStop,
                                            startVisible: !0,
                                            gap: 0,
                                            column: d.column
                                        }),
                                        [3, 5];
                                    case 2:
                                        return d.slider ? (i(109)(),
                                        [4, i(110)()]) : [3, 4];
                                    case 3:
                                        return s.sent(),
                                        _.length && t(e).marquee("destroy"),
                                        m = e.querySelector(".blocklist__list"),
                                        t(m).hasClass(g) && (A(),
                                        h.remove(e)),
                                        m && ((m ? Array.from(m.querySelectorAll(".blocklist__item__outer")).filter(function(e) {
                                            return e.parentElement === m
                                        }) : []).length > 1 ? (c || (b = Array.from(m.classList).find(function(e) {
                                            return e.includes("--u-")
                                        })) && (c = l("." + b + " > .blocklist__item__outer", "." + b + " > .slick-list > .slick-track > .blocklist__item__outer")),
                                        C(d),
                                        k = ".mosaic-tabs__content__outer, .mosaic-accordion__body, .mosaic-popup__inner-data, side-panel__content-inner",
                                        t(e).parents(k).length && h.add(e, function(e) {
                                            var i = t(m).hasClass(g)
                                              , n = 0;
                                            e ? i || (C(o({}, d, {
                                                initialSlide: n
                                            })),
                                            t(m).css("opacity", "1")) : i && (n = t(m).slick("slickCurrentSlide"),
                                            t(m).slick("unslick").css("opacity", "0"))
                                        })) : t().add(t(e).children(".blocklist__arrows_wrapper").find(".blocklist__arrows")).add(t(e).children(".blocklist__pagination_wrapper").find(".blocklist__page, .blocklist__pagination")).add(t(e).children(".blocklist__controls_container").find(".blocklist__controls_wrapper")).addClass(v)),
                                        [3, 5];
                                    case 4:
                                        _.length && t(e).marquee("destroy"),
                                        w = e.querySelector(".blocklist__list"),
                                        t(w).hasClass(g) && (A(),
                                        h.remove(e)),
                                        s.label = 5;
                                    case 5:
                                        return (d.isMarquee || d.slider) && "IntersectionObserver"in window && (y = i(105).default,
                                        (S = new IntersectionObserver(function(e, t) {
                                            e.forEach(function(e) {
                                                if (e.isIntersecting) {
                                                    var t = e.target
                                                      , i = t.querySelectorAll("[data-lazy-src]");
                                                    [].forEach.call(i, function(e) {
                                                        return y(e)
                                                    }),
                                                    S.unobserve(t)
                                                }
                                            })
                                        }
                                        )).observe(e)),
                                        [2]
                                    }
                                })
                            })
                        }),
                        [2]
                    }
                })
            })
        }
    },
    91: function(e, t) {
        e.exports = function e(t) {
            return Object.freeze(t),
            Object.getOwnPropertyNames(t).forEach(function(i) {
                !t.hasOwnProperty(i) || null === t[i] || "object" !== typeof t[i] && "function" !== typeof t[i] || Object.isFrozen(t[i]) || e(t[i])
            }),
            t
        }
    },
    92: function(e, t, i) {
        "use strict";
        i.d(t, "b", function() {
            return r
        }),
        i.d(t, "c", function() {
            return a
        }),
        i.d(t, "a", function() {
            return n
        });
        var n, o = i(91), r = (i.n(o),
        "screen"), s = o(["(min-width: 1920px)", "(min-width: 1440px)", "(min-width: 1280px)", r, "(max-width: 991px)", "(max-width: 767px)", "(max-width: 479px)"]), a = s.indexOf(r);
        !function(e) {
            e.BIG_SCREEN3 = 0,
            e.BIG_SCREEN2 = 1,
            e.BIG_SCREEN1 = 2,
            e.SCREEN = 3,
            e.TABLET_LANDSCAPE = 4,
            e.TABLET_PORTRAIT = 5,
            e.MOBILE = 6
        }(n || (n = {})),
        t.d = s
    },
    93: function(e, t, i) {
        e.exports = function() {
            return new Promise(function(e) {
                i.e(62).then(function(t) {
                    e(i(97))
                }
                .bind(null, i)).catch(i.oe)
            }
            )
        }
    },
    94: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(92)
          , o = i(95);
        t.default = function(e, t) {
            let i = {};
            try {
                i = JSON.parse(t.getAttribute(e) || "")
            } catch (i) {
                return void console.warn(`Error media: ${e} - ${t}`)
            }
            const r = n.d.slice(0, 3)
              , s = n.d.slice(4).reverse();
            return function(t) {
                const a = n.d[t] || r.find(e=>window.matchMedia(e).matches) || s.find(e=>window.matchMedia(e).matches) || n.b;
                let l = {};
                const c = n.d.indexOf(a);
                let d = c > n.c ? n.d.slice(n.c) : n.d.slice(c, n.c + 1).reverse();
                for (let e = 0; e < d.length; e++) {
                    const t = d[e];
                    if (Object.assign(l, i[t]),
                    t === a)
                        break
                }
                return Object(o.a)(e, l),
                l
            }
        }
    },
    95: function(e, t, i) {
        "use strict";
        var n = i(96);
        t.a = function(e, t) {
            if (n.a.hasOwnProperty(e)) {
                var i = n.a[e]
                  , o = function(e) {
                    for (var t in e)
                        if (e.hasOwnProperty(t)) {
                            var n = e[t];
                            i.includes(t) && "boolean" !== typeof n ? e[t] = "0" !== n && Boolean(n) : "string" !== typeof n || isNaN(+n) || (e[t] = Number(n)),
                            "object" === typeof n && o(n)
                        }
                };
                o(t)
            }
        }
    },
    96: function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return o
        });
        var n = i(91)
          , o = (i.n(n),
        n({
            "data-do-accordion": ["isOpened", "closeOther", "childrenAsync"],
            "data-do-auth_popup_btn": ["showUserName", "showSettings", "showOrders", "showLogout", "popupAfterAuthorized"],
            "data-do-form_auth": ["isNativeStyle", "isDrop", "otherHeaderAfterAuth", "showUserName", "isToggle", "isHeader", "isRemember", "isRegistration", "isForgot", "showSocial"],
            "data-do-blocklist": ["slider", "loop", "returnToFirst", "swipe", "lastSlideArrow", "center", "controlsGroup", "autoplay", "childrenAsync", "isMarquee", "hoverStop"],
            "data-do-checkbox": ["required"],
            "data-do-checkbox_group": ["required"],
            "data-do-content": ["image", "gallery", "text", "headers"],
            "data-do-countdown": ["isEnabledDays", "isEnabledHours", "isEnabledMinutes", "isEnabledSeconds"],
            "data-do-form": ["nativeStyle", "showTitleAfterSend", "disabledNativeStyleSelect"],
            "data-do-image": ["scrollZoom", "zoomOnClick"],
            "data-do-input": ["required"],
            "data-do-input_date": ["required"],
            "data-do-input_date_interval": ["required"],
            "data-do-input_email": ["required"],
            "data-do-input_phone": ["required"],
            "data-do-link_universal": ["blank", "sidepanel"],
            "data-do-link_universal_block": ["blank", "sidepanel"],
            "data-do-link_universal_button": ["blank", "sidepanel"],
            "data-do-popup": ["wmshowpopup"],
            "data-do-radio_group": ["required"],
            "data-do-marquee": ["circular", "hoverStop", "invertHover"],
            "data-do-menu_column": ["dropdown", "more", "cancelForward", "firstClick"],
            "data-do-menu_horizontal": ["cancelForward", "more", "firstClickOpen"],
            "data-do-menu_vertical": ["cancelForward", "firstClickOpen"],
            "data-do-s3_article": ["isHeadBlock", "isAllLink", "isImage", "isDate", "isAnnounce", "isLinkMore", "isDay", "isMonth", "isYear"],
            "data-do-s3_article2": ["isHeadBlock", "isAllLink", "isImage", "isDate", "isAnnounce", "isLinkMore", "isDay", "isYear"],
            "data-do-s3_board": ["isDate", "isDay", "isMonth", "isYear"],
            "data-do-s3_news_constructor": ["isHeadNews", "isAllNews", "isImage", "isDate", "isAnnounce", "isLinkMore", "isDay", "isYear"],
            "data-do-s3_unified_news_constructor": ["isHeadBlock", "isAllLink", "isImage", "isDate", "isAnnouncement", "isLinkMore", "isDay", "isYear", "isTime", "isMonthFirst", "isDelimiterDayMonth", "isDelimiterMonthYear", "isDelimiterYearTime", "isCustomDateFormat", "isTags", "isDelimiterTag"],
            "data-do-s3_vote_constructor": ["isResults", "isResultsInfo", "isNativeStyle", "isHideTextResult", "isOtherAnswer"],
            "data-do-section": ["scroll", "smooth"],
            "data-do-select": ["required"],
            "data-do-select_multiple": ["required"],
            "data-do-slider": ["loop", "returnToFirst", "lastSlideArrow", "controlsGroup", "swipe", "autoplay", "childrenAsync", "previews", "thumbs", "thumbsSlider", "independentScrolling", "thumbsCenterMode"],
            "data-do-spoiler": ["isOpened"],
            "data-do-svg_image": ["stretch"],
            "data-do-tabs": ["childrenAsync"],
            "data-do-textarea": ["required"],
            "data-do-upload_file": ["required"],
            "data-do-video": ["viewportAutoPlay"],
            "data-do-video2": ["viewportAutoPlay"]
        }))
    },
    98: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.debounce = function(e, t, i) {
            let n;
            return function() {
                let o = this
                  , r = arguments
                  , s = i && !n;
                clearTimeout(n),
                n = setTimeout(function() {
                    n = null,
                    i || e.apply(o, r)
                }, t),
                s && e.apply(o, r)
            }
        }
    },
    99: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(92)
          , o = i(98).debounce
          , r = new Set
          , s = a();
        function a() {
            for (var e, t = n.d.slice().reverse(), i = n.b, o = !0, r = 0; r < t.length; r++) {
                if ((e = t[r]) === n.b && (o = !1),
                window.matchMedia(e).matches && (i = e,
                o))
                    break
            }
            return i
        }
        var l = o(function() {
            var e = a();
            e !== s && (s = e,
            r.forEach(function(t) {
                t(e)
            }))
        }, 200);
        window.addEventListener("resize", l),
        t.default = {
            add: function(e) {
                r.add(e),
                e(s)
            },
            remove: function(e) {
                r.delete(e)
            },
            getMedia: a
        }
    }
});
