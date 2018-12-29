import React, { Component } from 'react';
import './style/App.css';
import {Grid, Button} from '@material-ui/core';


class HowItWorks extends Component {
  constructor(props) {
    super(props);
   
  }

 
  render() {
    return (
        <div class="ct" id="t1">
            <div class="ct" id="t2">
                <div class="ct" id="t3">
                <div class="ct" id="t4">
                    <div class="ct" id="t5">
                    <ul id="menu3">
                        <a href="#t1"><li class="fa fa-circle" id="uno"></li></a>
                        <a href="#t2"><li class="fa fa-circle"  id="dos"></li></a>
                        <a href="#t3"><li class="fa fa-circle"  id="tres"></li></a>
                        <a href="#t4"><li class="fa fa-circle"  id="cuatro"></li></a>
                        <a href="#t5"><li class="fa fa-circle"  id="cinco"></li></a>
                    </ul>
                    <div class="page1" id="p1">
                        <section class="icon1 fa fa-bolt"><span class="title1">Bolt</span><span class="hint">Like this pen to see the magic!... Just kidding, it won't happen anything but I'll be really happy If you do so.</span></section>  
                    </div>
                    <div class="page1" id="p2">
                        <section class="icon1 fa fa-keyboard-o"><span class="title1">Type</span></section>
                    </div>  
                    <div class="page1" id="p3">
                        <section class="icon1 fa fa-rocket"><span class="title1">Rocket</span></section>
                    </div>
                    <div class="page1" id="p4">
                        <section class="icon1 fa fa-dribbble">
                        <span class="title1">Dribbble</span>
                        <p class="hint">
                            <a href="https://dribbble.com/albertohartzet" target="_blank">Im ready to play, <span class="hint line-trough">invite me </span> find me</a>
                        </p>
                        <p class="hint">Already invited by <a href="http://www.dribbble.com/mrpeters" target="_blank">Stan Peters</a></p>
                        </section>
                    </div> 
                    <div class="page1" id="p5">
                        <section class="icon1 fa fa-plus-circle">
                        <span class="title1">More</span>
                        <p class="hint">
                            <span>You love one page & CSS only stuff? </span><br/>
                            <a href="https://codepen.io/hrtzt/details/pgXMYb/" target="_blank">check this pen "Pure CSS One page vertical navigation"</a>
                        </p>
                        </section>
                    </div> 
                    </div>
                </div>
                </div>
            </div>
        </div>



    )
  }
}

export default HowItWorks;

