import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import PasswordRecovery from '../containers/PasswordRecovery';
import '../styles/global.css';

const App = () => {
    return ( 
        <BrowserRouter>
                <Layout>
                    <Routes>
                        {/* <Route exact path='/' component={<Home/>}/> */}
                        <Route exact path='/login' component={<Login/>} />
                        <Route exact path='/password-recovery' component={<PasswordRecovery/>} />
                        {/* <Route path='*' element={<NotFound />} /> */}
                    </Routes>
                </Layout>
        </BrowserRouter>
     );
}
 
export default App;