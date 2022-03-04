import { useEffect, useState } from "react";
import { UseUserDataContext } from "../../provider/usersProvider";
import Table from "react-bootstrap/Table";
import "./style.css";
import { Modal } from "react-bootstrap";
const UsersTable = () => {
  const { getUsers, userList } = UseUserDataContext();
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [name, setName] = useState(true);
  const [email, setEmail] = useState(true);
  const [client, setClient] = useState(true);
  const [username, setUsername] = useState(true);

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
          <th
            className="edit-column"
            id="three-dots-box"
            onClick={() => setModalShow(true)}
          >
            <svg
              fill="rgba(25, 145, 219, 0.904)"
              xmlns="http://www.w3.org/2000/svg"
              id="three-dots"
            >
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </th>
          <Modal
            size="sm"
            show={modalShow}
            onHide={() => setModalShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton />
            <Modal.Body>
              <p>Linhas por página</p>
              <div className="checkbox">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="chk1"
                  checked
                  readOnly
                />
                <label htmlFor="chk1">Padrão</label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="chk2"
                  readOnly
                  disabled
                />
                <label htmlFor="chk2">50 linhas</label>
              </div>
              <hr />
              <p>Colunas</p>
              <div className="checkbox">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="chk3"
                  checked={name ? true : false}
                  onChange={() => setName(!name)}
                />
                <label htmlFor="chk3">Usuário</label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="chk4"
                  checked={email ? true : false}
                  onChange={() => setEmail(!email)}
                />
                <label htmlFor="chk4">E-mail</label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="chk5"
                  checked={client ? true : false}
                  onChange={() => setClient(!client)}
                />
                <label htmlFor="chk5">Cliente</label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="chk6"
                  checked={username ? true : false}
                  onChange={() => setUsername(!username)}
                />
                <label htmlFor="chk6">Perfil de acesso</label>
              </div>
            </Modal.Body>
          </Modal>
        </tr>
      </thead>
      {userList ? (
        <tbody>
          {userList.map((item) => {
            return (
              <tr key={item.id}>
                {name ? (
                  <th>{item.name}</th>
                ) : (
                  <th>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="rgba(25, 145, 219, 0.904)"
                    >
                      <path d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                    </svg>
                  </th>
                )}
                {email ? (
                  <th>{item.email}</th>
                ) : (
                  <th>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="rgba(25, 145, 219, 0.904)"
                    >
                      <path d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                    </svg>
                  </th>
                )}
                {client ? (
                  <th>{item.company.name}</th>
                ) : (
                  <th>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="rgba(25, 145, 219, 0.904)"
                    >
                      <path d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                    </svg>
                  </th>
                )}
                {username ? (
                  <th>
                    <span id="badge">{item.username}</span>
                  </th>
                ) : (
                  <th>
                    {" "}
                    <svg
                      fill="rgba(25, 145, 219, 0.904)"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                    </svg>
                  </th>
                )}
                <th className="edit-column">
                  <svg
                    fill="rgba(25, 145, 219, 0.904)"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="delete"
                    fill="red"
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
