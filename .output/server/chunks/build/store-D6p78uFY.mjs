import { d as useNuxtApp } from './server.mjs';
import { defineComponent, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "store",
  __ssrInlineRender: true,
  setup(__props) {
    useNuxtApp();
    const items = ref([]);
    const newItemName = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>Items</h1><ul><!--[-->`);
      ssrRenderList(items.value, (item) => {
        _push(`<li>${ssrInterpolate(item.name)}</li>`);
      });
      _push(`<!--]--></ul><input${ssrRenderAttr("value", newItemName.value)} placeholder="New item name"><button>Add Item</button></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/store.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=store-D6p78uFY.mjs.map
