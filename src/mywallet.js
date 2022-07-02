import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import CadastroUsuario from './pages/cadastro';
import TelaInicial from './pages/telainicial';

export default function MyWallet(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<CadastroUsuario />} />
                <Route path='/inicio' element={<TelaInicial />} />
                {/* <Route path='/entradas' element={<CadastroEntradas />} />
                <Route path='/saidas' element={<CadastroSaidas />} />   */}
            </Routes>
        </BrowserRouter>
    )
}