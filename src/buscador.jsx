import React from "react";
import  Navbar  from './navbar';
// import { useTranslation } from 'react-i18next';
// import { changeLanguage } from 'i18next';
class PokemonApi extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        name2: '#',
        img: '#',
        img2: '#',
        shiny: '#',
      }
    }
    
    /*
    async componentDidMount(){
      await this.fetchJale()
    }*/
  
    fetchJale = async () => {
      //let res = await fetch('https://pokeapi.co/api/v2/pokemon/venusaur')
      let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
      let data = await res.json()
  
      // console.log(data['sprites']['front_default'])
      console.log(data.name);
     
      this.setState({
        name: data.sprites.name,
        img: data.sprites.front_default,
        img2: data.sprites.back_default,
        shiny: data.sprites.front_shiny,
      })
    }
    
  
    handleName = event => {
      this.setState({
        name: event.target.value
      })
    }
    
  
    handleSubmit = event =>{
      // var nombre = this.state.name;
      // // alert(nombre)
      this.fetchJale()
      //limpiar
      this.setState({
        name: '',
      })
      event.preventDefault()
    }

  
  render() {
      
          return (
          <div>
            <Navbar/>
          <div className="card text-center">
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>    
                <input 
                    class="form-control"
                    placeholder="Ingrese nombre o ID"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleName}
                />
                <br/>
                <button type="submit" className="btn btn-primary">Search</button>            
              </form> 
            </div>
            <div className="card text-center">
              <div className="card-body">
                    <img src={this.state.img} width="130" height="130" alt="Pokemon" />   
              </div>
            </div>
          </div>
          </div>
          );
      }
  
  }
  export default PokemonApi;