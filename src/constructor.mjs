export class Component{
    constructor(tag, options){
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
            for(const child of options.childs)
                element.appendChild(child)
        }
    }
}