import React, { useEffect } from 'react';
import {useState} from 'react';
import DetailsForm from './detailsForm';
import Personal from './personal';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Adress from './address';
import $ from 'jquery'
import 'react-step-progress/dist/index.css';

function Step(props) {
    
    useEffect(()=>{
        console.log('step in Step:',props.step)
        $(`#div${props.step}`).css('background','blue') ;
    },[props.step])
    



    
  return (
    <>
    <div id='div0' className="step"> Personl  </div>
    <div id='div1' className="step"> Address  </div>
    <div id='div2' className="step"> Contactability  </div>
    </>
  );
}


export default Step;
