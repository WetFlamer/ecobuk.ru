__do__loader__([51], {
    100: function(t, n) {
        (function(n) {
            t.exports = n
        }
        ).call(n, {})
    },
    112: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.default = function() {
            var t;
            t = function() {
                function t(t, n) {
                    this.a = t,
                    this.b = n
                }
                function n(t, n, e) {
                    this.a = t,
                    this.b = n,
                    this.c = e
                }
                return t.prototype.len = function() {
                    var t = this.a.x - this.b.x
                      , n = this.a.y - this.b.y;
                    return Math.sqrt(t * t + n * n)
                }
                ,
                n.prototype.square = function() {
                    var n = new t(this.a,this.b).len()
                      , e = new t(this.b,this.c).len()
                      , i = new t(this.a,this.c).len()
                      , s = (n + e + i) / 2;
                    return Math.sqrt(s * (s - n) * (s - e) * (s - i))
                }
                ,
                n.prototype.hasPoint = function(t, e) {
                    var i = new n(this.a,this.b,t).square() + new n(this.a,this.c,t).square() + new n(this.b,this.c,t).square();
                    return Math.abs(i - this.square()) < (e = "undefined" === typeof e ? 0 : e)
                }
                ,
                window.s3Math = {
                    Line: t,
                    Triangle: n
                },
                window.s3Math
            }
            ,
            "function" === typeof define && e(100) ? define([], t) : t()
        }
    }
});
