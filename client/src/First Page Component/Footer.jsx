// import files and installed libraries such as Material UI for better UI experience
// styles and logos and Components to render in this main file for business page
import React from 'react';
import '../style/App.css';
import { Grid, GridList } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import logo from '../style/logo1.png';


// Footer section for all pages that contains information of how to reach us and address information as well as
// links for our public pages that user can access any where they want
class Footer extends React.Component {
  render() {
    return (
      <Grid className="lastFooter">
            <footer class="footer-distributed">
        <Grid class="footer-left">
          <CardMedia
              className="media3"
              image={logo}
              width="1000px"
              alignItem="center"
          />
         
          <p class="footer-company-name">QLine Queue Management System &copy; 2018</p>
        </Grid>
        <Grid className="footer-nextleft">
        <GridList>
          <p class="footer-links">
            <li href="#">Home</li> 
            <li href="#">Blog</li>
            <li href="#">Pricing</li>
            <li href="#">About</li>
            <li href="#">Faq</li>
            <li href="#">Contact</li>
          </p>
          </GridList>
        </Grid>
        <Grid class="footer-center">
        <Grid>
            <i class="fa fa-map-marker"></i>
            <p><span>18 Hacker Haus Street</span> Amman, Jordan</p>
          </Grid>
          <Grid>
            <i class="fa fa-phone"></i>
            <p>+962 79641 8297</p>
          </Grid>
          <Grid>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">qline@qline.com</a></p>
          </Grid>
        </Grid>
        <Grid class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            QLine Queue Management System has come a long way from its beginnings in a small idea of great minds from RBK's Students in wonders of Jordan.
          </p>
          <Grid class="footer-icons">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-github"></i></a>
          </Grid>
        </Grid>
        </footer>
    </Grid>
    );
  }
}
export default Footer;