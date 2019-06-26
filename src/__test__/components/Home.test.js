import React from "react";
import { mount, shallow } from "enzyme";
import Home from "../../Main/components/Home";
import * as AppContext from "../../Main/context";

const gnome = {
  age: 306,
  friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"],
  hair_color: "Pink",
  height: 107.75835,
  id: 0,
  name: "Tobus Quickwhistle",
  professions: [
    "Metalworker",
    "Woodcarver",
    "Stonecarver",
    " Tinker",
    "Tailor",
    "Potter"
  ],
  thumbnail:
    "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
  weight: 39.065952
};

const gnomeBadFormat = {
  age: 306,
  friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"],
  hair_color: "Pink",
  height: 107.75835,
  name: "Tobus Quickwhistle",
  professions: [
    "Metalworker",
    "Woodcarver",
    "Stonecarver",
    " Tinker",
    "Tailor",
    "Potter"
  ],
  thumbnail:
    "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
  weight: 39.065952
};

describe("Home component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
  });

  it("renders list", () => {
    jest.spyOn(AppContext, "useAPIContext").mockImplementation(() => {
      return { habitants: [gnome, gnomeBadFormat] };
    });

    const wrapper = mount(<Home />);

    console.log(wrapper.debug());

    expect(wrapper.find(".list .list__item")).toHaveLength(1);
  });
});
