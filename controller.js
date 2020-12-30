
'use strict';
 
var validator = require("email-validator");

module.exports = {
    getCountries: (req, res) => {
        try{
            res.status(200).json({countries:["Israel", "France", "England", "Belgium"]})
        }catch(error){
            res.status(500).send(error)
        }

    },
    submitPerson: (req, res) => {
        try{
            console.log(req.body)
          var  person=req.body;
            if(person.firstName!="" && person.lastName!="" && person.emailAdress!="" && person.phoneNumber!=""){
                console.log('line 18')
                // console.log( phone('+97253-3199086'))
                var numbers = /^[0-9]+$/;
                var phone=person.phoneNumber;
                if(validator.validate(person.emailAdress) && phone.match(numbers)){
                    res.status(200).send("ok 200")
                }
            }else  res.status(200).send("not ok 2200")

        }
        catch(error){
            console.log('error: ',error)
            res.status(500).send(error)
        }
        
    },

}
