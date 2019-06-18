import React, {Component} from 'react';

import './App.css';




class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        display: '0',
        //false if evaluation
        trueIfExpression: true

      }

     // this.arrayOfDigits = this.state.display.split(/\+|-|\*|\//);
      //console.log(this.arrayOfDigits);
      

      this.handleDigits = this.handleDigits.bind(this);
      this.handleDecimal = this.handleDecimal.bind(this);
      this.handleOperators = this.handleOperators.bind(this);
      this.clearDisplay = this.clearDisplay.bind(this);
      this.equalsExecute = this.equalsExecute.bind(this);
     
//<div id="drum-machine" className="mx-auto text-center" style={{width: '350px', height: '420px', minWidth: '350px', borderRadius: '5px', backgroundColor: 'LightBlue', borderStyle: 'solid', borderWidth: '2px', borderColor: 'dodgerblue'}}>

    }
 

    handleDigits(passedVar) {
          /// !!!!! problem with zeros!!!!!
    let arrayOfDigits = this.state.display.split(/\+|-|\*|\//);
   
    if (this.state.display.length === 24) {
      return;
    }  


    if(this.state.trueIfExpression) {
        ///comment
      if (arrayOfDigits[arrayOfDigits.length-1] === '0' && passedVar === '0') {
        return;
      } 
    
     //this.state.display === '0'
    if (arrayOfDigits[arrayOfDigits.length-1] === '0') {
      this.setState(
        {display: '' + passedVar}
       )  
    } else {
      this.setState(
        {display: this.state.display + passedVar}
       )
    }

    } else { ////!!!
      if (arrayOfDigits[arrayOfDigits.length-1] === '0') {
        this.setState(
          {display: '' + passedVar, trueIfExpression: true}
         )  
      } else {
        this.setState(
          {display: passedVar, trueIfExpression: true}
         )
      }

    }

  }
          

    handleDecimal() {
  

     let arrayOfDigits = this.state.display.split(/\+|-|\*|\//);
     //console.log(arrayOfDigits);

     if (this.state.display.length === 24) {
      return;
    }  


      if (!arrayOfDigits[arrayOfDigits.length-1].includes('.') && arrayOfDigits[arrayOfDigits.length-1].length !== 0) {
        this.setState(
          {display: this.state.display + '.'}
        )
      }


    }

    handleOperators(operatorVar) {

      //!!!!! add changing last operator to current!!!!

      
      let lastString = this.state.display[this.state.display.length-1];

      if (this.state.display.length === 24) {
        return;
      }  
  


      if (lastString !== '+' && lastString !== '-' && lastString !== '*' && lastString !== '/' && lastString !== '.' ) {
        this.setState(
          {display: this.state.display + operatorVar, trueIfExpression: true}
        )

      } else {

        let deleteLast = this.state.display.split("").slice(0, this.state.display.length-1).join('' + '')
        console.log(deleteLast);

        this.setState(
          {display: deleteLast + operatorVar, trueIfExpression: true} /// comment
        )
      }

      



    }

    clearDisplay () {
      this.setState(
        {display: '0'}
      )
    }

    equalsExecute() {

      let lastString = this.state.display[this.state.display.length-1];
      if (lastString !== '+' && lastString !== '-' && lastString !== '*' && lastString !== '/' ) {

      
        this.setState (
          //comment!
// eslint-disable-next-line
         {display: eval(this.state.display).toString(), trueIfExpression: false}
       )
         
      } //else {

        //let deleteLastOperator = this.state.display.slice(this.state.display[0], this.state.display[this.state.display.length-1]);
        //console.log(deleteLastOperator);

        //this.setState (
          // eslint-disable-next-line
         // {display: eval(deleteLastOperator).toString(), trueIfExpression: false}
        //)

      }
     
      
    


    render() {
      return (
        
            <Display display={this.state.display} handleDigits={this.handleDigits} clearDisplay={this.clearDisplay} handleDecimal={this.handleDecimal}
              equalsExecute={this.equalsExecute} handleOperators={this.handleOperators}
            />
        
      )
    }
  }




 function Display (props) {

    

    return (

<div className="App container-fluid" >
          <div className="d-flex align-items-center" style={{height: '100vh', marginLeft: '-15px', marginRight: '-15px', backgroundColor: 'whitesmoke' }}>

      <div id="drum-machine" className="mx-auto text-center" style={{width: '350px', height: '420px', minWidth: '350px', borderRadius: '5px', backgroundColor: 'whitesmoke'}}>
        <br/>
        <button  className="btn  m-1" onClick={() => props.handleDigits('7')} id="seven" >7</button>
        <button  className="btn  m-1" onClick={() => props.handleDigits('8')}   id="eight" >8</button>
        <button  className="btn  m-1" onClick={() => props.handleDigits('9')}  id="nine" >9</button>
        <button  className="btn  m-1" onClick={() => props.clearDisplay()} id="clear" ><p>c</p></button>
        <div className="w-100"></div>
        <button className="btn  m-1" onClick={() => props.handleDigits('4')} id="four" >4</button>
        <button  className="btn  m-1" onClick={() => props.handleDigits('5')}   id="five" >5</button>
        <button  className="btn  m-1" onClick={() => props.handleDigits('6')}   id="six">6</button>
        <button  className="btn  m-1 operator" onClick={() => props.handleOperators('*')} style={{width: '30.5px'}}   id="multiply"><p>*</p></button>
        <button  className="btn  m-1 operator" onClick={() => props.handleOperators('/')} style={{width: '30.5px'}}    id="divide"><p>/</p></button>
        <div className="w-100"></div>
        <button  className="btn  m-1" onClick={() => props.handleDigits('1')}  id="one" >1</button>
        <button className="btn  m-1" onClick={() => props.handleDigits('2')}   id="two">2</button>
        <button  className="btn  m-1"  onClick={() => props.handleDigits('3')}  id="three">3</button>
        <button  className="btn  m-1 operator" onClick={() => props.handleOperators('+')} style={{width: '30.5px'}}   id="add"><p>+</p></button>
        <button  className="btn  m-1 operator" onClick={() => props.handleOperators('-')} style={{width: '30.5px'}}  id="subtract"><p>-</p></button>
        <div className="w-100"></div>
        <button  className="btn  m-1" onClick={() => props.handleDigits('0')} style={{width: '147px'}}  id="zero">0</button>
       
        <button  className="btn  m-1" onClick={() => props.handleDecimal()}   id="decimal">.</button>
        <button  className="btn  m-1 operator" onClick={() => props.equalsExecute()} id="equals"   ><p>=</p></button>
       
        <br/><br/>
        <div className="mx-auto" style={{width: '304px', backgroundColor: 'black', borderRadius: '3px'}}>
          
         <p className="mx-auto text-center" style={{fontFamily: 'droid-serif, sant-serif', fontSize: '1.5em' }} id='display'>{props.display}</p>
        
        </div>

      </div>
      </div>
      </div>
        
    )

 } 




export default App;





/*
function App() {
  return (
    <div className="App">
      
       
        <p>
         test
        </p>
   
    </div>
  );
}

export default App;
*/