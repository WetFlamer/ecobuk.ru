__do__loader__([54, 62], {
    156: function(e, t, n) {
        var r, i, o, s;
        s = function(e) {
            var t = e(window).width()
              , n = e(window).height()
              , r = [];
            function i() {
                e(window).width() === t && e(window).height() === n || (e(r).each(function() {
                    e(this).flexMenu({
                        undo: !0
                    }).flexMenu(this.options)
                }),
                t = e(window).width(),
                n = e(window).height())
            }
            e(window).resize(function() {
                requestAnimationFrame(i)
            }),
            e.fn.flexMenu = function(t) {
                var n, i = e.extend({
                    threshold: 2,
                    cutoff: 0,
                    linkText: "More",
                    linkTitle: "",
                    linkTextAll: "Menu",
                    linkTitleAll: "Open/Close Menu",
                    shouldApply: function() {
                        return !0
                    },
                    showOnHover: !0,
                    popupAbsolute: !0,
                    popupClass: "",
                    undo: !1
                }, t);
                return this.options = i,
                (n = e.inArray(this, r)) >= 0 ? r.splice(n, 1) : r.push(this),
                this.each(function() {
                    var t, n, r, o, s, a, u = e(this), l = u.find("> li"), c = l.first(), f = l.last(), p = l.length;
                    function d(e) {
                        var t = Math.floor(c.offset().top)
                          , n = Math.floor(c.outerHeight());
                        return Math.ceil(e.offset().top) >= t + n
                    }
                    if (d(f) && p > i.threshold && !i.undo && u.is(":visible") && i.shouldApply()) {
                        var h = u.siblings(".hor-menu__more_list")
                          , g = h.find(".hor-menu__sub_list");
                        for (g.addClass(i.popupClass),
                        h.find(".hor-menu__more_link").off("click.preventClick").on("click.preventClick", function(e) {
                            e.preventDefault()
                        }),
                        h.show().find(".hor-menu__sub_list").hide(),
                        a = p; a > 1; a--) {
                            if (n = d(t = u.find("> li:last-child")),
                            a - 1 <= i.cutoff) {
                                e(u.children().get().reverse()).appendTo(g),
                                !0;
                                break
                            }
                            if (!n)
                                break;
                            t.appendTo(g)
                        }
                        d(r = h) && u.find("> li:nth-last-child(1)").appendTo(g),
                        g.children().each(function(t, n) {
                            var r = e(n).find(".hor-menu__link")
                              , i = e(n).find(".hor-menu__icon")
                              , o = [].slice.call(n.classList)
                              , s = [].slice.call(r.get(0).classList)
                              , a = !!i.length && [].slice.call(i.get(0).classList);
                            o && (e(n).attr("class", ""),
                            o[0] = "hor-menu__sub_item",
                            e(n).addClass(o.join(" "))),
                            s && (r.attr("class", ""),
                            s[0] = "hor-menu__sub_link",
                            r.addClass(s.join(" "))),
                            a && (i.attr("class", ""),
                            a[0] = "hor-menu__sub_icon",
                            i.addClass(a.join(" "))),
                            g.prepend(n)
                        }),
                        r.find("> li.hor-menu__more_item > a")
                    } else if (i.undo && u.siblings(".hor-menu__more_list").find("ul.hor-menu__sub_list > li")) {
                        var m = u.siblings(".hor-menu__more_list");
                        for (o = (s = m.find("> .hor-menu__more_item").length ? m.find("> .hor-menu__more_item > ul.hor-menu__sub_list") : m.find("> .hor-menu__item > ul.hor-menu__sub_list")).find("> li").length,
                        a = 1; a <= o; a++) {
                            var v = s.find("> li:first-child")
                              , y = e(v).find("> .hor-menu__sub_link")
                              , x = e(v).find("> .hor-menu__sub_link .hor-menu__sub_icon")
                              , b = [].slice.call(v.get(0).classList)
                              , w = [].slice.call(y.get(0).classList)
                              , T = !!x.length && [].slice.call(x.get(0).classList);
                            b && (e(v).attr("class", ""),
                            b[0] = "hor-menu__item",
                            e(v).addClass(b.join(" "))),
                            w && (y.attr("class", ""),
                            w[0] = "hor-menu__link",
                            y.addClass(w.join(" "))),
                            T && (x.attr("class", ""),
                            T[0] = "hor-menu__icon",
                            x.addClass(T.join(" "))),
                            v.appendTo(u)
                        }
                        u.siblings(".hor-menu__more_list").hide()
                    }
                })
            }
        }
        ,
        i = [n(97)],
        void 0 === (o = "function" === typeof (r = s) ? r.apply(t, i) : r) || (e.exports = o)
    },
    97: function(e, t, n) {
        var r;
        !function(t, n) {
            "use strict";
            "object" === typeof e && "object" === typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                return n(e)
            }
            : n(t)
        }("undefined" !== typeof window ? window : this, function(n, i) {
            "use strict";
            var o = []
              , s = n.document
              , a = Object.getPrototypeOf
              , u = o.slice
              , l = o.concat
              , c = o.push
              , f = o.indexOf
              , p = {}
              , d = p.toString
              , h = p.hasOwnProperty
              , g = h.toString
              , m = g.call(Object)
              , v = {}
              , y = function(e) {
                return "function" === typeof e && "number" !== typeof e.nodeType
            }
              , x = function(e) {
                return null != e && e === e.window
            }
              , b = {
                type: !0,
                src: !0,
                noModule: !0
            };
            function w(e, t, n) {
                var r, i = (t = t || s).createElement("script");
                if (i.text = e,
                n)
                    for (r in b)
                        n[r] && (i[r] = n[r]);
                t.head.appendChild(i).parentNode.removeChild(i)
            }
            function T(e) {
                return null == e ? e + "" : "object" === typeof e || "function" === typeof e ? p[d.call(e)] || "object" : typeof e
            }
            var C = function(e, t) {
                return new C.fn.init(e,t)
            }
              , k = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            function E(e) {
                var t = !!e && "length"in e && e.length
                  , n = T(e);
                return !y(e) && !x(e) && ("array" === n || 0 === t || "number" === typeof t && t > 0 && t - 1 in e)
            }
            C.fn = C.prototype = {
                jquery: "3.3.1",
                constructor: C,
                length: 0,
                toArray: function() {
                    return u.call(this)
                },
                get: function(e) {
                    return null == e ? u.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = C.merge(this.constructor(), e);
                    return t.prevObject = this,
                    t
                },
                each: function(e) {
                    return C.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(C.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(u.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length
                      , n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: c,
                sort: o.sort,
                splice: o.splice
            },
            C.extend = C.fn.extend = function() {
                var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
                for ("boolean" === typeof s && (l = s,
                s = arguments[a] || {},
                a++),
                "object" === typeof s || y(s) || (s = {}),
                a === u && (s = this,
                a--); a < u; a++)
                    if (null != (e = arguments[a]))
                        for (t in e)
                            n = s[t],
                            s !== (r = e[t]) && (l && r && (C.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1,
                            o = n && Array.isArray(n) ? n : []) : o = n && C.isPlainObject(n) ? n : {},
                            s[t] = C.extend(l, o, r)) : void 0 !== r && (s[t] = r));
                return s
            }
            ,
            C.extend({
                expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isPlainObject: function(e) {
                    var t, n;
                    return !(!e || "[object Object]" !== d.call(e)) && (!(t = a(e)) || "function" === typeof (n = h.call(t, "constructor") && t.constructor) && g.call(n) === m)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e)
                        return !1;
                    return !0
                },
                globalEval: function(e) {
                    w(e)
                },
                each: function(e, t) {
                    var n, r = 0;
                    if (E(e))
                        for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                            ;
                    else
                        for (r in e)
                            if (!1 === t.call(e[r], r, e[r]))
                                break;
                    return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(k, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (E(Object(e)) ? C.merge(n, "string" === typeof e ? [e] : e) : c.call(n, e)),
                    n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : f.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                        e[i++] = t[r];
                    return e.length = i,
                    e
                },
                grep: function(e, t, n) {
                    for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
                        !t(e[i], i) !== s && r.push(e[i]);
                    return r
                },
                map: function(e, t, n) {
                    var r, i, o = 0, s = [];
                    if (E(e))
                        for (r = e.length; o < r; o++)
                            null != (i = t(e[o], o, n)) && s.push(i);
                    else
                        for (o in e)
                            null != (i = t(e[o], o, n)) && s.push(i);
                    return l.apply([], s)
                },
                guid: 1,
                support: v
            }),
            "function" === typeof Symbol && (C.fn[Symbol.iterator] = o[Symbol.iterator]),
            C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                p["[object " + t + "]"] = t.toLowerCase()
            });
            var S = function(e) {
                var t, n, r, i, o, s, a, u, l, c, f, p, d, h, g, m, v, y, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, k = se(), E = se(), S = se(), A = function(e, t) {
                    return e === t && (f = !0),
                    0
                }, D = {}.hasOwnProperty, N = [], j = N.pop, L = N.push, q = N.push, _ = N.slice, H = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t)
                            return n;
                    return -1
                }, O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", R = "\\[" + P + "*(" + M + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + P + "*\\]", I = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)", W = new RegExp(P + "+","g"), $ = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$","g"), F = new RegExp("^" + P + "*," + P + "*"), B = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), z = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]","g"), X = new RegExp(I), U = new RegExp("^" + M + "$"), V = {
                    ID: new RegExp("^#(" + M + ")"),
                    CLASS: new RegExp("^\\.(" + M + ")"),
                    TAG: new RegExp("^(" + M + "|[*])"),
                    ATTR: new RegExp("^" + R),
                    PSEUDO: new RegExp("^" + I),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)","i"),
                    bool: new RegExp("^(?:" + O + ")$","i"),
                    needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)","i")
                }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)","ig"), ee = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
                    return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                }, re = function() {
                    p()
                }, ie = ye(function(e) {
                    return !0 === e.disabled && ("form"in e || "label"in e)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
                try {
                    q.apply(N = _.call(w.childNodes), w.childNodes),
                    N[w.childNodes.length].nodeType
                } catch (e) {
                    q = {
                        apply: N.length ? function(e, t) {
                            L.apply(e, _.call(t))
                        }
                        : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++]; )
                                ;
                            e.length = n - 1
                        }
                    }
                }
                function oe(e, t, r, i) {
                    var o, a, l, c, f, h, v, y = t && t.ownerDocument, T = t ? t.nodeType : 9;
                    if (r = r || [],
                    "string" !== typeof e || !e || 1 !== T && 9 !== T && 11 !== T)
                        return r;
                    if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t),
                    t = t || d,
                    g)) {
                        if (11 !== T && (f = J.exec(e)))
                            if (o = f[1]) {
                                if (9 === T) {
                                    if (!(l = t.getElementById(o)))
                                        return r;
                                    if (l.id === o)
                                        return r.push(l),
                                        r
                                } else if (y && (l = y.getElementById(o)) && x(t, l) && l.id === o)
                                    return r.push(l),
                                    r
                            } else {
                                if (f[2])
                                    return q.apply(r, t.getElementsByTagName(e)),
                                    r;
                                if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                                    return q.apply(r, t.getElementsByClassName(o)),
                                    r
                            }
                        if (n.qsa && !S[e + " "] && (!m || !m.test(e))) {
                            if (1 !== T)
                                y = t,
                                v = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b),
                                a = (h = s(e)).length; a--; )
                                    h[a] = "#" + c + " " + ve(h[a]);
                                v = h.join(","),
                                y = K.test(e) && ge(t.parentNode) || t
                            }
                            if (v)
                                try {
                                    return q.apply(r, y.querySelectorAll(v)),
                                    r
                                } catch (e) {} finally {
                                    c === b && t.removeAttribute("id")
                                }
                        }
                    }
                    return u(e.replace($, "$1"), t, r, i)
                }
                function se() {
                    var e = [];
                    return function t(n, i) {
                        return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                        t[n + " "] = i
                    }
                }
                function ae(e) {
                    return e[b] = !0,
                    e
                }
                function ue(e) {
                    var t = d.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null
                    }
                }
                function le(e, t) {
                    for (var n = e.split("|"), i = n.length; i--; )
                        r.attrHandle[n[i]] = t
                }
                function ce(e, t) {
                    var n = t && e
                      , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r)
                        return r;
                    if (n)
                        for (; n = n.nextSibling; )
                            if (n === t)
                                return -1;
                    return e ? 1 : -1
                }
                function fe(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }
                function pe(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }
                function de(e) {
                    return function(t) {
                        return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label"in t && t.disabled === e
                    }
                }
                function he(e) {
                    return ae(function(t) {
                        return t = +t,
                        ae(function(n, r) {
                            for (var i, o = e([], n.length, t), s = o.length; s--; )
                                n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }
                function ge(e) {
                    return e && "undefined" !== typeof e.getElementsByTagName && e
                }
                for (t in n = oe.support = {},
                o = oe.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }
                ,
                p = oe.setDocument = function(e) {
                    var t, i, s = e ? e.ownerDocument || e : w;
                    return s !== d && 9 === s.nodeType && s.documentElement ? (h = (d = s).documentElement,
                    g = !o(d),
                    w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)),
                    n.attributes = ue(function(e) {
                        return e.className = "i",
                        !e.getAttribute("className")
                    }),
                    n.getElementsByTagName = ue(function(e) {
                        return e.appendChild(d.createComment("")),
                        !e.getElementsByTagName("*").length
                    }),
                    n.getElementsByClassName = Q.test(d.getElementsByClassName),
                    n.getById = ue(function(e) {
                        return h.appendChild(e).id = b,
                        !d.getElementsByName || !d.getElementsByName(b).length
                    }),
                    n.getById ? (r.filter.ID = function(e) {
                        var t = e.replace(Z, ee);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }
                    ,
                    r.find.ID = function(e, t) {
                        if ("undefined" !== typeof t.getElementById && g) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }
                    ) : (r.filter.ID = function(e) {
                        var t = e.replace(Z, ee);
                        return function(e) {
                            var n = "undefined" !== typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }
                    ,
                    r.find.ID = function(e, t) {
                        if ("undefined" !== typeof t.getElementById && g) {
                            var n, r, i, o = t.getElementById(e);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === e)
                                    return [o];
                                for (i = t.getElementsByName(e),
                                r = 0; o = i[r++]; )
                                    if ((n = o.getAttributeNode("id")) && n.value === e)
                                        return [o]
                            }
                            return []
                        }
                    }
                    ),
                    r.find.TAG = n.getElementsByTagName ? function(e, t) {
                        return "undefined" !== typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                    }
                    : function(e, t) {
                        var n, r = [], i = 0, o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[i++]; )
                                1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }
                    ,
                    r.find.CLASS = n.getElementsByClassName && function(e, t) {
                        if ("undefined" !== typeof t.getElementsByClassName && g)
                            return t.getElementsByClassName(e)
                    }
                    ,
                    v = [],
                    m = [],
                    (n.qsa = Q.test(d.querySelectorAll)) && (ue(function(e) {
                        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                        e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + O + ")"),
                        e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="),
                        e.querySelectorAll(":checked").length || m.push(":checked"),
                        e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]")
                    }),
                    ue(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = d.createElement("input");
                        t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                        h.appendChild(e).disabled = !0,
                        2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        m.push(",.*:")
                    })),
                    (n.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) {
                        n.disconnectedMatch = y.call(e, "*"),
                        y.call(e, "[s!='']:x"),
                        v.push("!=", I)
                    }),
                    m = m.length && new RegExp(m.join("|")),
                    v = v.length && new RegExp(v.join("|")),
                    t = Q.test(h.compareDocumentPosition),
                    x = t || Q.test(h.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e
                          , r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    }
                    : function(e, t) {
                        if (t)
                            for (; t = t.parentNode; )
                                if (t === e)
                                    return !0;
                        return !1
                    }
                    ,
                    A = t ? function(e, t) {
                        if (e === t)
                            return f = !0,
                            0;
                        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? H(c, e) - H(c, t) : 0 : 4 & r ? -1 : 1)
                    }
                    : function(e, t) {
                        if (e === t)
                            return f = !0,
                            0;
                        var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], a = [t];
                        if (!i || !o)
                            return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? H(c, e) - H(c, t) : 0;
                        if (i === o)
                            return ce(e, t);
                        for (n = e; n = n.parentNode; )
                            s.unshift(n);
                        for (n = t; n = n.parentNode; )
                            a.unshift(n);
                        for (; s[r] === a[r]; )
                            r++;
                        return r ? ce(s[r], a[r]) : s[r] === w ? -1 : a[r] === w ? 1 : 0
                    }
                    ,
                    d) : d
                }
                ,
                oe.matches = function(e, t) {
                    return oe(e, null, null, t)
                }
                ,
                oe.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== d && p(e),
                    t = t.replace(z, "='$1']"),
                    n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t)))
                        try {
                            var r = y.call(e, t);
                            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                return r
                        } catch (e) {}
                    return oe(t, d, null, [e]).length > 0
                }
                ,
                oe.contains = function(e, t) {
                    return (e.ownerDocument || e) !== d && p(e),
                    x(e, t)
                }
                ,
                oe.attr = function(e, t) {
                    (e.ownerDocument || e) !== d && p(e);
                    var i = r.attrHandle[t.toLowerCase()]
                      , o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                    return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                }
                ,
                oe.escape = function(e) {
                    return (e + "").replace(te, ne)
                }
                ,
                oe.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }
                ,
                oe.uniqueSort = function(e) {
                    var t, r = [], i = 0, o = 0;
                    if (f = !n.detectDuplicates,
                    c = !n.sortStable && e.slice(0),
                    e.sort(A),
                    f) {
                        for (; t = e[o++]; )
                            t === e[o] && (i = r.push(o));
                        for (; i--; )
                            e.splice(r[i], 1)
                    }
                    return c = null,
                    e
                }
                ,
                i = oe.getText = function(e) {
                    var t, n = "", r = 0, o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" === typeof e.textContent)
                                return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)
                                n += i(e)
                        } else if (3 === o || 4 === o)
                            return e.nodeValue
                    } else
                        for (; t = e[r++]; )
                            n += i(t);
                    return n
                }
                ,
                (r = oe.selectors = {
                    cacheLength: 50,
                    createPseudo: ae,
                    match: V,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(Z, ee),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]),
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                            e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]),
                            e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                            e[2] = n.slice(0, t)),
                            e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(Z, ee).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            }
                            : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = k[e + " "];
                            return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && k(e, function(e) {
                                return t.test("string" === typeof e.className && e.className || "undefined" !== typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, t, n) {
                            return function(r) {
                                var i = oe.attr(r, e);
                                return null == i ? "!=" === t : !t || (i += "",
                                "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function(e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3)
                              , s = "last" !== e.slice(-4)
                              , a = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode
                            }
                            : function(t, n, u) {
                                var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !u && !a, x = !1;
                                if (m) {
                                    if (o) {
                                        for (; g; ) {
                                            for (p = t; p = p[g]; )
                                                if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                                    return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [s ? m.firstChild : m.lastChild],
                                    s && y) {
                                        for (x = (d = (l = (c = (f = (p = m)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2],
                                        p = d && m.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop(); )
                                            if (1 === p.nodeType && ++x && p === t) {
                                                c[e] = [T, d, x];
                                                break
                                            }
                                    } else if (y && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]),
                                    !1 === x)
                                        for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++x || (y && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]),
                                        p !== t)); )
                                            ;
                                    return (x -= i) === r || x % r === 0 && x / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                            return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t],
                            r.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, n) {
                                for (var r, o = i(e, t), s = o.length; s--; )
                                    e[r = H(e, o[s])] = !(n[r] = o[s])
                            }) : function(e) {
                                return i(e, 0, n)
                            }
                            ) : i
                        }
                    },
                    pseudos: {
                        not: ae(function(e) {
                            var t = []
                              , n = []
                              , r = a(e.replace($, "$1"));
                            return r[b] ? ae(function(e, t, n, i) {
                                for (var o, s = r(e, null, i, []), a = e.length; a--; )
                                    (o = s[a]) && (e[a] = !(t[a] = o))
                            }) : function(e, i, o) {
                                return t[0] = e,
                                r(t, null, o, n),
                                t[0] = null,
                                !n.pop()
                            }
                        }),
                        has: ae(function(e) {
                            return function(t) {
                                return oe(e, t).length > 0
                            }
                        }),
                        contains: ae(function(e) {
                            return e = e.replace(Z, ee),
                            function(t) {
                                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                            }
                        }),
                        lang: ae(function(e) {
                            return U.test(e || "") || oe.error("unsupported lang: " + e),
                            e = e.replace(Z, ee).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                        return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === h
                        },
                        focus: function(e) {
                            return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: de(!1),
                        disabled: de(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex,
                            !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6)
                                    return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !r.pseudos.empty(e)
                        },
                        header: function(e) {
                            return Y.test(e.nodeName)
                        },
                        input: function(e) {
                            return G.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: he(function() {
                            return [0]
                        }),
                        last: he(function(e, t) {
                            return [t - 1]
                        }),
                        eq: he(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: he(function(e, t) {
                            for (var n = 0; n < t; n += 2)
                                e.push(n);
                            return e
                        }),
                        odd: he(function(e, t) {
                            for (var n = 1; n < t; n += 2)
                                e.push(n);
                            return e
                        }),
                        lt: he(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; --r >= 0; )
                                e.push(r);
                            return e
                        }),
                        gt: he(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t; )
                                e.push(r);
                            return e
                        })
                    }
                }).pseudos.nth = r.pseudos.eq,
                {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                })
                    r.pseudos[t] = fe(t);
                for (t in {
                    submit: !0,
                    reset: !0
                })
                    r.pseudos[t] = pe(t);
                function me() {}
                function ve(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++)
                        r += e[t].value;
                    return r
                }
                function ye(e, t, n) {
                    var r = t.dir
                      , i = t.next
                      , o = i || r
                      , s = n && "parentNode" === o
                      , a = C++;
                    return t.first ? function(t, n, i) {
                        for (; t = t[r]; )
                            if (1 === t.nodeType || s)
                                return e(t, n, i);
                        return !1
                    }
                    : function(t, n, u) {
                        var l, c, f, p = [T, a];
                        if (u) {
                            for (; t = t[r]; )
                                if ((1 === t.nodeType || s) && e(t, n, u))
                                    return !0
                        } else
                            for (; t = t[r]; )
                                if (1 === t.nodeType || s)
                                    if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}),
                                    i && i === t.nodeName.toLowerCase())
                                        t = t[r] || t;
                                    else {
                                        if ((l = c[o]) && l[0] === T && l[1] === a)
                                            return p[2] = l[2];
                                        if (c[o] = p,
                                        p[2] = e(t, n, u))
                                            return !0
                                    }
                        return !1
                    }
                }
                function xe(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var i = e.length; i--; )
                            if (!e[i](t, n, r))
                                return !1;
                        return !0
                    }
                    : e[0]
                }
                function be(e, t, n, r, i) {
                    for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)
                        (o = e[a]) && (n && !n(o, r, i) || (s.push(o),
                        l && t.push(a)));
                    return s
                }
                function we(e, t, n, r, i, o) {
                    return r && !r[b] && (r = we(r)),
                    i && !i[b] && (i = we(i, o)),
                    ae(function(o, s, a, u) {
                        var l, c, f, p = [], d = [], h = s.length, g = o || function(e, t, n) {
                            for (var r = 0, i = t.length; r < i; r++)
                                oe(e, t[r], n);
                            return n
                        }(t || "*", a.nodeType ? [a] : a, []), m = !e || !o && t ? g : be(g, p, e, a, u), v = n ? i || (o ? e : h || r) ? [] : s : m;
                        if (n && n(m, v, a, u),
                        r)
                            for (l = be(v, d),
                            r(l, [], a, u),
                            c = l.length; c--; )
                                (f = l[c]) && (v[d[c]] = !(m[d[c]] = f));
                        if (o) {
                            if (i || e) {
                                if (i) {
                                    for (l = [],
                                    c = v.length; c--; )
                                        (f = v[c]) && l.push(m[c] = f);
                                    i(null, v = [], l, u)
                                }
                                for (c = v.length; c--; )
                                    (f = v[c]) && (l = i ? H(o, f) : p[c]) > -1 && (o[l] = !(s[l] = f))
                            }
                        } else
                            v = be(v === s ? v.splice(h, v.length) : v),
                            i ? i(null, s, v, u) : q.apply(s, v)
                    })
                }
                function Te(e) {
                    for (var t, n, i, o = e.length, s = r.relative[e[0].type], a = s || r.relative[" "], u = s ? 1 : 0, c = ye(function(e) {
                        return e === t
                    }, a, !0), f = ye(function(e) {
                        return H(t, e) > -1
                    }, a, !0), p = [function(e, n, r) {
                        var i = !s && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                        return t = null,
                        i
                    }
                    ]; u < o; u++)
                        if (n = r.relative[e[u].type])
                            p = [ye(xe(p), n)];
                        else {
                            if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                                for (i = ++u; i < o && !r.relative[e[i].type]; i++)
                                    ;
                                return we(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
                                    value: " " === e[u - 2].type ? "*" : ""
                                })).replace($, "$1"), n, u < i && Te(e.slice(u, i)), i < o && Te(e = e.slice(i)), i < o && ve(e))
                            }
                            p.push(n)
                        }
                    return xe(p)
                }
                return me.prototype = r.filters = r.pseudos,
                r.setFilters = new me,
                s = oe.tokenize = function(e, t) {
                    var n, i, o, s, a, u, l, c = E[e + " "];
                    if (c)
                        return t ? 0 : c.slice(0);
                    for (a = e,
                    u = [],
                    l = r.preFilter; a; ) {
                        for (s in n && !(i = F.exec(a)) || (i && (a = a.slice(i[0].length) || a),
                        u.push(o = [])),
                        n = !1,
                        (i = B.exec(a)) && (n = i.shift(),
                        o.push({
                            value: n,
                            type: i[0].replace($, " ")
                        }),
                        a = a.slice(n.length)),
                        r.filter)
                            !(i = V[s].exec(a)) || l[s] && !(i = l[s](i)) || (n = i.shift(),
                            o.push({
                                value: n,
                                type: s,
                                matches: i
                            }),
                            a = a.slice(n.length));
                        if (!n)
                            break
                    }
                    return t ? a.length : a ? oe.error(e) : E(e, u).slice(0)
                }
                ,
                a = oe.compile = function(e, t) {
                    var n, i = [], o = [], a = S[e + " "];
                    if (!a) {
                        for (t || (t = s(e)),
                        n = t.length; n--; )
                            (a = Te(t[n]))[b] ? i.push(a) : o.push(a);
                        (a = S(e, function(e, t) {
                            var n = t.length > 0
                              , i = e.length > 0
                              , o = function(o, s, a, u, c) {
                                var f, h, m, v = 0, y = "0", x = o && [], b = [], w = l, C = o || i && r.find.TAG("*", c), k = T += null == w ? 1 : Math.random() || .1, E = C.length;
                                for (c && (l = s === d || s || c); y !== E && null != (f = C[y]); y++) {
                                    if (i && f) {
                                        for (h = 0,
                                        s || f.ownerDocument === d || (p(f),
                                        a = !g); m = e[h++]; )
                                            if (m(f, s || d, a)) {
                                                u.push(f);
                                                break
                                            }
                                        c && (T = k)
                                    }
                                    n && ((f = !m && f) && v--,
                                    o && x.push(f))
                                }
                                if (v += y,
                                n && y !== v) {
                                    for (h = 0; m = t[h++]; )
                                        m(x, b, s, a);
                                    if (o) {
                                        if (v > 0)
                                            for (; y--; )
                                                x[y] || b[y] || (b[y] = j.call(u));
                                        b = be(b)
                                    }
                                    q.apply(u, b),
                                    c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
                                }
                                return c && (T = k,
                                l = w),
                                x
                            };
                            return n ? ae(o) : o
                        }(o, i))).selector = e
                    }
                    return a
                }
                ,
                u = oe.select = function(e, t, n, i) {
                    var o, u, l, c, f, p = "function" === typeof e && e, d = !i && s(e = p.selector || e);
                    if (n = n || [],
                    1 === d.length) {
                        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                            if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0]))
                                return n;
                            p && (t = t.parentNode),
                            e = e.slice(u.shift().value.length)
                        }
                        for (o = V.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o],
                        !r.relative[c = l.type]); )
                            if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                                if (u.splice(o, 1),
                                !(e = i.length && ve(u)))
                                    return q.apply(n, i),
                                    n;
                                break
                            }
                    }
                    return (p || a(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t),
                    n
                }
                ,
                n.sortStable = b.split("").sort(A).join("") === b,
                n.detectDuplicates = !!f,
                p(),
                n.sortDetached = ue(function(e) {
                    return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
                }),
                ue(function(e) {
                    return e.innerHTML = "<a href='#'></a>",
                    "#" === e.firstChild.getAttribute("href")
                }) || le("type|href|height|width", function(e, t, n) {
                    if (!n)
                        return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }),
                n.attributes && ue(function(e) {
                    return e.innerHTML = "<input/>",
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                }) || le("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())
                        return e.defaultValue
                }),
                ue(function(e) {
                    return null == e.getAttribute("disabled")
                }) || le(O, function(e, t, n) {
                    var r;
                    if (!n)
                        return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }),
                oe
            }(n);
            C.find = S,
            C.expr = S.selectors,
            C.expr[":"] = C.expr.pseudos,
            C.uniqueSort = C.unique = S.uniqueSort,
            C.text = S.getText,
            C.isXMLDoc = S.isXML,
            C.contains = S.contains,
            C.escapeSelector = S.escape;
            var A = function(e, t, n) {
                for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                    if (1 === e.nodeType) {
                        if (i && C(e).is(n))
                            break;
                        r.push(e)
                    }
                return r
            }
              , D = function(e, t) {
                for (var n = []; e; e = e.nextSibling)
                    1 === e.nodeType && e !== t && n.push(e);
                return n
            }
              , N = C.expr.match.needsContext;
            function j(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function q(e, t, n) {
                return y(t) ? C.grep(e, function(e, r) {
                    return !!t.call(e, r, e) !== n
                }) : t.nodeType ? C.grep(e, function(e) {
                    return e === t !== n
                }) : "string" !== typeof t ? C.grep(e, function(e) {
                    return f.call(t, e) > -1 !== n
                }) : C.filter(t, e, n)
            }
            C.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }
            ,
            C.fn.extend({
                find: function(e) {
                    var t, n, r = this.length, i = this;
                    if ("string" !== typeof e)
                        return this.pushStack(C(e).filter(function() {
                            for (t = 0; t < r; t++)
                                if (C.contains(i[t], this))
                                    return !0
                        }));
                    for (n = this.pushStack([]),
                    t = 0; t < r; t++)
                        C.find(e, i[t], n);
                    return r > 1 ? C.uniqueSort(n) : n
                },
                filter: function(e) {
                    return this.pushStack(q(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(q(this, e || [], !0))
                },
                is: function(e) {
                    return !!q(this, "string" === typeof e && N.test(e) ? C(e) : e || [], !1).length
                }
            });
            var _, H = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (C.fn.init = function(e, t, n) {
                var r, i;
                if (!e)
                    return this;
                if (n = n || _,
                "string" === typeof e) {
                    if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : H.exec(e)) || !r[1] && t)
                        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof C ? t[0] : t,
                        C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : s, !0)),
                        L.test(r[1]) && C.isPlainObject(t))
                            for (r in t)
                                y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return (i = s.getElementById(r[2])) && (this[0] = i,
                    this.length = 1),
                    this
                }
                return e.nodeType ? (this[0] = e,
                this.length = 1,
                this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
            }
            ).prototype = C.fn,
            _ = C(s);
            var O = /^(?:parents|prev(?:Until|All))/
              , P = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            function M(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType; )
                    ;
                return e
            }
            C.fn.extend({
                has: function(e) {
                    var t = C(e, this)
                      , n = t.length;
                    return this.filter(function() {
                        for (var e = 0; e < n; e++)
                            if (C.contains(this, t[e]))
                                return !0
                    })
                },
                closest: function(e, t) {
                    var n, r = 0, i = this.length, o = [], s = "string" !== typeof e && C(e);
                    if (!N.test(e))
                        for (; r < i; r++)
                            for (n = this[r]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                                    o.push(n);
                                    break
                                }
                    return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o)
                },
                index: function(e) {
                    return e ? "string" === typeof e ? f.call(C(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }),
            C.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return A(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return A(e, "parentNode", n)
                },
                next: function(e) {
                    return M(e, "nextSibling")
                },
                prev: function(e) {
                    return M(e, "previousSibling")
                },
                nextAll: function(e) {
                    return A(e, "nextSibling")
                },
                prevAll: function(e) {
                    return A(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return A(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return A(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return D((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return D(e.firstChild)
                },
                contents: function(e) {
                    return j(e, "iframe") ? e.contentDocument : (j(e, "template") && (e = e.content || e),
                    C.merge([], e.childNodes))
                }
            }, function(e, t) {
                C.fn[e] = function(n, r) {
                    var i = C.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n),
                    r && "string" === typeof r && (i = C.filter(r, i)),
                    this.length > 1 && (P[e] || C.uniqueSort(i),
                    O.test(e) && i.reverse()),
                    this.pushStack(i)
                }
            });
            var R = /[^\x20\t\r\n\f]+/g;
            function I(e) {
                return e
            }
            function W(e) {
                throw e
            }
            function $(e, t, n, r) {
                var i;
                try {
                    e && y(i = e.promise) ? i.call(e).done(t).fail(n) : e && y(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }
            C.Callbacks = function(e) {
                e = "string" === typeof e ? function(e) {
                    var t = {};
                    return C.each(e.match(R) || [], function(e, n) {
                        t[n] = !0
                    }),
                    t
                }(e) : C.extend({}, e);
                var t, n, r, i, o = [], s = [], a = -1, u = function() {
                    for (i = i || e.once,
                    r = t = !0; s.length; a = -1)
                        for (n = s.shift(); ++a < o.length; )
                            !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length,
                            n = !1);
                    e.memory || (n = !1),
                    t = !1,
                    i && (o = n ? [] : "")
                }, l = {
                    add: function() {
                        return o && (n && !t && (a = o.length - 1,
                        s.push(n)),
                        function t(n) {
                            C.each(n, function(n, r) {
                                y(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== T(r) && t(r)
                            })
                        }(arguments),
                        n && !t && u()),
                        this
                    },
                    remove: function() {
                        return C.each(arguments, function(e, t) {
                            for (var n; (n = C.inArray(t, o, n)) > -1; )
                                o.splice(n, 1),
                                n <= a && a--
                        }),
                        this
                    },
                    has: function(e) {
                        return e ? C.inArray(e, o) > -1 : o.length > 0
                    },
                    empty: function() {
                        return o && (o = []),
                        this
                    },
                    disable: function() {
                        return i = s = [],
                        o = n = "",
                        this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return i = s = [],
                        n || t || (o = n = ""),
                        this
                    },
                    locked: function() {
                        return !!i
                    },
                    fireWith: function(e, n) {
                        return i || (n = [e, (n = n || []).slice ? n.slice() : n],
                        s.push(n),
                        t || u()),
                        this
                    },
                    fire: function() {
                        return l.fireWith(this, arguments),
                        this
                    },
                    fired: function() {
                        return !!r
                    }
                };
                return l
            }
            ,
            C.extend({
                Deferred: function(e) {
                    var t = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]]
                      , r = "pending"
                      , i = {
                        state: function() {
                            return r
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments),
                            this
                        },
                        catch: function(e) {
                            return i.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return C.Deferred(function(n) {
                                C.each(t, function(t, r) {
                                    var i = y(e[r[4]]) && e[r[4]];
                                    o[r[1]](function() {
                                        var e = i && i.apply(this, arguments);
                                        e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                    })
                                }),
                                e = null
                            }).promise()
                        },
                        then: function(e, r, i) {
                            var o = 0;
                            function s(e, t, r, i) {
                                return function() {
                                    var a = this
                                      , u = arguments
                                      , l = function() {
                                        var n, l;
                                        if (!(e < o)) {
                                            if ((n = r.apply(a, u)) === t.promise())
                                                throw new TypeError("Thenable self-resolution");
                                            l = n && ("object" === typeof n || "function" === typeof n) && n.then,
                                            y(l) ? i ? l.call(n, s(o, t, I, i), s(o, t, W, i)) : (o++,
                                            l.call(n, s(o, t, I, i), s(o, t, W, i), s(o, t, I, t.notifyWith))) : (r !== I && (a = void 0,
                                            u = [n]),
                                            (i || t.resolveWith)(a, u))
                                        }
                                    }
                                      , c = i ? l : function() {
                                        try {
                                            l()
                                        } catch (n) {
                                            C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, c.stackTrace),
                                            e + 1 >= o && (r !== W && (a = void 0,
                                            u = [n]),
                                            t.rejectWith(a, u))
                                        }
                                    }
                                    ;
                                    e ? c() : (C.Deferred.getStackHook && (c.stackTrace = C.Deferred.getStackHook()),
                                    n.setTimeout(c))
                                }
                            }
                            return C.Deferred(function(n) {
                                t[0][3].add(s(0, n, y(i) ? i : I, n.notifyWith)),
                                t[1][3].add(s(0, n, y(e) ? e : I)),
                                t[2][3].add(s(0, n, y(r) ? r : W))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? C.extend(e, i) : i
                        }
                    }
                      , o = {};
                    return C.each(t, function(e, n) {
                        var s = n[2]
                          , a = n[5];
                        i[n[1]] = s.add,
                        a && s.add(function() {
                            r = a
                        }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock),
                        s.add(n[3].fire),
                        o[n[0]] = function() {
                            return o[n[0] + "With"](this === o ? void 0 : this, arguments),
                            this
                        }
                        ,
                        o[n[0] + "With"] = s.fireWith
                    }),
                    i.promise(o),
                    e && e.call(o, o),
                    o
                },
                when: function(e) {
                    var t = arguments.length
                      , n = t
                      , r = Array(n)
                      , i = u.call(arguments)
                      , o = C.Deferred()
                      , s = function(e) {
                        return function(n) {
                            r[e] = this,
                            i[e] = arguments.length > 1 ? u.call(arguments) : n,
                            --t || o.resolveWith(r, i)
                        }
                    };
                    if (t <= 1 && ($(e, o.done(s(n)).resolve, o.reject, !t),
                    "pending" === o.state() || y(i[n] && i[n].then)))
                        return o.then();
                    for (; n--; )
                        $(i[n], s(n), o.reject);
                    return o.promise()
                }
            });
            var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            C.Deferred.exceptionHook = function(e, t) {
                n.console && n.console.warn && e && F.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }
            ,
            C.readyException = function(e) {
                n.setTimeout(function() {
                    throw e
                })
            }
            ;
            var B = C.Deferred();
            function z() {
                s.removeEventListener("DOMContentLoaded", z),
                n.removeEventListener("load", z),
                C.ready()
            }
            C.fn.ready = function(e) {
                return B.then(e).catch(function(e) {
                    C.readyException(e)
                }),
                this
            }
            ,
            C.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0,
                    !0 !== e && --C.readyWait > 0 || B.resolveWith(s, [C]))
                }
            }),
            C.ready.then = B.then,
            "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? n.setTimeout(C.ready) : (s.addEventListener("DOMContentLoaded", z),
            n.addEventListener("load", z));
            var X = function(e, t, n, r, i, o, s) {
                var a = 0
                  , u = e.length
                  , l = null == n;
                if ("object" === T(n))
                    for (a in i = !0,
                    n)
                        X(e, t, a, n[a], !0, o, s);
                else if (void 0 !== r && (i = !0,
                y(r) || (s = !0),
                l && (s ? (t.call(e, r),
                t = null) : (l = t,
                t = function(e, t, n) {
                    return l.call(C(e), n)
                }
                )),
                t))
                    for (; a < u; a++)
                        t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
                return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
            }
              , U = /^-ms-/
              , V = /-([a-z])/g;
            function G(e, t) {
                return t.toUpperCase()
            }
            function Y(e) {
                return e.replace(U, "ms-").replace(V, G)
            }
            var Q = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
            function J() {
                this.expando = C.expando + J.uid++
            }
            J.uid = 1,
            J.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {},
                    Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))),
                    t
                },
                set: function(e, t, n) {
                    var r, i = this.cache(e);
                    if ("string" === typeof t)
                        i[Y(t)] = n;
                    else
                        for (r in t)
                            i[Y(r)] = t[r];
                    return i
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)]
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" === typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                    void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t))in r ? [t] : t.match(R) || []).length;
                            for (; n--; )
                                delete r[t[n]]
                        }
                        (void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !C.isEmptyObject(t)
                }
            };
            var K = new J
              , Z = new J
              , ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
              , te = /[A-Z]/g;
            function ne(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(te, "-$&").toLowerCase(),
                    "string" === typeof (n = e.getAttribute(r))) {
                        try {
                            n = function(e) {
                                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                            }(n)
                        } catch (e) {}
                        Z.set(e, t, n)
                    } else
                        n = void 0;
                return n
            }
            C.extend({
                hasData: function(e) {
                    return Z.hasData(e) || K.hasData(e)
                },
                data: function(e, t, n) {
                    return Z.access(e, t, n)
                },
                removeData: function(e, t) {
                    Z.remove(e, t)
                },
                _data: function(e, t, n) {
                    return K.access(e, t, n)
                },
                _removeData: function(e, t) {
                    K.remove(e, t)
                }
            }),
            C.fn.extend({
                data: function(e, t) {
                    var n, r, i, o = this[0], s = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (i = Z.get(o),
                        1 === o.nodeType && !K.get(o, "hasDataAttrs"))) {
                            for (n = s.length; n--; )
                                s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = Y(r.slice(5)),
                                ne(o, r, i[r]));
                            K.set(o, "hasDataAttrs", !0)
                        }
                        return i
                    }
                    return "object" === typeof e ? this.each(function() {
                        Z.set(this, e)
                    }) : X(this, function(t) {
                        var n;
                        if (o && void 0 === t)
                            return void 0 !== (n = Z.get(o, e)) ? n : void 0 !== (n = ne(o, e)) ? n : void 0;
                        this.each(function() {
                            Z.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        Z.remove(this, e)
                    })
                }
            }),
            C.extend({
                queue: function(e, t, n) {
                    var r;
                    if (e)
                        return t = (t || "fx") + "queue",
                        r = K.get(e, t),
                        n && (!r || Array.isArray(n) ? r = K.access(e, t, C.makeArray(n)) : r.push(n)),
                        r || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = C.queue(e, t)
                      , r = n.length
                      , i = n.shift()
                      , o = C._queueHooks(e, t);
                    "inprogress" === i && (i = n.shift(),
                    r--),
                    i && ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(e, function() {
                        C.dequeue(e, t)
                    }, o)),
                    !r && o && o.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return K.get(e, n) || K.access(e, n, {
                        empty: C.Callbacks("once memory").add(function() {
                            K.remove(e, [t + "queue", n])
                        })
                    })
                }
            }),
            C.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" !== typeof e && (t = e,
                    e = "fx",
                    n--),
                    arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = C.queue(this, e, t);
                        C._queueHooks(this, e),
                        "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        C.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, r = 1, i = C.Deferred(), o = this, s = this.length, a = function() {
                        --r || i.resolveWith(o, [o])
                    };
                    for ("string" !== typeof e && (t = e,
                    e = void 0),
                    e = e || "fx"; s--; )
                        (n = K.get(o[s], e + "queueHooks")) && n.empty && (r++,
                        n.empty.add(a));
                    return a(),
                    i.promise(t)
                }
            });
            var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
              , ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$","i")
              , oe = ["Top", "Right", "Bottom", "Left"]
              , se = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && C.contains(e.ownerDocument, e) && "none" === C.css(e, "display")
            }
              , ae = function(e, t, n, r) {
                var i, o, s = {};
                for (o in t)
                    s[o] = e.style[o],
                    e.style[o] = t[o];
                for (o in i = n.apply(e, r || []),
                t)
                    e.style[o] = s[o];
                return i
            };
            function ue(e, t, n, r) {
                var i, o, s = 20, a = r ? function() {
                    return r.cur()
                }
                : function() {
                    return C.css(e, t, "")
                }
                , u = a(), l = n && n[3] || (C.cssNumber[t] ? "" : "px"), c = (C.cssNumber[t] || "px" !== l && +u) && ie.exec(C.css(e, t));
                if (c && c[3] !== l) {
                    for (u /= 2,
                    l = l || c[3],
                    c = +u || 1; s--; )
                        C.style(e, t, c + l),
                        (1 - o) * (1 - (o = a() / u || .5)) <= 0 && (s = 0),
                        c /= o;
                    c *= 2,
                    C.style(e, t, c + l),
                    n = n || []
                }
                return n && (c = +c || +u || 0,
                i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
                r && (r.unit = l,
                r.start = c,
                r.end = i)),
                i
            }
            var le = {};
            function ce(e) {
                var t, n = e.ownerDocument, r = e.nodeName, i = le[r];
                return i || (t = n.body.appendChild(n.createElement(r)),
                i = C.css(t, "display"),
                t.parentNode.removeChild(t),
                "none" === i && (i = "block"),
                le[r] = i,
                i)
            }
            function fe(e, t) {
                for (var n, r, i = [], o = 0, s = e.length; o < s; o++)
                    (r = e[o]).style && (n = r.style.display,
                    t ? ("none" === n && (i[o] = K.get(r, "display") || null,
                    i[o] || (r.style.display = "")),
                    "" === r.style.display && se(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none",
                    K.set(r, "display", n)));
                for (o = 0; o < s; o++)
                    null != i[o] && (e[o].style.display = i[o]);
                return e
            }
            C.fn.extend({
                show: function() {
                    return fe(this, !0)
                },
                hide: function() {
                    return fe(this)
                },
                toggle: function(e) {
                    return "boolean" === typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        se(this) ? C(this).show() : C(this).hide()
                    })
                }
            });
            var pe = /^(?:checkbox|radio)$/i
              , de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
              , he = /^$|^module$|\/(?:java|ecma)script/i
              , ge = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            function me(e, t) {
                var n;
                return n = "undefined" !== typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" !== typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
                void 0 === t || t && j(e, t) ? C.merge([e], n) : n
            }
            function ve(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
            }
            ge.optgroup = ge.option,
            ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
            ge.th = ge.td;
            var ye, xe, be = /<|&#?\w+;/;
            function we(e, t, n, r, i) {
                for (var o, s, a, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                    if ((o = e[d]) || 0 === o)
                        if ("object" === T(o))
                            C.merge(p, o.nodeType ? [o] : o);
                        else if (be.test(o)) {
                            for (s = s || f.appendChild(t.createElement("div")),
                            a = (de.exec(o) || ["", ""])[1].toLowerCase(),
                            u = ge[a] || ge._default,
                            s.innerHTML = u[1] + C.htmlPrefilter(o) + u[2],
                            c = u[0]; c--; )
                                s = s.lastChild;
                            C.merge(p, s.childNodes),
                            (s = f.firstChild).textContent = ""
                        } else
                            p.push(t.createTextNode(o));
                for (f.textContent = "",
                d = 0; o = p[d++]; )
                    if (r && C.inArray(o, r) > -1)
                        i && i.push(o);
                    else if (l = C.contains(o.ownerDocument, o),
                    s = me(f.appendChild(o), "script"),
                    l && ve(s),
                    n)
                        for (c = 0; o = s[c++]; )
                            he.test(o.type || "") && n.push(o);
                return f
            }
            ye = s.createDocumentFragment().appendChild(s.createElement("div")),
            (xe = s.createElement("input")).setAttribute("type", "radio"),
            xe.setAttribute("checked", "checked"),
            xe.setAttribute("name", "t"),
            ye.appendChild(xe),
            v.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked,
            ye.innerHTML = "<textarea>x</textarea>",
            v.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
            var Te = s.documentElement
              , Ce = /^key/
              , ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
              , Ee = /^([^.]*)(?:\.(.+)|)/;
            function Se() {
                return !0
            }
            function Ae() {
                return !1
            }
            function De() {
                try {
                    return s.activeElement
                } catch (e) {}
            }
            function Ne(e, t, n, r, i, o) {
                var s, a;
                if ("object" === typeof t) {
                    for (a in "string" !== typeof n && (r = r || n,
                    n = void 0),
                    t)
                        Ne(e, a, n, r, t[a], o);
                    return e
                }
                if (null == r && null == i ? (i = n,
                r = n = void 0) : null == i && ("string" === typeof n ? (i = r,
                r = void 0) : (i = r,
                r = n,
                n = void 0)),
                !1 === i)
                    i = Ae;
                else if (!i)
                    return e;
                return 1 === o && (s = i,
                (i = function(e) {
                    return C().off(e),
                    s.apply(this, arguments)
                }
                ).guid = s.guid || (s.guid = C.guid++)),
                e.each(function() {
                    C.event.add(this, t, i, r, n)
                })
            }
            C.event = {
                global: {},
                add: function(e, t, n, r, i) {
                    var o, s, a, u, l, c, f, p, d, h, g, m = K.get(e);
                    if (m)
                        for (n.handler && (n = (o = n).handler,
                        i = o.selector),
                        i && C.find.matchesSelector(Te, i),
                        n.guid || (n.guid = C.guid++),
                        (u = m.events) || (u = m.events = {}),
                        (s = m.handle) || (s = m.handle = function(t) {
                            return "undefined" !== typeof C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
                        }
                        ),
                        l = (t = (t || "").match(R) || [""]).length; l--; )
                            d = g = (a = Ee.exec(t[l]) || [])[1],
                            h = (a[2] || "").split(".").sort(),
                            d && (f = C.event.special[d] || {},
                            d = (i ? f.delegateType : f.bindType) || d,
                            f = C.event.special[d] || {},
                            c = C.extend({
                                type: d,
                                origType: g,
                                data: r,
                                handler: n,
                                guid: n.guid,
                                selector: i,
                                needsContext: i && C.expr.match.needsContext.test(i),
                                namespace: h.join(".")
                            }, o),
                            (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                            f.setup && !1 !== f.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(d, s)),
                            f.add && (f.add.call(e, c),
                            c.handler.guid || (c.handler.guid = n.guid)),
                            i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                            C.event.global[d] = !0)
                },
                remove: function(e, t, n, r, i) {
                    var o, s, a, u, l, c, f, p, d, h, g, m = K.hasData(e) && K.get(e);
                    if (m && (u = m.events)) {
                        for (l = (t = (t || "").match(R) || [""]).length; l--; )
                            if (d = g = (a = Ee.exec(t[l]) || [])[1],
                            h = (a[2] || "").split(".").sort(),
                            d) {
                                for (f = C.event.special[d] || {},
                                p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                                a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                s = o = p.length; o--; )
                                    c = p[o],
                                    !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                                    c.selector && p.delegateCount--,
                                    f.remove && f.remove.call(e, c));
                                s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || C.removeEvent(e, d, m.handle),
                                delete u[d])
                            } else
                                for (d in u)
                                    C.event.remove(e, d + t[l], n, r, !0);
                        C.isEmptyObject(u) && K.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, n, r, i, o, s, a = C.event.fix(e), u = new Array(arguments.length), l = (K.get(this, "events") || {})[a.type] || [], c = C.event.special[a.type] || {};
                    for (u[0] = a,
                    t = 1; t < arguments.length; t++)
                        u[t] = arguments[t];
                    if (a.delegateTarget = this,
                    !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                        for (s = C.event.handlers.call(this, a, l),
                        t = 0; (i = s[t++]) && !a.isPropagationStopped(); )
                            for (a.currentTarget = i.elem,
                            n = 0; (o = i.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                                a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o,
                                a.data = o.data,
                                void 0 !== (r = ((C.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (a.result = r) && (a.preventDefault(),
                                a.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, a),
                        a.result
                    }
                },
                handlers: function(e, t) {
                    var n, r, i, o, s, a = [], u = t.delegateCount, l = e.target;
                    if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                        for (; l !== this; l = l.parentNode || this)
                            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                for (o = [],
                                s = {},
                                n = 0; n < u; n++)
                                    void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? C(i, this).index(l) > -1 : C.find(i, this, null, [l]).length),
                                    s[i] && o.push(r);
                                o.length && a.push({
                                    elem: l,
                                    handlers: o
                                })
                            }
                    return l = this,
                    u < t.length && a.push({
                        elem: l,
                        handlers: t.slice(u)
                    }),
                    a
                },
                addProp: function(e, t) {
                    Object.defineProperty(C.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: y(t) ? function() {
                            if (this.originalEvent)
                                return t(this.originalEvent)
                        }
                        : function() {
                            if (this.originalEvent)
                                return this.originalEvent[e]
                        }
                        ,
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[C.expando] ? e : new C.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== De() && this.focus)
                                return this.focus(),
                                !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === De() && this.blur)
                                return this.blur(),
                                !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if ("checkbox" === this.type && this.click && j(this, "input"))
                                return this.click(),
                                !1
                        },
                        _default: function(e) {
                            return j(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            },
            C.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }
            ,
            C.Event = function(e, t) {
                if (!(this instanceof C.Event))
                    return new C.Event(e,t);
                e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : Ae,
                this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                this.currentTarget = e.currentTarget,
                this.relatedTarget = e.relatedTarget) : this.type = e,
                t && C.extend(this, t),
                this.timeStamp = e && e.timeStamp || Date.now(),
                this[C.expando] = !0
            }
            ,
            C.Event.prototype = {
                constructor: C.Event,
                isDefaultPrevented: Ae,
                isPropagationStopped: Ae,
                isImmediatePropagationStopped: Ae,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = Se,
                    e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = Se,
                    e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = Se,
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation()
                }
            },
            C.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(e) {
                    var t = e.button;
                    return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, C.event.addProp),
            C.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                C.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = e.relatedTarget, i = e.handleObj;
                        return r && (r === this || C.contains(this, r)) || (e.type = i.origType,
                        n = i.handler.apply(this, arguments),
                        e.type = t),
                        n
                    }
                }
            }),
            C.fn.extend({
                on: function(e, t, n, r) {
                    return Ne(this, e, t, n, r)
                },
                one: function(e, t, n, r) {
                    return Ne(this, e, t, n, r, 1)
                },
                off: function(e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj)
                        return r = e.handleObj,
                        C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                        this;
                    if ("object" === typeof e) {
                        for (i in e)
                            this.off(i, t, e[i]);
                        return this
                    }
                    return !1 !== t && "function" !== typeof t || (n = t,
                    t = void 0),
                    !1 === n && (n = Ae),
                    this.each(function() {
                        C.event.remove(this, e, n, t)
                    })
                }
            });
            var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
              , Le = /<script|<style|<link/i
              , qe = /checked\s*(?:[^=]|=\s*.checked.)/i
              , _e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function He(e, t) {
                return j(e, "table") && j(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
            }
            function Oe(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                e
            }
            function Pe(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
                e
            }
            function Me(e, t) {
                var n, r, i, o, s, a, u, l;
                if (1 === t.nodeType) {
                    if (K.hasData(e) && (o = K.access(e),
                    s = K.set(t, o),
                    l = o.events))
                        for (i in delete s.handle,
                        s.events = {},
                        l)
                            for (n = 0,
                            r = l[i].length; n < r; n++)
                                C.event.add(t, i, l[i][n]);
                    Z.hasData(e) && (a = Z.access(e),
                    u = C.extend({}, a),
                    Z.set(t, u))
                }
            }
            function Re(e, t, n, r) {
                t = l.apply([], t);
                var i, o, s, a, u, c, f = 0, p = e.length, d = p - 1, h = t[0], g = y(h);
                if (g || p > 1 && "string" === typeof h && !v.checkClone && qe.test(h))
                    return e.each(function(i) {
                        var o = e.eq(i);
                        g && (t[0] = h.call(this, i, o.html())),
                        Re(o, t, n, r)
                    });
                if (p && (o = (i = we(t, e[0].ownerDocument, !1, e, r)).firstChild,
                1 === i.childNodes.length && (i = o),
                o || r)) {
                    for (a = (s = C.map(me(i, "script"), Oe)).length; f < p; f++)
                        u = i,
                        f !== d && (u = C.clone(u, !0, !0),
                        a && C.merge(s, me(u, "script"))),
                        n.call(e[f], u, f);
                    if (a)
                        for (c = s[s.length - 1].ownerDocument,
                        C.map(s, Pe),
                        f = 0; f < a; f++)
                            u = s[f],
                            he.test(u.type || "") && !K.access(u, "globalEval") && C.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? C._evalUrl && C._evalUrl(u.src) : w(u.textContent.replace(_e, ""), c, u))
                }
                return e
            }
            function Ie(e, t, n) {
                for (var r, i = t ? C.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
                    n || 1 !== r.nodeType || C.cleanData(me(r)),
                    r.parentNode && (n && C.contains(r.ownerDocument, r) && ve(me(r, "script")),
                    r.parentNode.removeChild(r));
                return e
            }
            C.extend({
                htmlPrefilter: function(e) {
                    return e.replace(je, "<$1></$2>")
                },
                clone: function(e, t, n) {
                    var r, i, o, s, a, u, l, c = e.cloneNode(!0), f = C.contains(e.ownerDocument, e);
                    if (!v.noCloneChecked && (1 === e.nodeType || 11 === e.nodeType) && !C.isXMLDoc(e))
                        for (s = me(c),
                        r = 0,
                        i = (o = me(e)).length; r < i; r++)
                            a = o[r],
                            u = s[r],
                            void 0,
                            "input" === (l = u.nodeName.toLowerCase()) && pe.test(a.type) ? u.checked = a.checked : "input" !== l && "textarea" !== l || (u.defaultValue = a.defaultValue);
                    if (t)
                        if (n)
                            for (o = o || me(e),
                            s = s || me(c),
                            r = 0,
                            i = o.length; r < i; r++)
                                Me(o[r], s[r]);
                        else
                            Me(e, c);
                    return (s = me(c, "script")).length > 0 && ve(s, !f && me(e, "script")),
                    c
                },
                cleanData: function(e) {
                    for (var t, n, r, i = C.event.special, o = 0; void 0 !== (n = e[o]); o++)
                        if (Q(n)) {
                            if (t = n[K.expando]) {
                                if (t.events)
                                    for (r in t.events)
                                        i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                                n[K.expando] = void 0
                            }
                            n[Z.expando] && (n[Z.expando] = void 0)
                        }
                }
            }),
            C.fn.extend({
                detach: function(e) {
                    return Ie(this, e, !0)
                },
                remove: function(e) {
                    return Ie(this, e)
                },
                text: function(e) {
                    return X(this, function(e) {
                        return void 0 === e ? C.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return Re(this, arguments, function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || He(this, e).appendChild(e)
                    })
                },
                prepend: function() {
                    return Re(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = He(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return Re(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return Re(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++)
                        1 === e.nodeType && (C.cleanData(me(e, !1)),
                        e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e,
                    t = null == t ? e : t,
                    this.map(function() {
                        return C.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return X(this, function(e) {
                        var t = this[0] || {}
                          , n = 0
                          , r = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                            return t.innerHTML;
                        if ("string" === typeof e && !Le.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = C.htmlPrefilter(e);
                            try {
                                for (; n < r; n++)
                                    1 === (t = this[n] || {}).nodeType && (C.cleanData(me(t, !1)),
                                    t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return Re(this, arguments, function(t) {
                        var n = this.parentNode;
                        C.inArray(this, e) < 0 && (C.cleanData(me(this)),
                        n && n.replaceChild(t, this))
                    }, e)
                }
            }),
            C.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                C.fn[e] = function(e) {
                    for (var n, r = [], i = C(e), o = i.length - 1, s = 0; s <= o; s++)
                        n = s === o ? this : this.clone(!0),
                        C(i[s])[t](n),
                        c.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$","i")
              , $e = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n),
                t.getComputedStyle(e)
            }
              , Fe = new RegExp(oe.join("|"),"i");
            function Be(e, t, n) {
                var r, i, o, s, a = e.style;
                return (n = n || $e(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || C.contains(e.ownerDocument, e) || (s = C.style(e, t)),
                !v.pixelBoxStyles() && We.test(s) && Fe.test(t) && (r = a.width,
                i = a.minWidth,
                o = a.maxWidth,
                a.minWidth = a.maxWidth = a.width = s,
                s = n.width,
                a.width = r,
                a.minWidth = i,
                a.maxWidth = o)),
                void 0 !== s ? s + "" : s
            }
            function ze(e, t) {
                return {
                    get: function() {
                        if (!e())
                            return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }
            !function() {
                function e() {
                    if (c) {
                        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                        c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                        Te.appendChild(l).appendChild(c);
                        var e = n.getComputedStyle(c);
                        r = "1%" !== e.top,
                        u = 12 === t(e.marginLeft),
                        c.style.right = "60%",
                        a = 36 === t(e.right),
                        i = 36 === t(e.width),
                        c.style.position = "absolute",
                        o = 36 === c.offsetWidth || "absolute",
                        Te.removeChild(l),
                        c = null
                    }
                }
                function t(e) {
                    return Math.round(parseFloat(e))
                }
                var r, i, o, a, u, l = s.createElement("div"), c = s.createElement("div");
                c.style && (c.style.backgroundClip = "content-box",
                c.cloneNode(!0).style.backgroundClip = "",
                v.clearCloneStyle = "content-box" === c.style.backgroundClip,
                C.extend(v, {
                    boxSizingReliable: function() {
                        return e(),
                        i
                    },
                    pixelBoxStyles: function() {
                        return e(),
                        a
                    },
                    pixelPosition: function() {
                        return e(),
                        r
                    },
                    reliableMarginLeft: function() {
                        return e(),
                        u
                    },
                    scrollboxSize: function() {
                        return e(),
                        o
                    }
                }))
            }();
            var Xe = /^(none|table(?!-c[ea]).+)/
              , Ue = /^--/
              , Ve = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }
              , Ge = {
                letterSpacing: "0",
                fontWeight: "400"
            }
              , Ye = ["Webkit", "Moz", "ms"]
              , Qe = s.createElement("div").style;
            function Je(e) {
                var t = C.cssProps[e];
                return t || (t = C.cssProps[e] = function(e) {
                    if (e in Qe)
                        return e;
                    for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--; )
                        if ((e = Ye[n] + t)in Qe)
                            return e
                }(e) || e),
                t
            }
            function Ke(e, t, n) {
                var r = ie.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }
            function Ze(e, t, n, r, i, o) {
                var s = "width" === t ? 1 : 0
                  , a = 0
                  , u = 0;
                if (n === (r ? "border" : "content"))
                    return 0;
                for (; s < 4; s += 2)
                    "margin" === n && (u += C.css(e, n + oe[s], !0, i)),
                    r ? ("content" === n && (u -= C.css(e, "padding" + oe[s], !0, i)),
                    "margin" !== n && (u -= C.css(e, "border" + oe[s] + "Width", !0, i))) : (u += C.css(e, "padding" + oe[s], !0, i),
                    "padding" !== n ? u += C.css(e, "border" + oe[s] + "Width", !0, i) : a += C.css(e, "border" + oe[s] + "Width", !0, i));
                return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - a - .5))),
                u
            }
            function et(e, t, n) {
                var r = $e(e)
                  , i = Be(e, t, r)
                  , o = "border-box" === C.css(e, "boxSizing", !1, r)
                  , s = o;
                if (We.test(i)) {
                    if (!n)
                        return i;
                    i = "auto"
                }
                return s = s && (v.boxSizingReliable() || i === e.style[t]),
                ("auto" === i || !parseFloat(i) && "inline" === C.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)],
                s = !0),
                (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), s, r, i) + "px"
            }
            function tt(e, t, n, r, i) {
                return new tt.prototype.init(e,t,n,r,i)
            }
            C.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = Be(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, o, s, a = Y(t), u = Ue.test(t), l = e.style;
                        if (u || (t = Je(a)),
                        s = C.cssHooks[t] || C.cssHooks[a],
                        void 0 === n)
                            return s && "get"in s && void 0 !== (i = s.get(e, !1, r)) ? i : l[t];
                        "string" === (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i),
                        o = "number"),
                        null != n && n === n && ("number" === o && (n += i && i[3] || (C.cssNumber[a] ? "" : "px")),
                        v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                        s && "set"in s && void 0 === (n = s.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
                    }
                },
                css: function(e, t, n, r) {
                    var i, o, s, a = Y(t);
                    return Ue.test(t) || (t = Je(a)),
                    (s = C.cssHooks[t] || C.cssHooks[a]) && "get"in s && (i = s.get(e, !0, n)),
                    void 0 === i && (i = Be(e, t, r)),
                    "normal" === i && t in Ge && (i = Ge[t]),
                    "" === n || n ? (o = parseFloat(i),
                    !0 === n || isFinite(o) ? o || 0 : i) : i
                }
            }),
            C.each(["height", "width"], function(e, t) {
                C.cssHooks[t] = {
                    get: function(e, n, r) {
                        if (n)
                            return !Xe.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : ae(e, Ve, function() {
                                return et(e, t, r)
                            })
                    },
                    set: function(e, n, r) {
                        var i, o = $e(e), s = "border-box" === C.css(e, "boxSizing", !1, o), a = r && Ze(e, t, r, s, o);
                        return s && v.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)),
                        a && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                        n = C.css(e, t)),
                        Ke(0, n, a)
                    }
                }
            }),
            C.cssHooks.marginLeft = ze(v.reliableMarginLeft, function(e, t) {
                if (t)
                    return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - ae(e, {
                        marginLeft: 0
                    }, function() {
                        return e.getBoundingClientRect().left
                    })) + "px"
            }),
            C.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                C.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var r = 0, i = {}, o = "string" === typeof n ? n.split(" ") : [n]; r < 4; r++)
                            i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                        return i
                    }
                },
                "margin" !== e && (C.cssHooks[e + t].set = Ke)
            }),
            C.fn.extend({
                css: function(e, t) {
                    return X(this, function(e, t, n) {
                        var r, i, o = {}, s = 0;
                        if (Array.isArray(t)) {
                            for (r = $e(e),
                            i = t.length; s < i; s++)
                                o[t[s]] = C.css(e, t[s], !1, r);
                            return o
                        }
                        return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                    }, e, t, arguments.length > 1)
                }
            }),
            C.Tween = tt,
            tt.prototype = {
                constructor: tt,
                init: function(e, t, n, r, i, o) {
                    this.elem = e,
                    this.prop = n,
                    this.easing = i || C.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = r,
                    this.unit = o || (C.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = tt.propHooks[this.prop];
                    return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = tt.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                    this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : tt.propHooks._default.set(this),
                    this
                }
            },
            tt.prototype.init.prototype = tt.prototype,
            tt.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function(e) {
                        C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            },
            tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            },
            C.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            },
            C.fx = tt.prototype.init,
            C.fx.step = {};
            var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;
            function st() {
                rt && (!1 === s.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(st) : n.setTimeout(st, C.fx.interval),
                C.fx.tick())
            }
            function at() {
                return n.setTimeout(function() {
                    nt = void 0
                }),
                nt = Date.now()
            }
            function ut(e, t) {
                var n, r = 0, i = {
                    height: e
                };
                for (t = t ? 1 : 0; r < 4; r += 2 - t)
                    i["margin" + (n = oe[r])] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e),
                i
            }
            function lt(e, t, n) {
                for (var r, i = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), o = 0, s = i.length; o < s; o++)
                    if (r = i[o].call(n, t, e))
                        return r
            }
            function ct(e, t, n) {
                var r, i, o = 0, s = ct.prefilters.length, a = C.Deferred().always(function() {
                    delete u.elem
                }), u = function() {
                    if (i)
                        return !1;
                    for (var t = nt || at(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, s = l.tweens.length; o < s; o++)
                        l.tweens[o].run(r);
                    return a.notifyWith(e, [l, r, n]),
                    r < 1 && s ? n : (s || a.notifyWith(e, [l, 1, 0]),
                    a.resolveWith(e, [l]),
                    !1)
                }, l = a.promise({
                    elem: e,
                    props: C.extend({}, t),
                    opts: C.extend(!0, {
                        specialEasing: {},
                        easing: C.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: nt || at(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = C.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(r),
                        r
                    },
                    stop: function(t) {
                        var n = 0
                          , r = t ? l.tweens.length : 0;
                        if (i)
                            return this;
                        for (i = !0; n < r; n++)
                            l.tweens[n].run(1);
                        return t ? (a.notifyWith(e, [l, 1, 0]),
                        a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]),
                        this
                    }
                }), c = l.props;
                for (!function(e, t) {
                    var n, r, i, o, s;
                    for (n in e)
                        if (i = t[r = Y(n)],
                        o = e[n],
                        Array.isArray(o) && (i = o[1],
                        o = e[n] = o[0]),
                        n !== r && (e[r] = o,
                        delete e[n]),
                        (s = C.cssHooks[r]) && "expand"in s)
                            for (n in o = s.expand(o),
                            delete e[r],
                            o)
                                n in e || (e[n] = o[n],
                                t[n] = i);
                        else
                            t[r] = i
                }(c, l.opts.specialEasing); o < s; o++)
                    if (r = ct.prefilters[o].call(l, e, c, l.opts))
                        return y(r.stop) && (C._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                        r;
                return C.map(c, lt, l),
                y(l.opts.start) && l.opts.start.call(e, l),
                l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
                C.fx.timer(C.extend(u, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })),
                l
            }
            C.Animation = C.extend(ct, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return ue(n.elem, e, ie.exec(t), n),
                        n
                    }
                    ]
                },
                tweener: function(e, t) {
                    y(e) ? (t = e,
                    e = ["*"]) : e = e.match(R);
                    for (var n, r = 0, i = e.length; r < i; r++)
                        n = e[r],
                        ct.tweeners[n] = ct.tweeners[n] || [],
                        ct.tweeners[n].unshift(t)
                },
                prefilters: [function(e, t, n) {
                    var r, i, o, s, a, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && se(e), m = K.get(e, "fxshow");
                    for (r in n.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
                    a = s.empty.fire,
                    s.empty.fire = function() {
                        s.unqueued || a()
                    }
                    ),
                    s.unqueued++,
                    p.always(function() {
                        p.always(function() {
                            s.unqueued--,
                            C.queue(e, "fx").length || s.empty.fire()
                        })
                    })),
                    t)
                        if (i = t[r],
                        it.test(i)) {
                            if (delete t[r],
                            o = o || "toggle" === i,
                            i === (g ? "hide" : "show")) {
                                if ("show" !== i || !m || void 0 === m[r])
                                    continue;
                                g = !0
                            }
                            d[r] = m && m[r] || C.style(e, r)
                        }
                    if ((u = !C.isEmptyObject(t)) || !C.isEmptyObject(d))
                        for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                        null == (l = m && m.display) && (l = K.get(e, "display")),
                        "none" === (c = C.css(e, "display")) && (l ? c = l : (fe([e], !0),
                        l = e.style.display || l,
                        c = C.css(e, "display"),
                        fe([e]))),
                        ("inline" === c || "inline-block" === c && null != l) && "none" === C.css(e, "float") && (u || (p.done(function() {
                            h.display = l
                        }),
                        null == l && (c = h.display,
                        l = "none" === c ? "" : c)),
                        h.display = "inline-block")),
                        n.overflow && (h.overflow = "hidden",
                        p.always(function() {
                            h.overflow = n.overflow[0],
                            h.overflowX = n.overflow[1],
                            h.overflowY = n.overflow[2]
                        })),
                        u = !1,
                        d)
                            u || (m ? "hidden"in m && (g = m.hidden) : m = K.access(e, "fxshow", {
                                display: l
                            }),
                            o && (m.hidden = !g),
                            g && fe([e], !0),
                            p.done(function() {
                                for (r in g || fe([e]),
                                K.remove(e, "fxshow"),
                                d)
                                    C.style(e, r, d[r])
                            })),
                            u = lt(g ? m[r] : 0, r, p),
                            r in m || (m[r] = u.start,
                            g && (u.end = u.start,
                            u.start = 0))
                }
                ],
                prefilter: function(e, t) {
                    t ? ct.prefilters.unshift(e) : ct.prefilters.push(e)
                }
            }),
            C.speed = function(e, t, n) {
                var r = e && "object" === typeof e ? C.extend({}, e) : {
                    complete: n || !n && t || y(e) && e,
                    duration: e,
                    easing: n && t || t && !y(t) && t
                };
                return C.fx.off ? r.duration = 0 : "number" !== typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default),
                null != r.queue && !0 !== r.queue || (r.queue = "fx"),
                r.old = r.complete,
                r.complete = function() {
                    y(r.old) && r.old.call(this),
                    r.queue && C.dequeue(this, r.queue)
                }
                ,
                r
            }
            ,
            C.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(se).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var i = C.isEmptyObject(e)
                      , o = C.speed(t, n, r)
                      , s = function() {
                        var t = ct(this, C.extend({}, e), o);
                        (i || K.get(this, "finish")) && t.stop(!0)
                    };
                    return s.finish = s,
                    i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop,
                        t(n)
                    };
                    return "string" !== typeof e && (n = t,
                    t = e,
                    e = void 0),
                    t && !1 !== e && this.queue(e || "fx", []),
                    this.each(function() {
                        var t = !0
                          , i = null != e && e + "queueHooks"
                          , o = C.timers
                          , s = K.get(this);
                        if (i)
                            s[i] && s[i].stop && r(s[i]);
                        else
                            for (i in s)
                                s[i] && s[i].stop && ot.test(i) && r(s[i]);
                        for (i = o.length; i--; )
                            o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                            t = !1,
                            o.splice(i, 1));
                        !t && n || C.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"),
                    this.each(function() {
                        var t, n = K.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = C.timers, s = r ? r.length : 0;
                        for (n.finish = !0,
                        C.queue(this, e, []),
                        i && i.stop && i.stop.call(this, !0),
                        t = o.length; t--; )
                            o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                            o.splice(t, 1));
                        for (t = 0; t < s; t++)
                            r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }),
            C.each(["toggle", "show", "hide"], function(e, t) {
                var n = C.fn[t];
                C.fn[t] = function(e, r, i) {
                    return null == e || "boolean" === typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
                }
            }),
            C.each({
                slideDown: ut("show"),
                slideUp: ut("hide"),
                slideToggle: ut("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                C.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }),
            C.timers = [],
            C.fx.tick = function() {
                var e, t = 0, n = C.timers;
                for (nt = Date.now(); t < n.length; t++)
                    (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || C.fx.stop(),
                nt = void 0
            }
            ,
            C.fx.timer = function(e) {
                C.timers.push(e),
                C.fx.start()
            }
            ,
            C.fx.interval = 13,
            C.fx.start = function() {
                rt || (rt = !0,
                st())
            }
            ,
            C.fx.stop = function() {
                rt = null
            }
            ,
            C.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            C.fn.delay = function(e, t) {
                return e = C.fx && C.fx.speeds[e] || e,
                t = t || "fx",
                this.queue(t, function(t, r) {
                    var i = n.setTimeout(t, e);
                    r.stop = function() {
                        n.clearTimeout(i)
                    }
                })
            }
            ,
            function() {
                var e = s.createElement("input")
                  , t = s.createElement("select").appendChild(s.createElement("option"));
                e.type = "checkbox",
                v.checkOn = "" !== e.value,
                v.optSelected = t.selected,
                (e = s.createElement("input")).value = "t",
                e.type = "radio",
                v.radioValue = "t" === e.value
            }();
            var ft, pt = C.expr.attrHandle;
            C.fn.extend({
                attr: function(e, t) {
                    return X(this, C.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        C.removeAttr(this, e)
                    })
                }
            }),
            C.extend({
                attr: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                        return "undefined" === typeof e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (i = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ft : void 0)),
                        void 0 !== n ? null === n ? void C.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                        n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!v.radioValue && "radio" === t && j(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t),
                                n && (e.value = n),
                                t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, r = 0, i = t && t.match(R);
                    if (i && 1 === e.nodeType)
                        for (; n = i[r++]; )
                            e.removeAttribute(n)
                }
            }),
            ft = {
                set: function(e, t, n) {
                    return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n),
                    n
                }
            },
            C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = pt[t] || C.find.attr;
                pt[t] = function(e, t, r) {
                    var i, o, s = t.toLowerCase();
                    return r || (o = pt[s],
                    pt[s] = i,
                    i = null != n(e, t, r) ? s : null,
                    pt[s] = o),
                    i
                }
            });
            var dt = /^(?:input|select|textarea|button)$/i
              , ht = /^(?:a|area)$/i;
            function gt(e) {
                return (e.match(R) || []).join(" ")
            }
            function mt(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }
            function vt(e) {
                return Array.isArray(e) ? e : "string" === typeof e && e.match(R) || []
            }
            C.fn.extend({
                prop: function(e, t) {
                    return X(this, C.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[C.propFix[e] || e]
                    })
                }
            }),
            C.extend({
                prop: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                        return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t,
                        i = C.propHooks[t]),
                        void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = C.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : dt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }),
            v.optSelected || (C.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex,
                    null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex)
                }
            }),
            C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                C.propFix[this.toLowerCase()] = this
            }),
            C.fn.extend({
                addClass: function(e) {
                    var t, n, r, i, o, s, a, u = 0;
                    if (y(e))
                        return this.each(function(t) {
                            C(this).addClass(e.call(this, t, mt(this)))
                        });
                    if ((t = vt(e)).length)
                        for (; n = this[u++]; )
                            if (i = mt(n),
                            r = 1 === n.nodeType && " " + gt(i) + " ") {
                                for (s = 0; o = t[s++]; )
                                    r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                i !== (a = gt(r)) && n.setAttribute("class", a)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, n, r, i, o, s, a, u = 0;
                    if (y(e))
                        return this.each(function(t) {
                            C(this).removeClass(e.call(this, t, mt(this)))
                        });
                    if (!arguments.length)
                        return this.attr("class", "");
                    if ((t = vt(e)).length)
                        for (; n = this[u++]; )
                            if (i = mt(n),
                            r = 1 === n.nodeType && " " + gt(i) + " ") {
                                for (s = 0; o = t[s++]; )
                                    for (; r.indexOf(" " + o + " ") > -1; )
                                        r = r.replace(" " + o + " ", " ");
                                i !== (a = gt(r)) && n.setAttribute("class", a)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e
                      , r = "string" === n || Array.isArray(e);
                    return "boolean" === typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each(function(n) {
                        C(this).toggleClass(e.call(this, n, mt(this), t), t)
                    }) : this.each(function() {
                        var t, i, o, s;
                        if (r)
                            for (i = 0,
                            o = C(this),
                            s = vt(e); t = s[i++]; )
                                o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else
                            void 0 !== e && "boolean" !== n || ((t = mt(this)) && K.set(this, "__className__", t),
                            this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++]; )
                        if (1 === n.nodeType && (" " + gt(mt(n)) + " ").indexOf(t) > -1)
                            return !0;
                    return !1
                }
            });
            var yt = /\r/g;
            C.fn.extend({
                val: function(e) {
                    var t, n, r, i = this[0];
                    return arguments.length ? (r = y(e),
                    this.each(function(n) {
                        var i;
                        1 === this.nodeType && (null == (i = r ? e.call(this, n, C(this).val()) : e) ? i = "" : "number" === typeof i ? i += "" : Array.isArray(i) && (i = C.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    })) : i ? (t = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" === typeof (n = i.value) ? n.replace(yt, "") : null == n ? "" : n : void 0
                }
            }),
            C.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = C.find.attr(e, "value");
                            return null != t ? t : gt(C.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, r, i = e.options, o = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], u = s ? o + 1 : i.length;
                            for (r = o < 0 ? u : s ? o : 0; r < u; r++)
                                if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))) {
                                    if (t = C(n).val(),
                                    s)
                                        return t;
                                    a.push(t)
                                }
                            return a
                        },
                        set: function(e, t) {
                            for (var n, r, i = e.options, o = C.makeArray(t), s = i.length; s--; )
                                ((r = i[s]).selected = C.inArray(C.valHooks.option.get(r), o) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1),
                            o
                        }
                    }
                }
            }),
            C.each(["radio", "checkbox"], function() {
                C.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t))
                            return e.checked = C.inArray(C(e).val(), t) > -1
                    }
                },
                v.checkOn || (C.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
                )
            }),
            v.focusin = "onfocusin"in n;
            var xt = /^(?:focusinfocus|focusoutblur)$/
              , bt = function(e) {
                e.stopPropagation()
            };
            C.extend(C.event, {
                trigger: function(e, t, r, i) {
                    var o, a, u, l, c, f, p, d, g = [r || s], m = h.call(e, "type") ? e.type : e, v = h.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (a = d = u = r = r || s,
                    3 !== r.nodeType && 8 !== r.nodeType && !xt.test(m + C.event.triggered) && (m.indexOf(".") > -1 && (m = (v = m.split(".")).shift(),
                    v.sort()),
                    c = m.indexOf(":") < 0 && "on" + m,
                    (e = e[C.expando] ? e : new C.Event(m,"object" === typeof e && e)).isTrigger = i ? 2 : 3,
                    e.namespace = v.join("."),
                    e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    e.result = void 0,
                    e.target || (e.target = r),
                    t = null == t ? [e] : C.makeArray(t, [e]),
                    p = C.event.special[m] || {},
                    i || !p.trigger || !1 !== p.trigger.apply(r, t))) {
                        if (!i && !p.noBubble && !x(r)) {
                            for (l = p.delegateType || m,
                            xt.test(l + m) || (a = a.parentNode); a; a = a.parentNode)
                                g.push(a),
                                u = a;
                            u === (r.ownerDocument || s) && g.push(u.defaultView || u.parentWindow || n)
                        }
                        for (o = 0; (a = g[o++]) && !e.isPropagationStopped(); )
                            d = a,
                            e.type = o > 1 ? l : p.bindType || m,
                            (f = (K.get(a, "events") || {})[e.type] && K.get(a, "handle")) && f.apply(a, t),
                            (f = c && a[c]) && f.apply && Q(a) && (e.result = f.apply(a, t),
                            !1 === e.result && e.preventDefault());
                        return e.type = m,
                        i || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(g.pop(), t) || !Q(r) || c && y(r[m]) && !x(r) && ((u = r[c]) && (r[c] = null),
                        C.event.triggered = m,
                        e.isPropagationStopped() && d.addEventListener(m, bt),
                        r[m](),
                        e.isPropagationStopped() && d.removeEventListener(m, bt),
                        C.event.triggered = void 0,
                        u && (r[c] = u)),
                        e.result
                    }
                },
                simulate: function(e, t, n) {
                    var r = C.extend(new C.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    C.event.trigger(r, null, t)
                }
            }),
            C.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        C.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n)
                        return C.event.trigger(e, t, n, !0)
                }
            }),
            v.focusin || C.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = function(e) {
                    C.event.simulate(t, e.target, C.event.fix(e))
                };
                C.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this
                          , i = K.access(r, t);
                        i || r.addEventListener(e, n, !0),
                        K.access(r, t, (i || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this
                          , i = K.access(r, t) - 1;
                        i ? K.access(r, t, i) : (r.removeEventListener(e, n, !0),
                        K.remove(r, t))
                    }
                }
            });
            var wt = n.location
              , Tt = Date.now()
              , Ct = /\?/;
            C.parseXML = function(e) {
                var t;
                if (!e || "string" !== typeof e)
                    return null;
                try {
                    t = (new n.DOMParser).parseFromString(e, "text/xml")
                } catch (e) {
                    t = void 0
                }
                return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e),
                t
            }
            ;
            var kt = /\[\]$/
              , Et = /\r?\n/g
              , St = /^(?:submit|button|image|reset|file)$/i
              , At = /^(?:input|select|textarea|keygen)/i;
            function Dt(e, t, n, r) {
                var i;
                if (Array.isArray(t))
                    C.each(t, function(t, i) {
                        n || kt.test(e) ? r(e, i) : Dt(e + "[" + ("object" === typeof i && null != i ? t : "") + "]", i, n, r)
                    });
                else if (n || "object" !== T(t))
                    r(e, t);
                else
                    for (i in t)
                        Dt(e + "[" + i + "]", t[i], n, r)
            }
            C.param = function(e, t) {
                var n, r = [], i = function(e, t) {
                    var n = y(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
                if (Array.isArray(e) || e.jquery && !C.isPlainObject(e))
                    C.each(e, function() {
                        i(this.name, this.value)
                    });
                else
                    for (n in e)
                        Dt(n, e[n], t, i);
                return r.join("&")
            }
            ,
            C.fn.extend({
                serialize: function() {
                    return C.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = C.prop(this, "elements");
                        return e ? C.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !C(this).is(":disabled") && At.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e))
                    }).map(function(e, t) {
                        var n = C(this).val();
                        return null == n ? null : Array.isArray(n) ? C.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(Et, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(Et, "\r\n")
                        }
                    }).get()
                }
            });
            var Nt = /%20/g
              , jt = /#.*$/
              , Lt = /([?&])_=[^&]*/
              , qt = /^(.*?):[ \t]*([^\r\n]*)$/gm
              , _t = /^(?:GET|HEAD)$/
              , Ht = /^\/\//
              , Ot = {}
              , Pt = {}
              , Mt = "*/".concat("*")
              , Rt = s.createElement("a");
            function It(e) {
                return function(t, n) {
                    "string" !== typeof t && (n = t,
                    t = "*");
                    var r, i = 0, o = t.toLowerCase().match(R) || [];
                    if (y(n))
                        for (; r = o[i++]; )
                            "+" === r[0] ? (r = r.slice(1) || "*",
                            (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }
            function Wt(e, t, n, r) {
                var i = {}
                  , o = e === Pt;
                function s(a) {
                    var u;
                    return i[a] = !0,
                    C.each(e[a] || [], function(e, a) {
                        var l = a(t, n, r);
                        return "string" !== typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                        s(l),
                        !1)
                    }),
                    u
                }
                return s(t.dataTypes[0]) || !i["*"] && s("*")
            }
            function $t(e, t) {
                var n, r, i = C.ajaxSettings.flatOptions || {};
                for (n in t)
                    void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && C.extend(!0, e, r),
                e
            }
            Rt.href = wt.href,
            C.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: wt.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Mt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": C.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? $t($t(e, C.ajaxSettings), t) : $t(C.ajaxSettings, e)
                },
                ajaxPrefilter: It(Ot),
                ajaxTransport: It(Pt),
                ajax: function(e, t) {
                    "object" === typeof e && (t = e,
                    e = void 0),
                    t = t || {};
                    var r, i, o, a, u, l, c, f, p, d, h = C.ajaxSetup({}, t), g = h.context || h, m = h.context && (g.nodeType || g.jquery) ? C(g) : C.event, v = C.Deferred(), y = C.Callbacks("once memory"), x = h.statusCode || {}, b = {}, w = {}, T = "canceled", k = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (c) {
                                if (!a)
                                    for (a = {}; t = qt.exec(o); )
                                        a[t[1].toLowerCase()] = t[2];
                                t = a[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return c ? o : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e,
                            b[e] = t),
                            this
                        },
                        overrideMimeType: function(e) {
                            return null == c && (h.mimeType = e),
                            this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (c)
                                    k.always(e[k.status]);
                                else
                                    for (t in e)
                                        x[t] = [x[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || T;
                            return r && r.abort(t),
                            E(0, t),
                            this
                        }
                    };
                    if (v.promise(k),
                    h.url = ((e || h.url || wt.href) + "").replace(Ht, wt.protocol + "//"),
                    h.type = t.method || t.type || h.method || h.type,
                    h.dataTypes = (h.dataType || "*").toLowerCase().match(R) || [""],
                    null == h.crossDomain) {
                        l = s.createElement("a");
                        try {
                            l.href = h.url,
                            l.href = l.href,
                            h.crossDomain = Rt.protocol + "//" + Rt.host !== l.protocol + "//" + l.host
                        } catch (e) {
                            h.crossDomain = !0
                        }
                    }
                    if (h.data && h.processData && "string" !== typeof h.data && (h.data = C.param(h.data, h.traditional)),
                    Wt(Ot, h, t, k),
                    c)
                        return k;
                    for (p in (f = C.event && h.global) && 0 === C.active++ && C.event.trigger("ajaxStart"),
                    h.type = h.type.toUpperCase(),
                    h.hasContent = !_t.test(h.type),
                    i = h.url.replace(jt, ""),
                    h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Nt, "+")) : (d = h.url.slice(i.length),
                    h.data && (h.processData || "string" === typeof h.data) && (i += (Ct.test(i) ? "&" : "?") + h.data,
                    delete h.data),
                    !1 === h.cache && (i = i.replace(Lt, "$1"),
                    d = (Ct.test(i) ? "&" : "?") + "_=" + Tt++ + d),
                    h.url = i + d),
                    h.ifModified && (C.lastModified[i] && k.setRequestHeader("If-Modified-Since", C.lastModified[i]),
                    C.etag[i] && k.setRequestHeader("If-None-Match", C.etag[i])),
                    (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && k.setRequestHeader("Content-Type", h.contentType),
                    k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : h.accepts["*"]),
                    h.headers)
                        k.setRequestHeader(p, h.headers[p]);
                    if (h.beforeSend && (!1 === h.beforeSend.call(g, k, h) || c))
                        return k.abort();
                    if (T = "abort",
                    y.add(h.complete),
                    k.done(h.success),
                    k.fail(h.error),
                    r = Wt(Pt, h, t, k)) {
                        if (k.readyState = 1,
                        f && m.trigger("ajaxSend", [k, h]),
                        c)
                            return k;
                        h.async && h.timeout > 0 && (u = n.setTimeout(function() {
                            k.abort("timeout")
                        }, h.timeout));
                        try {
                            c = !1,
                            r.send(b, E)
                        } catch (e) {
                            if (c)
                                throw e;
                            E(-1, e)
                        }
                    } else
                        E(-1, "No Transport");
                    function E(e, t, s, a) {
                        var l, p, d, b, w, T = t;
                        c || (c = !0,
                        u && n.clearTimeout(u),
                        r = void 0,
                        o = a || "",
                        k.readyState = e > 0 ? 4 : 0,
                        l = e >= 200 && e < 300 || 304 === e,
                        s && (b = function(e, t, n) {
                            for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0]; )
                                u.shift(),
                                void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (r)
                                for (i in a)
                                    if (a[i] && a[i].test(r)) {
                                        u.unshift(i);
                                        break
                                    }
                            if (u[0]in n)
                                o = u[0];
                            else {
                                for (i in n) {
                                    if (!u[0] || e.converters[i + " " + u[0]]) {
                                        o = i;
                                        break
                                    }
                                    s || (s = i)
                                }
                                o = o || s
                            }
                            if (o)
                                return o !== u[0] && u.unshift(o),
                                n[o]
                        }(h, k, s)),
                        b = function(e, t, n, r) {
                            var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
                            if (c[1])
                                for (s in e.converters)
                                    l[s.toLowerCase()] = e.converters[s];
                            for (o = c.shift(); o; )
                                if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                                !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                                u = o,
                                o = c.shift())
                                    if ("*" === o)
                                        o = u;
                                    else if ("*" !== u && u !== o) {
                                        if (!(s = l[u + " " + o] || l["* " + o]))
                                            for (i in l)
                                                if ((a = i.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                                    !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0],
                                                    c.unshift(a[1]));
                                                    break
                                                }
                                        if (!0 !== s)
                                            if (s && e.throws)
                                                t = s(t);
                                            else
                                                try {
                                                    t = s(t)
                                                } catch (e) {
                                                    return {
                                                        state: "parsererror",
                                                        error: s ? e : "No conversion from " + u + " to " + o
                                                    }
                                                }
                                    }
                            return {
                                state: "success",
                                data: t
                            }
                        }(h, b, k, l),
                        l ? (h.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (C.lastModified[i] = w),
                        (w = k.getResponseHeader("etag")) && (C.etag[i] = w)),
                        204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state,
                        p = b.data,
                        l = !(d = b.error))) : (d = T,
                        !e && T || (T = "error",
                        e < 0 && (e = 0))),
                        k.status = e,
                        k.statusText = (t || T) + "",
                        l ? v.resolveWith(g, [p, T, k]) : v.rejectWith(g, [k, T, d]),
                        k.statusCode(x),
                        x = void 0,
                        f && m.trigger(l ? "ajaxSuccess" : "ajaxError", [k, h, l ? p : d]),
                        y.fireWith(g, [k, T]),
                        f && (m.trigger("ajaxComplete", [k, h]),
                        --C.active || C.event.trigger("ajaxStop")))
                    }
                    return k
                },
                getJSON: function(e, t, n) {
                    return C.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return C.get(e, void 0, t, "script")
                }
            }),
            C.each(["get", "post"], function(e, t) {
                C[t] = function(e, n, r, i) {
                    return y(n) && (i = i || r,
                    r = n,
                    n = void 0),
                    C.ajax(C.extend({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    }, C.isPlainObject(e) && e))
                }
            }),
            C._evalUrl = function(e) {
                return C.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }
            ,
            C.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (y(e) && (e = e.call(this[0])),
                    t = C(e, this[0].ownerDocument).eq(0).clone(!0),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t.map(function() {
                        for (var e = this; e.firstElementChild; )
                            e = e.firstElementChild;
                        return e
                    }).append(this)),
                    this
                },
                wrapInner: function(e) {
                    return y(e) ? this.each(function(t) {
                        C(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = C(this)
                          , n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = y(e);
                    return this.each(function(n) {
                        C(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each(function() {
                        C(this).replaceWith(this.childNodes)
                    }),
                    this
                }
            }),
            C.expr.pseudos.hidden = function(e) {
                return !C.expr.pseudos.visible(e)
            }
            ,
            C.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }
            ,
            C.ajaxSettings.xhr = function() {
                try {
                    return new n.XMLHttpRequest
                } catch (e) {}
            }
            ;
            var Ft = {
                0: 200,
                1223: 204
            }
              , Bt = C.ajaxSettings.xhr();
            v.cors = !!Bt && "withCredentials"in Bt,
            v.ajax = Bt = !!Bt,
            C.ajaxTransport(function(e) {
                var t, r;
                if (v.cors || Bt && !e.crossDomain)
                    return {
                        send: function(i, o) {
                            var s, a = e.xhr();
                            if (a.open(e.type, e.url, e.async, e.username, e.password),
                            e.xhrFields)
                                for (s in e.xhrFields)
                                    a[s] = e.xhrFields[s];
                            for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                            e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
                            i)
                                a.setRequestHeader(s, i[s]);
                            t = function(e) {
                                return function() {
                                    t && (t = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                                    "abort" === e ? a.abort() : "error" === e ? "number" !== typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ft[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" !== typeof a.responseText ? {
                                        binary: a.response
                                    } : {
                                        text: a.responseText
                                    }, a.getAllResponseHeaders()))
                                }
                            }
                            ,
                            a.onload = t(),
                            r = a.onerror = a.ontimeout = t("error"),
                            void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
                                4 === a.readyState && n.setTimeout(function() {
                                    t && r()
                                })
                            }
                            ,
                            t = t("abort");
                            try {
                                a.send(e.hasContent && e.data || null)
                            } catch (e) {
                                if (t)
                                    throw e
                            }
                        },
                        abort: function() {
                            t && t()
                        }
                    }
            }),
            C.ajaxPrefilter(function(e) {
                e.crossDomain && (e.contents.script = !1)
            }),
            C.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return C.globalEval(e),
                        e
                    }
                }
            }),
            C.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET")
            }),
            C.ajaxTransport("script", function(e) {
                var t, n;
                if (e.crossDomain)
                    return {
                        send: function(r, i) {
                            t = C("<script>").prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function(e) {
                                t.remove(),
                                n = null,
                                e && i("error" === e.type ? 404 : 200, e.type)
                            }
                            ),
                            s.head.appendChild(t[0])
                        },
                        abort: function() {
                            n && n()
                        }
                    }
            });
            var zt, Xt = [], Ut = /(=)\?(?=&|$)|\?\?/;
            C.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Xt.pop() || C.expando + "_" + Tt++;
                    return this[e] = !0,
                    e
                }
            }),
            C.ajaxPrefilter("json jsonp", function(e, t, r) {
                var i, o, s, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" === typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
                if (a || "jsonp" === e.dataTypes[0])
                    return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                    a ? e[a] = e[a].replace(Ut, "$1" + i) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                    e.converters["script json"] = function() {
                        return s || C.error(i + " was not called"),
                        s[0]
                    }
                    ,
                    e.dataTypes[0] = "json",
                    o = n[i],
                    n[i] = function() {
                        s = arguments
                    }
                    ,
                    r.always(function() {
                        void 0 === o ? C(n).removeProp(i) : n[i] = o,
                        e[i] && (e.jsonpCallback = t.jsonpCallback,
                        Xt.push(i)),
                        s && y(o) && o(s[0]),
                        s = o = void 0
                    }),
                    "script"
            }),
            v.createHTMLDocument = ((zt = s.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
            2 === zt.childNodes.length),
            C.parseHTML = function(e, t, n) {
                return "string" !== typeof e ? [] : ("boolean" === typeof t && (n = t,
                t = !1),
                t || (v.createHTMLDocument ? ((r = (t = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href,
                t.head.appendChild(r)) : t = s),
                i = L.exec(e),
                o = !n && [],
                i ? [t.createElement(i[1])] : (i = we([e], t, o),
                o && o.length && C(o).remove(),
                C.merge([], i.childNodes)));
                var r, i, o
            }
            ,
            C.fn.load = function(e, t, n) {
                var r, i, o, s = this, a = e.indexOf(" ");
                return a > -1 && (r = gt(e.slice(a)),
                e = e.slice(0, a)),
                y(t) ? (n = t,
                t = void 0) : t && "object" === typeof t && (i = "POST"),
                s.length > 0 && C.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    o = arguments,
                    s.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
                }).always(n && function(e, t) {
                    s.each(function() {
                        n.apply(this, o || [e.responseText, t, e])
                    })
                }
                ),
                this
            }
            ,
            C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                C.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }),
            C.expr.pseudos.animated = function(e) {
                return C.grep(C.timers, function(t) {
                    return e === t.elem
                }).length
            }
            ,
            C.offset = {
                setOffset: function(e, t, n) {
                    var r, i, o, s, a, u, l = C.css(e, "position"), c = C(e), f = {};
                    "static" === l && (e.style.position = "relative"),
                    a = c.offset(),
                    o = C.css(e, "top"),
                    u = C.css(e, "left"),
                    ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (s = (r = c.position()).top,
                    i = r.left) : (s = parseFloat(o) || 0,
                    i = parseFloat(u) || 0),
                    y(t) && (t = t.call(e, n, C.extend({}, a))),
                    null != t.top && (f.top = t.top - a.top + s),
                    null != t.left && (f.left = t.left - a.left + i),
                    "using"in t ? t.using.call(e, f) : c.css(f)
                }
            },
            C.fn.extend({
                offset: function(e) {
                    if (arguments.length)
                        return void 0 === e ? this : this.each(function(t) {
                            C.offset.setOffset(this, e, t)
                        });
                    var t, n, r = this[0];
                    return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
                    n = r.ownerDocument.defaultView,
                    {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n, r = this[0], i = {
                            top: 0,
                            left: 0
                        };
                        if ("fixed" === C.css(r, "position"))
                            t = r.getBoundingClientRect();
                        else {
                            for (t = this.offset(),
                            n = r.ownerDocument,
                            e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position"); )
                                e = e.parentNode;
                            e && e !== r && 1 === e.nodeType && ((i = C(e).offset()).top += C.css(e, "borderTopWidth", !0),
                            i.left += C.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - i.top - C.css(r, "marginTop", !0),
                            left: t.left - i.left - C.css(r, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && "static" === C.css(e, "position"); )
                            e = e.offsetParent;
                        return e || Te
                    })
                }
            }),
            C.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, t) {
                var n = "pageYOffset" === t;
                C.fn[e] = function(r) {
                    return X(this, function(e, r, i) {
                        var o;
                        if (x(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                        void 0 === i)
                            return o ? o[t] : e[r];
                        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                    }, e, r, arguments.length)
                }
            }),
            C.each(["top", "left"], function(e, t) {
                C.cssHooks[t] = ze(v.pixelPosition, function(e, n) {
                    if (n)
                        return n = Be(e, t),
                        We.test(n) ? C(e).position()[t] + "px" : n
                })
            }),
            C.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                C.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, r) {
                    C.fn[r] = function(i, o) {
                        var s = arguments.length && (n || "boolean" !== typeof i)
                          , a = n || (!0 === i || !0 === o ? "margin" : "border");
                        return X(this, function(t, n, i) {
                            var o;
                            return x(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                            Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? C.css(t, n, a) : C.style(t, n, i, a)
                        }, t, s ? i : void 0, s)
                    }
                })
            }),
            C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
                C.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }),
            C.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }),
            C.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }),
            C.proxy = function(e, t) {
                var n, r, i;
                if ("string" === typeof t && (n = e[t],
                t = e,
                e = n),
                y(e))
                    return r = u.call(arguments, 2),
                    (i = function() {
                        return e.apply(t || this, r.concat(u.call(arguments)))
                    }
                    ).guid = e.guid = e.guid || C.guid++,
                    i
            }
            ,
            C.holdReady = function(e) {
                e ? C.readyWait++ : C.ready(!0)
            }
            ,
            C.isArray = Array.isArray,
            C.parseJSON = JSON.parse,
            C.nodeName = j,
            C.isFunction = y,
            C.isWindow = x,
            C.camelCase = Y,
            C.type = T,
            C.now = Date.now,
            C.isNumeric = function(e) {
                var t = C.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }
            ,
            void 0 === (r = function() {
                return C
            }
            .apply(t, [])) || (e.exports = r);
            var Vt = n.jQuery
              , Gt = n.$;
            return C.noConflict = function(e) {
                return n.$ === C && (n.$ = Gt),
                e && n.jQuery === C && (n.jQuery = Vt),
                C
            }
            ,
            i || (n.jQuery = n.$ = C),
            C
        })
    }
});
