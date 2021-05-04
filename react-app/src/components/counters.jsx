import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
     }
     handleDelete = (counterId) => {
         const counters = this.state.counters.filter(counter => counter.id !== counterId)
         this.setState({counters})
        
     }
     handleReset = () =>{
         this.state.counters.map(counter =>{
            counter.value = 0;
             return counter;
         });
         this.setState({ counters: this.state.counters });
     }
     handleIncrement = counter => {
       const counters = [...this.state.counters];
       const index = counters.indexOf(counter);
       counters[index] = {...counter}
       counters[index].value++;
       this.setState({counters})
    }
    render() { 
        return ( <div>
           <button onClick={this.handleReset} className="button.btn.btn-primary.btn-sm.m-2">Reset</button>
        
           {this.state.counters.map(counter => 
           <Counter key={counter.id} onDelete={this.handleDelete} onIncrement={this.handleIncrement} counter={counter}
           />)}
        </div> );
    }
}
 
export default Counters;