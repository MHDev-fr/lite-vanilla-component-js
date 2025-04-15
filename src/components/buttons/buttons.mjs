import { Component } from '../../constructor.mjs'
import { variants, hovering } from './utils.mjs'

//not finish
export class Button{
    constructor(options){
        this.animations = null;
        if(options.style.animations)
            this.animations = options.style.animations
        if(options.style.variants){
            options.style = variants[options.style.variants]({...options.style.props})
        }
        console.log('options', options)
        this.button = new Component('button',{...options})
        if(this.animations && hovering[this.animations])
            hovering[this.animations](this.button)
        else if(typeof this.animations !== 'string')
            throw Error(`
                Animation property has to be a string make sur your code is valide
                typeof your animation : ${typeof this.animations}
            `)
        else if(this.animations && !hovering[this.animations]){
            throw Error(`
                Your animation setting isn't reconized as a valide property, make your you have a valide animation property
                Animations list : 
                ['${['default', 'smooth'].join(`', '`)}']
                Your animation : ${this.animations}
            `)
        }
        return this.button
    }
}