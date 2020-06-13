import React,  { useState, useEffect } from 'react';
import HomePage from './components/HomePage'
import MessageBoard from './components/MessageBoard'
function App() {
  const test_chats = [
    {title : 'Bob', id: 0},
    {title : 'John', id: 85},
    {title : 'Elis', id: 63}

  ]
  const [chats, setChats] = useState(test_chats)
  const [isLoading, setLoading] = useState(false)
  const pageLoad = (chats.length >0 ) ? (<MessageBoard chats={chats}/>) : (<HomePage />)
  return (
    <div className="App">
      {pageLoad}
    </div>
  );
}

export default App;
