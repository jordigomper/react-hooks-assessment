import React from "react";
import { shallow } from "enzyme";
import { Card } from "../../components";
import { lisa } from "../__mocks__/habitants";

jest.mock("../../assets/img/top_secret.jpg", () => {});

describe("Card component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Card {...lisa} />);
    expect(wrapper).toMatchSnapshot();
  });
});
