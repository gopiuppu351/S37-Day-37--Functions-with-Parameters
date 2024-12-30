import React from 'react'

function VariablesParameters() {
    
<h1>Varibles</h1>
    let calculateViratKohliResult = ()=>{
        let telMarks = 91;
        let hinMarks = 92;
        let engMarks = 93;
        let mathsMarks = 94;
        let sciMarks = 95;
        let socMarks = 96;

        let passMarks = 35;

        if( telMarks >= passMarks && hinMarks >= passMarks && engMarks >= passMarks && 
            mathsMarks >= passMarks && sciMarks >= passMarks && socMarks >= passMarks 
        ){
            console.log(`ViratKohli Passed in Tenth`)
        }else{
            console.log(`ViratKohli Failed in Tenth`)
        }

    }
    let calculateMSDhoniResult = ()=>{
        let telMarks = 81;
        let hinMarks = 82;
        let engMarks = 83;
        let mathsMarks = 84;
        let sciMarks = 85;
        let socMarks = 86;

        let passMarks = 35;

        if( telMarks >= passMarks && hinMarks >= passMarks && engMarks >= passMarks && 
            mathsMarks >= passMarks && sciMarks >= passMarks && socMarks >= passMarks 
        ){
            console.log(`MSDhoni Passed in Tenth`)
        }else{
            console.log(`MSDhoni Failed in Tenth`)
        }

    }
    let calculateRohitSharmaResult = ()=>{
        let telMarks = 71;
        let hinMarks = 72;
        let engMarks = 73;
        let mathsMarks = 74;
        let sciMarks = 34;
        let socMarks = 76;

        let passMarks = 35;

        if( telMarks >= passMarks && hinMarks >= passMarks && engMarks >= passMarks && 
            mathsMarks >= passMarks && sciMarks >= passMarks && socMarks >= passMarks 
        ){
            console.log(`RohitSharma Passed in Tenth`)
        }else{
            console.log(`RohitSharma Failed in Tenth`)
        }

    }
    calculateViratKohliResult();
    calculateMSDhoniResult();
    calculateRohitSharmaResult(); 

<h1>Parameters</h1>
    let calculateStudentResult = (telMarks,hinMarks,engMarks,mathsMarks,sciMarks,socMarks,studentName)=>{
        let passMarks = 35;
        if(telMarks >= passMarks && hinMarks >= passMarks && engMarks >= passMarks &&
           mathsMarks >= passMarks && sciMarks >= passMarks && socMarks >=passMarks
        ){
            // alert(`${studentName} Passed in Tenth`)
            console.log(`${studentName} Passed in Tenth`)
        }else{
            // alert(`${studentName} Failed in Tenth`)
            console.log(`${studentName} Failed in Tenth`)
        }
    }
    calculateStudentResult(91,92,93,94,95,96,"Ramu");
    calculateStudentResult(81,82,83,84,85,86,"Setha");
    calculateStudentResult(81,82,83,34,85,86,"Lakshman");
  return (
    <div>
      <h1>Learning Functions with Parameters</h1>
      <button type='button' onClick={()=>{
        calculateViratKohliResult();
        calculateMSDhoniResult();
        calculateRohitSharmaResult();
      }} >Variables</button>
      <button type='Button' onClick={()=>{
       calculateStudentResult(91,92,93,94,95,96,"Ramu");
       calculateStudentResult(81,82,83,84,85,86,"Setha");
       calculateStudentResult(81,82,83,34,85,86,"Lakshman");
      }}>Parameters</button>
    </div>
  )
}

export default VariablesParameters
