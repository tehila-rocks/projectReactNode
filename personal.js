import React, {useRef } from 'react';
import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';


function Personal(props) {
    const [isFName, setIsFName]=useState(false);
    const [isLName, setIsLName]=useState(false);
    const fNameRef=useRef();
    const lNameRef=useRef();
    const titleRef=useRef();

    function goNextStep(){
        if(fNameRef.current.value!="" && lNameRef.current.value!=""){
            let person={
                firstName:fNameRef.current.value,
                lastName:lNameRef.current.value,
                title:titleRef.current.value,
                emailAdress:props.person.emailAdress,
                phoneNumber:props.person.phoneNumber,
                country:props.person.country,
                city:props.person.city,
                street:props.person.street,
                optin:props.person.optin
            }
            props.setPerson(person);
            props.setStep(props.step+1)
        }
    }

    function fillInputs(){
        fNameRef.current.value=props.person.firstName;
        lNameRef.current.value=props.person.lastName;
        titleRef.current.value=props.person.title;
    }
    return(
        <>
        <input ref={fNameRef} type="text" placeholder="first name" onChange={()=>setIsFName(true)}/><br/>
        <span className="reqs" hidden={isFName}>field required</span><br/>
        <input ref={lNameRef} type="text" placeholder="last name" onChange={()=>setIsLName(true)}/><br/>
        <span className="reqs" hidden={isLName}>field required</span><br/>
        <input ref={titleRef} type="text" placeholder="title"/><br/>
        <button onClick={()=> goNextStep()}>next step</button>
        </>
    )
}

export default Personal;
