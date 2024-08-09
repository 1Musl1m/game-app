import { tv } from 'tailwind-variants';
import { useSSRContext, defineComponent, ref, withCtx, createTextVNode, createVNode, unref, mergeProps, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { Primitive } from 'radix-vue';
import { r as reactiveOmit, _ as _sfc_main$3 } from './Button-BKaP7OWY.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-D1zm17Ab.mjs';
import __nuxt_component_3 from './index-CMfppsmG.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'module';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { default: "header" },
    class: {},
    sticky: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const styles = tv({
      base: "z-20 border-b bg-background/90 backdrop-blur",
      variants: {
        sticky: {
          true: "sticky top-0"
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        class: unref(styles)({ sticky: _ctx.sticky, class: props.class })
      }, ("reactiveOmit" in _ctx ? _ctx.reactiveOmit : unref(reactiveOmit))(props, "class"), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Container",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { default: "div" },
    class: {}
  },
  setup(__props) {
    const props = __props;
    const styles = tv({
      base: "container mx-auto"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        class: unref(styles)({ class: props.class })
      }, ("reactiveOmit" in _ctx ? _ctx.reactiveOmit : unref(reactiveOmit))(props, "class"), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Container.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const userName = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiNavbar = _sfc_main$2;
      const _component_UiContainer = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiButton = _sfc_main$3;
      const _component_Icon = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UiNavbar, { sticky: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiContainer, { class: "flex h-14 items-center justify-between" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    class: "text-lg font-semibold",
                    to: "/"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Ashanti`);
                      } else {
                        return [
                          createTextVNode("Ashanti")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiButton, {
                    onClick: ($event) => _ctx.$colorMode.preference = _ctx.$colorMode.value == "dark" ? "light" : "dark",
                    size: "icon-sm",
                    variant: "ghost",
                    title: "\u0426\u0432\u0435\u0442 \u0444\u043E\u043D\u0430"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="sr-only"${_scopeId3}>\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0446\u0432\u0435\u0442</span>`);
                        _push4(ssrRenderComponent(_component_Icon, {
                          class: "h-4 w-4",
                          name: "lucide:sun-medium"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("span", { class: "sr-only" }, "\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0446\u0432\u0435\u0442"),
                          createVNode(_component_Icon, {
                            class: "h-4 w-4",
                            name: "lucide:sun-medium"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_NuxtLink, {
                      class: "text-lg font-semibold",
                      to: "/"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Ashanti")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UiButton, {
                        onClick: ($event) => _ctx.$colorMode.preference = _ctx.$colorMode.value == "dark" ? "light" : "dark",
                        size: "icon-sm",
                        variant: "ghost",
                        title: "\u0426\u0432\u0435\u0442 \u0444\u043E\u043D\u0430"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "sr-only" }, "\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0446\u0432\u0435\u0442"),
                          createVNode(_component_Icon, {
                            class: "h-4 w-4",
                            name: "lucide:sun-medium"
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiContainer, { class: "flex h-14 items-center justify-between" }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtLink, {
                    class: "text-lg font-semibold",
                    to: "/"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Ashanti")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_UiButton, {
                      onClick: ($event) => _ctx.$colorMode.preference = _ctx.$colorMode.value == "dark" ? "light" : "dark",
                      size: "icon-sm",
                      variant: "ghost",
                      title: "\u0426\u0432\u0435\u0442 \u0444\u043E\u043D\u0430"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "sr-only" }, "\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0446\u0432\u0435\u0442"),
                        createVNode(_component_Icon, {
                          class: "h-4 w-4",
                          name: "lucide:sun-medium"
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-2xl font-semibold lg:text-3xl">\u041F\u0440\u0438\u0432\u0435\u0442, ${ssrInterpolate(unref(userName))}</h1></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DS5B4_Sl.mjs.map
