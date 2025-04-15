// import { Component, Meta } from "../src/constructor.mjs";
import { Button } from "../src/components/buttons/buttons.mjs";
const options = {
    style : {
        variants : 'default',
        props : {
            color : '#fff',
            background : '#0C0C0C',
        },
        animations : 'default'
    },
    textContent : 'S\'abonner',
    dev_steps : false,
    prop : {
        'aria-label' : 'le bouton',
        ariaHidden : true,
    },
    parent : document.getElementById('app'),
}
const button = new Button({...options})

/*
Tree

options :
    -tag : String
    -textContent : String
    -parent : HTML Element
    -childs : HTML Element[]
    -style : Object{}
    -prop : Object{}
    -dev_step : Boolean
*/