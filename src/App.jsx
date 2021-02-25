import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {useEffect} from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import AddValuesTable from './components/AddValues/AddValuesTable';
import AddValuesTableHeader from './components/ValuesTableHeader/AddValuesTableHeader'
import Header from './components/Header/Header';
import Pagination from './components/Pagination/PaginationButtons';

class App extends Component {

    state = {
        data: [],
        loading: false
    }

    addNewDataToState = (account) => {
        this.setState({
            data: [...this.state.data, account],
            loading: false
        })
    }
/*
    useEffect({
        const [currentPage, setCurrentPage] = useEffect(1);
        const [perPage, setPerPage] = useEffect(10);
    }, []) 
        const indexOfLastPost = currentPage * perPage;
        const indexOdFirstPost = indexOdLastPost - perPage;
        const currentPosts = data.slice(indexOfLastPost, indexOdFirstPost);

        const paginate = (pageNumber) =>  setCurrentPage(pageNumber);
        
    
*/
    loader = () => {

    }

    componentDidMount() {
     
        const apiKey = "45de2db4-c208-4988-abb5-e1e7c9561b97"
        let qString =
            "&sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=USD",
            url = "v1/cryptocurrency/listings/latest"

        fetch(url, {
            headers: {
                "X-CMC_PRO_API_KEY": apiKey,
            },
        })
            .then((response) => response.json())
            .then((data) => {this.setState({
                    data: data.data
                })})
    }
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Route exact path='/'>
                    <AddValuesTableHeader  data={this.state.data}/>
                </Route>
                <Route path='/add_values'>
                    <AddValuesTable addNewDataToState={this.addNewDataToState} />
                </Route>
            
              

            </BrowserRouter>
        )
    }
}

export default App;