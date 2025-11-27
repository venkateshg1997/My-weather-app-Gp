import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Nav from './Nav';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Nav/>
    </div>
    </>
  )
}

export default App
