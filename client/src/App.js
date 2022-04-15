import './App.css';
import React,{useEffect} from 'react'
import {useQuery} from '@apollo/client';
import {GET_ALL_QUERIES} from './gqloperation/queries.js'
import Home from './Home'


function App() {
const {loading,error,data}=useQuery(GET_ALL_QUERIES)

if(loading) return <h1>Loading</h1>
if(error){
  console.log(error.message)
}
  return (
    <div className="App">
      <h3>IFCE CODE</h3>
      {
        data.quotes.map(quote=>{
          return(
            <div key={quote._id}>
            <h6>{quote.ifsc}</h6>
        
            </div>
          )
        })
      }
       </div>
  );
}

export default App;
