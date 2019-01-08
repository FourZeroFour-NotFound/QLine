import React from 'react';
import PropTypes from 'prop-types';
import '../style/App.css';
import $ from 'jquery';
import logo from '../style/qline.png';
import {Grid} from '@material-ui/core'; 
import {Link} from 'react-router';
 
 
 
 
 export default class FeaturePage extends React.Component {
 
 
   componentDidMount () {
        const slideElements = ['.back10__slide', '.card19__slide', '.content52__slide'];
        let inProgress = false;

        const goToSlide = (slideElements, index) => {
        if (!inProgress){
            inProgress = true;
            
            $('.active1').addClass('exit');
            $('.active1').removeClass('active1');
            slideElements.forEach( elem => {
            $(`${elem}:nth-child(${index})`).addClass('active1');
            })
            
            const evenSlide = index % 2 === 0;
            if (evenSlide)
            $('.content52__ping').addClass('content52__ping--right');
            else
            $('.content52__ping').removeClass('content52__ping--right');
            $('.content52__ping--noanimation').removeClass('content52__ping--noanimation');
            
            setTimeout(() => $('.exit').removeClass('exit'), 1000);
            setTimeout(() => inProgress = false, 2000);
        }
        }

        $('.content52__slide:nth-child(1) .learnMore').on('click', () => goToSlide(slideElements, 2) );
        $('.content52__slide:nth-child(2) .learnMore').on('click', () => goToSlide(slideElements, 1) );

        setTimeout( () => goToSlide(slideElements, 2), 2000 );
        setTimeout( () => goToSlide(slideElements, 1), 6000 );

   }
 
 
 
    render () {
        return (
        <div>
            <div className="wrap44">
            <div className="back10">
              <div className="back10__slide active1">
                <div className="progress1"></div>
              </div>
              <div className="back10__slide">
                <div className="progress"></div>
                <div className="back10-front-image"></div>
              </div>
            </div>
            <div className="card99">
              <div className="card19__slide active1">
                <div className="image878"></div><span className="number">01</span><span className="date99">20 JANUARY 2019 <span className="date99__time">12:37PM</span></span>
              </div>
              <div className="card19__slide">
                <div className="back10-image"></div>
                <div className="image878"></div><span className="number">02</span><span className="date99">20 JANUARY 2019 <span className="date99__time">12:37PM</span></span>
              </div>
              <div className="content52">
                <div className="content52__slide active1">
                  <h2 className="title9"> <span className="title9__line"> <span className="title9__inner">Beneficial</span></span><span className="title9__line"> <span className="title9__inner">Queue</span></span></h2>
                  <p className="desc12">Visit Our Website to access all our services <br /> and being a business personnel and user at the same time is possible with us <br /> register with us now and experience the great feature of the life time, and you will never experience lateness anymore</p>
                  <div className="toShift"><a id="learnMore" style={{marginTop: "1000px"}}>Learn More<span className="button24__hover"></span></a></div>
                </div>
                <div className="content52__slide">
                  <h2 className="title9"> <span className="title9__line"> <span className="title9__inner">Breathtaking</span></span><span className="title9__line"> <span className="title9__inner">Features</span></span></h2>
                  <p className="desc12" style={{marginTop: "200px"}}>Any Where and Any Time you can download and search<br /> any establishment of your choice <br /> what are you waiting for! Download our app now</p>
                  <div className="toShift"><a id="learnMore">Learn More<span className="button24__hover"></span></a></div>
                </div>
                <div className="content52__ping content52__ping--noanimation"></div>
              </div>
            </div>
          </div>
          <div>
            <nav className="menu5"  style={{backgroundColor: "transparent", position: "absolute",  marginTop: "-1000px", marginLeft: "50px"}} >
                <img src={logo} width="122px" height="62px" style={{marginTop: "30px", marginLeft: "-20px"}}/>
                <Grid className="menu__right">
                    <ul className="menu__list">
                    <li class="menu__list-item"><a class="menu__link" style={{color: "black"}} href="/BusinessDashBord/:queue_id">Back</a></li>
                    <li class="menu__list-item"><a class="menu__link" style={{color: "black"}}  href="/" >Logout</a></li>
                    </ul>
                </Grid>
            </nav>
            </div>
        </div>
            )
        }
    }
