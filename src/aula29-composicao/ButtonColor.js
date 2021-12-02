import React from 'react'
import { Component } from 'react';
import Button from './Button';
import Square from './Square';

class ButtonColor extends Component{
    constructor(){
        super()
        this.state = {
            cor: 'yellow'
        }
    }

    render(){
        return(
            <div>
            <Square cor={this.state.cor}/>

            {['red', 'blue', 'green'].map((cor)=> (
                <Button 
                key={cor} 
                color={cor} 
                handleClick={()=>this.setState({cor})}>
                {cor}
                </Button>
            )) }
            </div>
        )
    }
}
export default ButtonColor