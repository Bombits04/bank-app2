import './../../App.css';
import logo from "../../../src/assets/images/logo.png";
import { NavLink } from 'react-router-dom';
import employeeImg from "../../../src/assets/images/bank-employee.png";
import clientImg from "../../../src/assets/images/bank-client.png";

function Home(){
    return (
        <div className="home">
        <img src={logo} alt='logo' className="logo"></img>
        <style>{'body { background-color: #124E66; }'}</style>
        <br>
        </br>
        <div class="flex-parent jc-center">
             <nav>
                    <NavLink className='item' to='employee'><img src={employeeImg} className='btnleft' alt='sample# link'></img></NavLink>
                    <NavLink className='item' to='client'><img src={clientImg} className='btnleft' alt='sample link'></img></NavLink>
             </nav>
        </div>
    </div>
        
    )
}

export default Home;