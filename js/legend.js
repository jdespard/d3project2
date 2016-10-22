! function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i)
                    return i(g, !0);
                if (f)
                    return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND",
                    j
            }
            var k = c[g] = {
                exports: {}
            };
            b[g][0].call(k.exports, function(a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++)
        e(d[g]);
    return e
}({
    1: [function(a, b, c) {
        var d = a("./legend");
        b.exports = function() {
            function a(a) {
                var v = d.d3_calcType(c, t, j, k, o, r),
                    w = a.selectAll("g").data([c]);
                w.enter().append("g").attr("class", l + "legendCells");
                var x = w.selectAll("." + l + "cell").data(v.data),
                    y = x.enter().append("g", ".cell").attr("class", l + "cell").style("opacity", 1e-6),
                    z = (y.append(e).attr("class", l + "swatch"),
                        x.select("g." + l + "cell " + e));
                d.d3_addEvents(y, u),
                    x.exit().transition().style("opacity", 0).remove(),
                    d.d3_drawShapes(e, z, g, f, h, b),
                    d.d3_addText(w, y, v.labels, l);
                var A = x.select("text"),
                    B = z[0].map(function(a) {
                        return a.getBBox()
                    });
                m ? z.attr("class", function(a) {
                    return l + "swatch " + v.feature(a)
                }) : "line" == e ? z.style("stroke", v.feature) : z.style("fill", v.feature);
                var C, D, E = "start" == q ? 0 : "middle" == q ? .5 : 1;
                "vertical" === s ? (C = function(a, b) {
                            return "translate(0, " + b * (B[b].height + i) + ")"
                        },
                        D = function(a, b) {
                            return "translate(" + (B[b].width + B[b].x + p) + "," + (B[b].y + B[b].height / 2 + 5) + ")"
                        }
                    ) : "horizontal" === s && (C = function(a, b) {
                            return "translate(" + b * (B[b].width + i) + ",0)"
                        },
                        D = function(a, b) {
                            return "translate(" + (B[b].width * E + B[b].x) + "," + (B[b].height + B[b].y + p + 8) + ")"
                        }
                    ),
                    d.d3_placement(s, x, C, A, D, q),
                    d.d3_title(a, w, n, l),
                    x.transition().style("opacity", 1)
            }
            var b, c = d3.scale.linear(),
                e = "rect",
                f = 15,
                g = 15,
                h = 10,
                i = 2,
                j = [5],
                k = [],
                l = "",
                m = !1,
                n = "",
                o = d3.format(".01f"),
                p = 10,
                q = "middle",
                r = "to",
                s = "vertical",
                t = !1,
                u = d3.dispatch("cellover", "cellout", "cellclick");
            return a.scale = function(b) {
                    return arguments.length ? (c = b,
                        a) : c
                },
                a.cells = function(b) {
                    return arguments.length ? ((b.length > 1 || b >= 2) && (j = b),
                        a) : j
                },
                a.shape = function(c, d) {
                    return arguments.length ? (("rect" == c || "circle" == c || "line" == c || "path" == c && "string" == typeof d) && (e = c,
                            b = d),
                        a) : e
                },
                a.shapeWidth = function(b) {
                    return arguments.length ? (f = +b,
                        a) : f
                },
                a.shapeHeight = function(b) {
                    return arguments.length ? (g = +b,
                        a) : g
                },
                a.shapeRadius = function(b) {
                    return arguments.length ? (h = +b,
                        a) : h
                },
                a.shapePadding = function(b) {
                    return arguments.length ? (i = +b,
                        a) : i
                },
                a.labels = function(b) {
                    return arguments.length ? (k = b,
                        a) : k
                },
                a.labelAlign = function(b) {
                    return arguments.length ? (("start" == b || "end" == b || "middle" == b) && (q = b),
                        a) : q
                },
                a.labelFormat = function(b) {
                    return arguments.length ? (o = b,
                        a) : o
                },
                a.labelOffset = function(b) {
                    return arguments.length ? (p = +b,
                        a) : p
                },
                a.labelDelimiter = function(b) {
                    return arguments.length ? (r = b,
                        a) : r
                },
                a.useClass = function(b) {
                    return arguments.length ? ((b === !0 || b === !1) && (m = b),
                        a) : m
                },
                a.orient = function(b) {
                    return arguments.length ? (b = b.toLowerCase(),
                        ("horizontal" == b || "vertical" == b) && (s = b),
                        a) : s
                },
                a.ascending = function(b) {
                    return arguments.length ? (t = !!b,
                        a) : t
                },
                a.classPrefix = function(b) {
                    return arguments.length ? (l = b,
                        a) : l
                },
                a.title = function(b) {
                    return arguments.length ? (n = b,
                        a) : n
                },
                d3.rebind(a, u, "on"),
                a
        }
    }, {
        "./legend": 2
    }],
    2: [function(a, b, c) {
        b.exports = {
            d3_identity: function(a) {
                return a
            },
            d3_mergeLabels: function(a, b) {
                if (0 === b.length)
                    return a;
                a = a ? a : [];
                for (var c = b.length; c < a.length; c++)
                    b.push(a[c]);
                return b
            },
            d3_linearLegend: function(a, b, c) {
                var d = [];
                if (b.length > 1)
                    d = b;
                else
                    for (var e = a.domain(), f = (e[e.length - 1] - e[0]) / (b - 1), g = 0; b > g; g++)
                        d.push(e[0] + g * f);
                var h = d.map(c);
                return {
                    data: d,
                    labels: h,
                    feature: function(b) {
                        return a(b)
                    }
                }
            },
            d3_quantLegend: function(a, b, c) {
                var d = a.range().map(function(d) {
                    var e = a.invertExtent(d);
                    b(e[0]),
                        b(e[1]);
                    return b(e[0]) + " " + c + " " + b(e[1])
                });
                return {
                    data: a.range(),
                    labels: d,
                    feature: this.d3_identity
                }
            },
            d3_ordinalLegend: function(a) {
                return {
                    data: a.domain(),
                    labels: a.domain(),
                    feature: function(b) {
                        return a(b)
                    }
                }
            },
            d3_drawShapes: function(a, b, c, d, e, f) {
                "rect" === a ? b.attr("height", c).attr("width", d) : "circle" === a ? b.attr("r", e) : "line" === a ? b.attr("x1", 0).attr("x2", d).attr("y1", 0).attr("y2", 0) : "path" === a && b.attr("d", f)
            },
            d3_addText: function(a, b, c, d) {
                b.append("text").attr("class", d + "label"),
                    a.selectAll("g." + d + "cell text").data(c).text(this.d3_identity)
            },
            d3_calcType: function(a, b, c, d, e, f) {
                var g = a.ticks ? this.d3_linearLegend(a, c, e) : a.invertExtent ? this.d3_quantLegend(a, e, f) : this.d3_ordinalLegend(a);
                return g.labels = this.d3_mergeLabels(g.labels, d),
                    b && (g.labels = this.d3_reverse(g.labels),
                        g.data = this.d3_reverse(g.data)),
                    g
            },
            d3_reverse: function(a) {
                for (var b = [], c = 0, d = a.length; d > c; c++)
                    b[c] = a[d - c - 1];
                return b
            },
            d3_placement: function(a, b, c, d, e, f) {
                b.attr("transform", c),
                    d.attr("transform", e),
                    "horizontal" === a && d.style("text-anchor", f)
            },
            d3_addEvents: function(a, b) {
                var c = this;
                a.on("mouseover.legend", function(a) {
                    c.d3_cellOver(b, a, this)
                }).on("mouseout.legend", function(a) {
                    c.d3_cellOut(b, a, this)
                }).on("click.legend", function(a) {
                    c.d3_cellClick(b, a, this)
                })
            },
            d3_cellOver: function(a, b, c) {
                a.cellover.call(c, b)
            },
            d3_cellOut: function(a, b, c) {
                a.cellout.call(c, b)
            },
            d3_cellClick: function(a, b, c) {
                a.cellclick.call(c, b)
            },
            d3_title: function(a, b, c, d) {
                if ("" !== c) {
                    var e = a.selectAll("text." + d + "legendTitle");
                    e.data([c]).enter().append("text").attr("class", d + "legendTitle"),
                        a.selectAll("text." + d + "legendTitle").text(c);
                    var f = a.select("." + d + "legendTitle").map(function(a) {
                            return a[0].getBBox().height
                        })[0],
                        g = -b.map(function(a) {
                            return a[0].getBBox().x
                        })[0];
                    b.attr("transform", "translate(" + g + "," + (f + 10) + ")")
                }
            }
        }
    }, {}],
    3: [function(a, b, c) {
        var d = a("./legend");
        b.exports = function() {
            function a(a) {
                var s = d.d3_calcType(c, q, h, i, l, o),
                    t = a.selectAll("g").data([c]);
                t.enter().append("g").attr("class", j + "legendCells");
                var u = t.selectAll("." + j + "cell").data(s.data),
                    v = u.enter().append("g", ".cell").attr("class", j + "cell").style("opacity", 1e-6),
                    w = (v.append(e).attr("class", j + "swatch"),
                        u.select("g." + j + "cell " + e));
                d.d3_addEvents(v, r),
                    u.exit().transition().style("opacity", 0).remove(),
                    "line" === e ? (d.d3_drawShapes(e, w, 0, f),
                        w.attr("stroke-width", s.feature)) : d.d3_drawShapes(e, w, s.feature, s.feature, s.feature, b),
                    d.d3_addText(t, v, s.labels, j);
                var x, y, z = u.select("text"),
                    A = w[0].map(function(a, b) {
                        var d = a.getBBox(),
                            f = c(s.data[b]);
                        return "line" === e && "horizontal" === p ? d.height = d.height + f : "line" === e && "vertical" === p && (d.width = d.width),
                            d
                    }),
                    B = d3.max(A, function(a) {
                        return a.height + a.y
                    }),
                    C = d3.max(A, function(a) {
                        return a.width + a.x
                    }),
                    D = "start" == n ? 0 : "middle" == n ? .5 : 1;
                "vertical" === p ? (x = function(a, b) {
                            var c = d3.sum(A.slice(0, b + 1), function(a) {
                                return a.height
                            });
                            return "translate(0, " + (c + b * g) + ")"
                        },
                        y = function(a, b) {
                            return "translate(" + (C + m) + "," + (A[b].y + A[b].height / 2 + 5) + ")"
                        }
                    ) : "horizontal" === p && (x = function(a, b) {
                            var c = d3.sum(A.slice(0, b + 1), function(a) {
                                return a.width
                            });
                            return "translate(" + (c + b * g) + ",0)"
                        },
                        y = function(a, b) {
                            return "translate(" + (A[b].width * D + A[b].x) + "," + (B + m) + ")"
                        }
                    ),
                    d.d3_placement(p, u, x, z, y, n),
                    d.d3_title(a, t, k, j),
                    u.transition().style("opacity", 1)
            }
            var b, c = d3.scale.linear(),
                e = "rect",
                f = 15,
                g = 2,
                h = [5],
                i = [],
                j = "",
                k = "",
                l = d3.format(".01f"),
                m = 10,
                n = "middle",
                o = "to",
                p = "vertical",
                q = !1,
                r = d3.dispatch("cellover", "cellout", "cellclick");
            return a.scale = function(b) {
                    return arguments.length ? (c = b,
                        a) : c
                },
                a.cells = function(b) {
                    return arguments.length ? ((b.length > 1 || b >= 2) && (h = b),
                        a) : h
                },
                a.shape = function(c, d) {
                    return arguments.length ? (("rect" == c || "circle" == c || "line" == c) && (e = c,
                            b = d),
                        a) : e
                },
                a.shapeWidth = function(b) {
                    return arguments.length ? (f = +b,
                        a) : f
                },
                a.shapePadding = function(b) {
                    return arguments.length ? (g = +b,
                        a) : g
                },
                a.labels = function(b) {
                    return arguments.length ? (i = b,
                        a) : i
                },
                a.labelAlign = function(b) {
                    return arguments.length ? (("start" == b || "end" == b || "middle" == b) && (n = b),
                        a) : n
                },
                a.labelFormat = function(b) {
                    return arguments.length ? (l = b,
                        a) : l
                },
                a.labelOffset = function(b) {
                    return arguments.length ? (m = +b,
                        a) : m
                },
                a.labelDelimiter = function(b) {
                    return arguments.length ? (o = b,
                        a) : o
                },
                a.orient = function(b) {
                    return arguments.length ? (b = b.toLowerCase(),
                        ("horizontal" == b || "vertical" == b) && (p = b),
                        a) : p
                },
                a.ascending = function(b) {
                    return arguments.length ? (q = !!b,
                        a) : q
                },
                a.classPrefix = function(b) {
                    return arguments.length ? (j = b,
                        a) : j
                },
                a.title = function(b) {
                    return arguments.length ? (k = b,
                        a) : k
                },
                d3.rebind(a, r, "on"),
                a
        }
    }, {
        "./legend": 2
    }],
    4: [function(a, b, c) {
        var d = a("./legend");
        b.exports = function() {
            function a(a) {
                var t = d.d3_calcType(b, r, i, j, m, p),
                    u = a.selectAll("g").data([b]);
                u.enter().append("g").attr("class", k + "legendCells");
                var v = u.selectAll("." + k + "cell").data(t.data),
                    w = v.enter().append("g", ".cell").attr("class", k + "cell").style("opacity", 1e-6),
                    x = (w.append(c).attr("class", k + "swatch"),
                        v.select("g." + k + "cell " + c));
                d.d3_addEvents(w, s),
                    v.exit().transition().style("opacity", 0).remove(),
                    d.d3_drawShapes(c, x, f, e, g, t.feature),
                    d.d3_addText(u, w, t.labels, k);
                var y, z, A = v.select("text"),
                    B = x[0].map(function(a) {
                        return a.getBBox()
                    }),
                    C = d3.max(B, function(a) {
                        return a.height
                    }),
                    D = d3.max(B, function(a) {
                        return a.width
                    }),
                    E = "start" == n ? 0 : "middle" == n ? .5 : 1;
                "vertical" === q ? (y = function(a, b) {
                            return "translate(0, " + b * (C + h) + ")"
                        },
                        z = function(a, b) {
                            return "translate(" + (D + o) + "," + (B[b].y + B[b].height / 2 + 5) + ")"
                        }
                    ) : "horizontal" === q && (y = function(a, b) {
                            return "translate(" + b * (D + h) + ",0)"
                        },
                        z = function(a, b) {
                            return "translate(" + (B[b].width * E + B[b].x) + "," + (C + o) + ")"
                        }
                    ),
                    d.d3_placement(q, v, y, A, z, n),
                    d.d3_title(a, u, l, k),
                    v.transition().style("opacity", 1)
            }
            var b = d3.scale.linear(),
                c = "path",
                e = 15,
                f = 15,
                g = 10,
                h = 5,
                i = [5],
                j = [],
                k = "",
                l = "",
                m = d3.format(".01f"),
                n = "middle",
                o = 10,
                p = "to",
                q = "vertical",
                r = !1,
                s = d3.dispatch("cellover", "cellout", "cellclick");
            return a.scale = function(c) {
                    return arguments.length ? (b = c,
                        a) : b
                },
                a.cells = function(b) {
                    return arguments.length ? ((b.length > 1 || b >= 2) && (i = b),
                        a) : i
                },
                a.shapePadding = function(b) {
                    return arguments.length ? (h = +b,
                        a) : h
                },
                a.labels = function(b) {
                    return arguments.length ? (j = b,
                        a) : j
                },
                a.labelAlign = function(b) {
                    return arguments.length ? (("start" == b || "end" == b || "middle" == b) && (n = b),
                        a) : n
                },
                a.labelFormat = function(b) {
                    return arguments.length ? (m = b,
                        a) : m
                },
                a.labelOffset = function(b) {
                    return arguments.length ? (o = +b,
                        a) : o
                },
                a.labelDelimiter = function(b) {
                    return arguments.length ? (p = b,
                        a) : p
                },
                a.orient = function(b) {
                    return arguments.length ? (b = b.toLowerCase(),
                        ("horizontal" == b || "vertical" == b) && (q = b),
                        a) : q
                },
                a.ascending = function(b) {
                    return arguments.length ? (r = !!b,
                        a) : r
                },
                a.classPrefix = function(b) {
                    return arguments.length ? (k = b,
                        a) : k
                },
                a.title = function(b) {
                    return arguments.length ? (l = b,
                        a) : l
                },
                d3.rebind(a, s, "on"),
                a
        }
    }, {
        "./legend": 2
    }],
    5: [function(a, b, c) {
        d3.legend = {
            color: a("./color"),
            size: a("./size"),
            symbol: a("./symbol")
        }
    }, {
        "./color": 1,
        "./size": 3,
        "./symbol": 4
    }]
}, {}, [5]);
