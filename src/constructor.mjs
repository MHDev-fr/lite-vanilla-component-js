export class Component{
    constructor(tag, options){
        if(!tag){
            throw new Error(`All component need an HTML tag. (error in 'class Component')`)
        }
        this.element = document.createElement(tag)
        if(options)
            this.#handleProps(options, this.element)
        if(options.dev_steps){
            console.log(`%c this.element = `, "padding:10px 5px;background:#0C0C0C;color:#ffff", this.element)
        }
        return this.element
    }
    #handleOptions(options){
        for(const key in options){
            const valideProps = !['parent','childs','seo','accessibily'].includes(key)
            if(valideProps){
                if (key === 'style')
                    Object.assign(this.element.style, options[key]);
                else if(key == 'prop')
                    for(const val in options.prop)
                        val in this.element ? this.element[val] = options.prop[val] : this.element.setAttribute(val, options.prop[val])
                else {
                    if(key in this.element) this.element[key] = options[key]
                    else this.element.setAttribute(key, options[key])
                    if(key === 'isLink' && options[key] === true)
                       this.element.setAttribute('role', 'link')
                }
                if(key == 'redirect' || key == 'data-redirect')
                    this.element.addEventListener('click', (e) => location.pathname = options[prop][key])
                if(options.dev_steps){
                    console.log(`%c option = ${key}`, "padding:10px 5px;background:#0C0C0C;color:#ffff")
                    console.table(options[key])
                    console.log('\n\n')
                }
            }
        }   
    }
    #handleProps(options){
            this.#handleOptions(options)
        if(options.listener){
            for(const key in options.listener)
               this.element.addEventListener(key,(e)=>options.listener[key](e))
        }
        if(options.parent)
            typeof options.parent === 'string' 
            ? document.querySelector(options.parent).appendChild(this.element) 
            : options.parent.appendChild(this.element)
        if(options.childs){
            if(!Array.isArray(options.childs)){
                throw new Error(`
                    Error in 'class Component options'
                    options.childs must be an array.
                    Make sur your options.childs is an array.
                    Verification => Array.isArray(options.childs) : ${Array.isArray(options.childs)}
                    typeof options.childs : ${typeof options.childs}`)
            } else {
                for(const child of options.childs)
                   this.element.appendChild(child)
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
                    Invalide key in 'class Meta constructor'
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
