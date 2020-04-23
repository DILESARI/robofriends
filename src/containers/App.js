import React, {Component} from 'react';
import CardList from '../components/CardList';
// import {ensayo} from './ensayo';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

// const state = {
//     robots: robots,
//     searchfiel: '',
// }

// const App = () =>{
class App extends Component {
    constructor() {
        super()
        this.state = {
            // robotos: ensayo,
            robotos: [],
            searchField: '',
        }
    }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users', { mode: 'no-cors'})
    .then(response => {
        return response.json();
    })
    .then (usuarios => this.setState({robotos:usuarios}))
    
}

    searchBoxChange = (quePaso) => {
        this.setState({searchField:quePaso.target.value})
        // console.log(quePaso.target.value);
        
        // move this part to the render
        // const filteredRobots = this.state.robots.filter(robot => {
        //     return (
        //         robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        //     )
        // })
        // console.log(filteredRobots);
    }

    render(){
        const filteredRobots = this.state.robotos.filter(robot => {
            return (
                robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
            )
        })
        
        if (this.state.robotos.length === 0){
            return (
                <div>
                <h1 className='tc pa2 f1 grow'>ROBOFRIENDS</h1>
                <h3 className='pa2 f4'>Loading....</h3>
                </div>
            )
           
        }else{
            return (
                <div className='tc'>
                    <h1 className='f1 grow'>ROBOFRIENDS</h1>
                    <SearchBox searchChange = {this.searchBoxChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            {/* <CardList robots={robots}/> */}
                            <CardList robotcillos ={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }    
}

export default App;