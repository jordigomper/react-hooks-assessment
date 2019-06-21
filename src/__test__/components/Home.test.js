import React from "react";
import { shallow } from "enzyme";
import Home from "../../Main/components/Home";
import * as AppContext from "../seed";

describe("Home component", () => {
  it("renders correctly", () => {
    const contextValues = [];
    jest
      .spyOn(AppContext, "useAppContext")
      .mockImplementation(() => contextValues);
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
