import './App.css';
import {Component} from "react";
import MyComponent from "./component/MyComponent";


class App extends Component {
    render() {
        return (
            <div className="App">
                <MyComponent/>
            </div>
        )
    }

}

export default App;
