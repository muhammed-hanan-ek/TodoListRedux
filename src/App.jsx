import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from './Store/slice/TodoSlice';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todos);
  const [todo, setTodo] = useState('');

  const handleAddTodo = () => {
    if (todo) {
      dispatch(addTodo(todo));
      setTodo(''); 
    }
  };

  const handleDeleteTodo = (index) => {
    dispatch(deleteTodo(index));
  };

  return (
    <div className='ms-5 container mt-5 border-4 border-black w-full p-5' style={{ height: '90vh' }}>
      <h1 className='text-4xl font-bold'>My Todo List</h1>
      <div className='flex'>
        <input
          type='text'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          style={{ width: '300px' }}
          className='p-2 mt-5 border-2 border-black rounded'
          placeholder='Add Todo'
        />
        <button
          onClick={handleAddTodo}
          className='bg-blue-600 ms-3 rounded mt-5 p-3 text-white font-semibold'
          style={{ height: '50px' }}
        >
          Submit
        </button>
      </div>
      <hr className='mt-5 border-black' />
      <div className='mt-3'>
        {todos.map((todoItem, index) => (
          <div key={index} className='flex justify-between mt-5'>
            <div className='flex'>
              <h5 className='font-semibold text-xl'>{index + 1}.</h5>
              <p className='font-semibold text-xl ms-3'>{todoItem}</p>
            </div>
            <button
              onClick={() => handleDeleteTodo(index)}
              className='text-white bg-red-500 p-2 rounded'
            >
              Delete
            </button>
          </div>
        ))}
        <hr className='mt-2 border-black' />
      </div>
      <h1 className='text-xl font-bold'>Total No.of Todos={todos.length}</h1>
    </div>
  );
}

export default App;
