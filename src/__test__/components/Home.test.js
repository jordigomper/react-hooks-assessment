import React from "react";
import { mount, shallow } from "enzyme";
import Home from "../../Main/components/Home";
import * as AppContext from "../../Main/context";
import { gnome } from "../seed";

describe("Home component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
  });
  describe("Gnome List", () => {
    it("render", () => {
      jest.spyOn(AppContext, "useAPIContext").mockImplementation(() => {
        return { habitants: [gnome] };
      });

      const wrapper = mount(<Home />);

      expect(wrapper.find(".list .list__item")).toHaveLength(1);

      wrapper.unmount();
    });

    it("filter invalid format", () => {
      jest.spyOn(AppContext, "useAPIContext").mockImplementation(() => {
        const gnomeCustom = gnome;
        delete gnomeCustom.id;
        return { habitants: [gnomeCustom] };
      });

      const wrapper = mount(<Home />);

      expect(wrapper.find(".list .list__item")).toHaveLength(0);
      wrapper.unmount();
    });
  });
});
