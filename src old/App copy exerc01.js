import './App.css';
import { ComponenteNome } from './componentes/ComponenteNome';
import { ComponenteResumo } from './componentes/ComponenteResumo';
import { ComponenteCompetencia } from './componentes/ComponenteCompetencia';



function App() {
  return (
    <div className="App">
        <p>importando componentes</p>
        <hr />
         <ComponenteNome />
        <hr />
        <ComponenteResumo>
          Moro em Curitiba, trabalho na TI e sou DESENVOLVEDOR WEB
        </ComponenteResumo>
        <ComponenteResumo>
          Harve foi TOP
        </ComponenteResumo>
        <hr />
        
        <p>LISTA DE COMPETÊNCIAS</p>
        <ComponenteCompetencia
          nome="HTML"
          descricao="Fazer página estática"
        />
        <ComponenteCompetencia
          nome="CSS"
          descricao="Fazer a estética da página"
        />

    </div>
  );
}

export default App;
