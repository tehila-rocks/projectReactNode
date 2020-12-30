import React from 'react';
import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';


function DetailsForm(props) {
  var  arr= React.Children.toArray(props.children)
    var step=props.step
    console.log(props.children)

    switch(step){
        case 0:return (arr[0]); break;
        case 1:return (arr[1]); break;
        case 2:return (arr[2]); break;
        default: return(arr[3])

    }

}

export default DetailsForm;
