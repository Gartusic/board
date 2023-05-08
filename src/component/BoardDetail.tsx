import React from 'react';

const BoardDetail:React.FC<{brd_id:number}> = (props) => {
    return (
        <div>
            {props.brd_id}
            게시판 상세화면입니다.

        </div>
    );
};

export default BoardDetail;