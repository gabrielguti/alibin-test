import { useEffect, useState } from "react";
import { UseUserDataContext } from "../../provider/usersProvider";
import Table from "react-bootstrap/Table";
import "./style.css";
import { Modal } from "react-bootstrap";
import { ReactComponent as Trace } from "../../assets/svg/trace.svg";
import { ReactComponent as Pen } from "../../assets/svg/pen.svg";
import { ReactComponent as Delete } from "../../assets/svg/delete.svg";
import { ReactComponent as Dots } from "../../assets/svg/dots.svg";
import Error from "../../assets/svg/warning.svg";
const UsersTable = () => {
  const { getUsers, userList } = UseUserDataContext();
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [name, setName] = useState<boolean>(true);
  const [email, setEmail] = useState<boolean>(true);
  const [client, setClient] = useState<boolean>(true);
  const [username, setUsername] = useState<boolean>(true);

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {userList.length > 0 ? (
        <Table striped responsive>
          <thead>
            <tr>
              <th>Usuário</th>
              <th>Email</th>
              <th>Cliente</th>
              <th>Perfil de acesso</th>
              <th className="edit-column" id="three-dots-box">
                <Dots onClick={() => setModalShow(true)} />
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
          <tbody>
            {userList.map((item) => {
              return (
                <tr key={item.id}>
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
        <div className="error-box">
          <div className="error-info">
            <img src={Error} alt="error-system" />
            <h1>Ops! Algo deu errado :/</h1>
            <p>
              Não foi possível acessar os dados. Tente novamente mais tarde.
            </p>
            <p>Possíveis problemas:</p>
            <ul>
              <li>Base de dados fora do ar;</li>
              <li>Navegador instável;</li>
              <li>Problema interno da aplicação;</li>
            </ul>
            <button onClick={() => window.location.reload()}>Recarregar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default UsersTable;
