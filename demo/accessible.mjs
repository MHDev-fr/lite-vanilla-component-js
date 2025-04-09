import { Component } from "../@components/create/constructor.mjs";
import { variants } from "../@components/create/button.js";

const visuallyhiddenStyle = {
    opacity : 0,
    width : 0,
    height : 0,
    fontSize : '0px'
} //just some CSS for hide element

const buttonText = new Component(
    'span', {
        prop : {
            textContent : 'Login'
        },
        style : {
            fontSize : '22px',
            color : '#ffffff',
            borderRadius : '4px',
            padding : '10px 14px'
        }
    }
)
const accessible_description = new Component(
    'span', {
        prop : {
            textContent : 'Click on this button for access to the login page.', //set the description
            id : 'accessible-description', //set the id
            hidden : true, //hide element for visual
            ariaHidden : false, //reveal element for screen speaker
        },
        style : {...visuallyhiddenStyle}
    }
)
const accessible_label = new Component(
    'span', {
        prop : {
            textContent : 'Go to login page.', //set the label
            id : 'accessible-label', //set the id
            hidden : true, //hide element for visual
            ariaHidden : false, //reveal element for screen speaker
        },
        style : {...visuallyhiddenStyle}
    }
)
const button = new Component(
    'button', {
        childs : [
            buttonText, //visual text
            accessible_label, //label
            accessible_description // detailled description
        ],
        /* 
        you can add directly your parent element here with => 
            
            parent : value as '.class' | '.id' | js element like : document.body
        
        */
       parent : 'div#app',
        prop : {
            'aria-labelledby' : 'accessible-label',
            'aria-describedby' : 'accessible-description',
            isLink : true,
            redirect : '/login'
            /* add class or other props */
        },
        style : variants.default({
            color : '#ffffff',
            background : '#0C0C0C',
        })  /* or add custom style like in : buttonText | accessible_description */
    }
)