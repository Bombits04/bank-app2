import './../App.css';
import logo from "../../src/assets/images/logo.png";
import { BrowserRouter, Link } from "react-router-dom";
// import ClientPage from './Bank-Client';
// import EmployeePage from './Bank-Employee';


function Home(){
    return (
        <div className="home">
            <img src={logo} alt='logo' className="logo"></img>
            <style>{'body { background-color: #124E66; }'}</style>
            <br>
            </br>
            <div class="flex-parent jc-center">
                <BrowserRouter>
                    <Link to="/Bank-Employee">
                        <img src={require("../../src/assets/images/bank-employee.png")} className="btnleft" alt='employee' />
                    </Link>
                    <Link to="/Bank-Client">
                        <img src={require("../../src/assets/images/bank-client.png")} className="btnright" alt='client' />
                    </Link>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default Home;