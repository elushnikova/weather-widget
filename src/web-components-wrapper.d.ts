declare module "@vue/web-component-wrapper" {
  import _Vue, { Component, AsyncComponent } from "vue";

  function wrap(
    Vue: typeof _Vue,
    Component: Component | AsyncComponent
  ): HTMLElement;

  export default wrap;
}
