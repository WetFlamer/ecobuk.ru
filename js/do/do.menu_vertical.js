__do__loader__([18], {
    104: function(e, t, n) {
        e.exports = function() {
            return new Promise(function(e) {
                n.e(51).then(function(t) {
                    e(n(112))
                }
                .bind(null, n)).catch(n.oe)
            }
            )
        }
    },
    106: function(e, t, n) {
        e.exports = function() {
            return new Promise(function(e) {
                n.e(47).then(function(t) {
                    e(n(111))
                }
                .bind(null, n)).catch(n.oe)
            }
            )
        }
    },
    124: function(e, t, n) {
        e.exports = function() {
            return new Promise(function(e) {
                n.e(50).then(function(t) {
                    e(n(132))
                }
                .bind(null, n)).catch(n.oe)
            }
            )
        }
    },
    64: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = this && this.__awaiter || function(e, t, n, i) {
            return new (n || (n = Promise))(function(o, a) {
                function r(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        a(e)
                    }
                }
                function s(e) {
                    try {
                        d(i.throw(e))
                    } catch (e) {
                        a(e)
                    }
                }
                function d(e) {
                    e.done ? o(e.value) : new n(function(t) {
                        t(e.value)
                    }
                    ).then(r, s)
                }
                d((i = i.apply(e, t || [])).next())
            }
            )
        }
          , o = this && this.__generator || function(e, t) {
            var n, i, o, a, r = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" === typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }
            ),
            a;
            function s(a) {
                return function(s) {
                    return function(a) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; r; )
                            try {
                                if (n = 1,
                                i && (o = 2 & a[0] ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, a[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (a = [2 & a[0], o.value]),
                                a[0]) {
                                case 0:
                                case 1:
                                    o = a;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: a[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    i = a[1],
                                    a = [0];
                                    continue;
                                case 7:
                                    a = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = r.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                        r.label = a[1];
                                        break
                                    }
                                    if (6 === a[0] && r.label < o[1]) {
                                        r.label = o[1],
                                        o = a;
                                        break
                                    }
                                    if (o && r.label < o[2]) {
                                        r.label = o[2],
                                        r.ops.push(a);
                                        break
                                    }
                                    o[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                a = t.call(e, r)
                            } catch (e) {
                                a = [6, e],
                                i = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & a[0])
                            throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, s])
                }
            }
        }
        ;
        t.default = function(e) {
            return i(this, void 0, void 0, function() {
                function t() {
                    f.find(".has-child, .is-opened").removeClass("has-child is-opened"),
                    f.find("ul").attr("style", "")
                }
                function i(e, n) {
                    if (void 0 !== e)
                        switch (e.toLowerCase()) {
                        case "dropdown":
                            f.data("type-menu", n).off("click.verMenu").find("li." + m).removeClass(m),
                            f.find("ul").attr("style", "");
                            break;
                        case "popup_right":
                            f.data("type-menu", n).off("mouseenter").off("mouseleave"),
                            t();
                            break;
                        case "dropdown_popup":
                            f.data("type-menu", n).off("click.verMenu").find("li." + m).removeClass(m),
                            f.find("> li > ul").off("mouseenter").off("mouseleave"),
                            t()
                        }
                    else
                        f.data("type-menu", n)
                }
                function a(e, t) {
                    f.find("ul:visible").each(function(e, t) {
                        t.closest("li").classList.add(m)
                    }),
                    f.data("type-menu", e).on("click.verMenu", t, function(e) {
                        var t = s(e.target)
                          , n = t.closest("a")
                          , i = n.parents("li").length;
                        if (t.closest("li").find("> ul").length) {
                            var o = w();
                            (t.closest(h).length || o.cancelForward && 1 === i || o.firstClickOpen && !t.closest("li").hasClass("is-opened")) && (e.preventDefault(),
                            n.parent("li").toggleClass(m).find("> " + p).slideToggle(250))
                        }
                    })
                }
                function r() {
                    var e = w()
                      , t = f.data("type-menu") || void 0
                      , n = e.mode;
                    t !== n && (_.cancelForward && f.find("> li.has-child > a").attr("href", "javascript:void(0)"),
                    "dropdown" === n ? (i(t, n),
                    a("dropdown", "li > a")) : "popup_right" === n ? (i(t, n),
                    f.s3MenuAllIn(_)) : "dropdown_popup" === n && (i(t, n),
                    a("dropdown_popup", "> li > a"),
                    f.find("> li > ul").s3MenuAllIn(Object.assign(_, {
                        cancelForward: !1
                    }))))
                }
                var s, d, l, u, c, f, p, h, m, w, v, _;
                return o(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, n(93)()];
                    case 1:
                        return s = t.sent(),
                        [4, n(94)];
                    case 2:
                        return d = t.sent(),
                        [4, n(106)()];
                    case 3:
                        return l = t.sent(),
                        [4, n(104)()];
                    case 4:
                        return u = t.sent(),
                        [4, n(124)()];
                    case 5:
                        return c = t.sent(),
                        l.default(s),
                        u.default(),
                        c.default(s),
                        f = s(e).find(".ver-menu__list"),
                        p = ".ver-menu__sub_list",
                        h = ".ver-menu__icon, .ver-menu__sub_icon",
                        m = "is-opened",
                        w = d.default("data-do-menu_vertical", e),
                        v = w(),
                        _ = {
                            type: "right",
                            activateTimeout: v.delayIn,
                            exitTimeout: v.delayOut,
                            showTime: v.delayIn,
                            hideTime: v.delayOut,
                            showFn: s.fn.fadeIn,
                            hideFn: s.fn.fadeOut,
                            cancelForward: Boolean(v.cancelForward)
                        },
                        r(),
                        s(window).on("resize", function() {
                            requestAnimationFrame(r)
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
            Object.getOwnPropertyNames(t).forEach(function(n) {
                !t.hasOwnProperty(n) || null === t[n] || "object" !== typeof t[n] && "function" !== typeof t[n] || Object.isFrozen(t[n]) || e(t[n])
            }),
            t
        }
    },
    92: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a
        }),
        n.d(t, "c", function() {
            return s
        }),
        n.d(t, "a", function() {
            return i
        });
        var i, o = n(91), a = (n.n(o),
        "screen"), r = o(["(min-width: 1920px)", "(min-width: 1440px)", "(min-width: 1280px)", a, "(max-width: 991px)", "(max-width: 767px)", "(max-width: 479px)"]), s = r.indexOf(a);
        !function(e) {
            e.BIG_SCREEN3 = 0,
            e.BIG_SCREEN2 = 1,
            e.BIG_SCREEN1 = 2,
            e.SCREEN = 3,
            e.TABLET_LANDSCAPE = 4,
            e.TABLET_PORTRAIT = 5,
            e.MOBILE = 6
        }(i || (i = {})),
        t.d = r
    },
    93: function(e, t, n) {
        e.exports = function() {
            return new Promise(function(e) {
                n.e(62).then(function(t) {
                    e(n(97))
                }
                .bind(null, n)).catch(n.oe)
            }
            )
        }
    },
    94: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(92)
          , o = n(95);
        t.default = function(e, t) {
            let n = {};
            try {
                n = JSON.parse(t.getAttribute(e) || "")
            } catch (n) {
                return void console.warn(`Error media: ${e} - ${t}`)
            }
            const a = i.d.slice(0, 3)
              , r = i.d.slice(4).reverse();
            return function(t) {
                const s = i.d[t] || a.find(e=>window.matchMedia(e).matches) || r.find(e=>window.matchMedia(e).matches) || i.b;
                let d = {};
                const l = i.d.indexOf(s);
                let u = l > i.c ? i.d.slice(i.c) : i.d.slice(l, i.c + 1).reverse();
                for (let e = 0; e < u.length; e++) {
                    const t = u[e];
                    if (Object.assign(d, n[t]),
                    t === s)
                        break
                }
                return Object(o.a)(e, d),
                d
            }
        }
    },
    95: function(e, t, n) {
        "use strict";
        var i = n(96);
        t.a = function(e, t) {
            if (i.a.hasOwnProperty(e)) {
                var n = i.a[e]
                  , o = function(e) {
                    for (var t in e)
                        if (e.hasOwnProperty(t)) {
                            var i = e[t];
                            n.includes(t) && "boolean" !== typeof i ? e[t] = "0" !== i && Boolean(i) : "string" !== typeof i || isNaN(+i) || (e[t] = Number(i)),
                            "object" === typeof i && o(i)
                        }
                };
                o(t)
            }
        }
    },
    96: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var i = n(91)
          , o = (n.n(i),
        i({
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
    }
});
