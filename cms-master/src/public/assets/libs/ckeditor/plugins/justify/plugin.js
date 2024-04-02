/*
 Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
(function () {
    function q(a, c) {
        c = void 0 === c || c;
        var b;
        if (c) b = a.getComputedStyle("text-align");
        else {
            for (
                ;
                !a.hasAttribute ||
                (!a.hasAttribute("align") && !a.getStyle("text-align"));
            ) {
                b = a.getParent();
                if (!b) break;
                a = b;
            }
            b = a.getStyle("text-align") || a.getAttribute("align") || "";
        }
        b && (b = b.replace(/(?:-(?:moz|webkit)-)?(?:start|auto)/i, ""));
        !b &&
        c &&
        (b = "rtl" == a.getComputedStyle("direction") ? "right" : "left");
        return b;
    }

    function h(a, c, b) {
        this.editor = a;
        this.name = c;
        this.value = b;
        this.context = "p";
        c = a.config.justifyClasses;
        var f = a.config.enterMode == CKEDITOR.ENTER_P ? "p" : "div";
        if (c) {
            switch (b) {
                case "left":
                    this.cssClassName = c[0];
                    break;
                case "center":
                    this.cssClassName = c[1];
                    break;
                case "right":
                    this.cssClassName = c[2];
                    break;
                case "justify":
                    this.cssClassName = c[3];
            }
            this.cssClassRegex = new RegExp(
                "(?:^|\\s+)(?:" + c.join("|") + ")(?\x3d$|\\s)"
            );
            this.requiredContent = f + "(" + this.cssClassName + ")";
        } else this.requiredContent = f + "{text-align}";
        this.allowedContent = {
            "caption div h1 h2 h3 h4 h5 h6 p pre td th li": {
                propertiesOnly: !0,
                styles: this.cssClassName ? null : "text-align",
                classes: this.cssClassName || null,
            },
        };
        a.config.enterMode == CKEDITOR.ENTER_BR && (this.allowedContent.div = !0);
    }

    function m(a) {
        var c = a.editor,
            b = c.createRange();
        b.setStartBefore(a.data.node);
        b.setEndAfter(a.data.node);
        for (var f = new CKEDITOR.dom.walker(b), d; (d = f.next());)
            if (d.type == CKEDITOR.NODE_ELEMENT)
                if (!d.equals(a.data.node) && d.getDirection())
                    b.setStartAfter(d), (f = new CKEDITOR.dom.walker(b));
                else {
                    var e = c.config.justifyClasses;
                    e &&
                    (d.hasClass(e[0])
                        ? (d.removeClass(e[0]), d.addClass(e[2]))
                        : d.hasClass(e[2]) && (d.removeClass(e[2]), d.addClass(e[0])));
                    e = d.getStyle("text-align");
                    "left" == e
                        ? d.setStyle("text-align", "right")
                        : "right" == e && d.setStyle("text-align", "left");
                }
    }

    h.prototype = {
        exec: function (a) {
            var c = a.getSelection(),
                b = a.config.enterMode;
            if (c) {
                for (
                    var f = c.createBookmarks(),
                        d = c.getRanges(),
                        e = this.cssClassName,
                        h,
                        g,
                        k = a.config.useComputedState,
                        k = void 0 === k || k,
                        n = d.length - 1;
                    0 <= n;
                    n--
                )
                    for (
                        h = d[n].createIterator(), h.enlargeBr = b != CKEDITOR.ENTER_BR;
                        (g = h.getNextParagraph(b == CKEDITOR.ENTER_P ? "p" : "div"));
                    )
                        if (!g.isReadOnly()) {
                            var l = g.getName(),
                                p;
                            p = a.activeFilter.check(l + "{text-align}");
                            if ((l = a.activeFilter.check(l + "(" + e + ")")) || p) {
                                g.removeAttribute("align");
                                g.removeStyle("text-align");
                                var m =
                                        e &&
                                        (g.$.className = CKEDITOR.tools.ltrim(
                                            g.$.className.replace(this.cssClassRegex, "")
                                        )),
                                    r =
                                        this.state == CKEDITOR.TRISTATE_OFF &&
                                        (!k || q(g, !0) != this.value);
                                e && l
                                    ? r
                                        ? g.addClass(e)
                                        : m || g.removeAttribute("class")
                                    : r && p && g.setStyle("text-align", this.value);
                            }
                        }
                a.focus();
                a.forceNextSelectionCheck();
                c.selectBookmarks(f);
            }
        },
        refresh: function (a, c) {
            var b = c.block || c.blockLimit,
                f = b.getName(),
                d = b.equals(a.editable()),
                f = this.cssClassName
                    ? a.activeFilter.check(f + "(" + this.cssClassName + ")")
                    : a.activeFilter.check(f + "{text-align}");
            d && 1 === c.elements.length
                ? this.setState(CKEDITOR.TRISTATE_OFF)
                : !d && f
                    ? this.setState(
                        q(b, this.editor.config.useComputedState) == this.value
                            ? CKEDITOR.TRISTATE_ON
                            : CKEDITOR.TRISTATE_OFF
                    )
                    : this.setState(CKEDITOR.TRISTATE_DISABLED);
        },
    };
    CKEDITOR.plugins.add("justify", {
        icons: "justifyblock,justifycenter,justifyleft,justifyright",
        hidpi: !0,
        init: function (a) {
            if (!a.blockless) {
                var c = new h(a, "justifyleft", "left"),
                    b = new h(a, "justifycenter", "center"),
                    f = new h(a, "justifyright", "right"),
                    d = new h(a, "justifyblock", "justify");
                a.addCommand("justifyleft", c);
                a.addCommand("justifycenter", b);
                a.addCommand("justifyright", f);
                a.addCommand("justifyblock", d);
                a.ui.addButton &&
                (a.ui.addButton("JustifyLeft", {
                    label: a.lang.common.alignLeft,
                    command: "justifyleft",
                    toolbar: "align,10",
                }),
                    a.ui.addButton("JustifyCenter", {
                        label: a.lang.common.center,
                        command: "justifycenter",
                        toolbar: "align,20",
                    }),
                    a.ui.addButton("JustifyRight", {
                        label: a.lang.common.alignRight,
                        command: "justifyright",
                        toolbar: "align,30",
                    }),
                    a.ui.addButton("JustifyBlock", {
                        label: a.lang.common.justify,
                        command: "justifyblock",
                        toolbar: "align,40",
                    }));
                a.on("dirChanged", m);
            }
        },
    });
})();
