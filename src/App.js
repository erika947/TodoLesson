
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Todos from './components/Todos';
import Todo from './components/Todo'
import Edit from './components/EditTodo'

// import { Route, Switch, NavLink, Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <Router>
        <Routes>
          <Route path='/' element={<Todos />} />
          <Route path='/:id' element={<Todo />} />
          <Route path='/:id/edit' element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
