import React from 'react';
import { Link } from 'react-router-dom';

const BoardItem:React.FC<{index:number; title:string;}> = (props) => {
    return (
        <>
            <li>{props.index+1} - {props.title}, </li>
        </>
    );
};

export default BoardItem;