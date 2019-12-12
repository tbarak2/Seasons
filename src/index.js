import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';

class App extends React.Component{
    state = {lat:null,errorMessage:''};
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=> this.setState({lat:position.coords.latitude}),
            (err)=>this.setState({errorMessage:err.message})
        );
    };

    renderBody(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>err:{this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
            //return <div>Latitude:{this.state.lat}</div>
        }
        return <Spinner message= "waiting to approve location...."></Spinner>
    }
    render(){
        return(
            <div className="border red">
                {this.renderBody()}
            </div>
        )
        
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'))