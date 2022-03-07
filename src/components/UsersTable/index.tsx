import { useEffect, useState } from "react";
import { UseUserDataContext } from "../../provider/usersProvider";
import { Modal } from "react-bootstrap";
import { ReactComponent as Trace } from "../../assets/svg/trace.svg";
import { ReactComponent as Pen } from "../../assets/svg/pen.svg";
import { ReactComponent as Delete } from "../../assets/svg/delete.svg";
import { ReactComponent as Dots } from "../../assets/svg/dots.svg";
import Table from "react-bootstrap/Table";
import ErrorCard from "../ErrorComponent";
import "./style.css";

const UsersTable = () => {
  const { getUsers, userList, requestError } = UseUserDataContext();
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [name, setName] = useState<boolean>(true);
  const [email, setEmail] = useState<boolean>(true);
  const [client, setClient] = useState<boolean>(true);
  const [username, setUsername] = useState<boolean>(true);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getUsers(signal);

    return function cleanup() {
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!requestError ? (
        <Table striped responsive data-testid="table">
          <thead>
            <tr data-testid="table-lines">
              <th>Usuário</th>
              <th>Email</th>
              <th>Cliente</th>
              <th>Perfil de acesso</th>
              <th className="edit-column" id="three-dots-box">
                <Dots
                  data-testid="dots-button"
                  onClick={() => setModalShow(true)}
                />
              </th>
              <Modal
                data-testid="checkbox-modal"
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
                      data-testid="check1"
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
                      data-testid="check2"
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
                      data-testid="check3"
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
                      data-testid="check4"
                    />
                    <label htmlFor="chk6">Perfil de acesso</label>
                  </div>
                </Modal.Body>
              </Modal>
            </tr>
          </thead>
          <tbody data-testid="table-body">
            {userList.map((item) => {
              return (
                <tr data-testid="table-lines" key={item.id}>
                  {name ? (
                    <th>
                      <p>{item.name}</p>
                    </th>
                  ) : (
                    <th>
                      <Trace />
                    </th>
                  )}
                  {email ? (
                    <th>
                      <p>{item.email}</p>
                    </th>
                  ) : (
                    <th>
                      {" "}
                      <Trace />
                    </th>
                  )}
                  {client ? (
                    <th>
                      <p>{item.company.name}</p>
                    </th>
                  ) : (
                    <th>
                      {" "}
                      <Trace />
                    </th>
                  )}
                  {username ? (
                    <th>
                      <span id="badge">{item.username}</span>
                    </th>
                  ) : (
                    <th>
                      {" "}
                      <Trace />
                    </th>
                  )}
                  <th className="edit-column">
                    <Pen />
                    <Delete />
                  </th>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <ErrorCard />
      )}
    </>
  );
};

export default UsersTable;
