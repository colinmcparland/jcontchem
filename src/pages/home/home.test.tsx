import React from "react";
import { shallow } from "enzyme";
import { Home } from "./home";

describe("Homepage", () => {
  it("Renders without crashing", () => {
    const home = shallow(<Home />);
    expect(home).toBeTruthy();
  });
});
