import './App.css';
import { ComponenteNome } from './componentes/ComponenteNome';
import { ComponenteResumo } from './componentes/ComponenteResumo';
import { ComponenteCompetencia } from './componentes/ComponenteCompetencia';
import Button from 'react-bootstrap/Button';



function App() {
  return (
    <div className="App">
        <p>importando componentes</p>
        <hr />
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}

export default App;
