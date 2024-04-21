import React, {Component} from 'react';
import Searchbox from '../components/Searchbox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import './App.css';
import { robots } from './robots';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        this.setState({robots: robots})
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render() {
        const { robots, searchfield } = this.state;
        const filteredKittens = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
        <h1 className="tc"> LOADING.... </h1> :
        (
            <div className='tc'>
                <div className='pa2'>
                    <h1 className='f1'>KittenFriends</h1>
                    <Searchbox searchChange={this.onSearchChange} />
                </div>
                <Scroll>
                    <CardList robots={filteredKittens} />
                </Scroll>
            </div>
        )
    }
}

export default App;