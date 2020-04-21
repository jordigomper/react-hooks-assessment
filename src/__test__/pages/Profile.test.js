import React from "react";
import { shallow } from "enzyme";
import Profile from "../../Main/components/Profile";
import * as AppContext from "../../Main/context";

describe("Profile component", () => {
  it("renders correctly", () => {
    const contextValues = [];
    jest
      .spyOn(AppContext, "useAPIContext")
      .mockImplementation(() => contextValues);
    const wrapper = shallow(<Profile />);
    expect(wrapper).toMatchSnapshot();
  });
});
