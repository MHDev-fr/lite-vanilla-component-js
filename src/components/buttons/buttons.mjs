import { Component } from '../../constructor.mjs'
import { variants } from './utils.mjs'

const mandatoryPropForBtn = ['textContent']

//not finish
export class Button{
    constructor({
        mandatory : {},
        options : {},
    }){
        for(const key in mandatory){
            const mandatoryMissing = !mandatoryPropForBtn.includes(key)
            if(mandatoryMissing) 
                return console.error(`Missing mandatory key in 'Button.constructor.mandatory{}'`)
        }
        if(options){
            this.options = {...options}
            this.options.textContent = mandatory.textContent
            this.style;
            if(this.options.style){
                if(this.options.style.variants){
                    this.variantStyle = {...this.options.style.variants}
                    this.style = variants[this.options.style.variants.name]
                }
                else this.style = this.options.style
                this.options.style = this.style
            }
        }
        this.button = options ? new Component('button',{...this.options}) : new Component('button')
        return this.button
    }
}