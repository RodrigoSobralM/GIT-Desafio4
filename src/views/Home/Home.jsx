import React from "react";
import Header from "../../components/Header/Header";
const Home = () => {
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
            <td>Nova tarefa...</td>
            <td>
                <img src="./mais.svg" alt="" />
            </td>
          </tr>
        </table>
      </section>
    </div>
  );
};

export default Home;
