__do__loader__([22], {
    107: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return function(e, t) {
                for (var n = 0, o = t; n < o.length; n++) {
                    var i = o[n];
                    if (!e.hasOwnProperty(i))
                        return;
                    e = e[i]
                }
                return e
            }(o, ["widgets", e])
        }
        ,
        t.b = function(e, t) {
            return function(e, t, n) {
                for (var o = 0, i = t; o < i.length; o++) {
                    var a = i[o];
                    t.indexOf(a) === t.length - 1 ? e[a] = n : (e[a] || (e[a] = {}),
                    e = e[a])
                }
                return n
            }(o, ["widgets", e], t)
        }
        ;
        var o = window.dojs || {};
        window.dojs = o
    },
    175: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(107);
        t.default = function(e) {
            let t = {
                self: {
                    alert: function() {
                        console.log("alert")
                    }
                },
                select: {
                    show: function(t, n) {
                        const o = e("#" + n.selectedTag)
                          , i = "mosaic-event-showed--" + n.eventName
                          , a = "mosaic-event-hidden--" + n.eventName;
                        o.removeClass(a),
                        n.displayType ? o.css("display", n.displayType).addClass(i) : o.show().addClass(i)
                    },
                    hide: function(t, n) {
                        const o = "mosaic-event-hidden--" + n.eventName
                          , i = ["mosaic-event-showed--" + n.eventName, "mosaic-event-toggled--" + n.eventName];
                        e("#" + n.selectedTag).hide().removeClass(i.join(" ")).addClass(o)
                    },
                    toggle: function(t, n) {
                        const o = e("#" + n.selectedTag)
                          , i = "mosaic-event-toggled--" + n.eventName
                          , a = "mosaic-event-hidden--" + n.eventName;
                        o.removeClass(a),
                        !o.hasClass(i) && n.displayType ? o.show().css("display", n.displayType).addClass(i) : o.toggle().toggleClass(i)
                    },
                    setSrcBig: function(t, n) {
                        const o = "mosaic-event-src-modified--" + n.eventName
                          , i = e(t).find("img")
                          , a = i.attr("data-src-alt") || i.attr("src-alt") || i.attr("src-big")
                          , r = e("#" + n.selectedTag).find("img")
                          , s = r.attr("src");
                        a && !r.hasClass(o) && r.attr("src-old", s).attr("src", a).addClass(o)
                    },
                    unsetSrcBig: function(t) {
                        const n = e("#" + t.selectedTag).find("img")
                          , o = n.attr("src-old")
                          , i = "mosaic-event-src-modified--" + t.eventName;
                        n.attr("src", o).removeAttr("src-old").removeClass(i)
                    }
                }
            };
            const n = {
                click(n) {
                    const {eventAction: i, eventElement: a, selectedTag: r} = n
                      , s = this
                      , c = e(`#${r}`);
                    s.on("click", function(e) {
                        if ("select" === a && r) {
                            const e = Object(o.a)(r);
                            e && e.hasOwnProperty(i) ? e[i]() : t.select.hasOwnProperty(i) && t.select[i](s, n)
                        } else
                            t.self.hasOwnProperty(i) && t.self[i](s);
                        e.stopPropagation()
                    }),
                    c.on("click", function(e) {
                        e.stopPropagation()
                    })
                },
                hover: function(n) {
                    if (void 0 !== n.eventElement) {
                        const {eventAction: a, eventElement: r, selectedTag: s} = n
                          , c = this
                          , d = document.querySelector(`#${s}`);
                        c.on("mouseenter", function() {
                            if ("select" === r && s) {
                                const e = Object(o.a)(s);
                                e && e.hasOwnProperty(a) ? e[a]() : t.select.hasOwnProperty(a) && t.select[a](c, n)
                            } else
                                t.self.hasOwnProperty(a) && t.self[a](c)
                        }),
                        c.on("mouseleave", function(e) {
                            d && !d.contains(e.toElement) && d !== e.toElement && (e.data = {
                                options: n
                            },
                            i(e))
                        }),
                        e(d).on("mouseleave", function(e) {
                            e.data = {
                                options: n
                            },
                            i(e)
                        })
                    }
                }
            };
            let i = function(e) {
                let n = e.data.options;
                "setSrcBig" === n.action && t.select.unsetSrcBig(n)
            };
            e.fn.mosaicUEvent = function(t) {
                if (n[t])
                    return n[t].apply(this, Array.prototype.slice.call(arguments, 1));
                e.error("\u041c\u0435\u0442\u043e\u0434 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c " + t + " \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043b\u044f jQuery.mosaicUEvent")
            }
        }
    },
    73: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = this && this.__awaiter || function(e, t, n, o) {
            return new (n || (n = Promise))(function(i, a) {
                function r(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        a(e)
                    }
                }
                function s(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        a(e)
                    }
                }
                function c(e) {
                    e.done ? i(e.value) : new n(function(t) {
                        t(e.value)
                    }
                    ).then(r, s)
                }
                c((o = o.apply(e, t || [])).next())
            }
            )
        }
          , i = this && this.__generator || function(e, t) {
            var n, o, i, a, r = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
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
                                o && (i = 2 & a[0] ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o),
                                0) : o.next) && !(i = i.call(o, a[1])).done)
                                    return i;
                                switch (o = 0,
                                i && (a = [2 & a[0], i.value]),
                                a[0]) {
                                case 0:
                                case 1:
                                    i = a;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: a[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    o = a[1],
                                    a = [0];
                                    continue;
                                case 7:
                                    a = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = r.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                        r.label = a[1];
                                        break
                                    }
                                    if (6 === a[0] && r.label < i[1]) {
                                        r.label = i[1],
                                        i = a;
                                        break
                                    }
                                    if (i && r.label < i[2]) {
                                        r.label = i[2],
                                        r.ops.push(a);
                                        break
                                    }
                                    i[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                a = t.call(e, r)
                            } catch (e) {
                                a = [6, e],
                                o = 0
                            } finally {
                                n = i = 0
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
            return o(this, void 0, void 0, function() {
                var t, o, a, r, s, c, d, l, u, p, f;
                return i(this, function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, n(93)()];
                    case 1:
                        return t = i.sent(),
                        [4, n(175)];
                    case 2:
                        return o = i.sent(),
                        [4, n(94)];
                    case 3:
                        if (a = i.sent(),
                        r = a.default("data-do-link_universal", e),
                        s = r(),
                        Object.keys(s).length) {
                            if ("link" === s.type)
                                return [2];
                            c = "none",
                            void 0 !== s.popup && "none" !== s.popup ? (c = s.popup,
                            d = t(e).attr("id"),
                            l = d.split("_"),
                            u = l[0],
                            p = parseInt(l[1], 10),
                            t(e).on("click", function() {
                                t("#" + c).mosaicPopup("open", u, p)
                            })) : void 0 !== s.eventName && "none" !== s.eventName && ("customScript" === s.eventAction ? (f = s.customScript ? s.customScript : "",
                            "click" === s.eventName ? t(e).on("click", new Function(f)) : "hover" === s.eventName && t(e).on("mouseover", new Function(f))) : (o.default(t),
                            t(e).mosaicUEvent(s.eventName, s))),
                            s.sidepanel && "none" === s.popup && t(e).on("click", function() {
                                var e = window.sidePanelController;
                                e && e.toggle()
                            })
                        }
                        return [2]
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
            return o
        });
        var o, i = n(91), a = (n.n(i),
        "screen"), r = i(["(min-width: 1920px)", "(min-width: 1440px)", "(min-width: 1280px)", a, "(max-width: 991px)", "(max-width: 767px)", "(max-width: 479px)"]), s = r.indexOf(a);
        !function(e) {
            e.BIG_SCREEN3 = 0,
            e.BIG_SCREEN2 = 1,
            e.BIG_SCREEN1 = 2,
            e.SCREEN = 3,
            e.TABLET_LANDSCAPE = 4,
            e.TABLET_PORTRAIT = 5,
            e.MOBILE = 6
        }(o || (o = {})),
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
        var o = n(92)
          , i = n(95);
        t.default = function(e, t) {
            let n = {};
            try {
                n = JSON.parse(t.getAttribute(e) || "")
            } catch (n) {
                return void console.warn(`Error media: ${e} - ${t}`)
            }
            const a = o.d.slice(0, 3)
              , r = o.d.slice(4).reverse();
            return function(t) {
                const s = o.d[t] || a.find(e=>window.matchMedia(e).matches) || r.find(e=>window.matchMedia(e).matches) || o.b;
                let c = {};
                const d = o.d.indexOf(s);
                let l = d > o.c ? o.d.slice(o.c) : o.d.slice(d, o.c + 1).reverse();
                for (let e = 0; e < l.length; e++) {
                    const t = l[e];
                    if (Object.assign(c, n[t]),
                    t === s)
                        break
                }
                return Object(i.a)(e, c),
                c
            }
        }
    },
    95: function(e, t, n) {
        "use strict";
        var o = n(96);
        t.a = function(e, t) {
            if (o.a.hasOwnProperty(e)) {
                var n = o.a[e]
                  , i = function(e) {
                    for (var t in e)
                        if (e.hasOwnProperty(t)) {
                            var o = e[t];
                            n.includes(t) && "boolean" !== typeof o ? e[t] = "0" !== o && Boolean(o) : "string" !== typeof o || isNaN(+o) || (e[t] = Number(o)),
                            "object" === typeof o && i(o)
                        }
                };
                i(t)
            }
        }
    },
    96: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var o = n(91)
          , i = (n.n(o),
        o({
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
