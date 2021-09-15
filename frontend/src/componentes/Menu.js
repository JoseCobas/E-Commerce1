import React from 'react';
import { NavLink} from 'react-router-dom';

const Menu = ({count}) => {
	return (
            <nav className="navbar navbar-expand-md navbar-dark bg-primary" style={{minWidth:"400px"}}>
                <div className="container">
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link active" style={{color:"black"}} to="/" > Home <span className="sr-only">(current)</span> </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" style={{color:"black"}} to="/mobiles" >Mobiles</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" style={{color:"black"}}  to="/headphones" > Headphones</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" style={{color:"black"}}  to="/laptops" > Laptops</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="mr-auto order-0">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link d-flex"  to="/checkout"> 
                                <div className="mt-auto" style={{color:"black"}}> 
                                    {  count } 
                                </div>
                                <img src={process.env.PUBLIC_URL + `/Assets/shopping-cart.png`} width='30' alt="logo"/> 
                            </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/login"> 
                                <img src={process.env.PUBLIC_URL + `/Assets/login.png`} width='30' alt="logo" /> 
                            </NavLink>
                        </li> 
                    </ul>
                </div>
                </div>
            </nav>       

	);
}

export default Menu;

/*
<nav classNameName="navbar navbar-expand-lg navbar-light bg-black">
                <a className="navbar-brand" href="/">Prueba</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/mobiles">Mobiles</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/headphones">Headphones</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/laptops">Laptops</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="//checkout"> <img src={process.env.PUBLIC_URL + `/Assets/shopping-cart.png`} width='30' alt="logo"/> </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/login"> <img src={process.env.PUBLIC_URL + `/Assets/login.png`} width='30' alt="logo" /> </a>
                        </li>                                        
                    </ul>
                </div>
            </nav>
 */