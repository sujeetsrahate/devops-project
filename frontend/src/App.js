import './App.css';

function App() {
  return (
    <div className="app">
      <div className="card">
        <h1>🚀 Frontend Running</h1>
        <p>Your React frontend is live</p>
        <button onClick={() => alert('Backend API called')}>
          Call Backend
        </button>
      </div>
    </div>
  );
}

export default App;
