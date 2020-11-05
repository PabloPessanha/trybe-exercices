import './App.css';

function App() {
  const task = (value) => {
    return (<li>{value}</li>);
  };

  return (
    <div>
      <ul>
        {task('Casa')}
        {task('Carro')}
        {task('Limpar')}
      </ul>
    </div>
  );
}

export default App;
