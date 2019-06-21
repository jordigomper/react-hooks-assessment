import React from "react";
import { shallow } from "enzyme";
import Card from "../../Main/components/Card";
import * as AppContext from "../seed";

describe("Card component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Card id={0} />);
    expect(wrapper).toMatchSnapshot();
  });
});
