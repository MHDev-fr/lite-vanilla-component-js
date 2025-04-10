import { Component } from "../../constructor.mjs";
/* Name */
const meta_name = new Component('meta',{
    'property' : 'name',
    'content' : 'name_of_your_product' 
})
/* Url */
const meta_url = new Component('meta',{
    'property' : 'url',
    'content' : 'url/of/your/product' 
})
/* Rating */
const min_rate = new Component('meta', {'property' : 'worstRating','content' : '1' })
const max_rate = new Component('meta', {'property' : 'bestRating','content' : '5' })
const current_rate = new Component('meta', {'property' : 'ratingValue','content' : '4' })
const meta_rate = new Component('div',{
    'itemscope' : true,
    'itemtype' : 'https://schema.org/Rating',
    'itemprop' : 'reviewRating',
    childs : [
        min_rate,
        max_rate,
        current_rate
    ],
})

// Create all meta you need & create a main block for seo props like offer / inStock ...

const mainSEO_block = new Component('article',{
    'itemscope' : true,
    'itemtype' : 'Product',
    'itemid' : '123',
    'ref' : 'product_reference',
    childs : [
        meta_name,
        meta_url,
        meta_rate,
    ]
})

/*
    Now you can :
        -Create your HTML element
        -Append this mainSEO in his content

    Short demo below
*/
/*
    DEMO

const item = new Component('article',{
    ...your_component_options
    childs : [
        mainSEO_block,
        ...your component child(s),
    ]
})
*/