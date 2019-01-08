import React, { Component } from 'react';
import '../style/App.css';
import { Grid } from '@material-ui/core';
import {Link} from 'react-router';
import logo from '../style/qline.png';

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
                <img src={logo} width="122px" height="62px" style={{marginTop: "10px", marginLeft: "-20px"}}/>
                <Grid>
                </Grid>
                <Grid className="centerNav">
                    <ul className="centerNavMenu">
                    <li className="menuItem"><a className="itemLink1" href="/">Home</a></li>
                    <li className="menuItem"><a className="itemLink1" href="/feature">Features</a></li>
                    <li className="menuItem"><a className="itemLink1" href="#serv">Contact Us</a></li>
                    
                    </ul>
                </Grid>
                <Grid className="menu__right">
                    <ul className="menu__list">
                    <li class="menu__list-item"><Link to ="/sign-in" class="menu__link1" onClick={this.props.toggleLogin}>LogIn</Link></li>
                    <li class="menu__list-item"><Link to ="/sign-up" class="menu__link menu__link--active" onClick={this.props.toggleSignup}>Sign Up</Link></li>
                    </ul>
                </Grid>
            </nav>
        );
    }
}

export default Header;
