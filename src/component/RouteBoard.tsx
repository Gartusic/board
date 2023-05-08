import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import Board from './Board';
import Write from './Write';
import BoardDetail from './BoardDetail';
const RouteBoard = () => {
    return (
        <div>
            <Routes>
                <Route path={`/board`} element={<Board />}/>
                <Route path={`/detail/:brd_id`} element={<BoardDetail brd_id={0} />}/>
                <Route path={`/write`} element={<Write />}/>
            </Routes>

        </div>
    );
};

export default RouteBoard;