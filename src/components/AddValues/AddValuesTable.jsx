import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class AddValuesTable extends Component {
    constructor(props) {
        console.log(props)
        super(props)
    }

    state = {
        newData : {
            name: '',
            shortName: '',
            $value: '',
            last24: '',
            amount: '',
            yourCoin: ''
        }
    }

    changeHandler = (event) => {
       const {name, value} = event.target;
       this.setState({
           newData: {...this.state.newData, [name]: value }
       })
    }

    addNewData = ( event) => {
        event.preventDefault();
        const objParams = {
            id: this.props.data.length,
            name: this.state.newData.name,
            symbol: this.state.newData.shortName,
            quote: {
                USD: {
                    price: this.state.newData.$value,
                    percent_change_24h: this.state.newData.last24
                }
            }
            
        }
        
        this.props.addNewDataToState(objParams)
        this.props.history.push('/')
       console.log(this.state.newData);

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <input type='text' onChange={this.changeHandler} placeholder='name' value={this.state.name} name='name' className='form-control' /> <br />
                        <input type='text' onChange={this.changeHandler} placeholder='short name'  value={this.state.shortName}name='shortName' className='form-control' /> <br />
                        <input type='text' onChange={this.changeHandler} placeholder='value in $'  value={this.state.$value} name='$value' className='form-control' /> <br />
                        <input type='text' onChange={this.changeHandler} placeholder='last 24'  value={this.state.last24} name='last24' className='form-control' /> <br />
                        <input type='text' onChange={this.changeHandler} placeholder='your amount'  value={this.state.amount} name='amount' className='form-control' /> <br />
                        <input type='text' onChange={this.changeHandler} placeholder='your coin'  value={this.state.yourCoin} name='yourCoin' className='form-control' /> <br />
                        <button type='submit' onClick={this.addNewData} className='btn btn-info form-control'>Submit</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(AddValuesTable);
