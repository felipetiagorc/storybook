import React, {Component} from 'react'

class Form extends Component{
    constructor(){
        super()
        this.state = {
            checked:false,
            showContent: false
        }
    }

    render(){
        return(
            <div>
      
               <label>
               <input type="checkbox" checked={this.state.checked} 
               onChange={(e)=> {
                 this.setState({checked: e.target.checked})
                 this.setState({showContent: e.target.checked})
                 
                        }} /> 
                        MostrarConteúdo                        
                    </label>
                    {this.state.showContent && <div>Conteudo oculto</div>}


            </div>
            
        )
    }
}
export default Form