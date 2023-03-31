__do__loader__([23], {
    80: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(92)
          , n = this && this.__awaiter || function(e, t, o, i) {
            return new (o || (o = Promise))(function(n, r) {
                function a(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    try {
                        d(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? n(e.value) : new o(function(t) {
                        t(e.value)
                    }
                    ).then(a, s)
                }
                d((i = i.apply(e, t || [])).next())
            }
            )
        }
          , r = this && this.__generator || function(e, t) {
            var o, i, n, r, a = {
                label: 0,
                sent: function() {
                    if (1 & n[0])
                        throw n[1];
                    return n[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function s(r) {
                return function(s) {
                    return function(r) {
                        if (o)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (o = 1,
                                i && (n = 2 & r[0] ? i.return : r[0] ? i.throw || ((n = i.return) && n.call(i),
                                0) : i.next) && !(n = n.call(i, r[1])).done)
                                    return n;
                                switch (i = 0,
                                n && (r = [2 & r[0], n.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    n = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < n[1]) {
                                        a.label = n[1],
                                        n = r;
                                        break
                                    }
                                    if (n && a.label < n[2]) {
                                        a.label = n[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    n[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = t.call(e, a)
                            } catch (e) {
                                r = [6, e],
                                i = 0
                            } finally {
                                o = n = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, s])
                }
            }
        }
        ;
        t.default = function(e) {
            return n(this, void 0, void 0, function() {
                var t, n, a, s, d, u, c;
                return r(this, function(r) {
                    return e instanceof HTMLElement && (t = o(99).default,
                    n = o(94).default("data-do-section", e),
                    a = t.getMedia(),
                    s = i.d.indexOf(a),
                    d = n(s),
                    u = d.scroll,
                    c = d.smooth,
                    u && window.setTimeout(function() {
                        var t = document.scrollingElement || document.documentElement
                          , o = (window.pageYOffset || t.scrollTop) + e.getBoundingClientRect().top
                          , i = c ? "smooth" : "auto";
                        t.scrollTo({
                            behavior: i,
                            top: o
                        })
                    }, 0)),
                    [2]
                })
            })
        }
    },
    91: function(e, t) {
        e.exports = function e(t) {
            return Object.freeze(t),
            Object.getOwnPropertyNames(t).forEach(function(o) {
                !t.hasOwnProperty(o) || null === t[o] || "object" !== typeof t[o] && "function" !== typeof t[o] || Object.isFrozen(t[o]) || e(t[o])
            }),
            t
        }
    },
    92: function(e, t, o) {
        "use strict";
        o.d(t, "b", function() {
            return r
        }),
        o.d(t, "c", function() {
            return s
        }),
        o.d(t, "a", function() {
            return i
        });
        var i, n = o(91), r = (o.n(n),
        "screen"), a = n(["(min-width: 1920px)", "(min-width: 1440px)", "(min-width: 1280px)", r, "(max-width: 991px)", "(max-width: 767px)", "(max-width: 479px)"]), s = a.indexOf(r);
        !function(e) {
            e.BIG_SCREEN3 = 0,
            e.BIG_SCREEN2 = 1,
            e.BIG_SCREEN1 = 2,
            e.SCREEN = 3,
            e.TABLET_LANDSCAPE = 4,
            e.TABLET_PORTRAIT = 5,
            e.MOBILE = 6
        }(i || (i = {})),
        t.d = a
    },
    94: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(92)
          , n = o(95);
        t.default = function(e, t) {
            let o = {};
            try {
                o = JSON.parse(t.getAttribute(e) || "")
            } catch (o) {
                return void console.warn(`Error media: ${e} - ${t}`)
            }
            const r = i.d.slice(0, 3)
              , a = i.d.slice(4).reverse();
            return function(t) {
                const s = i.d[t] || r.find(e=>window.matchMedia(e).matches) || a.find(e=>window.matchMedia(e).matches) || i.b;
                let d = {};
                const u = i.d.indexOf(s);
                let c = u > i.c ? i.d.slice(i.c) : i.d.slice(u, i.c + 1).reverse();
                for (let e = 0; e < c.length; e++) {
                    const t = c[e];
                    if (Object.assign(d, o[t]),
                    t === s)
                        break
                }
                return Object(n.a)(e, d),
                d
            }
        }
    },
    95: function(e, t, o) {
        "use strict";
        var i = o(96);
        t.a = function(e, t) {
            if (i.a.hasOwnProperty(e)) {
                var o = i.a[e]
                  , n = function(e) {
                    for (var t in e)
                        if (e.hasOwnProperty(t)) {
                            var i = e[t];
                            o.includes(t) && "boolean" !== typeof i ? e[t] = "0" !== i && Boolean(i) : "string" !== typeof i || isNaN(+i) || (e[t] = Number(i)),
                            "object" === typeof i && n(i)
                        }
                };
                n(t)
            }
        }
    },
    96: function(e, t, o) {
        "use strict";
        o.d(t, "a", function() {
            return n
        });
        var i = o(91)
          , n = (o.n(i),
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
    },
    98: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.debounce = function(e, t, o) {
            let i;
            return function() {
                let n = this
                  , r = arguments
                  , a = o && !i;
                clearTimeout(i),
                i = setTimeout(function() {
                    i = null,
                    o || e.apply(n, r)
                }, t),
                a && e.apply(n, r)
            }
        }
    },
    99: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = o(92)
          , n = o(98).debounce
          , r = new Set
          , a = s();
        function s() {
            for (var e, t = i.d.slice().reverse(), o = i.b, n = !0, r = 0; r < t.length; r++) {
                if ((e = t[r]) === i.b && (n = !1),
                window.matchMedia(e).matches && (o = e,
                n))
                    break
            }
            return o
        }
        var d = n(function() {
            var e = s();
            e !== a && (a = e,
            r.forEach(function(t) {
                t(e)
            }))
        }, 200);
        window.addEventListener("resize", d),
        t.default = {
            add: function(e) {
                r.add(e),
                e(a)
            },
            remove: function(e) {
                r.delete(e)
            },
            getMedia: s
        }
    }
});
