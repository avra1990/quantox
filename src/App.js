import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import AddValuesTable from './components/AddValues/AddValuesTable';
import AddValuesTableHeader from './components/ValuesTableHeader/AddValuesTableHeader'
import Header from './components/Header/Header';

class App extends Component {

    state = {
        data: [],
        loading: false
    }

    addNewDataToState = (account) => {
        this.setState({
            data: [...this.state.data, account]
        })
    }

    loader = () => {

    }

    componentDidMount() {

        fetch('https://pro-api.coinmarketcap.com')
            .then(response => response.json())
            .then(data => this.setState({
                data: data
            }))
    }

    render() {
        return (
            <BrowserRouter>
                <Header />
                <Route exact path='/' data={this.state.data}>
                    <AddValuesTableHeader />
                </Route>
                <Route path='/add_values'>
                    <AddValuesTable addNewDataToState = {this.addNewDataToState}/>
                </Route>

            </BrowserRouter>
        )
    }
}

export default App;