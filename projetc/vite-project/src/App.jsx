import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login"
import Main from './components/Main';
import CreateInform from './components/CreateInform.Jsx';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/createInform" element={<CreateInform />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
