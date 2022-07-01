import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from './actions/index';
function App() {
  const [inpData, setData] = useState("");
  const list = useSelector((state) => state.taskReduce.list)
  const dispatch = useDispatch();

  return (
    <>
      <div className="App">
        <form>
          <input type="text" placeholder="add text here" value={inpData} onChange={(e) => { setData(e.target.value) }} />
          <button onClick={() => dispatch(addTask(inpData))}>Click</button>
        </form>
      </div>
      <div className='show'>
        {
          list.map((elem) => {
            <div key={elem.id}>
              <h3>{elem.data}</h3>
            </div>
          })
        }
      </div>
    </>
  );
}

export default App;
