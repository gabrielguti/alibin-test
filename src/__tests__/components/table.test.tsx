import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import UsersTable from "../../components/UsersTable";
import {
  UserDataProvider,
  UserDataContext,
} from "../../provider/usersProvider";

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

// describe("Modal close", () => {
//   it("should be able to close checkbox modal", () => {
//     render(
//       <UserDataProvider>
//         <UserDataContext.Consumer>
//           {(value) => <UsersTable />}
//         </UserDataContext.Consumer>
//       </UserDataProvider>
//     );
//     const openButton = screen.getByTestId("dots-button");
//     fireEvent.click(openButton);
//     const modal = screen.getByTestId("checkbox-modal");
//     const closeModal = screen.getBy("close-button")
//     expect(modal).toBeInTheDocument();
//   });
// });
