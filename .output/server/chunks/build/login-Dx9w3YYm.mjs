import { tv } from 'tailwind-variants';
import { useSSRContext, defineComponent, ref, provide, createElementBlock, computed, mergeProps, unref, isRef, withCtx, createTextVNode, toDisplayString, createVNode, renderSlot, openBlock, createBlock, createCommentVNode, useSlots, getCurrentInstance, watch, nextTick, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSlot, ssrGetDynamicModelProps, ssrRenderClass } from 'vue/server-renderer';
import { Label, useForwardPropsEmits, AvatarImage, AvatarFallback, AvatarRoot, Primitive, Separator } from 'radix-vue';
import { r as reactiveOmit, _ as _sfc_main$9, i as isDef } from './Button-BKaP7OWY.mjs';
import __nuxt_component_3$1 from './index-CMfppsmG.mjs';
import { TransitionSlide } from '@morev/vue-transitions';
import { a as navigateTo, d as useNuxtApp, _ as _export_sfc } from './server.mjs';
import { useField } from 'vee-validate';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import './nuxt-link-D1zm17Ab.mjs';
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
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

function cloneFnJSON(source) {
  return JSON.parse(JSON.stringify(source));
}
function useVModel(props, key, emit, options = {}) {
  var _a, _b, _c;
  const {
    clone = false,
    passive = false,
    eventName,
    deep = false,
    defaultValue,
    shouldEmit
  } = options;
  const vm = getCurrentInstance();
  const _emit = emit || (vm == null ? void 0 : vm.emit) || ((_a = vm == null ? void 0 : vm.$emit) == null ? void 0 : _a.bind(vm)) || ((_c = (_b = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b.$emit) == null ? void 0 : _c.bind(vm == null ? void 0 : vm.proxy));
  let event = eventName;
  event = event || `update:${key.toString()}`;
  const cloneFn = (val) => !clone ? val : typeof clone === "function" ? clone(val) : cloneFnJSON(val);
  const getValue2 = () => isDef(props[key]) ? cloneFn(props[key]) : defaultValue;
  const triggerEmit = (value) => {
    if (shouldEmit) {
      if (shouldEmit(value))
        _emit(event, value);
    } else {
      _emit(event, value);
    }
  };
  if (passive) {
    const initialValue = getValue2();
    const proxy = ref(initialValue);
    let isUpdating = false;
    watch(
      () => props[key],
      (v) => {
        if (!isUpdating) {
          isUpdating = true;
          proxy.value = cloneFn(v);
          nextTick(() => isUpdating = false);
        }
      }
    );
    watch(
      proxy,
      (v) => {
        if (!isUpdating && (v !== props[key] || deep))
          triggerEmit(v);
      },
      { deep }
    );
    return proxy;
  } else {
    return computed({
      get() {
        return getValue2();
      },
      set(value) {
        triggerEmit(value);
      }
    });
  }
}
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Label",
  __ssrInlineRender: true,
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    hint: {}
  },
  setup(__props) {
    const props = __props;
    const styles = tv({
      base: "flex items-center justify-between text-[15px] font-medium leading-none hover:cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sm:text-sm"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Label), mergeProps({
        class: unref(styles)({ class: props.class })
      }, ("reactiveOmit" in _ctx ? _ctx.reactiveOmit : unref(reactiveOmit))(props, "class"), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "hint", {}, () => {
              if (_ctx.hint) {
                _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.hint)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              renderSlot(_ctx.$slots, "hint", {}, () => [
                _ctx.hint ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.hint), 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Label.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    class: {},
    id: {},
    name: {},
    placeholder: {},
    disabled: { type: Boolean },
    required: { type: Boolean },
    type: { default: "text" },
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const localModel = useVModel(props, "modelValue", emits);
    const styles = tv({
      base: "form-input h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:px-1 file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground file:hover:cursor-pointer focus:border-input focus:ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm"
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps(props, {
        class: unref(styles)({ class: props.class })
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(localModel)))))}>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Input.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  name: "TransitionSlide",
  inheritAttrs: false,
  components: { TheTransition: TransitionSlide }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_transition = resolveComponent("the-transition");
  _push(ssrRenderComponent(_component_the_transition, mergeProps(_ctx.$attrs, _attrs), {
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
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.vue-transitions/TransitionSlide.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender]]);
const clientOnlySymbol = Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const ATTR_KEY = "data-n-ids";
const SEPARATOR = "-";
function useId(key) {
  var _a;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [useId] key must be a string.");
  }
  key = `n${key.slice(1)}`;
  const nuxtApp = useNuxtApp();
  const instance = getCurrentInstance();
  if (!instance) {
    throw new TypeError("[nuxt] `useId` must be called within a component setup function.");
  }
  nuxtApp._id || (nuxtApp._id = 0);
  instance._nuxtIdIndex || (instance._nuxtIdIndex = {});
  (_a = instance._nuxtIdIndex)[key] || (_a[key] = 0);
  const instanceIndex = key + SEPARATOR + instance._nuxtIdIndex[key]++;
  {
    const ids = JSON.parse(instance.attrs[ATTR_KEY] || "{}");
    ids[instanceIndex] = key + SEPARATOR + nuxtApp._id++;
    instance.attrs[ATTR_KEY] = JSON.stringify(ids);
    return ids[instanceIndex];
  }
}
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    label: {},
    labelHint: {},
    icon: {},
    hint: {},
    disabled: { type: Boolean },
    modelValue: {},
    name: {},
    id: {},
    rules: {},
    validateOnMount: { type: Boolean },
    type: {},
    placeholder: {},
    required: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const inputId = props.id || useId("$sALGIIvzNJ");
    const hasIcon = computed(() => Boolean(props.icon) || Boolean(useSlots().icon));
    const { errorMessage, value, handleBlur } = useField(() => props.name || inputId, props.rules, {
      initialValue: props.modelValue,
      label: props.label,
      validateOnMount: props.validateOnMount,
      syncVModel: true
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiLabel = _sfc_main$8;
      const _component_Icon = __nuxt_component_3$1;
      const _component_UiInput = _sfc_main$7;
      const _component_TransitionSlide = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
      if (_ctx.label) {
        _push(ssrRenderComponent(_component_UiLabel, {
          for: unref(inputId),
          hint: _ctx.labelHint,
          class: [_ctx.disabled && "text-muted-foreground", unref(errorMessage) && "text-destructive", "mb-2"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.label)} `);
              if (_ctx.required) {
                _push2(`<span class="text-destructive"${_scopeId}>*</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</span>`);
            } else {
              return [
                createVNode("span", null, [
                  createTextVNode(toDisplayString(_ctx.label) + " ", 1),
                  _ctx.required ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-destructive"
                  }, "*")) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative">`);
      ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
        if (unref(hasIcon)) {
          _push(`<span class="absolute inset-y-0 left-3 flex items-center justify-center">`);
          if (_ctx.icon) {
            _push(ssrRenderComponent(_component_Icon, {
              name: _ctx.icon,
              class: "h-4 w-4 text-muted-foreground/70"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(ssrRenderComponent(_component_UiInput, mergeProps({
        id: unref(inputId),
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        type: _ctx.type,
        required: _ctx.required,
        name: _ctx.name,
        disabled: _ctx.disabled
      }, _ctx.$attrs, {
        class: [unref(hasIcon) && "pl-9"],
        placeholder: _ctx.placeholder,
        onBlur: unref(handleBlur)
      }), null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_TransitionSlide, {
        group: "",
        tag: "div"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.hint && !unref(errorMessage)) {
              _push2(`<p class="mt-1.5 text-sm text-muted-foreground"${_scopeId}>${ssrInterpolate(_ctx.hint)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(errorMessage)) {
              _push2(`<p class="mt-1.5 text-sm text-destructive"${_scopeId}>${ssrInterpolate(unref(errorMessage))}</p>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.hint && !unref(errorMessage) ? (openBlock(), createBlock("p", {
                key: "hint",
                class: "mt-1.5 text-sm text-muted-foreground"
              }, toDisplayString(_ctx.hint), 1)) : createCommentVNode("", true),
              unref(errorMessage) ? (openBlock(), createBlock("p", {
                key: "errorMessage",
                class: "mt-1.5 text-sm text-destructive"
              }, toDisplayString(unref(errorMessage)), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Vee/Input.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Image",
  __ssrInlineRender: true,
  props: {
    src: {},
    asChild: { type: Boolean },
    as: {},
    alt: {},
    class: {}
  },
  emits: ["loadingStatusChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);
    const styles = tv({
      base: "aspect-square h-full w-full object-cover"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AvatarImage), mergeProps(unref(forwarded), {
        class: unref(styles)({ class: props.class })
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Avatar/Image.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Fallback",
  __ssrInlineRender: true,
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    fallback: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const styles = tv({
      base: "flex h-full w-full items-center justify-center rounded-full bg-muted font-medium"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AvatarFallback), mergeProps({
        class: unref(styles)({ class: props.class })
      }, ("reactiveOmit" in _ctx ? _ctx.reactiveOmit : unref(reactiveOmit))(props, "class", "fallback"), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`${ssrInterpolate(_ctx.fallback)}`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(_ctx.fallback), 1)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Avatar/Fallback.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Avatar",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    src: {},
    class: { default: void 0 },
    imageClass: { default: void 0 },
    fallbackClass: { default: void 0 },
    alt: { default: void 0 },
    fallback: { default: void 0 },
    delayMs: { default: void 0 }
  },
  emits: ["loadingStatusChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const styles = tv({
      base: "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiAvatarImage = _sfc_main$4;
      const _component_UiAvatarFallback = _sfc_main$3;
      _push(ssrRenderComponent(unref(AvatarRoot), mergeProps({
        as: _ctx.as,
        "as-child": _ctx.asChild,
        class: unref(styles)({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              ssrRenderSlot(_ctx.$slots, "image", {}, () => {
                if (_ctx.src) {
                  _push2(ssrRenderComponent(_component_UiAvatarImage, {
                    src: _ctx.src,
                    alt: _ctx.alt,
                    class: _ctx.imageClass,
                    onLoadingStatusChange: ($event) => emits("loadingStatusChange", $event)
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              ssrRenderSlot(_ctx.$slots, "fallback", {}, () => {
                _push2(ssrRenderComponent(_component_UiAvatarFallback, {
                  "delay-ms": _ctx.delayMs,
                  class: _ctx.fallbackClass,
                  fallback: _ctx.fallback
                }, null, _parent2, _scopeId));
              }, _push2, _parent2, _scopeId);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                renderSlot(_ctx.$slots, "image", {}, () => [
                  _ctx.src ? (openBlock(), createBlock(_component_UiAvatarImage, {
                    key: 0,
                    src: _ctx.src,
                    alt: _ctx.alt,
                    class: _ctx.imageClass,
                    onLoadingStatusChange: ($event) => emits("loadingStatusChange", $event)
                  }, null, 8, ["src", "alt", "class", "onLoadingStatusChange"])) : createCommentVNode("", true)
                ]),
                renderSlot(_ctx.$slots, "fallback", {}, () => [
                  createVNode(_component_UiAvatarFallback, {
                    "delay-ms": _ctx.delayMs,
                    class: _ctx.fallbackClass,
                    fallback: _ctx.fallback
                  }, null, 8, ["delay-ms", "class", "fallback"])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Avatar/Avatar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Divider",
  __ssrInlineRender: true,
  props: {
    class: {},
    type: {},
    orientation: {},
    icon: {},
    label: {},
    avatar: {}
  },
  setup(__props) {
    const props = __props;
    const style = tv({
      slots: {
        base: "flex w-full items-center text-center align-middle",
        container: "flex font-medium",
        border: "flex border-border",
        icon: "h-5 w-5 shrink-0",
        label: "text-sm"
      },
      variants: {
        orientation: {
          horizontal: {
            base: "flex-row",
            container: "mx-3 whitespace-nowrap",
            border: "w-full border-t"
          },
          vertical: {
            base: "h-full flex-col",
            container: "my-3",
            border: "h-full border-s"
          }
        },
        type: {
          solid: {
            border: "border-solid"
          },
          dashed: {
            border: "border-dashed"
          },
          dotted: {
            border: "border-dotted"
          }
        }
      },
      defaultVariants: {
        orientation: "horizontal",
        type: "solid"
      }
    });
    const { base, border, container, icon: iconClass, label: labelClass } = style();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_3$1;
      const _component_UiAvatar = _sfc_main$2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: "div",
        class: unref(base)({ orientation: _ctx.orientation, type: _ctx.type, class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Separator), {
              orientation: _ctx.orientation,
              class: unref(border)({ orientation: _ctx.orientation, type: _ctx.type })
            }, null, _parent2, _scopeId));
            if (_ctx.label || _ctx.icon || _ctx.avatar || _ctx.$slots.default) {
              _push2(`<div class="${ssrRenderClass(unref(container)({ orientation: _ctx.orientation, type: _ctx.type }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                ssrRenderSlot(_ctx.$slots, "label", {}, () => {
                  if (_ctx.label) {
                    _push2(`<span class="${ssrRenderClass(unref(labelClass)({ orientation: _ctx.orientation, type: _ctx.type }))}"${_scopeId}>${ssrInterpolate(_ctx.label)}</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
                  if (_ctx.icon) {
                    _push2(ssrRenderComponent(_component_Icon, {
                      name: _ctx.icon,
                      class: unref(iconClass)({ orientation: _ctx.orientation, type: _ctx.type })
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                ssrRenderSlot(_ctx.$slots, "avatar", {}, () => {
                  if (_ctx.avatar) {
                    _push2(ssrRenderComponent(_component_UiAvatar, { src: _ctx.avatar }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(Separator), {
              orientation: _ctx.orientation,
              class: unref(border)({ orientation: _ctx.orientation, type: _ctx.type })
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Separator), {
                orientation: _ctx.orientation,
                class: unref(border)({ orientation: _ctx.orientation, type: _ctx.type })
              }, null, 8, ["orientation", "class"]),
              _ctx.label || _ctx.icon || _ctx.avatar || _ctx.$slots.default ? (openBlock(), createBlock("div", {
                key: 0,
                class: unref(container)({ orientation: _ctx.orientation, type: _ctx.type })
              }, [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  renderSlot(_ctx.$slots, "label", {}, () => [
                    _ctx.label ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: unref(labelClass)({ orientation: _ctx.orientation, type: _ctx.type })
                    }, toDisplayString(_ctx.label), 3)) : createCommentVNode("", true)
                  ]),
                  renderSlot(_ctx.$slots, "icon", {}, () => [
                    _ctx.icon ? (openBlock(), createBlock(_component_Icon, {
                      key: 0,
                      name: _ctx.icon,
                      class: unref(iconClass)({ orientation: _ctx.orientation, type: _ctx.type })
                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                  ]),
                  renderSlot(_ctx.$slots, "avatar", {}, () => [
                    _ctx.avatar ? (openBlock(), createBlock(_component_UiAvatar, {
                      key: 0,
                      src: _ctx.avatar
                    }, null, 8, ["src"])) : createCommentVNode("", true)
                  ])
                ])
              ], 2)) : createCommentVNode("", true),
              createVNode(unref(Separator), {
                orientation: _ctx.orientation,
                class: unref(border)({ orientation: _ctx.orientation, type: _ctx.type })
              }, null, 8, ["orientation", "class"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ui/Divider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const isLogin = ref(true);
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const subtitleText = computed(() => {
      return isLogin.value ? "\u0410\u043A\u043A\u0430\u0443\u043D\u0442\u0430 \u0435\u0449\u0435 \u043D\u0435\u0442 ?" : "\u0423\u0436\u0435 \u0435\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442 ?";
    });
    const linkedAccountText = computed(() => {
      return isLogin.value ? "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0435\u0439\u0447\u0430\u0441" : "\u0412\u043E\u0439\u0442\u0438 \u0432 \u043D\u0435\u0433\u043E";
    });
    const submitText = computed(() => {
      return isLogin.value ? "\u0412\u043E\u0439\u0442\u0438" : "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F";
    });
    const signUpWithGoogle = async () => {
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(getAuth(), provider);
        await navigateTo("/");
      } catch (error) {
        error.message;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiVeeInput = _sfc_main$5;
      const _component_UiButton = _sfc_main$9;
      const _component_UiDivider = _sfc_main$1;
      const _component_Icon = __nuxt_component_3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-screen items-center justify-between" }, _attrs))}><div class="w-full md:w-1/2"><div class="mx-auto w-full max-w-[330px] px-5"><h1 class="text-2xl font-bold tracking-tight lg:text-3xl">${ssrInterpolate(unref(isLogin) ? "\u0412\u0445\u043E\u0434" : "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F")}</h1><form class="mt-10"><fieldset class="grid gap-5"><div>`);
      if (!unref(isLogin)) {
        _push(ssrRenderComponent(_component_UiVeeInput, {
          modelValue: unref(name),
          "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
          name: "name",
          label: "\u0418\u043C\u044F",
          placeholder: "\u0418\u043C\u044F"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_UiVeeInput, {
        modelValue: unref(email),
        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
        name: "email",
        label: "\u041F\u043E\u0447\u0442\u0430",
        placeholder: "example@gmail.com",
        type: "email"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_UiVeeInput, {
        modelValue: unref(password),
        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
        name: "password",
        label: "\u041F\u0430\u0440\u043E\u043B\u044C",
        type: "password",
        placeholder: "\u2217\u2217\u2217\u2217\u2217\u2217\u2217\u2217"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_UiButton, {
        type: "submit",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(submitText))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(submitText)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UiDivider, { label: "\u0438\u043B\u0438" }, null, _parent));
      _push(ssrRenderComponent(_component_UiButton, {
        onClick: signUpWithGoogle,
        type: "button",
        class: "w-full",
        variant: "outline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "logos:google-icon" }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(unref(submitText))} \u0447\u0435\u0440\u0435\u0437 Google `);
          } else {
            return [
              createVNode(_component_Icon, { name: "logos:google-icon" }),
              createTextVNode(" " + toDisplayString(unref(submitText)) + " \u0447\u0435\u0440\u0435\u0437 Google ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</fieldset></form><p class="mt-10 text-center text-sm">${ssrInterpolate(unref(subtitleText))} <a href="#" class="text-sm font-semibold text-primary hover:underline">${ssrInterpolate(unref(linkedAccountText))}</a></p></div></div><div class="hidden h-screen md:block md:w-1/2 lg:w-1/2"><img src="https://images.unsplash.com/photo-1512551980832-13df02babc9e?q=60&amp;w=2864&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Login form image" class="size-full object-cover"></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-Dx9w3YYm.mjs.map
