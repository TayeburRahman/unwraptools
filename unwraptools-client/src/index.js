import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-quill/dist/quill.snow.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import App from './App';
import { store } from './app/store';
import AuthProvider from './Firebase/Context/AuthProvider';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
    <Provider store={store}> 
      <AuthProvider> 
        <App />
        </AuthProvider>
     </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

 
reportWebVitals();
