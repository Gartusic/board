import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RouteBoard from '../component/RouteBoard';
//https://nowonbun.tistory.com/275


// ajax 함수
const ajax = (url: string, method = "GET", data: object | null, success: ((req: XMLHttpRequest) => void) | undefined | null = null, error: ((req: XMLHttpRequest) => void) | undefined | null = null, sync = true): void => {
  // XMLHttpRequest 객체
  let xhr = new XMLHttpRequest();
  // 버퍼 변수
  let json = "";
  // 비동기 상태 변경 이벤트
  xhr.onreadystatechange = (e) => {
    // XMLHttpRequest 객체
    let req = e.target as XMLHttpRequest;
    // null이면 처리 안함
    if (req == null) {
      return;
    }
    // 비동기 처리가 완료되면 (Code state - 4)
    if (req.readyState === XMLHttpRequest.DONE) {
      // http status 200 이면(정상 요청이면)
      if (req.status === 200) {
        // success 함수 호출
        if (success !== null && success !== undefined) {
          success.call(this, req);
        }
      } else {
        // error 함수 호출
        if (error !== null && error !== undefined) {
          error.call(this, req);
        }
      }
    }
  }
  // data 값이 null이 아니면
  if (data != null) {
    // json 타입으로 변경
    json = JSON.stringify(data);
  }
  // XMLHttpRequest 기본 설정
  xhr.open(method, url, sync);
  // XMLHttpRequest 해더 설정
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Cache-Control', 'no-cache');
  // 비동기 통신 시작
  xhr.send(json);
};
// React 시작 함수
function App() {
  // message 상태 처리
  const [message, setMessage] = useState("");
  const [cmessage, setCmessage] = useState("");
  const [time, setTime] = useState('');
  useEffect(() => {
    // 비동기 처리
    //ajax로 데이터 가져오기
    ajax("/data/hello.json", "GET", null, (msg) => {
      // 상태 변경
      setMessage(msg.responseText);
    }, null, false);

    //fetch로 데이터 가져오기 - get
    fetch(`/data/hello.json`)
        .then(res => res.text())
        .then(res => {
          if (res) {
            setCmessage(res);
            console.log("setCmessage : "+res);
          }});
          //fetch로 데이터 전송 - post
          // fetch('https://api.google.com/user', {
  //   method: 'post',
  //   body: JSON.stringify({
    //       name: "yeri",
    //       batch: 1
    //   })
    // })
    // .then(res => res.json())
    // .then(res => {
      //   if (res.success) {
        //       alert("저장 완료");
        //   }
        // })


    //axios로 데이터 가져오기 (npm install axios --save 명령어를 통해 먼저 axios를 설치해야함)
    axios.get('/time')
    .then(response => setTime(response.data))
    .catch(error => console.log(error))
  }, []);
        
        // 화면 표시
        return (
          <>
          <h1>메인화면입니다.</h1>
      <div>
        ajax로 갖고오기:
      {message}
      </div>
      <div>
        fetch로 갖고오기:
      {cmessage}
      </div>
      <div>
        axios로 갖고오기:
      {time}
      </div>

      <RouteBoard />
    </>
  );
}
 
export default App;
