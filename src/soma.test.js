/* eslint-disable jest/valid-expect */
import soma from './soma'
import {expect} from 'chai'



it("# Soma deve ser uma função", ()=>{

    expect(soma).to.be.an('function')
})

it('soma(1,2) deve retornar 3', ()=>{
    expect(soma(1, 2)).to.be.equal(3)
})
