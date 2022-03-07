import Error from "../../assets/svg/warning.svg";
import "./style.css";

const ErrorCard = () => {
  return (
    <div data-testid="error-component" className="error-box">
      <div className="error-info">
        <img src={Error} alt="error-system" />
        <h1>Ops! Algo deu errado :/</h1>
        <p>Não foi possível acessar os dados. Tente novamente mais tarde.</p>
        <p>Possíveis problemas:</p>
        <ul>
          <li>Base de dados fora do ar;</li>
          <li>Navegador instável;</li>
          <li>Problema interno da aplicação;</li>
        </ul>
        <button
          data-testid="reload-button"
          onClick={() => window.location.reload()}
        >
          Recarregar
        </button>
      </div>
    </div>
  );
};

export default ErrorCard;
