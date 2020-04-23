import React from "react";
import { mount } from "enzyme";
import { Profile } from "../../pages";
import * as AppContext from "../../App/context";
import { barto, milhouse, burns, lisa } from "../__mocks__/habitants";

jest.mock("../../assets/img/top_secret.jpg", () => {});
jest.mock("../../assets/icons/chevron_right.svg", () => {});
jest.mock("../../assets/icons/chevron_left.svg", () => {});

describe("Profile component", () => {
  const habitants = [barto, milhouse, burns, lisa];

  it("should renderer a profile correctly if it exists", async () => {
    const contextValues = { habitants };
    jest
      .spyOn(AppContext, "useAPIContext")
      .mockImplementation(() => contextValues);
    const wrapper = mount(<Profile id={2} />);
    expect(wrapper.text()).toMatch("Milhouse Van Houten");
  });
});
