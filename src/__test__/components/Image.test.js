import React from "react";
import { shallow } from "enzyme";
import Image from "../../Main/components/Image";
import * as AppContext from "../seed";

describe("Image component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Image />);
    expect(wrapper).toMatchSnapshot();
  });
});
