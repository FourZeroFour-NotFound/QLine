import React, { Component } from 'react';
import './style/App.css';
import { Grid } from '@material-ui/core';
import {Link} from 'react-router';

class Header extends Component {
    constructor ( props ) {
        super( props );
		
		this.state = {
			isChecked: null
		}
    }
	
	componentWillMount () {
		this.setState( { isChecked: this.props.isChecked } );
	}

    render() {
        
        return (
            <nav className="menu">
                <h1 style={{
                backgroundImage: 'url(' + this.props.logo + ')'
                }} className="menu__logo">QLine</h1>
                <Grid>
                <Grid class="can-toggle demo-rebrand-1">
                <input id="d" type="checkbox"/>
                    <label for="d">
                        <Grid class="can-toggle__switch" data-checked="USER" data-unchecked="Business"></Grid>
                    </label>
                </Grid>
                </Grid>
                <Grid className="centerNav">
                    <ul className="centerNavMenu">
                    <li className="menuItem"><a className="itemLink">Home</a></li>
                    <li className="menuItem"><a className="itemLink">Features</a></li>
                    <li className="menuItem"><a className="itemLink">Contact Us</a></li>
                    
                    </ul>
                </Grid>
                <Grid className="menu__right">
                    <ul className="menu__list">
                    <li class="menu__list-item"><Link to ="/sign-in" class="menu__link" onClick={this.props.toggleLogin}>LogIn</Link></li>
                    <li class="menu__list-item"><Link to ="/sign-up" class="menu__link menu__link--active" onClick={this.props.toggleSignup}>Sign Up</Link></li>
                    </ul>
                </Grid>
            </nav>
        );
    }
}

export default Header;
