import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import InitialPage from './pages/telainicial';
import EntryRegister from './pages/telaentradas';
import UserSignUp from './pages/cadastro';
import ExitRegister from './pages/telasaidas';

export default function MyWallet(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<UserSignUp />} />
                <Route path='/inicio' element={<InitialPage/>} />
                <Route path='/entrada' element={<EntryRegister />} />
                <Route path='/saida' element={<ExitRegister />} />   
            </Routes>
        </BrowserRouter>
    )
}