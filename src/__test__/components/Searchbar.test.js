import React from "react";
import { shallow } from "enzyme";
import Searchbar from "../../Main/components/Searchbar";
import * as AppContext from "../seed";

describe("Searchbar component", () => {
  it("renders correctly", () => {
    const contextValues = [];
    jest
      .spyOn(AppContext, "useAppContext")
      .mockImplementation(() => contextValues);
    const wrapper = shallow(<Searchbar />);
    expect(wrapper).toMatchSnapshot();
  });
});
