import React from 'react';
import {useState} from 'react';
import './AddValuesTableHeader.css';
import 'bootstrap/dist/css/bootstrap.css';
import RowTable from './RowTable';


const TableHeader = ({ data }) => {
    

    
    const allDatas = data.map((rowData, index) => {
        
        return (
            <RowTable key={index} rowData = {rowData}/>
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