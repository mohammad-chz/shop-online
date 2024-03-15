import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./fonts/Vazirmatn-Regular.ttf"
import "./fonts/Vazirmatn-Black.ttf"
import "./fonts/Vazirmatn-Bold.ttf"
import "./fonts/Vazirmatn-ExtraBold.ttf"
import "./fonts/Vazirmatn-ExtraLight.ttf"
import "./fonts/Vazirmatn-Light.ttf"
import "./fonts/Vazirmatn-Medium.ttf"
import "./fonts/Vazirmatn-SemiBold.ttf"
import "./fonts/Vazirmatn-Thin.ttf"
import ShopContexProvider from './context/ShopContex';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ShopContexProvider>
    <App />
  </ShopContexProvider>
 </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
