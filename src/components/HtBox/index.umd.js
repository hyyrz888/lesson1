!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports, require("vue"))
    : "function" == typeof define && define.amd
    ? define(["exports", "vue"], t)
    : t(
        ((e = "undefined" != typeof globalThis ? globalThis : e || self).HtBox =
          {}),
        e.vue
      );
})(this, function (e, t) {
  "use strict";
  var o = t.defineComponent({
    name: "HtTitle",
    props: {
      data: { type: Object, required: !0, default: () => ({ title: "" }) },
    },
  });
  const a = t.createElementVNode("div", { class: "title-line" }, null, -1);
  (o.render = function (e, o, n, l, r, d) {
    return (
      t.openBlock(),
      t.createElementBlock(
        "div",
        {
          class: t.normalizeClass(`ht-title ht-title-${e.data.type || 0}`),
          style: t.normalizeStyle(e.data.style),
        },
        [
          1 === e.data?.type
            ? (t.openBlock(),
              t.createElementBlock(
                "div",
                {
                  key: 0,
                  class: "f-mr8",
                  style: t.normalizeStyle(e.data.prependStyle),
                },
                [
                  t.createCommentVNode(" 前置插槽 "),
                  t.renderSlot(e.$slots, "prepend", {}, () => [a]),
                ],
                4
              ))
            : t.createCommentVNode("v-if", !0),
          t.createElementVNode(
            "div",
            {
              class: "title-title f-txtell",
              style: t.normalizeStyle(e.data.titleStyle),
            },
            [
              t.createCommentVNode(" 标题插槽 "),
              t.renderSlot(e.$slots, "default", {}, () => [
                t.createTextVNode(t.toDisplayString(e.data.title), 1),
              ]),
            ],
            4
          ),
          e.data.description || e.$slots.description
            ? (t.openBlock(),
              t.createElementBlock(
                "div",
                {
                  key: 1,
                  class: "title-description f-txtell",
                  style: t.normalizeStyle(e.data.descriptionStyle),
                },
                [
                  t.createCommentVNode(" 描述插槽 "),
                  t.renderSlot(e.$slots, "description", {}, () => [
                    t.createTextVNode(t.toDisplayString(e.data.description), 1),
                  ]),
                ],
                4
              ))
            : t.createCommentVNode("v-if", !0),
          t.createElementVNode(
            "div",
            {
              class: "title-append",
              style: t.normalizeStyle(e.data.appendStyle),
            },
            [
              t.createCommentVNode(" 后置插槽 "),
              t.renderSlot(e.$slots, "append"),
            ],
            4
          ),
        ],
        6
      )
    );
  }),
    (o.__file = "src/HtTitle/index.vue"),
    (o.install = (e) => {
      e.component(o.name, o);
    });
  const n = o;
  var l = t.defineComponent({
    name: "HtIcon",
    props: {
      data: { type: Object, required: !0, default: () => ({ name: "" }) },
    },
    setup: (e, { emit: t }) => ({
      onClick: (e) => {
        t("on-click", e);
      },
    }),
  });
  (l.render = function (e, o, a, n, l, r) {
    return (
      t.openBlock(),
      t.createElementBlock(
        "div",
        {
          class: "ht-icon",
          onClick: o[0] || (o[0] = (...t) => e.onClick && e.onClick(...t)),
        },
        [
          t.createElementVNode(
            "i",
            {
              class: t.normalizeClass(
                `${e.data.name?.substring?.(
                  0,
                  e.data.name?.indexOf?.("-icon-") + 5
                )} ${e.data.name}`
              ),
              style: t.normalizeStyle(
                `${e.data.style};color:${e.data.color};font-size:${e.data.size}px`
              ),
            },
            null,
            6
          ),
          t.createElementVNode(
            "span",
            {
              class: t.normalizeClass([
                "label",
                { "f-ml4": e.$slots.default || e.data.content },
              ]),
            },
            [
              t.createCommentVNode(" 默认内容插槽 "),
              t.renderSlot(e.$slots, "default", {}, () => [
                t.createTextVNode(t.toDisplayString(e.data.content), 1),
              ]),
            ],
            2
          ),
        ]
      )
    );
  }),
    (l.__file = "src/HtIcon/index.vue"),
    (l.install = (e) => {
      e.component(l.name, l);
    });
  const r = l;
  var d = t.defineComponent({
    name: "HtDrawerBox",
    components: { HtTitle: n, HtIcon: r },
    props: {
      data: {
        type: Object,
        required: !0,
        default: () => ({ hideSpread: !1, isSpread: !0, title: "" }),
      },
    },
    setup(e, { emit: o }) {
      const a = t.ref(e.data.isSpread ?? !0);
      e.data.hideSpread && (a.value = !0);
      return {
        isSpread: a,
        onSpread: () => {
          (a.value = !a.value), o("on-spread", a.value);
        },
      };
    },
  });
  const i = { class: "drawer-box-append" },
    s = { class: "drawer-box-content f-trans f-oh" };
  (d.render = function (e, o, a, n, l, r) {
    const d = t.resolveComponent("ht-icon"),
      c = t.resolveComponent("ht-title");
    return (
      t.openBlock(),
      t.createElementBlock(
        "div",
        {
          class: t.normalizeClass(
            "ht-drawer-box " + (e.isSpread ? "ht-drawer-box-spread" : "")
          ),
        },
        [
          t.createVNode(
            c,
            {
              data: {
                prependStyle: e.data?.prependStyle,
                titleStyle: e.data?.titleStyle,
                descriptionStyle: e.data?.descriptionStyle,
                appendStyle: e.data?.appendStyle,
                type: e.data?.titleType || 0,
              },
            },
            {
              prepend: t.withCtx(() => [
                t.createCommentVNode(" 前置插槽 "),
                t.renderSlot(e.$slots, "titlePrepend"),
              ]),
              description: t.withCtx(() => [
                t.createCommentVNode(" 描述插槽 "),
                t.renderSlot(e.$slots, "description", {}, () => [
                  t.createTextVNode(t.toDisplayString(e.data.description), 1),
                ]),
              ]),
              append: t.withCtx(() => [
                t.createElementVNode("div", i, [
                  t.createCommentVNode(" 后置插槽 "),
                  t.renderSlot(e.$slots, "titleAppend"),
                  e.data.hideSpread
                    ? t.createCommentVNode("v-if", !0)
                    : (t.openBlock(),
                      t.createElementBlock(
                        "div",
                        {
                          key: 0,
                          class: "drawer-box-spreadIcon f-curp f-unselect",
                          onClick:
                            o[0] ||
                            (o[0] = (...t) => e.onSpread && e.onSpread(...t)),
                        },
                        [
                          t.createCommentVNode(" 展开/收起 入口插槽 "),
                          t.renderSlot(
                            e.$slots,
                            "spread",
                            { scope: { isSpread: e.isSpread } },
                            () => [
                              t.createVNode(
                                d,
                                {
                                  data: {
                                    name: e.isSpread
                                      ? "u-icon-arrow-down"
                                      : "u-icon-arrow-up",
                                    size: 14,
                                  },
                                },
                                null,
                                8,
                                ["data"]
                              ),
                            ]
                          ),
                        ]
                      )),
                ]),
              ]),
              default: t.withCtx(() => [
                t.renderSlot(e.$slots, "title", {}, () => [
                  t.createTextVNode(t.toDisplayString(e.data.title), 1),
                ]),
              ]),
              _: 3,
            },
            8,
            ["data"]
          ),
          t.createElementVNode("div", s, [
            t.createCommentVNode("展开/收起 内容插槽"),
            t.renderSlot(e.$slots, "default"),
          ]),
        ],
        2
      )
    );
  }),
    (d.__file = "src/HtDrawerBox/index.vue"),
    (d.install = (e) => {
      e.component(d.name, d);
    });
  const c = d;
  var p = t.defineComponent({
    name: "HtCardBox",
    props: { data: { type: Object, required: !1, default: () => ({}) } },
  });
  const m = { key: 0, class: "card-box-header" },
    u = { class: "card-box-content" };
  (p.render = function (e, o, a, n, l, r) {
    const d = t.resolveComponent("ht-title");
    return (
      t.openBlock(),
      t.createElementBlock(
        "div",
        {
          class: t.normalizeClass(
            `ht-card-box ht-card-box-${e.data.type || "default"} f-trans`
          ),
          style: t.normalizeStyle(e.data.style),
        },
        [
          e.data.title
            ? (t.openBlock(),
              t.createElementBlock("div", m, [
                t.createVNode(
                  d,
                  { data: { type: e.data.titleType || 0 } },
                  {
                    description: t.withCtx(() => [
                      t.createCommentVNode(" 描述插槽 "),
                      t.renderSlot(e.$slots, "description", {}, () => [
                        t.createTextVNode(
                          t.toDisplayString(e.data.description),
                          1
                        ),
                      ]),
                    ]),
                    append: t.withCtx(() => [
                      t.createCommentVNode(" 标题后置插槽 "),
                      t.renderSlot(e.$slots, "titleAppend"),
                    ]),
                    default: t.withCtx(() => [
                      t.renderSlot(e.$slots, "title", {}, () => [
                        t.createTextVNode(t.toDisplayString(e.data.title), 1),
                      ]),
                    ]),
                    _: 3,
                  },
                  8,
                  ["data"]
                ),
              ]))
            : t.createCommentVNode("v-if", !0),
          t.createElementVNode("div", u, [
            t.createCommentVNode(" 默认内容插槽 "),
            t.renderSlot(e.$slots, "default"),
          ]),
        ],
        6
      )
    );
  }),
    (p.__file = "src/HtCardBox/index.vue"),
    (p.install = (e) => {
      e.component(p.name, p);
    });
  const C = p;
  var S = t.defineComponent({
    name: "HtBox",
    components: { HtDrawerBox: c, HtCardBox: C },
    props: { data: { type: Object, required: !1, default: () => ({}) } },
  });
  (S.render = function (e, o, a, n, l, r) {
    const d = t.resolveComponent("ht-drawer-box"),
      i = t.resolveComponent("ht-card-box");
    return (
      t.openBlock(),
      t.createElementBlock(
        "div",
        { class: "ht-box", style: t.normalizeStyle(e.data.style) },
        [
          t.createCommentVNode(" 收缩盒子 "),
          "drawerBox" === e.data.type
            ? (t.openBlock(),
              t.createBlock(
                d,
                { key: 0, data: e.data },
                {
                  titlePrepend: t.withCtx(() => [
                    t.createCommentVNode(" 标题前置插槽 "),
                    t.renderSlot(e.$slots, "titlePrepend"),
                  ]),
                  title: t.withCtx(() => [
                    t.createCommentVNode(" 标题插槽 "),
                    t.renderSlot(e.$slots, "title"),
                  ]),
                  description: t.withCtx(() => [
                    t.createCommentVNode(" 描述插槽 "),
                    t.renderSlot(e.$slots, "description"),
                  ]),
                  titleAppend: t.withCtx(() => [
                    t.createCommentVNode(" 标题后置插槽 "),
                    t.renderSlot(e.$slots, "titleAppend"),
                  ]),
                  spread: t.withCtx((o) => [
                    t.createCommentVNode(" 展开/收起 入口插槽 "),
                    t.renderSlot(e.$slots, "spread", { scope: o.scope }),
                  ]),
                  default: t.withCtx(() => [t.renderSlot(e.$slots, "default")]),
                  _: 3,
                },
                8,
                ["data"]
              ))
            : (t.openBlock(),
              t.createElementBlock(
                t.Fragment,
                { key: 1 },
                [
                  t.createCommentVNode(" 卡片盒子 "),
                  t.createVNode(
                    i,
                    { data: e.data },
                    {
                      title: t.withCtx(() => [
                        t.createCommentVNode(" 标题插槽 "),
                        t.renderSlot(e.$slots, "title"),
                      ]),
                      description: t.withCtx(() => [
                        t.createCommentVNode(" 描述插槽 "),
                        t.renderSlot(e.$slots, "description"),
                      ]),
                      titleAppend: t.withCtx(() => [
                        t.createCommentVNode(" 操作行为插槽 "),
                        t.renderSlot(e.$slots, "titleAppend"),
                      ]),
                      default: t.withCtx(() => [
                        t.renderSlot(e.$slots, "default"),
                      ]),
                      _: 3,
                    },
                    8,
                    ["data"]
                  ),
                ],
                64
              )),
        ],
        4
      )
    );
  }),
    (S.__file = "src/HtBox/index.vue"),
    (S.install = (e) => {
      e.component(S.name, S);
    });
  const f = S;
  (e.default = f), Object.defineProperty(e, "__esModule", { value: !0 });
});
