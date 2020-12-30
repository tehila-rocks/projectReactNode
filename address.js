import React, {useEffect, useRef } from 'react';
import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


function Adress(props) {
    const [isCountry,setIsCountry]=useState(false);
    const [country, setCountryValue]=useState("");
    const [countries,setCountries]=useState([]);
    const cityRef=useRef("");
    const streetRef=useRef("");

    useEffect(()=>{
        fetch("http://localhost:5000/form")
    .then(response => response.json())
        .then(response => {
            setCountries(response)
        })
        .catch(err => { console.log(err); 
        });
    },[])
    

    const defaultOption = countries[0];

    function goNext(){
        if(country){
            let person={
                firstName:props.person.firstName,
                lastName:props.person.lastName,
                title:props.person.title,
                emailAdress:props.person.emailAdress,
                phoneNumber:props.person.phoneNumber,
                country:country,
                city:cityRef.current.value,
                street:streetRef.current.value,
                optin:props.person.optin
            }
            props.setPerson(person);
            props.setStep(props.step+1)
        }
    }

    function saveSelectValue(e){
        setIsCountry(true)
        setCountryValue(e.value);
    }

    return(
        <>
        <Dropdown style={{width: '25%'}} options={countries.countries} 
            value={defaultOption} onChange={(e) => saveSelectValue(e)}
            placeholder="Select a country"/>
        <span className="reqs" hidden={country}>field required</span><br/>
        <input ref={cityRef} type="text" placeholder="city"/><br/>
        <input ref={streetRef} type="text" placeholder="street"/><br/>
        <button onClick={()=>props.setStep(props.step-1)}>back</button>
        <button onClick={()=>goNext()}>next</button>
        </>
    )
}

export default Adress;
