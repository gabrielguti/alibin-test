import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorCard from "../../components/ErrorComponent";
import {
  UserDataProvider,
  UserDataContext,
} from "../../provider/usersProvider";

describe("Error Component", () => {
  it("should be able to render a error component", () => {
    render(
      <UserDataProvider>
        <UserDataContext.Consumer>
          {(value) => <ErrorCard />}
        </UserDataContext.Consumer>
      </UserDataProvider>
    );
    const errorComponent = screen.getByTestId("error-component");
    expect(errorComponent).toBeInTheDocument();
  });
});

describe("Reload button on error component", () => {
  it("should be able to render a reload button", () => {
    render(
      <UserDataProvider>
        <UserDataContext.Consumer>
          {(value) => <ErrorCard />}
        </UserDataContext.Consumer>
      </UserDataProvider>
    );
    const errorComponent = screen.getByTestId("reload-button");
    expect(errorComponent).toBeInTheDocument();
  });
});
