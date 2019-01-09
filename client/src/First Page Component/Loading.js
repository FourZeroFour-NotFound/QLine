import React, { Component } from 'react';
import '../style/App.css';
import $ from 'jquery';

// First loading page effect that first render in home page of the all the repositories
// Loading component is for user to experience visual effect
class Loading extends Component {

	componentDidMount () {
        // imitation of new page loading
        // JS functionality for rendering animation using jquery
            window.onload = function() {
                let $body = $('body');
                let $btn  = $('.btn');
            
                loader(10);
            
                $btn.on('click', function(){
                $body.removeClass().addClass('restart');
                loader( getRandomNumber(300, 3000) );
                });
            
                function loader(delay) {
                setTimeout(function(){
                    $body.addClass('loading');
                }, delay);
            
                setTimeout(function(){
                    $body.addClass('loaded');
                }, delay + 1700);
            
                setTimeout(function(){
                    $body.removeClass('restart').addClass('new-page');
                }, delay + 1950);
                }
                
                function getRandomNumber(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
                }
            }
	}

    render() {
        // loading page that has effect by top componentDidMount functionality
        return (
            <div>
                <svg class="loader" viewBox="0 0 100 100" overflow="visible">
                    <g class="core">
                    <circle class="path" cx="50" cy="50" r="1" fill="none" />
                    </g>
                    <g class="spinner">
                    <circle class="path" cx="50" cy="50" r="20" fill="none" />
                    </g>
                    <g class="layer-1">
                    <circle class="path" cx="50" cy="50" r="70" fill="none" />
                    </g>
                    <g class="layer-2">
                    <circle class="path" cx="50" cy="50" r="120" fill="none" />
                    </g>
                    <g class="layer-3">
                    <circle class="path" cx="50" cy="50" r="180" fill="none" />
                    </g>
                    <g class="layer-4">
                    <circle class="path" cx="50" cy="50" r="240" fill="none" />
                    </g>
                    <g class="layer-5">
                    <circle class="path" cx="50" cy="50" r="300" fill="none" />
                    </g>
                    <g class="layer-6">
                    <circle class="path" cx="50" cy="50" r="380" fill="none" />
                    </g>
                    <g class="layer-7">
                    <circle class="path" cx="50" cy="50" r="450" fill="none" />
                    </g>
                    <g class="layer-8">
                    <circle class="path" cx="50" cy="50" r="540" fill="none" />
                    </g>
                </svg>
            </div>
        );
    }
}

export default Loading;
