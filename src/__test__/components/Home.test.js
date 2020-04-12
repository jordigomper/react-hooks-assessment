import React from "react";
import { mount, shallow } from "enzyme";
import Home from "../../Main/components/Home";
import * as AppContext from "../../Main/context";
import { gnome, professions } from "../seed";

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

    it("check valid format", () => {
      jest.spyOn(AppContext, "useAPIContext").mockImplementation(() => {
        const gnomeCustom = JSON.stringify(gnome);
        delete gnomeCustom.id;
        return { habitants: [gnomeCustom] };
      });

      const wrapper = mount(<Home />);

      expect(wrapper.find(".list .list__item")).toHaveLength(0);

      wrapper.unmount();
    });

    it("filter by professions", () => {
      jest.spyOn(AppContext, "useAPIContext").mockImplementation(() => {
        const gnomeBoth = {
          ...gnome,
          name: "Metalworker",
          id: 0,
          professions: ["Metalworker", "Woodcarver"]
        };
        const gnomeMetalworker = {
          ...gnome,
          name: "Metalworker",
          id: 1,
          professions: ["Metalworker"]
        };
        const gnomeWoodcarver = {
          ...gnome,
          name: "Woodcarver",
          id: 2,
          professions: ["Woodcarver"]
        };
        return {
          habitants: [gnomeBoth, gnomeMetalworker, gnomeWoodcarver],
          professions
        };
      });

      const wrapper = mount(<Home />);

      const metalworkerButton = wrapper
        .find(".filter-panel__chip")
        .filterWhere(n => n.text() === "Metalworker");

      metalworkerButton.simulate("click");

      wrapper.render();

      expect(wrapper.find(".list__item")).toHaveLength(2);
      wrapper.unmount();
    });

    it("filter by name", () => {
      jest.spyOn(AppContext, "useAPIContext").mockImplementation(() => {
        const Homer = {
          ...gnome,
          name: "Homer",
          id: 0
        };
        const Bart = {
          ...gnome,
          name: "Bart",
          id: 1
        };
        const Lisa = {
          ...gnome,
          name: "Lisa",
          id: 2
        };
        return {
          habitants: [Homer, Bart, Lisa],
          professions
        };
      });

      const wrapper = mount(<Home />);

      const searchbar = wrapper.find(".searchbar input");

      searchbar.simulate("change", { target: { value: "Homer" } });

      wrapper.render();

      expect(wrapper.find(".list__item")).toHaveLength(1);
      expect(wrapper.find(".list__item").text()).toContain("Homer");
      wrapper.unmount();
    });
  });
});
