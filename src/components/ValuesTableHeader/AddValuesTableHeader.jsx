import React from 'react';
import './AddValuesTableHeader.css';
import 'bootstrap/dist/css/bootstrap.css';


const TableHeader = ({ data }) => {

    const getBackground = (percent) => {
        return percent > 0 ? 'green' : 'red'
    }

    const handleChange = (event) => {
        const {id, value} = event.target
        this.setState({
            [id] : value
        })
    }
    
    const allDatas = data.map(data => {
        console.log(data);
        return (
            <tr id='tableRow' key={data.id}>
                <td >{data.name}</td>
                <td>{data.symbol}</td>
                <td>{data.quote.USD.price}</td>
                <td style={{backgroundColor: getBackground(data.quote.USD.percent_change_24h)}}>{data.quote.USD.percent_change_24h}</td>
               <td><input placeholder='amount' id='myAmount'/><br />
               <button onClick={this.handleChange}>Submit</button></td>
               <td></td>
            </tr>
        )
    })

    return (
        <div className="container">
            <div id='headerTableView' className="row">
                <div className="col-12">
                    <table className='tableView'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Short name</th>
                                <th>$ Value</th>
                                <th>last 24</th>
                                <th>Amount you own</th>
                                <th>$ value of your coin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allDatas}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TableHeader;