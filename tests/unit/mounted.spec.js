import { shallowMount, createLocalVue } from "@vue/test-utils";
import App from "@/App.vue";
import Wrapper from "@/components/Wrapper.vue";
import VueRouter from "vue-router";
describe("Root components are mounted", () => {
  it("is mounted ", () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const wrapper = shallowMount(App);
    expect(wrapper.exists()).toBe(true);
    const wrapper2 = shallowMount(Wrapper, {
      localVue,
    });
    expect(wrapper2.exists()).toBe(true);
  });
});
