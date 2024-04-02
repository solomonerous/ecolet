!(function () {
    var f,
        c,
        u,
        p,
        d,
        s = [];
    (d = "undefined" != typeof global ? global : window), (p = d.jQuery);
    var v = function () {
        return d.tinymce;
    };
    (p.fn.tinymce = function (o) {
        var e,
            t,
            i,
            l = this,
            r = "";
        if (!l.length) return l;
        if (!o) return v() ? v().get(l[0].id) : null;
        l.css("visibility", "hidden");
        var n = function () {
            var a = [],
                c = 0;
            u || (m(), (u = !0)),
                l.each(function (e, t) {
                    var n,
                        i = t.id,
                        r = o.oninit;
                    i || (t.id = i = v().DOM.uniqueId()),
                    v().get(i) ||
                    ((n = v().createEditor(i, o)),
                        a.push(n),
                        n.on("init", function () {
                            var e,
                                t = r;
                            l.css("visibility", ""),
                            r &&
                            ++c == a.length &&
                            ("string" == typeof t &&
                            ((e =
                                -1 === t.indexOf(".")
                                    ? null
                                    : v().resolve(t.replace(/\.\w+$/, ""))),
                                (t = v().resolve(t))),
                                t.apply(e || v(), a));
                        }));
                }),
                p.each(a, function (e, t) {
                    t.render();
                });
        };
        if (d.tinymce || c || !(e = o.script_url)) 1 === c ? s.push(n) : n();
        else {
            (c = 1),
                (t = e.substring(0, e.lastIndexOf("/"))),
            -1 != e.indexOf(".min") && (r = ".min"),
                (d.tinymce = d.tinyMCEPreInit || {base: t, suffix: r}),
            -1 != e.indexOf("gzip") &&
            ((i = o.language || "en"),
                (e =
                    e +
                    (/\?/.test(e) ? "&" : "?") +
                    "js=true&core=true&suffix=" +
                    escape(r) +
                    "&themes=" +
                    escape(o.theme || "modern") +
                    "&plugins=" +
                    escape(o.plugins || "") +
                    "&languages=" +
                    (i || "")),
            d.tinyMCE_GZ ||
            (d.tinyMCE_GZ = {
                start: function () {
                    var n = function (e) {
                        v().ScriptLoader.markDone(v().baseURI.toAbsolute(e));
                    };
                    n("langs/" + i + ".js"),
                        n("themes/" + o.theme + "/theme" + r + ".js"),
                        n("themes/" + o.theme + "/langs/" + i + ".js"),
                        p.each(o.plugins.split(","), function (e, t) {
                            t &&
                            (n("plugins/" + t + "/plugin" + r + ".js"),
                                n("plugins/" + t + "/langs/" + i + ".js"));
                        });
                },
                end: function () {
                },
            }));
            var a = document.createElement("script");
            (a.type = "text/javascript"),
                (a.onload = a.onreadystatechange =
                    function (e) {
                        (e = e || window.event),
                        2 === c ||
                        ("load" != e.type && !/complete|loaded/.test(a.readyState)) ||
                        ((v().dom.Event.domLoaded = 1),
                            (c = 2),
                        o.script_loaded && o.script_loaded(),
                            n(),
                            p.each(s, function (e, t) {
                                t();
                            }));
                    }),
                (a.src = e),
                document.body.appendChild(a);
        }
        return l;
    }),
        p.extend(p.expr[":"], {
            tinymce: function (e) {
                var t;
                return !!(
                    e.id &&
                    "tinymce" in d &&
                    (t = v().get(e.id)) &&
                    t.editorManager === v()
                );
            },
        });
    var m = function () {
        var r = function (e) {
                "remove" === e &&
                this.each(function (e, t) {
                    var n = l(t);
                    n && n.remove();
                }),
                    this.find("span.mceEditor,div.mceEditor").each(function (e, t) {
                        var n = v().get(t.id.replace(/_parent$/, ""));
                        n && n.remove();
                    });
            },
            o = function (i) {
                var e,
                    t = this;
                if (null != i)
                    r.call(t),
                        t.each(function (e, t) {
                            var n;
                            (n = v().get(t.id)) && n.setContent(i);
                        });
                else if (0 < t.length && (e = v().get(t[0].id))) return e.getContent();
            },
            l = function (e) {
                var t = null;
                return e && e.id && d.tinymce && (t = v().get(e.id)), t;
            },
            u = function (e) {
                return !!(e && e.length && d.tinymce && e.is(":tinymce"));
            },
            s = {};
        p.each(["text", "html", "val"], function (e, t) {
            var a = (s[t] = p.fn[t]),
                c = "text" === t;
            p.fn[t] = function (e) {
                var t = this;
                if (!u(t)) return a.apply(t, arguments);
                if (e !== f)
                    return (
                        o.call(t.filter(":tinymce"), e),
                            a.apply(t.not(":tinymce"), arguments),
                            t
                    );
                var i = "",
                    r = arguments;
                return (
                    (c ? t : t.eq(0)).each(function (e, t) {
                        var n = l(t);
                        i += n
                            ? c
                                ? n.getContent().replace(/<(?:"[^"]*"|'[^']*'|[^'">])*>/g, "")
                                : n.getContent({save: !0})
                            : a.apply(p(t), r);
                    }),
                        i
                );
            };
        }),
            p.each(["append", "prepend"], function (e, t) {
                var n = (s[t] = p.fn[t]),
                    r = "prepend" === t;
                p.fn[t] = function (i) {
                    var e = this;
                    return u(e)
                        ? i !== f
                            ? ("string" == typeof i &&
                            e.filter(":tinymce").each(function (e, t) {
                                var n = l(t);
                                n &&
                                n.setContent(r ? i + n.getContent() : n.getContent() + i);
                            }),
                                n.apply(e.not(":tinymce"), arguments),
                                e)
                            : void 0
                        : n.apply(e, arguments);
                };
            }),
            p.each(["remove", "replaceWith", "replaceAll", "empty"], function (e, t) {
                var n = (s[t] = p.fn[t]);
                p.fn[t] = function () {
                    return r.call(this, t), n.apply(this, arguments);
                };
            }),
            (s.attr = p.fn.attr),
            (p.fn.attr = function (e, t) {
                var n = this,
                    i = arguments;
                if (!e || "value" !== e || !u(n)) return s.attr.apply(n, i);
                if (t !== f)
                    return (
                        o.call(n.filter(":tinymce"), t),
                            s.attr.apply(n.not(":tinymce"), i),
                            n
                    );
                var r = n[0],
                    a = l(r);
                return a ? a.getContent({save: !0}) : s.attr.apply(p(r), i);
            });
    };
})();
