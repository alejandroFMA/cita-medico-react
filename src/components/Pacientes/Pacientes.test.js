import React from "react";
import { shallow } from "enzyme";
import Pacientes from "./Pacientes";

describe("Pacientes", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Pacientes />);
    expect(wrapper).toMatchSnapshot();
  });
});
