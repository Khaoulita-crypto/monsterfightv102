import React from 'react'; 
//if there is in the file of robojInfo more than obj to export and we didn't write default we have to write {robots, cats, ....etc} but in our case their is only one obj we want to export right now 
import CardList from './CardList'; 
import SearchBox from  './searchBox';
import Scroll from './Scroll'; 
import ErrorBoundry from './ErrorBoundry';




class AppFather  extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

     componentDidMount (){   //it is one of the life steps react do after every refresh of the page so this function call itself by itself 
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(result =>  result.json())
         .then(users => this.setState({robots: users}) )
     }

    whenSearchEntered = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        const filteredMonsters = this.state.robots.filter( monster => {
            return monster.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase())
        } )
        return (
            <div className='tc'>
            <h1>The Strongest Monsters for Fight </h1>
            <SearchBox searchChange={this.whenSearchEntered}/>
            <Scroll>
              <ErrorBoundry>
                 <CardList robots={filteredMonsters} />
              </ErrorBoundry>
            </Scroll>
            </div>
        );
    }
    
}

export default AppFather;