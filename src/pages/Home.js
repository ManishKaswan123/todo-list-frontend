import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-hot-toast';
import './Home.css';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        let token = localStorage.getItem('token')
        axios.defaults.headers.common['Authorization'] = token;
        const res = await axios.get('http://localhost:4000/api/todos');
        setTodos(res.data);
      } catch (err) {
        toast.error('Failed to fetch todos');
      }
    };
    fetchTodos();
  }, []);

  const addTodo = async () => {
    try {
      const res = await axios.post('http://localhost:4000/api/todos', { title });
      setTodos([...todos, res.data]);
      toast.success('Create Successfully')
      setTitle('');
    } catch (err) {
      toast.error('Failed to add todo');
    }
  };

  const updateTodo = async (id, completed) => {
    try {
      const res = await axios.put(`http://localhost:4000/api/todos/${id}`, { completed });
      setTodos(todos.map(todo => (todo._id === id ? res.data : todo)));
      toast.success('Update Successfully')
    } catch (err) {
      toast.error('Failed to update todo');
    }
  };

  const editTodo = (id, title) => {
    setEditId(id);
    setEditTitle(title);
  };

  const saveEditTodo = async (id) => {
    try {
      const res = await axios.put(`http://localhost:4000/api/todos/${id}`, { title: editTitle });
      setTodos(todos.map(todo => (todo._id === id ? res.data : todo)));
      setEditId(null);
      setEditTitle('');
      toast.success('Edit Successfully')
    } catch (err) {
      toast.error('Failed to save todo');
    }
  };

  const deleteTodo = async id => {
    try {
      await axios.delete(`http://localhost:4000/api/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
      toast.success('Delete Successfully')

    } catch (err) {
      toast.error('Failed to delete todo');
    }
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="form-group">
        <input
          type="text"
          className='add-task'
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTodo} className="add-button">Add Todo</button>
        <button onClick={logout} className="logout-button">Logout</button>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo._id} className="todo-item">
            {editId === todo._id ? (
              <>
                <input
                type="text"
                value={editTitle}
                onChange={e => setEditTitle(e.target.value)}
                />
                <button onClick={() => saveEditTodo(todo._id)} className="save-button">Save</button>
              </>
            ) : (
              <>
                <span
                  className={todo.completed ? 'completed' : ''}
                  onClick={() => updateTodo(todo._id, !todo.completed)}
                >
                  {todo.title}
                </span>
                <button onClick={() => editTodo(todo._id, todo.title)} className="edit-button">Edit</button>
                <button onClick={() => deleteTodo(todo._id)} className="delete-button">Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;