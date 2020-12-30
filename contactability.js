import React, {useRef } from 'react';
import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { Checkbox } from 'pretty-checkbox-react';


function Contactability(props) {
    const [isEmail, setIsEmail]=useState(false);
    const [isEmailFormat, setIsEmailFormat]=useState(false)
    const [isPhoneFormat, setIsPhoneFormat]=useState(false)
    const [tAndC, setTandC]=useState(false)
    const emailRef=useRef("")
    const phoneRef=useRef("")
    const optinRef=useRef(false)

    function checkEmail(){
        setIsEmail(true)
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(emailRef.current.value)){
            setIsEmailFormat(true);
        }
    }

    function checkPhone(){
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(phoneRef.current.value=="" || phoneRef.current.value.match(phoneno)){
            setIsPhoneFormat(true);
        }
    }

    function submit(){
        if(isPhoneFormat==true && isEmailFormat==true){
            let person={
                firstName:props.person.firstName,
                lastName:props.person.lastName,
                title:props.person.title,
                emailAdress:emailRef.current.value,
                phoneNumber:phoneRef.current.value,
                country:props.person.country,
                city:props.person.city,
                street:props.person.street,
                optin:optinRef.current.value
            }
            props.setPerson(person);
            fetch("http://localhost:5000/form", {
                "method": "POST",
                "body": JSON.stringify({
                    person
            })
            })
            .then(response => response.json())
            .then(response => {
            console.log(response)
            })
            .catch(err => {
            console.log(err);
            });
            console.log(person)
            props.setStep(props.step+1)
            // props.onFormSubmit()
        }
    }
    return(
        <>
        <input ref={emailRef} type="text" placeHolder="a@a.com" onChange={()=>checkEmail()}/><br/>
        <span className="reqs" hidden={isEmail}>field required</span><br/>
        <span className="reqs" hidden={isEmailFormat}>email format is required</span><br/>
        <input ref={phoneRef} type="text" placeholder="phone number" onChange={()=> checkPhone()}/><br/>
        <span className="reqs" hidden={isPhoneFormat}>phone format required (10 digits)</span><br/>
        <Checkbox ref={optinRef}>do you agree to all terms and conditions?</Checkbox>
        {/* <button onClick={()=>setTandC(!tAndC)}>terms and conditions</button><br/>
        <span hidden={!tAndC}>By being a member and using our company service, <br/>
        you agree to everything on this page.<br/>
        We have to do this to protect both you and us <br/>
        and make running this business possible.<br/>
        If you break these terms, you can’t use our service anymore.</span><br/> */}
        <button onClick={()=>props.setStep(props.step-1)}>back</button>
        <button type="submit" onClick={()=>submit()}>submit</button>
        </>
    )
}

export default Contactability;
