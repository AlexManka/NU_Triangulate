import React, { useState, useEffect } from 'react';
import BmiForm from '../BmiForm/BmiForm';
// eslint-disable-next-line
import Info from '../Info/Info';
// eslint-disable-next-line
import Bar from '../Bar/Bar';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
//import HomepageImage from "./HomepageImage.js";
//import Table from './table.js';


const uuidv1 = require('uuid/v4');

const App = () => {
  let initialState = () => JSON.parse(localStorage.getItem('data')) || [];
  const [state, setState] = useState(initialState);
  // eslint-disable-next-line
  const [data, setData] = useState({});

  const handleChange = val => {
    let heightInM = val.height / 100;
    val.bmi = (val.weight / (heightInM * heightInM)).toFixed(2);
    val.id = uuidv1();
    let newVal = [...state, val];
    let len = newVal.length;
    if (len > 7) newVal = newVal.slice(1, len);
    setState(newVal);
  };
// eslint-disable-next-line
  const handleDelete = id => {
    localStorage.setItem('lastState', JSON.stringify(state));
    let newState = state.filter(i => {
      return i.id !== id;
    });
    setState(newState);
  };






  const handleUndo = () => {
    var url ="http://localhost:3001/";
		window.location.href = url;
    setState(JSON.parse(localStorage.getItem('lastState')));
  };


  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(state));
    const date = state.map(obj => obj.date);
    const bmi = state.map(obj => obj.bmi);
    let newData = { date, bmi };
    setData(newData);
  }, [state]);

  return (
    <div className='container'>
      <div className='row far-left'>
        <h1 className='white-text'> TRIANGULATE</h1>
      </div>
      <div className='row'>
        <div className='col m12 s12'>
          <BmiForm change={handleChange} />
          <div>
            <div className='row left'>
              <iframe src='https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=MmYyczhlOWx2NnU4MTZvNjY2OGZoYXRhbzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%230B8043&amp;mode=WEEK'
                frameBorder='0'
                width="650"
                height="500"
                title="Gcal"
/>  
            
}
              {/*<HomepageImage />*/}
            </div>
           {/*} <div className='data-container row'>
              {state.length > 0 ? (
                <>
                  {state.map(info => (
                    <Info
                      key={info.id}
                      id={info.id}
                      weight={info.weight}
                      height={info.height}
                      date={info.date}
                      bmi={info.bmi}
                      deleteCard={handleDelete}
                    />
                  ))}
                </>
              ) : (
                <div className='center white-text'>No log found</div>
              )}
            </div>*/}
          </div>
          {localStorage.getItem('lastState') !== null ? (
            <div className='center'>
              <button className='calculate-btn' onClick={handleUndo}>
                Undo
              </button>
              {/*<div className='row right'>
                <Table />
          </div>*/}
            </div>
        
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
