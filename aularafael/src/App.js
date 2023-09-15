import OlaMundo from './components/olaMundo';
import Frazes from './components/frazes';
import DigaMeuNome from './components/digaMeunome';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Olá mundo </h1>
      <OlaMundo />

      <h2> frazes </h2>
      <Frazes />

      <h1>Meu nome é </h1>
      <DigaMeuNome nome="Delegado pipil" profissao="Raull" idade="583" sonho="ser fiel"/>
   


    </div>
  );
}

export default App;
