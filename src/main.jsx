import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Btn from './Button.jsx'
import Table from './Table.jsx'
import Properties from './properties.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <Navbar/>
    <Table/>

        <Btn/>
        <Properties name="Developers" content="How  are you?" />

  </StrictMode>,
)
