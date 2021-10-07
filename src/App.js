
import React, { Component } from "react"
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domains: [],
      selectedDomain:'',
      currentDomain:[]
    };
  }

 
  FetchData = (x) => {
    fetch('http://localhost:80?domain='+x)
    .then(response => response.json())
    .then(res =>
      this.setState({domains:res.domains }) 
    );
  }
  render(){
    return (
      <div className="App">
        {console.log(this.state)}
        <header className="App-header">
          <h1>Find your domain</h1>
          <input type="text" className='domain' onChange={(x)=>this.FetchData(x.target.value)} />
          {this.state.domains.length > 0 && this.state.domains.map(((items,key)=> key < 10 && <div onClick={()=>this.setState({currentDomain:items, selectedDomain:items.domain})}>{items.domain}</div>))}
        </header>
      </div>
    );
  }
}

export default App;
