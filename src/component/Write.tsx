import React from 'react';

const Write = () => {
    return (
        <>
            <h1>글쓰기</h1>
            <form>
                <label>
                    제목: <input type="text" name="brd_title" />
                </label>
                <label>
                    작성자: <input type="text" name="user_id" />
                </label>
                <br/>
                <br/>
                <label>
                    내용: <textarea name="brd_content" cols={25} rows={5}></textarea>
                </label>
                <button type='submit'>등록</button>
            </form>
        </>
    );
};

export default Write;