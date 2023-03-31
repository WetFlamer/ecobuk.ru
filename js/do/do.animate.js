__do__loader__([37], {
    169: function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(n) {
            function t(n) {
                if (!this.isAnimating) {
                    const t = 1e3 * (n.duration + n.delay) || 0
                      , i = `ms-animator-${n.name} ms-animator-d${n.duration} ms-animator-s${n.delay} ${n.infinite ? "ms-animator-i" : ""} ms-animator`;
                    if (this.isAnimating = !0,
                    this.removeClass("ms-animator-visible"),
                    this.addClass(i),
                    !n.infinite) {
                        const n = this.get(0);
                        document.dispatchEvent(new CustomEvent("animationStart",{
                            detail: {
                                element: n
                            }
                        })),
                        setTimeout(()=>{
                            e.call(this),
                            this.addClass("ms-animator-visible"),
                            document.dispatchEvent(new CustomEvent("animationEnd",{
                                detail: {
                                    element: n
                                }
                            }))
                        }
                        , t)
                    }
                }
            }
            function e() {
                this.removeClassWild("ms-*"),
                this.isAnimating = !1
            }
            function i(i) {
                const o = this;
                !function(t) {
                    const e = t.offset().top
                      , i = t.height()
                      , o = n(document).scrollTop()
                      , r = n(window).height();
                    return i + e > o + 10 && e < o + r - 10
                }(o) ? i.loop && !i.infinite && e.call(o) : (t.call(o, i),
                i.loop || this.scrollHandler && n(document).off("scroll.ms-animator", this.scrollHandler))
            }
            let o = {
                init: function(n) {
                    const t = this;
                    t.isAnimating = !1,
                    n.reduce((n,t)=>n.find(n=>n.event === t.event) || "none" === t.event ? n : [...n, t], []).forEach(({event: n, animation: e})=>{
                        "click" === n || "mouseenter" === n || "mouseleave" === n ? t.mosaicAnimation("animate", {
                            event: n,
                            animation: e
                        }) : t.mosaicAnimation("intoView", e)
                    }
                    )
                },
                destroy: function() {
                    e.call(this),
                    this.scrollHandler && n(document).off("scroll.ms-animator", this.scrollHandler),
                    this.off("click.ms-animator mouseleave.ms-animator mouseenter.ms-animator"),
                    this.observer instanceof IntersectionObserver && this.observer.disconnect()
                },
                animate: function({event: n, animation: e}) {
                    const i = this;
                    i.on(`${n}.ms-animator`, function(n) {
                        n.stopPropagation(),
                        t.call(i, e)
                    })
                },
                intoView: function(o) {
                    if ("IntersectionObserver"in window) {
                        const n = this
                          , i = {
                            rootMargin: "-10px",
                            threshold: [0]
                        };
                        this.observer = new IntersectionObserver((i,r)=>{
                            i.forEach(i=>{
                                i.isIntersecting ? (t.call(n, o),
                                o.loop || r.disconnect()) : o.loop && !o.infinite && e.call(n)
                            }
                            )
                        }
                        ,i),
                        this.observer.observe(n.get(0))
                    } else
                        this.scrollHandler = i.bind(this, o),
                        n(document).on("scroll.ms-animator", this.scrollHandler),
                        this.scrollHandler()
                }
            };
            n.fn.mosaicAnimation = function(t) {
                return o[t] ? o[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" !== typeof t && t ? void n.error("\u041c\u0435\u0442\u043e\u0434 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c " + t + " \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043b\u044f jQuery.mosaicAnimation") : o.init.apply(this, arguments)
            }
            ,
            n.fn.removeClassWild = function(n) {
                return this.removeClass(function(t, e) {
                    var i = n.replace(/\*/g, "\\S+");
                    return (e.match(new RegExp("\\b" + i,"g")) || []).join(" ")
                })
            }
        }
    },
    66: function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = e(92)
          , o = this && this.__awaiter || function(n, t, e, i) {
            return new (e || (e = Promise))(function(o, r) {
                function a(n) {
                    try {
                        c(i.next(n))
                    } catch (n) {
                        r(n)
                    }
                }
                function s(n) {
                    try {
                        c(i.throw(n))
                    } catch (n) {
                        r(n)
                    }
                }
                function c(n) {
                    n.done ? o(n.value) : new e(function(t) {
                        t(n.value)
                    }
                    ).then(a, s)
                }
                c((i = i.apply(n, t || [])).next())
            }
            )
        }
          , r = this && this.__generator || function(n, t) {
            var e, i, o, r, a = {
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
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (e = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
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
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = t.call(n, a)
                            } catch (n) {
                                r = [6, n],
                                i = 0
                            } finally {
                                e = o = 0
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
        t.default = function(n) {
            return o(this, void 0, void 0, function() {
                var t, o, a, s, c, l;
                return r(this, function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, e(93)()];
                    case 1:
                        return t = r.sent(),
                        [4, e(169)];
                    case 2:
                        return o = r.sent(),
                        [4, e(99).default];
                    case 3:
                        return a = r.sent(),
                        s = t(n),
                        o.default(t),
                        c = JSON.parse(s.attr("data-do-animation")),
                        l = function(n) {
                            s.mosaicAnimation("init", n)
                        }
                        ,
                        a.add(function(n) {
                            if (s.mosaicAnimation("destroy"),
                            void 0 !== c && c.length > 0) {
                                var t = c.filter(function(t) {
                                    return !t.hasOwnProperty("medias") || (!!t.medias.includes(n) || i.d.indexOf(n) < i.c && t.medias.includes(i.b))
                                });
                                t.length && l(t)
                            }
                        }),
                        [2]
                    }
                })
            })
        }
    },
    91: function(n, t) {
        n.exports = function n(t) {
            return Object.freeze(t),
            Object.getOwnPropertyNames(t).forEach(function(e) {
                !t.hasOwnProperty(e) || null === t[e] || "object" !== typeof t[e] && "function" !== typeof t[e] || Object.isFrozen(t[e]) || n(t[e])
            }),
            t
        }
    },
    92: function(n, t, e) {
        "use strict";
        e.d(t, "b", function() {
            return r
        }),
        e.d(t, "c", function() {
            return s
        }),
        e.d(t, "a", function() {
            return i
        });
        var i, o = e(91), r = (e.n(o),
        "screen"), a = o(["(min-width: 1920px)", "(min-width: 1440px)", "(min-width: 1280px)", r, "(max-width: 991px)", "(max-width: 767px)", "(max-width: 479px)"]), s = a.indexOf(r);
        !function(n) {
            n.BIG_SCREEN3 = 0,
            n.BIG_SCREEN2 = 1,
            n.BIG_SCREEN1 = 2,
            n.SCREEN = 3,
            n.TABLET_LANDSCAPE = 4,
            n.TABLET_PORTRAIT = 5,
            n.MOBILE = 6
        }(i || (i = {})),
        t.d = a
    },
    93: function(n, t, e) {
        n.exports = function() {
            return new Promise(function(n) {
                e.e(62).then(function(t) {
                    n(e(97))
                }
                .bind(null, e)).catch(e.oe)
            }
            )
        }
    },
    98: function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.debounce = function(n, t, e) {
            let i;
            return function() {
                let o = this
                  , r = arguments
                  , a = e && !i;
                clearTimeout(i),
                i = setTimeout(function() {
                    i = null,
                    e || n.apply(o, r)
                }, t),
                a && n.apply(o, r)
            }
        }
    },
    99: function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = e(92)
          , o = e(98).debounce
          , r = new Set
          , a = s();
        function s() {
            for (var n, t = i.d.slice().reverse(), e = i.b, o = !0, r = 0; r < t.length; r++) {
                if ((n = t[r]) === i.b && (o = !1),
                window.matchMedia(n).matches && (e = n,
                o))
                    break
            }
            return e
        }
        var c = o(function() {
            var n = s();
            n !== a && (a = n,
            r.forEach(function(t) {
                t(n)
            }))
        }, 200);
        window.addEventListener("resize", c),
        t.default = {
            add: function(n) {
                r.add(n),
                n(a)
            },
            remove: function(n) {
                r.delete(n)
            },
            getMedia: s
        }
    }
});
