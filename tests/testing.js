import { Component } from "../src/constructor.mjs";

const meta = ({type : type, itemprop : itemprop, content : content}) => new Component(type, {
        prop:{
            'itemprop' : itemprop,
            'content' : content,
        }
})

const product = new Component('article', {
    childs : [
        meta({type : 'meta', itemprop : 'name', content : 'Name'}),
        meta({type : 'meta', itemprop : 'description', content : 'Product description'}),
        meta({type : 'meta', itemprop : 'url', content : 'https://www.sitename.com/product=1'}),
    ],
    prop : {
        'itemscope' : '',
        'itemtype' : 'https://schema.org/Product',
        'aria-hidden' : true,
    },
    style : {
        height : '200px',
        aspectRatio : '1',
        background : '#0C0C0C',
    }
})

document.getElementById('app').appendChild(product)