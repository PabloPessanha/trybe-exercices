import './App.css';

function App() {
  const compromises = ['Limpar mesa de jantar', 'Receber amigos', 'Assistir filme juntos'];
  const tasks = (value) => <li>{value}</li>;

  return (
    <div>
      <ul>{compromises.map((task) => tasks(task))}</ul>
    </div>
  );
}

export default App;
