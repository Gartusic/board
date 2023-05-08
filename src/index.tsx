import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Board from './component/Board';
import Write from './component/Write';
import RootLayout from './routes/RootLayout';
import BoardDetail from './component/BoardDetail';
const router = createBrowserRouter([ //경로에 따라 보여줄 파일들을 정의
  {path: '/', element: <RootLayout/>, children: [ // <RootLayout/> 라우트는 다른 라우트들을 감싸는 라우트이다. 즉 다른 화면을 라우팅해도 <RootLayout/>는 항상 화면에 유지되게 된다.
    {path: '', element: <App/>}, //our domain
    {path: '/board', element: <Board/>},
    {path: '/detail/:brd_id', element: <BoardDetail brd_id={0}/>},
    {path: '/write', element: <Write/>},
  ]},
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
