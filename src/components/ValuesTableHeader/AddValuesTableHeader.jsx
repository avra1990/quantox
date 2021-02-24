import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const TableHeader = ({ data }) => {

    return (
        <div className="container">
            <div id='headerTableView' className="row">
                <div className="col-10 offset-1">
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
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TableHeader;