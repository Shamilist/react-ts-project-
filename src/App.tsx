import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
    <h1 className='font-bold' key={1}>React user</h1>
    <button key={2}>Button</button>
    </div>

  );
}

export default App;
