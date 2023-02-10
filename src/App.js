import logo from './logo.svg';
import './App.css';
import desert from './desert.jpg';

function App() {
  return (
    <div className="App">
      <h1>Bienvenue</h1>
      <img src={desert} alt='Le desert' width={600} />
    </div>
  );
}

export default App;
