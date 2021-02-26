import React from 'react';
import {useState} from  'react';
import './AddValuesTableHeader.css';

const RowTable = ({rowData}) => {
    
    
    const [inputValue, setInputValue] = useState('');
    const [cellValue, setCellValue] = useState(() => {
        
        const strAmount = localStorage.getItem("amount")
        const objAmount = JSON.parse(strAmount)
        return strAmount ? objAmount[rowData.id] : ''

    });
    

    const getBackground = (percent) => {
        return percent > 0 ? 'green' : 'red'
    }

    const handleClick = (event) => {
         setCellValue(inputValue)
         setInputValue('')
         let myObj = {
             [rowData.id] : inputValue
         }
         const strAmount = localStorage.getItem("amount")
        
        if(strAmount) {
            const objAmount = JSON.parse(strAmount)
            let newAmount = {
                ...objAmount, ...myObj
            } 
            localStorage.setItem('amount', JSON.stringify(newAmount))
        } else {
            localStorage.setItem('amount', JSON.stringify(myObj))
        }
      }
  
      const handleChange = (event) => {

          setInputValue(event.target.value)
      }

    return (
        <tr key={rowData.id}>
            <td >{rowData.name}</td>
            <td>{rowData.symbol}</td>
            <td>{rowData.quote.USD.price}</td>
            <td style={{ backgroundColor: getBackground(rowData.quote.USD.percent_change_24h) }}>{rowData.quote.USD.percent_change_24h}</td>
            <td><input value={inputValue} placeholder='amount'onChange={handleChange}/><br />
                <button onClick={handleClick}>Submit</button></td>
            <td>{cellValue}</td>
        </tr>
    );
}
export default RowTable;