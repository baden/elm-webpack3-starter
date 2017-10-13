/******/ !function(t) {
    /******/
    /******/
    // The require function
    /******/
    function r(n) {
        /******/
        /******/
        // Check if module is in cache
        /******/
        if (e[n]) /******/
        return e[n].exports;
        /******/
        // Create a new module (and put it into the cache)
        /******/
        var o = e[n] = {
            /******/
            i: n,
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
        return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
    }
    // webpackBootstrap
    /******/
    // The module cache
    /******/
    var e = {};
    /******/
    /******/
    // Load entry module and return exports
    /******/
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
    r.d = function(t, e, n) {
        /******/
        r.o(t, e) || /******/
        Object.defineProperty(t, e, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: n
        });
    }, /******/
    /******/
    // getDefaultExport function for compatibility with non-harmony modules
    /******/
    r.n = function(t) {
        /******/
        var e = t && t.__esModule ? /******/
        function() {
            return t.default;
        } : /******/
        function() {
            return t;
        };
        /******/
        /******/
        return r.d(e, "a", e), e;
    }, /******/
    /******/
    // Object.prototype.hasOwnProperty.call
    /******/
    r.o = function(t, r) {
        return Object.prototype.hasOwnProperty.call(t, r);
    }, /******/
    /******/
    // __webpack_public_path__
    /******/
    r.p = "", r(r.s = 0);
}([ /* 0 */
/***/
function(t, r, e) {
    e(1);
    // require('bootstrap-css');
    var n = e(2), o = document.getElementById("elm-app");
    n.App.embed(o);
    // Copyright 2014-2017 The Bootstrap Authors
    // Copyright 2014-2017 Twitter, Inc.
    // Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
    if (console.dir(n), navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var c = document.createElement("style");
        c.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")), document.head.appendChild(c);
    }
}, /* 1 */
/***/
function(t, r) {}, /* 2 */
/***/
function(t, r) {
    (function() {
        "use strict";
        function r(t) {
            function r(r) {
                return function(e) {
                    return t(r, e);
                };
            }
            return r.arity = 2, r.func = t, r;
        }
        function e(t) {
            function r(r) {
                return function(e) {
                    return function(n) {
                        return t(r, e, n);
                    };
                };
            }
            return r.arity = 3, r.func = t, r;
        }
        function n(t) {
            function r(r) {
                return function(e) {
                    return function(n) {
                        return function(o) {
                            return t(r, e, n, o);
                        };
                    };
                };
            }
            return r.arity = 4, r.func = t, r;
        }
        function o(t) {
            function r(r) {
                return function(e) {
                    return function(n) {
                        return function(o) {
                            return function(c) {
                                return t(r, e, n, o, c);
                            };
                        };
                    };
                };
            }
            return r.arity = 5, r.func = t, r;
        }
        function c(t) {
            function r(r) {
                return function(e) {
                    return function(n) {
                        return function(o) {
                            return function(c) {
                                return function(u) {
                                    return t(r, e, n, o, c, u);
                                };
                            };
                        };
                    };
                };
            }
            return r.arity = 6, r.func = t, r;
        }
        function u(t) {
            function r(r) {
                return function(e) {
                    return function(n) {
                        return function(o) {
                            return function(c) {
                                return function(u) {
                                    return function(i) {
                                        return t(r, e, n, o, c, u, i);
                                    };
                                };
                            };
                        };
                    };
                };
            }
            return r.arity = 7, r.func = t, r;
        }
        function i(t) {
            function r(r) {
                return function(e) {
                    return function(n) {
                        return function(o) {
                            return function(c) {
                                return function(u) {
                                    return function(i) {
                                        return function(a) {
                                            return t(r, e, n, o, c, u, i, a);
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }
            return r.arity = 8, r.func = t, r;
        }
        function a(t) {
            function r(r) {
                return function(e) {
                    return function(n) {
                        return function(o) {
                            return function(c) {
                                return function(u) {
                                    return function(i) {
                                        return function(a) {
                                            return function(_) {
                                                return t(r, e, n, o, c, u, i, a, _);
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }
            return r.arity = 9, r.func = t, r;
        }
        function _(t, r, e) {
            return 2 === t.arity ? t.func(r, e) : t(r)(e);
        }
        function l(t, r, e, n) {
            return 3 === t.arity ? t.func(r, e, n) : t(r)(e)(n);
        }
        function f(t, r, e, n, o) {
            return 4 === t.arity ? t.func(r, e, n, o) : t(r)(e)(n)(o);
        }
        function s(t, r, e, n, o, c) {
            return 5 === t.arity ? t.func(r, e, n, o, c) : t(r)(e)(n)(o)(c);
        }
        function d(t, r, e, n, o, c, u) {
            return 6 === t.arity ? t.func(r, e, n, o, c, u) : t(r)(e)(n)(o)(c)(u);
        }
        //import Native.Utils //
        var p = function() {
            function t(r, e) {
                if (0 === e) throw new Error("Cannot perform mod 0. Division by zero error.");
                var n = r % e, o = 0 === r ? 0 : e > 0 ? r >= 0 ? n : n + e : -t(-r, -e);
                return o === e ? 0 : o;
            }
            var n = [ "LT", "EQ", "GT" ];
            return {
                div: r(function(t, r) {
                    return t / r | 0;
                }),
                rem: r(function(t, r) {
                    return t % r;
                }),
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
                degrees: function(t) {
                    return t * Math.PI / 180;
                },
                turns: function(t) {
                    return 2 * Math.PI * t;
                },
                fromPolar: function(t) {
                    var r = t._0, e = t._1;
                    return g.Tuple2(r * Math.cos(e), r * Math.sin(e));
                },
                toPolar: function(t) {
                    var r = t._0, e = t._1;
                    return g.Tuple2(Math.sqrt(r * r + e * e), Math.atan2(e, r));
                },
                sqrt: Math.sqrt,
                logBase: r(function(t, r) {
                    return Math.log(r) / Math.log(t);
                }),
                negate: function(t) {
                    return -t;
                },
                abs: function(t) {
                    return t < 0 ? -t : t;
                },
                min: r(function(t, r) {
                    return g.cmp(t, r) < 0 ? t : r;
                }),
                max: r(function(t, r) {
                    return g.cmp(t, r) > 0 ? t : r;
                }),
                clamp: e(function(t, r, e) {
                    return g.cmp(e, t) < 0 ? t : g.cmp(e, r) > 0 ? r : e;
                }),
                compare: r(function(t, r) {
                    return {
                        ctor: n[g.cmp(t, r) + 1]
                    };
                }),
                xor: r(function(t, r) {
                    return t !== r;
                }),
                not: function(t) {
                    return !t;
                },
                truncate: function(t) {
                    return 0 | t;
                },
                ceiling: Math.ceil,
                floor: Math.floor,
                round: Math.round,
                toFloat: function(t) {
                    return t;
                },
                isNaN,
                isInfinite: function(t) {
                    return t === 1 / 0 || t === -1 / 0;
                }
            };
        }(), g = function() {
            function t(r, e, n, o) {
                if (n > 100) return o.push({
                    x: r,
                    y: e
                }), !0;
                if (r === e) return !0;
                if ("object" != typeof r) {
                    if ("function" == typeof r) throw new Error('Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense. Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#== which describes why it is this way and what the better version will look like.');
                    return !1;
                }
                if (null === r || null === e) return !1;
                if (r instanceof Date) return r.getTime() === e.getTime();
                if (!("ctor" in r)) {
                    for (var c in r) if (!t(r[c], e[c], n + 1, o)) return !1;
                    return !0;
                }
                // check if lists are equal without recursion
                if (// convert Dicts and Sets to lists
                "RBNode_elm_builtin" !== r.ctor && "RBEmpty_elm_builtin" !== r.ctor || (r = zt(r), 
                e = zt(e)), "Set_elm_builtin" === r.ctor && (r = _elm_lang$core$Set$toList(r), e = _elm_lang$core$Set$toList(e)), 
                "::" === r.ctor) {
                    for (var u = r, i = e; "::" === u.ctor && "::" === i.ctor; ) {
                        if (!t(u._0, i._0, n + 1, o)) return !1;
                        u = u._1, i = i._1;
                    }
                    return u.ctor === i.ctor;
                }
                // check if Arrays are equal
                if ("_Array" === r.ctor) {
                    var a = St.toJSArray(r), _ = St.toJSArray(e);
                    if (a.length !== _.length) return !1;
                    for (var l = 0; l < a.length; l++) if (!t(a[l], _[l], n + 1, o)) return !1;
                    return !0;
                }
                if (!t(r.ctor, e.ctor, n + 1, o)) return !1;
                for (var c in r) if (!t(r[c], e[c], n + 1, o)) return !1;
                return !0;
            }
            function e(t, r) {
                if ("object" != typeof t) return t === r ? a : t < r ? i : _;
                if (t instanceof String) {
                    var n = t.valueOf(), o = r.valueOf();
                    return n === o ? a : n < o ? i : _;
                }
                if ("::" === t.ctor || "[]" === t.ctor) {
                    for (;"::" === t.ctor && "::" === r.ctor; ) {
                        if ((c = e(t._0, r._0)) !== a) return c;
                        t = t._1, r = r._1;
                    }
                    return t.ctor === r.ctor ? a : "[]" === t.ctor ? i : _;
                }
                if ("_Tuple" === t.ctor.slice(0, 6)) {
                    var c, u = t.ctor.slice(6) - 0;
                    if (0 === u) return a;
                    if (u >= 1) {
                        if ((c = e(t._0, r._0)) !== a) return c;
                        if (u >= 2) {
                            if ((c = e(t._1, r._1)) !== a) return c;
                            if (u >= 3) {
                                if ((c = e(t._2, r._2)) !== a) return c;
                                if (u >= 4) {
                                    if ((c = e(t._3, r._3)) !== a) return c;
                                    if (u >= 5) {
                                        if ((c = e(t._4, r._4)) !== a) return c;
                                        if (u >= 6) {
                                            if ((c = e(t._5, r._5)) !== a) return c;
                                            if (u >= 7) throw new Error("Comparison error: cannot compare tuples with more than 6 elements.");
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return a;
                }
                throw new Error("Comparison error: comparison is only defined on ints, floats, times, chars, strings, lists of comparable values, and tuples of comparable values.");
            }
            function n(t, r) {
                return {
                    ctor: "::",
                    _0: t,
                    _1: r
                };
            }
            function o(t) {
                return t.start.line == t.end.line ? "on line " + t.start.line : "between lines " + t.start.line + " and " + t.end.line;
            }
            // TO STRING
            function c(t) {
                var r = typeof t;
                if ("function" === r) return "<function>";
                if ("boolean" === r) return t ? "True" : "False";
                if ("number" === r) return t + "";
                if (t instanceof String) return "'" + u(t, !0) + "'";
                if ("string" === r) return '"' + u(t, !1) + '"';
                if (null === t) return "null";
                if ("object" === r && "ctor" in t) {
                    var e = t.ctor.substring(0, 5);
                    if ("_Tupl" === e) {
                        _ = [];
                        for (var n in t) "ctor" !== n && _.push(c(t[n]));
                        return "(" + _.join(",") + ")";
                    }
                    if ("_Task" === e) return "<task>";
                    if ("_Array" === t.ctor) return "Array.fromList " + c(Ft(t));
                    if ("<decoder>" === t.ctor) return "<decoder>";
                    if ("_Process" === t.ctor) return "<process:" + t.id + ">";
                    if ("::" === t.ctor) {
                        _ = "[" + c(t._0);
                        for (t = t._1; "::" === t.ctor; ) _ += "," + c(t._0), t = t._1;
                        return _ + "]";
                    }
                    if ("[]" === t.ctor) return "[]";
                    if ("Set_elm_builtin" === t.ctor) return "Set.fromList " + c(_elm_lang$core$Set$toList(t));
                    if ("RBNode_elm_builtin" === t.ctor || "RBEmpty_elm_builtin" === t.ctor) return "Dict.fromList " + c(zt(t));
                    _ = "";
                    for (var o in t) if ("ctor" !== o) {
                        var i = c(t[o]), a = i[0];
                        _ += " " + ("{" === a || "(" === a || "<" === a || '"' === a || i.indexOf(" ") < 0 ? i : "(" + i + ")");
                    }
                    return t.ctor + _;
                }
                if ("object" === r) {
                    if (t instanceof Date) return "<" + t.toString() + ">";
                    if (t.elm_web_socket) return "<websocket>";
                    var _ = [];
                    for (var n in t) _.push(n + " = " + c(t[n]));
                    return 0 === _.length ? "{}" : "{ " + _.join(", ") + " }";
                }
                return "<internal structure>";
            }
            function u(t, r) {
                var e = t.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
                return r ? e.replace(/\'/g, "\\'") : e.replace(/\"/g, '\\"');
            }
            // Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
            // the particular integer values assigned to LT, EQ, and GT.
            var i = -1, a = 0, _ = 1, l = 0, f = {
                ctor: "[]"
            };
            return {
                eq: // COMPARISONS
                function(r, e) {
                    for (var n, o = [], c = t(r, e, 0, o); c && (n = o.pop()); ) c = t(n.x, n.y, 0, o);
                    return c;
                },
                cmp: e,
                Tuple0: {
                    ctor: "_Tuple0"
                },
                Tuple2: function(t, r) {
                    return {
                        ctor: "_Tuple2",
                        _0: t,
                        _1: r
                    };
                },
                chr: function(t) {
                    return new String(t);
                },
                update: // RECORDS
                function(t, r) {
                    var e = {};
                    for (var n in t) e[n] = t[n];
                    for (var n in r) e[n] = r[n];
                    return e;
                },
                guid: function(t) {
                    return l++;
                },
                append: r(function(t, r) {
                    // append Strings
                    if ("string" == typeof t) return t + r;
                    // append Lists
                    if ("[]" === t.ctor) return r;
                    var e = n(t._0, f), o = e;
                    for (t = t._1; "[]" !== t.ctor; ) o._1 = n(t._0, f), t = t._1, o = o._1;
                    return o._1 = r, e;
                }),
                crash: // CRASHES
                function(t, r) {
                    return function(e) {
                        throw new Error("Ran into a `Debug.crash` in module `" + t + "` " + o(r) + "\nThe message provided by the code author is:\n\n    " + e);
                    };
                },
                crashCase: function(t, r, e) {
                    return function(n) {
                        throw new Error("Ran into a `Debug.crash` in module `" + t + "`\n\nThis was caused by the `case` expression " + o(r) + ".\nOne of the branches ended with a crash and the following value got through:\n\n    " + c(e) + "\n\nThe message provided by the code author is:\n\n    " + n);
                    };
                },
                toString: c
            };
        }(), h = (r(function(t, r) {
            var e = r;
            return _(t, e._0, e._1);
        }), e(function(t, r, e) {
            return t({
                ctor: "_Tuple2",
                _0: r,
                _1: e
            });
        })), v = e(function(t, r, e) {
            return _(t, e, r);
        }), m = r(function(t, r) {
            return t;
        }), b = function(t) {
            return t;
        }, y = y || {};
        y["<|"] = r(function(t, r) {
            return t(r);
        }), (y = y || {})["|>"] = r(function(t, r) {
            return r(t);
        }), (y = y || {})[">>"] = e(function(t, r, e) {
            return r(t(e));
        }), (y = y || {})["<<"] = e(function(t, r, e) {
            return t(r(e));
        }), (y = y || {})["++"] = g.append;
        var k = g.toString;
        p.isInfinite, p.isNaN, p.toFloat, p.ceiling, p.floor, p.truncate, p.round, p.not, 
        p.xor;
        (y = y || {})["||"] = p.or, (y = y || {})["&&"] = p.and;
        p.max, p.min;
        var w = p.compare;
        (y = y || {})[">="] = p.ge, (y = y || {})["<="] = p.le, (y = y || {})[">"] = p.gt, 
        (y = y || {})["<"] = p.lt, (y = y || {})["/="] = p.neq, (y = y || {})["=="] = p.eq;
        p.e, p.pi, p.clamp, p.logBase, p.abs, p.negate, p.sqrt, p.atan2, p.atan, p.asin, 
        p.acos, p.tan, p.sin, p.cos;
        (y = y || {})["^"] = p.exp, (y = y || {})["%"] = p.mod;
        p.rem;
        (y = y || {})["//"] = p.div, (y = y || {})["/"] = p.floatDiv, (y = y || {})["*"] = p.mul, 
        (y = y || {})["-"] = p.sub, (y = y || {})["+"] = p.add;
        p.toPolar, p.fromPolar, p.turns, p.degrees;
        var T = function() {
            return {
                crash: function(t) {
                    throw new Error(t);
                },
                log: r(function(t, r) {
                    var e = t + ": " + g.toString(r), n = n || {};
                    return n.stdout ? n.stdout.write(e) : console.log(e), r;
                })
            };
        }(), x = (T.crash, T.log), B = r(function(t, r) {
            var e = r;
            return "Just" === e.ctor ? e._0 : t;
        }), N = {
            ctor: "Nothing"
        }, E = r(function(t, r) {
            var e = r;
            return "Just" === e.ctor ? t(e._0) : N;
        }), R = function(t) {
            return {
                ctor: "Just",
                _0: t
            };
        }, A = r(function(t, r) {
            var e = r;
            return "Just" === e.ctor ? R(t(e._0)) : N;
        }), C = e(function(t, r, e) {
            var n = {
                ctor: "_Tuple2",
                _0: r,
                _1: e
            };
            return "_Tuple2" === n.ctor && "Just" === n._0.ctor && "Just" === n._1.ctor ? R(_(t, n._0._0, n._1._0)) : N;
        }), L = (n(function(t, r, e, n) {
            var o = {
                ctor: "_Tuple3",
                _0: r,
                _1: e,
                _2: n
            };
            return "_Tuple3" === o.ctor && "Just" === o._0.ctor && "Just" === o._1.ctor && "Just" === o._2.ctor ? R(l(t, o._0._0, o._1._0, o._2._0)) : N;
        }), o(function(t, r, e, n, o) {
            var c = {
                ctor: "_Tuple4",
                _0: r,
                _1: e,
                _2: n,
                _3: o
            };
            return "_Tuple4" === c.ctor && "Just" === c._0.ctor && "Just" === c._1.ctor && "Just" === c._2.ctor && "Just" === c._3.ctor ? R(f(t, c._0._0, c._1._0, c._2._0, c._3._0)) : N;
        }), c(function(t, r, e, n, o, c) {
            var u = {
                ctor: "_Tuple5",
                _0: r,
                _1: e,
                _2: n,
                _3: o,
                _4: c
            };
            return "_Tuple5" === u.ctor && "Just" === u._0.ctor && "Just" === u._1.ctor && "Just" === u._2.ctor && "Just" === u._3.ctor && "Just" === u._4.ctor ? R(s(t, u._0._0, u._1._0, u._2._0, u._3._0, u._4._0)) : N;
        }), function() {
            function t(t, r) {
                return {
                    ctor: "::",
                    _0: t,
                    _1: r
                };
            }
            function u(r) {
                for (var e = a, n = r.length; n--; ) e = t(r[n], e);
                return e;
            }
            function i(t) {
                for (var r = []; "[]" !== t.ctor; ) r.push(t._0), t = t._1;
                return r;
            }
            var a = {
                ctor: "[]"
            };
            return {
                Nil: a,
                Cons: t,
                cons: r(t),
                toArray: i,
                fromArray: u,
                foldr: e(function(t, r, e) {
                    for (var n = i(e), o = r, c = n.length; c--; ) o = _(t, n[c], o);
                    return o;
                }),
                map2: e(function(t, r, e) {
                    for (var n = []; "[]" !== r.ctor && "[]" !== e.ctor; ) n.push(_(t, r._0, e._0)), 
                    r = r._1, e = e._1;
                    return u(n);
                }),
                map3: n(function(t, r, e, n) {
                    for (var o = []; "[]" !== r.ctor && "[]" !== e.ctor && "[]" !== n.ctor; ) o.push(l(t, r._0, e._0, n._0)), 
                    r = r._1, e = e._1, n = n._1;
                    return u(o);
                }),
                map4: o(function(t, r, e, n, o) {
                    for (var c = []; "[]" !== r.ctor && "[]" !== e.ctor && "[]" !== n.ctor && "[]" !== o.ctor; ) c.push(f(t, r._0, e._0, n._0, o._0)), 
                    r = r._1, e = e._1, n = n._1, o = o._1;
                    return u(c);
                }),
                map5: c(function(t, r, e, n, o, c) {
                    for (var i = []; "[]" !== r.ctor && "[]" !== e.ctor && "[]" !== n.ctor && "[]" !== o.ctor && "[]" !== c.ctor; ) i.push(s(t, r._0, e._0, n._0, o._0, c._0)), 
                    r = r._1, e = e._1, n = n._1, o = o._1, c = c._1;
                    return u(i);
                }),
                sortBy: r(function(t, r) {
                    return u(i(r).sort(function(r, e) {
                        return g.cmp(t(r), t(e));
                    }));
                }),
                sortWith: r(function(t, r) {
                    return u(i(r).sort(function(r, e) {
                        var n = t(r)(e).ctor;
                        return "EQ" === n ? 0 : "LT" === n ? -1 : 1;
                    }));
                })
            };
        }()), M = (L.sortWith, L.sortBy, r(function(t, r) {
            for (;;) {
                if (g.cmp(t, 0) < 1) return r;
                var e = r;
                if ("[]" === e.ctor) return r;
                t = t - 1, r = e._1;
            }
        }), L.map5, L.map4, L.map3, L.map2), O = r(function(t, r) {
            for (;;) {
                var e = r;
                if ("[]" === e.ctor) return !1;
                if (t(e._0)) return !0;
                t = t, r = e._1;
            }
        }), S = (r(function(t, r) {
            return !_(O, function(r) {
                return !t(r);
            }, r);
        }), L.foldr), P = e(function(t, r, e) {
            for (;;) {
                var n = e;
                if ("[]" === n.ctor) return r;
                var o = t, c = _(t, n._0, r);
                t = o, r = c, e = n._1;
            }
        }), I = function(t) {
            return l(P, r(function(t, r) {
                return r + 1;
            }), 0, t);
        }, J = (r(function(t, r) {
            return _(O, function(r) {
                return g.eq(r, t);
            }, r);
        }), J || {});
        J["::"] = L.cons;
        var D = r(function(t, e) {
            return l(S, r(function(r, e) {
                return {
                    ctor: "::",
                    _0: t(r),
                    _1: e
                };
            }), {
                ctor: "[]"
            }, e);
        }), U = (r(function(t, e) {
            var n = r(function(r, e) {
                return t(r) ? {
                    ctor: "::",
                    _0: r,
                    _1: e
                } : e;
            });
            return l(S, n, {
                ctor: "[]"
            }, e);
        }), e(function(t, r, e) {
            var n = t(r);
            return "Just" === n.ctor ? {
                ctor: "::",
                _0: n._0,
                _1: e
            } : e;
        })), F = r(function(t, r) {
            return l(S, U(t), {
                ctor: "[]"
            }, r);
        }), j = function(t) {
            return l(P, r(function(t, r) {
                return {
                    ctor: "::",
                    _0: t,
                    _1: r
                };
            }), {
                ctor: "[]"
            }, t);
        }, q = (e(function(t, e, n) {
            var o = r(function(r, e) {
                var n = e;
                return "::" === n.ctor ? {
                    ctor: "::",
                    _0: _(t, r, n._0),
                    _1: e
                } : {
                    ctor: "[]"
                };
            });
            return j(l(P, o, {
                ctor: "::",
                _0: e,
                _1: {
                    ctor: "[]"
                }
            }, n));
        }), r(function(t, e) {
            return "[]" === e.ctor ? t : l(S, r(function(t, r) {
                return {
                    ctor: "::",
                    _0: t,
                    _1: r
                };
            }), e, t);
        })), z = function(t) {
            return l(S, q, {
                ctor: "[]"
            }, t);
        }, H = r(function(t, r) {
            return z(_(D, t, r));
        }), W = (r(function(t, e) {
            var n = r(function(r, e) {
                var n = e, o = n._0, c = n._1;
                return t(r) ? {
                    ctor: "_Tuple2",
                    _0: {
                        ctor: "::",
                        _0: r,
                        _1: o
                    },
                    _1: c
                } : {
                    ctor: "_Tuple2",
                    _0: o,
                    _1: {
                        ctor: "::",
                        _0: r,
                        _1: c
                    }
                };
            });
            return l(S, n, {
                ctor: "_Tuple2",
                _0: {
                    ctor: "[]"
                },
                _1: {
                    ctor: "[]"
                }
            }, e);
        }), r(function(t, e) {
            var n = e;
            if ("[]" === n.ctor) return {
                ctor: "[]"
            };
            var o = r(function(r, e) {
                return {
                    ctor: "::",
                    _0: t,
                    _1: {
                        ctor: "::",
                        _0: r,
                        _1: e
                    }
                };
            }), c = l(S, o, {
                ctor: "[]"
            }, n._1);
            return {
                ctor: "::",
                _0: n._0,
                _1: c
            };
        }), e(function(t, r, e) {
            for (;;) {
                if (g.cmp(t, 0) < 1) return e;
                var n = r;
                if ("[]" === n.ctor) return e;
                t = t - 1, r = n._1, e = {
                    ctor: "::",
                    _0: n._0,
                    _1: e
                };
            }
        })), G = r(function(t, r) {
            return j(l(W, t, r, {
                ctor: "[]"
            }));
        }), Q = e(function(t, r, e) {
            if (g.cmp(r, 0) < 1) return {
                ctor: "[]"
            };
            var n = {
                ctor: "_Tuple2",
                _0: r,
                _1: e
            };
            t: do {
                r: do {
                    if ("_Tuple2" !== n.ctor) break t;
                    if ("[]" === n._1.ctor) return e;
                    if ("::" !== n._1._1.ctor) {
                        if (1 === n._0) break r;
                        break t;
                    }
                    switch (n._0) {
                      case 1:
                        break r;

                      case 2:
                        return {
                            ctor: "::",
                            _0: n._1._0,
                            _1: {
                                ctor: "::",
                                _0: n._1._1._0,
                                _1: {
                                    ctor: "[]"
                                }
                            }
                        };

                      case 3:
                        if ("::" === n._1._1._1.ctor) return {
                            ctor: "::",
                            _0: n._1._0,
                            _1: {
                                ctor: "::",
                                _0: n._1._1._0,
                                _1: {
                                    ctor: "::",
                                    _0: n._1._1._1._0,
                                    _1: {
                                        ctor: "[]"
                                    }
                                }
                            }
                        };
                        break t;

                      default:
                        if ("::" === n._1._1._1.ctor && "::" === n._1._1._1._1.ctor) {
                            var o = n._1._1._1._0, c = n._1._1._0, u = n._1._0, i = n._1._1._1._1._0, a = n._1._1._1._1._1;
                            return g.cmp(t, 1e3) > 0 ? {
                                ctor: "::",
                                _0: u,
                                _1: {
                                    ctor: "::",
                                    _0: c,
                                    _1: {
                                        ctor: "::",
                                        _0: o,
                                        _1: {
                                            ctor: "::",
                                            _0: i,
                                            _1: _(G, r - 4, a)
                                        }
                                    }
                                }
                            } : {
                                ctor: "::",
                                _0: u,
                                _1: {
                                    ctor: "::",
                                    _0: c,
                                    _1: {
                                        ctor: "::",
                                        _0: o,
                                        _1: {
                                            ctor: "::",
                                            _0: i,
                                            _1: l(Q, t + 1, r - 4, a)
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
                    _0: n._1._0,
                    _1: {
                        ctor: "[]"
                    }
                };
            } while (!1);
            return e;
        }), V = (r(function(t, r) {
            return l(Q, 0, t, r);
        }), e(function(t, r, e) {
            for (;;) {
                if (g.cmp(r, 0) < 1) return t;
                t = {
                    ctor: "::",
                    _0: e,
                    _1: t
                }, r = r - 1, e = e;
            }
        })), $ = (r(function(t, r) {
            return l(V, {
                ctor: "[]"
            }, t, r);
        }), e(function(t, r, e) {
            for (;;) {
                if (!(g.cmp(t, r) < 1)) return e;
                var n = {
                    ctor: "::",
                    _0: r,
                    _1: e
                };
                t = t, r = r - 1, e = n;
            }
        })), K = r(function(t, r) {
            return l($, t, r, {
                ctor: "[]"
            });
        }), X = (r(function(t, r) {
            return l(M, t, _(K, 0, I(r) - 1), r);
        }), r(function(t, r) {
            var e = r;
            return "Ok" === e.ctor ? e._0 : t;
        }), function(t) {
            return {
                ctor: "Err",
                _0: t
            };
        }), Y = (r(function(t, r) {
            var e = r;
            return "Ok" === e.ctor ? t(e._0) : X(e._0);
        }), function(t) {
            return {
                ctor: "Ok",
                _0: t
            };
        }), Z = r(function(t, r) {
            var e = r;
            return "Ok" === e.ctor ? Y(t(e._0)) : X(e._0);
        }), tt = (e(function(t, r, e) {
            var n = {
                ctor: "_Tuple2",
                _0: r,
                _1: e
            };
            return "Ok" === n._0.ctor ? "Ok" === n._1.ctor ? Y(_(t, n._0._0, n._1._0)) : X(n._1._0) : X(n._0._0);
        }), n(function(t, r, e, n) {
            var o = {
                ctor: "_Tuple3",
                _0: r,
                _1: e,
                _2: n
            };
            return "Ok" === o._0.ctor ? "Ok" === o._1.ctor ? "Ok" === o._2.ctor ? Y(l(t, o._0._0, o._1._0, o._2._0)) : X(o._2._0) : X(o._1._0) : X(o._0._0);
        }), o(function(t, r, e, n, o) {
            var c = {
                ctor: "_Tuple4",
                _0: r,
                _1: e,
                _2: n,
                _3: o
            };
            return "Ok" === c._0.ctor ? "Ok" === c._1.ctor ? "Ok" === c._2.ctor ? "Ok" === c._3.ctor ? Y(f(t, c._0._0, c._1._0, c._2._0, c._3._0)) : X(c._3._0) : X(c._2._0) : X(c._1._0) : X(c._0._0);
        }), c(function(t, r, e, n, o, c) {
            var u = {
                ctor: "_Tuple5",
                _0: r,
                _1: e,
                _2: n,
                _3: o,
                _4: c
            };
            return "Ok" === u._0.ctor ? "Ok" === u._1.ctor ? "Ok" === u._2.ctor ? "Ok" === u._3.ctor ? "Ok" === u._4.ctor ? Y(s(t, u._0._0, u._1._0, u._2._0, u._3._0, u._4._0)) : X(u._4._0) : X(u._3._0) : X(u._2._0) : X(u._1._0) : X(u._0._0);
        }), r(function(t, r) {
            var e = r;
            return "Ok" === e.ctor ? Y(e._0) : X(t(e._0));
        }), r(function(t, r) {
            var e = r;
            return "Just" === e.ctor ? Y(e._0) : X(t);
        }), function() {
            function t(t, r) {
                for (var e = ""; t > 0; ) 1 & t && (e += r), t >>= 1, r += r;
                return e;
            }
            function n(t) {
                return X("could not convert string '" + t + "' to an Int");
            }
            function o(t) {
                return X("could not convert string '" + t + "' to a Float");
            }
            return {
                isEmpty: function(t) {
                    return 0 === t.length;
                },
                cons: r(function(t, r) {
                    return t + r;
                }),
                uncons: function(t) {
                    var r = t[0];
                    return r ? R(g.Tuple2(g.chr(r), t.slice(1))) : N;
                },
                append: r(function(t, r) {
                    return t + r;
                }),
                concat: function(t) {
                    return L.toArray(t).join("");
                },
                length: function(t) {
                    return t.length;
                },
                map: r(function(t, r) {
                    for (var e = r.split(""), n = e.length; n--; ) e[n] = t(g.chr(e[n]));
                    return e.join("");
                }),
                filter: r(function(t, r) {
                    return r.split("").map(g.chr).filter(t).join("");
                }),
                reverse: function(t) {
                    return t.split("").reverse().join("");
                },
                foldl: e(function(t, r, e) {
                    for (var n = e.length, o = 0; o < n; ++o) r = _(t, g.chr(e[o]), r);
                    return r;
                }),
                foldr: e(function(t, r, e) {
                    for (var n = e.length; n--; ) r = _(t, g.chr(e[n]), r);
                    return r;
                }),
                split: r(function(t, r) {
                    return L.fromArray(r.split(t));
                }),
                join: r(function(t, r) {
                    return L.toArray(r).join(t);
                }),
                repeat: r(t),
                slice: e(function(t, r, e) {
                    return e.slice(t, r);
                }),
                left: r(function(t, r) {
                    return t < 1 ? "" : r.slice(0, t);
                }),
                right: r(function(t, r) {
                    return t < 1 ? "" : r.slice(-t);
                }),
                dropLeft: r(function(t, r) {
                    return t < 1 ? r : r.slice(t);
                }),
                dropRight: r(function(t, r) {
                    return t < 1 ? r : r.slice(0, -t);
                }),
                pad: e(function(r, e, n) {
                    var o = (r - n.length) / 2;
                    return t(Math.ceil(o), e) + n + t(0 | o, e);
                }),
                padLeft: e(function(r, e, n) {
                    return t(r - n.length, e) + n;
                }),
                padRight: e(function(r, e, n) {
                    return n + t(r - n.length, e);
                }),
                trim: function(t) {
                    return t.trim();
                },
                trimLeft: function(t) {
                    return t.replace(/^\s+/, "");
                },
                trimRight: function(t) {
                    return t.replace(/\s+$/, "");
                },
                words: function(t) {
                    return L.fromArray(t.trim().split(/\s+/g));
                },
                lines: function(t) {
                    return L.fromArray(t.split(/\r\n|\r|\n/g));
                },
                toUpper: function(t) {
                    return t.toUpperCase();
                },
                toLower: function(t) {
                    return t.toLowerCase();
                },
                any: r(function(t, r) {
                    for (var e = r.length; e--; ) if (t(g.chr(r[e]))) return !0;
                    return !1;
                }),
                all: r(function(t, r) {
                    for (var e = r.length; e--; ) if (!t(g.chr(r[e]))) return !1;
                    return !0;
                }),
                contains: r(function(t, r) {
                    return r.indexOf(t) > -1;
                }),
                startsWith: r(function(t, r) {
                    return 0 === r.indexOf(t);
                }),
                endsWith: r(function(t, r) {
                    return r.length >= t.length && r.lastIndexOf(t) === r.length - t.length;
                }),
                indexes: r(function(t, r) {
                    var e = t.length;
                    if (e < 1) return L.Nil;
                    for (var n = 0, o = []; (n = r.indexOf(t, n)) > -1; ) o.push(n), n += e;
                    return L.fromArray(o);
                }),
                toInt: function(t) {
                    var r = t.length;
                    // if empty
                    if (0 === r) return n(t);
                    // if hex
                    var e = t[0];
                    if ("0" === e && "x" === t[1]) {
                        for (o = 2; o < r; ++o) if (!("0" <= (e = t[o]) && e <= "9" || "A" <= e && e <= "F" || "a" <= e && e <= "f")) return n(t);
                        return Y(parseInt(t, 16));
                    }
                    // is decimal
                    if (e > "9" || e < "0" && "-" !== e && "+" !== e) return n(t);
                    for (var o = 1; o < r; ++o) if ((e = t[o]) < "0" || "9" < e) return n(t);
                    return Y(parseInt(t, 10));
                },
                toFloat: function(t) {
                    // check if it is a hex, octal, or binary number
                    if (0 === t.length || /[\sxbo]/.test(t)) return o(t);
                    var r = +t;
                    // faster isNaN check
                    return r === r ? Y(r) : o(t);
                },
                toList: function(t) {
                    return L.fromArray(t.split("").map(g.chr));
                },
                fromList: function(t) {
                    return L.toArray(t).join("");
                }
            };
        }()), rt = {
            fromCode: function(t) {
                return g.chr(String.fromCharCode(t));
            },
            toCode: function(t) {
                return t.charCodeAt(0);
            },
            toUpper: function(t) {
                return g.chr(t.toUpperCase());
            },
            toLower: function(t) {
                return g.chr(t.toLowerCase());
            },
            toLocaleUpper: function(t) {
                return g.chr(t.toLocaleUpperCase());
            },
            toLocaleLower: function(t) {
                return g.chr(t.toLocaleLowerCase());
            }
        }, et = rt.toCode, nt = e(function(t, r, e) {
            var n = et(e);
            return g.cmp(n, et(t)) > -1 && g.cmp(n, et(r)) < 1;
        }), ot = (_(nt, g.chr("A"), g.chr("Z")), _(nt, g.chr("a"), g.chr("z")), _(nt, g.chr("0"), g.chr("9")), 
        _(nt, g.chr("0"), g.chr("7")), tt.fromList, tt.toList, tt.toFloat, tt.toInt), ct = (tt.indexes, 
        tt.indexes, tt.endsWith, tt.startsWith, tt.contains, tt.all, tt.any, tt.toLower, 
        tt.toUpper, tt.lines, tt.words, tt.trimRight, tt.trimLeft, tt.trim, tt.padRight, 
        tt.padLeft, tt.pad, tt.dropRight, tt.dropLeft), ut = (tt.right, tt.left, tt.slice, 
        tt.repeat, tt.join, tt.split), it = (tt.foldr, tt.foldl, tt.reverse, tt.filter, 
        tt.map, tt.length, tt.concat), at = (tt.append, tt.uncons, tt.cons, tt.isEmpty, 
        r(function(t, r) {
            var e = r;
            return {
                ctor: "_Tuple2",
                _0: e._0,
                _1: t(e._1)
            };
        })), _t = r(function(t, r) {
            var e = r;
            return {
                ctor: "_Tuple2",
                _0: t(e._0),
                _1: e._1
            };
        }), lt = function(t) {
            return t._1;
        }, ft = function(t) {
            return t._0;
        }, st = function() {
            function t(t, r) {
                return function(t) {};
            }
            // INITIALIZE A PROGRAM
            function n(t, r, e, n) {
                function c(t) {
                    dt.rawSend(l, t);
                }
                // ambient state
                var i, a = {}, l = u(dt.nativeBinding(function(r) {
                    var o = t._0;
                    i = n(c, o);
                    var u = t._1, _ = e(o);
                    s(a, u, _), r(dt.succeed(o));
                }), function(t, n) {
                    return dt.nativeBinding(function(o) {
                        var c = _(r, t, n);
                        n = c._0, i(n);
                        var u = c._1, l = e(n);
                        s(a, u, l), o(dt.succeed(n));
                    });
                }), f = o(a, c);
                return f ? {
                    ports: f
                } : {};
            }
            function o(t, r) {
                var e;
                // setup all necessary effect managers
                for (var n in y) {
                    var o = y[n];
                    o.isForeign && ((e = e || {})[n] = "cmd" === o.tag ? m(n) : b(n, r)), t[n] = c(o, r);
                }
                return e;
            }
            function c(t, r) {
                var e = {
                    main: r,
                    self: void 0
                }, n = t.tag, o = t.onEffects, c = t.onSelfMsg, i = u(t.init, function(t, r) {
                    if ("self" === t.ctor) return l(c, e, t._0, r);
                    var u = t._0;
                    switch (n) {
                      case "cmd":
                        return l(o, e, u.cmds, r);

                      case "sub":
                        return l(o, e, u.subs, r);

                      case "fx":
                        return f(o, e, u.cmds, u.subs, r);
                    }
                });
                return e.self = i, i;
            }
            // HELPER for STATEFUL LOOPS
            function u(t, r) {
                function e(t) {
                    var o = dt.receive(function(e) {
                        return r(e, t);
                    });
                    return _(n, e, o);
                }
                var n = dt.andThen, o = _(n, e, t);
                return dt.rawSpawn(o);
            }
            // BAGS
            function i(t) {
                return function(r) {
                    return {
                        type: "leaf",
                        home: t,
                        value: r
                    };
                };
            }
            function a(t) {
                return {
                    type: "node",
                    branches: t
                };
            }
            // PIPE BAGS INTO EFFECT MANAGERS
            function s(t, r, e) {
                var n = {};
                d(!0, r, n, null), d(!1, e, n, null);
                for (var o in t) {
                    var c = o in n ? n[o] : {
                        cmds: L.Nil,
                        subs: L.Nil
                    };
                    dt.rawSend(t[o], {
                        ctor: "fx",
                        _0: c
                    });
                }
            }
            function d(t, r, e, n) {
                switch (r.type) {
                  case "leaf":
                    var o = r.home, c = p(t, o, n, r.value);
                    return void (e[o] = h(t, c, e[o]));

                  case "node":
                    for (var u = r.branches; "[]" !== u.ctor; ) d(t, u._0, e, n), u = u._1;
                    return;

                  case "map":
                    return void d(t, r.tree, e, {
                        tagger: r.tagger,
                        rest: n
                    });
                }
            }
            function p(t, r, e, n) {
                return _(t ? y[r].cmdMap : y[r].subMap, function(t) {
                    for (var r = e; r; ) t = r.tagger(t), r = r.rest;
                    return t;
                }, n);
            }
            function h(t, r, e) {
                return e = e || {
                    cmds: L.Nil,
                    subs: L.Nil
                }, t ? (e.cmds = L.Cons(r, e.cmds), e) : (e.subs = L.Cons(r, e.subs), e);
            }
            // PORTS
            function v(t) {
                if (t in y) throw new Error("There can only be one port named `" + t + "`, but your program has multiple.");
            }
            function m(t) {
                var r = [], n = y[t].converter, o = dt.succeed(null);
                return y[t].init = o, y[t].onEffects = e(function(t, e, c) {
                    for (;"[]" !== e.ctor; ) {
                        for (var u = r, i = n(e._0), a = 0; a < u.length; a++) u[a](i);
                        e = e._1;
                    }
                    return o;
                }), {
                    subscribe: // PUBLIC API
                    function(t) {
                        r.push(t);
                    },
                    unsubscribe: function(t) {
                        var e = (// copy subs into a new array in case unsubscribe is called within a
                        // subscribed callback
                        r = r.slice()).indexOf(t);
                        e >= 0 && r.splice(e, 1);
                    }
                };
            }
            function b(t, r) {
                function n(t, r, e) {
                    return u = r, f;
                }
                function o(t) {
                    for (var e = u; "[]" !== e.ctor; ) r(e._0(t)), e = e._1;
                }
                var c = [], u = L.Nil, i = y[t].converter, a = function(t, r, e) {
                    for (var u = n(0, r), i = 0; i < c.length; i++) o(c[i]);
                    // to release objects held in queue
                    return c = null, l = o, a = n, u;
                }, l = // PUBLIC API
                function(t) {
                    c.push(t);
                }, f = dt.succeed(null);
                return y[t].init = f, y[t].onEffects = e(function(t, r, e) {
                    return a(t, r, e);
                }), {
                    send: function(r) {
                        var e = _(Jr, i, r);
                        if ("Err" === e.ctor) throw new Error("Trying to send an unexpected type of value through port `" + t + "`:\n" + e._0);
                        l(e._0);
                    }
                };
            }
            // EFFECT MANAGERS
            var y = {}, k = r(function(t, r) {
                return r;
            }), w = r(function(t, r) {
                return function(e) {
                    return t(r(e));
                };
            });
            return {
                // routers
                sendToApp: r(function(t, r) {
                    return dt.nativeBinding(function(e) {
                        t.main(r), e(dt.succeed(g.Tuple0));
                    });
                }),
                sendToSelf: r(function(t, r) {
                    return _(dt.send, t.self, {
                        ctor: "self",
                        _0: r
                    });
                }),
                // global setup
                effectManagers: y,
                outgoingPort: // OUTGOING PORTS
                function(t, r) {
                    return v(t), y[t] = {
                        tag: "cmd",
                        cmdMap: k,
                        converter: r,
                        isForeign: !0
                    }, i(t);
                },
                incomingPort: // INCOMING PORTS
                function(t, r) {
                    return v(t), y[t] = {
                        tag: "sub",
                        subMap: w,
                        converter: r,
                        isForeign: !0
                    }, i(t);
                },
                htmlToProgram: // HTML TO PROGRAM
                function(t) {
                    var e = a(L.Nil), n = g.Tuple2(g.Tuple0, e);
                    return je({
                        init: n,
                        view: function(t) {
                            return main;
                        },
                        update: r(function(t, r) {
                            return n;
                        }),
                        subscriptions: function(t) {
                            return e;
                        }
                    });
                },
                program: // PROGRAMS
                function(r) {
                    return function(e) {
                        return function(e, o) {
                            e.worker = function(e) {
                                if (void 0 !== e) throw new Error("The `" + o + "` module does not need flags.\nCall " + o + ".worker() with no arguments and you should be all set!");
                                return n(r.init, r.update, r.subscriptions, t);
                            };
                        };
                    };
                },
                programWithFlags: function(r) {
                    return function(e) {
                        return function(o, c) {
                            o.worker = function(o) {
                                if (void 0 === e) throw new Error("Are you trying to sneak a Never value into Elm? Trickster!\nIt looks like " + c + ".main is defined with `programWithFlags` but has type `Program Never`.\nUse `program` instead if you do not want flags.");
                                var u = _(Ar.run, e, o);
                                if ("Err" === u.ctor) throw new Error(c + ".worker(...) was called with an unexpected argument.\nI tried to convert it to an Elm value, but ran into this problem:\n\n" + u._0);
                                return n(r.init(u._0), r.update, r.subscriptions, t);
                            };
                        };
                    };
                },
                initialize: n,
                // effect bags
                leaf: i,
                batch: a,
                map: r(function(t, r) {
                    return {
                        type: "map",
                        tagger: t,
                        tree: r
                    };
                })
            };
        }(), dt = function() {
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
            function n(t) {
                var r = {
                    ctor: "_Process",
                    id: g.guid(),
                    root: t,
                    stack: null,
                    mailbox: []
                };
                return u(r), r;
            }
            function o(t, r) {
                t.mailbox.push(r), u(t);
            }
            // STEP PROCESSES
            function c(t, r) {
                for (;t < a; ) {
                    var e = r.root.ctor;
                    if ("_Task_succeed" !== e) if ("_Task_fail" !== e) if ("_Task_andThen" !== e) if ("_Task_onError" !== e) {
                        if ("_Task_nativeBinding" === e) {
                            r.root.cancel = r.root.callback(function(t) {
                                r.root = t, u(r);
                            });
                            break;
                        }
                        if ("_Task_receive" !== e) throw new Error(e);
                        var n = r.mailbox;
                        if (0 === n.length) break;
                        r.root = r.root.callback(n.shift()), ++t;
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
                return t < a ? t + 1 : (u(r), t);
            }
            function u(t) {
                l.push(t), _ || (setTimeout(i, 0), _ = !0);
            }
            function i() {
                for (var t, r = 0; r < a && (t = l.shift()); ) t.root && (r = c(r, t));
                t ? setTimeout(i, 0) : _ = !1;
            }
            var a = 1e4, _ = !1, l = [];
            return {
                succeed: t,
                fail: function(t) {
                    return {
                        ctor: "_Task_fail",
                        value: t
                    };
                },
                nativeBinding: e,
                andThen: r(function(t, r) {
                    return {
                        ctor: "_Task_andThen",
                        callback: t,
                        task: r
                    };
                }),
                onError: r(function(t, r) {
                    return {
                        ctor: "_Task_onError",
                        callback: t,
                        task: r
                    };
                }),
                receive: function(t) {
                    return {
                        ctor: "_Task_receive",
                        callback: t
                    };
                },
                spawn: function(r) {
                    return e(function(e) {
                        e(t(n(r)));
                    });
                },
                kill: function(r) {
                    return e(function(e) {
                        var n = r.root;
                        "_Task_nativeBinding" === n.ctor && n.cancel && n.cancel(), r.root = null, e(t(g.Tuple0));
                    });
                },
                sleep: function(r) {
                    return e(function(e) {
                        var n = setTimeout(function() {
                            e(t(g.Tuple0));
                        }, r);
                        return function() {
                            clearTimeout(n);
                        };
                    });
                },
                send: r(function(r, n) {
                    return e(function(e) {
                        o(r, n), e(t(g.Tuple0));
                    });
                }),
                rawSpawn: n,
                rawSend: o
            };
        }(), pt = st.batch, gt = pt({
            ctor: "[]"
        }), ht = ht || {};
        ht["!"] = r(function(t, r) {
            return {
                ctor: "_Tuple2",
                _0: t,
                _1: pt(r)
            };
        });
        var vt = st.map, mt = st.batch, bt = mt({
            ctor: "[]"
        }), yt = st.map, kt = (dt.succeed, st.sendToSelf), wt = st.sendToApp, Tt = (st.programWithFlags, 
        st.program, r(function(t, r) {
            return function(e) {
                return r(t(e));
            };
        }), m(gt), r(function(t, r) {
            return pt(_(D, function(t) {
                return t(r);
            }, t));
        }), e(function(t, r, e) {
            return pt({
                ctor: "::",
                _0: t(e),
                _1: {
                    ctor: "::",
                    _0: r(e),
                    _1: {
                        ctor: "[]"
                    }
                }
            });
        }), function() {
            var t = r(function(t, r) {
                var e = t, n = r;
                return _(ht["!"], {
                    ctor: "::",
                    _0: e._0,
                    _1: n._0
                }, {
                    ctor: "::",
                    _0: e._1,
                    _1: {
                        ctor: "::",
                        _0: n._1,
                        _1: {
                            ctor: "[]"
                        }
                    }
                });
            });
            _(S, t, {
                ctor: "_Tuple2",
                _0: {
                    ctor: "[]"
                },
                _1: gt
            });
        }(), r(function(t, r) {
            var e = r;
            return {
                ctor: "_Tuple2",
                _0: e._0,
                _1: _(vt, t, e._1)
            };
        })), xt = (r(function(t, r) {
            var e = r, n = e._0;
            return _(ht["!"], n, {
                ctor: "::",
                _0: e._1,
                _1: {
                    ctor: "::",
                    _0: t(n),
                    _1: {
                        ctor: "[]"
                    }
                }
            });
        }), r(function(t, r) {
            var e = r;
            return _(ht["!"], e._0, {
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
        })), Bt = h(b), Nt = r(function(t, r) {
            var e = r, n = t(e._0), o = n._0, c = n._1;
            return _(ht["!"], o, {
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
        }), Et = Et || {};
        Et["<<<"] = e(function(t, r, e) {
            return _(Nt, t, r(e));
        }), (Et = Et || {})[">>>"] = v(r(function(t, r) {
            return _(Et["<<<"], t, r);
        }));
        Nt(b);
        var Rt = _(v, r(function(t, r) {
            return {
                ctor: "_Tuple2",
                _0: t,
                _1: r
            };
        }), gt), At = (c(function(t, r, e, n, o, c) {
            var u = r, i = e, a = n, l = o, f = c;
            return _(ht["!"], s(t, u._0, i._0, a._0, l._0, f._0), {
                ctor: "::",
                _0: u._1,
                _1: {
                    ctor: "::",
                    _0: i._1,
                    _1: {
                        ctor: "::",
                        _0: a._1,
                        _1: {
                            ctor: "::",
                            _0: l._1,
                            _1: {
                                ctor: "::",
                                _0: f._1,
                                _1: {
                                    ctor: "[]"
                                }
                            }
                        }
                    }
                }
            });
        }), o(function(t, r, e, n, o) {
            var c = r, u = e, i = n, a = o;
            return _(ht["!"], f(t, c._0, u._0, i._0, a._0), {
                ctor: "::",
                _0: c._1,
                _1: {
                    ctor: "::",
                    _0: u._1,
                    _1: {
                        ctor: "::",
                        _0: i._1,
                        _1: {
                            ctor: "::",
                            _0: a._1,
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                }
            });
        }), n(function(t, r, e, n) {
            var o = r, c = e, u = n;
            return _(ht["!"], l(t, o._0, c._0, u._0), {
                ctor: "::",
                _0: o._1,
                _1: {
                    ctor: "::",
                    _0: c._1,
                    _1: {
                        ctor: "::",
                        _0: u._1,
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            });
        })), Ct = (e(function(t, r, e) {
            var n = r, o = e;
            return _(ht["!"], _(t, n._0, o._0), {
                ctor: "::",
                _0: n._1,
                _1: {
                    ctor: "::",
                    _0: o._1,
                    _1: {
                        ctor: "[]"
                    }
                }
            });
        }), e(function(t, r, e) {
            var n = e;
            return {
                ctor: "_Tuple2",
                _0: r(n._0),
                _1: _(vt, t, n._1)
            };
        })), Lt = r(function(t, r) {
            var e = t, n = r;
            return _(ht["!"], n._0(e._0), {
                ctor: "::",
                _0: n._1,
                _1: {
                    ctor: "::",
                    _0: e._1,
                    _1: {
                        ctor: "[]"
                    }
                }
            });
        }), Mt = (h(v(Lt)), r(function(t, r) {
            var e = r;
            return {
                ctor: "_Tuple2",
                _0: t(e._0),
                _1: e._1
            };
        })), Ot = b, St = (_(P, r(function(t, r) {
            return function(e) {
                return r(t(e));
            };
        }), Ot), _(S, r(function(t, r) {
            return function(e) {
                return t(r(e));
            };
        }), Ot), function() {
            function t(t, r) {
                for (var e = r.height; e > 0; e--) {
                    for (var n = t >> 5 * e; r.lengths[n] <= t; ) n++;
                    n > 0 && (t -= r.lengths[n - 1]), r = r.table[n];
                }
                return r.table[t];
            }
            function n(t, r, e) {
                if (0 === (e = N(e)).height) e.table[t] = r; else {
                    var o = R(t, e);
                    o > 0 && (t -= e.lengths[o - 1]), e.table[o] = n(t, r, e.table[o]);
                }
                return e;
            }
            function o(t, r, e, n) {
                if (0 === r) {
                    for (var c = new Array((n - e) % (P + 1)), u = 0; u < c.length; u++) c[u] = t(e + u);
                    return {
                        ctor: "_Array",
                        height: 0,
                        table: c
                    };
                }
                for (var i = Math.pow(P, r), c = new Array(Math.ceil((n - e) / i)), a = new Array(c.length), u = 0; u < c.length; u++) c[u] = o(t, r - 1, e + u * i, Math.min(e + (u + 1) * i, n)), 
                a[u] = E(c[u]) + (u > 0 ? a[u - 1] : 0);
                return {
                    ctor: "_Array",
                    height: r,
                    table: c,
                    lengths: a
                };
            }
            // Push a node into a higher node as a child.
            function c(t, r) {
                var e = t.height;
                // Maybe the node on this height does not exist.
                if (r.length === e) {
                    var n = {
                        ctor: "_Array",
                        height: e + 1,
                        table: [],
                        lengths: []
                    };
                    r.push(n);
                }
                r[e].table.push(t);
                var o = E(t);
                r[e].lengths.length > 0 && (o += r[e].lengths[r[e].lengths.length - 1]), r[e].lengths.push(o), 
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
            function u(t, r) {
                // Handle resursion stop at leaf level.
                if (0 === r.height) return r.table.length < P ? ((o = {
                    ctor: "_Array",
                    height: 0,
                    table: r.table.slice()
                }).table.push(t), o) : null;
                // Recursively push
                var e = u(t, x(r));
                // There was space in the bottom right tree, so the slot will
                // be updated.
                if (null !== e) return (o = N(r)).table[o.table.length - 1] = e, o.lengths[o.lengths.length - 1]++, 
                o;
                // When there was no space left, check if there is space left
                // for a new slot with a tree which contains only the item
                // at the bottom.
                if (r.table.length < P) {
                    var n = A(t, r.height - 1), o = N(r);
                    return o.table.push(n), o.lengths.push(o.lengths[o.lengths.length - 1] + E(n)), 
                    o;
                }
                return null;
            }
            function i(t, r) {
                for (var e = r.table.length - 1; e >= 0; e--) t = 0 === r.height ? L.Cons(r.table[e], t) : i(t, r.table[e]);
                return t;
            }
            // Maps a function over the elements of an array.
            function a(t, r) {
                var e = {
                    ctor: "_Array",
                    height: r.height,
                    table: new Array(r.table.length)
                };
                r.height > 0 && (e.lengths = r.lengths);
                for (var n = 0; n < r.table.length; n++) e.table[n] = 0 === r.height ? t(r.table[n]) : a(t, r.table[n]);
                return e;
            }
            function l(t, r, e) {
                var n = {
                    ctor: "_Array",
                    height: r.height,
                    table: new Array(r.table.length)
                };
                r.height > 0 && (n.lengths = r.lengths);
                for (var o = 0; o < r.table.length; o++) n.table[o] = 0 === r.height ? _(t, e + o, r.table[o]) : l(t, r.table[o], 0 == o ? e : e + r.lengths[o - 1]);
                return n;
            }
            function f(t, r, e) {
                if (0 === e.height) for (n = 0; n < e.table.length; n++) r = _(t, e.table[n], r); else for (var n = 0; n < e.table.length; n++) r = f(t, r, e.table[n]);
                return r;
            }
            function s(t, r, e) {
                if (0 === e.height) for (n = e.table.length; n--; ) r = _(t, e.table[n], r); else for (var n = e.table.length; n--; ) r = s(t, r, e.table[n]);
                return r;
            }
            function d(t, r) {
                if (t === E(r)) return r;
                // Handle leaf level.
                if (0 === r.height) return (o = {
                    ctor: "_Array",
                    height: 0
                }).table = r.table.slice(0, t), o;
                // Slice the right recursively.
                var e = R(t, r), n = d(t - (e > 0 ? r.lengths[e - 1] : 0), r.table[e]);
                // Maybe the a node is not even needed, as sliced contains the whole slice.
                if (0 === e) return n;
                // Create new node.
                var o = {
                    ctor: "_Array",
                    height: r.height,
                    table: r.table.slice(0, e),
                    lengths: r.lengths.slice(0, e)
                };
                return n.table.length > 0 && (o.table[e] = n, o.lengths[e] = E(n) + (e > 0 ? o.lengths[e - 1] : 0)), 
                o;
            }
            function p(t, r) {
                if (0 === t) return r;
                // Handle leaf level.
                if (0 === r.height) return (o = {
                    ctor: "_Array",
                    height: 0
                }).table = r.table.slice(t, r.table.length + 1), o;
                // Slice the left recursively.
                var e = R(t, r), n = p(t - (e > 0 ? r.lengths[e - 1] : 0), r.table[e]);
                // Maybe the a node is not even needed, as sliced contains the whole slice.
                if (e === r.table.length - 1) return n;
                // Create new node.
                var o = {
                    ctor: "_Array",
                    height: r.height,
                    table: r.table.slice(e, r.table.length + 1),
                    lengths: new Array(r.table.length - e)
                };
                o.table[0] = n;
                for (var c = 0, u = 0; u < o.table.length; u++) c += E(o.table[u]), o.lengths[u] = c;
                return o;
            }
            // Returns an array of two nodes; right and left. One node _may_ be empty.
            function g(t, r) {
                if (0 === t.height && 0 === r.height) return [ t, r ];
                if (1 !== t.height || 1 !== r.height) if (t.height === r.height) t = N(t), r = N(r), 
                h(t, (e = g(x(t), B(r)))[1]), v(r, e[0]); else if (t.height > r.height) h(t = N(t), (e = g(x(t), r))[0]), 
                r = C(e[1], e[1].height + 1); else {
                    var e = g(t, B(r = N(r))), n = 0 === e[0].table.length ? 0 : 1, o = 0 === n ? 1 : 0;
                    v(r, e[n]), t = C(e[o], e[o].height + 1);
                }
                // Check if balancing is needed and return based on that.
                if (0 === t.table.length || 0 === r.table.length) return [ t, r ];
                var c = m(t, r);
                return c <= I ? [ t, r ] : T(t, r, c);
            }
            // Helperfunctions for append_. Replaces a child node at the side of the parent.
            function h(t, r) {
                var e = t.table.length - 1;
                t.table[e] = r, t.lengths[e] = E(r), t.lengths[e] += e > 0 ? t.lengths[e - 1] : 0;
            }
            function v(t, r) {
                if (r.table.length > 0) {
                    t.table[0] = r, t.lengths[0] = E(r);
                    for (var e = E(t.table[0]), n = 1; n < t.lengths.length; n++) e += E(t.table[n]), 
                    t.lengths[n] = e;
                } else {
                    t.table.shift();
                    for (n = 1; n < t.lengths.length; n++) t.lengths[n] = t.lengths[n] - t.lengths[0];
                    t.lengths.shift();
                }
            }
            // Returns the extra search steps for E. Refer to the paper.
            function m(t, r) {
                for (var e = 0, n = 0; n < t.table.length; n++) e += t.table[n].table.length;
                for (n = 0; n < r.table.length; n++) e += r.table[n].table.length;
                return t.table.length + r.table.length - (Math.floor((e - 1) / P) + 1);
            }
            // get2, set2 and saveSlot are helpers for accessing elements over two arrays.
            function b(t, r, e) {
                return e < t.length ? t[e] : r[e - t.length];
            }
            function y(t, r, e, n) {
                e < t.length ? t[e] = n : r[e - t.length] = n;
            }
            function k(t, r, e, n) {
                y(t.table, r.table, e, n);
                var o = 0 === e || e === t.lengths.length ? 0 : b(t.lengths, t.lengths, e - 1);
                y(t.lengths, r.lengths, e, o + E(n));
            }
            // Creates a node or leaf with a given length at their arrays for perfomance.
            // Is only used by shuffle.
            function w(t, r) {
                r < 0 && (r = 0);
                var e = {
                    ctor: "_Array",
                    height: t,
                    table: new Array(r)
                };
                return t > 0 && (e.lengths = new Array(r)), e;
            }
            // Returns an array of two balanced nodes.
            function T(t, r, e) {
                for (var n = w(t.height, Math.min(P, t.table.length + r.table.length - e)), o = w(t.height, n.table.length - (t.table.length + r.table.length - e)), c = 0; b(t.table, r.table, c).table.length % P == 0; ) y(n.table, o.table, c, b(t.table, r.table, c)), 
                y(n.lengths, o.lengths, c, b(t.lengths, r.lengths, c)), c++;
                // If the current slot is still containing data, then there will be at
                // least one more write, so we do not break this loop yet.
                for (// Pulling items from left to right, caching in a slot before writing
                // it into the new nodes.
                var u = c, i = new w(t.height - 1, 0), a = 0; c - u - (i.table.length > 0 ? 1 : 0) < e; ) {
                    // Find out the max possible items for copying.
                    var _ = b(t.table, r.table, c), l = Math.min(P - i.table.length, _.table.length);
                    if (// Copy and adjust size table.
                    i.table = i.table.concat(_.table.slice(a, l)), i.height > 0) for (var f = i.lengths.length, s = f; s < f + l - a; s++) i.lengths[s] = E(i.table[s]), 
                    i.lengths[s] += s > 0 ? i.lengths[s - 1] : 0;
                    a += l, // Only proceed to next slots[i] if the current one was
                    // fully copied.
                    _.table.length <= l && (c++, a = 0), // Only create a new slot if the current one is filled up.
                    i.table.length === P && (k(n, o, u, i), i = w(t.height - 1, 0), u++);
                }
                // Shift the untouched slots to the left
                for (// Cleanup after the loop. Copy the last slot into the new nodes.
                i.table.length > 0 && (k(n, o, u, i), u++); c < t.table.length + r.table.length; ) k(n, o, u, b(t.table, r.table, c)), 
                c++, u++;
                return [ n, o ];
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
                for (var e = t >> 5 * r.height; r.lengths[e] <= t; ) e++;
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
            function M(t, r) {
                return {
                    ctor: "_Array",
                    height: t.height + 1,
                    table: [ t, r ],
                    lengths: [ E(t), E(t) + E(r) ]
                };
            }
            function O(t, r, e) {
                for (var n = 0; n < e.table.length; n++) 0 === e.height ? t[r + n] = e.table[n] : O(t, r + (0 === n ? 0 : e.lengths[n - 1]), e.table[n]);
            }
            function S(t, r, e, n) {
                if (0 === r) return {
                    ctor: "_Array",
                    height: 0,
                    table: t.slice(e, n)
                };
                for (var o = Math.pow(P, r), c = new Array(Math.ceil((n - e) / o)), u = new Array(c.length), i = 0; i < c.length; i++) c[i] = S(t, r - 1, e + i * o, Math.min(e + (i + 1) * o, n)), 
                u[i] = E(c[i]) + (i > 0 ? u[i - 1] : 0);
                return {
                    ctor: "_Array",
                    height: r,
                    table: c,
                    lengths: u
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
                fromList: function(t) {
                    if ("[]" === t.ctor) return J;
                    for (// Allocate M sized blocks (table) and write list elements to it.
                    var r = new Array(P), e = [], n = 0; "[]" !== t.ctor; ) r[n] = t._0, t = t._1, // table is full, so we can push a leaf containing it into the
                    // next node.
                    ++n === P && (c(o = {
                        ctor: "_Array",
                        height: 0,
                        table: r
                    }, e), r = new Array(P), n = 0);
                    // Maybe there is something left on the table.
                    if (n > 0) {
                        var o = {
                            ctor: "_Array",
                            height: 0,
                            table: r.splice(0, n)
                        };
                        c(o, e);
                    }
                    // Go through all of the nodes and eventually push them into higher nodes.
                    for (var u = 0; u < e.length - 1; u++) e[u].table.length > 0 && c(e[u], e);
                    var i = e[e.length - 1];
                    return i.height > 0 && 1 === i.table.length ? i.table[0] : i;
                },
                toList: // Converts an array into a list of elements.
                function(t) {
                    return i(L.Nil, t);
                },
                initialize: r(function(t, r) {
                    return t <= 0 ? J : o(r, Math.floor(Math.log(t) / Math.log(P)), 0, t);
                }),
                append: r(// Appends two trees.
                function(t, r) {
                    if (0 === t.table.length) return r;
                    if (0 === r.table.length) return t;
                    var e = g(t, r);
                    // Check if both nodes can be crunshed together.
                    if (e[0].table.length + e[1].table.length <= P) {
                        if (0 === e[0].table.length) return e[1];
                        if (0 === e[1].table.length) return e[0];
                        if (// Adjust .table and .lengths
                        e[0].table = e[0].table.concat(e[1].table), e[0].height > 0) {
                            for (var n = E(e[0]), o = 0; o < e[1].lengths.length; o++) e[1].lengths[o] += n;
                            e[0].lengths = e[0].lengths.concat(e[1].lengths);
                        }
                        return e[0];
                    }
                    if (e[0].height > 0) {
                        var c = m(t, r);
                        c > I && (e = T(e[0], e[1], c));
                    }
                    return M(e[0], e[1]);
                }),
                push: r(// Pushes an item via push_ to the bottom right of a tree.
                function(t, r) {
                    var e = u(t, r);
                    return null !== e ? e : M(r, A(t, r.height));
                }),
                slice: e(// TODO: currently, it slices the right, then the left. This can be
                // optimized.
                function(t, r, e) {
                    return t < 0 && (t += E(e)), r < 0 && (r += E(e)), p(t, d(r, e));
                }),
                get: r(function(r, e) {
                    if (r < 0 || r >= E(e)) throw new Error("Index " + r + " is out of range. Check the length of your array first or use getMaybe or getWithDefault.");
                    return t(r, e);
                }),
                set: e(// Sets the value at the index i. Only the nodes leading to i will get
                // copied and updated.
                function(t, r, e) {
                    return t < 0 || E(e) <= t ? e : n(t, r, e);
                }),
                map: r(a),
                indexedMap: r(// Maps a function over the elements with their index as first argument.
                function(t, r) {
                    return l(t, r, 0);
                }),
                foldl: e(f),
                foldr: e(s),
                length: E,
                toJSArray: function(t) {
                    var r = new Array(E(t));
                    return O(r, 0, t), r;
                },
                fromJSArray: function(t) {
                    return 0 === t.length ? J : S(t, Math.floor(Math.log(t.length) / Math.log(P)), 0, t.length);
                }
            };
        }()), Pt = (St.append, St.length, St.slice, St.set), It = r(function(t, r) {
            return g.cmp(0, t) < 1 && g.cmp(t, St.length(r)) < 0 ? R(_(St.get, t, r)) : N;
        }), Jt = St.push, Dt = St.empty, Ut = (r(function(t, e) {
            var n = r(function(r, e) {
                return t(r) ? _(St.push, r, e) : e;
            });
            return l(St.foldl, n, St.empty, e);
        }), St.foldr, St.foldl, St.indexedMap), Ft = (St.map, St.toList), jt = (St.fromList, 
        St.initialize), qt = (r(function(t, r) {
            return _(jt, t, m(r));
        }), e(function(t, r, e) {
            for (;;) {
                var n = e;
                if ("RBEmpty_elm_builtin" === n.ctor) return r;
                var o = t, c = l(t, n._1, n._2, l(qt, t, r, n._4));
                t = o, r = c, e = n._3;
            }
        })), zt = function(t) {
            return l(qt, e(function(t, r, e) {
                return {
                    ctor: "::",
                    _0: {
                        ctor: "_Tuple2",
                        _0: t,
                        _1: r
                    },
                    _1: e
                };
            }), {
                ctor: "[]"
            }, t);
        }, Ht = e(function(t, r, e) {
            for (;;) {
                var n = e;
                if ("RBEmpty_elm_builtin" === n.ctor) return r;
                var o = t, c = l(t, n._1, n._2, l(Ht, t, r, n._3));
                t = o, r = c, e = n._4;
            }
        }), Wt = c(function(t, n, o, c, u, i) {
            var a = e(function(r, e, c) {
                for (;;) {
                    var u = c, i = u._1, a = u._0, _ = a;
                    if ("[]" === _.ctor) return {
                        ctor: "_Tuple2",
                        _0: a,
                        _1: l(o, r, e, i)
                    };
                    var s = _._1, d = _._0._1, p = _._0._0;
                    if (!(g.cmp(p, r) < 0)) return g.cmp(p, r) > 0 ? {
                        ctor: "_Tuple2",
                        _0: a,
                        _1: l(o, r, e, i)
                    } : {
                        ctor: "_Tuple2",
                        _0: s,
                        _1: f(n, p, d, e, i)
                    };
                    r = r, e = e, c = {
                        ctor: "_Tuple2",
                        _0: s,
                        _1: l(t, p, d, i)
                    };
                }
            }), _ = l(Ht, a, {
                ctor: "_Tuple2",
                _0: zt(c),
                _1: i
            }, u), s = _._0, d = _._1;
            return l(P, r(function(r, e) {
                var n = r;
                return l(t, n._0, n._1, e);
            }), d, s);
        }), Gt = n(function(t, r, e, n) {
            return T.crash(it({
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
                                            _0: n,
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
            }));
        }), Qt = function(t) {
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
        }, Vt = r(function(t, r) {
            for (;;) {
                var e = r;
                if ("RBEmpty_elm_builtin" === e.ctor) return t;
                t = _(Vt, t + 1, e._4), r = e._3;
            }
        }), $t = r(function(t, r) {
            t: for (;;) {
                var e = r;
                if ("RBEmpty_elm_builtin" === e.ctor) return N;
                switch (_(w, t, e._1).ctor) {
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
        }), Kt = r(function(t, r) {
            return "Just" === _($t, t, r).ctor;
        }), Xt = e(function(t, r, e) {
            for (;;) {
                var n = e;
                if ("RBEmpty_elm_builtin" === n.ctor) return {
                    ctor: "_Tuple2",
                    _0: t,
                    _1: r
                };
                t = n._1, r = n._2, e = n._4;
            }
        }), Yt = {
            ctor: "NBlack"
        }, Zt = {
            ctor: "BBlack"
        }, tr = {
            ctor: "Black"
        }, rr = function(t) {
            var r = t;
            if ("RBNode_elm_builtin" === r.ctor) {
                var e = r._0;
                return g.eq(e, tr) || g.eq(e, Zt);
            }
            return !0;
        }, er = {
            ctor: "Red"
        }, nr = function(t) {
            switch (t.ctor) {
              case "Black":
                return Zt;

              case "Red":
                return tr;

              case "NBlack":
                return er;

              default:
                return T.crash("Can't make a double black node more black!");
            }
        }, or = function(t) {
            switch (t.ctor) {
              case "BBlack":
                return tr;

              case "Black":
                return er;

              case "Red":
                return Yt;

              default:
                return T.crash("Can't make a negative black node less black!");
            }
        }, cr = {
            ctor: "LBBlack"
        }, ur = {
            ctor: "LBlack"
        }, ir = function(t) {
            return {
                ctor: "RBEmpty_elm_builtin",
                _0: t
            };
        }, ar = ir(ur), _r = o(function(t, r, e, n, o) {
            return {
                ctor: "RBNode_elm_builtin",
                _0: t,
                _1: r,
                _2: e,
                _3: n,
                _4: o
            };
        }), lr = function(t) {
            var r = t;
            return "RBNode_elm_builtin" === r.ctor && "Red" === r._0.ctor ? s(_r, tr, r._1, r._2, r._3, r._4) : t;
        }, fr = function(t) {
            var r = t;
            return "RBNode_elm_builtin" === r.ctor ? s(_r, or(r._0), r._1, r._2, r._3, r._4) : ir(ur);
        }, sr = function(t) {
            return function(r) {
                return function(e) {
                    return function(n) {
                        return function(o) {
                            return function(c) {
                                return function(u) {
                                    return function(i) {
                                        return function(a) {
                                            return function(_) {
                                                return function(l) {
                                                    return s(_r, or(t), n, o, s(_r, tr, r, e, i, a), s(_r, tr, c, u, _, l));
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        }, dr = function(t) {
            var r = t;
            return "RBEmpty_elm_builtin" === r.ctor ? ir(ur) : s(_r, tr, r._1, r._2, r._3, r._4);
        }, pr = function(t) {
            var r = t;
            return "RBEmpty_elm_builtin" === r.ctor ? T.crash("can't make a Leaf red") : s(_r, er, r._1, r._2, r._3, r._4);
        }, gr = function(t) {
            var r = t;
            t: do {
                r: do {
                    e: do {
                        n: do {
                            o: do {
                                c: do {
                                    u: do {
                                        if ("RBNode_elm_builtin" !== r.ctor) break t;
                                        if ("RBNode_elm_builtin" === r._3.ctor) if ("RBNode_elm_builtin" === r._4.ctor) switch (r._3._0.ctor) {
                                          case "Red":
                                            switch (r._4._0.ctor) {
                                              case "Red":
                                                if ("RBNode_elm_builtin" === r._3._3.ctor && "Red" === r._3._3._0.ctor) break u;
                                                if ("RBNode_elm_builtin" === r._3._4.ctor && "Red" === r._3._4._0.ctor) break c;
                                                if ("RBNode_elm_builtin" === r._4._3.ctor && "Red" === r._4._3._0.ctor) break o;
                                                if ("RBNode_elm_builtin" === r._4._4.ctor && "Red" === r._4._4._0.ctor) break n;
                                                break t;

                                              case "NBlack":
                                                if ("RBNode_elm_builtin" === r._3._3.ctor && "Red" === r._3._3._0.ctor) break u;
                                                if ("RBNode_elm_builtin" === r._3._4.ctor && "Red" === r._3._4._0.ctor) break c;
                                                if ("BBlack" === r._0.ctor && "RBNode_elm_builtin" === r._4._3.ctor && "Black" === r._4._3._0.ctor && "RBNode_elm_builtin" === r._4._4.ctor && "Black" === r._4._4._0.ctor) break e;
                                                break t;

                                              default:
                                                if ("RBNode_elm_builtin" === r._3._3.ctor && "Red" === r._3._3._0.ctor) break u;
                                                if ("RBNode_elm_builtin" === r._3._4.ctor && "Red" === r._3._4._0.ctor) break c;
                                                break t;
                                            }

                                          case "NBlack":
                                            switch (r._4._0.ctor) {
                                              case "Red":
                                                if ("RBNode_elm_builtin" === r._4._3.ctor && "Red" === r._4._3._0.ctor) break o;
                                                if ("RBNode_elm_builtin" === r._4._4.ctor && "Red" === r._4._4._0.ctor) break n;
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
                                                if ("RBNode_elm_builtin" === r._4._3.ctor && "Red" === r._4._3._0.ctor) break o;
                                                if ("RBNode_elm_builtin" === r._4._4.ctor && "Red" === r._4._4._0.ctor) break n;
                                                break t;

                                              case "NBlack":
                                                if ("BBlack" === r._0.ctor && "RBNode_elm_builtin" === r._4._3.ctor && "Black" === r._4._3._0.ctor && "RBNode_elm_builtin" === r._4._4.ctor && "Black" === r._4._4._0.ctor) break e;
                                                break t;

                                              default:
                                                break t;
                                            }
                                        } else switch (r._3._0.ctor) {
                                          case "Red":
                                            if ("RBNode_elm_builtin" === r._3._3.ctor && "Red" === r._3._3._0.ctor) break u;
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
                                                if ("RBNode_elm_builtin" === r._4._3.ctor && "Red" === r._4._3._0.ctor) break o;
                                                if ("RBNode_elm_builtin" === r._4._4.ctor && "Red" === r._4._4._0.ctor) break n;
                                                break t;

                                              case "NBlack":
                                                if ("BBlack" === r._0.ctor && "RBNode_elm_builtin" === r._4._3.ctor && "Black" === r._4._3._0.ctor && "RBNode_elm_builtin" === r._4._4.ctor && "Black" === r._4._4._0.ctor) break e;
                                                break t;

                                              default:
                                                break t;
                                            }
                                        }
                                    } while (!1);
                                    return sr(r._0)(r._3._3._1)(r._3._3._2)(r._3._1)(r._3._2)(r._1)(r._2)(r._3._3._3)(r._3._3._4)(r._3._4)(r._4);
                                } while (!1);
                                return sr(r._0)(r._3._1)(r._3._2)(r._3._4._1)(r._3._4._2)(r._1)(r._2)(r._3._3)(r._3._4._3)(r._3._4._4)(r._4);
                            } while (!1);
                            return sr(r._0)(r._1)(r._2)(r._4._3._1)(r._4._3._2)(r._4._1)(r._4._2)(r._3)(r._4._3._3)(r._4._3._4)(r._4._4);
                        } while (!1);
                        return sr(r._0)(r._1)(r._2)(r._4._1)(r._4._2)(r._4._4._1)(r._4._4._2)(r._3)(r._4._3)(r._4._4._3)(r._4._4._4);
                    } while (!1);
                    return s(_r, tr, r._4._3._1, r._4._3._2, s(_r, tr, r._1, r._2, r._3, r._4._3._3), s(hr, tr, r._4._1, r._4._2, r._4._3._4, pr(r._4._4)));
                } while (!1);
                return s(_r, tr, r._3._4._1, r._3._4._2, s(hr, tr, r._3._1, r._3._2, pr(r._3._3), r._3._4._3), s(_r, tr, r._1, r._2, r._3._4._4, r._4));
            } while (!1);
            return t;
        }, hr = o(function(t, r, e, n, o) {
            var c = s(_r, t, r, e, n, o);
            return rr(c) ? gr(c) : c;
        }), vr = o(function(t, r, e, n, o) {
            return Qt(n) || Qt(o) ? s(hr, nr(t), r, e, fr(n), fr(o)) : s(_r, t, r, e, n, o);
        }), mr = o(function(t, r, e, n, o) {
            var c = o;
            return "RBEmpty_elm_builtin" === c.ctor ? l(br, t, n, o) : s(vr, t, r, e, n, s(mr, c._0, c._1, c._2, c._3, c._4));
        }), br = e(function(t, r, e) {
            var n = {
                ctor: "_Tuple2",
                _0: r,
                _1: e
            };
            if ("RBEmpty_elm_builtin" !== n._0.ctor) {
                if ("RBEmpty_elm_builtin" === n._1.ctor) {
                    var o = n._1._0, c = n._0._0, u = {
                        ctor: "_Tuple3",
                        _0: t,
                        _1: c,
                        _2: o
                    };
                    return "_Tuple3" === u.ctor && "Black" === u._0.ctor && "Red" === u._1.ctor && "LBlack" === u._2.ctor ? s(_r, tr, n._0._1, n._0._2, n._0._3, n._0._4) : f(Gt, "Black/Red/LBlack", t, k(c), k(o));
                }
                var i = n._0._2, a = n._0._4, _ = n._0._1, d = s(mr, n._0._0, _, i, n._0._3, a), p = l(Xt, _, i, a), g = p._0, h = p._1;
                return s(vr, t, g, h, d, e);
            }
            if ("RBEmpty_elm_builtin" !== n._1.ctor) {
                var v = n._1._0, m = n._0._0, b = {
                    ctor: "_Tuple3",
                    _0: t,
                    _1: m,
                    _2: v
                };
                return "_Tuple3" === b.ctor && "Black" === b._0.ctor && "LBlack" === b._1.ctor && "Red" === b._2.ctor ? s(_r, tr, n._1._1, n._1._2, n._1._3, n._1._4) : f(Gt, "Black/LBlack/Red", t, k(m), k(v));
            }
            switch (t.ctor) {
              case "Red":
                return ir(ur);

              case "Black":
                return ir(cr);

              default:
                return T.crash("cannot have bblack or nblack nodes at this point");
            }
        }), yr = r(function(t, r) {
            var e = r;
            if ("RBEmpty_elm_builtin" === e.ctor) return ir(ur);
            var n = e._1;
            return s(_r, e._0, n, _(t, n, e._2), _(yr, t, e._3), _(yr, t, e._4));
        }), kr = {
            ctor: "Same"
        }, wr = {
            ctor: "Remove"
        }, Tr = {
            ctor: "Insert"
        }, xr = e(function(t, r, e) {
            var n = function(e) {
                var o = e;
                if ("RBEmpty_elm_builtin" === o.ctor) {
                    var c = r(N);
                    return "Nothing" === c.ctor ? {
                        ctor: "_Tuple2",
                        _0: kr,
                        _1: ar
                    } : {
                        ctor: "_Tuple2",
                        _0: Tr,
                        _1: s(_r, er, t, c._0, ar, ar)
                    };
                }
                var u = o._2, i = o._4, a = o._3, f = o._1, d = o._0;
                switch (_(w, t, f).ctor) {
                  case "EQ":
                    var p = r(R(u));
                    return "Nothing" === p.ctor ? {
                        ctor: "_Tuple2",
                        _0: wr,
                        _1: l(br, d, a, i)
                    } : {
                        ctor: "_Tuple2",
                        _0: kr,
                        _1: s(_r, d, f, p._0, a, i)
                    };

                  case "LT":
                    var g = n(a), h = g._0, v = g._1;
                    switch (h.ctor) {
                      case "Same":
                        return {
                            ctor: "_Tuple2",
                            _0: kr,
                            _1: s(_r, d, f, u, v, i)
                        };

                      case "Insert":
                        return {
                            ctor: "_Tuple2",
                            _0: Tr,
                            _1: s(hr, d, f, u, v, i)
                        };

                      default:
                        return {
                            ctor: "_Tuple2",
                            _0: wr,
                            _1: s(vr, d, f, u, v, i)
                        };
                    }

                  default:
                    var m = n(i), h = m._0, b = m._1;
                    switch (h.ctor) {
                      case "Same":
                        return {
                            ctor: "_Tuple2",
                            _0: kr,
                            _1: s(_r, d, f, u, a, b)
                        };

                      case "Insert":
                        return {
                            ctor: "_Tuple2",
                            _0: Tr,
                            _1: s(hr, d, f, u, a, b)
                        };

                      default:
                        return {
                            ctor: "_Tuple2",
                            _0: wr,
                            _1: s(vr, d, f, u, a, b)
                        };
                    }
                }
            }, o = n(e), c = o._0, u = o._1;
            switch (c.ctor) {
              case "Same":
                return u;

              case "Insert":
                return lr(u);

              default:
                return dr(u);
            }
        }), Br = e(function(t, r, e) {
            return l(xr, t, m(R(r)), e);
        }), Nr = (r(function(t, r) {
            return l(Br, t, r, ar);
        }), r(function(t, r) {
            return l(Ht, Br, r, t);
        }), r(function(t, r) {
            var n = e(function(r, e, n) {
                return _(t, r, e) ? l(Br, r, e, n) : n;
            });
            return l(Ht, n, ar, r);
        })), Er = (r(function(t, e) {
            return _(Nr, r(function(t, r) {
                return _(Kt, t, e);
            }), t);
        }), r(function(t, r) {
            var n = e(function(r, e, n) {
                var o = n, c = o._1, u = o._0;
                return _(t, r, e) ? {
                    ctor: "_Tuple2",
                    _0: l(Br, r, e, u),
                    _1: c
                } : {
                    ctor: "_Tuple2",
                    _0: u,
                    _1: l(Br, r, e, c)
                };
            });
            return l(Ht, n, {
                ctor: "_Tuple2",
                _0: ar,
                _1: ar
            }, r);
        }), function(t) {
            return l(P, r(function(t, r) {
                var e = t;
                return l(Br, e._0, e._1, r);
            }), ar, t);
        }), Rr = r(function(t, r) {
            return l(xr, t, m(N), r);
        }), Ar = (r(function(t, r) {
            return l(Ht, e(function(t, r, e) {
                return _(Rr, t, e);
            }), t, r);
        }), function() {
            function t(t, r) {
                return {
                    ctor: "<decoder>",
                    tag: "map-many",
                    func: t,
                    decoders: r
                };
            }
            // DECODE HELPERS
            function _(t) {
                return {
                    tag: "ok",
                    value: t
                };
            }
            function l(t, r) {
                return {
                    tag: "primitive",
                    type: t,
                    value: r
                };
            }
            function f(t, r) {
                return {
                    tag: "index",
                    index: t,
                    rest: r
                };
            }
            function s(t, r) {
                return {
                    tag: "field",
                    field: t,
                    rest: r
                };
            }
            function f(t, r) {
                return {
                    tag: "index",
                    index: t,
                    rest: r
                };
            }
            function d(t) {
                return {
                    tag: "oneOf",
                    problems: t
                };
            }
            function p(t) {
                return {
                    tag: "fail",
                    msg: t
                };
            }
            function h(t) {
                for (var r = "_"; t; ) switch (t.tag) {
                  case "primitive":
                    return "Expecting " + t.type + ("_" === r ? "" : " at " + r) + " but instead got: " + v(t.value);

                  case "index":
                    r += "[" + t.index + "]", t = t.rest;
                    break;

                  case "field":
                    r += "." + t.field, t = t.rest;
                    break;

                  case "oneOf":
                    for (var e = t.problems, n = 0; n < e.length; n++) e[n] = h(e[n]);
                    return "I ran into the following problems" + ("_" === r ? "" : " at " + r) + ":\n\n" + e.join("\n");

                  case "fail":
                    return "I ran into a `fail` decoder" + ("_" === r ? "" : " at " + r) + ": " + t.msg;
                }
            }
            function v(t) {
                return void 0 === t ? "undefined" : JSON.stringify(t);
            }
            function m(t, r) {
                var e = b(t, r);
                return "ok" === e.tag ? Y(e.value) : X(h(e));
            }
            function b(t, r) {
                switch (t.tag) {
                  case "bool":
                    return "boolean" == typeof r ? _(r) : l("a Bool", r);

                  case "int":
                    return "number" != typeof r ? l("an Int", r) : -2147483647 < r && r < 2147483647 && (0 | r) === r ? _(r) : !isFinite(r) || r % 1 ? l("an Int", r) : _(r);

                  case "float":
                    return "number" == typeof r ? _(r) : l("a Float", r);

                  case "string":
                    return "string" == typeof r ? _(r) : r instanceof String ? _(r + "") : l("a String", r);

                  case "null":
                    return null === r ? _(t.value) : l("null", r);

                  case "value":
                    return _(r);

                  case "list":
                    if (!(r instanceof Array)) return l("a List", r);
                    for (var e = L.Nil, n = r.length; n--; ) {
                        if ("ok" !== (T = b(t.decoder, r[n])).tag) return f(n, T);
                        e = L.Cons(T.value, e);
                    }
                    return _(e);

                  case "array":
                    if (!(r instanceof Array)) return l("an Array", r);
                    for (var o = r.length, c = new Array(o), n = o; n--; ) {
                        if ("ok" !== (T = b(t.decoder, r[n])).tag) return f(n, T);
                        c[n] = T.value;
                    }
                    return _(St.fromJSArray(c));

                  case "maybe":
                    return _("ok" === (T = b(t.decoder, r)).tag ? R(T.value) : N);

                  case "field":
                    var u = t.field;
                    return "object" == typeof r && null !== r && u in r ? "ok" === (T = b(t.decoder, r[u])).tag ? T : s(u, T) : l("an object with a field named `" + u + "`", r);

                  case "index":
                    var i = t.index;
                    return r instanceof Array ? i >= r.length ? l("a longer array. Need index " + i + " but there are only " + r.length + " entries", r) : "ok" === (T = b(t.decoder, r[i])).tag ? T : f(i, T) : l("an array", r);

                  case "key-value":
                    if ("object" != typeof r || null === r || r instanceof Array) return l("an object", r);
                    var a = L.Nil;
                    for (var h in r) {
                        if ("ok" !== (T = b(t.decoder, r[h])).tag) return s(h, T);
                        var v = g.Tuple2(h, T.value);
                        a = L.Cons(v, a);
                    }
                    return _(a);

                  case "map-many":
                    for (var m = t.func, y = t.decoders, n = 0; n < y.length; n++) {
                        if ("ok" !== (T = b(y[n], r)).tag) return T;
                        m = m(T.value);
                    }
                    return _(m);

                  case "andThen":
                    return "ok" !== (T = b(t.decoder, r)).tag ? T : b(t.callback(T.value), r);

                  case "oneOf":
                    for (var k = [], w = t.decoders; "[]" !== w.ctor; ) {
                        var T = b(w._0, r);
                        if ("ok" === T.tag) return T;
                        k.push(T), w = w._1;
                    }
                    return d(k);

                  case "fail":
                    return p(t.msg);

                  case "succeed":
                    return _(t.msg);
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
                for (var n = 0; n < e; n++) if (!y(t[n], r[n])) return !1;
                return !0;
            }
            return {
                encode: r(// ENCODE
                function(t, r) {
                    return JSON.stringify(r, null, t);
                }),
                runOnString: r(// DECODE
                function(t, r) {
                    var e;
                    try {
                        e = JSON.parse(r);
                    } catch (t) {
                        return X("Given an invalid JSON: " + t.message);
                    }
                    return m(t, e);
                }),
                run: r(m),
                decodeNull: function(t) {
                    return {
                        ctor: "<decoder>",
                        tag: "null",
                        value: t
                    };
                },
                decodePrimitive: function(t) {
                    return {
                        ctor: "<decoder>",
                        tag: t
                    };
                },
                decodeContainer: r(function(t, r) {
                    return {
                        ctor: "<decoder>",
                        tag: t,
                        decoder: r
                    };
                }),
                decodeField: r(function(t, r) {
                    return {
                        ctor: "<decoder>",
                        tag: "field",
                        field: t,
                        decoder: r
                    };
                }),
                decodeIndex: r(function(t, r) {
                    return {
                        ctor: "<decoder>",
                        tag: "index",
                        index: t,
                        decoder: r
                    };
                }),
                map1: r(// DECODING OBJECTS
                function(r, e) {
                    return t(r, [ e ]);
                }),
                map2: e(function(r, e, n) {
                    return t(r, [ e, n ]);
                }),
                map3: n(function(r, e, n, o) {
                    return t(r, [ e, n, o ]);
                }),
                map4: o(function(r, e, n, o, c) {
                    return t(r, [ e, n, o, c ]);
                }),
                map5: c(function(r, e, n, o, c, u) {
                    return t(r, [ e, n, o, c, u ]);
                }),
                map6: u(function(r, e, n, o, c, u, i) {
                    return t(r, [ e, n, o, c, u, i ]);
                }),
                map7: i(function(r, e, n, o, c, u, i, a) {
                    return t(r, [ e, n, o, c, u, i, a ]);
                }),
                map8: a(function(r, e, n, o, c, u, i, a, _) {
                    return t(r, [ e, n, o, c, u, i, a, _ ]);
                }),
                decodeKeyValuePairs: function(t) {
                    return {
                        ctor: "<decoder>",
                        tag: "key-value",
                        decoder: t
                    };
                },
                andThen: r(function(t, r) {
                    return {
                        ctor: "<decoder>",
                        tag: "andThen",
                        decoder: r,
                        callback: t
                    };
                }),
                fail: function(t) {
                    return {
                        ctor: "<decoder>",
                        tag: "fail",
                        msg: t
                    };
                },
                succeed: // CORE DECODERS
                function(t) {
                    return {
                        ctor: "<decoder>",
                        tag: "succeed",
                        msg: t
                    };
                },
                oneOf: function(t) {
                    return {
                        ctor: "<decoder>",
                        tag: "oneOf",
                        decoders: t
                    };
                },
                identity: function(t) {
                    return t;
                },
                encodeNull: null,
                encodeArray: St.toJSArray,
                encodeList: L.toArray,
                encodeObject: function(t) {
                    for (var r = {}; "[]" !== t.ctor; ) {
                        var e = t._0;
                        r[e._0] = e._1, t = t._1;
                    }
                    return r;
                },
                equality: y
            };
        }()), Cr = (Ar.encodeList, Ar.encodeArray, Ar.encodeObject, Ar.encodeNull, Ar.identity), Lr = (Ar.identity, 
        Ar.identity, Ar.identity), Mr = (Ar.encode, Ar.decodeNull), Or = Ar.decodePrimitive("value"), Sr = Ar.andThen, Pr = Ar.fail, Ir = Ar.succeed, Jr = Ar.run, Dr = Ar.runOnString, Ur = (Ar.map8, 
        Ar.map7, Ar.map6, Ar.map5, Ar.map4, Ar.map3, Ar.map2), Fr = Ar.map1, jr = Ar.oneOf, qr = (Ar.decodeIndex, 
        Ar.decodeField), zr = r(function(t, r) {
            return l(S, qr, r, t);
        }), Hr = (Ar.decodeKeyValuePairs, function(t) {
            return _(Ar.decodeContainer, "list", t);
        }), Wr = (Ar.decodePrimitive("float"), Ar.decodePrimitive("int")), Gr = Ar.decodePrimitive("bool"), Qr = Ar.decodePrimitive("string"), Vr = Ir, $r = (Sr(b), 
        Ur(r(function(t, r) {
            return r(t);
        }))), Kr = e(function(t, r, e) {
            var n = function(t) {
                return jr({
                    ctor: "::",
                    _0: t,
                    _1: {
                        ctor: "::",
                        _0: Mr(e),
                        _1: {
                            ctor: "[]"
                        }
                    }
                });
            };
            return _(Sr, function(o) {
                var c = _(Jr, t, o);
                if ("Ok" === c.ctor) {
                    var u = _(Jr, n(r), c._0);
                    return "Ok" === u.ctor ? Ir(u._0) : Pr(u._0);
                }
                return Ir(e);
            }, Or);
        }), Xr = (n(function(t, r, e, n) {
            return _($r, l(Kr, _(zr, t, Or), r, e), n);
        }), n(function(t, r, e, n) {
            return _($r, l(Kr, _(qr, t, Or), r, e), n);
        }), e(function(t, r, e) {
            return _($r, _(zr, t, r), e);
        }), e(function(t, r, e) {
            return _($r, _(qr, t, r), e);
        })), Yr = (r(function(t, r) {
            return function(e) {
                return t.reverseGet(r(t.get(e)));
            };
        }), r(function(t, r) {
            return {
                get: t,
                reverseGet: r
            };
        })), Zr = (r(function(t, r) {
            return _(Yr, function(e) {
                return r.get(t.get(e));
            }, function(e) {
                return t.reverseGet(r.reverseGet(e));
            });
        }), e(function(t, r, e) {
            return function(n) {
                var o = n, c = o._0;
                return function(n) {
                    var u = r(t.get(c));
                    return {
                        ctor: "_Tuple2",
                        _0: _(t.set, u._0, c),
                        _1: _(e, o._1, u._1)
                    };
                }();
            };
        }), n(function(t, r, e, n) {
            return function(o) {
                var c = o, u = c._2, i = c._1, a = c._0;
                return function(o) {
                    var c = n({
                        ctor: "_Tuple3",
                        _0: t.get(a),
                        _1: r.get(i),
                        _2: e.get(u)
                    });
                    return {
                        ctor: "_Tuple3",
                        _0: _(t.set, c._0, a),
                        _1: _(r.set, c._1, i),
                        _2: _(e.set, c._2, u)
                    };
                }();
            };
        }), e(function(t, r, e) {
            return function(n) {
                var o = n, c = o._1, u = o._0;
                return function(n) {
                    var o = e({
                        ctor: "_Tuple2",
                        _0: t.get(u),
                        _1: r.get(c)
                    });
                    return {
                        ctor: "_Tuple2",
                        _0: _(t.set, o._0, u),
                        _1: _(r.set, o._1, c)
                    };
                }();
            };
        }), r(function(t, r) {
            return function(e) {
                return function(r) {
                    return _(t.set, r, e);
                }(r(t.get(e)));
            };
        })), te = r(function(t, r) {
            return {
                get: t,
                set: r
            };
        }), re = (r(function(t, e) {
            var n = r(function(r, n) {
                return function(r) {
                    return _(t.set, r, n);
                }(_(e.set, r, t.get(n)));
            });
            return _(te, function(r) {
                return e.get(t.get(r));
            }, n);
        }), r(function(t, e) {
            var n = r(function(r, n) {
                var o = r, c = n;
                return {
                    ctor: "_Tuple2",
                    _0: _(t.set, o._0, c._0),
                    _1: _(e.set, o._1, c._1)
                };
            });
            return _(te, function(r) {
                var n = r;
                return {
                    ctor: "_Tuple2",
                    _0: t.get(n._0),
                    _1: e.get(n._1)
                };
            }, n);
        }), r(function(t, e) {
            var n = r(function(r, n) {
                var o = r;
                return _(e.set, o._1, _(t.set, o._0, n));
            });
            return _(te, function(r) {
                return {
                    ctor: "_Tuple2",
                    _0: t.get(r),
                    _1: e.get(r)
                };
            }, n);
        }), e(function(t, e, n) {
            var o = r(function(r, o) {
                var c = r;
                return _(n.set, c._2, _(e.set, c._1, _(t.set, c._0, o)));
            });
            return _(te, function(r) {
                return {
                    ctor: "_Tuple3",
                    _0: t.get(r),
                    _1: e.get(r),
                    _2: n.get(r)
                };
            }, o);
        }), r(function(t, r) {
            return function(e) {
                return _(A, function(e) {
                    return t.reverseGet(r(e));
                }, t.getOption(e));
            };
        })), ee = (r(function(t, r) {
            return function(e) {
                return _(B, e, l(re, t, r, e));
            };
        }), r(function(t, r) {
            return "Just" === t.getOption(r).ctor;
        }), r(function(t, r) {
            return {
                getOption: t,
                reverseGet: r
            };
        })), ne = (r(function(t, r) {
            return _(ee, function(e) {
                var n = t.getOption(e);
                return "Just" === n.ctor ? r.getOption(n._0) : N;
            }, function(e) {
                return t.reverseGet(r.reverseGet(e));
            });
        }), r(function(t, r) {
            return _(ee, function(e) {
                var n = t.getOption(e);
                return "Just" === n.ctor ? R(r.get(n._0)) : N;
            }, function(e) {
                return t.reverseGet(r.reverseGet(e));
            });
        }), n(function(t, r, e, n) {
            return function(o) {
                var c = o, u = c._2, i = c._1, a = c._0, l = {
                    ctor: "_Tuple3",
                    _0: t.getOption(a),
                    _1: r.getOption(i),
                    _2: e.getOption(u)
                };
                return "_Tuple3" === l.ctor && "Just" === l._0.ctor && "Just" === l._1.ctor && "Just" === l._2.ctor ? function(o) {
                    var c = n({
                        ctor: "_Tuple3",
                        _0: l._0._0,
                        _1: l._1._0,
                        _2: l._2._0
                    });
                    return {
                        ctor: "_Tuple3",
                        _0: _(t.set, c._0, a),
                        _1: _(r.set, c._1, i),
                        _2: _(e.set, c._2, u)
                    };
                }() : {
                    ctor: "_Tuple3",
                    _0: a,
                    _1: i,
                    _2: u
                };
            };
        }), e(function(t, r, e) {
            return function(n) {
                var o = n, c = o._1, u = o._0, i = {
                    ctor: "_Tuple2",
                    _0: t.getOption(u),
                    _1: r.getOption(c)
                };
                return "_Tuple2" === i.ctor && "Just" === i._0.ctor && "Just" === i._1.ctor ? function(n) {
                    var o = e({
                        ctor: "_Tuple2",
                        _0: i._0._0,
                        _1: i._1._0
                    });
                    return {
                        ctor: "_Tuple2",
                        _0: _(t.set, o._0, u),
                        _1: _(r.set, o._1, c)
                    };
                }() : {
                    ctor: "_Tuple2",
                    _0: u,
                    _1: c
                };
            };
        }), r(function(t, r) {
            return function(e) {
                return _(A, function(r) {
                    return _(t.set, r, e);
                }, _(A, r, t.getOption(e)));
            };
        })), oe = (r(function(t, r) {
            return function(e) {
                return _(B, e, l(ne, t, r, e));
            };
        }), r(function(t, r) {
            return {
                getOption: t,
                set: r
            };
        })), ce = (r(function(t, e) {
            var n = r(function(r, n) {
                return _(B, n, _(A, function(r) {
                    return _(t.set, r, n);
                }, _(A, function(t) {
                    return _(e.set, r, t);
                }, t.getOption(n))));
            });
            return _(oe, function(r) {
                var n = t.getOption(r);
                return "Just" === n.ctor ? e.getOption(n._0) : N;
            }, n);
        }), r(function(t, e) {
            var n = r(function(r, n) {
                return _(B, n, _(A, function(r) {
                    return _(t.set, r, n);
                }, _(A, function(t) {
                    return _(e.set, r, t);
                }, t.getOption(n))));
            });
            return _(oe, function(r) {
                var n = t.getOption(r);
                return "Just" === n.ctor ? R(e.get(n._0)) : N;
            }, n);
        }), r(function(t, e) {
            var n = r(function(r, n) {
                var o = r, c = n;
                return {
                    ctor: "_Tuple2",
                    _0: _(t.set, o._0, c._0),
                    _1: _(e.set, o._1, c._1)
                };
            });
            return _(oe, function(r) {
                var n = r;
                return _(E, function(t) {
                    return _(A, function(r) {
                        return {
                            ctor: "_Tuple2",
                            _0: t,
                            _1: r
                        };
                    }, e.getOption(n._1));
                }, t.getOption(n._0));
            }, n);
        }), r(function(t, e) {
            var n = r(function(r, n) {
                var o = r;
                return _(e.set, o._1, _(t.set, o._0, n));
            });
            return _(oe, function(r) {
                var n = {
                    ctor: "_Tuple2",
                    _0: t.getOption(r),
                    _1: e.getOption(r)
                };
                return "_Tuple2" === n.ctor && "Just" === n._0.ctor && "Just" === n._1.ctor ? R({
                    ctor: "_Tuple2",
                    _0: n._0._0,
                    _1: n._1._0
                }) : N;
            }, n);
        }), e(function(t, e, n) {
            var o = r(function(r, o) {
                var c = r;
                return _(n.set, c._2, _(e.set, c._1, _(t.set, c._0, o)));
            });
            return _(oe, function(r) {
                var o = {
                    ctor: "_Tuple3",
                    _0: t.getOption(r),
                    _1: e.getOption(r),
                    _2: n.getOption(r)
                };
                return "_Tuple3" === o.ctor && "Just" === o._0.ctor && "Just" === o._1.ctor && "Just" === o._2.ctor ? R({
                    ctor: "_Tuple3",
                    _0: o._0._0,
                    _1: o._1._0,
                    _2: o._2._0
                }) : N;
            }, o);
        }), dt.onError), ue = dt.andThen, ie = r(function(t, r) {
            var e = r;
            return dt.spawn(_(ue, wt(t), e._0));
        }), ae = dt.fail, _e = (r(function(t, r) {
            return _(ce, function(r) {
                return ae(t(r));
            }, r);
        }), dt.succeed), le = r(function(t, r) {
            return _(ue, function(r) {
                return _e(t(r));
            }, r);
        }), fe = e(function(t, r, e) {
            return _(ue, function(r) {
                return _(ue, function(e) {
                    return _e(_(t, r, e));
                }, e);
            }, r);
        }), se = (n(function(t, r, e, n) {
            return _(ue, function(r) {
                return _(ue, function(e) {
                    return _(ue, function(n) {
                        return _e(l(t, r, e, n));
                    }, n);
                }, e);
            }, r);
        }), o(function(t, r, e, n, o) {
            return _(ue, function(r) {
                return _(ue, function(e) {
                    return _(ue, function(n) {
                        return _(ue, function(o) {
                            return _e(f(t, r, e, n, o));
                        }, o);
                    }, n);
                }, e);
            }, r);
        }), c(function(t, r, e, n, o, c) {
            return _(ue, function(r) {
                return _(ue, function(e) {
                    return _(ue, function(n) {
                        return _(ue, function(o) {
                            return _(ue, function(c) {
                                return _e(s(t, r, e, n, o, c));
                            }, c);
                        }, o);
                    }, n);
                }, e);
            }, r);
        }), function(t) {
            var e = t;
            return "[]" === e.ctor ? _e({
                ctor: "[]"
            }) : l(fe, r(function(t, r) {
                return {
                    ctor: "::",
                    _0: t,
                    _1: r
                };
            }), e._0, se(e._1));
        }), de = e(function(t, r, e) {
            return _(le, function(t) {
                return {
                    ctor: "_Tuple0"
                };
            }, se(_(D, ie(t), r)));
        }), pe = _e({
            ctor: "_Tuple0"
        }), ge = e(function(t, r, e) {
            return _e({
                ctor: "_Tuple0"
            });
        }), he = st.leaf("Task"), ve = function(t) {
            return {
                ctor: "Perform",
                _0: t
            };
        }, me = r(function(t, r) {
            return he(ve(_(le, t, r)));
        }), be = r(function(t, r) {
            return he(ve(_(ce, function(r) {
                return _e(t(X(r)));
            }, _(ue, function(r) {
                return _e(t(Y(r)));
            }, r))));
        }), ye = r(function(t, r) {
            return ve(_(le, t, r._0));
        });
        st.effectManagers.Task = {
            pkg: "elm-lang/core",
            init: pe,
            onEffects: de,
            onSelfMsg: ge,
            tag: "cmd",
            cmdMap: ye
        };
        //import Native.Scheduler //
        var ke = function() {
            return {
                now: dt.nativeBinding(function(t) {
                    t(dt.succeed(Date.now()));
                }),
                setInterval_: r(function(t, r) {
                    return dt.nativeBinding(function(e) {
                        var n = setInterval(function() {
                            dt.rawSpawn(r);
                        }, t);
                        return function() {
                            clearInterval(n);
                        };
                    });
                })
            };
        }(), we = ke.setInterval_, Te = e(function(t, r, e) {
            var n = r;
            if ("[]" === n.ctor) return _e(e);
            var o = n._0, c = function(r) {
                return l(Te, t, n._1, l(Br, o, r, e));
            }, u = dt.spawn(_(we, o, _(kt, t, o)));
            return _(ue, c, u);
        }), xe = r(function(t, r) {
            var e = t, n = e._1, o = e._0, c = _($t, o, r);
            return "Nothing" === c.ctor ? l(Br, o, {
                ctor: "::",
                _0: n,
                _1: {
                    ctor: "[]"
                }
            }, r) : l(Br, o, {
                ctor: "::",
                _0: n,
                _1: c._0
            }, r);
        }), Be = ke.now, Ne = e(function(t, r, e) {
            var n = _($t, r, e.taggers);
            return "Nothing" === n.ctor ? _e(e) : _(ue, function(t) {
                return _e(e);
            }, _(ue, function(r) {
                return se(_(D, function(e) {
                    return _(wt, t, e(r));
                }, n._0));
            }, Be));
        }), Ee = st.leaf("Time"), Re = r(function(t, r) {
            return {
                taggers: t,
                processes: r
            };
        }), Ae = _e(_(Re, ar, ar)), Ce = e(function(t, r, o) {
            var c = o, u = e(function(t, r, e) {
                var n = e;
                return {
                    ctor: "_Tuple3",
                    _0: n._0,
                    _1: n._1,
                    _2: _(ue, function(t) {
                        return n._2;
                    }, dt.kill(r))
                };
            }), i = n(function(t, r, e, n) {
                var o = n;
                return {
                    ctor: "_Tuple3",
                    _0: o._0,
                    _1: l(Br, t, e, o._1),
                    _2: o._2
                };
            }), a = e(function(t, r, e) {
                var n = e;
                return {
                    ctor: "_Tuple3",
                    _0: {
                        ctor: "::",
                        _0: t,
                        _1: n._0
                    },
                    _1: n._1,
                    _2: n._2
                };
            }), f = l(P, xe, ar, r), s = d(Wt, a, i, u, f, c.processes, {
                ctor: "_Tuple3",
                _0: {
                    ctor: "[]"
                },
                _1: ar,
                _2: _e({
                    ctor: "_Tuple0"
                })
            }), p = s._0, g = s._1, h = s._2;
            return _(ue, function(t) {
                return _e(_(Re, f, t));
            }, _(ue, function(r) {
                return l(Te, t, p, g);
            }, h));
        }), Le = r(function(t, r) {
            return {
                ctor: "Every",
                _0: t,
                _1: r
            };
        }), Me = r(function(t, r) {
            return Ee(_(Le, t, r));
        }), Oe = r(function(t, r) {
            var e = r;
            return _(Le, e._0, function(r) {
                return t(e._1(r));
            });
        });
        st.effectManagers.Time = {
            pkg: "elm-lang/core",
            init: Ae,
            onEffects: Ce,
            onSelfMsg: Ne,
            tag: "sub",
            subMap: Oe
        };
        var Se, Pe = dt.kill, Ie = dt.sleep, Je = dt.spawn, De = function() {
            function t(t) {
                return function(r, e, n) {
                    return dt.nativeBinding(function(o) {
                        function c(t) {
                            var r = _(Jr, e, t);
                            "Ok" === r.ctor && dt.rawSpawn(n(r._0));
                        }
                        return t.addEventListener(r, c), function() {
                            t.removeEventListener(r, c);
                        };
                    });
                };
            }
            function n(t, r) {
                return dt.nativeBinding(function(e) {
                    i(function() {
                        var n = document.getElementById(t);
                        e(null !== n ? dt.succeed(r(n)) : dt.fail({
                            ctor: "NotFound",
                            _0: t
                        }));
                    });
                });
            }
            var o = {
                addEventListener: function() {},
                removeEventListener: function() {}
            }, c = t("undefined" != typeof document ? document : o), u = t("undefined" != typeof window ? window : o), i = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : function(t) {
                t();
            };
            return {
                onDocument: e(c),
                onWindow: e(u),
                focus: // FOCUS
                function(t) {
                    return n(t, function(t) {
                        return t.focus(), g.Tuple0;
                    });
                },
                blur: function(t) {
                    return n(t, function(t) {
                        return t.blur(), g.Tuple0;
                    });
                },
                getScrollTop: // SCROLLING
                function(t) {
                    return n(t, function(t) {
                        return t.scrollTop;
                    });
                },
                setScrollTop: r(function(t, r) {
                    return n(t, function(t) {
                        return t.scrollTop = r, g.Tuple0;
                    });
                }),
                getScrollLeft: function(t) {
                    return n(t, function(t) {
                        return t.scrollLeft;
                    });
                },
                setScrollLeft: r(function(t, r) {
                    return n(t, function(t) {
                        return t.scrollLeft = r, g.Tuple0;
                    });
                }),
                toBottom: function(t) {
                    return n(t, function(t) {
                        return t.scrollTop = t.scrollHeight, g.Tuple0;
                    });
                },
                toRight: function(t) {
                    return n(t, function(t) {
                        return t.scrollLeft = t.scrollWidth, g.Tuple0;
                    });
                },
                height: r(function(t, r) {
                    return n(r, function(r) {
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
                    });
                }),
                width: r(// SIZE
                function(t, r) {
                    return n(r, function(r) {
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
                    });
                })
            };
        }(), Ue = De.onWindow, Fe = (De.onDocument, function() {
            function t(t, r, e) {
                for (var n = c(r), o = n.namespace, u = n.facts, i = [], a = 0; "[]" !== e.ctor; ) {
                    var _ = e._0;
                    a += _.descendantsCount || 0, i.push(_), e = e._1;
                }
                return a += i.length, {
                    type: "node",
                    tag: t,
                    facts: u,
                    children: i,
                    namespace: o,
                    descendantsCount: a
                };
            }
            function o(t, r, e) {
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
                    var n = t._0, o = n.key;
                    if (o === X || o === Y || o === K) {
                        var c = e[o] || {};
                        c[n.realKey] = n.value, e[o] = c;
                    } else if (o === $) {
                        for (var u = e[o] || {}, i = n.value; "[]" !== i.ctor; ) {
                            var a = i._0;
                            u[a._0] = a._1, i = i._1;
                        }
                        e[o] = u;
                    } else if ("namespace" === o) r = n.value; else if ("className" === o) {
                        var _ = e[o];
                        e[o] = void 0 === _ ? n.value : _ + " " + n.value;
                    } else e[o] = n.value;
                    t = t._1;
                }
                return {
                    facts: e,
                    namespace: r
                };
            }
            function u(t, r, e) {
                return {
                    key: K,
                    realKey: t,
                    value: {
                        options: r,
                        decoder: e
                    }
                };
            }
            function i(t, r) {
                return (t.options === r.options || t.options.stopPropagation === r.options.stopPropagation && t.options.preventDefault === r.options.preventDefault) && Ar.equality(t.decoder, r.decoder);
            }
            ////////////  RENDER  ////////////
            function a(t, r) {
                switch (t.type) {
                  case "thunk":
                    return t.node || (t.node = t.thunk()), a(t.node, r);

                  case "tagger":
                    for (var e = t.node, n = t.tagger; "tagger" === e.type; ) "object" != typeof n ? n = [ n, e.tagger ] : n.push(e.tagger), 
                    e = e.node;
                    var o = {
                        tagger: n,
                        parent: r
                    };
                    return (i = a(e, o)).elm_event_node_ref = o, i;

                  case "text":
                    return Z.createTextNode(t.text);

                  case "node":
                    f(i = t.namespace ? Z.createElementNS(t.namespace, t.tag) : Z.createElement(t.tag), r, t.facts);
                    for (var c = t.children, u = 0; u < c.length; u++) i.appendChild(a(c[u], r));
                    return i;

                  case "keyed-node":
                    f(i = t.namespace ? Z.createElementNS(t.namespace, t.tag) : Z.createElement(t.tag), r, t.facts);
                    for (var c = t.children, u = 0; u < c.length; u++) i.appendChild(a(c[u]._1, r));
                    return i;

                  case "custom":
                    var i = t.impl.render(t.model);
                    return f(i, r, t.facts), i;
                }
            }
            ////////////  APPLY FACTS  ////////////
            function f(t, r, e) {
                for (var n in e) {
                    var o = e[n];
                    switch (n) {
                      case $:
                        s(t, o);
                        break;

                      case K:
                        d(t, r, o);
                        break;

                      case X:
                        h(t, o);
                        break;

                      case Y:
                        v(t, o);
                        break;

                      case "value":
                        t[n] !== o && (t[n] = o);
                        break;

                      default:
                        t[n] = o;
                    }
                }
            }
            function s(t, r) {
                var e = t.style;
                for (var n in r) e[n] = r[n];
            }
            function d(t, r, e) {
                var n = t.elm_handlers || {};
                for (var o in e) {
                    var c = n[o], u = e[o];
                    if (void 0 === u) t.removeEventListener(o, c), n[o] = void 0; else if (void 0 === c) {
                        c = p(r, u);
                        t.addEventListener(o, c), n[o] = c;
                    } else c.info = u;
                }
                t.elm_handlers = n;
            }
            function p(t, r) {
                function e(r) {
                    var n = e.info, o = _(Ar.run, n.decoder, r);
                    if ("Ok" === o.ctor) {
                        var c = n.options;
                        c.stopPropagation && r.stopPropagation(), c.preventDefault && r.preventDefault();
                        for (var u = o._0, i = t; i; ) {
                            var a = i.tagger;
                            if ("function" == typeof a) u = a(u); else for (var l = a.length; l--; ) u = a[l](u);
                            i = i.parent;
                        }
                    }
                }
                return e.info = r, e;
            }
            function h(t, r) {
                for (var e in r) {
                    var n = r[e];
                    void 0 === n ? t.removeAttribute(e) : t.setAttribute(e, n);
                }
            }
            function v(t, r) {
                for (var e in r) {
                    var n = r[e], o = n.namespace, c = n.value;
                    void 0 === c ? t.removeAttributeNS(o, e) : t.setAttributeNS(o, e, c);
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
            function y(t, r, e, n) {
                if (t !== r) {
                    var o = t.type, c = r.type;
                    // Bail if you run into different types of nodes. Implies that the
                    // structure has changed significantly and it's not worth a diff.
                    if (o === c) // Now we know that both nodes are the same type.
                    switch (c) {
                      case "thunk":
                        for (var u = t.args, i = r.args, a = u.length, _ = t.func === r.func && a === i.length; _ && a--; ) _ = u[a] === i[a];
                        if (_) return void (r.node = t.node);
                        r.node = r.thunk();
                        var l = [];
                        return y(t.node, r.node, l, 0), void (l.length > 0 && e.push(b("p-thunk", n, l)));

                      case "tagger":
                        for (// gather nested taggers
                        var f = t.tagger, s = r.tagger, d = !1, p = t.node; "tagger" === p.type; ) d = !0, 
                        "object" != typeof f ? f = [ f, p.tagger ] : f.push(p.tagger), p = p.node;
                        for (var g = r.node; "tagger" === g.type; ) d = !0, "object" != typeof s ? s = [ s, g.tagger ] : s.push(g.tagger), 
                        g = g.node;
                        // Just bail if different numbers of taggers. This implies the
                        // structure of the virtual DOM has changed.
                        // Just bail if different numbers of taggers. This implies the
                        // structure of the virtual DOM has changed.
                        // check if taggers are "the same"
                        // diff everything below the taggers
                        return d && f.length !== s.length ? void e.push(b("p-redraw", n, r)) : ((d ? k(f, s) : f === s) || e.push(b("p-tagger", n, s)), 
                        void y(p, g, e, n + 1));

                      case "text":
                        if (t.text !== r.text) return void e.push(b("p-text", n, r.text));
                        return;

                      case "node":
                        // Bail if obvious indicators have changed. Implies more serious
                        // structural changes such that it's not worth it to diff.
                        // Bail if obvious indicators have changed. Implies more serious
                        // structural changes such that it's not worth it to diff.
                        return t.tag !== r.tag || t.namespace !== r.namespace ? void e.push(b("p-redraw", n, r)) : (void 0 !== (h = w(t.facts, r.facts)) && e.push(b("p-facts", n, h)), 
                        void T(t, r, e, n));

                      case "keyed-node":
                        // Bail if obvious indicators have changed. Implies more serious
                        // structural changes such that it's not worth it to diff.
                        // Bail if obvious indicators have changed. Implies more serious
                        // structural changes such that it's not worth it to diff.
                        return t.tag !== r.tag || t.namespace !== r.namespace ? void e.push(b("p-redraw", n, r)) : (void 0 !== (h = w(t.facts, r.facts)) && e.push(b("p-facts", n, h)), 
                        void x(t, r, e, n));

                      case "custom":
                        if (t.impl !== r.impl) return void e.push(b("p-redraw", n, r));
                        var h = w(t.facts, r.facts);
                        void 0 !== h && e.push(b("p-facts", n, h));
                        var v = r.impl.diff(t, r);
                        if (v) return void e.push(b("p-custom", n, v));
                        return;
                    } else e.push(b("p-redraw", n, r));
                }
            }
            // assumes the incoming arrays are the same length
            function k(t, r) {
                for (var e = 0; e < t.length; e++) if (t[e] !== r[e]) return !1;
                return !0;
            }
            // TODO Instead of creating a new diff object, it's possible to just test if
            // there *is* a diff. During the actual patch, do the diff again and make the
            // modifications directly. This way, there's no new allocations. Worth it?
            function w(t, r, e) {
                var n;
                // look for changes and removals
                for (var o in t) if (o !== $ && o !== K && o !== X && o !== Y) // remove if not in the new facts
                if (o in r) {
                    var c = t[o], u = r[o];
                    // reference equal, so don't worry about it
                    c === u && "value" !== o || e === K && i(c, u) || ((n = n || {})[o] = u);
                } else (n = n || {})[o] = void 0 === e ? "string" == typeof t[o] ? "" : null : e === $ ? "" : e === K || e === X ? void 0 : {
                    namespace: t[o].namespace,
                    value: void 0
                }; else {
                    var a = w(t[o], r[o] || {}, o);
                    a && ((n = n || {})[o] = a);
                }
                // add new stuff
                for (var _ in r) _ in t || ((n = n || {})[_] = r[_]);
                return n;
            }
            function T(t, r, e, n) {
                var o = t.children, c = r.children, u = o.length, i = c.length;
                // FIGURE OUT IF THERE ARE INSERTS OR REMOVALS
                u > i ? e.push(b("p-remove-last", n, u - i)) : u < i && e.push(b("p-append", n, c.slice(u)));
                for (var a = n, _ = u < i ? u : i, l = 0; l < _; l++) {
                    a++;
                    var f = o[l];
                    y(f, c[l], e, a), a += f.descendantsCount || 0;
                }
            }
            ////////////  KEYED DIFF  ////////////
            function x(t, r, e, n) {
                for (var o = [], c = {}, u = [], i = t.children, a = r.children, _ = i.length, l = a.length, f = 0, s = 0, d = n; f < _ && s < l; ) {
                    var p = i[f], g = a[s], h = p._0, v = g._0, m = p._1, k = g._1;
                    // check if keys match
                    if (h !== v) {
                        // look ahead 1 to detect insertions and removals.
                        var w = f + 1 < _, T = s + 1 < l;
                        if (w) var x = i[f + 1], E = x._0, R = x._1, A = v === E;
                        if (T) var C = a[s + 1], L = C._0, M = C._1, O = h === L;
                        // swap a and b
                        if (w && T && O && A) y(m, M, o, ++d), B(c, o, h, k, s, u), d += m.descendantsCount || 0, 
                        N(c, o, h, R, ++d), d += R.descendantsCount || 0, f += 2, s += 2; else // insert b
                        if (T && O) d++, B(c, o, v, k, s, u), y(m, M, o, d), d += m.descendantsCount || 0, 
                        f += 1, s += 2; else // remove a
                        if (w && A) N(c, o, h, m, ++d), d += m.descendantsCount || 0, y(R, k, o, ++d), d += R.descendantsCount || 0, 
                        f += 2, s += 1; else {
                            // remove a, insert b
                            if (!w || !T || E !== L) break;
                            N(c, o, h, m, ++d), B(c, o, v, k, s, u), d += m.descendantsCount || 0, y(R, M, o, ++d), 
                            d += R.descendantsCount || 0, f += 2, s += 2;
                        }
                    } else y(m, k, o, ++d), d += m.descendantsCount || 0, f++, s++;
                }
                // eat up any remaining nodes with removeNode and insertNode
                for (;f < _; ) {
                    d++;
                    m = (p = i[f])._1;
                    N(c, o, p._0, m, d), d += m.descendantsCount || 0, f++;
                }
                for (var S; s < l; ) S = S || [], B(c, o, (g = a[s])._0, g._1, void 0, S), s++;
                (o.length > 0 || u.length > 0 || void 0 !== S) && e.push(b("p-reorder", n, {
                    patches: o,
                    inserts: u,
                    endInserts: S
                }));
            }
            function B(t, r, e, n, o, c) {
                var u = t[e];
                // never seen this key before
                if (void 0 === u) return u = {
                    tag: "insert",
                    vnode: n,
                    index: o,
                    data: void 0
                }, c.push({
                    index: o,
                    entry: u
                }), void (t[e] = u);
                // this key was removed earlier, a match!
                if ("remove" === u.tag) {
                    c.push({
                        index: o,
                        entry: u
                    }), u.tag = "move";
                    var i = [];
                    return y(u.vnode, n, i, u.index), u.index = o, void (u.data.data = {
                        patches: i,
                        entry: u
                    });
                }
                // this key has already been inserted or moved, a duplicate!
                B(t, r, e + tt, n, o, c);
            }
            function N(t, r, e, n, o) {
                var c = t[e];
                // never seen this key before
                if (void 0 === c) {
                    i = b("p-remove", o, void 0);
                    return r.push(i), void (t[e] = {
                        tag: "remove",
                        vnode: n,
                        index: o,
                        data: i
                    });
                }
                // this key was inserted earlier, a match!
                if ("insert" !== c.tag) // this key has already been removed or moved, a duplicate!
                N(t, r, e + tt, n, o); else {
                    c.tag = "move";
                    var u = [];
                    y(n, c.vnode, u, o);
                    var i = b("p-remove", o, {
                        patches: u,
                        entry: c
                    });
                    r.push(i);
                }
            }
            ////////////  ADD DOM NODES  ////////////
            //
            // Each DOM node has an "index" assigned in order of traversal. It is important
            // to minimize our crawl over the actual DOM, so these indexes (along with the
            // descendantsCount of virtual nodes) let us skip touching entire subtrees of
            // the DOM if we know there are no patches there.
            function E(t, r, e, n) {
                R(t, r, e, 0, 0, r.descendantsCount, n);
            }
            // assumes `patches` is non-empty and indexes increase monotonically.
            function R(t, r, e, n, o, c, u) {
                for (var i = e[n], a = i.index; a === o; ) {
                    var _ = i.type;
                    if ("p-thunk" === _) E(t, r.node, i.data, u); else if ("p-reorder" === _) i.domNode = t, 
                    i.eventNode = u, (f = i.data.patches).length > 0 && R(t, r, f, 0, o, c, u); else if ("p-remove" === _) {
                        i.domNode = t, i.eventNode = u;
                        var l = i.data;
                        if (void 0 !== l) {
                            l.entry.data = t;
                            var f = l.patches;
                            f.length > 0 && R(t, r, f, 0, o, c, u);
                        }
                    } else i.domNode = t, i.eventNode = u;
                    if (n++, !(i = e[n]) || (a = i.index) > c) return n;
                }
                switch (r.type) {
                  case "tagger":
                    for (var s = r.node; "tagger" === s.type; ) s = s.node;
                    return R(t, s, e, n, o + 1, c, t.elm_event_node_ref);

                  case "node":
                    for (var d = r.children, p = t.childNodes, g = 0; g < d.length; g++) {
                        v = ++o + ((h = d[g]).descendantsCount || 0);
                        if (o <= a && a <= v && (n = R(p[g], h, e, n, o, v, u), !(i = e[n]) || (a = i.index) > c)) return n;
                        o = v;
                    }
                    return n;

                  case "keyed-node":
                    for (var d = r.children, p = t.childNodes, g = 0; g < d.length; g++) {
                        o++;
                        var h = d[g]._1, v = o + (h.descendantsCount || 0);
                        if (o <= a && a <= v && (n = R(p[g], h, e, n, o, v, u), !(i = e[n]) || (a = i.index) > c)) return n;
                        o = v;
                    }
                    return n;

                  case "text":
                  case "thunk":
                    throw new Error("should never traverse `text` or `thunk` nodes like this");
                }
            }
            ////////////  APPLY PATCHES  ////////////
            function A(t, r, e, n) {
                return 0 === e.length ? t : (E(t, r, e, n), C(t, e));
            }
            function C(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e], o = n.domNode, c = L(o, n);
                    o === t && (t = c);
                }
                return t;
            }
            function L(t, r) {
                switch (r.type) {
                  case "p-redraw":
                    return M(t, r.data, r.eventNode);

                  case "p-facts":
                    return f(t, r.eventNode, r.data), t;

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
                    for (n = r.data; n--; ) t.removeChild(t.lastChild);
                    return t;

                  case "p-append":
                    for (var e = r.data, n = 0; n < e.length; n++) t.appendChild(a(e[n], r.eventNode));
                    return t;

                  case "p-remove":
                    var o = r.data;
                    if (void 0 === o) return t.parentNode.removeChild(t), t;
                    var c = o.entry;
                    return void 0 !== c.index && t.parentNode.removeChild(t), c.data = C(t, o.patches), 
                    t;

                  case "p-reorder":
                    return O(t, r);

                  case "p-custom":
                    var u = r.data;
                    return u.applyPatch(t, u.data);

                  default:
                    throw new Error("Ran into an unknown patch!");
                }
            }
            function M(t, r, e) {
                var n = t.parentNode, o = a(r, e);
                return void 0 === o.elm_event_node_ref && (o.elm_event_node_ref = t.elm_event_node_ref), 
                n && o !== t && n.replaceChild(o, t), o;
            }
            function O(t, r) {
                var e = r.data, n = S(e.endInserts, r);
                // removals
                t = C(t, e.patches);
                for (var o = e.inserts, c = 0; c < o.length; c++) {
                    var u = o[c], i = u.entry, _ = "move" === i.tag ? i.data : a(i.vnode, r.eventNode);
                    t.insertBefore(_, t.childNodes[u.index]);
                }
                // add end inserts
                return void 0 !== n && t.appendChild(n), t;
            }
            function S(t, r) {
                if (void 0 !== t) {
                    for (var e = Z.createDocumentFragment(), n = 0; n < t.length; n++) {
                        var o = t[n].entry;
                        e.appendChild("move" === o.tag ? o.data : a(o.vnode, r.eventNode));
                    }
                    return e;
                }
            }
            function P(t) {
                return r(function(r, e) {
                    return function(n) {
                        return function(o, c, u) {
                            var i = t(n, c);
                            void 0 === u ? J(e, o, c, i) : F(_(r, u, e), o, c, i);
                        };
                    };
                });
            }
            function I(t, r) {
                throw r && (r.innerHTML = '<div style="padding-left:1em;"><h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2><pre style="padding-left:1em;">' + t + "</pre></div>"), 
                new Error(t);
            }
            //  NORMAL SETUP
            function J(t, r, e, n) {
                r.embed = function(r, e) {
                    for (;r.lastChild; ) r.removeChild(r.lastChild);
                    return st.initialize(n(t.init, e, r), t.update, t.subscriptions, D(r, t.view));
                }, r.fullscreen = function(r) {
                    return st.initialize(n(t.init, r, document.body), t.update, t.subscriptions, D(document.body, t.view));
                };
            }
            function D(t, r) {
                return function(e, n) {
                    var o = {
                        tagger: e,
                        parent: void 0
                    }, c = r(n), u = a(c, o);
                    return t.appendChild(u), U(u, r, c, o);
                };
            }
            function U(t, r, e, n) {
                function o() {
                    switch (u) {
                      case "NO_REQUEST":
                        throw new Error("Unexpected draw callback.\nPlease report this to <https://github.com/elm-lang/virtual-dom/issues>.");

                      case "PENDING_REQUEST":
                        nt(o), u = "EXTRA_REQUEST";
                        var e = r(c), a = m(i, e);
                        return t = A(t, i, a, n), void (i = e);

                      case "EXTRA_REQUEST":
                        return void (u = "NO_REQUEST");
                    }
                }
                var c, u = "NO_REQUEST", i = e;
                return function(t) {
                    "NO_REQUEST" === u && nt(o), u = "PENDING_REQUEST", c = t;
                };
            }
            // DEBUG SETUP
            function F(t, r, e, n) {
                r.fullscreen = function(r) {
                    var o = {
                        doc: void 0
                    };
                    return st.initialize(n(t.init, r, document.body), t.update(j(o)), t.subscriptions, q(e, document.body, o, t.view, t.viewIn, t.viewOut));
                }, r.embed = function(r, o) {
                    var c = {
                        doc: void 0
                    };
                    return st.initialize(n(t.init, o, r), t.update(j(c)), t.subscriptions, q(e, r, c, t.view, t.viewIn, t.viewOut));
                };
            }
            function j(t) {
                return dt.nativeBinding(function(r) {
                    var e = t.doc;
                    if (e) {
                        var n = e.getElementsByClassName("debugger-sidebar-messages")[0];
                        n && (n.scrollTop = n.scrollHeight);
                    }
                    r(dt.succeed(g.Tuple0));
                });
            }
            function q(t, r, e, n, o, c) {
                return function(u, i) {
                    var _ = {
                        tagger: u,
                        parent: void 0
                    }, l = {
                        tagger: u,
                        parent: void 0
                    }, f = n(i), s = a(f, _);
                    r.appendChild(s);
                    var d = U(s, n, f, _), p = o(i)._1, g = a(p, l);
                    r.appendChild(g);
                    var h = U(g, W(_, g, o), p, l), v = z(i, c, l, r, t, e);
                    return function(t) {
                        d(t), h(t), v(t);
                    };
                };
            }
            function z(t, r, e, n, o, c) {
                var u, i;
                return function(t) {
                    if (t.isDebuggerOpen) {
                        if (!c.doc) return u = r(t), void (i = H(o, c, u, e));
                        // switch to document of popout
                        Z = c.doc;
                        var n = r(t), a = m(u, n);
                        i = A(i, u, a, e), u = n, // switch back to normal document
                        Z = document;
                    }
                };
            }
            function H(t, r, e, n) {
                function o() {
                    r.doc = void 0, i.close();
                }
                var c = screen.width - 900, u = screen.height - 360, i = window.open("", "", "width=900,height=360,left=" + c + ",top=" + u);
                // switch to window document
                Z = i.document, r.doc = Z, Z.title = "Debugger - " + t, Z.body.style.margin = "0", 
                Z.body.style.padding = "0";
                var _ = a(e, n);
                // switch back to the normal document
                return Z.body.appendChild(_), Z.addEventListener("keydown", function(t) {
                    t.metaKey && 82 === t.which && window.location.reload(), 38 === t.which && (n.tagger({
                        ctor: "Up"
                    }), t.preventDefault()), 40 === t.which && (n.tagger({
                        ctor: "Down"
                    }), t.preventDefault());
                }), window.addEventListener("unload", o), i.addEventListener("unload", function() {
                    r.doc = void 0, window.removeEventListener("unload", o), n.tagger({
                        ctor: "Close"
                    });
                }), Z = document, _;
            }
            // BLOCK EVENTS
            function W(t, r, e) {
                var n, o = V(r), c = "Normal", u = t.tagger, i = function() {};
                return function(r) {
                    var a = e(r), _ = a._0.ctor;
                    return t.tagger = "Normal" === _ ? u : i, c !== _ && (G("removeEventListener", o, c), 
                    G("addEventListener", o, _), "Normal" === c && (n = document.body.style.overflow, 
                    document.body.style.overflow = "hidden"), "Normal" === _ && (document.body.style.overflow = n), 
                    c = _), a._1;
                };
            }
            function G(t, r, e) {
                switch (e) {
                  case "Normal":
                    return;

                  case "Pause":
                    return Q(t, r, ot);

                  case "Message":
                    return Q(t, r, ct);
                }
            }
            function Q(t, r, e) {
                for (var n = 0; n < e.length; n++) document.body[t](e[n], r, !0);
            }
            function V(t) {
                return function(r) {
                    if ("keydown" !== r.type || !r.metaKey || 82 !== r.which) {
                        for (var e = "scroll" === r.type || "wheel" === r.type, n = r.target; null !== n; ) {
                            if ("elm-overlay-message-details" === n.className && e) return;
                            if (n === t && !e) return;
                            n = n.parentNode;
                        }
                        r.stopPropagation(), r.preventDefault();
                    }
                };
            }
            var $ = "STYLE", K = "EVENT", X = "ATTR", Y = "ATTR_NS", Z = "undefined" != typeof document ? document : {}, tt = "_elmW6BL", rt = P(// FLAG CHECKERS
            function(t, r) {
                return function(t, e, n) {
                    if (void 0 === e) return t;
                    I("The `" + r + "` module does not need flags.\nInitialize it with no arguments and you should be all set!", n);
                };
            }), et = P(function(t, r) {
                return function(e, n, o) {
                    void 0 === t && I(u = "Are you trying to sneak a Never value into Elm? Trickster!\nIt looks like " + r + ".main is defined with `programWithFlags` but has type `Program Never`.\nUse `program` instead if you do not want flags.", o);
                    var c = _(Ar.run, t, n);
                    if ("Ok" === c.ctor) return e(c._0);
                    var u = "Trying to initialize the `" + r + "` module with an unexpected flag.\nI tried to convert it to an Elm value, but ran into this problem:\n\n" + c._0;
                    I(u, o);
                };
            }), nt = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : function(t) {
                setTimeout(t, 1e3 / 60);
            }, ot = [ "click", "dblclick", "mousemove", "mouseup", "mousedown", "mouseenter", "mouseleave", "touchstart", "touchend", "touchcancel", "touchmove", "pointerdown", "pointerup", "pointerover", "pointerout", "pointerenter", "pointerleave", "pointermove", "pointercancel", "dragstart", "drag", "dragend", "dragenter", "dragover", "dragleave", "drop", "keyup", "keydown", "keypress", "input", "change", "focus", "blur" ], ct = ot.concat("wheel", "scroll");
            return {
                node: function(e) {
                    return r(function(r, n) {
                        return t(e, r, n);
                    });
                },
                text: ////////////  VIRTUAL DOM NODES  ////////////
                function(t) {
                    return {
                        type: "text",
                        text: t
                    };
                },
                custom: function(t, r, e) {
                    return {
                        type: "custom",
                        facts: c(t).facts,
                        model: r,
                        impl: e
                    };
                },
                map: r(function(t, r) {
                    return {
                        type: "tagger",
                        tagger: t,
                        node: r,
                        descendantsCount: 1 + (r.descendantsCount || 0)
                    };
                }),
                on: e(u),
                style: ////////////  PROPERTIES AND ATTRIBUTES  ////////////
                function(t) {
                    return {
                        key: $,
                        value: t
                    };
                },
                property: r(function(t, r) {
                    return {
                        key: t,
                        value: r
                    };
                }),
                attribute: r(function(t, r) {
                    return {
                        key: X,
                        realKey: t,
                        value: r
                    };
                }),
                attributeNS: e(function(t, r, e) {
                    return {
                        key: Y,
                        realKey: r,
                        value: {
                            value: e,
                            namespace: t
                        }
                    };
                }),
                mapProperty: r(function(t, r) {
                    return r.key !== K ? r : u(r.realKey, r.value.options, _(Fr, t, r.value.decoder));
                }),
                lazy: r(function(t, r) {
                    return o(t, [ r ], function() {
                        return t(r);
                    });
                }),
                lazy2: e(function(t, r, e) {
                    return o(t, [ r, e ], function() {
                        return _(t, r, e);
                    });
                }),
                lazy3: n(function(t, r, e, n) {
                    return o(t, [ r, e, n ], function() {
                        return l(t, r, e, n);
                    });
                }),
                keyedNode: e(function(t, r, e) {
                    for (var n = c(r), o = n.namespace, u = n.facts, i = [], a = 0; "[]" !== e.ctor; ) {
                        var _ = e._0;
                        a += _._1.descendantsCount || 0, i.push(_), e = e._1;
                    }
                    return a += i.length, {
                        type: "keyed-node",
                        tag: t,
                        facts: u,
                        children: i,
                        namespace: o,
                        descendantsCount: a
                    };
                }),
                program: rt,
                programWithFlags: et,
                staticProgram: function(t) {
                    var e = g.Tuple2(g.Tuple0, gt);
                    return _(rt, Se, {
                        init: e,
                        view: function() {
                            return t;
                        },
                        update: r(function() {
                            return e;
                        }),
                        subscriptions: function() {
                            return bt;
                        }
                    })();
                }
            };
        }()), je = function(t) {
            return _(Fe.program, Se, t);
        }, qe = (Fe.keyedNode, Fe.lazy3, Fe.lazy2, Fe.lazy, {
            stopPropagation: !1,
            preventDefault: !1
        }), ze = Fe.on, He = r(function(t, r) {
            return l(ze, t, qe, r);
        }), We = Fe.style, Ge = (Fe.mapProperty, Fe.attributeNS), Qe = Fe.attribute, Ve = Fe.property, $e = Fe.map, Ke = Fe.text, Xe = Fe.node, Ye = (r(function(t, r) {
            return {
                stopPropagation: t,
                preventDefault: r
            };
        }), function(t) {
            return _(Fe.programWithFlags, void 0, t);
        }), Ze = je, tn = $e, rn = Ke, en = Xe, nn = (en("body"), en("section"), en("nav"), 
        en("article"), en("aside"), en("h1"), en("h2")), on = (en("h3"), en("h4"), en("h5"), 
        en("h6"), en("header"), en("footer"), en("address"), en("main"), en("p"), en("hr")), cn = (en("pre"), 
        en("blockquote"), en("ol"), en("ul"), en("li"), en("dl")), un = en("dt"), an = en("dd"), _n = (en("figure"), 
        en("figcaption"), en("div")), ln = en("a"), fn = (en("em"), en("strong"), en("small"), 
        en("s"), en("cite"), en("q"), en("dfn"), en("abbr"), en("time"), en("code"), en("var"), 
        en("samp"), en("kbd"), en("sub"), en("sup"), en("i")), sn = (en("b"), en("u"), en("mark"), 
        en("ruby"), en("rt"), en("rp"), en("bdi"), en("bdo"), en("span")), dn = (en("br"), 
        en("wbr"), en("ins"), en("del"), en("img"), en("iframe"), en("embed"), en("object"), 
        en("param"), en("video"), en("audio"), en("source"), en("track"), en("canvas"), 
        en("math"), en("table"), en("caption"), en("colgroup"), en("col"), en("tbody"), 
        en("thead"), en("tfoot"), en("tr"), en("td"), en("th"), en("form")), pn = (en("fieldset"), 
        en("legend"), en("label"), en("input")), gn = en("button"), hn = (en("select"), 
        en("datalist"), en("optgroup"), en("option"), en("textarea"), en("keygen"), en("output"), 
        en("progress"), en("meter"), en("details"), en("summary"), en("menuitem"), en("menu"), 
        Qe), vn = function(t) {
            return _(hn, "tabIndex", k(t));
        }, mn = Ve, bn = r(function(t, r) {
            return _(mn, t, Lr(r));
        }), yn = function(t) {
            return _(bn, "className", t);
        }, kn = function(t) {
            return _(bn, "title", t);
        }, wn = function(t) {
            return _(bn, "type", t);
        }, Tn = function(t) {
            return _(bn, "value", t);
        }, xn = function(t) {
            return _(bn, "href", t);
        }, Bn = (r(function(t, r) {
            return _(mn, t, Cr(r));
        }), We), Nn = (_(qr, "keyCode", Wr), _(zr, {
            ctor: "::",
            _0: "target",
            _1: {
                ctor: "::",
                _0: "checked",
                _1: {
                    ctor: "[]"
                }
            }
        }, Gr), _(zr, {
            ctor: "::",
            _0: "target",
            _1: {
                ctor: "::",
                _0: "value",
                _1: {
                    ctor: "[]"
                }
            }
        }, Qr)), En = qe, Rn = He, An = (g.update(En, {
            preventDefault: !0
        }), function(t) {
            return _(Rn, "input", _(Fr, t, Nn));
        }), Cn = function(t) {
            return _(Rn, "click", Ir(t));
        }, Ln = (r(function(t, r) {
            return {
                stopPropagation: t,
                preventDefault: r
            };
        }), function() {
            function t(t, r) {
                "Nothing" !== r.ctor && t.addEventListener("progress", function(t) {
                    t.lengthComputable && dt.rawSpawn(r._0({
                        bytes: t.loaded,
                        bytesExpected: t.total
                    }));
                });
            }
            function e(t, r) {
                _(D, function(r) {
                    t.setRequestHeader(r._0, r._1);
                }, r.headers), t.responseType = r.expect.responseType, t.withCredentials = r.withCredentials, 
                "Just" === r.timeout.ctor && (t.timeout = r.timeout._0);
            }
            function n(t, r) {
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
            function o(t, r) {
                var e = c(t);
                if (t.status < 200 || 300 <= t.status) return e.body = t.responseText, dt.fail({
                    ctor: "BadStatus",
                    _0: e
                });
                var n = r(e);
                return "Ok" === n.ctor ? dt.succeed(n._0) : (e.body = t.responseText, dt.fail({
                    ctor: "BadPayload",
                    _0: n._0,
                    _1: e
                }));
            }
            function c(t) {
                return {
                    status: {
                        code: t.status,
                        message: t.statusText
                    },
                    headers: u(t.getAllResponseHeaders()),
                    url: t.responseURL,
                    body: t.response
                };
            }
            function u(t) {
                var r = ar;
                if (!t) return r;
                for (var e = t.split("\r\n"), n = e.length; n--; ) {
                    var o = e[n], c = o.indexOf(": ");
                    if (c > 0) {
                        var u = o.substring(0, c), i = o.substring(c + 2);
                        r = l(xr, u, function(t) {
                            return R("Just" === t.ctor ? i + ", " + t._0 : i);
                        }, r);
                    }
                }
                return r;
            }
            return {
                toTask: r(// SEND REQUEST
                function(r, c) {
                    return dt.nativeBinding(function(u) {
                        var i = new XMLHttpRequest();
                        t(i, c), i.addEventListener("error", function() {
                            u(dt.fail({
                                ctor: "NetworkError"
                            }));
                        }), i.addEventListener("timeout", function() {
                            u(dt.fail({
                                ctor: "Timeout"
                            }));
                        }), i.addEventListener("load", function() {
                            u(o(i, r.expect.responseToResult));
                        });
                        try {
                            i.open(r.method, r.url, !0);
                        } catch (t) {
                            return u(dt.fail({
                                ctor: "BadUrl",
                                _0: r.url
                            }));
                        }
                        return e(i, r), n(i, r.body), function() {
                            i.abort();
                        };
                    });
                }),
                expectStringResponse: // EXPECTORS
                function(t) {
                    return {
                        responseType: "text",
                        responseToResult: t
                    };
                },
                mapExpect: r(function(t, r) {
                    return {
                        responseType: r.responseType,
                        responseToResult: function(e) {
                            var n = r.responseToResult(e);
                            return _(Z, t, n);
                        }
                    };
                }),
                multipart: // BODY
                function(t) {
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
                function(t) {
                    return encodeURIComponent(t);
                },
                decodeUri: function(t) {
                    try {
                        return R(decodeURIComponent(t));
                    } catch (t) {
                        return N;
                    }
                }
            };
        }()), Mn = (r(function(t, r) {
            return g.update(r, {
                expect: _(Ln.mapExpect, t, r.expect)
            });
        }), u(function(t, r, e, n, o, c, u) {
            return {
                method: t,
                headers: r,
                url: e,
                body: n,
                expect: o,
                timeout: c,
                withCredentials: u
            };
        }), r(function(t, r) {
            return {
                ctor: "StringBody",
                _0: t,
                _1: r
            };
        }), {
            ctor: "EmptyBody"
        }), On = (r(function(t, r) {
            return {
                ctor: "Header",
                _0: t,
                _1: r
            };
        }), Ln.decodeUri), Sn = (Ln.encodeUri, Ln.expectStringResponse), Pn = function(t) {
            return Sn(function(r) {
                return _(Dr, t, r.body);
            });
        }, In = (Sn(function(t) {
            return Y(t.body);
        }), Ln.multipart, Mn), Jn = function(t) {
            return {
                ctor: "Request",
                _0: t
            };
        }, Dn = (e(function(t, r, e) {
            return Jn({
                method: "POST",
                headers: {
                    ctor: "[]"
                },
                url: t,
                body: r,
                expect: Pn(e),
                timeout: N,
                withCredentials: !1
            });
        }), r(function(t, r) {
            return Jn({
                method: "GET",
                headers: {
                    ctor: "[]"
                },
                url: t,
                body: In,
                expect: Pn(r),
                timeout: N,
                withCredentials: !1
            });
        }), function(t) {
            var r = t;
            return _(Ln.toTask, r._0, N);
        }), Un = r(function(t, r) {
            return _(be, t, Dn(r));
        }), Fn = (n(function(t, r, e, n) {
            return {
                url: t,
                status: r,
                headers: e,
                body: n
            };
        }), r(function(t, r) {
            return {
                ctor: "BadPayload",
                _0: t,
                _1: r
            };
        }), r(function(t, r) {
            return {
                ctor: "StringPart",
                _0: t,
                _1: r
            };
        }), function() {
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
                function(t) {
                    return dt.nativeBinding(function(r) {
                        0 !== t && history.go(t), r(dt.succeed(g.Tuple0));
                    });
                },
                setLocation: function(t) {
                    return dt.nativeBinding(function(r) {
                        try {
                            window.location = t;
                        } catch (t) {
                            // Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
                            // Other browsers reload the page, so let's be consistent about that.
                            document.location.reload(!1);
                        }
                        r(dt.succeed(g.Tuple0));
                    });
                },
                reloadPage: // REAL NAVIGATION
                function(t) {
                    return dt.nativeBinding(function(r) {
                        document.location.reload(t), r(dt.succeed(g.Tuple0));
                    });
                },
                pushState: function(r) {
                    return dt.nativeBinding(function(e) {
                        history.pushState({}, "", r), e(dt.succeed(t()));
                    });
                },
                replaceState: function(r) {
                    return dt.nativeBinding(function(e) {
                        history.replaceState({}, "", r), e(dt.succeed(t()));
                    });
                },
                getLocation: t,
                isInternetExplorer11: // DETECT IE11 PROBLEMS
                function() {
                    return -1 !== window.navigator.userAgent.indexOf("Trident");
                }
            };
        }()), jn = Fn.replaceState, qn = Fn.pushState, zn = Fn.go, Hn = Fn.reloadPage, Wn = Fn.setLocation, Gn = Gn || {};
        Gn["&>"] = r(function(t, r) {
            return _(ue, function(t) {
                return r;
            }, t);
        });
        var Qn = e(function(t, r, e) {
            return _(Gn["&>"], se(_(D, function(r) {
                return _(wt, t, r._0(e));
            }, r)), _e({
                ctor: "_Tuple0"
            }));
        }), Vn = e(function(t, r, e) {
            var n = e;
            switch (n.ctor) {
              case "Jump":
                return zn(n._0);

              case "New":
                return _(ue, _(Qn, t, r), qn(n._0));

              case "Modify":
                return _(ue, _(Qn, t, r), jn(n._0));

              case "Visit":
                return Wn(n._0);

              default:
                return Hn(n._0);
            }
        }), $n = function(t) {
            var r = t;
            return "Normal" === r.ctor ? Pe(r._0) : _(Gn["&>"], Pe(r._0), Pe(r._1));
        }, Kn = e(function(t, r, e) {
            return _(Gn["&>"], l(Qn, t, e.subs, r), _e(e));
        }), Xn = st.leaf("Navigation"), Yn = st.leaf("Navigation"), Zn = r(function(t, r) {
            return {
                subs: t,
                popWatcher: r
            };
        }), to = _e(_(Zn, {
            ctor: "[]"
        }, N)), ro = function(t) {
            return {
                ctor: "Reload",
                _0: t
            };
        }, eo = (Yn(ro(!1)), Yn(ro(!0)), function(t) {
            return {
                ctor: "Visit",
                _0: t
            };
        }), no = function(t) {
            return {
                ctor: "Modify",
                _0: t
            };
        }, oo = function(t) {
            return {
                ctor: "New",
                _0: t
            };
        }, co = function(t) {
            return Yn(oo(t));
        }, uo = function(t) {
            return {
                ctor: "Jump",
                _0: t
            };
        }, io = r(function(t, r) {
            var e = r;
            switch (e.ctor) {
              case "Jump":
                return uo(e._0);

              case "New":
                return oo(e._0);

              case "Modify":
                return no(e._0);

              case "Visit":
                return eo(e._0);

              default:
                return ro(e._0);
            }
        }), ao = function(t) {
            return {
                ctor: "Monitor",
                _0: t
            };
        }, _o = r(function(t, r) {
            var e = r.init(Fn.getLocation({
                ctor: "_Tuple0"
            }));
            return Ze({
                init: e,
                view: r.view,
                update: r.update,
                subscriptions: function(e) {
                    return mt({
                        ctor: "::",
                        _0: Xn(ao(t)),
                        _1: {
                            ctor: "::",
                            _0: r.subscriptions(e),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    });
                }
            });
        }), lo = (r(function(t, r) {
            return Ye({
                init: function(t) {
                    return _(r.init, t, Fn.getLocation({
                        ctor: "_Tuple0"
                    }));
                },
                view: r.view,
                update: r.update,
                subscriptions: function(e) {
                    return mt({
                        ctor: "::",
                        _0: Xn(ao(t)),
                        _1: {
                            ctor: "::",
                            _0: r.subscriptions(e),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    });
                }
            });
        }), r(function(t, r) {
            var e = r;
            return ao(function(r) {
                return t(e._0(r));
            });
        })), fo = r(function(t, r) {
            return {
                ctor: "InternetExplorer",
                _0: t,
                _1: r
            };
        }), so = function(t) {
            return {
                ctor: "Normal",
                _0: t
            };
        }, po = function(t) {
            var r = function(r) {
                return _(kt, t, Fn.getLocation({
                    ctor: "_Tuple0"
                }));
            };
            return Fn.isInternetExplorer11({
                ctor: "_Tuple0"
            }) ? l(fe, fo, Je(l(Ue, "popstate", Or, r)), Je(l(Ue, "hashchange", Or, r))) : _(le, so, Je(l(Ue, "popstate", Or, r)));
        }, go = n(function(t, r, e, n) {
            var o = n.popWatcher, c = function() {
                var r = {
                    ctor: "_Tuple2",
                    _0: e,
                    _1: o
                };
                t: do {
                    if ("[]" === r._0.ctor) {
                        if ("Just" === r._1.ctor) return _(Gn["&>"], $n(r._1._0), _e(_(Zn, e, N)));
                        break t;
                    }
                    if ("Nothing" === r._1.ctor) return _(le, function(t) {
                        return _(Zn, e, R(t));
                    }, po(t));
                    break t;
                } while (!1);
                return _e(_(Zn, e, o));
            }();
            return _(Gn["&>"], se(_(D, _(Vn, t, e), r)), c);
        });
        st.effectManagers.Navigation = {
            pkg: "elm-lang/navigation",
            init: to,
            onEffects: go,
            onSelfMsg: Kn,
            tag: "fx",
            cmdMap: io,
            subMap: lo
        };
        var ho = _(Ve, "namespace", Lr("http://www.w3.org/2000/svg")), vo = e(function(t, r, e) {
            return l(Xe, t, {
                ctor: "::",
                _0: ho,
                _1: r
            }, e);
        }), mo = vo("svg"), bo = (vo("foreignObject"), vo("animate"), vo("animateColor"), 
        vo("animateMotion"), vo("animateTransform"), vo("mpath"), vo("set"), vo("a"), vo("defs"), 
        vo("g"), vo("marker"), vo("mask"), vo("pattern"), vo("switch"), vo("symbol"), vo("desc"), 
        vo("metadata"), vo("title"), vo("feBlend"), vo("feColorMatrix"), vo("feComponentTransfer"), 
        vo("feComposite"), vo("feConvolveMatrix"), vo("feDiffuseLighting"), vo("feDisplacementMap"), 
        vo("feFlood"), vo("feFuncA"), vo("feFuncB"), vo("feFuncG"), vo("feFuncR"), vo("feGaussianBlur"), 
        vo("feImage"), vo("feMerge"), vo("feMergeNode"), vo("feMorphology"), vo("feOffset"), 
        vo("feSpecularLighting"), vo("feTile"), vo("feTurbulence"), vo("font"), vo("linearGradient"), 
        vo("radialGradient"), vo("stop"), vo("circle"), vo("ellipse"), vo("image"), vo("line")), yo = (vo("path"), 
        vo("polygon"), vo("polyline"), vo("rect"), vo("use"), vo("feDistantLight"), vo("fePointLight"), 
        vo("feSpotLight"), vo("altGlyph"), vo("altGlyphDef"), vo("altGlyphItem"), vo("glyph"), 
        vo("glyphRef"), vo("textPath"), vo("text"), vo("tref"), vo("tspan"), vo("clipPath"), 
        vo("colorProfile"), vo("cursor"), vo("filter"), vo("script"), vo("style"), vo("view"), 
        Qe("writing-mode"), Qe("word-spacing"), Qe("visibility"), Qe("unicode-bidi"), Qe("text-rendering"), 
        Qe("text-decoration"), Qe("text-anchor"), Qe("stroke"), Qe("stroke-width"), Qe("stroke-opacity"), 
        Qe("stroke-miterlimit"), Qe("stroke-linejoin"), Qe("stroke-linecap")), ko = (Qe("stroke-dashoffset"), 
        Qe("stroke-dasharray"), Qe("stop-opacity"), Qe("stop-color"), Qe("shape-rendering"), 
        Qe("pointer-events"), Qe("overflow"), Qe("opacity"), Qe("mask"), Qe("marker-start"), 
        Qe("marker-mid"), Qe("marker-end"), Qe("lighting-color"), Qe("letter-spacing"), 
        Qe("kerning"), Qe("image-rendering"), Qe("glyph-orientation-vertical"), Qe("glyph-orientation-horizontal"), 
        Qe("font-weight"), Qe("font-variant"), Qe("font-style"), Qe("font-stretch"), Qe("font-size"), 
        Qe("font-size-adjust"), Qe("font-family"), Qe("flood-opacity"), Qe("flood-color"), 
        Qe("filter"), Qe("fill"), Qe("fill-rule"), Qe("fill-opacity"), Qe("enable-background"), 
        Qe("dominant-baseline"), Qe("display"), Qe("direction"), Qe("cursor"), Qe("color"), 
        Qe("color-rendering"), Qe("color-profile"), Qe("color-interpolation"), Qe("color-interpolation-filters"), 
        Qe("clip"), Qe("clip-rule"), Qe("clip-path"), Qe("baseline-shift"), Qe("alignment-baseline"), 
        Qe("zoomAndPan"), Qe("z"), Qe("yChannelSelector"), Qe("y2")), wo = Qe("y1"), To = (Qe("y"), 
        _(Ge, "http://www.w3.org/XML/1998/namespace", "xml:space"), _(Ge, "http://www.w3.org/XML/1998/namespace", "xml:lang"), 
        _(Ge, "http://www.w3.org/XML/1998/namespace", "xml:base"), _(Ge, "http://www.w3.org/1999/xlink", "xlink:type"), 
        _(Ge, "http://www.w3.org/1999/xlink", "xlink:title"), _(Ge, "http://www.w3.org/1999/xlink", "xlink:show"), 
        _(Ge, "http://www.w3.org/1999/xlink", "xlink:role"), _(Ge, "http://www.w3.org/1999/xlink", "xlink:href"), 
        _(Ge, "http://www.w3.org/1999/xlink", "xlink:arcrole"), _(Ge, "http://www.w3.org/1999/xlink", "xlink:actuate"), 
        Qe("xChannelSelector"), Qe("x2")), xo = Qe("x1"), Bo = (Qe("x-height"), Qe("x"), 
        Qe("widths"), Qe("width"), Qe("viewTarget"), Qe("viewBox"), Qe("vert-origin-y"), 
        Qe("vert-origin-x"), Qe("vert-adv-y"), Qe("version"), Qe("values"), Qe("v-mathematical"), 
        Qe("v-ideographic"), Qe("v-hanging"), Qe("v-alphabetic"), Qe("units-per-em"), Qe("unicode-range"), 
        Qe("unicode"), Qe("underline-thickness"), Qe("underline-position"), Qe("u2"), Qe("u1"), 
        Qe("type"), Qe("transform"), Qe("to"), Qe("title"), Qe("textLength"), Qe("targetY"), 
        Qe("targetX"), Qe("target"), Qe("tableValues"), Qe("systemLanguage"), Qe("surfaceScale"), 
        Qe("style"), Qe("string"), Qe("strikethrough-thickness"), Qe("strikethrough-position"), 
        Qe("stitchTiles"), Qe("stemv"), Qe("stemh"), Qe("stdDeviation"), Qe("startOffset"), 
        Qe("spreadMethod"), Qe("speed"), Qe("specularExponent"), Qe("specularConstant"), 
        Qe("spacing"), Qe("slope"), Qe("seed"), Qe("scale"), Qe("ry"), Qe("rx"), Qe("rotate"), 
        Qe("result"), Qe("restart"), Qe("requiredFeatures"), Qe("requiredExtensions"), Qe("repeatDur"), 
        Qe("repeatCount"), Qe("rendering-intent"), Qe("refY"), Qe("refX"), Qe("radius"), 
        Qe("r"), Qe("primitiveUnits"), Qe("preserveAspectRatio"), Qe("preserveAlpha"), Qe("pointsAtZ"), 
        Qe("pointsAtY"), Qe("pointsAtX"), Qe("points"), Qe("point-order"), Qe("patternUnits"), 
        Qe("patternTransform"), Qe("patternContentUnits"), Qe("pathLength"), Qe("path"), 
        Qe("panose-1"), Qe("overline-thickness"), Qe("overline-position"), Qe("origin"), 
        Qe("orientation"), Qe("orient"), Qe("order"), Qe("operator"), Qe("offset"), Qe("numOctaves"), 
        Qe("name"), Qe("mode"), Qe("min"), Qe("method"), Qe("media"), Qe("max"), Qe("mathematical"), 
        Qe("maskUnits"), Qe("maskContentUnits"), Qe("markerWidth"), Qe("markerUnits"), Qe("markerHeight"), 
        Qe("local"), Qe("limitingConeAngle"), Qe("lengthAdjust"), Qe("lang"), Qe("keyTimes"), 
        Qe("keySplines"), Qe("keyPoints"), Qe("kernelUnitLength"), Qe("kernelMatrix"), Qe("k4"), 
        Qe("k3"), Qe("k2"), Qe("k1"), Qe("k"), Qe("intercept"), Qe("in2"), Qe("in"), Qe("ideographic"), 
        Qe("id"), Qe("horiz-origin-y"), Qe("horiz-origin-x"), Qe("horiz-adv-x"), Qe("height"), 
        Qe("hanging"), Qe("gradientUnits"), Qe("gradientTransform"), Qe("glyphRef"), Qe("glyph-name"), 
        Qe("g2"), Qe("g1"), Qe("fy"), Qe("fx"), Qe("from"), Qe("format"), Qe("filterUnits"), 
        Qe("filterRes"), Qe("externalResourcesRequired"), Qe("exponent"), Qe("end"), Qe("elevation"), 
        Qe("edgeMode"), Qe("dy"), Qe("dx"), Qe("dur"), Qe("divisor"), Qe("diffuseConstant"), 
        Qe("descent"), Qe("decelerate"), Qe("d"), Qe("cy"), Qe("cx"), Qe("contentStyleType"), 
        Qe("contentScriptType"), Qe("clipPathUnits"), Qe("class")), No = (Qe("cap-height"), 
        Qe("calcMode"), Qe("by"), Qe("bias"), Qe("begin"), Qe("bbox"), Qe("baseProfile"), 
        Qe("baseFrequency"), Qe("azimuth"), Qe("autoReverse"), Qe("attributeType"), Qe("attributeName"), 
        Qe("ascent"), Qe("arabic-form"), Qe("amplitude"), Qe("allowReorder"), Qe("alphabetic"), 
        Qe("additive"), Qe("accumulate"), Qe("accelerate"), Qe("accent-height"), function(t) {
            var e = _(ut, "=", t);
            return "::" === e.ctor && "::" === e._1.ctor && "[]" === e._1._1.ctor ? l(C, r(function(t, r) {
                return {
                    ctor: "_Tuple2",
                    _0: t,
                    _1: r
                };
            }), On(e._0), On(e._1._0)) : N;
        }), Eo = function(t) {
            return Er(_(F, No, _(ut, "&", _(ct, 1, t))));
        }, Ro = function(t) {
            var r = _(ut, "/", t);
            return "::" === r.ctor && "" === r._0 ? r._1 : r;
        }, Ao = function(t) {
            for (;;) {
                var r = t;
                if ("[]" === r.ctor) return N;
                var e = r._0, n = e.unvisited;
                if ("[]" === n.ctor) return R(e.value);
                if ("" === n._0 && "[]" === n._1.ctor) return R(e.value);
                t = r._1;
            }
        }, Co = e(function(t, r, e) {
            return Ao(t._0({
                visited: {
                    ctor: "[]"
                },
                unvisited: Ro(r),
                params: e,
                value: b
            }));
        }), Lo = r(function(t, r) {
            return l(Co, t, _(ct, 1, r.hash), Eo(r.search));
        }), Mo = (r(function(t, r) {
            return l(Co, t, r.pathname, Eo(r.search));
        }), r(function(t, r) {
            var e = r;
            return {
                visited: e.visited,
                unvisited: e.unvisited,
                params: e.params,
                value: t(e.value)
            };
        })), Oo = n(function(t, r, e, n) {
            return {
                visited: t,
                unvisited: r,
                params: e,
                value: n
            };
        }), So = function(t) {
            return {
                ctor: "Parser",
                _0: t
            };
        }, Po = function(t) {
            return So(function(r) {
                var e = r, n = e.unvisited;
                if ("[]" === n.ctor) return {
                    ctor: "[]"
                };
                var o = n._0;
                return g.eq(o, t) ? {
                    ctor: "::",
                    _0: f(Oo, {
                        ctor: "::",
                        _0: o,
                        _1: e.visited
                    }, n._1, e.params, e.value),
                    _1: {
                        ctor: "[]"
                    }
                } : {
                    ctor: "[]"
                };
            });
        }, Io = r(function(t, r) {
            return So(function(t) {
                var e = t, n = e.unvisited;
                if ("[]" === n.ctor) return {
                    ctor: "[]"
                };
                var o = n._0, c = r(o);
                return "Ok" === c.ctor ? {
                    ctor: "::",
                    _0: f(Oo, {
                        ctor: "::",
                        _0: o,
                        _1: e.visited
                    }, n._1, e.params, e.value(c._0)),
                    _1: {
                        ctor: "[]"
                    }
                } : {
                    ctor: "[]"
                };
            });
        }), Jo = (_(Io, "STRING", Y), _(Io, "NUMBER", ot), Jo || {});
        Jo["</>"] = r(function(t, r) {
            var e = t, n = r;
            return So(function(t) {
                return _(H, n._0, e._0(t));
            });
        });
        var Do = r(function(t, r) {
            var e = r;
            return So(function(r) {
                var n = r;
                return _(D, Mo(n.value), e._0({
                    visited: n.visited,
                    unvisited: n.unvisited,
                    params: n.params,
                    value: t
                }));
            });
        }), Uo = So(function(t) {
            return {
                ctor: "::",
                _0: t,
                _1: {
                    ctor: "[]"
                }
            };
        });
        (Jo = Jo || {})["<?>"] = r(function(t, r) {
            var e = t, n = r;
            return So(function(t) {
                return _(H, n._0, e._0(t));
            });
        });
        var Fo = function(t) {
            return {
                ctor: "QueryParser",
                _0: t
            };
        }, jo = (r(function(t, r) {
            return Fo(function(e) {
                var n = e, o = n.params;
                return {
                    ctor: "::",
                    _0: f(Oo, n.visited, n.unvisited, o, n.value(r(_($t, t, o)))),
                    _1: {
                        ctor: "[]"
                    }
                };
            });
        }), n(function(t, r, e, n) {
            var o = n, c = o._0;
            return _(B, o, _(A, function(n) {
                return _(xt, o._1, l(Ct, r, _(v, t.set, c), e(n)));
            }, t.getOption(c)));
        }), n(function(t, r, e, n) {
            var o = n, c = o._0;
            return _(xt, o._1, l(Ct, r, _(v, t.set, c), e(t.get(c))));
        })), qo = (_(te, lt, function(t) {
            return at(m(t));
        }), _(te, ft, function(t) {
            return _t(m(t));
        }), c(function(t, r, e, n, o, c) {
            return {
                id: t,
                username: r,
                title: e,
                date: n,
                skeys: o,
                groups: c
            };
        })), zo = l(Xr, "groups", Hr(Qr), l(Xr, "skeys", Hr(Qr), l(Xr, "date", Wr, l(Xr, "title", Qr, l(Xr, "username", Qr, l(Xr, "id", Qr, Vr(qo))))))), Ho = function(t) {
            return bt;
        }, Wo = function(t) {
            var r = t;
            if ("Nothing" === r.ctor) return _(_n, {
                ctor: "[]"
            }, {
                ctor: "::",
                _0: rn("Not loadede yet."),
                _1: {
                    ctor: "[]"
                }
            });
            var e = r._0;
            return _(cn, {
                ctor: "::",
                _0: yn("dl-horizontal"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: _(un, {
                    ctor: "[]"
                }, {
                    ctor: "::",
                    _0: rn("Отображаемое имя:"),
                    _1: {
                        ctor: "[]"
                    }
                }),
                _1: {
                    ctor: "::",
                    _0: _(an, {
                        ctor: "[]"
                    }, {
                        ctor: "::",
                        _0: rn(e.title),
                        _1: {
                            ctor: "[]"
                        }
                    }),
                    _1: {
                        ctor: "::",
                        _0: _(un, {
                            ctor: "[]"
                        }, {
                            ctor: "::",
                            _0: rn("Дата регистрации:"),
                            _1: {
                                ctor: "[]"
                            }
                        }),
                        _1: {
                            ctor: "::",
                            _0: _(an, {
                                ctor: "[]"
                            }, {
                                ctor: "::",
                                _0: rn(k(e.date)),
                                _1: {
                                    ctor: "[]"
                                }
                            }),
                            _1: {
                                ctor: "::",
                                _0: _(un, {
                                    ctor: "[]"
                                }, {
                                    ctor: "::",
                                    _0: rn("Состоит в группах:"),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }),
                                _1: {
                                    ctor: "::",
                                    _0: _(an, {
                                        ctor: "[]"
                                    }, {
                                        ctor: "::",
                                        _0: rn(k(e.groups)),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }),
                                    _1: {
                                        ctor: "::",
                                        _0: _(un, {
                                            ctor: "[]"
                                        }, {
                                            ctor: "::",
                                            _0: rn("Наблюдаемых систем:"),
                                            _1: {
                                                ctor: "[]"
                                            }
                                        }),
                                        _1: {
                                            ctor: "::",
                                            _0: _(an, {
                                                ctor: "[]"
                                            }, {
                                                ctor: "::",
                                                _0: rn(k(I(e.skeys))),
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
        }, Go = function(t) {
            return _(_n, {
                ctor: "[]"
            }, {
                ctor: "::",
                _0: Wo(t.account),
                _1: {
                    ctor: "[]"
                }
            });
        }, Qo = r(function(t, r) {
            var e = t;
            if ("NoOp" === e.ctor) return {
                ctor: "_Tuple2",
                _0: r,
                _1: gt
            };
            if ("Err" !== e._0.ctor) return {
                ctor: "_Tuple2",
                _0: g.update(r, {
                    message: "Loaded",
                    account: R(e._0._0)
                }),
                _1: gt
            };
            if ("BadStatus" !== e._0._0.ctor) return {
                ctor: "_Tuple2",
                _0: g.update(r, {
                    message: k(e._0._0)
                }),
                _1: gt
            };
            var n = e._0._0._0;
            switch (n.status.code) {
              case 404:
                return {
                    ctor: "_Tuple2",
                    _0: g.update(r, {
                        message: "Account is not found"
                    }),
                    _1: gt
                };

              case 401:
                return {
                    ctor: "_Tuple2",
                    _0: g.update(r, {
                        message: "Need authirization"
                    }),
                    _1: gt
                };

              default:
                return {
                    ctor: "_Tuple2",
                    _0: g.update(r, {
                        message: n.status.message
                    }),
                    _1: gt
                };
            }
        }), Vo = (e(function(t, r, e) {
            return {
                name: t,
                account: r,
                message: e
            };
        }), {
            ctor: "_Tuple2",
            _0: {
                name: "NoName",
                account: N,
                message: "Loading..."
            },
            _1: pt({
                ctor: "::",
                _0: _(Un, function(t) {
                    return {
                        ctor: "FetchedAccount",
                        _0: t
                    };
                }, function(t) {
                    return Jn({
                        method: "GET",
                        headers: {
                            ctor: "[]"
                        },
                        url: _(y["++"], "http://piligrim-gps.com/1.0/account", _(y["++"], "?access_token=", t)),
                        body: In,
                        expect: Pn(zo),
                        timeout: N,
                        withCredentials: !1
                    });
                }("3smiHOIcmadduHckMvdzHHqHU4ltBszj")),
                _1: {
                    ctor: "[]"
                }
            })
        }), $o = _(te, function(t) {
            return t.counter;
        }, r(function(t, r) {
            return g.update(r, {
                counter: t
            });
        })), Ko = _(te, function(t) {
            return t.value;
        }, r(function(t, r) {
            return g.update(r, {
                value: t
            });
        })), Xo = function(t) {
            return function(e) {
                return Rt(function() {
                    var e = t;
                    switch (e.ctor) {
                      case "Increment":
                        return _(Zr, Ko, r(function(t, r) {
                            return t + r;
                        })(1));

                      case "Decrement":
                        return _(Zr, Ko, r(function(t, r) {
                            return t + r;
                        })(-1));

                      default:
                        return $o.set(e._0);
                    }
                }()(e));
            };
        }, Yo = {
            value: 0,
            counter: 0
        }, Zo = (r(function(t, r) {
            return {
                value: t,
                counter: r
            };
        }), m(mt({
            ctor: "::",
            _0: _(Me, 1e3, function(t) {
                return {
                    ctor: "Tick",
                    _0: t
                };
            }),
            _1: {
                ctor: "[]"
            }
        }))), tc = {
            ctor: "Decrement"
        }, rc = {
            ctor: "Increment"
        }, ec = _(Bt, Yo, function(t) {
            return _(me, b, _e(t));
        }(rc)), nc = function(t) {
            return _(_n, {
                ctor: "::",
                _0: yn("component"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: _(_n, {
                    ctor: "[]"
                }, {
                    ctor: "::",
                    _0: rn("IncDec component"),
                    _1: {
                        ctor: "[]"
                    }
                }),
                _1: {
                    ctor: "::",
                    _0: _(gn, {
                        ctor: "::",
                        _0: wn("button"),
                        _1: {
                            ctor: "::",
                            _0: yn("btn btn-primary"),
                            _1: {
                                ctor: "::",
                                _0: Cn(tc),
                                _1: {
                                    ctor: "[]"
                                }
                            }
                        }
                    }, {
                        ctor: "::",
                        _0: rn("-"),
                        _1: {
                            ctor: "[]"
                        }
                    }),
                    _1: {
                        ctor: "::",
                        _0: _(_n, {
                            ctor: "[]"
                        }, {
                            ctor: "::",
                            _0: rn(k(t.value)),
                            _1: {
                                ctor: "[]"
                            }
                        }),
                        _1: {
                            ctor: "::",
                            _0: _(gn, {
                                ctor: "::",
                                _0: wn("button"),
                                _1: {
                                    ctor: "::",
                                    _0: yn("btn btn-primary"),
                                    _1: {
                                        ctor: "::",
                                        _0: Cn(rc),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }
                                }
                            }, {
                                ctor: "::",
                                _0: rn("+"),
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
            });
        }, oc = function(t) {
            return function(r) {
                return _(yt, _(t.lift, t.cb.update, t.lens), t.cb.subscriptions(_(function(t) {
                    return t.get;
                }, t.lens, r)));
            };
        }, cc = r(function(t, r) {
            var e = r;
            return {
                ctor: "_Tuple3",
                _0: e._0,
                _1: e._1,
                _2: t
            };
        }), uc = function(t) {
            return function(r) {
                return _(tn, _(t.lift, t.cb.update, t.lens), t.cb.view(_(function(t) {
                    return t.get;
                }, t.lens, r)));
            };
        }, ic = c(function(t, r, e, n, o, c) {
            var u = c, i = u._0, a = function(r) {
                return _(t, e, r);
            }(r.get(i)), f = a._0, s = a._1;
            return _(o, a._2, _(xt, u._1, l(Ct, _(n, t, r), _(v, r.set, i), {
                ctor: "_Tuple2",
                _0: f,
                _1: s
            })));
        }), ac = o(function(t, r, e, n, o) {
            var c = o, u = c._0;
            return _(xt, c._1, l(Ct, _(n, t, r), _(v, r.set, u), function(r) {
                return _(t, e, r);
            }(r.get(u))));
        }), _c = (r(function(t, r) {
            return l(ac, t.lens, t.lift, t.cb.update(r));
        }), function(t) {
            return _(Tt, _(t.lift, t.cb.update, t.lens), t.cb.init);
        }), lc = e(function(t, r, e) {
            return {
                lens: t,
                lift: r,
                cb: e
            };
        }), fc = n(function(t, r, e, n) {
            return l(lc, _(te, t, r), e, n);
        }), sc = (r(function(t, r) {
            return {
                ctor: "Lift",
                _0: t,
                _1: r
            };
        }), _(te, function(t) {
            return t.counter;
        }, r(function(t, r) {
            return g.update(r, {
                counter: t
            });
        }))), dc = _(te, function(t) {
            return t.value;
        }, r(function(t, r) {
            return g.update(r, {
                value: t
            });
        })), pc = {
            value: 0,
            counter: 0
        }, gc = (r(function(t, r) {
            return {
                value: t,
                counter: r
            };
        }), {
            ctor: "ToParent"
        }), hc = m(mt({
            ctor: "::",
            _0: _(Me, 1e3, function(t) {
                return {
                    ctor: "Tick",
                    _0: t
                };
            }),
            _1: {
                ctor: "[]"
            }
        })), vc = {
            ctor: "Decrement"
        }, mc = {
            ctor: "Increment"
        }, bc = {
            ctor: "IncDecC_Boo"
        }, yc = function(t) {
            return t;
        }({
            init: _(Bt, pc, function(t) {
                return _(me, b, _e(t));
            }(mc)),
            view: function(t) {
                return _(_n, {
                    ctor: "::",
                    _0: yn("component"),
                    _1: {
                        ctor: "[]"
                    }
                }, {
                    ctor: "::",
                    _0: _(_n, {
                        ctor: "[]"
                    }, {
                        ctor: "::",
                        _0: rn("IncDecC component"),
                        _1: {
                            ctor: "[]"
                        }
                    }),
                    _1: {
                        ctor: "::",
                        _0: _(gn, {
                            ctor: "::",
                            _0: wn("button"),
                            _1: {
                                ctor: "::",
                                _0: yn("btn btn-primary"),
                                _1: {
                                    ctor: "::",
                                    _0: Cn(vc),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }
                            }
                        }, {
                            ctor: "::",
                            _0: rn("-"),
                            _1: {
                                ctor: "[]"
                            }
                        }),
                        _1: {
                            ctor: "::",
                            _0: _(_n, {
                                ctor: "[]"
                            }, {
                                ctor: "::",
                                _0: rn(k(t.value)),
                                _1: {
                                    ctor: "[]"
                                }
                            }),
                            _1: {
                                ctor: "::",
                                _0: _(gn, {
                                    ctor: "::",
                                    _0: wn("button"),
                                    _1: {
                                        ctor: "::",
                                        _0: yn("btn btn-primary"),
                                        _1: {
                                            ctor: "::",
                                            _0: Cn(mc),
                                            _1: {
                                                ctor: "[]"
                                            }
                                        }
                                    }
                                }, {
                                    ctor: "::",
                                    _0: rn("+"),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }),
                                _1: {
                                    ctor: "::",
                                    _0: _(_n, {
                                        ctor: "[]"
                                    }, {
                                        ctor: "::",
                                        _0: rn(k(t.counter)),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }),
                                    _1: {
                                        ctor: "::",
                                        _0: _(gn, {
                                            ctor: "::",
                                            _0: wn("button"),
                                            _1: {
                                                ctor: "::",
                                                _0: yn("btn btn-primary"),
                                                _1: {
                                                    ctor: "::",
                                                    _0: Cn(gc),
                                                    _1: {
                                                        ctor: "[]"
                                                    }
                                                }
                                            }
                                        }, {
                                            ctor: "::",
                                            _0: rn("x"),
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
                });
            },
            update: function(t) {
                var e = t;
                switch (e.ctor) {
                  case "Increment":
                    return function(t) {
                        return _(cc, N, Rt(l(Zr, dc, r(function(t, r) {
                            return t + r;
                        })(1), t)));
                    };

                  case "Decrement":
                    return function(t) {
                        return _(cc, N, Rt(l(Zr, dc, r(function(t, r) {
                            return t + r;
                        })(-1), t)));
                    };

                  case "Tick":
                    return function(t) {
                        return _(cc, N, Rt(_(sc.set, e._0, t)));
                    };

                  default:
                    return function(t) {
                        return _(cc, R(bc), Rt(t));
                    };
                }
            },
            subscriptions: hc
        }), kc = r(function(t, r) {
            return _(_n, {
                ctor: "::",
                _0: yn(_(y["++"], "loader-container", t ? " show" : " hide")),
                _1: {
                    ctor: "::",
                    _0: _(Rn, "transitionend", Ir(r)),
                    _1: {
                        ctor: "[]"
                    }
                }
            }, {
                ctor: "::",
                _0: _(_n, {
                    ctor: "::",
                    _0: yn("loader"),
                    _1: {
                        ctor: "[]"
                    }
                }, {
                    ctor: "::",
                    _0: rn("Loading..."),
                    _1: {
                        ctor: "[]"
                    }
                }),
                _1: {
                    ctor: "[]"
                }
            });
        }), wc = r(function(t, r) {
            return _(ln, {
                ctor: "::",
                _0: Bn({
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
                    _0: xn(_(y["++"], "#", t)),
                    _1: {
                        ctor: "[]"
                    }
                }
            }, {
                ctor: "::",
                _0: rn(r),
                _1: {
                    ctor: "[]"
                }
            });
        }), Tc = e(function(t, r, e) {
            return {
                counter: 0,
                incdec1: t,
                incdec2: r,
                incdecC: e,
                incdecs: Dt,
                loaderStyle: !1,
                message: "Initial"
            };
        }), xc = _(te, function(t) {
            return t.loaderStyle;
        }, r(function(t, r) {
            return g.update(r, {
                loaderStyle: t
            });
        })), Bc = (u(function(t, r, e, n, o, c, u) {
            return {
                counter: t,
                incdec1: r,
                incdec2: e,
                incdecC: n,
                incdecs: o,
                loaderStyle: c,
                message: u
            };
        }), {
            ctor: "RemoveComp"
        }), Nc = {
            ctor: "AddComp"
        }, Ec = {
            ctor: "EndAnimation"
        }, Rc = {
            ctor: "StopLoading"
        }, Ac = {
            ctor: "StartLoading"
        }, Cc = e(function(t, r, e) {
            return {
                ctor: "IncDecCMessage",
                _0: t,
                _1: r,
                _2: e
            };
        }), Lc = f(fc, function(t) {
            return t.incdecC;
        }, r(function(t, r) {
            return g.update(r, {
                incdecC: t
            });
        }), Cc, yc), Mc = e(function(t, r, e) {
            return {
                ctor: "IncDecMessage",
                _0: t,
                _1: r,
                _2: e
            };
        }), Oc = f(fc, function(t) {
            return t.incdec1;
        }, r(function(t, r) {
            return g.update(r, {
                incdec1: t
            });
        }), Mc, {
            init: ec,
            view: nc,
            update: Xo,
            subscriptions: Zo
        }), Sc = f(fc, function(t) {
            return t.incdec2;
        }, r(function(t, r) {
            return g.update(r, {
                incdec2: t
            });
        }), Mc, {
            init: ec,
            view: nc,
            update: Xo,
            subscriptions: Zo
        }), Pc = f(At, Tc, _c(Oc), _c(Sc), _c(Lc)), Ic = function(t) {
            return f(fc, function(r) {
                var e = _(It, t, r.incdecs);
                return "Nothing" === e.ctor ? g.crashCase("Pages.Home", {
                    start: {
                        line: 79,
                        column: 13
                    },
                    end: {
                        line: 84,
                        column: 26
                    }
                }, e)("WTF") : e._0;
            }, r(function(r, e) {
                return g.update(e, {
                    incdecs: l(Pt, t, r, e.incdecs)
                });
            }), Mc, {
                init: ec,
                view: nc,
                update: Xo,
                subscriptions: Zo
            });
        }, Jc = function(t) {
            return _(_n, {
                ctor: "[]"
            }, {
                ctor: "::",
                _0: rn(_(y["++"], "HOME: WIP", k(t))),
                _1: {
                    ctor: "::",
                    _0: _(_n, {
                        ctor: "::",
                        _0: yn("row"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: _(_n, {
                            ctor: "::",
                            _0: yn("col-sm-4"),
                            _1: {
                                ctor: "[]"
                            }
                        }, {
                            ctor: "::",
                            _0: _(uc, Oc, t),
                            _1: {
                                ctor: "[]"
                            }
                        }),
                        _1: {
                            ctor: "::",
                            _0: _(_n, {
                                ctor: "::",
                                _0: yn("col-sm-4"),
                                _1: {
                                    ctor: "[]"
                                }
                            }, {
                                ctor: "::",
                                _0: _(uc, Sc, t),
                                _1: {
                                    ctor: "[]"
                                }
                            }),
                            _1: {
                                ctor: "::",
                                _0: _(_n, {
                                    ctor: "::",
                                    _0: yn("col-sm-4"),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }, {
                                    ctor: "::",
                                    _0: _(uc, Lc, t),
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
                        _0: _(_n, {
                            ctor: "::",
                            _0: yn("row"),
                            _1: {
                                ctor: "[]"
                            }
                        }, {
                            ctor: "::",
                            _0: _(_n, {
                                ctor: "::",
                                _0: yn("col-sm-12"),
                                _1: {
                                    ctor: "[]"
                                }
                            }, {
                                ctor: "::",
                                _0: _(gn, {
                                    ctor: "::",
                                    _0: wn("button"),
                                    _1: {
                                        ctor: "::",
                                        _0: yn("btn btn-primary"),
                                        _1: {
                                            ctor: "::",
                                            _0: Cn(Ac),
                                            _1: {
                                                ctor: "[]"
                                            }
                                        }
                                    }
                                }, {
                                    ctor: "::",
                                    _0: rn("Simulate start loading"),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }),
                                _1: {
                                    ctor: "::",
                                    _0: _(gn, {
                                        ctor: "::",
                                        _0: wn("button"),
                                        _1: {
                                            ctor: "::",
                                            _0: yn("btn btn-primary"),
                                            _1: {
                                                ctor: "::",
                                                _0: Cn(Rc),
                                                _1: {
                                                    ctor: "[]"
                                                }
                                            }
                                        }
                                    }, {
                                        ctor: "::",
                                        _0: rn("Simulate stop loading"),
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
                            _0: _(_n, {
                                ctor: "::",
                                _0: yn("row"),
                                _1: {
                                    ctor: "[]"
                                }
                            }, {
                                ctor: "::",
                                _0: _(_n, {
                                    ctor: "::",
                                    _0: yn("col-sm"),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }, {
                                    ctor: "::",
                                    _0: rn(t.message),
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
                                _0: _(_n, {
                                    ctor: "::",
                                    _0: yn("row"),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }, {
                                    ctor: "::",
                                    _0: _(_n, {
                                        ctor: "::",
                                        _0: yn("col-sm-12"),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }, {
                                        ctor: "::",
                                        _0: _(gn, {
                                            ctor: "::",
                                            _0: wn("button"),
                                            _1: {
                                                ctor: "::",
                                                _0: yn("btn btn-primary"),
                                                _1: {
                                                    ctor: "::",
                                                    _0: Cn(Nc),
                                                    _1: {
                                                        ctor: "[]"
                                                    }
                                                }
                                            }
                                        }, {
                                            ctor: "::",
                                            _0: rn("Add indec component"),
                                            _1: {
                                                ctor: "[]"
                                            }
                                        }),
                                        _1: {
                                            ctor: "::",
                                            _0: _(gn, {
                                                ctor: "::",
                                                _0: wn("button"),
                                                _1: {
                                                    ctor: "::",
                                                    _0: yn("btn btn-primary"),
                                                    _1: {
                                                        ctor: "::",
                                                        _0: Cn(Bc),
                                                        _1: {
                                                            ctor: "[]"
                                                        }
                                                    }
                                                }
                                            }, {
                                                ctor: "::",
                                                _0: rn("Remove incdec component (TBD)"),
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
                                    _0: _(_n, {
                                        ctor: "[]"
                                    }, Ft(_(Ut, r(function(r, e) {
                                        return _(_n, {
                                            ctor: "::",
                                            _0: yn("row"),
                                            _1: {
                                                ctor: "[]"
                                            }
                                        }, {
                                            ctor: "::",
                                            _0: _(_n, {
                                                ctor: "::",
                                                _0: yn("col-sm"),
                                                _1: {
                                                    ctor: "[]"
                                                }
                                            }, {
                                                ctor: "::",
                                                _0: _(uc, Ic(r), t),
                                                _1: {
                                                    ctor: "[]"
                                                }
                                            }),
                                            _1: {
                                                ctor: "[]"
                                            }
                                        });
                                    }), t.incdecs))),
                                    _1: {
                                        ctor: "::",
                                        _0: _(_n, {
                                            ctor: "::",
                                            _0: yn("row"),
                                            _1: {
                                                ctor: "[]"
                                            }
                                        }, {
                                            ctor: "::",
                                            _0: _(_n, {
                                                ctor: "::",
                                                _0: yn("col-sm-12"),
                                                _1: {
                                                    ctor: "[]"
                                                }
                                            }, {
                                                ctor: "::",
                                                _0: _(wc, "/", "Домой"),
                                                _1: {
                                                    ctor: "::",
                                                    _0: _(wc, "/account", "Пользователь"),
                                                    _1: {
                                                        ctor: "::",
                                                        _0: _(wc, "/login", "Авторизация"),
                                                        _1: {
                                                            ctor: "::",
                                                            _0: _(wc, "/map", "Карта"),
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
                                            _0: _(kc, t.loaderStyle, Ec),
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
        }, Dc = function(t) {
            return function(r) {
                return function() {
                    var r = t;
                    switch (r.ctor) {
                      case "NoOp":
                        return Ot;

                      case "Tick":
                        return Mt(function(t) {
                            return g.update(t, {
                                counter: r._0
                            });
                        });

                      case "IncDecMessage":
                        return f(ac, r._0, r._1, r._2, Mc);

                      case "IncDecCMessage":
                        return s(ic, r._0, r._1, r._2, Cc, function(t) {
                            return Mt("Nothing" === t.ctor ? function(t) {
                                return g.update(t, {
                                    message: "Not here"
                                });
                            } : function(t) {
                                return g.update(t, {
                                    message: "Boo"
                                });
                            });
                        });

                      case "StartLoading":
                        return function(t) {
                            return _(Mt, function(t) {
                                return g.update(t, {
                                    message: "Animation start"
                                });
                            }, _(Mt, xc.set(!0), t));
                        };

                      case "StopLoading":
                        return function(t) {
                            return _(Mt, function(t) {
                                return g.update(t, {
                                    message: "Animation start"
                                });
                            }, _(Mt, xc.set(!1), t));
                        };

                      case "EndAnimation":
                        return Mt(function(t) {
                            return g.update(t, {
                                message: "Animation done"
                            });
                        });

                      case "AddComp":
                        var e = ec._0;
                        return Mt(function(t) {
                            return g.update(t, {
                                incdecs: _(Jt, e, t.incdecs)
                            });
                        });

                      case "RemoveComp":
                        return Ot;

                      default:
                        _(x, "SubCmd", 0);
                        return Mt(function(t) {
                            return g.update(t, {
                                message: "Best solution!"
                            });
                        });
                    }
                }()(Rt(r));
            };
        }, Uc = function(t) {
            return {
                ctor: "Tick",
                _0: t
            };
        }, Fc = function(t) {
            return mt({
                ctor: "::",
                _0: _(Me, 1e3, Uc),
                _1: {
                    ctor: "::",
                    _0: _(oc, Oc, t),
                    _1: {
                        ctor: "::",
                        _0: _(oc, Sc, t),
                        _1: {
                            ctor: "::",
                            _0: _(oc, Lc, t),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                }
            });
        }, jc = m(bt), qc = function(t) {
            return g.eq(t, "") ? "empty" : "non-empty";
        }, zc = r(function(t, r) {
            var e = t;
            switch (e.ctor) {
              case "NoOp":
                return {
                    ctor: "_Tuple2",
                    _0: r,
                    _1: gt
                };

              case "UserNameInput":
                return {
                    ctor: "_Tuple2",
                    _0: g.update(r, {
                        name: e._0
                    }),
                    _1: gt
                };

              default:
                return {
                    ctor: "_Tuple2",
                    _0: g.update(r, {
                        password: e._0
                    }),
                    _1: gt
                };
            }
        }), Hc = {
            ctor: "_Tuple2",
            _0: {
                name: "",
                password: ""
            },
            _1: gt
        }, Wc = (r(function(t, r) {
            return {
                name: t,
                password: r
            };
        }), function(t) {
            return {
                ctor: "PasswordInput",
                _0: t
            };
        }), Gc = function(t) {
            return {
                ctor: "UserNameInput",
                _0: t
            };
        }, Qc = function(t) {
            return _(_n, {
                ctor: "::",
                _0: yn("login-page"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: _(dn, {
                    ctor: "[]"
                }, {
                    ctor: "::",
                    _0: _(nn, {
                        ctor: "[]"
                    }, {
                        ctor: "::",
                        _0: rn("Авторизация в сервисе"),
                        _1: {
                            ctor: "[]"
                        }
                    }),
                    _1: {
                        ctor: "::",
                        _0: _(_n, {
                            ctor: "::",
                            _0: yn("login-form-group"),
                            _1: {
                                ctor: "[]"
                            }
                        }, {
                            ctor: "::",
                            _0: _(_n, {
                                ctor: "::",
                                _0: yn(qc(t.name)),
                                _1: {
                                    ctor: "[]"
                                }
                            }, {
                                ctor: "::",
                                _0: rn("Имя пользователя"),
                                _1: {
                                    ctor: "[]"
                                }
                            }),
                            _1: {
                                ctor: "::",
                                _0: _(pn, {
                                    ctor: "::",
                                    _0: An(Gc),
                                    _1: {
                                        ctor: "::",
                                        _0: Tn(t.name),
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
                            _0: _(_n, {
                                ctor: "::",
                                _0: yn("login-form-group"),
                                _1: {
                                    ctor: "[]"
                                }
                            }, {
                                ctor: "::",
                                _0: _(_n, {
                                    ctor: "::",
                                    _0: yn(qc(t.password)),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }, {
                                    ctor: "::",
                                    _0: rn("Пароль"),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }),
                                _1: {
                                    ctor: "::",
                                    _0: _(pn, {
                                        ctor: "::",
                                        _0: wn("password"),
                                        _1: {
                                            ctor: "::",
                                            _0: An(Wc),
                                            _1: {
                                                ctor: "::",
                                                _0: Tn(t.password),
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
                                _0: _(_n, {
                                    ctor: "::",
                                    _0: yn("login-form-group"),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }, {
                                    ctor: "::",
                                    _0: _(gn, {
                                        ctor: "::",
                                        _0: wn("submit"),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }, {
                                        ctor: "::",
                                        _0: rn("Авторизоваться"),
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
            });
        }, Vc = function(t) {
            var r = t, e = r._1, n = r._0;
            return g.eq(e, "") ? _(_n, {
                ctor: "::",
                _0: yn("duration-text"),
                _1: {
                    ctor: "::",
                    _0: _(hn, "role", "button"),
                    _1: {
                        ctor: "::",
                        _0: vn(0),
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            }, {
                ctor: "::",
                _0: rn(n),
                _1: {
                    ctor: "[]"
                }
            }) : _(_n, {
                ctor: "::",
                _0: yn("duration-text"),
                _1: {
                    ctor: "::",
                    _0: _(hn, "role", "button"),
                    _1: {
                        ctor: "::",
                        _0: vn(0),
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            }, {
                ctor: "::",
                _0: _(sn, {
                    ctor: "::",
                    _0: _(hn, "style", ""),
                    _1: {
                        ctor: "[]"
                    }
                }, {
                    ctor: "::",
                    _0: _(sn, {
                        ctor: "::",
                        _0: yn("segment-duration-part"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: rn(n),
                        _1: {
                            ctor: "[]"
                        }
                    }),
                    _1: {
                        ctor: "::",
                        _0: rn(" – "),
                        _1: {
                            ctor: "::",
                            _0: _(sn, {
                                ctor: "::",
                                _0: yn("segment-duration-part"),
                                _1: {
                                    ctor: "[]"
                                }
                            }, {
                                ctor: "::",
                                _0: rn(e),
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
        }, $c = _(fn, {
            ctor: "::",
            _0: yn("material-icons-extended rtl-mirrored chevron-icon"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: rn("chevron_right "),
            _1: {
                ctor: "[]"
            }
        }), Kc = _(fn, {
            ctor: "::",
            _0: yn("material-icons-extended rtl-mirrored activity-summary-chevron lower"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: rn("chevron_right"),
            _1: {
                ctor: "[]"
            }
        }), Xc = _(fn, {
            ctor: "::",
            _0: yn("material-icons-extended rtl-mirrored activity-summary-chevron upper"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: rn("chevron_left"),
            _1: {
                ctor: "[]"
            }
        }), Yc = _(fn, {
            ctor: "::",
            _0: yn("material-icons-extended add-a-place-icon"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: rn("add_circle"),
            _1: {
                ctor: "[]"
            }
        }), Zc = _(fn, {
            ctor: "::",
            _0: yn("material-icons-extended drop-down"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: rn("arrow_drop_down"),
            _1: {
                ctor: "[]"
            }
        }), tu = _(fn, {
            ctor: "::",
            _0: yn("timeline-header-button next-date-range-button material-icons-extended material-icon-with-ripple rtl-mirrored"),
            _1: {
                ctor: "::",
                _0: kn("Следующий день"),
                _1: {
                    ctor: "::",
                    _0: _(hn, "role", "button"),
                    _1: {
                        ctor: "::",
                        _0: vn(0),
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            }
        }, {
            ctor: "::",
            _0: rn("chevron_right "),
            _1: {
                ctor: "[]"
            }
        }), ru = _(fn, {
            ctor: "::",
            _0: yn("timeline-header-button previous-date-range-button material-icons-extended material-icon-with-ripple rtl-mirrored"),
            _1: {
                ctor: "::",
                _0: kn("Предыдущий день"),
                _1: {
                    ctor: "::",
                    _0: _(hn, "role", "button"),
                    _1: {
                        ctor: "::",
                        _0: vn(0),
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            }
        }, {
            ctor: "::",
            _0: rn("chevron_left "),
            _1: {
                ctor: "[]"
            }
        }), eu = function(t) {
            var r = t;
            return _(_n, {
                ctor: "::",
                _0: yn("timeline-item-text child-place-visit"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: _(ln, {
                    ctor: "::",
                    _0: yn("child-place-visit-content"),
                    _1: {
                        ctor: "::",
                        _0: xn("/maps/place/tbd"),
                        _1: {
                            ctor: "[]"
                        }
                    }
                }, {
                    ctor: "::",
                    _0: _(_n, {
                        ctor: "::",
                        _0: yn("child-place-visit-icon"),
                        _1: {
                            ctor: "::",
                            _0: _(hn, "style", "background-image:url(https://maps.gstatic.com/mapsactivities/icons/poi_icons/30_visited/tree_2x.png)"),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }, {
                        ctor: "[]"
                    }),
                    _1: {
                        ctor: "::",
                        _0: _(sn, {
                            ctor: "::",
                            _0: yn("child-place-visit-title"),
                            _1: {
                                ctor: "[]"
                            }
                        }, {
                            ctor: "::",
                            _0: rn(r._0),
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
                    _0: Vc(r._1),
                    _1: {
                        ctor: "[]"
                    }
                }
            });
        }, nu = _n({
            ctor: "::",
            _0: yn("edit-dialog-select moment-edit-control place-visit timeline-item-title-content"),
            _1: {
                ctor: "::",
                _0: _(hn, "role", "button"),
                _1: {
                    ctor: "::",
                    _0: vn(0),
                    _1: {
                        ctor: "[]"
                    }
                }
            }
        }), ou = function(t) {
            return _(_n, {
                ctor: "::",
                _0: yn("timeline-item-text"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: rn(t),
                _1: {
                    ctor: "[]"
                }
            });
        }, cu = _n({
            ctor: "::",
            _0: yn("timeline-item-title"),
            _1: {
                ctor: "[]"
            }
        }), uu = function(t) {
            return _n({
                ctor: "::",
                _0: yn(_(y["++"], "timeline-item-content primary ", t ? " multi-line" : "")),
                _1: {
                    ctor: "[]"
                }
            });
        }, iu = r(function(t, r) {
            var e = r;
            return _n("Nothing" === e.ctor ? {
                ctor: "::",
                _0: yn(_(y["++"], "timeline-item ", t)),
                _1: {
                    ctor: "[]"
                }
            } : {
                ctor: "::",
                _0: yn(_(y["++"], "timeline-item ", t)),
                _1: {
                    ctor: "::",
                    _0: _(hn, "role", "button"),
                    _1: {
                        ctor: "::",
                        _0: _(hn, "tabindex", "0"),
                        _1: {
                            ctor: "::",
                            _0: Cn(e._0),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                }
            });
        }), au = function(t) {
            var r = t;
            return _(mo, {
                ctor: "::",
                _0: Bo("timeline-item-svg"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: _(bo, r._0 ? {
                    ctor: "::",
                    _0: Bo("timeline-item-svg-line"),
                    _1: {
                        ctor: "::",
                        _0: yo("round"),
                        _1: {
                            ctor: "::",
                            _0: _(hn, "style", "stroke: rgb(1, 87, 155);"),
                            _1: {
                                ctor: "::",
                                _0: xo("7"),
                                _1: {
                                    ctor: "::",
                                    _0: To("7"),
                                    _1: {
                                        ctor: "::",
                                        _0: wo("0"),
                                        _1: {
                                            ctor: "::",
                                            _0: ko("41"),
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
                    _0: Bo(""),
                    _1: {
                        ctor: "::",
                        _0: _(hn, "style", "display:none"),
                        _1: {
                            ctor: "[]"
                        }
                    }
                }, {
                    ctor: "[]"
                }),
                _1: {
                    ctor: "::",
                    _0: _(bo, r._1 ? {
                        ctor: "::",
                        _0: Bo("timeline-item-svg-line"),
                        _1: {
                            ctor: "::",
                            _0: yo("round"),
                            _1: {
                                ctor: "::",
                                _0: _(hn, "style", "stroke: rgb(1, 87, 155);"),
                                _1: {
                                    ctor: "::",
                                    _0: xo("7"),
                                    _1: {
                                        ctor: "::",
                                        _0: To("7"),
                                        _1: {
                                            ctor: "::",
                                            _0: wo("41"),
                                            _1: {
                                                ctor: "::",
                                                _0: ko("100%"),
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
                        _0: Bo(""),
                        _1: {
                            ctor: "::",
                            _0: _(hn, "style", "display:none"),
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
        }, _u = function(t) {
            return nu({
                ctor: "::",
                _0: _(_n, {
                    ctor: "::",
                    _0: _(hn, "style", "display:none"),
                    _1: {
                        ctor: "[]"
                    }
                }, {
                    ctor: "[]"
                }),
                _1: {
                    ctor: "::",
                    _0: _(_n, {
                        ctor: "::",
                        _0: yn("place-visit-title"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: rn(t),
                        _1: {
                            ctor: "[]"
                        }
                    }),
                    _1: {
                        ctor: "::",
                        _0: Zc,
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            });
        }, lu = function(t) {
            var r = t, e = {
                ctor: "::",
                _0: eu({
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
                    _0: eu({
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
            return _(_n, {
                ctor: "[]"
            }, {
                ctor: "::",
                _0: l(iu, "place-history-moment-outer", N, {
                    ctor: "::",
                    _0: au({
                        ctor: "_Tuple2",
                        _0: r._0._0,
                        _1: r._0._1
                    }),
                    _1: {
                        ctor: "::",
                        _0: _(_n, {
                            ctor: "::",
                            _0: yn("segment-divider"),
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
                                _0: _(uu, !0, {
                                    ctor: "::",
                                    _0: _(_n, {
                                        ctor: "[]"
                                    }, {
                                        ctor: "::",
                                        _0: cu({
                                            ctor: "::",
                                            _0: _u(r._2),
                                            _1: {
                                                ctor: "::",
                                                _0: Vc({
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
                                            _0: ou(r._4),
                                            _1: {
                                                ctor: "[]"
                                            }
                                        }
                                    }),
                                    _1: e
                                }),
                                _1: {
                                    ctor: "::",
                                    _0: _(on, {
                                        ctor: "::",
                                        _0: yn("moment-divider"),
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
        }, fu = function(t) {
            return _(_n, {
                ctor: "::",
                _0: yn("timeline-header"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: _(_n, {
                    ctor: "::",
                    _0: yn("timeline-header-title-container"),
                    _1: {
                        ctor: "[]"
                    }
                }, {
                    ctor: "::",
                    _0: _(_n, {
                        ctor: "::",
                        _0: yn("timeline-title"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: rn(t.day),
                        _1: {
                            ctor: "[]"
                        }
                    }),
                    _1: {
                        ctor: "::",
                        _0: _(_n, {
                            ctor: "::",
                            _0: yn("timeline-subtitle"),
                            _1: {
                                ctor: "[]"
                            }
                        }, {
                            ctor: "::",
                            _0: rn(t.comment),
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
                    _0: ru,
                    _1: {
                        ctor: "::",
                        _0: tu,
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            });
        }, su = r(function(t, r) {
            return {
                day: t,
                comment: r
            };
        }), du = function(t) {
            var r = "Move" === t.ctor ? {
                ctor: "_Tuple2",
                _0: "Движение",
                _1: "https://www.gstatic.com/images/icons/material/system/2x/directions_car_black_24dp.png"
            } : {
                ctor: "_Tuple2",
                _0: "Стоянка",
                _1: "https://maps.gstatic.com/mapsactivities/icons/activity_icons/2x/ic_activity_walking_black_24dp.png"
            }, e = r._0, n = r._1;
            return _(_n, {
                ctor: "::",
                _0: yn("activity-icon"),
                _1: {
                    ctor: "::",
                    _0: kn(e),
                    _1: {
                        ctor: "::",
                        _0: _(hn, "style", _(y["++"], "background-image: url(", _(y["++"], n, ");"))),
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            }, {
                ctor: "[]"
            });
        }, pu = {
            ctor: "Camp"
        }, gu = {
            ctor: "Move"
        }, hu = _(mo, {
            ctor: "::",
            _0: Bo("timeline-item-svg"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: _(bo, {
                ctor: "::",
                _0: Bo("timeline-item-svg-line"),
                _1: {
                    ctor: "::",
                    _0: _(hn, "style", "stroke: rgb(1, 87, 155);"),
                    _1: {
                        ctor: "::",
                        _0: xo("7"),
                        _1: {
                            ctor: "::",
                            _0: To("7"),
                            _1: {
                                ctor: "::",
                                _0: wo("0"),
                                _1: {
                                    ctor: "::",
                                    _0: ko("100%"),
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
        }), vu = _(_n, {
            ctor: "::",
            _0: yn("add-a-place"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: Yc,
            _1: {
                ctor: "::",
                _0: _(_n, {
                    ctor: "::",
                    _0: yn("add-a-place-text tooltip"),
                    _1: {
                        ctor: "[]"
                    }
                }, {
                    ctor: "::",
                    _0: rn("Новое место"),
                    _1: {
                        ctor: "[]"
                    }
                }),
                _1: {
                    ctor: "[]"
                }
            }
        }), mu = function(t) {
            var r = t;
            return nu({
                ctor: "::",
                _0: du(gu),
                _1: {
                    ctor: "::",
                    _0: _(sn, {
                        ctor: "::",
                        _0: yn("activity-type"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: rn(r._0),
                        _1: {
                            ctor: "[]"
                        }
                    }),
                    _1: {
                        ctor: "::",
                        _0: _(_n, {
                            ctor: "::",
                            _0: yn("distance-text"),
                            _1: {
                                ctor: "::",
                                _0: _(hn, "style", ""),
                                _1: {
                                    ctor: "[]"
                                }
                            }
                        }, {
                            ctor: "::",
                            _0: rn(r._1),
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
        }, bu = function(t) {
            var r = t, e = _(D, function(t) {
                var r = t;
                return eu({
                    ctor: "_Tuple2",
                    _0: r._0,
                    _1: {
                        ctor: "_Tuple2",
                        _0: r._1,
                        _1: ""
                    }
                });
            }, r._2);
            return _(_n, {
                ctor: "[]"
            }, {
                ctor: "::",
                _0: _(_n, {
                    ctor: "::",
                    _0: yn("activity-segment-outer"),
                    _1: {
                        ctor: "[]"
                    }
                }, {
                    ctor: "::",
                    _0: l(iu, "place-history-moment-outer", N, {
                        ctor: "::",
                        _0: hu,
                        _1: {
                            ctor: "::",
                            _0: vu,
                            _1: {
                                ctor: "::",
                                _0: _(uu, !0, {
                                    ctor: "::",
                                    _0: _(_n, {
                                        ctor: "[]"
                                    }, {
                                        ctor: "::",
                                        _0: cu({
                                            ctor: "::",
                                            _0: mu({
                                                ctor: "_Tuple2",
                                                _0: r._0._0,
                                                _1: r._0._1
                                            }),
                                            _1: {
                                                ctor: "::",
                                                _0: Vc({
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
                                    _0: _(on, {
                                        ctor: "::",
                                        _0: yn("moment-divider"),
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
        }, yu = function(t) {
            var r = "PlaceIconHome" === t.ctor ? "https://maps.gstatic.com/mapsactivities/icons/poi_icons/30_visited/home_2x.png" : "https://maps.gstatic.com/mapsactivities/icons/poi_icons/30_regular/generic_2x.png";
            return _(_n, {
                ctor: "::",
                _0: yn("timeline-item-icon place-icon"),
                _1: {
                    ctor: "::",
                    _0: _(hn, "style", _(y["++"], "background-image: url(", _(y["++"], r, ");"))),
                    _1: {
                        ctor: "[]"
                    }
                }
            }, {
                ctor: "[]"
            });
        }, ku = {
            ctor: "PlaceIconPoi"
        }, wu = {
            ctor: "PlaceIconHome"
        }, Tu = function(t) {
            var r = t;
            return _(_n, {
                ctor: "::",
                _0: yn("top-activity"),
                _1: {
                    ctor: "::",
                    _0: kn(r._0),
                    _1: {
                        ctor: "[]"
                    }
                }
            }, {
                ctor: "::",
                _0: du(r._1),
                _1: {
                    ctor: "::",
                    _0: _(_n, {
                        ctor: "::",
                        _0: yn("top-activity-text"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: _(_n, {
                            ctor: "[]"
                        }, {
                            ctor: "::",
                            _0: rn(r._2),
                            _1: {
                                ctor: "[]"
                            }
                        }),
                        _1: {
                            ctor: "::",
                            _0: _(_n, {
                                ctor: "[]"
                            }, {
                                ctor: "::",
                                _0: rn(r._3),
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
        }, xu = function(t) {
            return l(iu, "top-activities", N, {
                ctor: "::",
                _0: Tu({
                    ctor: "_Tuple4",
                    _0: "Движение",
                    _1: gu,
                    _2: t.moves.distance,
                    _3: t.moves.duration
                }),
                _1: {
                    ctor: "::",
                    _0: Tu({
                        ctor: "_Tuple4",
                        _0: "Стоянка",
                        _1: pu,
                        _2: "",
                        _3: t.camp.duration
                    }),
                    _1: {
                        ctor: "[]"
                    }
                }
            });
        }, Bu = r(function(t, r) {
            return {
                moves: t,
                camp: r
            };
        }), Nu = function(t) {
            return _(_n, {
                ctor: "::",
                _0: yn("travel-segment-summary-item"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: du(t),
                _1: {
                    ctor: "::",
                    _0: $c,
                    _1: {
                        ctor: "[]"
                    }
                }
            });
        }, Eu = _(_n, {
            ctor: "::",
            _0: yn("activity-expand-toggle"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: Xc,
            _1: {
                ctor: "::",
                _0: Kc,
                _1: {
                    ctor: "[]"
                }
            }
        }), Ru = _(mo, {
            ctor: "::",
            _0: Bo("timeline-item-svg"),
            _1: {
                ctor: "[]"
            }
        }, {
            ctor: "::",
            _0: _(bo, {
                ctor: "::",
                _0: Bo("timeline-item-svg-line"),
                _1: {
                    ctor: "::",
                    _0: _(hn, "style", "stroke: rgb(1, 87, 155);"),
                    _1: {
                        ctor: "::",
                        _0: xo("7"),
                        _1: {
                            ctor: "::",
                            _0: To("7"),
                            _1: {
                                ctor: "::",
                                _0: wo("0"),
                                _1: {
                                    ctor: "::",
                                    _0: ko("100%"),
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
        }), Au = function(t) {
            return l(iu, "travel-segment-summary", R(t), {
                ctor: "::",
                _0: Ru,
                _1: {
                    ctor: "::",
                    _0: Eu,
                    _1: {
                        ctor: "::",
                        _0: _(uu, !1, {
                            ctor: "::",
                            _0: cu({
                                ctor: "::",
                                _0: _(_n, {
                                    ctor: "::",
                                    _0: yn("travel-segment-summary-itmes"),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }, {
                                    ctor: "::",
                                    _0: Nu(gu),
                                    _1: {
                                        ctor: "::",
                                        _0: Nu(pu),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }
                                }),
                                _1: {
                                    ctor: "::",
                                    _0: Vc({
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
            });
        }, Cu = e(function(t, r, e) {
            return _(_n, {
                ctor: "[]"
            }, {
                ctor: "::",
                _0: _(_n, {
                    ctor: "::",
                    _0: yn(_(y["++"], "travel-segment", t.expanded ? " expanded" : "")),
                    _1: {
                        ctor: "[]"
                    }
                }, {
                    ctor: "::",
                    _0: Au(r),
                    _1: {
                        ctor: "::",
                        _0: _(on, {
                            ctor: "::",
                            _0: yn("moment-divider"),
                            _1: {
                                ctor: "[]"
                            }
                        }, {
                            ctor: "[]"
                        }),
                        _1: {
                            ctor: "::",
                            _0: _(_n, {
                                ctor: "::",
                                _0: yn("activities-wrapper"),
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
            });
        }), Lu = function(t) {
            return g.update(t, {
                expanded: !t.expanded
            });
        }, Mu = {
            expanded: !1
        }, Ou = m(bt), Su = bu({
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
        }), Pu = bu({
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
        }), Iu = bu({
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
        }), Ju = yu(wu), Du = function(t) {
            return lu({
                ctor: "_Tuple5",
                _0: {
                    ctor: "_Tuple2",
                    _0: !1,
                    _1: !0
                },
                _1: Ju,
                _2: "Дом",
                _3: {
                    ctor: "_Tuple2",
                    _0: "11:02",
                    _1: "15:20"
                },
                _4: "вулиця Мічуріна, 8, Кам’янське, Дніпропетровська область"
            });
        }, Uu = function(t) {
            return lu({
                ctor: "_Tuple5",
                _0: {
                    ctor: "_Tuple2",
                    _0: !0,
                    _1: !1
                },
                _1: Ju,
                _2: "Гараж",
                _3: {
                    ctor: "_Tuple2",
                    _0: "23:20",
                    _1: "23:59"
                },
                _4: "вулиця Мічуріна, 8, Кам’янське, Дніпропетровська область"
            });
        }, Fu = yu(ku), ju = function(t) {
            return lu({
                ctor: "_Tuple5",
                _0: {
                    ctor: "_Tuple2",
                    _0: !0,
                    _1: !0
                },
                _1: Fu,
                _2: "Склад №1",
                _3: {
                    ctor: "_Tuple2",
                    _0: "16:02",
                    _1: "16:05"
                },
                _4: "Днипро, Днепропетровская область, 49000"
            });
        }, qu = function(t) {
            return function(r) {
                return function() {
                    switch (t.ctor) {
                      case "NoOp":
                        return Ot;

                      case "ExpandTravel1":
                        return Mt(function(t) {
                            return g.update(t, {
                                travelEvent1: Lu(t.travelEvent1)
                            });
                        });

                      default:
                        return Mt(function(t) {
                            return g.update(t, {
                                travelEvent2: Lu(t.travelEvent2)
                            });
                        });
                    }
                }()(Rt(r));
            };
        }, zu = Rt({
            value: 0,
            travelEvent1: Mu,
            travelEvent2: Mu
        }), Hu = (e(function(t, r, e) {
            return {
                value: t,
                travelEvent1: r,
                travelEvent2: e
            };
        }), {
            ctor: "ExpandTravel2"
        }), Wu = function(t) {
            return l(Cu, t.travelEvent2, Hu, {
                ctor: "::",
                _0: Su,
                _1: {
                    ctor: "[]"
                }
            });
        }, Gu = {
            ctor: "ExpandTravel1"
        }, Qu = function(t) {
            return l(Cu, t.travelEvent1, Gu, {
                ctor: "::",
                _0: Iu,
                _1: {
                    ctor: "::",
                    _0: Pu,
                    _1: {
                        ctor: "::",
                        _0: Iu,
                        _1: {
                            ctor: "::",
                            _0: Pu,
                            _1: {
                                ctor: "::",
                                _0: Pu,
                                _1: {
                                    ctor: "[]"
                                }
                            }
                        }
                    }
                }
            });
        }, Vu = function(t) {
            var r = _(Bu, {
                distance: "139 км",
                duration: "5 ч. 6 мин."
            }, {
                duration: "5 ч. 6 мин."
            });
            return _(_n, {
                ctor: "::",
                _0: yn("timeline-content"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: _(_n, {
                    ctor: "[]"
                }, {
                    ctor: "::",
                    _0: xu(r),
                    _1: {
                        ctor: "::",
                        _0: Du(),
                        _1: {
                            ctor: "::",
                            _0: Qu(t),
                            _1: {
                                ctor: "::",
                                _0: ju(),
                                _1: {
                                    ctor: "::",
                                    _0: Wu(t),
                                    _1: {
                                        ctor: "::",
                                        _0: Uu(),
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
        }, $u = function(t) {
            var r = _(su, "Четверг, 10 Сентября 2015 Г.", "Данные могут быть не полными");
            return _(_n, {
                ctor: "::",
                _0: yn("timeline-wrapper"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: fu(r),
                _1: {
                    ctor: "::",
                    _0: Vu(t),
                    _1: {
                        ctor: "[]"
                    }
                }
            });
        }, Ku = _(te, function(t) {
            return t.timeline;
        }, r(function(t, r) {
            return g.update(r, {
                timeline: t
            });
        })), Xu = function(t) {
            return {
                ctor: "TimeLineMessage",
                _0: t
            };
        }, Yu = function() {
            var t = _(Tt, Xu, zu), r = t._0, e = t._1;
            return _(xt, e, Rt({
                timeline: r
            }));
        }(), Zu = function(t) {
            return function(r) {
                return function() {
                    var r = t;
                    return "NoOp" === r.ctor ? Ot : l(jo, Ku, Xu, qu(r._0));
                }()(Rt(r));
            };
        }, ti = function(t) {
            return _(_n, {
                ctor: "::",
                _0: yn("map-page"),
                _1: {
                    ctor: "[]"
                }
            }, {
                ctor: "::",
                _0: _(_n, {
                    ctor: "::",
                    _0: yn("map-main"),
                    _1: {
                        ctor: "[]"
                    }
                }, {
                    ctor: "::",
                    _0: rn("Тут будет карта"),
                    _1: {
                        ctor: "[]"
                    }
                }),
                _1: {
                    ctor: "::",
                    _0: _(_n, {
                        ctor: "::",
                        _0: yn("map-control"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: _(_n, {
                            ctor: "::",
                            _0: yn("map-control-timeline"),
                            _1: {
                                ctor: "[]"
                            }
                        }, {
                            ctor: "::",
                            _0: _(tn, Xu, $u(t.timeline)),
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
            });
        }, ri = function(t) {
            return mt({
                ctor: "::",
                _0: _(yt, Xu, Ou(t.timeline)),
                _1: {
                    ctor: "[]"
                }
            });
        }, ei = {
            ctor: "NotFound"
        }, ni = {
            ctor: "Map"
        }, oi = {
            ctor: "Login"
        }, ci = {
            ctor: "Home"
        }, ui = function(t) {
            return So(function(r) {
                return _(H, function(t) {
                    return t._0(r);
                }, t);
            });
        }({
            ctor: "::",
            _0: _(Do, {
                ctor: "Account"
            }, Po("account")),
            _1: {
                ctor: "::",
                _0: _(Do, oi, Po("login")),
                _1: {
                    ctor: "::",
                    _0: _(Do, ni, Po("map")),
                    _1: {
                        ctor: "::",
                        _0: _(Do, ci, Uo),
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            }
        }), ii = function(t) {
            return _(B, ei, _(Lo, ui, t));
        }, ai = {
            ctor: "NotFoundPage"
        }, _i = function(t) {
            return {
                ctor: "MapPage",
                _0: t
            };
        }, li = function(t) {
            return {
                ctor: "LoginPage",
                _0: t
            };
        }, fi = function(t) {
            return {
                ctor: "AccountPage",
                _0: t
            };
        }, si = function(t) {
            return {
                ctor: "HomePage",
                _0: t
            };
        }, di = function(t) {
            return {
                ctor: "MapPageMsg",
                _0: t
            };
        }, pi = function(t) {
            return {
                ctor: "LoginPageMsg",
                _0: t
            };
        }, gi = function(t) {
            return {
                ctor: "AccountPageMsg",
                _0: t
            };
        }, hi = function(t) {
            return {
                ctor: "HomePageMsg",
                _0: t
            };
        }, vi = function(t) {
            var e = r(function(t, r) {
                return _(Ct, t, function(t) {
                    return r(t);
                });
            });
            switch (ii(t).ctor) {
              case "Home":
                return l(e, hi, si, Pc);

              case "Account":
                return l(e, gi, fi, Vo);

              case "Login":
                return l(e, pi, li, Hc);

              case "Map":
                return l(e, di, _i, Yu);

              default:
                return {
                    ctor: "_Tuple2",
                    _0: ai,
                    _1: gt
                };
            }
        }, mi = r(function(t, r) {
            var e = {
                ctor: "_Tuple2",
                _0: t,
                _1: r
            };
            t: do {
                if ("_Tuple2" !== e.ctor) break t;
                switch (e._0.ctor) {
                  case "HomePageMsg":
                    if ("HomePage" === e._1.ctor) return l(Ct, hi, si, _(Dc, e._0._0, e._1._0));
                    break t;

                  case "AccountPageMsg":
                    if ("AccountPage" === e._1.ctor) return l(Ct, gi, fi, _(Qo, e._0._0, e._1._0));
                    break t;

                  case "LoginPageMsg":
                    if ("LoginPage" === e._1.ctor) return l(Ct, pi, li, _(zc, e._0._0, e._1._0));
                    break t;

                  default:
                    if ("MapPage" === e._1.ctor) return l(Ct, di, _i, _(Zu, e._0._0, e._1._0));
                    break t;
                }
            } while (!1);
            _(x, "received unexpected message", t);
            return Rt(r);
        }), bi = function(t) {
            var r = t;
            switch (r.ctor) {
              case "HomePage":
                return _(tn, hi, Jc(r._0));

              case "AccountPage":
                return _(tn, gi, Go(r._0));

              case "LoginPage":
                return _(tn, pi, Qc(r._0));

              case "MapPage":
                return _(tn, di, ti(r._0));

              default:
                return _(_n, {
                    ctor: "::",
                    _0: yn("not__found"),
                    _1: {
                        ctor: "[]"
                    }
                }, {
                    ctor: "::",
                    _0: rn("Page Not Found"),
                    _1: {
                        ctor: "[]"
                    }
                });
            }
        }, yi = function(t) {
            var r = t;
            switch (r.ctor) {
              case "HomePage":
                return _(yt, hi, Fc(r._0));

              case "AccountPage":
                return _(yt, gi, Ho(r._0));

              case "LoginPage":
                return _(yt, pi, jc(r._0));

              case "MapPage":
                return _(yt, di, ri(r._0));

              default:
                return bt;
            }
        }, ki = r(function(t, r) {
            return _(me, m(r), Ie(t));
        }), wi = _(te, function(t) {
            return t.page;
        }, r(function(t, r) {
            return g.update(r, {
                page: t
            });
        })), Ti = (r(function(t, r) {
            return {
                page: t,
                blur: r
            };
        }), {
            ctor: "Delayed"
        }), xi = function(t) {
            return {
                ctor: "PageMsg",
                _0: t
            };
        }, Bi = _(_o, function(t) {
            return {
                ctor: "UrlChange",
                _0: t
            };
        }, {
            init: function(t) {
                _(x, "App.init", 0);
                var r = _(Tt, xi, vi(t)), e = r._0, n = r._1, o = {
                    page: e,
                    blur: !0
                };
                return _(xt, _(ki, 100, Ti), _(xt, n, Rt(o)));
            },
            view: function(t) {
                return _(_n, {
                    ctor: "::",
                    _0: yn(t.blur ? "blur" : "noblur"),
                    _1: {
                        ctor: "[]"
                    }
                }, {
                    ctor: "::",
                    _0: _(tn, xi, bi(t.page)),
                    _1: {
                        ctor: "[]"
                    }
                });
            },
            update: function(t) {
                return function(r) {
                    return function() {
                        var r = t;
                        switch (r.ctor) {
                          case "NoOp":
                            return Ot;

                          case "UrlChange":
                            return l(jo, wi, xi, m(vi(r._0)));

                          case "PageMsg":
                            return l(jo, wi, xi, mi(r._0));

                          case "NavigateTo":
                            return xt(co(r._0));

                          default:
                            return Mt(function(t) {
                                return g.update(t, {
                                    blur: !1
                                });
                            });
                        }
                    }()(Rt(r));
                };
            },
            subscriptions: function(t) {
                return mt({
                    ctor: "::",
                    _0: _(yt, xi, yi(t.page)),
                    _1: {
                        ctor: "[]"
                    }
                });
            }
        })(), Ni = {};
        if (Ni.App = Ni.App || {}, void 0 !== Bi && Bi(Ni.App, "App", void 0), "function" == typeof define && define.amd) define([], function() {
            return Ni;
        }); else if ("object" != typeof t) {
            var Ei = this.Elm;
            if (void 0 !== Ei) for (var Ri in Ni) {
                if (Ri in Ei) throw new Error("There are two Elm modules called `" + Ri + "` on this page! Rename one of them.");
                Ei[Ri] = Ni[Ri];
            } else this.Elm = Ni;
        } else t.exports = Ni;
    }).call(this);
} ]);