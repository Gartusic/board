import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import BoardDetail from './BoardDetail';
import BoardItem from './BoardItem';

const Board:React.FC<{}> = () => {
    type boardValue = {
        user_id: string,
        brd_rgdate: Date,
        brd_chgdate: Date,
        brd_title: string,
        brd_content: string,
        brd_id: number
    }
    const [boardList, setBoardList] = useState([]);
    useEffect(() => {
        axios.get('/board')
        .then(response => setBoardList(response.data))
        .catch(error => console.log(error));
      }, []);
    return (
        <div>
            <ul>
            {boardList.length ? boardList.map((boardValue:boardValue, index) =>(
                    <Link to={`/detail/${boardValue.brd_id}`}><BoardItem key={boardValue.brd_id} index={index} title={boardValue.brd_title}/></Link>
                )) : <p>게시물이 존재하지 않습니다.</p> }
            </ul>
        </div>
    );
};

export default Board;