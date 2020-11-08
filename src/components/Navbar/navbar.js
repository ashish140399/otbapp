import React from 'react';
import logo from '../../images/logo.png';
import './navbar.css';
import socialTele from '../../images/icons/telegram.png';
import socialQues from '../../images/icons/help-web-button.png';
import socialTwitter from '../../images/icons/twitter.png';
class Navbar extends React.Component{
    render() {
        return (
            <nav className="navbar navbar-expand-sm ">
                <div className="left_nav">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="logo"  />
                    </a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Exchange</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Past Winners</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Atomic Swap</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Stake & Vote</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Lottery</a>
                        </li>
                    </ul>
                </div>
                <div className="nav-social">
                    <a className="btn-main" href="#">Login</a>
                    <img src={socialTele}></img>
                    <img src={socialTwitter}></img>
                    <img src={socialQues}></img>
                </div>
            </nav>
        );
    }
}

export default Navbar;