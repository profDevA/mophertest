import { Routes, Route } from "react-router-dom";
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Counter />} />
    </Routes>
  );
}

export default App;
