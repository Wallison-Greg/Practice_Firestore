import { useEffect, useState } from 'react';
import './App.css';
import { 
    addDataAction, 
    setDataAction, 
    updateDataAction, 
    getDataActions, 
    getDataAction 
  } from './services/actions/dataAction';
import { onSnapshotUser, filterUser, deleteUser } from './services/dataAcess/Api';

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    //getDataActions().then((res) => {console.log(res)})
    //getDataAction().then((res) => {console.log(res)})
    onSnapshotUser(setUsers)
    //filterUser(setUsers, 'marilia')
  }, [])

  return (
    <div className="App">
      {users.map((item) => (
        <>
          <p>{item.name}</p>
          <button onClick={() => {deleteUser()}}>excluir</button>
        </>
      ))}
    </div>
  );
}

export default App;
