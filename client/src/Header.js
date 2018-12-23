import React, { Component } from 'react';
import './style/App.css';
import { Grid } from '@material-ui/core';


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
                <Grid className="switch-container">
                    <label>
                        <input ref="switch" checked={ this.state.isChecked } onChange={ this._handleChange } className="switch" type="checkbox"/>
                            <Grid>
                                <Grid></Grid>
                            </Grid>
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
                    <li class="menu__list-item"><a class="menu__link">LogIn</a></li>
                    <li class="menu__list-item"><a class="menu__link menu__link--active">Sign Up</a></li>
                    </ul>
                </Grid>
            </nav>
        );
    }
}

export default Header;
