import React, {Component} from 'react';
import Search from "./components/Search";
import List from "./components/List";

class App extends Component {
    render() {
        return (
            <div>
                <Search />
                <List />
            </div>
        );
    }
}

export default App;