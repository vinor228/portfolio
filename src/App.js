import LoadingPage from './pages/LoadingPage/index.js'
import './App.css';
import {useState} from "react";


function App() {
    const [loading, setLoading] = useState(true)

    if (loading) {
        return (
            <LoadingPage/>
        )
    }
  return (
    <div className='body'>
     Hello me 🍖
    </div>
  );
}

export default App;
