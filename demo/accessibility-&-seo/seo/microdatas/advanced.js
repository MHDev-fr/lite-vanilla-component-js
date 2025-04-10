import { Component } from "../../constructor.mjs";
const microDatas = [
    //meta name
    {tag : 'meta',options : {'property' : 'name', 'content' : 'name_of_your_product'}},
    //meta url
    {tag : 'meta',options : {'property' : 'url', 'content' : 'url/of/your/product'}},
    //meta aggregateRating
    {tag : 'div', options : {
            'itemscope' : true,
            'itemtype' : 'rate',
            //childs of aggregateRating : worstRating, bestRating, ratingValue, reviewCount
            childs : [
                new Component('meta', {'property' : '','content' : '1' }),
                new Component('meta', {'property' : '','content' : '5' }),
                new Component('meta', {'property' : '','content' : '4' }),
                new Component('meta', {'property' : 'reviewCount','content' : '100' })
            ]
        }
    },
]
const obj_for_main_block = {
    'itemscope' : true,
    'itemtype' : 'Product',
    'itemid' : '123',
    'ref' : 'product_reference',
    childs : [],
    parent : document.body
}
for(const obj of microDatas){
    const child = new Component(obj.tag, obj.options)
    obj_for_main_block.childs.push(child)
}
const mainSEO_block = new Component('div',{obj_for_main_block})

const createMicroDatas = ({microDatas : obj}) => {
    for(const data of obj){
        const child = new Component(data.tag, data.options)
        obj_for_main_block.childs.push(child)
    }
}