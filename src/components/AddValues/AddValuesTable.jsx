import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class AddValuesTable extends Component {
    state = {
        newData : {
            name: '',
            shortName: '',
            $value: '',
            amount: '',
            yourCoin: ''
        }
    }

    changeHandler = (event) => {
       let id = event.target.id;
       let newDataCopy = {...this.state.newData};
       newDataCopy[id] = event.target.value;
       this.setState({
           newData: newDataCopy
       })
    }

    addNewData = ({props}) => {
        this.props.addNewDataToState(this.state.newData)
        this.props.history.push('/')
        console.log(this.state.newData);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <input type='text' onChange={this.changeHandler} placeholder='name' id='name' className='form-control' /> <br />
                        <input type='text' onChange={this.changeHandler} placeholder='short name' id='shortName' className='form-control' /> <br />
                        <input type='text' onChange={this.changeHandler} placeholder='value in $' id='$value' className='form-control' /> <br />
                        <input type='text' onChange={this.changeHandler} placeholder='last 24' id='last24' className='form-control' /> <br />
                        <input type='text' onChange={this.changeHandler} placeholder='your amount' id='amount' className='form-control' /> <br />
                        <input type='text' onChange={this.changeHandler} placeholder='your coin' id='yourCoin' className='form-control' /> <br />
                        <button type='submit' onClick={this.addNewData} className='btn btn-info form-control'>Submit</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(AddValuesTable);
