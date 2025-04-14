export class Component{
    constructor(tag, options){
        if(!tag){
            throw new Error(`Error in 'class Component'
                All component need an HTML tag.`)
        }
        this.element = document.createElement(tag)
        if(options)
            this.#handleProps(options, this.element)
        return this.element
    }
    #handleOptions(options, prop, element){
        if(prop !== 'parent' && prop !== 'childs' && prop !== 'seo' && prop !== 'accessibily'){
            for(const key in options[prop]){
                if(prop === 'style'){
                    for(const styleKey in options.style)
                        element.style[styleKey] = options.style[styleKey]
                } else {
                    if(element[key]) options[prop][key]
                    else element.setAttribute(key, options[prop][key])
                    if(key === 'isLink' && options[prop][key] === true)
                        element.setAttribute('role', 'link')
                }
                if(key == 'redirect' || key == 'data-redirect')
                    this.element.addEventListener('click', (e) => location.pathname = options[prop][key])
            }
        }
    }
    #handleProps(options,element){
        for(const key in options)
            this.#handleOptions(options, key, element)
        if(options.listener){
            for(const key in options.listener)
                element.addEventListener(key,(e)=>options.listener[key](e))
        }
        if(options.parent)
            typeof options.parent === 'string' 
            ? document.querySelector(options.parent).appendChild(element) 
            : options.parent.appendChild(element)
        if(options.childs){
            if(!Array.isArray(options.childs)){
                throw new Error(`
                    Error in 'class Component (options)'
                    options.childs must be an array.
                    Make sur your options.childs is an array.
                    Verification => Array.isArray(options.childs) : ${Array.isArray(options.childs)}
                    typeof options.childs : ${typeof options.childs}`)
            } else {
                for(const child of options.childs)
                    element.appendChild(child)
            }
        }
    }
}
/*
To finish
*/
export class Meta{
    constructor(props, other){
        const {type, ...rest} = props
        for(const key in rest){
            const valideKeys = ['itemscope','itemtype','itemid','itemprop','itemref','name','content','href','src','alt','title','rel','type','property','sameAs','speakable']
            const invalideKey = !valideKeys.includes(key)
            if(invalideKey){
                throw Error(`
                    Invalide key in 'class Meta (constructor)'
                    Make sur all your keys are supported by <meta> or <link> HTML tag / or Schema.org 
                    There's a list of supported meta keys :
                    [${`'`+valideKeys.join(`', '`)+`'`}]
                    This is your key : 
                    ${key}`)
            }
        }
        return new Component(type, {
            ...other,
            prop: { ...rest }
        })
    }
};
