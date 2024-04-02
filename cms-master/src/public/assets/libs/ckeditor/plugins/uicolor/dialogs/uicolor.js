/*
 Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.dialog.add("uicolor", function (f) {
    function B(a) {
        a = a.data.getTarget();
        var c;
        "td" == a.getName() && (c = a.getChild(0).getHtml()) && (n(), r(a), m(c));
    }

    function r(a) {
        a &&
        ((g = a),
            g.setAttribute("aria-selected", !0),
            g.addClass("cke_colordialog_selected"));
    }

    function n() {
        g &&
        (g.removeClass("cke_colordialog_selected"),
            g.removeAttribute("aria-selected"),
            (g = null));
    }

    function m(a) {
        k.getContentElement("picker", "selectedColor").setValue(a);
        a || l.getById(t).removeStyle("background-color");
    }

    function C(a) {
        !a.name && (a = new CKEDITOR.event(a));
        var c = !/mouse/.test(a.name),
            b = a.data.getTarget(),
            h;
        "td" == b.getName() &&
        (h = b.getChild(0).getHtml()) &&
        (u(a),
            c ? (e = b) : (D = b),
        c &&
        b.addClass(
            G(h)
                ? "cke_colordialog_focused_light"
                : "cke_colordialog_focused_dark"
        ),
            v(h));
    }

    function u(a) {
        if ((a = !/mouse/.test(a.name) && e))
            a.removeClass("cke_colordialog_focused_light"),
                a.removeClass("cke_colordialog_focused_dark");
        e || D || v(!1);
    }

    function v(a) {
        a
            ? (l.getById(w).setStyle("background-color", a), l.getById(x).setHtml(a))
            : (l.getById(w).removeStyle("background-color"),
                l.getById(x).setHtml("\x26nbsp;"));
    }

    function G(a) {
        a = a.replace(/^#/, "");
        for (var c = 0, b = []; 2 >= c; c++)
            b[c] = parseInt(a.substr(2 * c, 2), 16);
        return 165 <= 0.2126 * b[0] + 0.7152 * b[1] + 0.0722 * b[2];
    }

    function H(a) {
        var c = a.data,
            b = c.getTarget(),
            h = c.getKeystroke(),
            d = "rtl" == f.lang.dir;
        switch (h) {
            case 38:
                if ((a = b.getParent().getPrevious()))
                    (a = a.getChild([b.getIndex()])), a.focus();
                c.preventDefault();
                break;
            case 40:
                (a = b.getParent().getNext()) &&
                (a = a.getChild([b.getIndex()])) &&
                1 == a.type &&
                a.focus();
                c.preventDefault();
                break;
            case 32:
            case 13:
                B(a);
                c.preventDefault();
                break;
            case d ? 37 : 39:
                (a = b.getNext())
                    ? 1 == a.type && (a.focus(), c.preventDefault(!0))
                    : (a = b.getParent().getNext()) &&
                    (a = a.getChild([0])) &&
                    1 == a.type &&
                    (a.focus(), c.preventDefault(!0));
                break;
            case d ? 39 : 37:
                if ((a = b.getPrevious())) a.focus(), c.preventDefault(!0);
                else if ((a = b.getParent().getPrevious()))
                    (a = a.getLast()), a.focus(), c.preventDefault(!0);
        }
    }

    function p(a) {
        return CKEDITOR.tools.getNextId() + "_" + a;
    }

    function E(a) {
        var c = null;
        q && a && (c = q.findOne('td[data-color\x3d"' + a + '"]'));
        return c;
    }

    function F(a, c) {
        var b = a || c;
        f.setUiColor(b);
        k.getContentElement("picker", "configBox").setValue(b);
        if (a && k.getContentElement("picker", "predefined").getValue() !== b)
            k.getContentElement("picker", "predefined").setValue(b);
        else if (c) {
            var d = E(b);
            d ? r(d) : n();
            k.getContentElement("picker", "selectedColor").getValue() !== b && m(b);
        }
    }

    function y(a) {
        return a.getUiColor()
            ? CKEDITOR.tools.parseCssText("color:" + a.getUiColor(), !0).color
            : null;
    }

    var z = CKEDITOR.dom.element,
        l = CKEDITOR.document,
        d = f.lang.uicolor,
        w = p("hicolor"),
        x = p("hicolortext"),
        t = p("selhicolor"),
        k,
        q,
        g,
        e,
        D;
    q = (function () {
        function a(a, d) {
            for (var A = a; A < a + 3; A++) {
                var f = new z(b.$.insertRow(-1));
                f.setAttribute("role", "row");
                for (var e = d; e < d + 3; e++)
                    for (var g = 0; 6 > g; g++) c(f.$, "#" + h[e] + h[g] + h[A]);
            }
        }

        function c(a, c) {
            var b = new z(a.insertCell(-1));
            b.setAttribute("class", "ColorCell cke_colordialog_colorcell");
            b.setAttribute("tabIndex", -1);
            b.setAttribute("role", "gridcell");
            b.setAttribute("data-color", c);
            b.on("keydown", H);
            b.on("click", B);
            b.on("focus", C);
            b.on("blur", u);
            b.setStyle("background-color", c);
            var d = p("color_table_cell");
            b.setAttribute("aria-labelledby", d);
            b.append(
                CKEDITOR.dom.element.createFromHtml(
                    '\x3cspan id\x3d"' +
                    d +
                    '" class\x3d"cke_voice_label"\x3e' +
                    c +
                    "\x3c/span\x3e",
                    CKEDITOR.document
                )
            );
        }

        var b = CKEDITOR.dom.element.createFromHtml(
            '\x3ctable tabIndex\x3d"-1" class\x3d"cke_colordialog_table" aria-label\x3d"' +
            d.options +
            '" role\x3d"grid" style\x3d"border-collapse:separate;" cellspacing\x3d"0"\x3e\x3ccaption class\x3d"cke_voice_label"\x3e' +
            d.options +
            '\x3c/caption\x3e\x3ctbody role\x3d"presentation"\x3e\x3c/tbody\x3e\x3c/table\x3e'
        );
        b.on("mouseover", C);
        b.on("mouseout", u);
        var h = "00 33 66 99 cc ff".split(" ");
        a(0, 0);
        a(3, 0);
        a(0, 3);
        a(3, 3);
        var e = new z(b.$.insertRow(-1));
        e.setAttribute("role", "row");
        c(e.$, "#000000");
        for (var g = 0; 16 > g; g++) {
            var f = g.toString(16);
            c(e.$, "#" + f + f + f + f + f + f);
        }
        c(e.$, "#ffffff");
        return b;
    })();
    CKEDITOR.document.appendStyleSheet(
        CKEDITOR.getUrl(
            CKEDITOR.plugins.get("uicolor").path + "dialogs/uicolor.css"
        )
    );
    return {
        title: d.title,
        minWidth: 360,
        minHeight: 220,
        buttons: [CKEDITOR.dialog.okButton],
        onLoad: function () {
            k = this;
        },
        onHide: function () {
            n();
            m(null);
            e &&
            (e.removeClass("cke_colordialog_focused_light"),
                e.removeClass("cke_colordialog_focused_dark"),
                (e = null),
                v(null));
        },
        contents: [
            {
                id: "picker",
                label: d.title,
                accessKey: "I",
                elements: [
                    {
                        type: "hbox",
                        padding: 0,
                        widths: ["70%", "10%", "30%"],
                        children: [
                            {
                                type: "html",
                                html: "\x3cdiv\x3e\x3c/div\x3e",
                                onLoad: function () {
                                    CKEDITOR.document.getById(this.domId).append(q);
                                },
                                focus: function () {
                                    var a = y(f),
                                        c = a
                                            ? E(a)
                                            : e ||
                                            this.getElement().getElementsByTag("td").getItem(0);
                                    c && (c && c.focus(), a && (r(c), m(a)));
                                },
                            },
                            {type: "html", html: "\x26nbsp;"},
                            {
                                type: "vbox",
                                padding: 0,
                                widths: ["70%", "5%", "25%"],
                                children: [
                                    {
                                        type: "html",
                                        html:
                                            "\x3cspan\x3e" +
                                            d.highlight +
                                            '\x3c/span\x3e\x3cdiv id\x3d"' +
                                            w +
                                            '" style\x3d"border: 1px solid; height: 74px; width: 74px;"\x3e\x3c/div\x3e\x3cdiv id\x3d"' +
                                            x +
                                            '"\x3e\x26nbsp;\x3c/div\x3e\x3cspan\x3e' +
                                            d.selected +
                                            '\x3c/span\x3e\x3cdiv id\x3d"' +
                                            t +
                                            '" style\x3d"border: 1px solid; height: 20px; width: 74px;"\x3e\x3c/div\x3e',
                                    },
                                    {
                                        type: "text",
                                        label: d.selected,
                                        labelStyle: "display:none",
                                        id: "selectedColor",
                                        style: "width: 76px;margin-top:4px",
                                        onChange: function () {
                                            try {
                                                var a = this.getValue();
                                                a &&
                                                (l.getById(t).setStyle("background-color", a), F(a));
                                            } catch (c) {
                                                n(), m(null);
                                            }
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: "vbox",
                        children: [
                            {
                                type: "hbox",
                                padding: 0,
                                children: [
                                    {
                                        id: "predefined",
                                        type: "select",
                                        default: "",
                                        width: "100%",
                                        label: d.predefined,
                                        items: [
                                            [""],
                                            ["Light blue", "#9ab8f3"],
                                            ["Sand", "#d2b48c"],
                                            ["Metallic", "#949aaa"],
                                            ["Purple", "#c2a3c7"],
                                            ["Olive", "#a2c980"],
                                            ["Happy green", "#9bd446"],
                                            ["Jezebel Blue", "#14b8c4"],
                                            ["Burn", "#ff89a"],
                                            ["Easy red", "#ff6969"],
                                            ["Pisces 3", "#48b4f2"],
                                            ["Aquarius 5", "#487ed4"],
                                            ["Absinthe", "#a8cf76"],
                                            ["Scrambled Egg", "#c7a622"],
                                            ["Hello monday", "#8e8d80"],
                                            ["Lovely sunshine", "#f1e8b1"],
                                            ["Recycled air", "#b3c593"],
                                            ["Down", "#bcbca4"],
                                            ["Mark Twain", "#cfe91d"],
                                            ["Specks of dust", "#d1b596"],
                                            ["Lollipop", "#f6ce23"],
                                        ],
                                        onShow: function () {
                                            this.setValue(y(f));
                                        },
                                        onChange: function () {
                                            var a = this.getValue();
                                            a && (F(null, a), this.focus());
                                        },
                                    },
                                ],
                            },
                            {
                                id: "configBox",
                                type: "text",
                                label: d.config,
                                onShow: function () {
                                    this.getInputElement().setAttribute("readonly", !0);
                                    this.setValue(y(f));
                                },
                                onChange: function () {
                                    var a = this.getValue();
                                    a &&
                                    CKEDITOR.tools.style.parse._findColor(a).length &&
                                    this.setValue(
                                        'config.uiColor \x3d "' + a.toLowerCase() + '"',
                                        !0
                                    );
                                },
                            },
                        ],
                    },
                ],
            },
        ],
    };
});
