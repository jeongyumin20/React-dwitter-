// App.jsx (src)
import './App.css';
import Dwiiter from './components/Dwitter.jsx'
import { useState, useEffect } from 'react';

function App() {
  const [dwitters, setDwitters] = useState([]);
  useEffect(() => {
    fetch('data/dwitter.json') // default : public 폴더
    .then((res) => res.json())
    .then((data) => setDwitters(data)) // dwitters에 바로 넣지 말고 setDwitters 메서드 통해서 진행 
  }, []) // 이벤트 처리되는 것이 아니고 첫 랜더링만 필요[]

  return (
    <div>
      <h1>Diwtter</h1>
      <ul>
        <li>📋 All Dwitter</li>
        <li>🔖 My Dwitter</li>
        <li>🔐 Login / Sign</li>
      </ul>
      {dwitters.map((dwitter)=> 
          <Dwiiter 
            img={dwitter.img} 
            name={dwitter.name} 
            id={dwitter.id}
            date={dwitter.date}
            content={dwitter.content}/>
        )}
    </div>
  );
}

export default App;
