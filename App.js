import React from 'react';
import {useState} from 'react';
import DetailsForm from './detailsForm';
import Personal from './personal';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Adress from './address';
import Contactability from './contactability';
import LoginSuccess from './loginSuccess';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import Step from './step'
function App() {
const [step, setStep] =useState(0)
const [person, setPerson]=useState({
  firstName:"",
  lastName:"",
  title:"",
  emailAdress:"",
  phoneNumber:"",
  country:"",
  city:"",
  street:"",
  optin:false
})
  return (
    <div className="App">
      <form>
        <Step  step = {step } ></Step><br/>
        <DetailsForm className="DetailsForm" step = {step } setStep={setStep} person={person} setPerson={setPerson}>
          <Personal step = {step } setStep={setStep} person={person} setPerson={setPerson}></Personal>
          <Adress step = {step } setStep={setStep} person={person} setPerson={setPerson}></Adress>
          <Contactability step = {step } setStep={setStep} person={person} setPerson={setPerson}></Contactability>
          <LoginSuccess></LoginSuccess>
        </DetailsForm>
      </form>
    </div>
  );
}

export default App;
