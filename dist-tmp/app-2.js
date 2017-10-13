/******/ (t => {
    /******/
    /******/
    // The require function
    /******/
    function r(o) {
        /******/
        /******/
        // Check if module is in cache
        /******/
        if (e[o]) /******/
        return e[o].exports;
        /******/
        // Create a new module (and put it into the cache)
        /******/
        var n = e[o] = {
            /******/
            i: o,
            /******/
            l: !1,
            /******/
            exports: {}
        };
        /******/
        /******/
        // Return the exports of the module
        /******/
        /******/
        /******/
        // Execute the module function
        /******/
        /******/
        /******/
        // Flag the module as loaded
        /******/
        return t[o].call(n.exports, n, n.exports, r), n.l = !0, n.exports;
    }
    // webpackBootstrap
    /******/
    // The module cache
    /******/
    var e = {};
    /******/
    /******/
    /******/
    // expose the modules object (__webpack_modules__)
    /******/
    r.m = t, /******/
    /******/
    // expose the module cache
    /******/
    r.c = e, /******/
    /******/
    // define getter function for harmony exports
    /******/
    r.d = ((t, e, o) => {
        /******/
        r.o(t, e) || /******/
        Object.defineProperty(t, e, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: o
        });
    }), /******/
    /******/
    // getDefaultExport function for compatibility with non-harmony modules
    /******/
    r.n = (t => {
        /******/
        var e = t && t.__esModule ? /******/
        () => t.default : /******/
        () => t;
        /******/
        /******/
        return r.d(e, "a", e), e;
    }), /******/
    /******/
    // Object.prototype.hasOwnProperty.call
    /******/
    r.o = ((t, r) => ({}).hasOwnProperty.call(t, r)), /******/
    /******/
    // __webpack_public_path__
    /******/
    r.p = "", r(r.s = 0);
})([ /* 0 */
/***/
(t, r, e) => {
    e(1);
    // require('bootstrap-css');
    var o = e(2), n = document.getElementById("elm-app");
    // Copyright 2014-2017 The Bootstrap Authors
    // Copyright 2014-2017 Twitter, Inc.
    // Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
    if (o.App.embed(n), console.dir(o), navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var c = document.createElement("style");
        c.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")), document.head.appendChild(c);
    }
}, /* 1 */
/***/
() => {}, /* 2 */
/***/
function(t) {
    (function() {
        "use strict";
        function r(t) {
            function r(r) {
                return e => t(r, e);
            }
            return r.arity = 2, r.func = t, r;
        }
        function e(t) {
            function r(r) {
                return e => o => t(r, e, o);
            }
            return r.arity = 3, r.func = t, r;
        }
        function o(t) {
            function r(r) {
                return e => o => n => t(r, e, o, n);
            }
            return r.arity = 4, r.func = t, r;
        }
        function n(t) {
            function r(r) {
                return e => o => n => c => t(r, e, o, n, c);
            }
            return r.arity = 5, r.func = t, r;
        }
        function c(t) {
            function r(r) {
                return e => o => n => c => a => t(r, e, o, n, c, a);
            }
            return r.arity = 6, r.func = t, r;
        }
        function a(t) {
            function r(r) {
                return e => o => n => c => a => _ => t(r, e, o, n, c, a, _);
            }
            return r.arity = 7, r.func = t, r;
        }
        function _(t) {
            function r(r) {
                return e => o => n => c => a => _ => i => t(r, e, o, n, c, a, _, i);
            }
            return r.arity = 8, r.func = t, r;
        }
        function i(t) {
            function r(r) {
                return e => o => n => c => a => _ => i => l => t(r, e, o, n, c, a, _, i, l);
            }
            return r.arity = 9, r.func = t, r;
        }
        function l(t, r, e) {
            return 2 === t.arity ? t.func(r, e) : t(r)(e);
        }
        function u(t, r, e, o) {
            return 3 === t.arity ? t.func(r, e, o) : t(r)(e)(o);
        }
        function s(t, r, e, o, n) {
            return 4 === t.arity ? t.func(r, e, o, n) : t(r)(e)(o)(n);
        }
        function d(t, r, e, o, n, c) {
            return 5 === t.arity ? t.func(r, e, o, n, c) : t(r)(e)(o)(n)(c);
        }
        function p(t, r, e, o, n, c, a) {
            return 6 === t.arity ? t.func(r, e, o, n, c, a) : t(r)(e)(o)(n)(c)(a);
        }
        //import Native.Utils //
        var g = (() => {
            function t(r, e) {
                if (0 === e) throw Error("Cannot perform mod 0. Division by zero error.");
                var o = r % e, n = 0 === r ? 0 : e > 0 ? 0 > r ? o + e : o : -t(-r, -e);
                return n === e ? 0 : n;
            }
            var o = [ "LT", "EQ", "GT" ];
            return {
                div: r((t, r) => t / r | 0),
                rem: r((t, r) => t % r),
                mod: r(t),
                pi: Math.PI,
                e: Math.E,
                cos: Math.cos,
                sin: Math.sin,
                tan: Math.tan,
                acos: Math.acos,
                asin: Math.asin,
                atan: Math.atan,
                atan2: r(Math.atan2),
                degrees: t => t * Math.PI / 180,
                turns: t => 2 * Math.PI * t,
                fromPolar(t) {
                    var r = t._0, e = t._1;
                    return f.Tuple2(r * Math.cos(e), r * Math.sin(e));
                },
                toPolar(t) {
                    var r = t._0, e = t._1;
                    return f.Tuple2(Math.sqrt(r * r + e * e), Math.atan2(e, r));
                },
                sqrt: Math.sqrt,
                logBase: r((t, r) => Math.log(r) / Math.log(t)),
                negate: t => -t,
                abs: t => 0 > t ? -t : t,
                min: r((t, r) => 0 > f.cmp(t, r) ? t : r),
                max: r((t, r) => f.cmp(t, r) > 0 ? t : r),
                clamp: e((t, r, e) => 0 > f.cmp(e, t) ? t : f.cmp(e, r) > 0 ? r : e),
                compare: r((t, r) => ({
                    ctor: o[f.cmp(t, r) + 1]
                })),
                xor: r((t, r) => t !== r),
                not: t => !t,
                truncate: t => 0 | t,
                ceiling: Math.ceil,
                floor: Math.floor,
                round: Math.round,
                toFloat: t => t,
                isNaN,
                isInfinite: t => t === 1 / 0 || t === -1 / 0
            };
        })(), f = (() => {
            function t(r, e, o, n) {
                if (o > 100) return n.push({
                    x: r,
                    y: e
                }), !0;
                if (r === e) return !0;
                if ("object" != typeof r) {
                    if ("function" == typeof r) throw Error('Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense. Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#== which describes why it is this way and what the better version will look like.');
                    return !1;
                }
                if (null === r || null === e) return !1;
                if (r instanceof Date) return r.getTime() === e.getTime();
                if (!("ctor" in r)) {
                    for (var c in r) if (!t(r[c], e[c], o + 1, n)) return !1;
                    return !0;
                }
                // check if lists are equal without recursion
                if (// convert Dicts and Sets to lists
                "RBNode_elm_builtin" !== r.ctor && "RBEmpty_elm_builtin" !== r.ctor || (r = Ut(r), 
                e = Ut(e)), "Set_elm_builtin" === r.ctor && (r = _elm_lang$core$Set$toList(r), e = _elm_lang$core$Set$toList(e)), 
                "::" === r.ctor) {
                    for (var a = r, _ = e; "::" === a.ctor && "::" === _.ctor; ) {
                        if (!t(a._0, _._0, o + 1, n)) return !1;
                        a = a._1, _ = _._1;
                    }
                    return a.ctor === _.ctor;
                }
                // check if Arrays are equal
                if ("_Array" === r.ctor) {
                    var i = Mt.toJSArray(r), l = Mt.toJSArray(e);
                    if (i.length !== l.length) return !1;
                    for (var u = 0; i.length > u; u++) if (!t(i[u], l[u], o + 1, n)) return !1;
                    return !0;
                }
                if (!t(r.ctor, e.ctor, o + 1, n)) return !1;
                for (var c in r) if (!t(r[c], e[c], o + 1, n)) return !1;
                return !0;
            }
            function e(t, r) {
                if ("object" != typeof t) return t === r ? i : r > t ? _ : l;
                if (t instanceof String) {
                    var o = t.valueOf(), n = r.valueOf();
                    return o === n ? i : n > o ? _ : l;
                }
                if ("::" === t.ctor || "[]" === t.ctor) {
                    for (;"::" === t.ctor && "::" === r.ctor; ) {
                        if ((c = e(t._0, r._0)) !== i) return c;
                        t = t._1, r = r._1;
                    }
                    return t.ctor === r.ctor ? i : "[]" === t.ctor ? _ : l;
                }
                if ("_Tuple" === t.ctor.slice(0, 6)) {
                    var c, a = t.ctor.slice(6) - 0;
                    if (0 === a) return i;
                    if (a >= 1) {
                        if ((c = e(t._0, r._0)) !== i) return c;
                        if (a >= 2) {
                            if ((c = e(t._1, r._1)) !== i) return c;
                            if (a >= 3) {
                                if ((c = e(t._2, r._2)) !== i) return c;
                                if (a >= 4) {
                                    if ((c = e(t._3, r._3)) !== i) return c;
                                    if (a >= 5) {
                                        if ((c = e(t._4, r._4)) !== i) return c;
                                        if (a >= 6) {
                                            if ((c = e(t._5, r._5)) !== i) return c;
                                            if (a >= 7) throw Error("Comparison error: cannot compare tuples with more than 6 elements.");
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return i;
                }
                throw Error("Comparison error: comparison is only defined on ints, floats, times, chars, strings, lists of comparable values, and tuples of comparable values.");
            }
            function o(t, r) {
                return {
                    ctor: "::",
                    _0: t,
                    _1: r
                };
            }
            function n(t) {
                return t.start.line == t.end.line ? "on line " + t.start.line : "between lines " + t.start.line + " and " + t.end.line;
            }
            // TO STRING
            function c(t) {
                var r = typeof t;
                if ("function" === r) return "<function>";
                if ("boolean" === r) return t ? "True" : "False";
                if ("number" === r) return t + "";
                if (t instanceof String) return "'" + a(t, !0) + "'";
                if ("string" === r) return '"' + a(t, !1) + '"';
                if (null === t) return "null";
                if ("object" === r && "ctor" in t) {
                    var e = t.ctor.substring(0, 5);
                    if ("_Tupl" === e) {
                        l = [];
                        for (var o in t) "ctor" !== o && l.push(c(t[o]));
                        return "(" + l.join(",") + ")";
                    }
                    if ("_Task" === e) return "<task>";
                    if ("_Array" === t.ctor) return "Array.fromList " + c(Jt(t));
                    if ("<decoder>" === t.ctor) return "<decoder>";
                    if ("_Process" === t.ctor) return "<process:" + t.id + ">";
                    if ("::" === t.ctor) {
                        for (l = "[" + c(t._0), t = t._1; "::" === t.ctor; ) l += "," + c(t._0), t = t._1;
                        return l + "]";
                    }
                    if ("[]" === t.ctor) return "[]";
                    if ("Set_elm_builtin" === t.ctor) return "Set.fromList " + c(_elm_lang$core$Set$toList(t));
                    if ("RBNode_elm_builtin" === t.ctor || "RBEmpty_elm_builtin" === t.ctor) return "Dict.fromList " + c(Ut(t));
                    l = "";
                    for (var n in t) if ("ctor" !== n) {
                        var _ = c(t[n]), i = _[0];
                        l += " " + ("{" === i || "(" === i || "<" === i || '"' === i || 0 > _.indexOf(" ") ? _ : "(" + _ + ")");
                    }
                    return t.ctor + l;
                }
                if ("object" === r) {
                    if (t instanceof Date) return "<" + t + ">";
                    if (t.elm_web_socket) return "<websocket>";
                    var l = [];
                    for (var o in t) l.push(o + " = " + c(t[o]));
                    return 0 === l.length ? "{}" : "{ " + l.join(", ") + " }";
                }
                return "<internal structure>";
            }
            function a(t, r) {
                var e = t.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
                return r ? e.replace(/\'/g, "\\'") : e.replace(/\"/g, '\\"');
            }
            // Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
            // the particular integer values assigned to LT, EQ, and GT.
            var _ = -1, i = 0, l = 1, u = 0, s = {
                ctor: "[]"
            };
            return {
                eq(r, e) {
                    for (var o, n = [], c = t(r, e, 0, n); c && (o = n.pop()); ) c = t(o.x, o.y, 0, n);
                    return c;
                },
                cmp: e,
                Tuple0: {
                    ctor: "_Tuple0"
                },
                Tuple2: (t, r) => ({
                    ctor: "_Tuple2",
                    _0: t,
                    _1: r
                }),
                chr: t => new String(t),
                update(t, r) {
                    var e = {};
                    for (var o in t) e[o] = t[o];
                    for (var o in r) e[o] = r[o];
                    return e;
                },
                guid: () => u++,
                append: r((t, r) => {
                    // append Strings
                    if ("string" == typeof t) return t + r;
                    // append Lists
                    if ("[]" === t.ctor) return r;
                    var e = o(t._0, s), n = e;
                    for (t = t._1; "[]" !== t.ctor; ) n._1 = o(t._0, s), t = t._1, n = n._1;
                    return n._1 = r, e;
                }),
                crash: // CRASHES
                (t, r) => e => {
                    throw Error("Ran into a `Debug.crash` in module `" + t + "` " + n(r) + "\nThe message provided by the code author is:\n\n    " + e);
                },
                crashCase: (t, r, e) => o => {
                    throw Error("Ran into a `Debug.crash` in module `" + t + "`\n\nThis was caused by the `case` expression " + n(r) + ".\nOne of the branches ended with a crash and the following value got through:\n\n    " + c(e) + "\n\nThe message provided by the code author is:\n\n    " + o);
                },
                toString: c
            };
        })(), v = (r((t, r) => {
            var e = r;
            return l(t, e._0, e._1);
        }), e((t, r, e) => t({
            ctor: "_Tuple2",
            _0: r,
            _1: e
        }))), h = e((t, r, e) => l(t, e, r)), m = r(t => t), b = t => t, y = y || {};
        y["<|"] = r((t, r) => t(r)), (y = y || {})["|>"] = r((t, r) => r(t)), (y = y || {})[">>"] = e((t, r, e) => r(t(e))), 
        (y = y || {})["<<"] = e((t, r, e) => t(r(e))), (y = y || {})["++"] = f.append;
        var k = f.toString;
        (y = y || {})["||"] = g.or, (y = y || {})["&&"] = g.and;
        var T = g.compare;
        (y = y || {})[">="] = g.ge, (y = y || {})["<="] = g.le, (y = y || {})[">"] = g.gt, 
        (y = y || {})["<"] = g.lt, (y = y || {})["/="] = g.neq, (y = y || {})["=="] = g.eq, 
        (y = y || {})["^"] = g.exp, (y = y || {})["%"] = g.mod, (y = y || {})["//"] = g.div, 
        (y = y || {})["/"] = g.floatDiv, (y = y || {})["*"] = g.mul, (y = y || {})["-"] = g.sub, 
        (y = y || {})["+"] = g.add;
        var w = {
            crash(t) {
                throw Error(t);
            },
            log: r((t, r) => {
                var e = t + ": " + f.toString(r), o = o || {};
                return o.stdout ? o.stdout.write(e) : console.log(e), r;
            })
        }, x = w.log, B = r((t, r) => {
            var e = r;
            return "Just" === e.ctor ? e._0 : t;
        }), N = {
            ctor: "Nothing"
        }, E = r((t, r) => {
            var e = r;
            return "Just" === e.ctor ? t(e._0) : N;
        }), R = t => ({
            ctor: "Just",
            _0: t
        }), A = r((t, r) => {
            var e = r;
            return "Just" === e.ctor ? R(t(e._0)) : N;
        }), C = e((t, r, e) => {
            var o = {
                ctor: "_Tuple2",
                _0: r,
                _1: e
            };
            return "_Tuple2" === o.ctor && "Just" === o._0.ctor && "Just" === o._1.ctor ? R(l(t, o._0._0, o._1._0)) : N;
        }), M = (o((t, r, e, o) => {
            var n = {
                ctor: "_Tuple3",
                _0: r,
                _1: e,
                _2: o
            };
            return "_Tuple3" === n.ctor && "Just" === n._0.ctor && "Just" === n._1.ctor && "Just" === n._2.ctor ? R(u(t, n._0._0, n._1._0, n._2._0)) : N;
        }), n((t, r, e, o, n) => {
            var c = {
                ctor: "_Tuple4",
                _0: r,
                _1: e,
                _2: o,
                _3: n
            };
            return "_Tuple4" === c.ctor && "Just" === c._0.ctor && "Just" === c._1.ctor && "Just" === c._2.ctor && "Just" === c._3.ctor ? R(s(t, c._0._0, c._1._0, c._2._0, c._3._0)) : N;
        }), c((t, r, e, o, n, c) => {
            var a = {
                ctor: "_Tuple5",
                _0: r,
                _1: e,
                _2: o,
                _3: n,
                _4: c
            };
            return "_Tuple5" === a.ctor && "Just" === a._0.ctor && "Just" === a._1.ctor && "Just" === a._2.ctor && "Just" === a._3.ctor && "Just" === a._4.ctor ? R(d(t, a._0._0, a._1._0, a._2._0, a._3._0, a._4._0)) : N;
        }), (() => {
            function t(t, r) {
                return {
                    ctor: "::",
                    _0: t,
                    _1: r
                };
            }
            function a(r) {
                for (var e = i, o = r.length; o--; ) e = t(r[o], e);
                return e;
            }
            function _(t) {
                for (var r = []; "[]" !== t.ctor; ) r.push(t._0), t = t._1;
                return r;
            }
            var i = {
                ctor: "[]"
            };
            return {
                Nil: i,
                Cons: t,
                cons: r(t),
                toArray: _,
                fromArray: a,
                foldr: e((t, r, e) => {
                    for (var o = _(e), n = r, c = o.length; c--; ) n = l(t, o[c], n);
                    return n;
                }),
                map2: e((t, r, e) => {
                    for (var o = []; "[]" !== r.ctor && "[]" !== e.ctor; ) o.push(l(t, r._0, e._0)), 
                    r = r._1, e = e._1;
                    return a(o);
                }),
                map3: o((t, r, e, o) => {
                    for (var n = []; "[]" !== r.ctor && "[]" !== e.ctor && "[]" !== o.ctor; ) n.push(u(t, r._0, e._0, o._0)), 
                    r = r._1, e = e._1, o = o._1;
                    return a(n);
                }),
                map4: n((t, r, e, o, n) => {
                    for (var c = []; "[]" !== r.ctor && "[]" !== e.ctor && "[]" !== o.ctor && "[]" !== n.ctor; ) c.push(s(t, r._0, e._0, o._0, n._0)), 
                    r = r._1, e = e._1, o = o._1, n = n._1;
                    return a(c);
                }),
                map5: c((t, r, e, o, n, c) => {
                    for (var _ = []; "[]" !== r.ctor && "[]" !== e.ctor && "[]" !== o.ctor && "[]" !== n.ctor && "[]" !== c.ctor; ) _.push(d(t, r._0, e._0, o._0, n._0, c._0)), 
                    r = r._1, e = e._1, o = o._1, n = n._1, c = c._1;
                    return a(_);
                }),
                sortBy: r((t, r) => a(_(r).sort((r, e) => f.cmp(t(r), t(e))))),
                sortWith: r((t, r) => a(_(r).sort((r, e) => {
                    var o = t(r)(e).ctor;
                    return "EQ" === o ? 0 : "LT" === o ? -1 : 1;
                })))
            };
        })()), O = (r((t, r) => {
            for (;;) {
                if (1 > f.cmp(t, 0)) return r;
                var e = r;
                if ("[]" === e.ctor) return r;
                t -= 1, r = e._1;
            }
        }), M.map2), S = r((t, r) => {
            for (;;) {
                var e = r;
                if ("[]" === e.ctor) return !1;
                if (t(e._0)) return !0;
                t = t, r = e._1;
            }
        }), L = (r((t, r) => !l(S, r => !t(r), r)), M.foldr), P = e((t, r, e) => {
            for (;;) {
                var o = e;
                if ("[]" === o.ctor) return r;
                var n = t, c = l(t, o._0, r);
                t = n, r = c, e = o._1;
            }
        }), I = t => u(P, r((t, r) => r + 1), 0, t), J = (r((t, r) => l(S, r => f.eq(r, t), r)), 
        J || {});
        J["::"] = M.cons;
        var D = r((t, e) => u(L, r((r, e) => ({
            ctor: "::",
            _0: t(r),
            _1: e
        })), {
            ctor: "[]"
        }, e)), F = (r((t, e) => {
            var o = r((r, e) => t(r) ? {
                ctor: "::",
                _0: r,
                _1: e
            } : e);
            return u(L, o, {
                ctor: "[]"
            }, e);
        }), e((t, r, e) => {
            var o = t(r);
            return "Just" === o.ctor ? {
                ctor: "::",
                _0: o._0,
                _1: e
            } : e;
        })), U = r((t, r) => u(L, F(t), {
            ctor: "[]"
        }, r)), j = t => u(P, r((t, r) => ({
            ctor: "::",
            _0: t,
            _1: r
        })), {
            ctor: "[]"
        }, t), q = (e((t, e, o) => {
            var n = r((r, e) => {
                var o = e;
                return "::" === o.ctor ? {
                    ctor: "::",
                    _0: l(t, r, o._0),
                    _1: e
                } : {
                    ctor: "[]"
                };
            });
            return j(u(P, n, {
                ctor: "::",
                _0: e,
                _1: {
                    ctor: "[]"
                }
            }, o));
        }), r((t, e) => "[]" === e.ctor ? t : u(L, r((t, r) => ({
            ctor: "::",
            _0: t,
            _1: r
        })), e, t))), H = t => u(L, q, {
            ctor: "[]"
        }, t), z = r((t, r) => H(l(D, t, r))), W = (r((t, e) => {
            var o = r((r, e) => {
                var o = e, n = o._0, c = o._1;
                return t(r) ? {
                    ctor: "_Tuple2",
                    _0: {
                        ctor: "::",
                        _0: r,
                        _1: n
                    },
                    _1: c
                } : {
                    ctor: "_Tuple2",
                    _0: n,
                    _1: {
                        ctor: "::",
                        _0: r,
                        _1: c
                    }
                };
            });
            return u(L, o, {
                ctor: "_Tuple2",
                _0: {
                    ctor: "[]"
                },
                _1: {
                    ctor: "[]"
                }
            }, e);
        }), r((t, e) => {
            var o = e;
            if ("[]" === o.ctor) return {
                ctor: "[]"
            };
            var n = r((r, e) => ({
                ctor: "::",
                _0: t,
                _1: {
                    ctor: "::",
                    _0: r,
                    _1: e
                }
            })), c = u(L, n, {
                ctor: "[]"
            }, o._1);
            return {
                ctor: "::",
                _0: o._0,
                _1: c
            };
        }), e((t, r, e) => {
            for (;;) {
                if (1 > f.cmp(t, 0)) return e;
                var o = r;
                if ("[]" === o.ctor) return e;
                t -= 1, r = o._1, e = {
                    ctor: "::",
                    _0: o._0,
                    _1: e
                };
            }
        })), G = r((t, r) => j(u(W, t, r, {
            ctor: "[]"
        }))), Q = e((t, r, e) => {
            if (1 > f.cmp(r, 0)) return {
                ctor: "[]"
            };
            var o = {
                ctor: "_Tuple2",
                _0: r,
                _1: e
            };
            t: do {
                r: do {
                    if ("_Tuple2" !== o.ctor) break t;
                    if ("[]" === o._1.ctor) return e;
                    if ("::" !== o._1._1.ctor) {
                        if (1 === o._0) break r;
                        break t;
                    }
                    switch (o._0) {
                      case 1:
                        break r;

                      case 2:
                        return {
                            ctor: "::",
                            _0: o._1._0,
                            _1: {
                                ctor: "::",
                                _0: o._1._1._0,
                                _1: {
                                    ctor: "[]"
                                }
                            }
                        };

                      case 3:
                        if ("::" === o._1._1._1.ctor) return {
                            ctor: "::",
                            _0: o._1._0,
                            _1: {
                                ctor: "::",
                                _0: o._1._1._0,
                                _1: {
                                    ctor: "::",
                                    _0: o._1._1._1._0,
                                    _1: {
                                        ctor: "[]"
                                    }
                                }
                            }
                        };
                        break t;

                      default:
                        if ("::" === o._1._1._1.ctor && "::" === o._1._1._1._1.ctor) {
                            var n = o._1._1._1._0, c = o._1._1._0, a = o._1._0, _ = o._1._1._1._1._0, i = o._1._1._1._1._1;
                            return f.cmp(t, 1e3) > 0 ? {
                                ctor: "::",
                                _0: a,
                                _1: {
                                    ctor: "::",
                                    _0: c,
                                    _1: {
                                        ctor: "::",
                                        _0: n,
                                        _1: {
                                            ctor: "::",
                                            _0: _,
                                            _1: l(G, r - 4, i)
                                        }
                                    }
                                }
                            } : {
                                ctor: "::",
                                _0: a,
                                _1: {
                                    ctor: "::",
                                    _0: c,
                                    _1: {
                                        ctor: "::",
                                        _0: n,
                                        _1: {
                                            ctor: "::",
                                            _0: _,
                                            _1: u(Q, t + 1, r - 4, i)
                                        }
                                    }
                                }
                            };
                        }
                        break t;
                    }
                } while (!1);
                return {
                    ctor: "::",
                    _0: o._1._0,
                    _1: {
                        ctor: "[]"
                    }
                };
            } while (!1);
            return e;
        }), V = (r((t, r) => u(Q, 0, t, r)), e((t, r, e) => {
            for (;;) {
                if (1 > f.cmp(r, 0)) return t;
                t = {
                    ctor: "::",
                    _0: e,
                    _1: t
                }, r -= 1, e = e;
            }
        })), $ = (r((t, r) => u(V, {
            ctor: "[]"
        }, t, r)), e((t, r, e) => {
            for (;;) {
                if (f.cmp(t, r) >= 1) return e;
                var o = {
                    ctor: "::",
                    _0: r,
                    _1: e
                };
                t = t, r -= 1, e = o;
            }
        })), X = r((t, r) => u($, t, r, {
            ctor: "[]"
        })), K = (r((t, r) => u(O, t, l(X, 0, I(r) - 1), r)), r((t, r) => {
            var e = r;
            return "Ok" === e.ctor ? e._0 : t;
        }), t => ({
            ctor: "Err",
            _0: t
        })), Y = (r((t, r) => {
            var e = r;
            return "Ok" === e.ctor ? t(e._0) : K(e._0);
        }), t => ({
            ctor: "Ok",
            _0: t
        })), Z = r((t, r) => {
            var e = r;
            return "Ok" === e.ctor ? Y(t(e._0)) : K(e._0);
        }), tt = (e((t, r, e) => {
            var o = {
                ctor: "_Tuple2",
                _0: r,
                _1: e
            };
            return "Ok" === o._0.ctor ? "Ok" === o._1.ctor ? Y(l(t, o._0._0, o._1._0)) : K(o._1._0) : K(o._0._0);
        }), o((t, r, e, o) => {
            var n = {
                ctor: "_Tuple3",
                _0: r,
                _1: e,
                _2: o
            };
            return "Ok" === n._0.ctor ? "Ok" === n._1.ctor ? "Ok" === n._2.ctor ? Y(u(t, n._0._0, n._1._0, n._2._0)) : K(n._2._0) : K(n._1._0) : K(n._0._0);
        }), n((t, r, e, o, n) => {
            var c = {
                ctor: "_Tuple4",
                _0: r,
                _1: e,
                _2: o,
                _3: n
            };
            return "Ok" === c._0.ctor ? "Ok" === c._1.ctor ? "Ok" === c._2.ctor ? "Ok" === c._3.ctor ? Y(s(t, c._0._0, c._1._0, c._2._0, c._3._0)) : K(c._3._0) : K(c._2._0) : K(c._1._0) : K(c._0._0);
        }), c((t, r, e, o, n, c) => {
            var a = {
                ctor: "_Tuple5",
                _0: r,
                _1: e,
                _2: o,
                _3: n,
                _4: c
            };
            return "Ok" === a._0.ctor ? "Ok" === a._1.ctor ? "Ok" === a._2.ctor ? "Ok" === a._3.ctor ? "Ok" === a._4.ctor ? Y(d(t, a._0._0, a._1._0, a._2._0, a._3._0, a._4._0)) : K(a._4._0) : K(a._3._0) : K(a._2._0) : K(a._1._0) : K(a._0._0);
        }), r((t, r) => {
            var e = r;
            return "Ok" === e.ctor ? Y(e._0) : K(t(e._0));
        }), r((t, r) => {
            var e = r;
            return "Just" === e.ctor ? Y(e._0) : K(t);
        }), (() => {
            function t(t, r) {
                for (var e = ""; t > 0; ) 1 & t && (e += r), t >>= 1, r += r;
                return e;
            }
            function o(t) {
                return K("could not convert string '" + t + "' to an Int");
            }
            function n(t) {
                return K("could not convert string '" + t + "' to a Float");
            }
            return {
                isEmpty: t => 0 === t.length,
                cons: r((t, r) => t + r),
                uncons(t) {
                    var r = t[0];
                    return r ? R(f.Tuple2(f.chr(r), t.slice(1))) : N;
                },
                append: r((t, r) => t + r),
                concat: t => M.toArray(t).join(""),
                length: t => t.length,
                map: r((t, r) => {
                    for (var e = r.split(""), o = e.length; o--; ) e[o] = t(f.chr(e[o]));
                    return e.join("");
                }),
                filter: r((t, r) => r.split("").map(f.chr).filter(t).join("")),
                reverse: t => t.split("").reverse().join(""),
                foldl: e((t, r, e) => {
                    for (var o = e.length, n = 0; o > n; ++n) r = l(t, f.chr(e[n]), r);
                    return r;
                }),
                foldr: e((t, r, e) => {
                    for (var o = e.length; o--; ) r = l(t, f.chr(e[o]), r);
                    return r;
                }),
                split: r((t, r) => M.fromArray(r.split(t))),
                join: r((t, r) => M.toArray(r).join(t)),
                repeat: r(t),
                slice: e((t, r, e) => e.slice(t, r)),
                left: r((t, r) => 1 > t ? "" : r.slice(0, t)),
                right: r((t, r) => 1 > t ? "" : r.slice(-t)),
                dropLeft: r((t, r) => 1 > t ? r : r.slice(t)),
                dropRight: r((t, r) => 1 > t ? r : r.slice(0, -t)),
                pad: e((r, e, o) => {
                    var n = (r - o.length) / 2;
                    return t(Math.ceil(n), e) + o + t(0 | n, e);
                }),
                padLeft: e((r, e, o) => t(r - o.length, e) + o),
                padRight: e((r, e, o) => o + t(r - o.length, e)),
                trim: t => t.trim(),
                trimLeft: t => t.replace(/^\s+/, ""),
                trimRight: t => t.replace(/\s+$/, ""),
                words: t => M.fromArray(t.trim().split(/\s+/g)),
                lines: t => M.fromArray(t.split(/\r\n|\r|\n/g)),
                toUpper: t => t.toUpperCase(),
                toLower: t => t.toLowerCase(),
                any: r((t, r) => {
                    for (var e = r.length; e--; ) if (t(f.chr(r[e]))) return !0;
                    return !1;
                }),
                all: r((t, r) => {
                    for (var e = r.length; e--; ) if (!t(f.chr(r[e]))) return !1;
                    return !0;
                }),
                contains: r((t, r) => r.indexOf(t) > -1),
                startsWith: r((t, r) => 0 === r.indexOf(t)),
                endsWith: r((t, r) => r.length >= t.length && r.lastIndexOf(t) === r.length - t.length),
                indexes: r((t, r) => {
                    var e = t.length;
                    if (1 > e) return M.Nil;
                    for (var o = 0, n = []; (o = r.indexOf(t, o)) > -1; ) n.push(o), o += e;
                    return M.fromArray(n);
                }),
                toInt(t) {
                    var r = t.length;
                    // if empty
                    if (0 === r) return o(t);
                    // if hex
                    var e = t[0];
                    if ("0" === e && "x" === t[1]) {
                        for (n = 2; r > n; ++n) if (("0" > (e = t[n]) || e > "9") && ("A" > e || e > "F") && ("a" > e || e > "f")) return o(t);
                        return Y(parseInt(t, 16));
                    }
                    // is decimal
                    if (e > "9" || "0" > e && "-" !== e && "+" !== e) return o(t);
                    for (var n = 1; r > n; ++n) if ("0" > (e = t[n]) || e > "9") return o(t);
                    return Y(parseInt(t, 10));
                },
                toFloat(t) {
                    // check if it is a hex, octal, or binary number
                    if (0 === t.length || /[\sxbo]/.test(t)) return n(t);
                    var r = +t;
                    // faster isNaN check
                    return r === r ? Y(r) : n(t);
                },
                toList: t => M.fromArray(t.split("").map(f.chr)),
                fromList: t => M.toArray(t).join("")
            };
        })()), rt = t => t.charCodeAt(0), et = e((t, r, e) => {
            var o = rt(e);
            return f.cmp(o, rt(t)) > -1 && 1 > f.cmp(o, rt(r));
        }), ot = (l(et, f.chr("A"), f.chr("Z")), l(et, f.chr("a"), f.chr("z")), l(et, f.chr("0"), f.chr("9")), 
        l(et, f.chr("0"), f.chr("7")), tt.toInt), nt = tt.dropLeft, ct = tt.split, at = tt.concat, _t = r((t, r) => {
            var e = r;
            return {
                ctor: "_Tuple2",
                _0: e._0,
                _1: t(e._1)
            };
        }), it = r((t, r) => {
            var e = r;
            return {
                ctor: "_Tuple2",
                _0: t(e._0),
                _1: e._1
            };
        }), lt = (() => {
            function t() {
                return () => {};
            }
            // INITIALIZE A PROGRAM
            function o(t, r, e, o) {
                function c(t) {
                    ut.rawSend(u, t);
                }
                // ambient state
                var _, i = {}, u = a(ut.nativeBinding(r => {
                    var n = t._0;
                    _ = o(c, n);
                    var a = t._1, l = e(n);
                    d(i, a, l), r(ut.succeed(n));
                }), (t, o) => ut.nativeBinding(n => {
                    var c = l(r, t, o);
                    _(o = c._0);
                    var a = c._1, u = e(o);
                    d(i, a, u), n(ut.succeed(o));
                })), s = n(i, c);
                return s ? {
                    ports: s
                } : {};
            }
            function n(t, r) {
                var e;
                // setup all necessary effect managers
                for (var o in y) {
                    var n = y[o];
                    n.isForeign && ((e = e || {})[o] = "cmd" === n.tag ? m(o) : b(o, r)), t[o] = c(n, r);
                }
                return e;
            }
            function c(t, r) {
                var e = {
                    main: r,
                    self: void 0
                }, o = t.tag, n = t.onEffects, c = t.onSelfMsg, _ = a(t.init, (t, r) => {
                    if ("self" === t.ctor) return u(c, e, t._0, r);
                    var a = t._0;
                    switch (o) {
                      case "cmd":
                        return u(n, e, a.cmds, r);

                      case "sub":
                        return u(n, e, a.subs, r);

                      case "fx":
                        return s(n, e, a.cmds, a.subs, r);
                    }
                });
                return e.self = _, _;
            }
            // HELPER for STATEFUL LOOPS
            function a(t, r) {
                function e(t) {
                    var n = ut.receive(e => r(e, t));
                    return l(o, e, n);
                }
                var o = ut.andThen, n = l(o, e, t);
                return ut.rawSpawn(n);
            }
            // BAGS
            function _(t) {
                return r => ({
                    type: "leaf",
                    home: t,
                    value: r
                });
            }
            function i(t) {
                return {
                    type: "node",
                    branches: t
                };
            }
            // PIPE BAGS INTO EFFECT MANAGERS
            function d(t, r, e) {
                var o = {};
                p(!0, r, o, null), p(!1, e, o, null);
                for (var n in t) {
                    var c = n in o ? o[n] : {
                        cmds: M.Nil,
                        subs: M.Nil
                    };
                    ut.rawSend(t[n], {
                        ctor: "fx",
                        _0: c
                    });
                }
            }
            function p(t, r, e, o) {
                switch (r.type) {
                  case "leaf":
                    var n = r.home, c = g(t, n, o, r.value);
                    return void (e[n] = v(t, c, e[n]));

                  case "node":
                    for (var a = r.branches; "[]" !== a.ctor; ) p(t, a._0, e, o), a = a._1;
                    return;

                  case "map":
                    return void p(t, r.tree, e, {
                        tagger: r.tagger,
                        rest: o
                    });
                }
            }
            function g(t, r, e, o) {
                return l(t ? y[r].cmdMap : y[r].subMap, t => {
                    for (var r = e; r; ) t = r.tagger(t), r = r.rest;
                    return t;
                }, o);
            }
            function v(t, r, e) {
                return e = e || {
                    cmds: M.Nil,
                    subs: M.Nil
                }, t ? (e.cmds = M.Cons(r, e.cmds), e) : (e.subs = M.Cons(r, e.subs), e);
            }
            // PORTS
            function h(t) {
                if (t in y) throw Error("There can only be one port named `" + t + "`, but your program has multiple.");
            }
            function m(t) {
                var r = [], o = y[t].converter, n = ut.succeed(null);
                return y[t].init = n, y[t].onEffects = e((t, e) => {
                    for (;"[]" !== e.ctor; ) {
                        for (var c = r, a = o(e._0), _ = 0; c.length > _; _++) c[_](a);
                        e = e._1;
                    }
                    return n;
                }), {
                    subscribe(t) {
                        r.push(t);
                    },
                    unsubscribe(t) {
                        var e = (// copy subs into a new array in case unsubscribe is called within a
                        // subscribed callback
                        r = r.slice()).indexOf(t);
                        0 > e || r.splice(e, 1);
                    }
                };
            }
            function b(t, r) {
                function o(t, r) {
                    return a = r, s;
                }
                function n(t) {
                    for (var e = a; "[]" !== e.ctor; ) r(e._0(t)), e = e._1;
                }
                var c = [], a = M.Nil, _ = y[t].converter, i = (t, r) => {
                    for (var e = o(0, r), a = 0; c.length > a; a++) n(c[a]);
                    // to release objects held in queue
                    return c = null, u = n, i = o, e;
                }, u = // PUBLIC API
                t => {
                    c.push(t);
                }, s = ut.succeed(null);
                return y[t].init = s, y[t].onEffects = e((t, r, e) => i(t, r, e)), {
                    send(r) {
                        var e = l(Lr, _, r);
                        if ("Err" === e.ctor) throw Error("Trying to send an unexpected type of value through port `" + t + "`:\n" + e._0);
                        u(e._0);
                    }
                };
            }
            // EFFECT MANAGERS
            var y = {}, k = r((t, r) => r), T = r((t, r) => e => t(r(e)));
            return {
                // routers
                sendToApp: r((t, r) => ut.nativeBinding(e => {
                    t.main(r), e(ut.succeed(f.Tuple0));
                })),
                sendToSelf: r((t, r) => l(ut.send, t.self, {
                    ctor: "self",
                    _0: r
                })),
                // global setup
                effectManagers: y,
                outgoingPort: // OUTGOING PORTS
                (t, r) => (h(t), y[t] = {
                    tag: "cmd",
                    cmdMap: k,
                    converter: r,
                    isForeign: !0
                }, _(t)),
                incomingPort: // INCOMING PORTS
                (t, r) => (h(t), y[t] = {
                    tag: "sub",
                    subMap: T,
                    converter: r,
                    isForeign: !0
                }, _(t)),
                htmlToProgram() {
                    var t = i(M.Nil), e = f.Tuple2(f.Tuple0, t);
                    return Ie({
                        init: e,
                        view: () => main,
                        update: r(() => e),
                        subscriptions: () => t
                    });
                },
                program: // PROGRAMS
                r => () => (e, n) => {
                    e.worker = (e => {
                        if (void 0 !== e) throw Error("The `" + n + "` module does not need flags.\nCall " + n + ".worker() with no arguments and you should be all set!");
                        return o(r.init, r.update, r.subscriptions, t);
                    });
                },
                programWithFlags: r => e => (n, c) => {
                    n.worker = (n => {
                        if (void 0 === e) throw Error("Are you trying to sneak a Never value into Elm? Trickster!\nIt looks like " + c + ".main is defined with `programWithFlags` but has type `Program Never`.\nUse `program` instead if you do not want flags.");
                        var a = l(Nr.run, e, n);
                        if ("Err" === a.ctor) throw Error(c + ".worker(...) was called with an unexpected argument.\nI tried to convert it to an Elm value, but ran into this problem:\n\n" + a._0);
                        return o(r.init(a._0), r.update, r.subscriptions, t);
                    });
                },
                initialize: o,
                // effect bags
                leaf: _,
                batch: i,
                map: r((t, r) => ({
                    type: "map",
                    tagger: t,
                    tree: r
                }))
            };
        })(), ut = (() => {
            // TASKS
            function t(t) {
                return {
                    ctor: "_Task_succeed",
                    value: t
                };
            }
            function e(t) {
                return {
                    ctor: "_Task_nativeBinding",
                    callback: t,
                    cancel: null
                };
            }
            // PROCESSES
            function o(t) {
                var r = {
                    ctor: "_Process",
                    id: f.guid(),
                    root: t,
                    stack: null,
                    mailbox: []
                };
                return a(r), r;
            }
            function n(t, r) {
                t.mailbox.push(r), a(t);
            }
            // STEP PROCESSES
            function c(t, r) {
                for (;i > t; ) {
                    var e = r.root.ctor;
                    if ("_Task_succeed" !== e) if ("_Task_fail" !== e) if ("_Task_andThen" !== e) if ("_Task_onError" !== e) {
                        if ("_Task_nativeBinding" === e) {
                            r.root.cancel = r.root.callback(t => {
                                r.root = t, a(r);
                            });
                            break;
                        }
                        if ("_Task_receive" !== e) throw Error(e);
                        var o = r.mailbox;
                        if (0 === o.length) break;
                        r.root = r.root.callback(o.shift()), ++t;
                    } else r.stack = {
                        ctor: "_Task_onError",
                        callback: r.root.callback,
                        rest: r.stack
                    }, r.root = r.root.task, ++t; else r.stack = {
                        ctor: "_Task_andThen",
                        callback: r.root.callback,
                        rest: r.stack
                    }, r.root = r.root.task, ++t; else {
                        for (;r.stack && "_Task_andThen" === r.stack.ctor; ) r.stack = r.stack.rest;
                        if (null === r.stack) break;
                        r.root = r.stack.callback(r.root.value), r.stack = r.stack.rest, ++t;
                    } else {
                        for (;r.stack && "_Task_onError" === r.stack.ctor; ) r.stack = r.stack.rest;
                        if (null === r.stack) break;
                        r.root = r.stack.callback(r.root.value), r.stack = r.stack.rest, ++t;
                    }
                }
                return i > t ? t + 1 : (a(r), t);
            }
            function a(t) {
                u.push(t), l || (setTimeout(_, 0), l = !0);
            }
            function _() {
                for (var t, r = 0; i > r && (t = u.shift()); ) t.root && (r = c(r, t));
                t ? setTimeout(_, 0) : l = !1;
            }
            var i = 1e4, l = !1, u = [];
            return {
                succeed: t,
                fail: t => ({
                    ctor: "_Task_fail",
                    value: t
                }),
                nativeBinding: e,
                andThen: r((t, r) => ({
                    ctor: "_Task_andThen",
                    callback: t,
                    task: r
                })),
                onError: r((t, r) => ({
                    ctor: "_Task_onError",
                    callback: t,
                    task: r
                })),
                receive: t => ({
                    ctor: "_Task_receive",
                    callback: t
                }),
                spawn: r => e(e => {
                    e(t(o(r)));
                }),
                kill: r => e(e => {
                    var o = r.root;
                    "_Task_nativeBinding" === o.ctor && o.cancel && o.cancel(), r.root = null, e(t(f.Tuple0));
                }),
                sleep: r => e(e => {
                    var o = setTimeout(() => {
                        e(t(f.Tuple0));
                    }, r);
                    return () => {
                        clearTimeout(o);
                    };
                }),
                send: r((r, o) => e(e => {
                    n(r, o), e(t(f.Tuple0));
                })),
                rawSpawn: o,
                rawSend: n
            };
        })(), st = lt.batch, dt = st({
            ctor: "[]"
        }), pt = pt || {};
        pt["!"] = r((t, r) => ({
            ctor: "_Tuple2",
            _0: t,
            _1: st(r)
        }));
        var gt = lt.map, ft = lt.batch, vt = ft({
            ctor: "[]"
        }), ht = lt.map, mt = lt.sendToSelf, bt = lt.sendToApp, yt = (r((t, r) => e => r(t(e))), 
        m(dt), r((t, r) => st(l(D, t => t(r), t))), e((t, r, e) => st({
            ctor: "::",
            _0: t(e),
            _1: {
                ctor: "::",
                _0: r(e),
                _1: {
                    ctor: "[]"
                }
            }
        })), (() => {
            var t = r((t, r) => {
                var e = t, o = r;
                return l(pt["!"], {
                    ctor: "::",
                    _0: e._0,
                    _1: o._0
                }, {
                    ctor: "::",
                    _0: e._1,
                    _1: {
                        ctor: "::",
                        _0: o._1,
                        _1: {
                            ctor: "[]"
                        }
                    }
                });
            });
            l(L, t, {
                ctor: "_Tuple2",
                _0: {
                    ctor: "[]"
                },
                _1: dt
            });
        })(), r((t, r) => {
            var e = r;
            return {
                ctor: "_Tuple2",
                _0: e._0,
                _1: l(gt, t, e._1)
            };
        })), kt = (r((t, r) => {
            var e = r, o = e._0;
            return l(pt["!"], o, {
                ctor: "::",
                _0: e._1,
                _1: {
                    ctor: "::",
                    _0: t(o),
                    _1: {
                        ctor: "[]"
                    }
                }
            });
        }), r((t, r) => {
            var e = r;
            return l(pt["!"], e._0, {
                ctor: "::",
                _0: t,
                _1: {
                    ctor: "::",
                    _0: e._1,
                    _1: {
                        ctor: "[]"
                    }
                }
            });
        })), Tt = v(b), wt = r((t, r) => {
            var e = r, o = t(e._0), n = o._0, c = o._1;
            return l(pt["!"], n, {
                ctor: "::",
                _0: e._1,
                _1: {
                    ctor: "::",
                    _0: c,
                    _1: {
                        ctor: "[]"
                    }
                }
            });
        }), xt = xt || {};
        xt["<<<"] = e((t, r, e) => l(wt, t, r(e))), (xt = xt || {})[">>>"] = h(r((t, r) => l(xt["<<<"], t, r))), 
        wt(b);
        var Bt = l(h, r((t, r) => ({
            ctor: "_Tuple2",
            _0: t,
            _1: r
        })), dt), Nt = (c((t, r, e, o, n, c) => {
            var a = r, _ = e, i = o, u = n, s = c;
            return l(pt["!"], d(t, a._0, _._0, i._0, u._0, s._0), {
                ctor: "::",
                _0: a._1,
                _1: {
                    ctor: "::",
                    _0: _._1,
                    _1: {
                        ctor: "::",
                        _0: i._1,
                        _1: {
                            ctor: "::",
                            _0: u._1,
                            _1: {
                                ctor: "::",
                                _0: s._1,
                                _1: {
                                    ctor: "[]"
                                }
                            }
                        }
                    }
                }
            });
        }), n((t, r, e, o, n) => {
            var c = r, a = e, _ = o, i = n;
            return l(pt["!"], s(t, c._0, a._0, _._0, i._0), {
                ctor: "::",
                _0: c._1,
                _1: {
                    ctor: "::",
                    _0: a._1,
                    _1: {
                        ctor: "::",
                        _0: _._1,
                        _1: {
                            ctor: "::",
                            _0: i._1,
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                }
            });
        }), o((t, r, e, o) => {
            var n = r, c = e, a = o;
            return l(pt["!"], u(t, n._0, c._0, a._0), {
                ctor: "::",
                _0: n._1,
                _1: {
                    ctor: "::",
                    _0: c._1,
                    _1: {
                        ctor: "::",
                        _0: a._1,
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            });
        })), Et = (e((t, r, e) => {
            var o = r, n = e;
            return l(pt["!"], l(t, o._0, n._0), {
                ctor: "::",
                _0: o._1,
                _1: {
                    ctor: "::",
                    _0: n._1,
                    _1: {
                        ctor: "[]"
                    }
                }
            });
        }), e((t, r, e) => {
            var o = e;
            return {
                ctor: "_Tuple2",
                _0: r(o._0),
                _1: l(gt, t, o._1)
            };
        })), Rt = r((t, r) => {
            var e = t, o = r;
            return l(pt["!"], o._0(e._0), {
                ctor: "::",
                _0: o._1,
                _1: {
                    ctor: "::",
                    _0: e._1,
                    _1: {
                        ctor: "[]"
                    }
                }
            });
        }), At = (v(h(Rt)), r((t, r) => {
            var e = r;
            return {
                ctor: "_Tuple2",
                _0: t(e._0),
                _1: e._1
            };
        })), Ct = b, Mt = (l(P, r((t, r) => e => r(t(e))), Ct), l(L, r((t, r) => e => t(r(e))), Ct), 
        (() => {
            function t(t, r) {
                for (var e = r.height; e > 0; e--) {
                    for (var o = t >> 5 * e; t >= r.lengths[o]; ) o++;
                    o > 0 && (t -= r.lengths[o - 1]), r = r.table[o];
                }
                return r.table[t];
            }
            function o(t, r, e) {
                if (0 === (e = N(e)).height) e.table[t] = r; else {
                    var n = R(t, e);
                    n > 0 && (t -= e.lengths[n - 1]), e.table[n] = o(t, r, e.table[n]);
                }
                return e;
            }
            function n(t, r, e, o) {
                if (0 === r) {
                    for (var c = Array((o - e) % (P + 1)), a = 0; c.length > a; a++) c[a] = t(e + a);
                    return {
                        ctor: "_Array",
                        height: 0,
                        table: c
                    };
                }
                for (var _ = Math.pow(P, r), c = Array(Math.ceil((o - e) / _)), i = Array(c.length), a = 0; c.length > a; a++) c[a] = n(t, r - 1, e + a * _, Math.min(e + (a + 1) * _, o)), 
                i[a] = E(c[a]) + (a > 0 ? i[a - 1] : 0);
                return {
                    ctor: "_Array",
                    height: r,
                    table: c,
                    lengths: i
                };
            }
            // Push a node into a higher node as a child.
            function c(t, r) {
                var e = t.height;
                // Maybe the node on this height does not exist.
                if (r.length === e) {
                    var o = {
                        ctor: "_Array",
                        height: e + 1,
                        table: [],
                        lengths: []
                    };
                    r.push(o);
                }
                r[e].table.push(t);
                var n = E(t);
                r[e].lengths.length > 0 && (n += r[e].lengths[r[e].lengths.length - 1]), r[e].lengths.push(n), 
                r[e].table.length === P && (c(r[e], r), r[e] = {
                    ctor: "_Array",
                    height: e + 1,
                    table: [],
                    lengths: []
                });
            }
            // Recursively tries to push an item to the bottom-right most
            // tree possible. If there is no space left for the item,
            // null will be returned.
            function a(t, r) {
                // Handle resursion stop at leaf level.
                if (0 === r.height) return P > r.table.length ? ((n = {
                    ctor: "_Array",
                    height: 0,
                    table: r.table.slice()
                }).table.push(t), n) : null;
                // Recursively push
                var e = a(t, x(r));
                // There was space in the bottom right tree, so the slot will
                // be updated.
                if (null !== e) return (n = N(r)).table[n.table.length - 1] = e, n.lengths[n.lengths.length - 1]++, 
                n;
                // When there was no space left, check if there is space left
                // for a new slot with a tree which contains only the item
                // at the bottom.
                if (P > r.table.length) {
                    var o = A(t, r.height - 1), n = N(r);
                    return n.table.push(o), n.lengths.push(n.lengths[n.lengths.length - 1] + E(o)), 
                    n;
                }
                return null;
            }
            function _(t, r) {
                for (var e = r.table.length - 1; e >= 0; e--) t = 0 === r.height ? M.Cons(r.table[e], t) : _(t, r.table[e]);
                return t;
            }
            // Maps a function over the elements of an array.
            function i(t, r) {
                var e = {
                    ctor: "_Array",
                    height: r.height,
                    table: Array(r.table.length)
                };
                r.height > 0 && (e.lengths = r.lengths);
                for (var o = 0; r.table.length > o; o++) e.table[o] = 0 === r.height ? t(r.table[o]) : i(t, r.table[o]);
                return e;
            }
            function u(t, r, e) {
                var o = {
                    ctor: "_Array",
                    height: r.height,
                    table: Array(r.table.length)
                };
                r.height > 0 && (o.lengths = r.lengths);
                for (var n = 0; r.table.length > n; n++) o.table[n] = 0 === r.height ? l(t, e + n, r.table[n]) : u(t, r.table[n], 0 == n ? e : e + r.lengths[n - 1]);
                return o;
            }
            function s(t, r, e) {
                if (0 === e.height) for (o = 0; e.table.length > o; o++) r = l(t, e.table[o], r); else for (var o = 0; e.table.length > o; o++) r = s(t, r, e.table[o]);
                return r;
            }
            function d(t, r, e) {
                if (0 === e.height) for (o = e.table.length; o--; ) r = l(t, e.table[o], r); else for (var o = e.table.length; o--; ) r = d(t, r, e.table[o]);
                return r;
            }
            function p(t, r) {
                if (t === E(r)) return r;
                // Handle leaf level.
                if (0 === r.height) return (n = {
                    ctor: "_Array",
                    height: 0
                }).table = r.table.slice(0, t), n;
                // Slice the right recursively.
                var e = R(t, r), o = p(t - (e > 0 ? r.lengths[e - 1] : 0), r.table[e]);
                // Maybe the a node is not even needed, as sliced contains the whole slice.
                if (0 === e) return o;
                // Create new node.
                var n = {
                    ctor: "_Array",
                    height: r.height,
                    table: r.table.slice(0, e),
                    lengths: r.lengths.slice(0, e)
                };
                return o.table.length > 0 && (n.table[e] = o, n.lengths[e] = E(o) + (e > 0 ? n.lengths[e - 1] : 0)), 
                n;
            }
            function g(t, r) {
                if (0 === t) return r;
                // Handle leaf level.
                if (0 === r.height) return (n = {
                    ctor: "_Array",
                    height: 0
                }).table = r.table.slice(t, r.table.length + 1), n;
                // Slice the left recursively.
                var e = R(t, r), o = g(t - (e > 0 ? r.lengths[e - 1] : 0), r.table[e]);
                // Maybe the a node is not even needed, as sliced contains the whole slice.
                if (e === r.table.length - 1) return o;
                // Create new node.
                var n = {
                    ctor: "_Array",
                    height: r.height,
                    table: r.table.slice(e, r.table.length + 1),
                    lengths: Array(r.table.length - e)
                };
                n.table[0] = o;
                for (var c = 0, a = 0; n.table.length > a; a++) c += E(n.table[a]), n.lengths[a] = c;
                return n;
            }
            // Returns an array of two nodes; right and left. One node _may_ be empty.
            function f(t, r) {
                if (0 === t.height && 0 === r.height) return [ t, r ];
                if (1 !== t.height || 1 !== r.height) if (t.height === r.height) t = N(t), r = N(r), 
                v(t, (e = f(x(t), B(r)))[1]), h(r, e[0]); else if (t.height > r.height) v(t = N(t), (e = f(x(t), r))[0]), 
                r = C(e[1], e[1].height + 1); else {
                    var e = f(t, B(r = N(r))), o = 0 === e[0].table.length ? 0 : 1, n = 0 === o ? 1 : 0;
                    h(r, e[o]), t = C(e[n], e[n].height + 1);
                }
                // Check if balancing is needed and return based on that.
                if (0 === t.table.length || 0 === r.table.length) return [ t, r ];
                var c = m(t, r);
                return c > I ? w(t, r, c) : [ t, r ];
            }
            // Helperfunctions for append_. Replaces a child node at the side of the parent.
            function v(t, r) {
                var e = t.table.length - 1;
                t.table[e] = r, t.lengths[e] = E(r), t.lengths[e] += e > 0 ? t.lengths[e - 1] : 0;
            }
            function h(t, r) {
                if (r.table.length > 0) {
                    t.table[0] = r, t.lengths[0] = E(r);
                    for (var e = E(t.table[0]), o = 1; t.lengths.length > o; o++) e += E(t.table[o]), 
                    t.lengths[o] = e;
                } else {
                    for (t.table.shift(), o = 1; t.lengths.length > o; o++) t.lengths[o] = t.lengths[o] - t.lengths[0];
                    t.lengths.shift();
                }
            }
            // Returns the extra search steps for E. Refer to the paper.
            function m(t, r) {
                for (var e = 0, o = 0; t.table.length > o; o++) e += t.table[o].table.length;
                for (o = 0; r.table.length > o; o++) e += r.table[o].table.length;
                return t.table.length + r.table.length - (Math.floor((e - 1) / P) + 1);
            }
            // get2, set2 and saveSlot are helpers for accessing elements over two arrays.
            function b(t, r, e) {
                return t.length > e ? t[e] : r[e - t.length];
            }
            function y(t, r, e, o) {
                t.length > e ? t[e] = o : r[e - t.length] = o;
            }
            function k(t, r, e, o) {
                y(t.table, r.table, e, o);
                var n = 0 === e || e === t.lengths.length ? 0 : b(t.lengths, t.lengths, e - 1);
                y(t.lengths, r.lengths, e, n + E(o));
            }
            // Creates a node or leaf with a given length at their arrays for perfomance.
            // Is only used by shuffle.
            function T(t, r) {
                0 > r && (r = 0);
                var e = {
                    ctor: "_Array",
                    height: t,
                    table: Array(r)
                };
                return t > 0 && (e.lengths = Array(r)), e;
            }
            // Returns an array of two balanced nodes.
            function w(t, r, e) {
                for (var o = T(t.height, Math.min(P, t.table.length + r.table.length - e)), n = T(t.height, o.table.length - (t.table.length + r.table.length - e)), c = 0; b(t.table, r.table, c).table.length % P == 0; ) y(o.table, n.table, c, b(t.table, r.table, c)), 
                y(o.lengths, n.lengths, c, b(t.lengths, r.lengths, c)), c++;
                // If the current slot is still containing data, then there will be at
                // least one more write, so we do not break this loop yet.
                for (// Pulling items from left to right, caching in a slot before writing
                // it into the new nodes.
                var a = c, _ = new T(t.height - 1, 0), i = 0; e > c - a - (_.table.length > 0 ? 1 : 0); ) {
                    // Find out the max possible items for copying.
                    var l = b(t.table, r.table, c), u = Math.min(P - _.table.length, l.table.length);
                    if (// Copy and adjust size table.
                    _.table = _.table.concat(l.table.slice(i, u)), _.height > 0) for (var s = _.lengths.length, d = s; s + u - i > d; d++) _.lengths[d] = E(_.table[d]), 
                    _.lengths[d] += d > 0 ? _.lengths[d - 1] : 0;
                    i += u, // Only proceed to next slots[i] if the current one was
                    // fully copied.
                    l.table.length > u || (c++, i = 0), // Only create a new slot if the current one is filled up.
                    _.table.length === P && (k(o, n, a, _), _ = T(t.height - 1, 0), a++);
                }
                // Shift the untouched slots to the left
                for (// Cleanup after the loop. Copy the last slot into the new nodes.
                _.table.length > 0 && (k(o, n, a, _), a++); t.table.length + r.table.length > c; ) k(o, n, a, b(t.table, r.table, c)), 
                c++, a++;
                return [ o, n ];
            }
            // Navigation functions
            function x(t) {
                return t.table[t.table.length - 1];
            }
            function B(t) {
                return t.table[0];
            }
            // Copies a node for updating. Note that you should not use this if
            // only updating only one of "table" or "lengths" for performance reasons.
            function N(t) {
                var r = {
                    ctor: "_Array",
                    height: t.height,
                    table: t.table.slice()
                };
                return t.height > 0 && (r.lengths = t.lengths.slice()), r;
            }
            // Returns how many items are in the tree.
            function E(t) {
                return 0 === t.height ? t.table.length : t.lengths[t.lengths.length - 1];
            }
            // Calculates in which slot of "table" the item probably is, then
            // find the exact slot via forward searching in  "lengths". Returns the index.
            function R(t, r) {
                for (var e = t >> 5 * r.height; t >= r.lengths[e]; ) e++;
                return e;
            }
            // Recursively creates a tree with a given height containing
            // only the given item.
            function A(t, r) {
                return 0 === r ? {
                    ctor: "_Array",
                    height: 0,
                    table: [ t ]
                } : {
                    ctor: "_Array",
                    height: r,
                    table: [ A(t, r - 1) ],
                    lengths: [ 1 ]
                };
            }
            // Recursively creates a tree that contains the given tree.
            function C(t, r) {
                return r === t.height ? t : {
                    ctor: "_Array",
                    height: r,
                    table: [ C(t, r - 1) ],
                    lengths: [ E(t) ]
                };
            }
            // Emphasizes blood brotherhood beneath two trees.
            function O(t, r) {
                return {
                    ctor: "_Array",
                    height: t.height + 1,
                    table: [ t, r ],
                    lengths: [ E(t), E(t) + E(r) ]
                };
            }
            function S(t, r, e) {
                for (var o = 0; e.table.length > o; o++) 0 === e.height ? t[r + o] = e.table[o] : S(t, r + (0 === o ? 0 : e.lengths[o - 1]), e.table[o]);
            }
            function L(t, r, e, o) {
                if (0 === r) return {
                    ctor: "_Array",
                    height: 0,
                    table: t.slice(e, o)
                };
                for (var n = Math.pow(P, r), c = Array(Math.ceil((o - e) / n)), a = Array(c.length), _ = 0; c.length > _; _++) c[_] = L(t, r - 1, e + _ * n, Math.min(e + (_ + 1) * n, o)), 
                a[_] = E(c[_]) + (_ > 0 ? a[_ - 1] : 0);
                return {
                    ctor: "_Array",
                    height: r,
                    table: c,
                    lengths: a
                };
            }
            // A RRB-Tree has two distinct data types.
            // Leaf -> "height"  is always 0
            //         "table"   is an array of elements
            // Node -> "height"  is always greater than 0
            //         "table"   is an array of child nodes
            //         "lengths" is an array of accumulated lengths of the child nodes
            // M is the maximal table size. 32 seems fast. E is the allowed increase
            // of search steps when concatting to find an index. Lower values will
            // decrease balancing, but will increase search steps.
            var P = 32, I = 2, J = {
                ctor: "_Array",
                height: 0,
                table: []
            };
            return {
                empty: J,
                fromList(t) {
                    if ("[]" === t.ctor) return J;
                    for (// Allocate M sized blocks (table) and write list elements to it.
                    var r = Array(P), e = [], o = 0; "[]" !== t.ctor; ) r[o] = t._0, t = t._1, // table is full, so we can push a leaf containing it into the
                    // next node.
                    ++o === P && (c(n = {
                        ctor: "_Array",
                        height: 0,
                        table: r
                    }, e), r = Array(P), o = 0);
                    // Maybe there is something left on the table.
                    if (o > 0) {
                        var n = {
                            ctor: "_Array",
                            height: 0,
                            table: r.splice(0, o)
                        };
                        c(n, e);
                    }
                    // Go through all of the nodes and eventually push them into higher nodes.
                    for (var a = 0; e.length - 1 > a; a++) e[a].table.length > 0 && c(e[a], e);
                    var _ = e[e.length - 1];
                    return _.height > 0 && 1 === _.table.length ? _.table[0] : _;
                },
                toList: // Converts an array into a list of elements.
                t => _(M.Nil, t),
                initialize: r((t, r) => t > 0 ? n(r, Math.floor(Math.log(t) / Math.log(P)), 0, t) : J),
                append: r(// Appends two trees.
                (t, r) => {
                    if (0 === t.table.length) return r;
                    if (0 === r.table.length) return t;
                    var e = f(t, r);
                    // Check if both nodes can be crunshed together.
                    if (P >= e[0].table.length + e[1].table.length) {
                        if (0 === e[0].table.length) return e[1];
                        if (0 === e[1].table.length) return e[0];
                        if (// Adjust .table and .lengths
                        e[0].table = e[0].table.concat(e[1].table), e[0].height > 0) {
                            for (var o = E(e[0]), n = 0; e[1].lengths.length > n; n++) e[1].lengths[n] += o;
                            e[0].lengths = e[0].lengths.concat(e[1].lengths);
                        }
                        return e[0];
                    }
                    if (e[0].height > 0) {
                        var c = m(t, r);
                        c > I && (e = w(e[0], e[1], c));
                    }
                    return O(e[0], e[1]);
                }),
                push: r(// Pushes an item via push_ to the bottom right of a tree.
                (t, r) => {
                    var e = a(t, r);
                    return null !== e ? e : O(r, A(t, r.height));
                }),
                slice: e(// TODO: currently, it slices the right, then the left. This can be
                // optimized.
                (t, r, e) => (0 > t && (t += E(e)), 0 > r && (r += E(e)), g(t, p(r, e)))),
                get: r((r, e) => {
                    if (0 > r || r >= E(e)) throw Error("Index " + r + " is out of range. Check the length of your array first or use getMaybe or getWithDefault.");
                    return t(r, e);
                }),
                set: e(// Sets the value at the index i. Only the nodes leading to i will get
                // copied and updated.
                (t, r, e) => 0 > t || E(e) <= t ? e : o(t, r, e)),
                map: r(i),
                indexedMap: r(// Maps a function over the elements with their index as first argument.
                (t, r) => u(t, r, 0)),
                foldl: e(s),
                foldr: e(d),
                length: E,
                toJSArray(t) {
                    var r = Array(E(t));
                    return S(r, 0, t), r;
                },
                fromJSArray: t => 0 === t.length ? J : L(t, Math.floor(Math.log(t.length) / Math.log(P)), 0, t.length)
            };
        })()), Ot = Mt.set, St = r((t, r) => 1 > f.cmp(0, t) && 0 > f.cmp(t, Mt.length(r)) ? R(l(Mt.get, t, r)) : N), Lt = Mt.push, Pt = Mt.empty, It = (r((t, e) => {
            var o = r((r, e) => t(r) ? l(Mt.push, r, e) : e);
            return u(Mt.foldl, o, Mt.empty, e);
        }), Mt.indexedMap), Jt = Mt.toList, Dt = Mt.initialize, Ft = (r((t, r) => l(Dt, t, m(r))), 
        e((t, r, e) => {
            for (;;) {
                var o = e;
                if ("RBEmpty_elm_builtin" === o.ctor) return r;
                var n = t, c = u(t, o._1, o._2, u(Ft, t, r, o._4));
                t = n, r = c, e = o._3;
            }
        })), Ut = t => u(Ft, e((t, r, e) => ({
            ctor: "::",
            _0: {
                ctor: "_Tuple2",
                _0: t,
                _1: r
            },
            _1: e
        })), {
            ctor: "[]"
        }, t), jt = e((t, r, e) => {
            for (;;) {
                var o = e;
                if ("RBEmpty_elm_builtin" === o.ctor) return r;
                var n = t, c = u(t, o._1, o._2, u(jt, t, r, o._3));
                t = n, r = c, e = o._4;
            }
        }), qt = c((t, o, n, c, a, _) => {
            var i = e((r, e, c) => {
                for (;;) {
                    var a = c, _ = a._1, i = a._0, l = i;
                    if ("[]" === l.ctor) return {
                        ctor: "_Tuple2",
                        _0: i,
                        _1: u(n, r, e, _)
                    };
                    var d = l._1, p = l._0._1, g = l._0._0;
                    if (f.cmp(g, r) >= 0) return f.cmp(g, r) > 0 ? {
                        ctor: "_Tuple2",
                        _0: i,
                        _1: u(n, r, e, _)
                    } : {
                        ctor: "_Tuple2",
                        _0: d,
                        _1: s(o, g, p, e, _)
                    };
                    r = r, e = e, c = {
                        ctor: "_Tuple2",
                        _0: d,
                        _1: u(t, g, p, _)
                    };
                }
            }), l = u(jt, i, {
                ctor: "_Tuple2",
                _0: Ut(c),
                _1: _
            }, a), d = l._0, p = l._1;
            return u(P, r((r, e) => {
                var o = r;
                return u(t, o._0, o._1, e);
            }), p, d);
        }), Ht = o((t, r, e, o) => w.crash(at({
            ctor: "::",
            _0: "Internal red-black tree invariant violated, expected ",
            _1: {
                ctor: "::",
                _0: t,
                _1: {
                    ctor: "::",
                    _0: " and got ",
                    _1: {
                        ctor: "::",
                        _0: k(r),
                        _1: {
                            ctor: "::",
                            _0: "/",
                            _1: {
                                ctor: "::",
                                _0: e,
                                _1: {
                                    ctor: "::",
                                    _0: "/",
                                    _1: {
                                        ctor: "::",
                                        _0: o,
                                        _1: {
                                            ctor: "::",
                                            _0: "\nPlease report this bug to <https://github.com/elm-lang/core/issues>",
                                            _1: {
                                                ctor: "[]"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }))), zt = t => {
            var r = t;
            t: do {
                if ("RBNode_elm_builtin" === r.ctor) {
                    if ("BBlack" === r._0.ctor) return !0;
                    break t;
                }
                if ("LBBlack" === r._0.ctor) return !0;
                break t;
            } while (!1);
            return !1;
        }, Wt = r((t, r) => {
            for (;;) {
                var e = r;
                if ("RBEmpty_elm_builtin" === e.ctor) return t;
                t = l(Wt, t + 1, e._4), r = e._3;
            }
        }), Gt = r((t, r) => {
            t: for (;;) {
                var e = r;
                if ("RBEmpty_elm_builtin" === e.ctor) return N;
                switch (l(T, t, e._1).ctor) {
                  case "LT":
                    t = t, r = e._3;
                    continue t;

                  case "EQ":
                    return R(e._2);

                  default:
                    t = t, r = e._4;
                    continue t;
                }
            }
        }), Qt = r((t, r) => "Just" === l(Gt, t, r).ctor), Vt = e((t, r, e) => {
            for (;;) {
                var o = e;
                if ("RBEmpty_elm_builtin" === o.ctor) return {
                    ctor: "_Tuple2",
                    _0: t,
                    _1: r
                };
                t = o._1, r = o._2, e = o._4;
            }
        }), $t = {
            ctor: "NBlack"
        }, Xt = {
            ctor: "BBlack"
        }, Kt = {
            ctor: "Black"
        }, Yt = t => {
            var r = t;
            if ("RBNode_elm_builtin" === r.ctor) {
                var e = r._0;
                return f.eq(e, Kt) || f.eq(e, Xt);
            }
            return !0;
        }, Zt = {
            ctor: "Red"
        }, tr = t => {
            switch (t.ctor) {
              case "Black":
                return Xt;

              case "Red":
                return Kt;

              case "NBlack":
                return Zt;

              default:
                return w.crash("Can't make a double black node more black!");
            }
        }, rr = t => {
            switch (t.ctor) {
              case "BBlack":
                return Kt;

              case "Black":
                return Zt;

              case "Red":
                return $t;

              default:
                return w.crash("Can't make a negative black node less black!");
            }
        }, er = {
            ctor: "LBBlack"
        }, or = {
            ctor: "LBlack"
        }, nr = t => ({
            ctor: "RBEmpty_elm_builtin",
            _0: t
        }), cr = nr(or), ar = n((t, r, e, o, n) => ({
            ctor: "RBNode_elm_builtin",
            _0: t,
            _1: r,
            _2: e,
            _3: o,
            _4: n
        })), _r = t => {
            var r = t;
            return "RBNode_elm_builtin" === r.ctor && "Red" === r._0.ctor ? d(ar, Kt, r._1, r._2, r._3, r._4) : t;
        }, ir = t => {
            var r = t;
            return "RBNode_elm_builtin" === r.ctor ? d(ar, rr(r._0), r._1, r._2, r._3, r._4) : nr(or);
        }, lr = t => r => e => o => n => c => a => _ => i => l => u => d(ar, rr(t), o, n, d(ar, Kt, r, e, _, i), d(ar, Kt, c, a, l, u)), ur = t => {
            var r = t;
            return "RBEmpty_elm_builtin" === r.ctor ? nr(or) : d(ar, Kt, r._1, r._2, r._3, r._4);
        }, sr = t => {
            var r = t;
            return "RBEmpty_elm_builtin" === r.ctor ? w.crash("can't make a Leaf red") : d(ar, Zt, r._1, r._2, r._3, r._4);
        }, dr = t => {
            var r = t;
            t: do {
                r: do {
                    e: do {
                        o: do {
                            n: do {
                                c: do {
                                    a: do {
                                        if ("RBNode_elm_builtin" !== r.ctor) break t;
                                        if ("RBNode_elm_builtin" === r._3.ctor) if ("RBNode_elm_builtin" === r._4.ctor) switch (r._3._0.ctor) {
                                          case "Red":
                                            switch (r._4._0.ctor) {
                                              case "Red":
                                                if ("RBNode_elm_builtin" === r._3._3.ctor && "Red" === r._3._3._0.ctor) break a;
                                                if ("RBNode_elm_builtin" === r._3._4.ctor && "Red" === r._3._4._0.ctor) break c;
                                                if ("RBNode_elm_builtin" === r._4._3.ctor && "Red" === r._4._3._0.ctor) break n;
                                                if ("RBNode_elm_builtin" === r._4._4.ctor && "Red" === r._4._4._0.ctor) break o;
                                                break t;

                                              case "NBlack":
                                                if ("RBNode_elm_builtin" === r._3._3.ctor && "Red" === r._3._3._0.ctor) break a;
                                                if ("RBNode_elm_builtin" === r._3._4.ctor && "Red" === r._3._4._0.ctor) break c;
                                                if ("BBlack" === r._0.ctor && "RBNode_elm_builtin" === r._4._3.ctor && "Black" === r._4._3._0.ctor && "RBNode_elm_builtin" === r._4._4.ctor && "Black" === r._4._4._0.ctor) break e;
                                                break t;

                                              default:
                                                if ("RBNode_elm_builtin" === r._3._3.ctor && "Red" === r._3._3._0.ctor) break a;
                                                if ("RBNode_elm_builtin" === r._3._4.ctor && "Red" === r._3._4._0.ctor) break c;
                                                break t;
                                            }

                                          case "NBlack":
                                            switch (r._4._0.ctor) {
                                              case "Red":
                                                if ("RBNode_elm_builtin" === r._4._3.ctor && "Red" === r._4._3._0.ctor) break n;
                                                if ("RBNode_elm_builtin" === r._4._4.ctor && "Red" === r._4._4._0.ctor) break o;
                                                if ("BBlack" === r._0.ctor && "RBNode_elm_builtin" === r._3._3.ctor && "Black" === r._3._3._0.ctor && "RBNode_elm_builtin" === r._3._4.ctor && "Black" === r._3._4._0.ctor) break r;
                                                break t;

                                              case "NBlack":
                                                if ("BBlack" === r._0.ctor) {
                                                    if ("RBNode_elm_builtin" === r._4._3.ctor && "Black" === r._4._3._0.ctor && "RBNode_elm_builtin" === r._4._4.ctor && "Black" === r._4._4._0.ctor) break e;
                                                    if ("RBNode_elm_builtin" === r._3._3.ctor && "Black" === r._3._3._0.ctor && "RBNode_elm_builtin" === r._3._4.ctor && "Black" === r._3._4._0.ctor) break r;
                                                    break t;
                                                }
                                                break t;

                                              default:
                                                if ("BBlack" === r._0.ctor && "RBNode_elm_builtin" === r._3._3.ctor && "Black" === r._3._3._0.ctor && "RBNode_elm_builtin" === r._3._4.ctor && "Black" === r._3._4._0.ctor) break r;
                                                break t;
                                            }

                                          default:
                                            switch (r._4._0.ctor) {
                                              case "Red":
                                                if ("RBNode_elm_builtin" === r._4._3.ctor && "Red" === r._4._3._0.ctor) break n;
                                                if ("RBNode_elm_builtin" === r._4._4.ctor && "Red" === r._4._4._0.ctor) break o;
                                                break t;

                                              case "NBlack":
                                                if ("BBlack" === r._0.ctor && "RBNode_elm_builtin" === r._4._3.ctor && "Black" === r._4._3._0.ctor && "RBNode_elm_builtin" === r._4._4.ctor && "Black" === r._4._4._0.ctor) break e;
                                                break t;

                                              default:
                                                break t;
                                            }
                                        } else switch (r._3._0.ctor) {
                                          case "Red":
                                            if ("RBNode_elm_builtin" === r._3._3.ctor && "Red" === r._3._3._0.ctor) break a;
                                            if ("RBNode_elm_builtin" === r._3._4.ctor && "Red" === r._3._4._0.ctor) break c;
                                            break t;

                                          case "NBlack":
                                            if ("BBlack" === r._0.ctor && "RBNode_elm_builtin" === r._3._3.ctor && "Black" === r._3._3._0.ctor && "RBNode_elm_builtin" === r._3._4.ctor && "Black" === r._3._4._0.ctor) break r;
                                            break t;

                                          default:
                                            break t;
                                        } else {
                                            if ("RBNode_elm_builtin" !== r._4.ctor) break t;
                                            switch (r._4._0.ctor) {
                                              case "Red":
                                                if ("RBNode_elm_builtin" === r._4._3.ctor && "Red" === r._4._3._0.ctor) break n;
                                                if ("RBNode_elm_builtin" === r._4._4.ctor && "Red" === r._4._4._0.ctor) break o;
                                                break t;

                                              case "NBlack":
                                                if ("BBlack" === r._0.ctor && "RBNode_elm_builtin" === r._4._3.ctor && "Black" === r._4._3._0.ctor && "RBNode_elm_builtin" === r._4._4.ctor && "Black" === r._4._4._0.ctor) break e;
                                                break t;

                                              default:
                                                break t;
                                            }
                                        }
                                    } while (!1);
                                    return lr(r._0)(r._3._3._1)(r._3._3._2)(r._3._1)(r._3._2)(r._1)(r._2)(r._3._3._3)(r._3._3._4)(r._3._4)(r._4);
                                } while (!1);
                                return lr(r._0)(r._3._1)(r._3._2)(r._3._4._1)(r._3._4._2)(r._1)(r._2)(r._3._3)(r._3._4._3)(r._3._4._4)(r._4);
                            } while (!1);
                            return lr(r._0)(r._1)(r._2)(r._4._3._1)(r._4._3._2)(r._4._1)(r._4._2)(r._3)(r._4._3._3)(r._4._3._4)(r._4._4);
                        } while (!1);
                        return lr(r._0)(r._1)(r._2)(r._4._1)(r._4._2)(r._4._4._1)(r._4._4._2)(r._3)(r._4._3)(r._4._4._3)(r._4._4._4);
                    } while (!1);
                    return d(ar, Kt, r._4._3._1, r._4._3._2, d(ar, Kt, r._1, r._2, r._3, r._4._3._3), d(pr, Kt, r._4._1, r._4._2, r._4._3._4, sr(r._4._4)));
                } while (!1);
                return d(ar, Kt, r._3._4._1, r._3._4._2, d(pr, Kt, r._3._1, r._3._2, sr(r._3._3), r._3._4._3), d(ar, Kt, r._1, r._2, r._3._4._4, r._4));
            } while (!1);
            return t;
        }, pr = n((t, r, e, o, n) => {
            var c = d(ar, t, r, e, o, n);
            return Yt(c) ? dr(c) : c;
        }), gr = n((t, r, e, o, n) => zt(o) || zt(n) ? d(pr, tr(t), r, e, ir(o), ir(n)) : d(ar, t, r, e, o, n)), fr = n((t, r, e, o, n) => {
            var c = n;
            return "RBEmpty_elm_builtin" === c.ctor ? u(vr, t, o, n) : d(gr, t, r, e, o, d(fr, c._0, c._1, c._2, c._3, c._4));
        }), vr = e((t, r, e) => {
            var o = {
                ctor: "_Tuple2",
                _0: r,
                _1: e
            };
            if ("RBEmpty_elm_builtin" !== o._0.ctor) {
                if ("RBEmpty_elm_builtin" === o._1.ctor) {
                    var n = o._1._0, c = o._0._0, a = {
                        ctor: "_Tuple3",
                        _0: t,
                        _1: c,
                        _2: n
                    };
                    return "_Tuple3" === a.ctor && "Black" === a._0.ctor && "Red" === a._1.ctor && "LBlack" === a._2.ctor ? d(ar, Kt, o._0._1, o._0._2, o._0._3, o._0._4) : s(Ht, "Black/Red/LBlack", t, k(c), k(n));
                }
                var _ = o._0._2, i = o._0._4, l = o._0._1, p = d(fr, o._0._0, l, _, o._0._3, i), g = u(Vt, l, _, i);
                return d(gr, t, g._0, g._1, p, e);
            }
            if ("RBEmpty_elm_builtin" !== o._1.ctor) {
                var f = o._1._0, v = o._0._0, h = {
                    ctor: "_Tuple3",
                    _0: t,
                    _1: v,
                    _2: f
                };
                return "_Tuple3" === h.ctor && "Black" === h._0.ctor && "LBlack" === h._1.ctor && "Red" === h._2.ctor ? d(ar, Kt, o._1._1, o._1._2, o._1._3, o._1._4) : s(Ht, "Black/LBlack/Red", t, k(v), k(f));
            }
            switch (t.ctor) {
              case "Red":
                return nr(or);

              case "Black":
                return nr(er);

              default:
                return w.crash("cannot have bblack or nblack nodes at this point");
            }
        }), hr = r((t, r) => {
            var e = r;
            if ("RBEmpty_elm_builtin" === e.ctor) return nr(or);
            var o = e._1;
            return d(ar, e._0, o, l(t, o, e._2), l(hr, t, e._3), l(hr, t, e._4));
        }), mr = {
            ctor: "Same"
        }, br = {
            ctor: "Remove"
        }, yr = {
            ctor: "Insert"
        }, kr = e((t, r, e) => {
            var o = e => {
                var n = e;
                if ("RBEmpty_elm_builtin" === n.ctor) {
                    var c = r(N);
                    return "Nothing" === c.ctor ? {
                        ctor: "_Tuple2",
                        _0: mr,
                        _1: cr
                    } : {
                        ctor: "_Tuple2",
                        _0: yr,
                        _1: d(ar, Zt, t, c._0, cr, cr)
                    };
                }
                var a = n._2, _ = n._4, i = n._3, s = n._1, p = n._0;
                switch (l(T, t, s).ctor) {
                  case "EQ":
                    var g = r(R(a));
                    return "Nothing" === g.ctor ? {
                        ctor: "_Tuple2",
                        _0: br,
                        _1: u(vr, p, i, _)
                    } : {
                        ctor: "_Tuple2",
                        _0: mr,
                        _1: d(ar, p, s, g._0, i, _)
                    };

                  case "LT":
                    var f = o(i), v = f._0, h = f._1;
                    switch (v.ctor) {
                      case "Same":
                        return {
                            ctor: "_Tuple2",
                            _0: mr,
                            _1: d(ar, p, s, a, h, _)
                        };

                      case "Insert":
                        return {
                            ctor: "_Tuple2",
                            _0: yr,
                            _1: d(pr, p, s, a, h, _)
                        };

                      default:
                        return {
                            ctor: "_Tuple2",
                            _0: br,
                            _1: d(gr, p, s, a, h, _)
                        };
                    }

                  default:
                    var m = o(_), v = m._0, b = m._1;
                    switch (v.ctor) {
                      case "Same":
                        return {
                            ctor: "_Tuple2",
                            _0: mr,
                            _1: d(ar, p, s, a, i, b)
                        };

                      case "Insert":
                        return {
                            ctor: "_Tuple2",
                            _0: yr,
                            _1: d(pr, p, s, a, i, b)
                        };

                      default:
                        return {
                            ctor: "_Tuple2",
                            _0: br,
                            _1: d(gr, p, s, a, i, b)
                        };
                    }
                }
            }, n = o(e), c = n._0, a = n._1;
            switch (c.ctor) {
              case "Same":
                return a;

              case "Insert":
                return _r(a);

              default:
                return ur(a);
            }
        }), Tr = e((t, r, e) => u(kr, t, m(R(r)), e)), wr = (r((t, r) => u(Tr, t, r, cr)), 
        r((t, r) => u(jt, Tr, r, t)), r((t, r) => {
            var o = e((r, e, o) => l(t, r, e) ? u(Tr, r, e, o) : o);
            return u(jt, o, cr, r);
        })), xr = (r((t, e) => l(wr, r(t => l(Qt, t, e)), t)), r((t, r) => {
            var o = e((r, e, o) => {
                var n = o, c = n._1, a = n._0;
                return l(t, r, e) ? {
                    ctor: "_Tuple2",
                    _0: u(Tr, r, e, a),
                    _1: c
                } : {
                    ctor: "_Tuple2",
                    _0: a,
                    _1: u(Tr, r, e, c)
                };
            });
            return u(jt, o, {
                ctor: "_Tuple2",
                _0: cr,
                _1: cr
            }, r);
        }), t => u(P, r((t, r) => {
            var e = t;
            return u(Tr, e._0, e._1, r);
        }), cr, t)), Br = r((t, r) => u(kr, t, m(N), r)), Nr = (r((t, r) => u(jt, e((t, r, e) => l(Br, t, e)), t, r)), 
        (() => {
            function t(t, r) {
                return {
                    ctor: "<decoder>",
                    tag: "map-many",
                    func: t,
                    decoders: r
                };
            }
            // DECODE HELPERS
            function l(t) {
                return {
                    tag: "ok",
                    value: t
                };
            }
            function u(t, r) {
                return {
                    tag: "primitive",
                    type: t,
                    value: r
                };
            }
            function s(t, r) {
                return {
                    tag: "index",
                    index: t,
                    rest: r
                };
            }
            function d(t, r) {
                return {
                    tag: "field",
                    field: t,
                    rest: r
                };
            }
            function s(t, r) {
                return {
                    tag: "index",
                    index: t,
                    rest: r
                };
            }
            function p(t) {
                return {
                    tag: "oneOf",
                    problems: t
                };
            }
            function g(t) {
                return {
                    tag: "fail",
                    msg: t
                };
            }
            function v(t) {
                for (var r = "_"; t; ) switch (t.tag) {
                  case "primitive":
                    return "Expecting " + t.type + ("_" === r ? "" : " at " + r) + " but instead got: " + h(t.value);

                  case "index":
                    r += "[" + t.index + "]", t = t.rest;
                    break;

                  case "field":
                    r += "." + t.field, t = t.rest;
                    break;

                  case "oneOf":
                    for (var e = t.problems, o = 0; e.length > o; o++) e[o] = v(e[o]);
                    return "I ran into the following problems" + ("_" === r ? "" : " at " + r) + ":\n\n" + e.join("\n");

                  case "fail":
                    return "I ran into a `fail` decoder" + ("_" === r ? "" : " at " + r) + ": " + t.msg;
                }
            }
            function h(t) {
                return void 0 === t ? "undefined" : JSON.stringify(t);
            }
            function m(t, r) {
                var e = b(t, r);
                return "ok" === e.tag ? Y(e.value) : K(v(e));
            }
            function b(t, r) {
                switch (t.tag) {
                  case "bool":
                    return "boolean" == typeof r ? l(r) : u("a Bool", r);

                  case "int":
                    return "number" != typeof r ? u("an Int", r) : r > -2147483647 && 2147483647 > r && (0 | r) === r ? l(r) : !isFinite(r) || r % 1 ? u("an Int", r) : l(r);

                  case "float":
                    return "number" == typeof r ? l(r) : u("a Float", r);

                  case "string":
                    return "string" == typeof r ? l(r) : r instanceof String ? l(r + "") : u("a String", r);

                  case "null":
                    return null === r ? l(t.value) : u("null", r);

                  case "value":
                    return l(r);

                  case "list":
                    if (!(r instanceof Array)) return u("a List", r);
                    for (var e = M.Nil, o = r.length; o--; ) {
                        if ("ok" !== (w = b(t.decoder, r[o])).tag) return s(o, w);
                        e = M.Cons(w.value, e);
                    }
                    return l(e);

                  case "array":
                    if (!(r instanceof Array)) return u("an Array", r);
                    for (var n = r.length, c = Array(n), o = n; o--; ) {
                        if ("ok" !== (w = b(t.decoder, r[o])).tag) return s(o, w);
                        c[o] = w.value;
                    }
                    return l(Mt.fromJSArray(c));

                  case "maybe":
                    return l("ok" === (w = b(t.decoder, r)).tag ? R(w.value) : N);

                  case "field":
                    var a = t.field;
                    return "object" == typeof r && null !== r && a in r ? "ok" === (w = b(t.decoder, r[a])).tag ? w : d(a, w) : u("an object with a field named `" + a + "`", r);

                  case "index":
                    var _ = t.index;
                    return r instanceof Array ? r.length > _ ? "ok" === (w = b(t.decoder, r[_])).tag ? w : s(_, w) : u("a longer array. Need index " + _ + " but there are only " + r.length + " entries", r) : u("an array", r);

                  case "key-value":
                    if ("object" != typeof r || null === r || r instanceof Array) return u("an object", r);
                    var i = M.Nil;
                    for (var v in r) {
                        if ("ok" !== (w = b(t.decoder, r[v])).tag) return d(v, w);
                        var h = f.Tuple2(v, w.value);
                        i = M.Cons(h, i);
                    }
                    return l(i);

                  case "map-many":
                    for (var m = t.func, y = t.decoders, o = 0; y.length > o; o++) {
                        if ("ok" !== (w = b(y[o], r)).tag) return w;
                        m = m(w.value);
                    }
                    return l(m);

                  case "andThen":
                    return "ok" !== (w = b(t.decoder, r)).tag ? w : b(t.callback(w.value), r);

                  case "oneOf":
                    for (var k = [], T = t.decoders; "[]" !== T.ctor; ) {
                        var w = b(T._0, r);
                        if ("ok" === w.tag) return w;
                        k.push(w), T = T._1;
                    }
                    return p(k);

                  case "fail":
                    return g(t.msg);

                  case "succeed":
                    return l(t.msg);
                }
            }
            // EQUALITY
            function y(t, r) {
                if (t === r) return !0;
                if (t.tag !== r.tag) return !1;
                switch (t.tag) {
                  case "succeed":
                  case "fail":
                    return t.msg === r.msg;

                  case "bool":
                  case "int":
                  case "float":
                  case "string":
                  case "value":
                    return !0;

                  case "null":
                    return t.value === r.value;

                  case "list":
                  case "array":
                  case "maybe":
                  case "key-value":
                    return y(t.decoder, r.decoder);

                  case "field":
                    return t.field === r.field && y(t.decoder, r.decoder);

                  case "index":
                    return t.index === r.index && y(t.decoder, r.decoder);

                  case "map-many":
                    return t.func === r.func && k(t.decoders, r.decoders);

                  case "andThen":
                    return t.callback === r.callback && y(t.decoder, r.decoder);

                  case "oneOf":
                    return k(t.decoders, r.decoders);
                }
            }
            function k(t, r) {
                var e = t.length;
                if (e !== r.length) return !1;
                for (var o = 0; e > o; o++) if (!y(t[o], r[o])) return !1;
                return !0;
            }
            return {
                encode: r(// ENCODE
                (t, r) => JSON.stringify(r, null, t)),
                runOnString: r(// DECODE
                (t, r) => {
                    var e;
                    try {
                        e = JSON.parse(r);
                    } catch (t) {
                        return K("Given an invalid JSON: " + t.message);
                    }
                    return m(t, e);
                }),
                run: r(m),
                decodeNull: t => ({
                    ctor: "<decoder>",
                    tag: "null",
                    value: t
                }),
                decodePrimitive: t => ({
                    ctor: "<decoder>",
                    tag: t
                }),
                decodeContainer: r((t, r) => ({
                    ctor: "<decoder>",
                    tag: t,
                    decoder: r
                })),
                decodeField: r((t, r) => ({
                    ctor: "<decoder>",
                    tag: "field",
                    field: t,
                    decoder: r
                })),
                decodeIndex: r((t, r) => ({
                    ctor: "<decoder>",
                    tag: "index",
                    index: t,
                    decoder: r
                })),
                map1: r(// DECODING OBJECTS
                (r, e) => t(r, [ e ])),
                map2: e((r, e, o) => t(r, [ e, o ])),
                map3: o((r, e, o, n) => t(r, [ e, o, n ])),
                map4: n((r, e, o, n, c) => t(r, [ e, o, n, c ])),
                map5: c((r, e, o, n, c, a) => t(r, [ e, o, n, c, a ])),
                map6: a((r, e, o, n, c, a, _) => t(r, [ e, o, n, c, a, _ ])),
                map7: _((r, e, o, n, c, a, _, i) => t(r, [ e, o, n, c, a, _, i ])),
                map8: i((r, e, o, n, c, a, _, i, l) => t(r, [ e, o, n, c, a, _, i, l ])),
                decodeKeyValuePairs: t => ({
                    ctor: "<decoder>",
                    tag: "key-value",
                    decoder: t
                }),
                andThen: r((t, r) => ({
                    ctor: "<decoder>",
                    tag: "andThen",
                    decoder: r,
                    callback: t
                })),
                fail: t => ({
                    ctor: "<decoder>",
                    tag: "fail",
                    msg: t
                }),
                succeed: // CORE DECODERS
                t => ({
                    ctor: "<decoder>",
                    tag: "succeed",
                    msg: t
                }),
                oneOf: t => ({
                    ctor: "<decoder>",
                    tag: "oneOf",
                    decoders: t
                }),
                identity: t => t,
                encodeNull: null,
                encodeArray: Mt.toJSArray,
                encodeList: M.toArray,
                encodeObject(t) {
                    for (var r = {}; "[]" !== t.ctor; ) {
                        var e = t._0;
                        r[e._0] = e._1, t = t._1;
                    }
                    return r;
                },
                equality: y
            };
        })()), Er = Nr.identity, Rr = Nr.identity, Ar = Nr.decodeNull, Cr = Nr.decodePrimitive("value"), Mr = Nr.andThen, Or = Nr.fail, Sr = Nr.succeed, Lr = Nr.run, Pr = Nr.runOnString, Ir = Nr.map2, Jr = Nr.map1, Dr = Nr.oneOf, Fr = Nr.decodeField, Ur = r((t, r) => u(L, Fr, r, t)), jr = t => l(Nr.decodeContainer, "list", t), qr = (Nr.decodePrimitive("float"), 
        Nr.decodePrimitive("int")), Hr = Nr.decodePrimitive("bool"), zr = Nr.decodePrimitive("string"), Wr = Sr, Gr = (Mr(b), 
        Ir(r((t, r) => r(t)))), Qr = e((t, r, e) => {
            var o = t => Dr({
                ctor: "::",
                _0: t,
                _1: {
                    ctor: "::",
                    _0: Ar(e),
                    _1: {
                        ctor: "[]"
                    }
                }
            });
            return l(Mr, n => {
                var c = l(Lr, t, n);
                if ("Ok" === c.ctor) {
                    var a = l(Lr, o(r), c._0);
                    return "Ok" === a.ctor ? Sr(a._0) : Or(a._0);
                }
                return Sr(e);
            }, Cr);
        }), Vr = (o((t, r, e, o) => l(Gr, u(Qr, l(Ur, t, Cr), r, e), o)), o((t, r, e, o) => l(Gr, u(Qr, l(Fr, t, Cr), r, e), o)), 
        e((t, r, e) => l(Gr, l(Ur, t, r), e)), e((t, r, e) => l(Gr, l(Fr, t, r), e))), $r = (r((t, r) => e => t.reverseGet(r(t.get(e)))), 
        r((t, r) => ({
            get: t,
            reverseGet: r
        }))), Xr = (r((t, r) => l($r, e => r.get(t.get(e)), e => t.reverseGet(r.reverseGet(e)))), 
        e((t, r, e) => o => {
            var n = o, c = n._0;
            return (() => {
                var o = r(t.get(c));
                return {
                    ctor: "_Tuple2",
                    _0: l(t.set, o._0, c),
                    _1: l(e, n._1, o._1)
                };
            })();
        }), o((t, r, e, o) => n => {
            var c = n, a = c._2, _ = c._1, i = c._0;
            return (() => {
                var n = o({
                    ctor: "_Tuple3",
                    _0: t.get(i),
                    _1: r.get(_),
                    _2: e.get(a)
                });
                return {
                    ctor: "_Tuple3",
                    _0: l(t.set, n._0, i),
                    _1: l(r.set, n._1, _),
                    _2: l(e.set, n._2, a)
                };
            })();
        }), e((t, r, e) => o => {
            var n = o, c = n._1, a = n._0;
            return (() => {
                var o = e({
                    ctor: "_Tuple2",
                    _0: t.get(a),
                    _1: r.get(c)
                });
                return {
                    ctor: "_Tuple2",
                    _0: l(t.set, o._0, a),
                    _1: l(r.set, o._1, c)
                };
            })();
        }), r((t, r) => e => (r => l(t.set, r, e))(r(t.get(e))))), Kr = r((t, r) => ({
            get: t,
            set: r
        })), Yr = (r((t, e) => {
            var o = r((r, o) => (r => l(t.set, r, o))(l(e.set, r, t.get(o))));
            return l(Kr, r => e.get(t.get(r)), o);
        }), r((t, e) => {
            var o = r((r, o) => {
                var n = r, c = o;
                return {
                    ctor: "_Tuple2",
                    _0: l(t.set, n._0, c._0),
                    _1: l(e.set, n._1, c._1)
                };
            });
            return l(Kr, r => {
                var o = r;
                return {
                    ctor: "_Tuple2",
                    _0: t.get(o._0),
                    _1: e.get(o._1)
                };
            }, o);
        }), r((t, e) => {
            var o = r((r, o) => {
                var n = r;
                return l(e.set, n._1, l(t.set, n._0, o));
            });
            return l(Kr, r => ({
                ctor: "_Tuple2",
                _0: t.get(r),
                _1: e.get(r)
            }), o);
        }), e((t, e, o) => {
            var n = r((r, n) => {
                var c = r;
                return l(o.set, c._2, l(e.set, c._1, l(t.set, c._0, n)));
            });
            return l(Kr, r => ({
                ctor: "_Tuple3",
                _0: t.get(r),
                _1: e.get(r),
                _2: o.get(r)
            }), n);
        }), r((t, r) => e => l(A, e => t.reverseGet(r(e)), t.getOption(e)))), Zr = (r((t, r) => e => l(B, e, u(Yr, t, r, e))), 
        r((t, r) => "Just" === t.getOption(r).ctor), r((t, r) => ({
            getOption: t,
            reverseGet: r
        }))), te = (r((t, r) => l(Zr, e => {
            var o = t.getOption(e);
            return "Just" === o.ctor ? r.getOption(o._0) : N;
        }, e => t.reverseGet(r.reverseGet(e)))), r((t, r) => l(Zr, e => {
            var o = t.getOption(e);
            return "Just" === o.ctor ? R(r.get(o._0)) : N;
        }, e => t.reverseGet(r.reverseGet(e)))), o((t, r, e, o) => n => {
            var c = n, a = c._2, _ = c._1, i = c._0, u = {
                ctor: "_Tuple3",
                _0: t.getOption(i),
                _1: r.getOption(_),
                _2: e.getOption(a)
            };
            return "_Tuple3" === u.ctor && "Just" === u._0.ctor && "Just" === u._1.ctor && "Just" === u._2.ctor ? (() => {
                var n = o({
                    ctor: "_Tuple3",
                    _0: u._0._0,
                    _1: u._1._0,
                    _2: u._2._0
                });
                return {
                    ctor: "_Tuple3",
                    _0: l(t.set, n._0, i),
                    _1: l(r.set, n._1, _),
                    _2: l(e.set, n._2, a)
                };
            })() : {
                ctor: "_Tuple3",
                _0: i,
                _1: _,
                _2: a
            };
        }), e((t, r, e) => o => {
            var n = o, c = n._1, a = n._0, _ = {
                ctor: "_Tuple2",
                _0: t.getOption(a),
                _1: r.getOption(c)
            };
            return "_Tuple2" === _.ctor && "Just" === _._0.ctor && "Just" === _._1.ctor ? (() => {
                var o = e({
                    ctor: "_Tuple2",
                    _0: _._0._0,
                    _1: _._1._0
                });
                return {
                    ctor: "_Tuple2",
                    _0: l(t.set, o._0, a),
                    _1: l(r.set, o._1, c)
                };
            })() : {
                ctor: "_Tuple2",
                _0: a,
                _1: c
            };
        }), r((t, r) => e => l(A, r => l(t.set, r, e), l(A, r, t.getOption(e))))), re = (r((t, r) => e => l(B, e, u(te, t, r, e))), 
        r((t, r) => ({
            getOption: t,
            set: r
        }))), ee = (r((t, e) => {
            var o = r((r, o) => l(B, o, l(A, r => l(t.set, r, o), l(A, t => l(e.set, r, t), t.getOption(o)))));
            return l(re, r => {
                var o = t.getOption(r);
                return "Just" === o.ctor ? e.getOption(o._0) : N;
            }, o);
        }), r((t, e) => {
            var o = r((r, o) => l(B, o, l(A, r => l(t.set, r, o), l(A, t => l(e.set, r, t), t.getOption(o)))));
            return l(re, r => {
                var o = t.getOption(r);
                return "Just" === o.ctor ? R(e.get(o._0)) : N;
            }, o);
        }), r((t, e) => {
            var o = r((r, o) => {
                var n = r, c = o;
                return {
                    ctor: "_Tuple2",
                    _0: l(t.set, n._0, c._0),
                    _1: l(e.set, n._1, c._1)
                };
            });
            return l(re, r => {
                var o = r;
                return l(E, t => l(A, r => ({
                    ctor: "_Tuple2",
                    _0: t,
                    _1: r
                }), e.getOption(o._1)), t.getOption(o._0));
            }, o);
        }), r((t, e) => {
            var o = r((r, o) => {
                var n = r;
                return l(e.set, n._1, l(t.set, n._0, o));
            });
            return l(re, r => {
                var o = {
                    ctor: "_Tuple2",
                    _0: t.getOption(r),
                    _1: e.getOption(r)
                };
                return "_Tuple2" === o.ctor && "Just" === o._0.ctor && "Just" === o._1.ctor ? R({
                    ctor: "_Tuple2",
                    _0: o._0._0,
                    _1: o._1._0
                }) : N;
            }, o);
        }), e((t, e, o) => {
            var n = r((r, n) => {
                var c = r;
                return l(o.set, c._2, l(e.set, c._1, l(t.set, c._0, n)));
            });
            return l(re, r => {
                var n = {
                    ctor: "_Tuple3",
                    _0: t.getOption(r),
                    _1: e.getOption(r),
                    _2: o.getOption(r)
                };
                return "_Tuple3" === n.ctor && "Just" === n._0.ctor && "Just" === n._1.ctor && "Just" === n._2.ctor ? R({
                    ctor: "_Tuple3",
                    _0: n._0._0,
                    _1: n._1._0,
                    _2: n._2._0
                }) : N;
            }, n);
        }), ut.onError), oe = ut.andThen, ne = r((t, r) => {
            var e = r;
            return ut.spawn(l(oe, bt(t), e._0));
        }), ce = ut.fail, ae = (r((t, r) => l(ee, r => ce(t(r)), r)), ut.succeed), _e = r((t, r) => l(oe, r => ae(t(r)), r)), ie = e((t, r, e) => l(oe, r => l(oe, e => ae(l(t, r, e)), e), r)), le = (o((t, r, e, o) => l(oe, r => l(oe, e => l(oe, o => ae(u(t, r, e, o)), o), e), r)), 
        n((t, r, e, o, n) => l(oe, r => l(oe, e => l(oe, o => l(oe, n => ae(s(t, r, e, o, n)), n), o), e), r)), 
        c((t, r, e, o, n, c) => l(oe, r => l(oe, e => l(oe, o => l(oe, n => l(oe, c => ae(d(t, r, e, o, n, c)), c), n), o), e), r)), 
        t => {
            var e = t;
            return "[]" === e.ctor ? ae({
                ctor: "[]"
            }) : u(ie, r((t, r) => ({
                ctor: "::",
                _0: t,
                _1: r
            })), e._0, le(e._1));
        }), ue = e((t, r) => l(_e, () => ({
            ctor: "_Tuple0"
        }), le(l(D, ne(t), r)))), se = ae({
            ctor: "_Tuple0"
        }), de = e(() => ae({
            ctor: "_Tuple0"
        })), pe = lt.leaf("Task"), ge = t => ({
            ctor: "Perform",
            _0: t
        }), fe = r((t, r) => pe(ge(l(_e, t, r)))), ve = r((t, r) => pe(ge(l(ee, r => ae(t(K(r))), l(oe, r => ae(t(Y(r))), r))))), he = r((t, r) => ge(l(_e, t, r._0)));
        lt.effectManagers.Task = {
            pkg: "elm-lang/core",
            init: se,
            onEffects: ue,
            onSelfMsg: de,
            tag: "cmd",
            cmdMap: he
        };
        //import Native.Scheduler //
        var me = {
            now: ut.nativeBinding(t => {
                t(ut.succeed(Date.now()));
            }),
            setInterval_: r((t, r) => ut.nativeBinding(() => {
                var e = setInterval(() => {
                    ut.rawSpawn(r);
                }, t);
                return () => {
                    clearInterval(e);
                };
            }))
        }, be = me.setInterval_, ye = e((t, r, e) => {
            var o = r;
            if ("[]" === o.ctor) return ae(e);
            var n = o._0, c = r => u(ye, t, o._1, u(Tr, n, r, e)), a = ut.spawn(l(be, n, l(mt, t, n)));
            return l(oe, c, a);
        }), ke = r((t, r) => {
            var e = t, o = e._1, n = e._0, c = l(Gt, n, r);
            return "Nothing" === c.ctor ? u(Tr, n, {
                ctor: "::",
                _0: o,
                _1: {
                    ctor: "[]"
                }
            }, r) : u(Tr, n, {
                ctor: "::",
                _0: o,
                _1: c._0
            }, r);
        }), Te = me.now, we = e((t, r, e) => {
            var o = l(Gt, r, e.taggers);
            return "Nothing" === o.ctor ? ae(e) : l(oe, () => ae(e), l(oe, r => le(l(D, e => l(bt, t, e(r)), o._0)), Te));
        }), xe = lt.leaf("Time"), Be = r((t, r) => ({
            taggers: t,
            processes: r
        })), Ne = ae(l(Be, cr, cr)), Ee = e((t, r, n) => {
            var c = n, a = e((t, r, e) => {
                var o = e;
                return {
                    ctor: "_Tuple3",
                    _0: o._0,
                    _1: o._1,
                    _2: l(oe, () => o._2, ut.kill(r))
                };
            }), _ = o((t, r, e, o) => {
                var n = o;
                return {
                    ctor: "_Tuple3",
                    _0: n._0,
                    _1: u(Tr, t, e, n._1),
                    _2: n._2
                };
            }), i = e((t, r, e) => {
                var o = e;
                return {
                    ctor: "_Tuple3",
                    _0: {
                        ctor: "::",
                        _0: t,
                        _1: o._0
                    },
                    _1: o._1,
                    _2: o._2
                };
            }), s = u(P, ke, cr, r), d = p(qt, i, _, a, s, c.processes, {
                ctor: "_Tuple3",
                _0: {
                    ctor: "[]"
                },
                _1: cr,
                _2: ae({
                    ctor: "_Tuple0"
                })
            }), g = d._0, f = d._1;
            return l(oe, t => ae(l(Be, s, t)), l(oe, () => u(ye, t, g, f), d._2));
        }), Re = r((t, r) => ({
            ctor: "Every",
            _0: t,
            _1: r
        })), Ae = r((t, r) => xe(l(Re, t, r))), Ce = r((t, r) => {
            var e = r;
            return l(Re, e._0, r => t(e._1(r)));
        });
        lt.effectManagers.Time = {
            pkg: "elm-lang/core",
            init: Ne,
            onEffects: Ee,
            onSelfMsg: we,
            tag: "sub",
            subMap: Ce
        };
        var Me = ut.kill, Oe = ut.sleep, Se = ut.spawn, Le = (() => {
            function t(t) {
                return (r, e, o) => ut.nativeBinding(() => {
                    function n(t) {
                        var r = l(Lr, e, t);
                        "Ok" === r.ctor && ut.rawSpawn(o(r._0));
                    }
                    return t.addEventListener(r, n), () => {
                        t.removeEventListener(r, n);
                    };
                });
            }
            function o(t, r) {
                return ut.nativeBinding(e => {
                    _(() => {
                        var o = document.getElementById(t);
                        e(null !== o ? ut.succeed(r(o)) : ut.fail({
                            ctor: "NotFound",
                            _0: t
                        }));
                    });
                });
            }
            var n = {
                addEventListener() {},
                removeEventListener() {}
            }, c = t("undefined" != typeof document ? document : n), a = t("undefined" != typeof window ? window : n), _ = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : t => {
                t();
            };
            return {
                onDocument: e(c),
                onWindow: e(a),
                focus: // FOCUS
                t => o(t, t => (t.focus(), f.Tuple0)),
                blur: t => o(t, t => (t.blur(), f.Tuple0)),
                getScrollTop: // SCROLLING
                t => o(t, t => t.scrollTop),
                setScrollTop: r((t, r) => o(t, t => (t.scrollTop = r, f.Tuple0))),
                getScrollLeft: t => o(t, t => t.scrollLeft),
                setScrollLeft: r((t, r) => o(t, t => (t.scrollLeft = r, f.Tuple0))),
                toBottom: t => o(t, t => (t.scrollTop = t.scrollHeight, f.Tuple0)),
                toRight: t => o(t, t => (t.scrollLeft = t.scrollWidth, f.Tuple0)),
                height: r((t, r) => o(r, r => {
                    switch (t.ctor) {
                      case "Content":
                        return r.scrollHeight;

                      case "VisibleContent":
                        return r.clientHeight;

                      case "VisibleContentWithBorders":
                        return r.offsetHeight;

                      case "VisibleContentWithBordersAndMargins":
                        var e = r.getBoundingClientRect();
                        return e.bottom - e.top;
                    }
                })),
                width: r(// SIZE
                (t, r) => o(r, r => {
                    switch (t.ctor) {
                      case "Content":
                        return r.scrollWidth;

                      case "VisibleContent":
                        return r.clientWidth;

                      case "VisibleContentWithBorders":
                        return r.offsetWidth;

                      case "VisibleContentWithBordersAndMargins":
                        var e = r.getBoundingClientRect();
                        return e.right - e.left;
                    }
                }))
            };
        })().onWindow, Pe = (() => {
            function t(t, r, e) {
                for (var o = c(r), n = o.namespace, a = o.facts, _ = [], i = 0; "[]" !== e.ctor; ) {
                    var l = e._0;
                    i += l.descendantsCount || 0, _.push(l), e = e._1;
                }
                return i += _.length, {
                    type: "node",
                    tag: t,
                    facts: a,
                    children: _,
                    namespace: n,
                    descendantsCount: i
                };
            }
            function n(t, r, e) {
                return {
                    type: "thunk",
                    func: t,
                    args: r,
                    thunk: e,
                    node: void 0
                };
            }
            // FACTS
            function c(t) {
                for (var r, e = {}; "[]" !== t.ctor; ) {
                    var o = t._0, n = o.key;
                    if (n === K || n === Y || n === X) {
                        var c = e[n] || {};
                        c[o.realKey] = o.value, e[n] = c;
                    } else if (n === $) {
                        for (var a = e[n] || {}, _ = o.value; "[]" !== _.ctor; ) {
                            var i = _._0;
                            a[i._0] = i._1, _ = _._1;
                        }
                        e[n] = a;
                    } else if ("namespace" === n) r = o.value; else if ("className" === n) {
                        var l = e[n];
                        e[n] = void 0 === l ? o.value : l + " " + o.value;
                    } else e[n] = o.value;
                    t = t._1;
                }
                return {
                    facts: e,
                    namespace: r
                };
            }
            function a(t, r, e) {
                return {
                    key: X,
                    realKey: t,
                    value: {
                        options: r,
                        decoder: e
                    }
                };
            }
            function _(t, r) {
                return (t.options === r.options || t.options.stopPropagation === r.options.stopPropagation && t.options.preventDefault === r.options.preventDefault) && Nr.equality(t.decoder, r.decoder);
            }
            ////////////  RENDER  ////////////
            function i(t, r) {
                switch (t.type) {
                  case "thunk":
                    return t.node || (t.node = t.thunk()), i(t.node, r);

                  case "tagger":
                    for (var e = t.node, o = t.tagger; "tagger" === e.type; ) "object" != typeof o ? o = [ o, e.tagger ] : o.push(e.tagger), 
                    e = e.node;
                    var n = {
                        tagger: o,
                        parent: r
                    };
                    return (_ = i(e, n)).elm_event_node_ref = n, _;

                  case "text":
                    return Z.createTextNode(t.text);

                  case "node":
                    s(_ = t.namespace ? Z.createElementNS(t.namespace, t.tag) : Z.createElement(t.tag), r, t.facts);
                    for (var c = t.children, a = 0; c.length > a; a++) _.appendChild(i(c[a], r));
                    return _;

                  case "keyed-node":
                    s(_ = t.namespace ? Z.createElementNS(t.namespace, t.tag) : Z.createElement(t.tag), r, t.facts);
                    for (var c = t.children, a = 0; c.length > a; a++) _.appendChild(i(c[a]._1, r));
                    return _;

                  case "custom":
                    var _ = t.impl.render(t.model);
                    return s(_, r, t.facts), _;
                }
            }
            ////////////  APPLY FACTS  ////////////
            function s(t, r, e) {
                for (var o in e) {
                    var n = e[o];
                    switch (o) {
                      case $:
                        d(t, n);
                        break;

                      case X:
                        p(t, r, n);
                        break;

                      case K:
                        v(t, n);
                        break;

                      case Y:
                        h(t, n);
                        break;

                      case "value":
                        t[o] !== n && (t[o] = n);
                        break;

                      default:
                        t[o] = n;
                    }
                }
            }
            function d(t, r) {
                var e = t.style;
                for (var o in r) e[o] = r[o];
            }
            function p(t, r, e) {
                var o = t.elm_handlers || {};
                for (var n in e) {
                    var c = o[n], a = e[n];
                    void 0 === a ? (t.removeEventListener(n, c), o[n] = void 0) : void 0 === c ? (c = g(r, a), 
                    t.addEventListener(n, c), o[n] = c) : c.info = a;
                }
                t.elm_handlers = o;
            }
            function g(t, r) {
                function e(r) {
                    var o = e.info, n = l(Nr.run, o.decoder, r);
                    if ("Ok" === n.ctor) {
                        var c = o.options;
                        c.stopPropagation && r.stopPropagation(), c.preventDefault && r.preventDefault();
                        for (var a = n._0, _ = t; _; ) {
                            var i = _.tagger;
                            if ("function" == typeof i) a = i(a); else for (var u = i.length; u--; ) a = i[u](a);
                            _ = _.parent;
                        }
                    }
                }
                return e.info = r, e;
            }
            function v(t, r) {
                for (var e in r) {
                    var o = r[e];
                    void 0 === o ? t.removeAttribute(e) : t.setAttribute(e, o);
                }
            }
            function h(t, r) {
                for (var e in r) {
                    var o = r[e], n = o.namespace, c = o.value;
                    void 0 === c ? t.removeAttributeNS(n, e) : t.setAttributeNS(n, e, c);
                }
            }
            ////////////  DIFF  ////////////
            function m(t, r) {
                var e = [];
                return y(t, r, e, 0), e;
            }
            function b(t, r, e) {
                return {
                    index: r,
                    type: t,
                    data: e,
                    domNode: void 0,
                    eventNode: void 0
                };
            }
            function y(t, r, e, o) {
                if (t !== r) {
                    var n = t.type, c = r.type;
                    // Bail if you run into different types of nodes. Implies that the
                    // structure has changed significantly and it's not worth a diff.
                    if (n === c) // Now we know that both nodes are the same type.
                    switch (c) {
                      case "thunk":
                        for (var a = t.args, _ = r.args, i = a.length, l = t.func === r.func && i === _.length; l && i--; ) l = a[i] === _[i];
                        if (l) return void (r.node = t.node);
                        r.node = r.thunk();
                        var u = [];
                        return y(t.node, r.node, u, 0), void (u.length > 0 && e.push(b("p-thunk", o, u)));

                      case "tagger":
                        for (// gather nested taggers
                        var s = t.tagger, d = r.tagger, p = !1, g = t.node; "tagger" === g.type; ) p = !0, 
                        "object" != typeof s ? s = [ s, g.tagger ] : s.push(g.tagger), g = g.node;
                        for (var f = r.node; "tagger" === f.type; ) p = !0, "object" != typeof d ? d = [ d, f.tagger ] : d.push(f.tagger), 
                        f = f.node;
                        // Just bail if different numbers of taggers. This implies the
                        // structure of the virtual DOM has changed.
                        // Just bail if different numbers of taggers. This implies the
                        // structure of the virtual DOM has changed.
                        // check if taggers are "the same"
                        // diff everything below the taggers
                        return p && s.length !== d.length ? void e.push(b("p-redraw", o, r)) : ((p ? k(s, d) : s === d) || e.push(b("p-tagger", o, d)), 
                        void y(g, f, e, o + 1));

                      case "text":
                        if (t.text !== r.text) return void e.push(b("p-text", o, r.text));
                        return;

                      case "node":
                        // Bail if obvious indicators have changed. Implies more serious
                        // structural changes such that it's not worth it to diff.
                        // Bail if obvious indicators have changed. Implies more serious
                        // structural changes such that it's not worth it to diff.
                        return t.tag !== r.tag || t.namespace !== r.namespace ? void e.push(b("p-redraw", o, r)) : (void 0 !== (v = T(t.facts, r.facts)) && e.push(b("p-facts", o, v)), 
                        void w(t, r, e, o));

                      case "keyed-node":
                        // Bail if obvious indicators have changed. Implies more serious
                        // structural changes such that it's not worth it to diff.
                        // Bail if obvious indicators have changed. Implies more serious
                        // structural changes such that it's not worth it to diff.
                        return t.tag !== r.tag || t.namespace !== r.namespace ? void e.push(b("p-redraw", o, r)) : (void 0 !== (v = T(t.facts, r.facts)) && e.push(b("p-facts", o, v)), 
                        void x(t, r, e, o));

                      case "custom":
                        if (t.impl !== r.impl) return void e.push(b("p-redraw", o, r));
                        var v = T(t.facts, r.facts);
                        void 0 !== v && e.push(b("p-facts", o, v));
                        var h = r.impl.diff(t, r);
                        if (h) return void e.push(b("p-custom", o, h));
                        return;
                    } else e.push(b("p-redraw", o, r));
                }
            }
            // assumes the incoming arrays are the same length
            function k(t, r) {
                for (var e = 0; t.length > e; e++) if (t[e] !== r[e]) return !1;
                return !0;
            }
            // TODO Instead of creating a new diff object, it's possible to just test if
            // there *is* a diff. During the actual patch, do the diff again and make the
            // modifications directly. This way, there's no new allocations. Worth it?
            function T(t, r, e) {
                var o;
                // look for changes and removals
                for (var n in t) if (n !== $ && n !== X && n !== K && n !== Y) // remove if not in the new facts
                if (n in r) {
                    var c = t[n], a = r[n];
                    // reference equal, so don't worry about it
                    c === a && "value" !== n || e === X && _(c, a) || ((o = o || {})[n] = a);
                } else (o = o || {})[n] = void 0 === e ? "string" == typeof t[n] ? "" : null : e === $ ? "" : e === X || e === K ? void 0 : {
                    namespace: t[n].namespace,
                    value: void 0
                }; else {
                    var i = T(t[n], r[n] || {}, n);
                    i && ((o = o || {})[n] = i);
                }
                // add new stuff
                for (var l in r) l in t || ((o = o || {})[l] = r[l]);
                return o;
            }
            function w(t, r, e, o) {
                var n = t.children, c = r.children, a = n.length, _ = c.length;
                // FIGURE OUT IF THERE ARE INSERTS OR REMOVALS
                a > _ ? e.push(b("p-remove-last", o, a - _)) : _ > a && e.push(b("p-append", o, c.slice(a)));
                for (var i = o, l = _ > a ? a : _, u = 0; l > u; u++) {
                    i++;
                    var s = n[u];
                    y(s, c[u], e, i), i += s.descendantsCount || 0;
                }
            }
            ////////////  KEYED DIFF  ////////////
            function x(t, r, e, o) {
                for (var n = [], c = {}, a = [], _ = t.children, i = r.children, l = _.length, u = i.length, s = 0, d = 0, p = o; l > s && u > d; ) {
                    var g = _[s], f = i[d], v = g._0, h = f._0, m = g._1, k = f._1;
                    // check if keys match
                    if (v !== h) {
                        // look ahead 1 to detect insertions and removals.
                        var T = l > s + 1, w = u > d + 1;
                        if (T) var x = _[s + 1], E = x._0, R = x._1, A = h === E;
                        if (w) var C = i[d + 1], M = C._0, O = C._1, S = v === M;
                        // swap a and b
                        if (T && w && S && A) y(m, O, n, ++p), B(c, n, v, k, d, a), p += m.descendantsCount || 0, 
                        N(c, n, v, R, ++p), p += R.descendantsCount || 0, s += 2, d += 2; else // insert b
                        if (w && S) p++, B(c, n, h, k, d, a), y(m, O, n, p), p += m.descendantsCount || 0, 
                        s += 1, d += 2; else // remove a
                        if (T && A) N(c, n, v, m, ++p), p += m.descendantsCount || 0, y(R, k, n, ++p), p += R.descendantsCount || 0, 
                        s += 2, d += 1; else {
                            // remove a, insert b
                            if (!T || !w || E !== M) break;
                            N(c, n, v, m, ++p), B(c, n, h, k, d, a), p += m.descendantsCount || 0, y(R, O, n, ++p), 
                            p += R.descendantsCount || 0, s += 2, d += 2;
                        }
                    } else y(m, k, n, ++p), p += m.descendantsCount || 0, s++, d++;
                }
                // eat up any remaining nodes with removeNode and insertNode
                for (;l > s; ) p++, m = (g = _[s])._1, N(c, n, g._0, m, p), p += m.descendantsCount || 0, 
                s++;
                for (var L; u > d; ) L = L || [], B(c, n, (f = i[d])._0, f._1, void 0, L), d++;
                (n.length > 0 || a.length > 0 || void 0 !== L) && e.push(b("p-reorder", o, {
                    patches: n,
                    inserts: a,
                    endInserts: L
                }));
            }
            function B(t, r, e, o, n, c) {
                var a = t[e];
                // never seen this key before
                if (void 0 === a) return a = {
                    tag: "insert",
                    vnode: o,
                    index: n,
                    data: void 0
                }, c.push({
                    index: n,
                    entry: a
                }), void (t[e] = a);
                // this key was removed earlier, a match!
                if ("remove" === a.tag) {
                    c.push({
                        index: n,
                        entry: a
                    }), a.tag = "move";
                    var _ = [];
                    return y(a.vnode, o, _, a.index), a.index = n, void (a.data.data = {
                        patches: _,
                        entry: a
                    });
                }
                // this key has already been inserted or moved, a duplicate!
                B(t, r, e + tt, o, n, c);
            }
            function N(t, r, e, o, n) {
                var c = t[e];
                // never seen this key before
                if (void 0 === c) return _ = b("p-remove", n, void 0), r.push(_), void (t[e] = {
                    tag: "remove",
                    vnode: o,
                    index: n,
                    data: _
                });
                // this key was inserted earlier, a match!
                if ("insert" !== c.tag) // this key has already been removed or moved, a duplicate!
                N(t, r, e + tt, o, n); else {
                    c.tag = "move";
                    var a = [];
                    y(o, c.vnode, a, n);
                    var _ = b("p-remove", n, {
                        patches: a,
                        entry: c
                    });
                    r.push(_);
                }
            }
            ////////////  ADD DOM NODES  ////////////
            //
            // Each DOM node has an "index" assigned in order of traversal. It is important
            // to minimize our crawl over the actual DOM, so these indexes (along with the
            // descendantsCount of virtual nodes) let us skip touching entire subtrees of
            // the DOM if we know there are no patches there.
            function E(t, r, e, o) {
                R(t, r, e, 0, 0, r.descendantsCount, o);
            }
            // assumes `patches` is non-empty and indexes increase monotonically.
            function R(t, r, e, o, n, c, a) {
                for (var _ = e[o], i = _.index; i === n; ) {
                    var l = _.type;
                    if ("p-thunk" === l) E(t, r.node, _.data, a); else if ("p-reorder" === l) _.domNode = t, 
                    _.eventNode = a, (s = _.data.patches).length > 0 && R(t, r, s, 0, n, c, a); else if ("p-remove" === l) {
                        _.domNode = t, _.eventNode = a;
                        var u = _.data;
                        if (void 0 !== u) {
                            u.entry.data = t;
                            var s = u.patches;
                            s.length > 0 && R(t, r, s, 0, n, c, a);
                        }
                    } else _.domNode = t, _.eventNode = a;
                    if (o++, !(_ = e[o]) || (i = _.index) > c) return o;
                }
                switch (r.type) {
                  case "tagger":
                    for (var d = r.node; "tagger" === d.type; ) d = d.node;
                    return R(t, d, e, o, n + 1, c, t.elm_event_node_ref);

                  case "node":
                    for (var p = r.children, g = t.childNodes, f = 0; p.length > f; f++) {
                        if (h = ++n + ((v = p[f]).descendantsCount || 0), i >= n && h >= i && (o = R(g[f], v, e, o, n, h, a), 
                        !(_ = e[o]) || (i = _.index) > c)) return o;
                        n = h;
                    }
                    return o;

                  case "keyed-node":
                    for (var p = r.children, g = t.childNodes, f = 0; p.length > f; f++) {
                        n++;
                        var v = p[f]._1, h = n + (v.descendantsCount || 0);
                        if (i >= n && h >= i && (o = R(g[f], v, e, o, n, h, a), !(_ = e[o]) || (i = _.index) > c)) return o;
                        n = h;
                    }
                    return o;

                  case "text":
                  case "thunk":
                    throw Error("should never traverse `text` or `thunk` nodes like this");
                }
            }
            ////////////  APPLY PATCHES  ////////////
            function A(t, r, e, o) {
                return 0 === e.length ? t : (E(t, r, e, o), C(t, e));
            }
            function C(t, r) {
                for (var e = 0; r.length > e; e++) {
                    var o = r[e], n = o.domNode, c = M(n, o);
                    n === t && (t = c);
                }
                return t;
            }
            function M(t, r) {
                switch (r.type) {
                  case "p-redraw":
                    return O(t, r.data, r.eventNode);

                  case "p-facts":
                    return s(t, r.eventNode, r.data), t;

                  case "p-text":
                    return t.replaceData(0, t.length, r.data), t;

                  case "p-thunk":
                    return C(t, r.data);

                  case "p-tagger":
                    return void 0 !== t.elm_event_node_ref ? t.elm_event_node_ref.tagger = r.data : t.elm_event_node_ref = {
                        tagger: r.data,
                        parent: r.eventNode
                    }, t;

                  case "p-remove-last":
                    for (o = r.data; o--; ) t.removeChild(t.lastChild);
                    return t;

                  case "p-append":
                    for (var e = r.data, o = 0; e.length > o; o++) t.appendChild(i(e[o], r.eventNode));
                    return t;

                  case "p-remove":
                    var n = r.data;
                    if (void 0 === n) return t.parentNode.removeChild(t), t;
                    var c = n.entry;
                    return void 0 !== c.index && t.parentNode.removeChild(t), c.data = C(t, n.patches), 
                    t;

                  case "p-reorder":
                    return S(t, r);

                  case "p-custom":
                    var a = r.data;
                    return a.applyPatch(t, a.data);

                  default:
                    throw Error("Ran into an unknown patch!");
                }
            }
            function O(t, r, e) {
                var o = t.parentNode, n = i(r, e);
                return void 0 === n.elm_event_node_ref && (n.elm_event_node_ref = t.elm_event_node_ref), 
                o && n !== t && o.replaceChild(n, t), n;
            }
            function S(t, r) {
                var e = r.data, o = L(e.endInserts, r);
                // removals
                t = C(t, e.patches);
                for (var n = e.inserts, c = 0; n.length > c; c++) {
                    var a = n[c], _ = a.entry, l = "move" === _.tag ? _.data : i(_.vnode, r.eventNode);
                    t.insertBefore(l, t.childNodes[a.index]);
                }
                // add end inserts
                return void 0 !== o && t.appendChild(o), t;
            }
            function L(t, r) {
                if (void 0 !== t) {
                    for (var e = Z.createDocumentFragment(), o = 0; t.length > o; o++) {
                        var n = t[o].entry;
                        e.appendChild("move" === n.tag ? n.data : i(n.vnode, r.eventNode));
                    }
                    return e;
                }
            }
            function P(t) {
                return r((r, e) => o => (n, c, a) => {
                    var _ = t(o, c);
                    void 0 === a ? J(e, n, 0, _) : U(l(r, a, e), n, c, _);
                });
            }
            function I(t, r) {
                throw r && (r.innerHTML = '<div style="padding-left:1em;"><h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2><pre style="padding-left:1em;">' + t + "</pre></div>"), 
                Error(t);
            }
            //  NORMAL SETUP
            function J(t, r, e, o) {
                r.embed = ((r, e) => {
                    for (;r.lastChild; ) r.removeChild(r.lastChild);
                    return lt.initialize(o(t.init, e, r), t.update, t.subscriptions, D(r, t.view));
                }), r.fullscreen = (r => lt.initialize(o(t.init, r, document.body), t.update, t.subscriptions, D(document.body, t.view)));
            }
            function D(t, r) {
                return (e, o) => {
                    var n = {
                        tagger: e,
                        parent: void 0
                    }, c = r(o), a = i(c, n);
                    return t.appendChild(a), F(a, r, c, n);
                };
            }
            function F(t, r, e, o) {
                function n() {
                    switch (a) {
                      case "NO_REQUEST":
                        throw Error("Unexpected draw callback.\nPlease report this to <https://github.com/elm-lang/virtual-dom/issues>.");

                      case "PENDING_REQUEST":
                        ot(n), a = "EXTRA_REQUEST";
                        var e = r(c), i = m(_, e);
                        return t = A(t, _, i, o), void (_ = e);

                      case "EXTRA_REQUEST":
                        return void (a = "NO_REQUEST");
                    }
                }
                var c, a = "NO_REQUEST", _ = e;
                return t => {
                    "NO_REQUEST" === a && ot(n), a = "PENDING_REQUEST", c = t;
                };
            }
            // DEBUG SETUP
            function U(t, r, e, o) {
                r.fullscreen = (r => {
                    var n = {
                        doc: void 0
                    };
                    return lt.initialize(o(t.init, r, document.body), t.update(j(n)), t.subscriptions, q(e, document.body, n, t.view, t.viewIn, t.viewOut));
                }), r.embed = ((r, n) => {
                    var c = {
                        doc: void 0
                    };
                    return lt.initialize(o(t.init, n, r), t.update(j(c)), t.subscriptions, q(e, r, c, t.view, t.viewIn, t.viewOut));
                });
            }
            function j(t) {
                return ut.nativeBinding(r => {
                    var e = t.doc;
                    if (e) {
                        var o = e.getElementsByClassName("debugger-sidebar-messages")[0];
                        o && (o.scrollTop = o.scrollHeight);
                    }
                    r(ut.succeed(f.Tuple0));
                });
            }
            function q(t, r, e, o, n, c) {
                return (a, _) => {
                    var l = {
                        tagger: a,
                        parent: void 0
                    }, u = {
                        tagger: a,
                        parent: void 0
                    }, s = o(_), d = i(s, l);
                    r.appendChild(d);
                    var p = F(d, o, s, l), g = n(_)._1, f = i(g, u);
                    r.appendChild(f);
                    var v = F(f, W(l, f, n), g, u), h = H(0, c, u, 0, t, e);
                    return t => {
                        p(t), v(t), h(t);
                    };
                };
            }
            function H(t, r, e, o, n, c) {
                var a, _;
                // switch to document of popout
                // switch back to normal document
                return t => {
                    if (t.isDebuggerOpen) {
                        if (!c.doc) return a = r(t), void (_ = z(n, c, a, e));
                        Z = c.doc;
                        var o = r(t), i = m(a, o);
                        _ = A(_, a, i, e), a = o, Z = document;
                    }
                };
            }
            function z(t, r, e, o) {
                function n() {
                    r.doc = void 0, _.close();
                }
                var c = screen.width - 900, a = screen.height - 360, _ = window.open("", "", "width=900,height=360,left=" + c + ",top=" + a);
                // switch to window document
                Z = _.document, r.doc = Z, Z.title = "Debugger - " + t, Z.body.style.margin = "0", 
                Z.body.style.padding = "0";
                var l = i(e, o);
                // switch back to the normal document
                return Z.body.appendChild(l), Z.addEventListener("keydown", t => {
                    t.metaKey && 82 === t.which && window.location.reload(), 38 === t.which && (o.tagger({
                        ctor: "Up"
                    }), t.preventDefault()), 40 === t.which && (o.tagger({
                        ctor: "Down"
                    }), t.preventDefault());
                }), window.addEventListener("unload", n), _.addEventListener("unload", () => {
                    r.doc = void 0, window.removeEventListener("unload", n), o.tagger({
                        ctor: "Close"
                    });
                }), Z = document, l;
            }
            // BLOCK EVENTS
            function W(t, r, e) {
                var o, n = V(r), c = "Normal", a = t.tagger, _ = () => {};
                return r => {
                    var i = e(r), l = i._0.ctor;
                    return t.tagger = "Normal" === l ? a : _, c !== l && (G("removeEventListener", n, c), 
                    G("addEventListener", n, l), "Normal" === c && (o = document.body.style.overflow, 
                    document.body.style.overflow = "hidden"), "Normal" === l && (document.body.style.overflow = o), 
                    c = l), i._1;
                };
            }
            function G(t, r, e) {
                switch (e) {
                  case "Normal":
                    return;

                  case "Pause":
                    return Q(t, r, nt);

                  case "Message":
                    return Q(t, r, ct);
                }
            }
            function Q(t, r, e) {
                for (var o = 0; e.length > o; o++) document.body[t](e[o], r, !0);
            }
            function V(t) {
                return r => {
                    if ("keydown" !== r.type || !r.metaKey || 82 !== r.which) {
                        for (var e = "scroll" === r.type || "wheel" === r.type, o = r.target; null !== o; ) {
                            if ("elm-overlay-message-details" === o.className && e) return;
                            if (o === t && !e) return;
                            o = o.parentNode;
                        }
                        r.stopPropagation(), r.preventDefault();
                    }
                };
            }
            var $ = "STYLE", X = "EVENT", K = "ATTR", Y = "ATTR_NS", Z = "undefined" != typeof document ? document : {}, tt = "_elmW6BL", rt = P(// FLAG CHECKERS
            (t, r) => (t, e, o) => {
                if (void 0 === e) return t;
                I("The `" + r + "` module does not need flags.\nInitialize it with no arguments and you should be all set!", o);
            }), et = P((t, r) => (e, o, n) => {
                void 0 === t && I(a = "Are you trying to sneak a Never value into Elm? Trickster!\nIt looks like " + r + ".main is defined with `programWithFlags` but has type `Program Never`.\nUse `program` instead if you do not want flags.", n);
                var c = l(Nr.run, t, o);
                if ("Ok" === c.ctor) return e(c._0);
                var a = "Trying to initialize the `" + r + "` module with an unexpected flag.\nI tried to convert it to an Elm value, but ran into this problem:\n\n" + c._0;
                I(a, n);
            }), ot = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : t => {
                setTimeout(t, 1e3 / 60);
            }, nt = [ "click", "dblclick", "mousemove", "mouseup", "mousedown", "mouseenter", "mouseleave", "touchstart", "touchend", "touchcancel", "touchmove", "pointerdown", "pointerup", "pointerover", "pointerout", "pointerenter", "pointerleave", "pointermove", "pointercancel", "dragstart", "drag", "dragend", "dragenter", "dragover", "dragleave", "drop", "keyup", "keydown", "keypress", "input", "change", "focus", "blur" ], ct = nt.concat("wheel", "scroll");
            return {
                node: e => r((r, o) => t(e, r, o)),
                text: ////////////  VIRTUAL DOM NODES  ////////////
                t => ({
                    type: "text",
                    text: t
                }),
                custom: (t, r, e) => ({
                    type: "custom",
                    facts: c(t).facts,
                    model: r,
                    impl: e
                }),
                map: r((t, r) => ({
                    type: "tagger",
                    tagger: t,
                    node: r,
                    descendantsCount: 1 + (r.descendantsCount || 0)
                })),
                on: e(a),
                style: ////////////  PROPERTIES AND ATTRIBUTES  ////////////
                t => ({
                    key: $,
                    value: t
                }),
                property: r((t, r) => ({
                    key: t,
                    value: r
                })),
                attribute: r((t, r) => ({
                    key: K,
                    realKey: t,
                    value: r
                })),
                attributeNS: e((t, r, e) => ({
                    key: Y,
                    realKey: r,
                    value: {
                        value: e,
                        namespace: t
                    }
                })),
                mapProperty: r((t, r) => r.key !== X ? r : a(r.realKey, r.value.options, l(Jr, t, r.value.decoder))),
                lazy: r((t, r) => n(t, [ r ], () => t(r))),
                lazy2: e((t, r, e) => n(t, [ r, e ], () => l(t, r, e))),
                lazy3: o((t, r, e, o) => n(t, [ r, e, o ], () => u(t, r, e, o))),
                keyedNode: e((t, r, e) => {
                    for (var o = c(r), n = o.namespace, a = o.facts, _ = [], i = 0; "[]" !== e.ctor; ) {
                        var l = e._0;
                        i += l._1.descendantsCount || 0, _.push(l), e = e._1;
                    }
                    return i += _.length, {
                        type: "keyed-node",
                        tag: t,
                        facts: a,
                        children: _,
                        namespace: n,
                        descendantsCount: i
                    };
                }),
                program: rt,
                programWithFlags: et,
                staticProgram(t) {
                    var e = f.Tuple2(f.Tuple0, dt);
                    return l(rt, void 0, {
                        init: e,
                        view: () => t,
                        update: r(() => e),
                        subscriptions: () => vt
                    })();
                }
            };
        })(), Ie = t => l(Pe.program, void 0, t), Je = {
            stopPropagation: !1,
            preventDefault: !1
        }, De = Pe.on, Fe = r((t, r) => u(De, t, Je, r)), Ue = Pe.style, je = Pe.attributeNS, qe = Pe.attribute, He = Pe.property, ze = Pe.map, We = Pe.text, Ge = Pe.node, Qe = (r((t, r) => ({
            stopPropagation: t,
            preventDefault: r
        })), t => l(Pe.programWithFlags, void 0, t)), Ve = Ie, $e = ze, Xe = We, Ke = Ge, Ye = (Ke("body"), 
        Ke("section"), Ke("nav"), Ke("article"), Ke("aside"), Ke("h1"), Ke("h2")), Ze = (Ke("h3"), 
        Ke("h4"), Ke("h5"), Ke("h6"), Ke("header"), Ke("footer"), Ke("address"), Ke("main"), 
        Ke("p"), Ke("hr")), to = (Ke("pre"), Ke("blockquote"), Ke("ol"), Ke("ul"), Ke("li"), 
        Ke("dl")), ro = Ke("dt"), eo = Ke("dd"), oo = (Ke("figure"), Ke("figcaption"), Ke("div")), no = Ke("a"), co = (Ke("em"), 
        Ke("strong"), Ke("small"), Ke("s"), Ke("cite"), Ke("q"), Ke("dfn"), Ke("abbr"), 
        Ke("time"), Ke("code"), Ke("var"), Ke("samp"), Ke("kbd"), Ke("sub"), Ke("sup"), 
        Ke("i")), ao = (Ke("b"), Ke("u"), Ke("mark"), Ke("ruby"), Ke("rt"), Ke("rp"), Ke("bdi"), 
        Ke("bdo"), Ke("span")), _o = (Ke("br"), Ke("wbr"), Ke("ins"), Ke("del"), Ke("img"), 
        Ke("iframe"), Ke("embed"), Ke("object"), Ke("param"), Ke("video"), Ke("audio"), 
        Ke("source"), Ke("track"), Ke("canvas"), Ke("math"), Ke("table"), Ke("caption"), 
        Ke("colgroup"), Ke("col"), Ke("tbody"), Ke("thead"), Ke("tfoot"), Ke("tr"), Ke("td"), 
        Ke("th"), Ke("form")), io = (Ke("fieldset"), Ke("legend"), Ke("label"), Ke("input")), lo = Ke("button"), uo = (Ke("select"), 
        Ke("datalist"), Ke("optgroup"), Ke("option"), Ke("textarea"), Ke("keygen"), Ke("output"), 
        Ke("progress"), Ke("meter"), Ke("details"), Ke("summary"), Ke("menuitem"), Ke("menu"), 
        qe), so = t => l(uo, "tabIndex", k(t)), po = He, go = r((t, r) => l(po, t, Rr(r))), fo = t => l(go, "className", t), vo = t => l(go, "title", t), ho = t => l(go, "type", t), mo = t => l(go, "value", t), bo = t => l(go, "href", t), yo = (r((t, r) => l(po, t, Er(r))), 
        Ue), ko = (l(Fr, "keyCode", qr), l(Ur, {
            ctor: "::",
            _0: "target",
            _1: {
                ctor: "::",
                _0: "checked",
                _1: {
                    ctor: "[]"
                }
            }
        }, Hr), l(Ur, {
            ctor: "::",
            _0: "target",
            _1: {
                ctor: "::",
                _0: "value",
                _1: {
                    ctor: "[]"
                }
            }
        }, zr)), To = Je, wo = Fe, xo = (f.update(To, {
            preventDefault: !0
        }), t => l(wo, "input", l(Jr, t, ko))), Bo = t => l(wo, "click", Sr(t)), No = (r((t, r) => ({
            stopPropagation: t,
            preventDefault: r
        })), (() => {
            function t(t, r) {
                "Nothing" !== r.ctor && t.addEventListener("progress", t => {
                    t.lengthComputable && ut.rawSpawn(r._0({
                        bytes: t.loaded,
                        bytesExpected: t.total
                    }));
                });
            }
            function e(t, r) {
                l(D, r => {
                    t.setRequestHeader(r._0, r._1);
                }, r.headers), t.responseType = r.expect.responseType, t.withCredentials = r.withCredentials, 
                "Just" === r.timeout.ctor && (t.timeout = r.timeout._0);
            }
            function o(t, r) {
                switch (r.ctor) {
                  case "EmptyBody":
                    return void t.send();

                  case "StringBody":
                    return t.setRequestHeader("Content-Type", r._0), void t.send(r._1);

                  case "FormDataBody":
                    return void t.send(r._0);
                }
            }
            // RESPONSES
            function n(t, r) {
                var e = c(t);
                if (200 > t.status || t.status >= 300) return e.body = t.responseText, ut.fail({
                    ctor: "BadStatus",
                    _0: e
                });
                var o = r(e);
                return "Ok" === o.ctor ? ut.succeed(o._0) : (e.body = t.responseText, ut.fail({
                    ctor: "BadPayload",
                    _0: o._0,
                    _1: e
                }));
            }
            function c(t) {
                return {
                    status: {
                        code: t.status,
                        message: t.statusText
                    },
                    headers: a(t.getAllResponseHeaders()),
                    url: t.responseURL,
                    body: t.response
                };
            }
            function a(t) {
                var r = cr;
                if (!t) return r;
                for (var e = t.split("\r\n"), o = e.length; o--; ) {
                    var n = e[o], c = n.indexOf(": ");
                    if (c > 0) {
                        var a = n.substring(0, c), _ = n.substring(c + 2);
                        r = u(kr, a, t => R("Just" === t.ctor ? _ + ", " + t._0 : _), r);
                    }
                }
                return r;
            }
            return {
                toTask: r(// SEND REQUEST
                (r, c) => ut.nativeBinding(a => {
                    var _ = new XMLHttpRequest();
                    t(_, c), _.addEventListener("error", () => {
                        a(ut.fail({
                            ctor: "NetworkError"
                        }));
                    }), _.addEventListener("timeout", () => {
                        a(ut.fail({
                            ctor: "Timeout"
                        }));
                    }), _.addEventListener("load", () => {
                        a(n(_, r.expect.responseToResult));
                    });
                    try {
                        _.open(r.method, r.url, !0);
                    } catch (t) {
                        return a(ut.fail({
                            ctor: "BadUrl",
                            _0: r.url
                        }));
                    }
                    return e(_, r), o(_, r.body), () => {
                        _.abort();
                    };
                })),
                expectStringResponse: // EXPECTORS
                t => ({
                    responseType: "text",
                    responseToResult: t
                }),
                mapExpect: r((t, r) => ({
                    responseType: r.responseType,
                    responseToResult(e) {
                        var o = r.responseToResult(e);
                        return l(Z, t, o);
                    }
                })),
                multipart(t) {
                    for (var r = new FormData(); "[]" !== t.ctor; ) {
                        var e = t._0;
                        r.append(e._0, e._1), t = t._1;
                    }
                    return {
                        ctor: "FormDataBody",
                        _0: r
                    };
                },
                encodeUri: // ENCODING AND DECODING
                t => encodeURIComponent(t),
                decodeUri(t) {
                    try {
                        return R(decodeURIComponent(t));
                    } catch (t) {
                        return N;
                    }
                }
            };
        })()), Eo = (r((t, r) => f.update(r, {
            expect: l(No.mapExpect, t, r.expect)
        })), a((t, r, e, o, n, c, a) => ({
            method: t,
            headers: r,
            url: e,
            body: o,
            expect: n,
            timeout: c,
            withCredentials: a
        })), r((t, r) => ({
            ctor: "StringBody",
            _0: t,
            _1: r
        })), {
            ctor: "EmptyBody"
        }), Ro = (r((t, r) => ({
            ctor: "Header",
            _0: t,
            _1: r
        })), No.decodeUri), Ao = No.expectStringResponse, Co = t => Ao(r => l(Pr, t, r.body)), Mo = (Ao(t => Y(t.body)), 
        Eo), Oo = t => ({
            ctor: "Request",
            _0: t
        }), So = (e((t, r, e) => Oo({
            method: "POST",
            headers: {
                ctor: "[]"
            },
            url: t,
            body: r,
            expect: Co(e),
            timeout: N,
            withCredentials: !1
        })), r((t, r) => Oo({
            method: "GET",
            headers: {
                ctor: "[]"
            },
            url: t,
            body: Mo,
            expect: Co(r),
            timeout: N,
            withCredentials: !1
        })), t => {
            var r = t;
            return l(No.toTask, r._0, N);
        }), Lo = r((t, r) => l(ve, t, So(r))), Po = (o((t, r, e, o) => ({
            url: t,
            status: r,
            headers: e,
            body: o
        })), r((t, r) => ({
            ctor: "BadPayload",
            _0: t,
            _1: r
        })), r((t, r) => ({
            ctor: "StringPart",
            _0: t,
            _1: r
        })), (() => {
            // GET LOCATION
            function t() {
                var t = document.location;
                return {
                    href: t.href,
                    host: t.host,
                    hostname: t.hostname,
                    protocol: t.protocol,
                    origin: t.origin,
                    port_: t.port,
                    pathname: t.pathname,
                    search: t.search,
                    hash: t.hash,
                    username: t.username,
                    password: t.password
                };
            }
            return {
                go: // FAKE NAVIGATION
                t => ut.nativeBinding(r => {
                    0 !== t && history.go(t), r(ut.succeed(f.Tuple0));
                }),
                setLocation: t => ut.nativeBinding(r => {
                    try {
                        window.location = t;
                    } catch (t) {
                        // Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
                        // Other browsers reload the page, so let's be consistent about that.
                        document.location.reload(!1);
                    }
                    r(ut.succeed(f.Tuple0));
                }),
                reloadPage: // REAL NAVIGATION
                t => ut.nativeBinding(r => {
                    document.location.reload(t), r(ut.succeed(f.Tuple0));
                }),
                pushState: r => ut.nativeBinding(e => {
                    history.pushState({}, "", r), e(ut.succeed(t()));
                }),
                replaceState: r => ut.nativeBinding(e => {
                    history.replaceState({}, "", r), e(ut.succeed(t()));
                }),
                getLocation: t,
                isInternetExplorer11: // DETECT IE11 PROBLEMS
                () => -1 !== window.navigator.userAgent.indexOf("Trident")
            };
        })()), Io = Po.replaceState, Jo = Po.pushState, Do = Po.go, Fo = Po.reloadPage, Uo = Po.setLocation, jo = jo || {};
        jo["&>"] = r((t, r) => l(oe, () => r, t));
        var qo = e((t, r, e) => l(jo["&>"], le(l(D, r => l(bt, t, r._0(e)), r)), ae({
            ctor: "_Tuple0"
        }))), Ho = e((t, r, e) => {
            var o = e;
            switch (o.ctor) {
              case "Jump":
                return Do(o._0);

              case "New":
                return l(oe, l(qo, t, r), Jo(o._0));

              case "Modify":
                return l(oe, l(qo, t, r), Io(o._0));

              case "Visit":
                return Uo(o._0);

              default:
                return Fo(o._0);
            }
        }), zo = t => {
            var r = t;
            return "Normal" === r.ctor ? Me(r._0) : l(jo["&>"], Me(r._0), Me(r._1));
        }, Wo = e((t, r, e) => l(jo["&>"], u(qo, t, e.subs, r), ae(e))), Go = lt.leaf("Navigation"), Qo = lt.leaf("Navigation"), Vo = r((t, r) => ({
            subs: t,
            popWatcher: r
        })), $o = ae(l(Vo, {
            ctor: "[]"
        }, N)), Xo = t => ({
            ctor: "Reload",
            _0: t
        }), Ko = (Qo(Xo(!1)), Qo(Xo(!0)), t => ({
            ctor: "Visit",
            _0: t
        })), Yo = t => ({
            ctor: "Modify",
            _0: t
        }), Zo = t => ({
            ctor: "New",
            _0: t
        }), tn = t => Qo(Zo(t)), rn = t => ({
            ctor: "Jump",
            _0: t
        }), en = r((t, r) => {
            var e = r;
            switch (e.ctor) {
              case "Jump":
                return rn(e._0);

              case "New":
                return Zo(e._0);

              case "Modify":
                return Yo(e._0);

              case "Visit":
                return Ko(e._0);

              default:
                return Xo(e._0);
            }
        }), on = t => ({
            ctor: "Monitor",
            _0: t
        }), nn = r((t, r) => {
            var e = r.init(Po.getLocation({
                ctor: "_Tuple0"
            }));
            return Ve({
                init: e,
                view: r.view,
                update: r.update,
                subscriptions: e => ft({
                    ctor: "::",
                    _0: Go(on(t)),
                    _1: {
                        ctor: "::",
                        _0: r.subscriptions(e),
                        _1: {
                            ctor: "[]"
                        }
                    }
                })
            });
        }), cn = (r((t, r) => Qe({
            init: t => l(r.init, t, Po.getLocation({
                ctor: "_Tuple0"
            })),
            view: r.view,
            update: r.update,
            subscriptions: e => ft({
                ctor: "::",
                _0: Go(on(t)),
                _1: {
                    ctor: "::",
                    _0: r.subscriptions(e),
                    _1: {
                        ctor: "[]"
                    }
                }
            })
        })), r((t, r) => {
            var e = r;
            return on(r => t(e._0(r)));
        })), an = r((t, r) => ({
            ctor: "InternetExplorer",
            _0: t,
            _1: r
        })), _n = t => ({
            ctor: "Normal",
            _0: t
        }), ln = t => {
            var r = () => l(mt, t, Po.getLocation({
                ctor: "_Tuple0"
            }));
            return Po.isInternetExplorer11({
                ctor: "_Tuple0"
            }) ? u(ie, an, Se(u(Le, "popstate", Cr, r)), Se(u(Le, "hashchange", Cr, r))) : l(_e, _n, Se(u(Le, "popstate", Cr, r)));
        }, un = o((t, r, e, o) => {
            var n = o.popWatcher, c = (() => {
                var r = {
                    ctor: "_Tuple2",
                    _0: e,
                    _1: n
                };
                t: do {
                    if ("[]" === r._0.ctor) {
                        if ("Just" === r._1.ctor) return l(jo["&>"], zo(r._1._0), ae(l(Vo, e, N)));
                        break t;
                    }
                    if ("Nothing" === r._1.ctor) return l(_e, t => l(Vo, e, R(t)), ln(t));
                    break t;
                } while (!1);
                return ae(l(Vo, e, n));
            })();
            return l(jo["&>"], le(l(D, l(Ho, t, e), r)), c);
        });
        lt.effectManagers.Navigation = {
            pkg: "elm-lang/navigation",
            init: $o,
            onEffects: un,
            onSelfMsg: Wo,
            tag: "fx",
            cmdMap: en,
            subMap: cn
        };
        var sn = l(He, "namespace", Rr("http://www.w3.org/2000/svg")), dn = e((t, r, e) => u(Ge, t, {
            ctor: "::",
            _0: sn,
            _1: r
        }, e)), pn = dn("svg"), gn = (dn("foreignObject"), dn("animate"), dn("animateColor"), 
        dn("animateMotion"), dn("animateTransform"), dn("mpath"), dn("set"), dn("a"), dn("defs"), 
        dn("g"), dn("marker"), dn("mask"), dn("pattern"), dn("switch"), dn("symbol"), dn("desc"), 
        dn("metadata"), dn("title"), dn("feBlend"), dn("feColorMatrix"), dn("feComponentTransfer"), 
        dn("feComposite"), dn("feConvolveMatrix"), dn("feDiffuseLighting"), dn("feDisplacementMap"), 
        dn("feFlood"), dn("feFuncA"), dn("feFuncB"), dn("feFuncG"), dn("feFuncR"), dn("feGaussianBlur"), 
        dn("feImage"), dn("feMerge"), dn("feMergeNode"), dn("feMorphology"), dn("feOffset"), 
        dn("feSpecularLighting"), dn("feTile"), dn("feTurbulence"), dn("font"), dn("linearGradient"), 
        dn("radialGradient"), dn("stop"), dn("circle"), dn("ellipse"), dn("image"), dn("line")), fn = (dn("path"), 
        dn("polygon"), dn("polyline"), dn("rect"), dn("use"), dn("feDistantLight"), dn("fePointLight"), 
        dn("feSpotLight"), dn("altGlyph"), dn("altGlyphDef"), dn("altGlyphItem"), dn("glyph"), 
        dn("glyphRef"), dn("textPath"), dn("text"), dn("tref"), dn("tspan"), dn("clipPath"), 
        dn("colorProfile"), dn("cursor"), dn("filter"), dn("script"), dn("style"), dn("view"), 
        qe("writing-mode"), qe("word-spacing"), qe("visibility"), qe("unicode-bidi"), qe("text-rendering"), 
        qe("text-decoration"), qe("text-anchor"), qe("stroke"), qe("stroke-width"), qe("stroke-opacity"), 
        qe("stroke-miterlimit"), qe("stroke-linejoin"), qe("stroke-linecap")), vn = (qe("stroke-dashoffset"), 
        qe("stroke-dasharray"), qe("stop-opacity"), qe("stop-color"), qe("shape-rendering"), 
        qe("pointer-events"), qe("overflow"), qe("opacity"), qe("mask"), qe("marker-start"), 
        qe("marker-mid"), qe("marker-end"), qe("lighting-color"), qe("letter-spacing"), 
        qe("kerning"), qe("image-rendering"), qe("glyph-orientation-vertical"), qe("glyph-orientation-horizontal"), 
        qe("font-weight"), qe("font-variant"), qe("font-style"), qe("font-stretch"), qe("font-size"), 
        qe("font-size-adjust"), qe("font-family"), qe("flood-opacity"), qe("flood-color"), 
        qe("filter"), qe("fill"), qe("fill-rule"), qe("fill-opacity"), qe("enable-background"), 
        qe("dominant-baseline"), qe("display"), qe("direction"), qe("cursor"), qe("color"), 
        qe("color-rendering"), qe("color-profile"), qe("color-interpolation"), qe("color-interpolation-filters"), 
        qe("clip"), qe("clip-rule"), qe("clip-path"), qe("baseline-shift"), qe("alignment-baseline"), 
        qe("zoomAndPan"), qe("z"), qe("yChannelSelector"), qe("y2")), hn = qe("y1"), mn = (qe("y"), 
        l(je, "http://www.w3.org/XML/1998/namespace", "xml:space"), l(je, "http://www.w3.org/XML/1998/namespace", "xml:lang"), 
        l(je, "http://www.w3.org/XML/1998/namespace", "xml:base"), l(je, "http://www.w3.org/1999/xlink", "xlink:type"), 
        l(je, "http://www.w3.org/1999/xlink", "xlink:title"), l(je, "http://www.w3.org/1999/xlink", "xlink:show"), 
        l(je, "http://www.w3.org/1999/xlink", "xlink:role"), l(je, "http://www.w3.org/1999/xlink", "xlink:href"), 
        l(je, "http://www.w3.org/1999/xlink", "xlink:arcrole"), l(je, "http://www.w3.org/1999/xlink", "xlink:actuate"), 
        qe("xChannelSelector"), qe("x2")), bn = qe("x1"), yn = (qe("x-height"), qe("x"), 
        qe("widths"), qe("width"), qe("viewTarget"), qe("viewBox"), qe("vert-origin-y"), 
        qe("vert-origin-x"), qe("vert-adv-y"), qe("version"), qe("values"), qe("v-mathematical"), 
        qe("v-ideographic"), qe("v-hanging"), qe("v-alphabetic"), qe("units-per-em"), qe("unicode-range"), 
        qe("unicode"), qe("underline-thickness"), qe("underline-position"), qe("u2"), qe("u1"), 
        qe("type"), qe("transform"), qe("to"), qe("title"), qe("textLength"), qe("targetY"), 
        qe("targetX"), qe("target"), qe("tableValues"), qe("systemLanguage"), qe("surfaceScale"), 
        qe("style"), qe("string"), qe("strikethrough-thickness"), qe("strikethrough-position"), 
        qe("stitchTiles"), qe("stemv"), qe("stemh"), qe("stdDeviation"), qe("startOffset"), 
        qe("spreadMethod"), qe("speed"), qe("specularExponent"), qe("specularConstant"), 
        qe("spacing"), qe("slope"), qe("seed"), qe("scale"), qe("ry"), qe("rx"), qe("rotate"), 
        qe("result"), qe("restart"), qe("requiredFeatures"), qe("requiredExtensions"), qe("repeatDur"), 
        qe("repeatCount"), qe("rendering-intent"), qe("refY"), qe("refX"), qe("radius"), 
        qe("r"), qe("primitiveUnits"), qe("preserveAspectRatio"), qe("preserveAlpha"), qe("pointsAtZ"), 
        qe("pointsAtY"), qe("pointsAtX"), qe("points"), qe("point-order"), qe("patternUnits"), 
        qe("patternTransform"), qe("patternContentUnits"), qe("pathLength"), qe("path"), 
        qe("panose-1"), qe("overline-thickness"), qe("overline-position"), qe("origin"), 
        qe("orientation"), qe("orient"), qe("order"), qe("operator"), qe("offset"), qe("numOctaves"), 
        qe("name"), qe("mode"), qe("min"), qe("method"), qe("media"), qe("max"), qe("mathematical"), 
        qe("maskUnits"), qe("maskContentUnits"), qe("markerWidth"), qe("markerUnits"), qe("markerHeight"), 
        qe("local"), qe("limitingConeAngle"), qe("lengthAdjust"), qe("lang"), qe("keyTimes"), 
        qe("keySplines"), qe("keyPoints"), qe("kernelUnitLength"), qe("kernelMatrix"), qe("k4"), 
        qe("k3"), qe("k2"), qe("k1"), qe("k"), qe("intercept"), qe("in2"), qe("in"), qe("ideographic"), 
        qe("id"), qe("horiz-origin-y"), qe("horiz-origin-x"), qe("horiz-adv-x"), qe("height"), 
        qe("hanging"), qe("gradientUnits"), qe("gradientTransform"), qe("glyphRef"), qe("glyph-name"), 
        qe("g2"), qe("g1"), qe("fy"), qe("fx"), qe("from"), qe("format"), qe("filterUnits"), 
        qe("filterRes"), qe("externalResourcesRequired"), qe("exponent"), qe("end"), qe("elevation"), 
        qe("edgeMode"), qe("dy"), qe("dx"), qe("dur"), qe("divisor"), qe("diffuseConstant"), 
        qe("descent"), qe("decelerate"), qe("d"), qe("cy"), qe("cx"), qe("contentStyleType"), 
        qe("contentScriptType"), qe("clipPathUnits"), qe("class")), kn = (qe("cap-height"), 
        qe("calcMode"), qe("by"), qe("bias"), qe("begin"), qe("bbox"), qe("baseProfile"), 
        qe("baseFrequency"), qe("azimuth"), qe("autoReverse"), qe("attributeType"), qe("attributeName"), 
        qe("ascent"), qe("arabic-form"), qe("amplitude"), qe("allowReorder"), qe("alphabetic"), 
        qe("additive"), qe("accumulate"), qe("accelerate"), qe("accent-height"), t => {
            var e = l(ct, "=", t);
            return "::" === e.ctor && "::" === e._1.ctor && "[]" === e._1._1.ctor ? u(C, r((t, r) => ({
                ctor: "_Tuple2",
                _0: t,
                _1: r
            })), Ro(e._0), Ro(e._1._0)) : N;
        }), Tn = t => xr(l(U, kn, l(ct, "&", l(nt, 1, t)))), wn = t => {
            var r = l(ct, "/", t);
            return "::" === r.ctor && "" === r._0 ? r._1 : r;
        }, xn = t => {
            for (;;) {
                var r = t;
                if ("[]" === r.ctor) return N;
                var e = r._0, o = e.unvisited;
                if ("[]" === o.ctor) return R(e.value);
                if ("" === o._0 && "[]" === o._1.ctor) return R(e.value);
                t = r._1;
            }
        }, Bn = e((t, r, e) => xn(t._0({
            visited: {
                ctor: "[]"
            },
            unvisited: wn(r),
            params: e,
            value: b
        }))), Nn = r((t, r) => u(Bn, t, l(nt, 1, r.hash), Tn(r.search))), En = (r((t, r) => u(Bn, t, r.pathname, Tn(r.search))), 
        r((t, r) => {
            var e = r;
            return {
                visited: e.visited,
                unvisited: e.unvisited,
                params: e.params,
                value: t(e.value)
            };
        })), Rn = o((t, r, e, o) => ({
            visited: t,
            unvisited: r,
            params: e,
            value: o
        })), An = t => ({
            ctor: "Parser",
            _0: t
        }), Cn = t => An(r => {
            var e = r, o = e.unvisited;
            if ("[]" === o.ctor) return {
                ctor: "[]"
            };
            var n = o._0;
            return f.eq(n, t) ? {
                ctor: "::",
                _0: s(Rn, {
                    ctor: "::",
                    _0: n,
                    _1: e.visited
                }, o._1, e.params, e.value),
                _1: {
                    ctor: "[]"
                }
            } : {
                ctor: "[]"
            };
        }), Mn = r((t, r) => An(t => {
            var e = t, o = e.unvisited;
            if ("[]" === o.ctor) return {
                ctor: "[]"
            };
            var n = o._0, c = r(n);
            return "Ok" === c.ctor ? {
                ctor: "::",
                _0: s(Rn, {
                    ctor: "::",
                    _0: n,
                    _1: e.visited
                }, o._1, e.params, e.value(c._0)),
                _1: {
                    ctor: "[]"
                }
            } : {
                ctor: "[]"
            };
        })), On = (l(Mn, "STRING", Y), l(Mn, "NUMBER", ot), On || {});
        On["</>"] = r((t, r) => {
            var e = t, o = r;
            return An(t => l(z, o._0, e._0(t)));
        });
        var Sn = r((t, r) => {
            var e = r;
            return An(r => {
                var o = r;
                return l(D, En(o.value), e._0({
                    visited: o.visited,
                    unvisited: o.unvisited,
                    params: o.params,
                    value: t
                }));
            });
        }), Ln = An(t => ({
            ctor: "::",
            _0: t,
            _1: {
                ctor: "[]"
            }
        }));
        (On = On || {})["<?>"] = r((t, r) => {
            var e = t, o = r;
            return An(t => l(z, o._0, e._0(t)));
        });
        var Pn = t => ({
            ctor: "QueryParser",
            _0: t
        }), In = (r((t, r) => Pn(e => {
            var o = e, n = o.params;
            return {
                ctor: "::",
                _0: s(Rn, o.visited, o.unvisited, n, o.value(r(l(Gt, t, n)))),
                _1: {
                    ctor: "[]"
                }
            };
        })), o((t, r, e, o) => {
            var n = o, c = n._0;
            return l(B, n, l(A, o => l(kt, n._1, u(Et, r, l(h, t.set, c), e(o))), t.getOption(c)));
        }), o((t, r, e, o) => {
            var n = o, c = n._0;
            return l(kt, n._1, u(Et, r, l(h, t.set, c), e(t.get(c))));
        })), Jn = (l(Kr, t => t._1, t => _t(m(t))), l(Kr, t => t._0, t => it(m(t))), c((t, r, e, o, n, c) => ({
            id: t,
            username: r,
            title: e,
            date: o,
            skeys: n,
            groups: c
        }))), Dn = u(Vr, "groups", jr(zr), u(Vr, "skeys", jr(zr), u(Vr, "date", qr, u(Vr, "title", zr, u(Vr, "username", zr, u(Vr, "id", zr, Wr(Jn))))))), Fn = () => vt, Un = t => {
            var r = t;
            if ("Nothing" === r.ctor) return l(oo, {
                ctor: "[]"
            }, {
                ctor: "::",
                _0: Xe("Not loadede yet."),
                _1: {
                    ctor: "[]"
                }
            });
            var e = r._0;
            return l(to, {
                ctor: "::",
                _0: fo("dl-horizontal"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: l(ro, {
                    ctor: "[]"
                }, {
                    ctor: "::",
                    _0: Xe("Отображаемое имя:"),
                    _1: {
                        ctor: "[]"
                    }
                }),
                _1: {
                    ctor: "::",
                    _0: l(eo, {
                        ctor: "[]"
                    }, {
                        ctor: "::",
                        _0: Xe(e.title),
                        _1: {
                            ctor: "[]"
                        }
                    }),
                    _1: {
                        ctor: "::",
                        _0: l(ro, {
                            ctor: "[]"
                        }, {
                            ctor: "::",
                            _0: Xe("Дата регистрации:"),
                            _1: {
                                ctor: "[]"
                            }
                        }),
                        _1: {
                            ctor: "::",
                            _0: l(eo, {
                                ctor: "[]"
                            }, {
                                ctor: "::",
                                _0: Xe(k(e.date)),
                                _1: {
                                    ctor: "[]"
                                }
                            }),
                            _1: {
                                ctor: "::",
                                _0: l(ro, {
                                    ctor: "[]"
                                }, {
                                    ctor: "::",
                                    _0: Xe("Состоит в группах:"),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }),
                                _1: {
                                    ctor: "::",
                                    _0: l(eo, {
                                        ctor: "[]"
                                    }, {
                                        ctor: "::",
                                        _0: Xe(k(e.groups)),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }),
                                    _1: {
                                        ctor: "::",
                                        _0: l(ro, {
                                            ctor: "[]"
                                        }, {
                                            ctor: "::",
                                            _0: Xe("Наблюдаемых систем:"),
                                            _1: {
                                                ctor: "[]"
                                            }
                                        }),
                                        _1: {
                                            ctor: "::",
                                            _0: l(eo, {
                                                ctor: "[]"
                                            }, {
                                                ctor: "::",
                                                _0: Xe(k(I(e.skeys))),
                                                _1: {
                                                    ctor: "[]"
                                                }
                                            }),
                                            _1: {
                                                ctor: "[]"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
        }, jn = t => l(oo, {
            ctor: "[]"
        }, {
            ctor: "::",
            _0: Un(t.account),
            _1: {
                ctor: "[]"
            }
        }), qn = r((t, r) => {
            var e = t;
            if ("NoOp" === e.ctor) return {
                ctor: "_Tuple2",
                _0: r,
                _1: dt
            };
            if ("Err" !== e._0.ctor) return {
                ctor: "_Tuple2",
                _0: f.update(r, {
                    message: "Loaded",
                    account: R(e._0._0)
                }),
                _1: dt
            };
            if ("BadStatus" !== e._0._0.ctor) return {
                ctor: "_Tuple2",
                _0: f.update(r, {
                    message: k(e._0._0)
                }),
                _1: dt
            };
            var o = e._0._0._0;
            switch (o.status.code) {
              case 404:
                return {
                    ctor: "_Tuple2",
                    _0: f.update(r, {
                        message: "Account is not found"
                    }),
                    _1: dt
                };

              case 401:
                return {
                    ctor: "_Tuple2",
                    _0: f.update(r, {
                        message: "Need authirization"
                    }),
                    _1: dt
                };

              default:
                return {
                    ctor: "_Tuple2",
                    _0: f.update(r, {
                        message: o.status.message
                    }),
                    _1: dt
                };
            }
        }), Hn = (e((t, r, e) => ({
            name: t,
            account: r,
            message: e
        })), {
            ctor: "_Tuple2",
            _0: {
                name: "NoName",
                account: N,
                message: "Loading..."
            },
            _1: st({
                ctor: "::",
                _0: l(Lo, t => ({
                    ctor: "FetchedAccount",
                    _0: t
                }), Oo({
                    method: "GET",
                    headers: {
                        ctor: "[]"
                    },
                    url: l(y["++"], "http://piligrim-gps.com/1.0/account", l(y["++"], "?access_token=", "3smiHOIcmadduHckMvdzHHqHU4ltBszj")),
                    body: Mo,
                    expect: Co(Dn),
                    timeout: N,
                    withCredentials: !1
                })),
                _1: {
                    ctor: "[]"
                }
            })
        }), zn = l(Kr, t => t.counter, r((t, r) => f.update(r, {
            counter: t
        }))), Wn = l(Kr, t => t.value, r((t, r) => f.update(r, {
            value: t
        }))), Gn = t => e => Bt((() => {
            var e = t;
            switch (e.ctor) {
              case "Increment":
                return l(Xr, Wn, r((t, r) => t + r)(1));

              case "Decrement":
                return l(Xr, Wn, r((t, r) => t + r)(-1));

              default:
                return zn.set(e._0);
            }
        })()(e)), Qn = {
            value: 0,
            counter: 0
        }, Vn = (r((t, r) => ({
            value: t,
            counter: r
        })), m(ft({
            ctor: "::",
            _0: l(Ae, 1e3, t => ({
                ctor: "Tick",
                _0: t
            })),
            _1: {
                ctor: "[]"
            }
        }))), $n = {
            ctor: "Decrement"
        }, Xn = {
            ctor: "Increment"
        }, Kn = l(Tt, Qn, (t => l(fe, b, ae(t)))(Xn)), Yn = t => l(oo, {
            ctor: "::",
            _0: fo("component"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: l(oo, {
                ctor: "[]"
            }, {
                ctor: "::",
                _0: Xe("IncDec component"),
                _1: {
                    ctor: "[]"
                }
            }),
            _1: {
                ctor: "::",
                _0: l(lo, {
                    ctor: "::",
                    _0: ho("button"),
                    _1: {
                        ctor: "::",
                        _0: fo("btn btn-primary"),
                        _1: {
                            ctor: "::",
                            _0: Bo($n),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                }, {
                    ctor: "::",
                    _0: Xe("-"),
                    _1: {
                        ctor: "[]"
                    }
                }),
                _1: {
                    ctor: "::",
                    _0: l(oo, {
                        ctor: "[]"
                    }, {
                        ctor: "::",
                        _0: Xe(k(t.value)),
                        _1: {
                            ctor: "[]"
                        }
                    }),
                    _1: {
                        ctor: "::",
                        _0: l(lo, {
                            ctor: "::",
                            _0: ho("button"),
                            _1: {
                                ctor: "::",
                                _0: fo("btn btn-primary"),
                                _1: {
                                    ctor: "::",
                                    _0: Bo(Xn),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }
                            }
                        }, {
                            ctor: "::",
                            _0: Xe("+"),
                            _1: {
                                ctor: "[]"
                            }
                        }),
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            }
        }), Zn = t => r => l(ht, l(t.lift, t.cb.update, t.lens), t.cb.subscriptions(l(t => t.get, t.lens, r))), tc = r((t, r) => {
            var e = r;
            return {
                ctor: "_Tuple3",
                _0: e._0,
                _1: e._1,
                _2: t
            };
        }), rc = t => r => l($e, l(t.lift, t.cb.update, t.lens), t.cb.view(l(t => t.get, t.lens, r))), ec = c((t, r, e, o, n, c) => {
            var a = c, _ = a._0, i = (r => l(t, e, r))(r.get(_)), s = i._0, d = i._1;
            return l(n, i._2, l(kt, a._1, u(Et, l(o, t, r), l(h, r.set, _), {
                ctor: "_Tuple2",
                _0: s,
                _1: d
            })));
        }), oc = n((t, r, e, o, n) => {
            var c = n, a = c._0;
            return l(kt, c._1, u(Et, l(o, t, r), l(h, r.set, a), (r => l(t, e, r))(r.get(a))));
        }), nc = (r((t, r) => u(oc, t.lens, t.lift, t.cb.update(r))), t => l(yt, l(t.lift, t.cb.update, t.lens), t.cb.init)), cc = e((t, r, e) => ({
            lens: t,
            lift: r,
            cb: e
        })), ac = o((t, r, e, o) => u(cc, l(Kr, t, r), e, o)), _c = (r((t, r) => ({
            ctor: "Lift",
            _0: t,
            _1: r
        })), l(Kr, t => t.counter, r((t, r) => f.update(r, {
            counter: t
        })))), ic = l(Kr, t => t.value, r((t, r) => f.update(r, {
            value: t
        }))), lc = {
            value: 0,
            counter: 0
        }, uc = (r((t, r) => ({
            value: t,
            counter: r
        })), {
            ctor: "ToParent"
        }), sc = m(ft({
            ctor: "::",
            _0: l(Ae, 1e3, t => ({
                ctor: "Tick",
                _0: t
            })),
            _1: {
                ctor: "[]"
            }
        })), dc = {
            ctor: "Decrement"
        }, pc = {
            ctor: "Increment"
        }, gc = {
            ctor: "IncDecC_Boo"
        }, fc = (t => t)({
            init: l(Tt, lc, (t => l(fe, b, ae(t)))(pc)),
            view: t => l(oo, {
                ctor: "::",
                _0: fo("component"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: l(oo, {
                    ctor: "[]"
                }, {
                    ctor: "::",
                    _0: Xe("IncDecC component"),
                    _1: {
                        ctor: "[]"
                    }
                }),
                _1: {
                    ctor: "::",
                    _0: l(lo, {
                        ctor: "::",
                        _0: ho("button"),
                        _1: {
                            ctor: "::",
                            _0: fo("btn btn-primary"),
                            _1: {
                                ctor: "::",
                                _0: Bo(dc),
                                _1: {
                                    ctor: "[]"
                                }
                            }
                        }
                    }, {
                        ctor: "::",
                        _0: Xe("-"),
                        _1: {
                            ctor: "[]"
                        }
                    }),
                    _1: {
                        ctor: "::",
                        _0: l(oo, {
                            ctor: "[]"
                        }, {
                            ctor: "::",
                            _0: Xe(k(t.value)),
                            _1: {
                                ctor: "[]"
                            }
                        }),
                        _1: {
                            ctor: "::",
                            _0: l(lo, {
                                ctor: "::",
                                _0: ho("button"),
                                _1: {
                                    ctor: "::",
                                    _0: fo("btn btn-primary"),
                                    _1: {
                                        ctor: "::",
                                        _0: Bo(pc),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }
                                }
                            }, {
                                ctor: "::",
                                _0: Xe("+"),
                                _1: {
                                    ctor: "[]"
                                }
                            }),
                            _1: {
                                ctor: "::",
                                _0: l(oo, {
                                    ctor: "[]"
                                }, {
                                    ctor: "::",
                                    _0: Xe(k(t.counter)),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }),
                                _1: {
                                    ctor: "::",
                                    _0: l(lo, {
                                        ctor: "::",
                                        _0: ho("button"),
                                        _1: {
                                            ctor: "::",
                                            _0: fo("btn btn-primary"),
                                            _1: {
                                                ctor: "::",
                                                _0: Bo(uc),
                                                _1: {
                                                    ctor: "[]"
                                                }
                                            }
                                        }
                                    }, {
                                        ctor: "::",
                                        _0: Xe("x"),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }
                            }
                        }
                    }
                }
            }),
            update(t) {
                var e = t;
                switch (e.ctor) {
                  case "Increment":
                    return t => l(tc, N, Bt(u(Xr, ic, r((t, r) => t + r)(1), t)));

                  case "Decrement":
                    return t => l(tc, N, Bt(u(Xr, ic, r((t, r) => t + r)(-1), t)));

                  case "Tick":
                    return t => l(tc, N, Bt(l(_c.set, e._0, t)));

                  default:
                    return t => l(tc, R(gc), Bt(t));
                }
            },
            subscriptions: sc
        }), vc = r((t, r) => l(oo, {
            ctor: "::",
            _0: fo(l(y["++"], "loader-container", t ? " show" : " hide")),
            _1: {
                ctor: "::",
                _0: l(wo, "transitionend", Sr(r)),
                _1: {
                    ctor: "[]"
                }
            }
        }, {
            ctor: "::",
            _0: l(oo, {
                ctor: "::",
                _0: fo("loader"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: Xe("Loading..."),
                _1: {
                    ctor: "[]"
                }
            }),
            _1: {
                ctor: "[]"
            }
        })), hc = r((t, r) => l(no, {
            ctor: "::",
            _0: yo({
                ctor: "::",
                _0: {
                    ctor: "_Tuple2",
                    _0: "margin-right",
                    _1: "10px"
                },
                _1: {
                    ctor: "[]"
                }
            }),
            _1: {
                ctor: "::",
                _0: bo(l(y["++"], "#", t)),
                _1: {
                    ctor: "[]"
                }
            }
        }, {
            ctor: "::",
            _0: Xe(r),
            _1: {
                ctor: "[]"
            }
        })), mc = e((t, r, e) => ({
            counter: 0,
            incdec1: t,
            incdec2: r,
            incdecC: e,
            incdecs: Pt,
            loaderStyle: !1,
            message: "Initial"
        })), bc = l(Kr, t => t.loaderStyle, r((t, r) => f.update(r, {
            loaderStyle: t
        }))), yc = (a((t, r, e, o, n, c, a) => ({
            counter: t,
            incdec1: r,
            incdec2: e,
            incdecC: o,
            incdecs: n,
            loaderStyle: c,
            message: a
        })), {
            ctor: "RemoveComp"
        }), kc = {
            ctor: "AddComp"
        }, Tc = {
            ctor: "EndAnimation"
        }, wc = {
            ctor: "StopLoading"
        }, xc = {
            ctor: "StartLoading"
        }, Bc = e((t, r, e) => ({
            ctor: "IncDecCMessage",
            _0: t,
            _1: r,
            _2: e
        })), Nc = s(ac, t => t.incdecC, r((t, r) => f.update(r, {
            incdecC: t
        })), Bc, fc), Ec = e((t, r, e) => ({
            ctor: "IncDecMessage",
            _0: t,
            _1: r,
            _2: e
        })), Rc = s(ac, t => t.incdec1, r((t, r) => f.update(r, {
            incdec1: t
        })), Ec, {
            init: Kn,
            view: Yn,
            update: Gn,
            subscriptions: Vn
        }), Ac = s(ac, t => t.incdec2, r((t, r) => f.update(r, {
            incdec2: t
        })), Ec, {
            init: Kn,
            view: Yn,
            update: Gn,
            subscriptions: Vn
        }), Cc = s(Nt, mc, nc(Rc), nc(Ac), nc(Nc)), Mc = t => s(ac, r => {
            var e = l(St, t, r.incdecs);
            return "Nothing" === e.ctor ? f.crashCase("Pages.Home", {
                start: {
                    line: 79,
                    column: 13
                },
                end: {
                    line: 84,
                    column: 26
                }
            }, e)("WTF") : e._0;
        }, r((r, e) => f.update(e, {
            incdecs: u(Ot, t, r, e.incdecs)
        })), Ec, {
            init: Kn,
            view: Yn,
            update: Gn,
            subscriptions: Vn
        }), Oc = t => l(oo, {
            ctor: "[]"
        }, {
            ctor: "::",
            _0: Xe(l(y["++"], "HOME: WIP", k(t))),
            _1: {
                ctor: "::",
                _0: l(oo, {
                    ctor: "::",
                    _0: fo("row"),
                    _1: {
                        ctor: "[]"
                    }
                }, {
                    ctor: "::",
                    _0: l(oo, {
                        ctor: "::",
                        _0: fo("col-sm-4"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: l(rc, Rc, t),
                        _1: {
                            ctor: "[]"
                        }
                    }),
                    _1: {
                        ctor: "::",
                        _0: l(oo, {
                            ctor: "::",
                            _0: fo("col-sm-4"),
                            _1: {
                                ctor: "[]"
                            }
                        }, {
                            ctor: "::",
                            _0: l(rc, Ac, t),
                            _1: {
                                ctor: "[]"
                            }
                        }),
                        _1: {
                            ctor: "::",
                            _0: l(oo, {
                                ctor: "::",
                                _0: fo("col-sm-4"),
                                _1: {
                                    ctor: "[]"
                                }
                            }, {
                                ctor: "::",
                                _0: l(rc, Nc, t),
                                _1: {
                                    ctor: "[]"
                                }
                            }),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                }),
                _1: {
                    ctor: "::",
                    _0: l(oo, {
                        ctor: "::",
                        _0: fo("row"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: l(oo, {
                            ctor: "::",
                            _0: fo("col-sm-12"),
                            _1: {
                                ctor: "[]"
                            }
                        }, {
                            ctor: "::",
                            _0: l(lo, {
                                ctor: "::",
                                _0: ho("button"),
                                _1: {
                                    ctor: "::",
                                    _0: fo("btn btn-primary"),
                                    _1: {
                                        ctor: "::",
                                        _0: Bo(xc),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }
                                }
                            }, {
                                ctor: "::",
                                _0: Xe("Simulate start loading"),
                                _1: {
                                    ctor: "[]"
                                }
                            }),
                            _1: {
                                ctor: "::",
                                _0: l(lo, {
                                    ctor: "::",
                                    _0: ho("button"),
                                    _1: {
                                        ctor: "::",
                                        _0: fo("btn btn-primary"),
                                        _1: {
                                            ctor: "::",
                                            _0: Bo(wc),
                                            _1: {
                                                ctor: "[]"
                                            }
                                        }
                                    }
                                }, {
                                    ctor: "::",
                                    _0: Xe("Simulate stop loading"),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }),
                                _1: {
                                    ctor: "[]"
                                }
                            }
                        }),
                        _1: {
                            ctor: "[]"
                        }
                    }),
                    _1: {
                        ctor: "::",
                        _0: l(oo, {
                            ctor: "::",
                            _0: fo("row"),
                            _1: {
                                ctor: "[]"
                            }
                        }, {
                            ctor: "::",
                            _0: l(oo, {
                                ctor: "::",
                                _0: fo("col-sm"),
                                _1: {
                                    ctor: "[]"
                                }
                            }, {
                                ctor: "::",
                                _0: Xe(t.message),
                                _1: {
                                    ctor: "[]"
                                }
                            }),
                            _1: {
                                ctor: "[]"
                            }
                        }),
                        _1: {
                            ctor: "::",
                            _0: l(oo, {
                                ctor: "::",
                                _0: fo("row"),
                                _1: {
                                    ctor: "[]"
                                }
                            }, {
                                ctor: "::",
                                _0: l(oo, {
                                    ctor: "::",
                                    _0: fo("col-sm-12"),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }, {
                                    ctor: "::",
                                    _0: l(lo, {
                                        ctor: "::",
                                        _0: ho("button"),
                                        _1: {
                                            ctor: "::",
                                            _0: fo("btn btn-primary"),
                                            _1: {
                                                ctor: "::",
                                                _0: Bo(kc),
                                                _1: {
                                                    ctor: "[]"
                                                }
                                            }
                                        }
                                    }, {
                                        ctor: "::",
                                        _0: Xe("Add indec component"),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }),
                                    _1: {
                                        ctor: "::",
                                        _0: l(lo, {
                                            ctor: "::",
                                            _0: ho("button"),
                                            _1: {
                                                ctor: "::",
                                                _0: fo("btn btn-primary"),
                                                _1: {
                                                    ctor: "::",
                                                    _0: Bo(yc),
                                                    _1: {
                                                        ctor: "[]"
                                                    }
                                                }
                                            }
                                        }, {
                                            ctor: "::",
                                            _0: Xe("Remove incdec component (TBD)"),
                                            _1: {
                                                ctor: "[]"
                                            }
                                        }),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }
                                }),
                                _1: {
                                    ctor: "[]"
                                }
                            }),
                            _1: {
                                ctor: "::",
                                _0: l(oo, {
                                    ctor: "[]"
                                }, Jt(l(It, r(r => l(oo, {
                                    ctor: "::",
                                    _0: fo("row"),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }, {
                                    ctor: "::",
                                    _0: l(oo, {
                                        ctor: "::",
                                        _0: fo("col-sm"),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }, {
                                        ctor: "::",
                                        _0: l(rc, Mc(r), t),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }),
                                    _1: {
                                        ctor: "[]"
                                    }
                                })), t.incdecs))),
                                _1: {
                                    ctor: "::",
                                    _0: l(oo, {
                                        ctor: "::",
                                        _0: fo("row"),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }, {
                                        ctor: "::",
                                        _0: l(oo, {
                                            ctor: "::",
                                            _0: fo("col-sm-12"),
                                            _1: {
                                                ctor: "[]"
                                            }
                                        }, {
                                            ctor: "::",
                                            _0: l(hc, "/", "Домой"),
                                            _1: {
                                                ctor: "::",
                                                _0: l(hc, "/account", "Пользователь"),
                                                _1: {
                                                    ctor: "::",
                                                    _0: l(hc, "/login", "Авторизация"),
                                                    _1: {
                                                        ctor: "::",
                                                        _0: l(hc, "/map", "Карта"),
                                                        _1: {
                                                            ctor: "[]"
                                                        }
                                                    }
                                                }
                                            }
                                        }),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }),
                                    _1: {
                                        ctor: "::",
                                        _0: l(vc, t.loaderStyle, Tc),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }), Sc = t => r => (() => {
            var r = t;
            switch (r.ctor) {
              case "NoOp":
                return Ct;

              case "Tick":
                return At(t => f.update(t, {
                    counter: r._0
                }));

              case "IncDecMessage":
                return s(oc, r._0, r._1, r._2, Ec);

              case "IncDecCMessage":
                return d(ec, r._0, r._1, r._2, Bc, t => At("Nothing" === t.ctor ? t => f.update(t, {
                    message: "Not here"
                }) : t => f.update(t, {
                    message: "Boo"
                })));

              case "StartLoading":
                return t => l(At, t => f.update(t, {
                    message: "Animation start"
                }), l(At, bc.set(!0), t));

              case "StopLoading":
                return t => l(At, t => f.update(t, {
                    message: "Animation start"
                }), l(At, bc.set(!1), t));

              case "EndAnimation":
                return At(t => f.update(t, {
                    message: "Animation done"
                }));

              case "AddComp":
                var e = Kn._0;
                return At(t => f.update(t, {
                    incdecs: l(Lt, e, t.incdecs)
                }));

              case "RemoveComp":
                return Ct;

              default:
                return l(x, "SubCmd", 0), At(t => f.update(t, {
                    message: "Best solution!"
                }));
            }
        })()(Bt(r)), Lc = t => ({
            ctor: "Tick",
            _0: t
        }), Pc = t => ft({
            ctor: "::",
            _0: l(Ae, 1e3, Lc),
            _1: {
                ctor: "::",
                _0: l(Zn, Rc, t),
                _1: {
                    ctor: "::",
                    _0: l(Zn, Ac, t),
                    _1: {
                        ctor: "::",
                        _0: l(Zn, Nc, t),
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            }
        }), Ic = m(vt), Jc = t => f.eq(t, "") ? "empty" : "non-empty", Dc = r((t, r) => {
            var e = t;
            switch (e.ctor) {
              case "NoOp":
                return {
                    ctor: "_Tuple2",
                    _0: r,
                    _1: dt
                };

              case "UserNameInput":
                return {
                    ctor: "_Tuple2",
                    _0: f.update(r, {
                        name: e._0
                    }),
                    _1: dt
                };

              default:
                return {
                    ctor: "_Tuple2",
                    _0: f.update(r, {
                        password: e._0
                    }),
                    _1: dt
                };
            }
        }), Fc = {
            ctor: "_Tuple2",
            _0: {
                name: "",
                password: ""
            },
            _1: dt
        }, Uc = (r((t, r) => ({
            name: t,
            password: r
        })), t => ({
            ctor: "PasswordInput",
            _0: t
        })), jc = t => ({
            ctor: "UserNameInput",
            _0: t
        }), qc = t => l(oo, {
            ctor: "::",
            _0: fo("login-page"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: l(_o, {
                ctor: "[]"
            }, {
                ctor: "::",
                _0: l(Ye, {
                    ctor: "[]"
                }, {
                    ctor: "::",
                    _0: Xe("Авторизация в сервисе"),
                    _1: {
                        ctor: "[]"
                    }
                }),
                _1: {
                    ctor: "::",
                    _0: l(oo, {
                        ctor: "::",
                        _0: fo("login-form-group"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: l(oo, {
                            ctor: "::",
                            _0: fo(Jc(t.name)),
                            _1: {
                                ctor: "[]"
                            }
                        }, {
                            ctor: "::",
                            _0: Xe("Имя пользователя"),
                            _1: {
                                ctor: "[]"
                            }
                        }),
                        _1: {
                            ctor: "::",
                            _0: l(io, {
                                ctor: "::",
                                _0: xo(jc),
                                _1: {
                                    ctor: "::",
                                    _0: mo(t.name),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }
                            }, {
                                ctor: "[]"
                            }),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }),
                    _1: {
                        ctor: "::",
                        _0: l(oo, {
                            ctor: "::",
                            _0: fo("login-form-group"),
                            _1: {
                                ctor: "[]"
                            }
                        }, {
                            ctor: "::",
                            _0: l(oo, {
                                ctor: "::",
                                _0: fo(Jc(t.password)),
                                _1: {
                                    ctor: "[]"
                                }
                            }, {
                                ctor: "::",
                                _0: Xe("Пароль"),
                                _1: {
                                    ctor: "[]"
                                }
                            }),
                            _1: {
                                ctor: "::",
                                _0: l(io, {
                                    ctor: "::",
                                    _0: ho("password"),
                                    _1: {
                                        ctor: "::",
                                        _0: xo(Uc),
                                        _1: {
                                            ctor: "::",
                                            _0: mo(t.password),
                                            _1: {
                                                ctor: "[]"
                                            }
                                        }
                                    }
                                }, {
                                    ctor: "[]"
                                }),
                                _1: {
                                    ctor: "[]"
                                }
                            }
                        }),
                        _1: {
                            ctor: "::",
                            _0: l(oo, {
                                ctor: "::",
                                _0: fo("login-form-group"),
                                _1: {
                                    ctor: "[]"
                                }
                            }, {
                                ctor: "::",
                                _0: l(lo, {
                                    ctor: "::",
                                    _0: ho("submit"),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }, {
                                    ctor: "::",
                                    _0: Xe("Авторизоваться"),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }),
                                _1: {
                                    ctor: "[]"
                                }
                            }),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                }
            }),
            _1: {
                ctor: "[]"
            }
        }), Hc = t => {
            var r = t, e = r._1, o = r._0;
            return f.eq(e, "") ? l(oo, {
                ctor: "::",
                _0: fo("duration-text"),
                _1: {
                    ctor: "::",
                    _0: l(uo, "role", "button"),
                    _1: {
                        ctor: "::",
                        _0: so(0),
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            }, {
                ctor: "::",
                _0: Xe(o),
                _1: {
                    ctor: "[]"
                }
            }) : l(oo, {
                ctor: "::",
                _0: fo("duration-text"),
                _1: {
                    ctor: "::",
                    _0: l(uo, "role", "button"),
                    _1: {
                        ctor: "::",
                        _0: so(0),
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            }, {
                ctor: "::",
                _0: l(ao, {
                    ctor: "::",
                    _0: l(uo, "style", ""),
                    _1: {
                        ctor: "[]"
                    }
                }, {
                    ctor: "::",
                    _0: l(ao, {
                        ctor: "::",
                        _0: fo("segment-duration-part"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: Xe(o),
                        _1: {
                            ctor: "[]"
                        }
                    }),
                    _1: {
                        ctor: "::",
                        _0: Xe(" – "),
                        _1: {
                            ctor: "::",
                            _0: l(ao, {
                                ctor: "::",
                                _0: fo("segment-duration-part"),
                                _1: {
                                    ctor: "[]"
                                }
                            }, {
                                ctor: "::",
                                _0: Xe(e),
                                _1: {
                                    ctor: "[]"
                                }
                            }),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                }),
                _1: {
                    ctor: "[]"
                }
            });
        }, zc = l(co, {
            ctor: "::",
            _0: fo("material-icons-extended rtl-mirrored chevron-icon"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: Xe("chevron_right "),
            _1: {
                ctor: "[]"
            }
        }), Wc = l(co, {
            ctor: "::",
            _0: fo("material-icons-extended rtl-mirrored activity-summary-chevron lower"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: Xe("chevron_right"),
            _1: {
                ctor: "[]"
            }
        }), Gc = l(co, {
            ctor: "::",
            _0: fo("material-icons-extended rtl-mirrored activity-summary-chevron upper"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: Xe("chevron_left"),
            _1: {
                ctor: "[]"
            }
        }), Qc = l(co, {
            ctor: "::",
            _0: fo("material-icons-extended add-a-place-icon"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: Xe("add_circle"),
            _1: {
                ctor: "[]"
            }
        }), Vc = l(co, {
            ctor: "::",
            _0: fo("material-icons-extended drop-down"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: Xe("arrow_drop_down"),
            _1: {
                ctor: "[]"
            }
        }), $c = l(co, {
            ctor: "::",
            _0: fo("timeline-header-button next-date-range-button material-icons-extended material-icon-with-ripple rtl-mirrored"),
            _1: {
                ctor: "::",
                _0: vo("Следующий день"),
                _1: {
                    ctor: "::",
                    _0: l(uo, "role", "button"),
                    _1: {
                        ctor: "::",
                        _0: so(0),
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            }
        }, {
            ctor: "::",
            _0: Xe("chevron_right "),
            _1: {
                ctor: "[]"
            }
        }), Xc = l(co, {
            ctor: "::",
            _0: fo("timeline-header-button previous-date-range-button material-icons-extended material-icon-with-ripple rtl-mirrored"),
            _1: {
                ctor: "::",
                _0: vo("Предыдущий день"),
                _1: {
                    ctor: "::",
                    _0: l(uo, "role", "button"),
                    _1: {
                        ctor: "::",
                        _0: so(0),
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            }
        }, {
            ctor: "::",
            _0: Xe("chevron_left "),
            _1: {
                ctor: "[]"
            }
        }), Kc = t => {
            var r = t;
            return l(oo, {
                ctor: "::",
                _0: fo("timeline-item-text child-place-visit"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: l(no, {
                    ctor: "::",
                    _0: fo("child-place-visit-content"),
                    _1: {
                        ctor: "::",
                        _0: bo("/maps/place/tbd"),
                        _1: {
                            ctor: "[]"
                        }
                    }
                }, {
                    ctor: "::",
                    _0: l(oo, {
                        ctor: "::",
                        _0: fo("child-place-visit-icon"),
                        _1: {
                            ctor: "::",
                            _0: l(uo, "style", "background-image:url(https://maps.gstatic.com/mapsactivities/icons/poi_icons/30_visited/tree_2x.png)"),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }, {
                        ctor: "[]"
                    }),
                    _1: {
                        ctor: "::",
                        _0: l(ao, {
                            ctor: "::",
                            _0: fo("child-place-visit-title"),
                            _1: {
                                ctor: "[]"
                            }
                        }, {
                            ctor: "::",
                            _0: Xe(r._0),
                            _1: {
                                ctor: "[]"
                            }
                        }),
                        _1: {
                            ctor: "[]"
                        }
                    }
                }),
                _1: {
                    ctor: "::",
                    _0: Hc(r._1),
                    _1: {
                        ctor: "[]"
                    }
                }
            });
        }, Yc = oo({
            ctor: "::",
            _0: fo("edit-dialog-select moment-edit-control place-visit timeline-item-title-content"),
            _1: {
                ctor: "::",
                _0: l(uo, "role", "button"),
                _1: {
                    ctor: "::",
                    _0: so(0),
                    _1: {
                        ctor: "[]"
                    }
                }
            }
        }), Zc = t => l(oo, {
            ctor: "::",
            _0: fo("timeline-item-text"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: Xe(t),
            _1: {
                ctor: "[]"
            }
        }), ta = oo({
            ctor: "::",
            _0: fo("timeline-item-title"),
            _1: {
                ctor: "[]"
            }
        }), ra = t => oo({
            ctor: "::",
            _0: fo(l(y["++"], "timeline-item-content primary ", t ? " multi-line" : "")),
            _1: {
                ctor: "[]"
            }
        }), ea = r((t, r) => {
            var e = r;
            return oo("Nothing" === e.ctor ? {
                ctor: "::",
                _0: fo(l(y["++"], "timeline-item ", t)),
                _1: {
                    ctor: "[]"
                }
            } : {
                ctor: "::",
                _0: fo(l(y["++"], "timeline-item ", t)),
                _1: {
                    ctor: "::",
                    _0: l(uo, "role", "button"),
                    _1: {
                        ctor: "::",
                        _0: l(uo, "tabindex", "0"),
                        _1: {
                            ctor: "::",
                            _0: Bo(e._0),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                }
            });
        }), oa = t => {
            var r = t;
            return l(pn, {
                ctor: "::",
                _0: yn("timeline-item-svg"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: l(gn, r._0 ? {
                    ctor: "::",
                    _0: yn("timeline-item-svg-line"),
                    _1: {
                        ctor: "::",
                        _0: fn("round"),
                        _1: {
                            ctor: "::",
                            _0: l(uo, "style", "stroke: rgb(1, 87, 155);"),
                            _1: {
                                ctor: "::",
                                _0: bn("7"),
                                _1: {
                                    ctor: "::",
                                    _0: mn("7"),
                                    _1: {
                                        ctor: "::",
                                        _0: hn("0"),
                                        _1: {
                                            ctor: "::",
                                            _0: vn("41"),
                                            _1: {
                                                ctor: "[]"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } : {
                    ctor: "::",
                    _0: yn(""),
                    _1: {
                        ctor: "::",
                        _0: l(uo, "style", "display:none"),
                        _1: {
                            ctor: "[]"
                        }
                    }
                }, {
                    ctor: "[]"
                }),
                _1: {
                    ctor: "::",
                    _0: l(gn, r._1 ? {
                        ctor: "::",
                        _0: yn("timeline-item-svg-line"),
                        _1: {
                            ctor: "::",
                            _0: fn("round"),
                            _1: {
                                ctor: "::",
                                _0: l(uo, "style", "stroke: rgb(1, 87, 155);"),
                                _1: {
                                    ctor: "::",
                                    _0: bn("7"),
                                    _1: {
                                        ctor: "::",
                                        _0: mn("7"),
                                        _1: {
                                            ctor: "::",
                                            _0: hn("41"),
                                            _1: {
                                                ctor: "::",
                                                _0: vn("100%"),
                                                _1: {
                                                    ctor: "[]"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } : {
                        ctor: "::",
                        _0: yn(""),
                        _1: {
                            ctor: "::",
                            _0: l(uo, "style", "display:none"),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }, {
                        ctor: "[]"
                    }),
                    _1: {
                        ctor: "[]"
                    }
                }
            });
        }, na = t => Yc({
            ctor: "::",
            _0: l(oo, {
                ctor: "::",
                _0: l(uo, "style", "display:none"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "[]"
            }),
            _1: {
                ctor: "::",
                _0: l(oo, {
                    ctor: "::",
                    _0: fo("place-visit-title"),
                    _1: {
                        ctor: "[]"
                    }
                }, {
                    ctor: "::",
                    _0: Xe(t),
                    _1: {
                        ctor: "[]"
                    }
                }),
                _1: {
                    ctor: "::",
                    _0: Vc,
                    _1: {
                        ctor: "[]"
                    }
                }
            }
        }), ca = t => {
            var r = t, e = {
                ctor: "::",
                _0: Kc({
                    ctor: "_Tuple2",
                    _0: "Выключено зажигание",
                    _1: {
                        ctor: "_Tuple2",
                        _0: "10:20",
                        _1: ""
                    }
                }),
                _1: {
                    ctor: "::",
                    _0: Kc({
                        ctor: "_Tuple2",
                        _0: "Включено зажигание",
                        _1: {
                            ctor: "_Tuple2",
                            _0: "14:43",
                            _1: ""
                        }
                    }),
                    _1: {
                        ctor: "[]"
                    }
                }
            };
            return l(oo, {
                ctor: "[]"
            }, {
                ctor: "::",
                _0: u(ea, "place-history-moment-outer", N, {
                    ctor: "::",
                    _0: oa({
                        ctor: "_Tuple2",
                        _0: r._0._0,
                        _1: r._0._1
                    }),
                    _1: {
                        ctor: "::",
                        _0: l(oo, {
                            ctor: "::",
                            _0: fo("segment-divider"),
                            _1: {
                                ctor: "[]"
                            }
                        }, {
                            ctor: "[]"
                        }),
                        _1: {
                            ctor: "::",
                            _0: r._1,
                            _1: {
                                ctor: "::",
                                _0: l(ra, !0, {
                                    ctor: "::",
                                    _0: l(oo, {
                                        ctor: "[]"
                                    }, {
                                        ctor: "::",
                                        _0: ta({
                                            ctor: "::",
                                            _0: na(r._2),
                                            _1: {
                                                ctor: "::",
                                                _0: Hc({
                                                    ctor: "_Tuple2",
                                                    _0: r._3._0,
                                                    _1: r._3._1
                                                }),
                                                _1: {
                                                    ctor: "[]"
                                                }
                                            }
                                        }),
                                        _1: {
                                            ctor: "::",
                                            _0: Zc(r._4),
                                            _1: {
                                                ctor: "[]"
                                            }
                                        }
                                    }),
                                    _1: e
                                }),
                                _1: {
                                    ctor: "::",
                                    _0: l(Ze, {
                                        ctor: "::",
                                        _0: fo("moment-divider"),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }, {
                                        ctor: "[]"
                                    }),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }
                            }
                        }
                    }
                }),
                _1: {
                    ctor: "[]"
                }
            });
        }, aa = t => l(oo, {
            ctor: "::",
            _0: fo("timeline-header"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: l(oo, {
                ctor: "::",
                _0: fo("timeline-header-title-container"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: l(oo, {
                    ctor: "::",
                    _0: fo("timeline-title"),
                    _1: {
                        ctor: "[]"
                    }
                }, {
                    ctor: "::",
                    _0: Xe(t.day),
                    _1: {
                        ctor: "[]"
                    }
                }),
                _1: {
                    ctor: "::",
                    _0: l(oo, {
                        ctor: "::",
                        _0: fo("timeline-subtitle"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: Xe(t.comment),
                        _1: {
                            ctor: "[]"
                        }
                    }),
                    _1: {
                        ctor: "[]"
                    }
                }
            }),
            _1: {
                ctor: "::",
                _0: Xc,
                _1: {
                    ctor: "::",
                    _0: $c,
                    _1: {
                        ctor: "[]"
                    }
                }
            }
        }), _a = r((t, r) => ({
            day: t,
            comment: r
        })), ia = t => {
            var r = "Move" === t.ctor ? {
                ctor: "_Tuple2",
                _0: "Движение",
                _1: "https://www.gstatic.com/images/icons/material/system/2x/directions_car_black_24dp.png"
            } : {
                ctor: "_Tuple2",
                _0: "Стоянка",
                _1: "https://maps.gstatic.com/mapsactivities/icons/activity_icons/2x/ic_activity_walking_black_24dp.png"
            }, e = r._0, o = r._1;
            return l(oo, {
                ctor: "::",
                _0: fo("activity-icon"),
                _1: {
                    ctor: "::",
                    _0: vo(e),
                    _1: {
                        ctor: "::",
                        _0: l(uo, "style", l(y["++"], "background-image: url(", l(y["++"], o, ");"))),
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            }, {
                ctor: "[]"
            });
        }, la = {
            ctor: "Camp"
        }, ua = {
            ctor: "Move"
        }, sa = l(pn, {
            ctor: "::",
            _0: yn("timeline-item-svg"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: l(gn, {
                ctor: "::",
                _0: yn("timeline-item-svg-line"),
                _1: {
                    ctor: "::",
                    _0: l(uo, "style", "stroke: rgb(1, 87, 155);"),
                    _1: {
                        ctor: "::",
                        _0: bn("7"),
                        _1: {
                            ctor: "::",
                            _0: mn("7"),
                            _1: {
                                ctor: "::",
                                _0: hn("0"),
                                _1: {
                                    ctor: "::",
                                    _0: vn("100%"),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }
                            }
                        }
                    }
                }
            }, {
                ctor: "[]"
            }),
            _1: {
                ctor: "[]"
            }
        }), da = l(oo, {
            ctor: "::",
            _0: fo("add-a-place"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: Qc,
            _1: {
                ctor: "::",
                _0: l(oo, {
                    ctor: "::",
                    _0: fo("add-a-place-text tooltip"),
                    _1: {
                        ctor: "[]"
                    }
                }, {
                    ctor: "::",
                    _0: Xe("Новое место"),
                    _1: {
                        ctor: "[]"
                    }
                }),
                _1: {
                    ctor: "[]"
                }
            }
        }), pa = t => {
            var r = t;
            return Yc({
                ctor: "::",
                _0: ia(ua),
                _1: {
                    ctor: "::",
                    _0: l(ao, {
                        ctor: "::",
                        _0: fo("activity-type"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: Xe(r._0),
                        _1: {
                            ctor: "[]"
                        }
                    }),
                    _1: {
                        ctor: "::",
                        _0: l(oo, {
                            ctor: "::",
                            _0: fo("distance-text"),
                            _1: {
                                ctor: "::",
                                _0: l(uo, "style", ""),
                                _1: {
                                    ctor: "[]"
                                }
                            }
                        }, {
                            ctor: "::",
                            _0: Xe(r._1),
                            _1: {
                                ctor: "[]"
                            }
                        }),
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            });
        }, ga = t => {
            var r = t, e = l(D, t => {
                var r = t;
                return Kc({
                    ctor: "_Tuple2",
                    _0: r._0,
                    _1: {
                        ctor: "_Tuple2",
                        _0: r._1,
                        _1: ""
                    }
                });
            }, r._2);
            return l(oo, {
                ctor: "[]"
            }, {
                ctor: "::",
                _0: l(oo, {
                    ctor: "::",
                    _0: fo("activity-segment-outer"),
                    _1: {
                        ctor: "[]"
                    }
                }, {
                    ctor: "::",
                    _0: u(ea, "place-history-moment-outer", N, {
                        ctor: "::",
                        _0: sa,
                        _1: {
                            ctor: "::",
                            _0: da,
                            _1: {
                                ctor: "::",
                                _0: l(ra, !0, {
                                    ctor: "::",
                                    _0: l(oo, {
                                        ctor: "[]"
                                    }, {
                                        ctor: "::",
                                        _0: ta({
                                            ctor: "::",
                                            _0: pa({
                                                ctor: "_Tuple2",
                                                _0: r._0._0,
                                                _1: r._0._1
                                            }),
                                            _1: {
                                                ctor: "::",
                                                _0: Hc({
                                                    ctor: "_Tuple2",
                                                    _0: r._1,
                                                    _1: ""
                                                }),
                                                _1: {
                                                    ctor: "[]"
                                                }
                                            }
                                        }),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }),
                                    _1: e
                                }),
                                _1: {
                                    ctor: "::",
                                    _0: l(Ze, {
                                        ctor: "::",
                                        _0: fo("moment-divider"),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }, {
                                        ctor: "[]"
                                    }),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }
                            }
                        }
                    }),
                    _1: {
                        ctor: "[]"
                    }
                }),
                _1: {
                    ctor: "[]"
                }
            });
        }, fa = t => {
            var r = "PlaceIconHome" === t.ctor ? "https://maps.gstatic.com/mapsactivities/icons/poi_icons/30_visited/home_2x.png" : "https://maps.gstatic.com/mapsactivities/icons/poi_icons/30_regular/generic_2x.png";
            return l(oo, {
                ctor: "::",
                _0: fo("timeline-item-icon place-icon"),
                _1: {
                    ctor: "::",
                    _0: l(uo, "style", l(y["++"], "background-image: url(", l(y["++"], r, ");"))),
                    _1: {
                        ctor: "[]"
                    }
                }
            }, {
                ctor: "[]"
            });
        }, va = {
            ctor: "PlaceIconPoi"
        }, ha = {
            ctor: "PlaceIconHome"
        }, ma = t => {
            var r = t;
            return l(oo, {
                ctor: "::",
                _0: fo("top-activity"),
                _1: {
                    ctor: "::",
                    _0: vo(r._0),
                    _1: {
                        ctor: "[]"
                    }
                }
            }, {
                ctor: "::",
                _0: ia(r._1),
                _1: {
                    ctor: "::",
                    _0: l(oo, {
                        ctor: "::",
                        _0: fo("top-activity-text"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: l(oo, {
                            ctor: "[]"
                        }, {
                            ctor: "::",
                            _0: Xe(r._2),
                            _1: {
                                ctor: "[]"
                            }
                        }),
                        _1: {
                            ctor: "::",
                            _0: l(oo, {
                                ctor: "[]"
                            }, {
                                ctor: "::",
                                _0: Xe(r._3),
                                _1: {
                                    ctor: "[]"
                                }
                            }),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }),
                    _1: {
                        ctor: "[]"
                    }
                }
            });
        }, ba = t => u(ea, "top-activities", N, {
            ctor: "::",
            _0: ma({
                ctor: "_Tuple4",
                _0: "Движение",
                _1: ua,
                _2: t.moves.distance,
                _3: t.moves.duration
            }),
            _1: {
                ctor: "::",
                _0: ma({
                    ctor: "_Tuple4",
                    _0: "Стоянка",
                    _1: la,
                    _2: "",
                    _3: t.camp.duration
                }),
                _1: {
                    ctor: "[]"
                }
            }
        }), ya = r((t, r) => ({
            moves: t,
            camp: r
        })), ka = t => l(oo, {
            ctor: "::",
            _0: fo("travel-segment-summary-item"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: ia(t),
            _1: {
                ctor: "::",
                _0: zc,
                _1: {
                    ctor: "[]"
                }
            }
        }), Ta = l(oo, {
            ctor: "::",
            _0: fo("activity-expand-toggle"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: Gc,
            _1: {
                ctor: "::",
                _0: Wc,
                _1: {
                    ctor: "[]"
                }
            }
        }), wa = l(pn, {
            ctor: "::",
            _0: yn("timeline-item-svg"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: l(gn, {
                ctor: "::",
                _0: yn("timeline-item-svg-line"),
                _1: {
                    ctor: "::",
                    _0: l(uo, "style", "stroke: rgb(1, 87, 155);"),
                    _1: {
                        ctor: "::",
                        _0: bn("7"),
                        _1: {
                            ctor: "::",
                            _0: mn("7"),
                            _1: {
                                ctor: "::",
                                _0: hn("0"),
                                _1: {
                                    ctor: "::",
                                    _0: vn("100%"),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }
                            }
                        }
                    }
                }
            }, {
                ctor: "[]"
            }),
            _1: {
                ctor: "[]"
            }
        }), xa = t => u(ea, "travel-segment-summary", R(t), {
            ctor: "::",
            _0: wa,
            _1: {
                ctor: "::",
                _0: Ta,
                _1: {
                    ctor: "::",
                    _0: l(ra, !1, {
                        ctor: "::",
                        _0: ta({
                            ctor: "::",
                            _0: l(oo, {
                                ctor: "::",
                                _0: fo("travel-segment-summary-itmes"),
                                _1: {
                                    ctor: "[]"
                                }
                            }, {
                                ctor: "::",
                                _0: ka(ua),
                                _1: {
                                    ctor: "::",
                                    _0: ka(la),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }
                            }),
                            _1: {
                                ctor: "::",
                                _0: Hc({
                                    ctor: "_Tuple2",
                                    _0: "3 часа 52 минуты",
                                    _1: ""
                                }),
                                _1: {
                                    ctor: "[]"
                                }
                            }
                        }),
                        _1: {
                            ctor: "[]"
                        }
                    }),
                    _1: {
                        ctor: "[]"
                    }
                }
            }
        }), Ba = e((t, r, e) => l(oo, {
            ctor: "[]"
        }, {
            ctor: "::",
            _0: l(oo, {
                ctor: "::",
                _0: fo(l(y["++"], "travel-segment", t.expanded ? " expanded" : "")),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: xa(r),
                _1: {
                    ctor: "::",
                    _0: l(Ze, {
                        ctor: "::",
                        _0: fo("moment-divider"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "[]"
                    }),
                    _1: {
                        ctor: "::",
                        _0: l(oo, {
                            ctor: "::",
                            _0: fo("activities-wrapper"),
                            _1: {
                                ctor: "[]"
                            }
                        }, e),
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            }),
            _1: {
                ctor: "[]"
            }
        })), Na = t => f.update(t, {
            expanded: !t.expanded
        }), Ea = {
            expanded: !1
        }, Ra = m(vt), Aa = ga({
            ctor: "_Tuple3",
            _0: {
                ctor: "_Tuple2",
                _0: "Движение",
                _1: "36,7 км"
            },
            _1: "1 час 14 минут",
            _2: {
                ctor: "::",
                _0: {
                    ctor: "_Tuple2",
                    _0: "Потерян сигнал спутников",
                    _1: "18:30"
                },
                _1: {
                    ctor: "::",
                    _0: {
                        ctor: "_Tuple2",
                        _0: "Сигнал восстановлен",
                        _1: "18:45"
                    },
                    _1: {
                        ctor: "::",
                        _0: {
                            ctor: "_Tuple2",
                            _0: "Потерян сигнал спутников",
                            _1: "21:06"
                        },
                        _1: {
                            ctor: "::",
                            _0: {
                                ctor: "_Tuple2",
                                _0: "Сигнал восстановлен",
                                _1: "21:16"
                            },
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                }
            }
        }), Ca = ga({
            ctor: "_Tuple3",
            _0: {
                ctor: "_Tuple2",
                _0: "Остановка",
                _1: ""
            },
            _1: "4 минуты",
            _2: {
                ctor: "::",
                _0: {
                    ctor: "_Tuple2",
                    _0: "Заправка 15л",
                    _1: "18:30"
                },
                _1: {
                    ctor: "[]"
                }
            }
        }), Ma = ga({
            ctor: "_Tuple3",
            _0: {
                ctor: "_Tuple2",
                _0: "Движение",
                _1: "170 м"
            },
            _1: "4 минуты",
            _2: {
                ctor: "::",
                _0: {
                    ctor: "_Tuple2",
                    _0: "Окрыт корпус прибора",
                    _1: "18:30"
                },
                _1: {
                    ctor: "[]"
                }
            }
        }), Oa = fa(ha), Sa = () => ca({
            ctor: "_Tuple5",
            _0: {
                ctor: "_Tuple2",
                _0: !1,
                _1: !0
            },
            _1: Oa,
            _2: "Дом",
            _3: {
                ctor: "_Tuple2",
                _0: "11:02",
                _1: "15:20"
            },
            _4: "вулиця Мічуріна, 8, Кам’янське, Дніпропетровська область"
        }), La = () => ca({
            ctor: "_Tuple5",
            _0: {
                ctor: "_Tuple2",
                _0: !0,
                _1: !1
            },
            _1: Oa,
            _2: "Гараж",
            _3: {
                ctor: "_Tuple2",
                _0: "23:20",
                _1: "23:59"
            },
            _4: "вулиця Мічуріна, 8, Кам’янське, Дніпропетровська область"
        }), Pa = fa(va), Ia = () => ca({
            ctor: "_Tuple5",
            _0: {
                ctor: "_Tuple2",
                _0: !0,
                _1: !0
            },
            _1: Pa,
            _2: "Склад №1",
            _3: {
                ctor: "_Tuple2",
                _0: "16:02",
                _1: "16:05"
            },
            _4: "Днипро, Днепропетровская область, 49000"
        }), Ja = t => r => (() => {
            switch (t.ctor) {
              case "NoOp":
                return Ct;

              case "ExpandTravel1":
                return At(t => f.update(t, {
                    travelEvent1: Na(t.travelEvent1)
                }));

              default:
                return At(t => f.update(t, {
                    travelEvent2: Na(t.travelEvent2)
                }));
            }
        })()(Bt(r)), Da = Bt({
            value: 0,
            travelEvent1: Ea,
            travelEvent2: Ea
        }), Fa = (e((t, r, e) => ({
            value: t,
            travelEvent1: r,
            travelEvent2: e
        })), {
            ctor: "ExpandTravel2"
        }), Ua = t => u(Ba, t.travelEvent2, Fa, {
            ctor: "::",
            _0: Aa,
            _1: {
                ctor: "[]"
            }
        }), ja = {
            ctor: "ExpandTravel1"
        }, qa = t => u(Ba, t.travelEvent1, ja, {
            ctor: "::",
            _0: Ma,
            _1: {
                ctor: "::",
                _0: Ca,
                _1: {
                    ctor: "::",
                    _0: Ma,
                    _1: {
                        ctor: "::",
                        _0: Ca,
                        _1: {
                            ctor: "::",
                            _0: Ca,
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                }
            }
        }), Ha = t => {
            var r = l(ya, {
                distance: "139 км",
                duration: "5 ч. 6 мин."
            }, {
                duration: "5 ч. 6 мин."
            });
            return l(oo, {
                ctor: "::",
                _0: fo("timeline-content"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: l(oo, {
                    ctor: "[]"
                }, {
                    ctor: "::",
                    _0: ba(r),
                    _1: {
                        ctor: "::",
                        _0: Sa(),
                        _1: {
                            ctor: "::",
                            _0: qa(t),
                            _1: {
                                ctor: "::",
                                _0: Ia(),
                                _1: {
                                    ctor: "::",
                                    _0: Ua(t),
                                    _1: {
                                        ctor: "::",
                                        _0: La(),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }),
                _1: {
                    ctor: "[]"
                }
            });
        }, za = t => {
            var r = l(_a, "Четверг, 10 Сентября 2015 Г.", "Данные могут быть не полными");
            return l(oo, {
                ctor: "::",
                _0: fo("timeline-wrapper"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: aa(r),
                _1: {
                    ctor: "::",
                    _0: Ha(t),
                    _1: {
                        ctor: "[]"
                    }
                }
            });
        }, Wa = l(Kr, t => t.timeline, r((t, r) => f.update(r, {
            timeline: t
        }))), Ga = t => ({
            ctor: "TimeLineMessage",
            _0: t
        }), Qa = (() => {
            var t = l(yt, Ga, Da), r = t._0;
            return l(kt, t._1, Bt({
                timeline: r
            }));
        })(), Va = t => r => (() => {
            var r = t;
            return "NoOp" === r.ctor ? Ct : u(In, Wa, Ga, Ja(r._0));
        })()(Bt(r)), $a = t => l(oo, {
            ctor: "::",
            _0: fo("map-page"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: l(oo, {
                ctor: "::",
                _0: fo("map-main"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: Xe("Тут будет карта"),
                _1: {
                    ctor: "[]"
                }
            }),
            _1: {
                ctor: "::",
                _0: l(oo, {
                    ctor: "::",
                    _0: fo("map-control"),
                    _1: {
                        ctor: "[]"
                    }
                }, {
                    ctor: "::",
                    _0: l(oo, {
                        ctor: "::",
                        _0: fo("map-control-timeline"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: l($e, Ga, za(t.timeline)),
                        _1: {
                            ctor: "[]"
                        }
                    }),
                    _1: {
                        ctor: "[]"
                    }
                }),
                _1: {
                    ctor: "[]"
                }
            }
        }), Xa = t => ft({
            ctor: "::",
            _0: l(ht, Ga, Ra(t.timeline)),
            _1: {
                ctor: "[]"
            }
        }), Ka = {
            ctor: "NotFound"
        }, Ya = {
            ctor: "Map"
        }, Za = {
            ctor: "Login"
        }, t_ = {
            ctor: "Home"
        }, r_ = (t => An(r => l(z, t => t._0(r), t)))({
            ctor: "::",
            _0: l(Sn, {
                ctor: "Account"
            }, Cn("account")),
            _1: {
                ctor: "::",
                _0: l(Sn, Za, Cn("login")),
                _1: {
                    ctor: "::",
                    _0: l(Sn, Ya, Cn("map")),
                    _1: {
                        ctor: "::",
                        _0: l(Sn, t_, Ln),
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            }
        }), e_ = t => l(B, Ka, l(Nn, r_, t)), o_ = {
            ctor: "NotFoundPage"
        }, n_ = t => ({
            ctor: "MapPage",
            _0: t
        }), c_ = t => ({
            ctor: "LoginPage",
            _0: t
        }), a_ = t => ({
            ctor: "AccountPage",
            _0: t
        }), __ = t => ({
            ctor: "HomePage",
            _0: t
        }), i_ = t => ({
            ctor: "MapPageMsg",
            _0: t
        }), l_ = t => ({
            ctor: "LoginPageMsg",
            _0: t
        }), u_ = t => ({
            ctor: "AccountPageMsg",
            _0: t
        }), s_ = t => ({
            ctor: "HomePageMsg",
            _0: t
        }), d_ = t => {
            var e = r((t, r) => l(Et, t, t => r(t)));
            switch (e_(t).ctor) {
              case "Home":
                return u(e, s_, __, Cc);

              case "Account":
                return u(e, u_, a_, Hn);

              case "Login":
                return u(e, l_, c_, Fc);

              case "Map":
                return u(e, i_, n_, Qa);

              default:
                return {
                    ctor: "_Tuple2",
                    _0: o_,
                    _1: dt
                };
            }
        }, p_ = r((t, r) => {
            var e = {
                ctor: "_Tuple2",
                _0: t,
                _1: r
            };
            t: do {
                if ("_Tuple2" !== e.ctor) break t;
                switch (e._0.ctor) {
                  case "HomePageMsg":
                    if ("HomePage" === e._1.ctor) return u(Et, s_, __, l(Sc, e._0._0, e._1._0));
                    break t;

                  case "AccountPageMsg":
                    if ("AccountPage" === e._1.ctor) return u(Et, u_, a_, l(qn, e._0._0, e._1._0));
                    break t;

                  case "LoginPageMsg":
                    if ("LoginPage" === e._1.ctor) return u(Et, l_, c_, l(Dc, e._0._0, e._1._0));
                    break t;

                  default:
                    if ("MapPage" === e._1.ctor) return u(Et, i_, n_, l(Va, e._0._0, e._1._0));
                    break t;
                }
            } while (!1);
            return l(x, "received unexpected message", t), Bt(r);
        }), g_ = t => {
            var r = t;
            switch (r.ctor) {
              case "HomePage":
                return l($e, s_, Oc(r._0));

              case "AccountPage":
                return l($e, u_, jn(r._0));

              case "LoginPage":
                return l($e, l_, qc(r._0));

              case "MapPage":
                return l($e, i_, $a(r._0));

              default:
                return l(oo, {
                    ctor: "::",
                    _0: fo("not__found"),
                    _1: {
                        ctor: "[]"
                    }
                }, {
                    ctor: "::",
                    _0: Xe("Page Not Found"),
                    _1: {
                        ctor: "[]"
                    }
                });
            }
        }, f_ = t => {
            var r = t;
            switch (r.ctor) {
              case "HomePage":
                return l(ht, s_, Pc(r._0));

              case "AccountPage":
                return l(ht, u_, Fn());

              case "LoginPage":
                return l(ht, l_, Ic(r._0));

              case "MapPage":
                return l(ht, i_, Xa(r._0));

              default:
                return vt;
            }
        }, v_ = r((t, r) => l(fe, m(r), Oe(t))), h_ = l(Kr, t => t.page, r((t, r) => f.update(r, {
            page: t
        }))), m_ = (r((t, r) => ({
            page: t,
            blur: r
        })), {
            ctor: "Delayed"
        }), b_ = t => ({
            ctor: "PageMsg",
            _0: t
        }), y_ = l(nn, t => ({
            ctor: "UrlChange",
            _0: t
        }), {
            init(t) {
                l(x, "App.init", 0);
                var r = l(yt, b_, d_(t)), e = r._0, o = r._1, n = {
                    page: e,
                    blur: !0
                };
                return l(kt, l(v_, 100, m_), l(kt, o, Bt(n)));
            },
            view: t => l(oo, {
                ctor: "::",
                _0: fo(t.blur ? "blur" : "noblur"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: l($e, b_, g_(t.page)),
                _1: {
                    ctor: "[]"
                }
            }),
            update: t => r => (() => {
                var r = t;
                switch (r.ctor) {
                  case "NoOp":
                    return Ct;

                  case "UrlChange":
                    return u(In, h_, b_, m(d_(r._0)));

                  case "PageMsg":
                    return u(In, h_, b_, p_(r._0));

                  case "NavigateTo":
                    return kt(tn(r._0));

                  default:
                    return At(t => f.update(t, {
                        blur: !1
                    }));
                }
            })()(Bt(r)),
            subscriptions: t => ft({
                ctor: "::",
                _0: l(ht, b_, f_(t.page)),
                _1: {
                    ctor: "[]"
                }
            })
        })(), k_ = {};
        if (k_.App = k_.App || {}, void 0 !== y_ && y_(k_.App, "App", void 0), "function" == typeof define && define.amd) define([], () => k_); else if ("object" != typeof t) {
            var T_ = this.Elm;
            if (void 0 !== T_) for (var w_ in k_) {
                if (w_ in T_) throw Error("There are two Elm modules called `" + w_ + "` on this page! Rename one of them.");
                T_[w_] = k_[w_];
            } else this.Elm = k_;
        } else t.exports = k_;
    }).call(this);
} ]);