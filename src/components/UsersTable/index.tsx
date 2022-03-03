import { useEffect } from "react";
import { UseUserDataContext } from "../../provider/usersProvider";
import Table from "react-bootstrap/Table";
import "./style.css";
const UsersTable = () => {
  const { getUsers, userList } = UseUserDataContext();

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Usuário</th>
          <th>Email</th>
          <th>Cliente</th>
          <th>Perfil de acesso</th>
          <th id="three-dots-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              id="three-dots"
            >
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </th>
        </tr>
      </thead>
      {userList ? (
        <tbody>
          {userList.map((item) => {
            return (
              <tr key={item.id}>
                <th>{item.name}</th>
                <th>{item.email}</th>
                <th>{item.company.name}</th>
                <th>
                  <span id="badge">{item.username}</span>
                </th>
                <th>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    id="delete"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </th>
              </tr>
            );
          })}
        </tbody>
      ) : (
        <div>nada por aqui</div>
      )}
    </Table>
  );
};

export default UsersTable;
