/*
import React, { Component } from 'react';
import {useEffect} from 'react';

const Pagination = ({totalPosts, perPage, paginate}) => {
    const pageNumber = [];

    for(let i =0; i <= Math.ceil(totalPosts / perPage); i++) {
        pageNumber.push(i);
    }
    return (
        <nav>
            <ul className='pagination'>
                {pageNumber.map(number => {
                    <li key={number} className='page-item'>
                        <a onClick = {()=> paginate(number)} href='#' className='page-link'>
                            {number}
                        </a>
                    </li>
                })}
            </ul>
        </nav>
    )
    
}

export default Pagination;
*/