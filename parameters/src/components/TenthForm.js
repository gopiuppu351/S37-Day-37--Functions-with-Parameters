import React, { useRef } from 'react'

function TenthForm() {
     let firstNameRef = useRef();
     let lastNameRef = useRef();

     let telInputRef = useRef();
     let hinInputRef = useRef();
     let enlInputRef = useRef();
     let mathsInputRef = useRef();
     let sciInputRef = useRef();
     let socInputRef = useRef();

     let resultLabelRef = useRef();
     let calculateBtnRef =useRef();

     let telSpanResultRef = useRef();
     let hinSpanResultRef = useRef();
     let enlSpanResultRef = useRef();
     let mathsSpanResultRef = useRef();
     let sciSpanResultRef = useRef();
     let socSpanResultRef = useRef();

     
    let firstNameOnChange = (inputRef)=>{ 
      inputRef.current.style.backgroundColor = "#5CB338" }
     
    let lastNameOnChange = (inputRef)=>{ 
      inputRef.current.style.backgroundColor = "#5CB338"; }
     

    let inputOnFocus = (inputRef)=>{
      inputRef.current.style.backgroundColor = "yellow"; }
    let inputOnChange = (inputRef,SpanRef)=>{
     inputRef.current.style.backgroundColor = "#5CB338"
               let marks = inputRef.current.value;
               if(marks >=0 && marks <=100){
                 if(marks >= 35){
                   SpanRef.current.innerHTML = "Pass😎";
                   SpanRef.current.style.backgroundColor = "green"
                 }else{
                   SpanRef.current.innerHTML = "Fail😢";
                   SpanRef.current.style.backgroundColor = "red"
                 }
                 calculateBtnRef.current.style.display = "inline-block"

               }else{
                 SpanRef.current.innerHTML = "Invalid😦"
                 SpanRef.current.style.backgroundColor = "#7E5CAD"
                 calculateBtnRef.current.style.display = "none"
               }
              }
    let inputOnBlur = (inputRef)=>{
      inputRef.current.style.backgroundColor = ""; }

    let calculateResult =()=>{ 
      let firstName = firstNameRef.current.value;
                let lastName = lastNameRef.current.value;
                let telMarks = Number(telInputRef.current.value);
                let hinMarks = Number(hinInputRef.current.value);
                let enlMarks = Number(enlInputRef.current.value);
                let mathsMarks = Number(mathsInputRef.current.value);
                let sciMarks = Number(sciInputRef.current.value);
                let socmarks = Number(socInputRef.current.value);
                let result;

                let totalMarks = telMarks+hinMarks+enlMarks+mathsMarks+sciMarks+socmarks;

                if(telMarks >=35 && hinMarks >=35 && enlMarks >=35 && mathsMarks >=35 && 
                  sciMarks >=35 && socmarks >=35
                ){
                  result = "Passed😎"

                }else{
                  result = "Failed😢"
                  
                }
                resultLabelRef.current.innerHTML = `${firstName} ${lastName} ${result} in Tenth and Total Marks Are  ${totalMarks}.`
     }

  return (
    <div>
        <form>
          <fieldset>
          <legend>MarkSheet Form</legend>
            <div>
              <label>First Name</label>
              <input type='text' ref={firstNameRef} 
              onFocus={()=>{ inputOnFocus(firstNameRef) }}
              onChange={()=>{ firstNameOnChange(firstNameRef) }} 
              onBlur={()=>{ inputOnBlur(firstNameRef) }}></input>
            </div>
            <div>
              <label>Last Name</label>
              <input type='text' ref={lastNameRef}
              onFocus={()=>{ inputOnFocus(lastNameRef) }}
              onChange={()=>{ lastNameOnChange(lastNameRef) }} 
              onBlur={()=>{ inputOnBlur(lastNameRef) }}></input>
            </div>
            <div>
              <label>Telugu</label>
              <input type='number' ref={telInputRef} 
              onFocus={()=>{ inputOnFocus(telInputRef) }} 
              onChange={()=>{ inputOnChange(telInputRef,telSpanResultRef) }} 
              onBlur={()=>{ inputOnBlur(telInputRef) }}></input>
              <span ref={telSpanResultRef}></span>
            </div>
            <div>
              <label>Hindi</label>
              <input type='number' ref={hinInputRef} 
              onFocus={()=>{ inputOnFocus(hinInputRef) }} 
              onChange={()=>{ inputOnChange(hinInputRef,hinSpanResultRef) }} 
              onBlur={()=>{ inputOnBlur(hinInputRef) }}></input>
              <span ref={hinSpanResultRef}></span>
            </div>
            <div>
              <label>English</label>
              <input type='number' ref={enlInputRef}
              onFocus={()=>{ inputOnFocus(enlInputRef) }} 
              onChange={()=>{ inputOnChange(enlInputRef,enlSpanResultRef) }} 
              onBlur={()=>{ inputOnBlur(enlInputRef) }}></input>
              <span ref={enlSpanResultRef}></span>
            </div>
            <div>
              <label>Mathematics</label>
              <input type='number' ref={mathsInputRef}
              onFocus={()=>{ inputOnFocus(mathsInputRef) }} 
              onChange={()=>{ inputOnChange(mathsInputRef,mathsSpanResultRef) }} 
              onBlur={()=>{ inputOnBlur(mathsInputRef) }}></input>
              <span ref={mathsSpanResultRef}></span>
            </div>
            <div>
              <label>Science</label>
              <input type='number' ref={sciInputRef}
              onFocus={()=>{ inputOnFocus(sciInputRef) }} 
              onChange={()=>{ inputOnChange(sciInputRef,sciSpanResultRef) }} 
              onBlur={()=>{ inputOnBlur(sciInputRef) }}></input>
              <span ref={sciSpanResultRef}></span>
            </div>
            <div>
              <label>Social</label>
              <input type='number' ref={socInputRef}
              onFocus={()=>{ inputOnFocus(socInputRef) }} 
              onChange={()=>{ inputOnChange(socInputRef,socSpanResultRef) }} 
              onBlur={()=>{ inputOnBlur(socInputRef) }}></input>
              <span ref={socSpanResultRef}></span>
            </div>
            <div className='buttonDiv'>
              <button className='innerbutton'  ref={calculateBtnRef} type="button" onClick={()=>{ calculateResult(); }}>
                Calculate</button>
                </div>
            <div>    
              <label className='innerLabel' ref={resultLabelRef} >Please Enter Your Marks and Calculate</label>
            </div>
            </fieldset>
        </form>
    </div>
  )
}

export default TenthForm
