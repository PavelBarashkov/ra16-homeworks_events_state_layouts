import './App.css'
import { Store } from './comonents/Store/Store';
import { data } from './data/data';

function App() {

  return (
    <>
      <Store data={data}/>
    </>
  )
}

export default App
    