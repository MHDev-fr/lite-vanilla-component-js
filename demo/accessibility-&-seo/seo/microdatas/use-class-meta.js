import { Component, Meta } from "../src/constructor.mjs";

/*
    Exemple of microdatas implementation for SEO with the class 'Component' and 'Meta'.
    
    param => an object that takes :
        -the type of microdata (tag),
        -itemprop for microdatas or itemref for RDFa-data,
        -the content or any else type of data (href, src...). 
*/

//the main microdata element is an article
const product = new Component('article', {
    prop : {
        'itemscope' : '', //this article is an itemscope
        'itemtype' : 'https://schema.org/Product', //this itemscope is of type product
    },
    childs : [ //this article have childs of type meta and link for other seo props
        new Meta({type : 'meta', itemprop : 'name', content : 'Name'}), //a name
        new Meta({type : 'meta', itemprop : 'description', content : 'Product description'}), //a description
        new Meta({type : 'meta', itemprop : 'image', src : '/path/to/your/image.png', alt : 'Description of your image.'}), //an image
        new Meta({type : 'link', itemprop : 'url', href : 'https://www.sitename.com/product=1'}), //a link that redirect to the product page
        //an review rating seo block who also have childs for worst rate, best rate and rating value
        new Meta(
            {type : 'div', itemprop : 'reviewRating', itemscope : '',itemtype:'https://schema.org/Rating'},
            {
                childs : [
                    new Meta({type : 'meta', itemprop : 'bestRating', content : '5'}),
                    new Meta({type : 'meta', itemprop : 'worstRating', content : '1'}),
                    new Meta({type : 'meta', itemprop : 'ratingValue', content : '4.5'})]
            }
        ),
        //and an offer seo block who also have childs for price, price currency and availability
        new Meta(
            {type : 'div', itemprop : 'offers', itemscope : '',itemtype:'https://schema.org/Offer'},
            {
                childs : [
                    new Meta({type : 'meta', itemprop : 'price', content : '100.00'}),
                    new Meta({type : 'meta', itemprop : 'priceCurrency', content : 'USD'}),
                    new Meta({type : 'link', itemprop : 'availability', href : 'https://schema.org/InStock'})]
            }
        ),
    ],
    //adding some style juste for visual
    style : {
        height : '200px',
        aspectRatio : '1',
        background : '#0C0C0C',
    }
})

document.getElementById('app').appendChild(product)

/*
    this is only a simple exemple of how you can easily implement seo data on each component
*/