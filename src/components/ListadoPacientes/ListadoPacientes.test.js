import React from "react";
import { shallow } from "enzyme";
import ListadoPacientes from "./ListadoPacientes";

describe("ListadoPacientes", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListadoPacientes />);
    expect(wrapper).toMatchSnapshot();
  });
});
