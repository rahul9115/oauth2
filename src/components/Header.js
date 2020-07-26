import React from 'react';
import image from "./images/images.jpg";
import { connect } from "react-redux";
import Payments from "./Payment";


import { Component } from 'react';
class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return <a href="/auth/google" className="check">Login with <i class="fa fa-google" aria-hidden="true">oogle </i></a>;
            case false:
                return <a href="/auth/google" className="check">Login with <i class="fa fa-google" aria-hidden="true">oogle </i></a>;
            default:
                return [
                    <a className="payments"><Payments /></a>,
                    <a href="/api/logout" className="logout">Logout <i class="fa fa-sign-out" aria-hidden="true"></i></a>
                ];



        }
    }
    render() {
        console.log(this.props)
        return (
            <body>
                <nav className="navig">
                    <div class="navig div1">
                        <ul className="navig login">
                            <li className="outer"><a href="/"><img src={image} className="image"></img></a></li>
                            <li className="logoname">Emaily</li>
                            <li class="name">{this.renderContent()}</li>

                        </ul>

                    </div>
                </nav >
            </body >
        );
    }
}
function mapStateToProps({ auth }) {
    return { auth };
}
export default connect(mapStateToProps)(Header);