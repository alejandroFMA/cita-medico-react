import React from "react";
import { shallow } from "enzyme";
import Errores from "./Errores";

describe("Errores", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Errores />);
    expect(wrapper).toMatchSnapshot();
  });
});
