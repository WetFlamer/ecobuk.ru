__do__loader__([47], {
    100: function(t, e) {
        (function(e) {
            t.exports = e
        }
        ).call(e, {})
    },
    111: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = function(t) {
            var e;
            e = function(t) {
                t.s3Eventable = function(e) {
                    return (e = e || {})._events = {},
                    e._lock = !1,
                    e.on = function(n, i) {
                        if (!e._lock) {
                            if ("object" === t.type(n))
                                return t.each(n, function(t, n) {
                                    e.on(t, n)
                                }),
                                this;
                            this._events[n] || (this._events[n] = t.Callbacks()),
                            this._events[n].add(i)
                        }
                        return this
                    }
                    ,
                    e.off = function(t, n) {
                        return this._events[t] && !e._lock && (n ? this._events[t].remove(n) : this._events[t].empty()),
                        this
                    }
                    ,
                    e.trigger = function(t) {
                        return this._events[t] && this._events[t].fireWith(e, [].slice.call(arguments, 1)),
                        this
                    }
                    ,
                    e.lock = function() {
                        e._lock = !0
                    }
                    ,
                    e.unlock = function() {
                        e._lock = !1
                    }
                    ,
                    e
                }
            }
            ,
            "function" === typeof define && n(100) ? define(["jquery"], e) : e(t)
        }
    }
});
