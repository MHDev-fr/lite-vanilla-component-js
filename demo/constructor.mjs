export class Component{
    constructor(tag, options){
        this.element = document.createElement(tag)
        if(options)
            this.#handleProps(options, this.element)
        return this.element
    }
    #handleOptions(options, prop){
        const valideProps = !['parent','childs','seo','accessibily'].includes(key)
        if(valideProps){
            for(const key in options[prop]){
                if(prop === 'style'){
                    for(const styleKey in options.style)
                        this.element.style[styleKey] = options.style[styleKey]
                } else {
                    if(key.includes('-') || key == 'redirect') this.element.setAttribute(key, options[prop][key])
                    else this.element[key] = options[prop][key]
                    if(key === 'isLink' && options[prop][key] === true)
                        this.element.setAttribute('role', 'link')
                }
                if(key == 'redirect' || key == 'data-redirect')
                    this.element.addEventListener('click', (e) => location.pathname = options[prop][key])
            }
        }
    }
    #handleProps(options){
        for(const key in options)
            this.#handleOptions(options, key)
        if(options.listener){
            for(const key in options.listener)
                this.element.addEventListener(key,(e)=>options.listener[key](e))
        }
        if(options.parent)
            typeof options.parent === 'string' 
            ? document.querySelector(options.parent).appendChild(element) 
            : options.parent.appendChild(element)
        if(options.childs){
            for(const child of options.childs)
                this.element.appendChild(child)
        }
    }
}