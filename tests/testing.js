import { Component, Meta } from "../src/constructor.mjs";

const product = new Component('article', {
    childs : [
        new Meta({type : 'meta', itemprop : 'name', content : 'Name'}),
        new Meta({type : 'meta', itemprop : 'description', content : 'Product description'}),
        new Meta({type : 'link', itemprop : 'url', href : 'https://www.sitename.com/product=1'}),
        new Meta(
            {
                type : 'div', 
                itemprop : 'reviewRating', 
                itemscope : '',
                itemtype:'https://schema.org/Rating"',
            },
            {
                childs : [
                    new Meta({type : 'meta', itemprop : 'bestRating', content : '5'}),
                    new Meta({type : 'meta', itemprop : 'worstRating', content : '1'}),
                    new Meta({type : 'meta', itemprop : 'ratingValue', content : '4.5'}),]
            }
        ),
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