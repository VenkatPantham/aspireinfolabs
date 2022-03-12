import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { store } from "../../redux-data/store";
import { mount } from "enzyme";
import Login from "./Login";

describe("Login component tests", () => {
  const history = createMemoryHistory();
  const wrapper = mount(
    <Router history={history}>
      <Provider store={store}>
        <Login />
      </Provider>
    </Router>
  );

  it("should have a p tag", () => {
    expect(wrapper.find("p")).toHaveLength(1);
  });
  it("p tag text should be 'Welcome Aspire Warriors!'", () => {
    expect(wrapper.find("p").text()).toEqual("Welcome Aspire Warriors!");
  });
  it("should have input for email and password", () => {
    //Email and password input field should be present
    expect(wrapper.find("input#email")).toHaveLength(1);
    expect(wrapper.find("input#password")).toHaveLength(1);
  });
  it("should have a btn component", () => {
    //There should be only one button
    expect(wrapper.find("button")).toHaveLength(1);
  });
  it("button should by of type 'button'", () => {
    //Button should be of type button
    expect(wrapper.find("button").type()).toEqual("button");
  });
  it("button text should be 'Log in'", () => {
    //Button should have matching text
    expect(wrapper.find("button").text()).toEqual("Log in");
  });
});
