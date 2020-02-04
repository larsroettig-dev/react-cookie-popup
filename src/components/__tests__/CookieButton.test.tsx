import React from "react";
import { render } from "@testing-library/react";
import CookieButton from "../CookieButton";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<CookieButton />", () => {
  test("should display a simple button", async () => {
    render(<CookieButton> I am a button </CookieButton>);
  });

  test("should change class", async () => {
    shallow(<CookieButton class={"baz"}> I am a button </CookieButton>);
  });

  test("should be clickable", async () => {
    const mockCallBack = jest.fn();
    const button = shallow(
      <CookieButton clickCallback={mockCallBack}> I am a button </CookieButton>
    );
    button.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  test("mount should be clickable", async () => {
    const button = mount(<CookieButton> I am a button </CookieButton>);
    button.find("button").simulate("click");
  });
});
