import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import UsersTable from "../../components/UsersTable";
import {
  UserDataProvider,
  UserDataContext,
} from "../../provider/usersProvider";
import MockAdapter from "axios-mock-adapter";
import api from "../../services/api";

const apiMock = new MockAdapter(api);

describe("Table Component", () => {
  it("should be able to render a user table", () => {
    render(
      <UserDataProvider>
        <UserDataContext.Consumer>
          {(value) => <UsersTable />}
        </UserDataContext.Consumer>
      </UserDataProvider>
    );

    const table = screen.getByTestId("table");
    expect(table).toBeInTheDocument();
  });
});

describe("Table Body", () => {
  it("should be able to render table body", () => {
    render(
      <UserDataProvider>
        <UserDataContext.Consumer>
          {(value) => <UsersTable />}
        </UserDataContext.Consumer>
      </UserDataProvider>
    );
    const lines = screen.getByTestId("table-body");
    expect(lines).toBeInTheDocument();
  });
});

describe("Table Lines", () => {
  it("should be able to render table lines", () => {
    render(
      <UserDataProvider>
        <UserDataContext.Consumer>
          {(value) => <UsersTable />}
        </UserDataContext.Consumer>
      </UserDataProvider>
    );
    const lines = screen.getAllByTestId("table-lines");
    expect(lines).toBeTruthy();
  });
});

describe("Modal open", () => {
  it("should be able to open checkbox modal", () => {
    render(
      <UserDataProvider>
        <UserDataContext.Consumer>
          {(value) => <UsersTable />}
        </UserDataContext.Consumer>
      </UserDataProvider>
    );
    const button = screen.getByTestId("dots-button");
    fireEvent.click(button);
    const modal = screen.getByTestId("checkbox-modal");
    expect(modal).toBeInTheDocument();
  });
});

describe("User request", () => {
  it("should be able to get a user using api", async () => {
    apiMock.onGet().replyOnce(200, {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    });
    render(
      <UserDataProvider>
        <UserDataContext.Consumer>
          {(value) => <UsersTable />}
        </UserDataContext.Consumer>
      </UserDataProvider>
    );

    const user = await screen.findByText("Leanne Graham");

    await waitFor(() => {
      expect(user).toBeInTheDocument();
    });
  });
});

describe("Checkbox component", () => {
  it("should be able to render a checkbox input on columns space", () => {
    render(
      <UserDataProvider>
        <UserDataContext.Consumer>
          {(value) => <UsersTable />}
        </UserDataContext.Consumer>
      </UserDataProvider>
    );

    const button = screen.getByTestId("dots-button");
    fireEvent.click(button);

    const checkName = screen.getByTestId("check1");
    const checkEmail = screen.getByTestId("check2");
    const checkClient = screen.getByTestId("check3");
    const checkUsername = screen.getByTestId("check4");
    expect(checkName).toBeInTheDocument();
    expect(checkEmail).toBeInTheDocument();
    expect(checkClient).toBeInTheDocument();
    expect(checkUsername).toBeInTheDocument();
  });
});
