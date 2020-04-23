import React from "react";
import { mount } from "enzyme";
import { ImageCache } from "../../components";
import { lisa } from "../__mocks__/habitants";

jest.mock("../../assets/img/top_secret.jpg", () => {});

describe("<Image />", () => {
  it("renders correct image", (done) => {
    Object.defineProperty(global.Image.prototype, "src", {
      set(src) {
        expect(src).toEqual(lisa.thumbnail);
        done();
      },
    });
    mount(
      <ImageCache src={lisa.thumbnail} alt={lisa.name} title={lisa.name} />
    );
  });
});
