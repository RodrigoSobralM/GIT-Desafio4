import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import "./index.scss";

const Home = () => {
  const [adicionar, setAdicionar] = useState([]);

  const adicionarTarefa = () => {
    const novaTarefa = {
      nome: "rodrigo",
    };

    // Criar um novo array com a nova tarefa
    const novoArray = [...adicionar, novaTarefa];

    // Atualizar o estado com o novo array
    setAdicionar(novoArray);
  };

  useEffect(() => {
    console.log(adicionar);
  }, [adicionar]);

  return (
    <div className="home">
      <Header />
      <section className="home__tabelaTarefas">
        <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
        <table>
          <tr>
            <th>Tarefa</th>
            <th>Status</th>
            <th>Opções</th>
          </tr>
          <tr>
            {adicionar.map((tarefa, index) => {
              return (
                <div key={index}>
                  <td>{tarefa.nome}</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <img src="/lapis.svg" alt="" />
                  </td>
                  <td>
                    <img src="/lixeira.svg" alt="" />
                  </td>
                </div>
              );
            })}
          </tr>
          <tr>
            <td>Nova tarefa...</td>
            <td>
              <img src="./mais.svg" alt="" onClick={adicionarTarefa} />
            </td>
          </tr>
        </table>
      </section>
    </div>
  );
};

export default Home;
