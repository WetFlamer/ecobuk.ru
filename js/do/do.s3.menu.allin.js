__do__loader__([50], {
    100: function(t, e) {
        (function(e) {
            t.exports = e
        }
        ).call(e, {})
    },
    132: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = function(t) {
            var e;
            e = function(t, e) {
                var i;
                function n() {
                    var e = this;
                    if (!e.settings.debug && -1 === document.location.search.indexOf("test"))
                        return !1;
                    i || (i = {},
                    t.each(["a", "b", "c"], function(e, n) {
                        var s = {
                            id: "s3-menu-allin-point-" + n,
                            class: "s3-menu-allin-point",
                            html: n
                        };
                        i[n] = t("<div></div>", s),
                        t(document.body).append(i[n])
                    })),
                    t.each(i, function(t, i) {
                        i.css({
                            left: e.triangle[t].x,
                            top: e.triangle[t].y
                        })
                    })
                }
                t.s3MenuAllInTypes = {
                    _popup: {
                        activate: function(t) {
                            var e = t.$item.siblings();
                            t.$item.find("> ul").parent().addClass(this.settings.activeClass),
                            e.removeClass(this.settings.activeClass),
                            this.hide(e.children("ul")),
                            this.show(t.$sub),
                            this.hide(t.$sub.find("ul"))
                        },
                        deactivate: function(t) {
                            t.$item.removeClass(this.settings.activeClass),
                            this.hide(t.$sub)
                        },
                        exit: function() {
                            var t = this;
                            setTimeout(function() {
                                t.$el.find("li").removeClass(t.settings.activeClass),
                                t.hide(t.$el.find("ul"))
                            }, 50)
                        }
                    },
                    auto: function(e) {
                        e.on("activate", function(e) {
                            var i = e.$sub;
                            if (i.length) {
                                var n = t(window).width()
                                  , s = e.$item
                                  , o = i.is(":hidden");
                                i.show();
                                var l, a = s.position(), c = s.offset(), u = s.width(), r = i.outerWidth(), d = s.height(), f = parseInt(i.css("height"), 10), h = {}, p = this.triangle.b, g = this.triangle.c, v = !1, m = !1, T = document.documentElement.scrollHeight <= c.top + f + d;
                                f < c.top && T && (m = !0),
                                1 === e.level ? (l = c.left + r,
                                h.left = l > n ? a.left + u - r : a.left,
                                h.top = a.top + s.height(),
                                m && (h.top = a.top - f)) : ((l = c.left + u + r) > n ? (h.left = a.left - r,
                                v = !0) : h.left = a.left + u,
                                h.top = a.top - parseInt(s.closest("ul").css("paddingTop")),
                                m && (h.top = a.top + d)),
                                i.css(h);
                                var $ = i.offset();
                                1 === e.level ? (p.y = g.y = $.top,
                                m && (p.y = g.y = $.top + f),
                                p.x = $.left,
                                g.x = $.left + r) : (p.y = $.top,
                                g.y = $.top + i.height(),
                                p.x = g.x = v ? $.left + r : $.left),
                                o && i.hide()
                            }
                        }),
                        e.on(this._popup)
                    },
                    bottom: function(e) {
                        e.on("activate", function(e) {
                            var i = e.$sub;
                            if (i.length) {
                                var n = t(window).width()
                                  , s = e.$item
                                  , o = i.is(":hidden");
                                i.show();
                                var l, a = s.position(), c = s.offset(), u = s.width(), r = i.outerWidth(), d = {}, f = this.triangle.b, h = this.triangle.c, p = !1;
                                1 === e.level ? (l = c.left + r,
                                d.left = l > n ? a.left + u - r : a.left,
                                d.top = a.top + s.height()) : ((l = c.left + u + r) > n ? (d.left = a.left - r,
                                p = !0) : d.left = a.left + u,
                                d.top = a.top - parseInt(s.closest("ul").css("paddingTop"))),
                                i.css(d);
                                var g = i.offset();
                                1 === e.level ? (f.y = h.y = g.top,
                                f.x = g.left,
                                h.x = g.left + r) : (f.y = g.top,
                                h.y = g.top + i.height(),
                                f.x = h.x = p ? g.left + r : g.left),
                                o && i.hide()
                            }
                        }),
                        e.on(this._popup)
                    },
                    top: function(e) {
                        e.on("activate", function(e) {
                            var i = e.$sub;
                            if (i.length) {
                                var n = t(window).width()
                                  , s = e.$item
                                  , o = i.is(":hidden");
                                i.show();
                                var l, a = s.position(), c = s.offset(), u = s.width(), r = s.height(), d = i.width(), f = parseInt(i.css("height"), 10), h = {}, p = this.triangle.b, g = this.triangle.c, v = !1;
                                1 === e.level ? (l = c.left + d,
                                h.left = l > n ? a.left + u - d : a.left,
                                h.top = a.top - f) : ((l = c.left + u + d) > n ? (h.left = a.left - d,
                                v = !0) : h.left = a.left + u,
                                h.top = a.top + r),
                                i.css(h);
                                var m = i.offset();
                                1 === e.level ? (p.y = g.y = m.top + f,
                                p.x = m.left,
                                g.x = m.left + d) : (p.y = m.top,
                                g.y = m.top + i.height(),
                                p.x = g.x = v ? m.left + d : m.left),
                                o && i.hide()
                            }
                        }),
                        e.on(this._popup)
                    },
                    right: function(e) {
                        e.on("activate", function(e) {
                            var i = e.$sub;
                            if (i.length) {
                                var n = t(window).width()
                                  , s = e.$item
                                  , o = i.is(":hidden");
                                i.show();
                                var l, a = s.position(), c = s.offset(), u = s.width(), r = i.width(), d = {}, f = this.triangle.b, h = this.triangle.c, p = !1;
                                l = c.left + u + r,
                                d.top = a.top - parseInt(s.closest("ul").css("paddingTop")),
                                l > n ? (d.left = a.left - r,
                                p = !0) : d.left = a.left + u,
                                i.css(d);
                                var g = i.offset();
                                f.y = g.top,
                                h.y = g.top + i.height(),
                                f.x = h.x = p ? g.left + r : g.left,
                                o && i.hide()
                            }
                        }),
                        e.on(this._popup)
                    },
                    left: function(t) {
                        t.on("activate", function(t) {
                            var e = t.$sub;
                            if (e.length) {
                                var i = t.$item
                                  , n = e.is(":hidden");
                                e.show();
                                var s, o = i.position(), l = i.offset(), a = i.width(), c = e.width(), u = {}, r = this.triangle.b, d = this.triangle.c, f = !1;
                                s = l.left - c,
                                u.top = o.top - parseInt(i.closest("ul").css("paddingTop")),
                                s < 0 ? (u.left = o.left + c,
                                f = !0) : u.left = o.left - a,
                                e.css(u);
                                var h = e.offset();
                                r.y = h.top,
                                d.y = h.top + e.height(),
                                r.x = d.x = f ? h.left : h.left + c,
                                n && e.hide()
                            }
                        }),
                        t.on(this._popup)
                    },
                    dropdown: function(e, i) {
                        i = i || "a",
                        e.$el.on({
                            click: function() {
                                var i = t(this)
                                  , n = i.closest("li").children("ul");
                                return !n.length || !n.is(":animated") && (n.is(":hidden") ? e.show(n, function() {
                                    i.addClass(e.settings.openClass)
                                }) : e.hide(n, function() {
                                    i.removeClass(e.settings.openClass)
                                }),
                                !1)
                            }
                        }, i)
                    },
                    _dropdownPlus: function(e, i) {
                        var n = e.$el.children("li")
                          , s = t.extend({}, e, {
                            $el: n
                        });
                        t.s3MenuAllInTypes.dropdown(s, "> a"),
                        n.children("ul").s3MenuAllIn(t.extend({}, e.settings, {
                            type: i
                        }))
                    },
                    "dropdown+left": function(t) {
                        this._dropdownPlus(t, "left")
                    },
                    "dropdown+right": function(t) {
                        this._dropdownPlus(t, "right")
                    }
                },
                t.fn.s3MenuAllIn = function(i) {
                    var s = "ontouchstart"in document.documentElement || navigator.maxTouchPoints;
                    return i = t.extend({
                        deviation: 10,
                        type: "right",
                        exitTimeout: 500,
                        activateTimeout: 0,
                        deactivateTimeout: 200,
                        exclude: "ul",
                        debug: !1,
                        showFn: t.fn.show,
                        showTime: 0,
                        hideFn: t.fn.hide,
                        hideTime: 0,
                        activeClass: "is-opened",
                        hasClass: "has-child",
                        openClass: "is-opened"
                    }, i),
                    this.each(function() {
                        var o = t(this)
                          , l = t.s3Eventable({
                            settings: i,
                            triangle: new e.Triangle({},{},{}),
                            $el: o,
                            $li: o.find("li"),
                            $ul: o.find("ul"),
                            isBlocked: !1,
                            isExit: !0,
                            active: {}
                        });
                        t.each(["show", "hide"], function(e, i) {
                            l[i] = function(e, n) {
                                e.length && (e.stop(!0, !0),
                                this.settings[i + "Fn"].call(e, this.settings[i + "Time"], n || t.noop))
                            }
                        }),
                        i.hasClass && l.$ul.parent("li").addClass(i.hasClass),
                        s || i.firstClickOpen || (t(document).on("mousemove", function(e) {
                            if (l.isBlocked) {
                                var n = t(e.target)
                                  , s = n.not(i.exclude).closest("li")
                                  , o = l.triangle.hasPoint({
                                    x: e.pageX,
                                    y: e.pageY
                                }, i.deviation)
                                  , a = !!l.$el.has(n).length
                                  , c = !1;
                                if (s.length && l.active.$sub && (c = s.closest("ul").get(0) === l.active.$sub.get(0)),
                                a && (l.isExit = !1,
                                clearTimeout(l.exitTimeoutId),
                                clearTimeout(l.deactivateTimeoutId)),
                                c)
                                    l.isBlocked = !1,
                                    s.trigger("mouseenter");
                                else if (a) {
                                    var u = t.extend({}, l.active);
                                    o ? function(t) {
                                        l.deactivateTimeoutId = setTimeout(function() {
                                            l.isBlocked = !1,
                                            l.trigger("deactivate", t),
                                            s.trigger("mouseenter")
                                        }, i.deactivateTimeout)
                                    }(u) : (l.isBlocked = !1,
                                    s.trigger("mouseenter"))
                                } else
                                    o ? (clearTimeout(l.exitTimeoutId),
                                    l.exitTimeoutId = setTimeout(function() {
                                        l.isBlocked = !1,
                                        l.trigger("exit")
                                    }, i.deactivateTimeout)) : (l.isExit = !0,
                                    l.isBlocked = !1,
                                    clearTimeout(l.deactivateTimeoutId),
                                    clearTimeout(l.exitTimeoutId),
                                    l.exitTimeoutId = setTimeout(function() {
                                        l.trigger("exit")
                                    }, i.exitTimeout))
                            }
                        }),
                        l.$el.on({
                            mouseenter: function(e) {
                                if (e.stopPropagation(),
                                l.isExit = !1,
                                !l.isBlocked) {
                                    var i, n = t(this), s = n.children("ul"), o = s.parentsUntil(l.$el, "li");
                                    i = {
                                        $item: n,
                                        $sub: s,
                                        $parents: o,
                                        $ul: n.parent(),
                                        level: o.length
                                    },
                                    clearTimeout(l.exitTimeoutId),
                                    clearTimeout(l.activateTimeoutId),
                                    l.activateTimeoutId = setTimeout(function() {
                                        l.isExit || (l.isBlocked = !1,
                                        l.trigger("activate", i),
                                        l.active = i)
                                    }, l.settings.activateTimeout)
                                }
                            },
                            mouseleave: function(e) {
                                if (!l.isBlocked && (s || !l.settings.firstClickOpen)) {
                                    l.triangle.a.x = e.pageX,
                                    l.triangle.a.y = e.pageY,
                                    l.isBlocked = !0;
                                    var i = t(this)
                                      , n = i.children("ul")
                                      , o = n.parentsUntil(l.$el, "li");
                                    l.active = {
                                        $item: i,
                                        $sub: n,
                                        $parents: o,
                                        $ul: i.parent(),
                                        level: o.length
                                    },
                                    clearTimeout(l.activateTimeoutId)
                                }
                            }
                        }, "li")),
                        (s || i.firstClickOpen) && (t(document).on("click", function(e) {
                            t(e.target).closest(l.$el).length || (clearTimeout(l.exitTimeoutId),
                            l.exitTimeoutId = setTimeout(function() {
                                l.isBlocked = !1,
                                l.trigger("exit")
                            }, i.deactivateTimeout))
                        }),
                        l.$el.on({
                            click: function(e) {
                                const n = t(this)
                                  , s = n.children("ul")
                                  , o = s.parentsUntil(l.$el, "li");
                                if (e.stopPropagation(),
                                s.length)
                                    if (s.is(":hidden"))
                                        e.preventDefault(),
                                        a = {
                                            $item: n,
                                            $sub: s,
                                            $parents: o,
                                            $ul: n.parent(),
                                            level: o.length
                                        },
                                        clearTimeout(l.exitTimeoutId),
                                        clearTimeout(l.activateTimeoutId),
                                        l.activateTimeoutId = setTimeout(function() {
                                            l.isBlocked = !1,
                                            l.trigger("activate", a),
                                            l.active = a
                                        }, l.settings.activateTimeout);
                                    else if (t(e.target).closest(".hor-menu__sub_icon, .ver-menu__sub_icon").length || 1 === o.length) {
                                        const t = {
                                            $item: n,
                                            $sub: s,
                                            $parents: o,
                                            $ul: n.parent(),
                                            level: o.length
                                        };
                                        clearTimeout(l.exitTimeoutId),
                                        l.exitTimeoutId = setTimeout(function() {
                                            l.isBlocked = !1,
                                            l.trigger("deactivate", t)
                                        }, i.deactivateTimeout)
                                    }
                                var a
                            }
                        }, "li")),
                        (s || i.firstClickOpen || i.cancelForward) && l.$el.on({
                            click: function(e) {
                                const n = t(this)
                                  , o = n.siblings("ul")
                                  , a = l.$ul.has(n).length
                                  , c = o.length
                                  , u = n.parents("." + l.settings.subListClassName).length;
                                i.cancelForward && (!a || l.settings.isMore && 1 === u) && c && e.preventDefault(),
                                (s || i.firstClickOpen) && (o.is(":hidden") ? e.preventDefault() : t(e.target).closest(".hor-menu__sub_icon, .ver-menu__sub_icon").length && e.preventDefault())
                            }
                        }, "a"),
                        t.s3MenuAllInTypes[i.type](l),
                        l.on("activate", n)
                    })
                }
            }
            ,
            "function" === typeof define && i(100) ? define(["jquery", "s3/misc/math/0.0.1/s3.math", "s3/misc/eventable/0.0.1/s3.eventable"], e) : e(t, s3Math)
        }
    }
});
