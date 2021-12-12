import {assert} from 'chai'
import {expect} from 'chai'

function test_1(){
    var url
    var assert = require('chai').assert
    , url = prompt('URL: ','');
    window.open(url, '_blank');

    assert.typeOf(url, 'string');
}


function test_2(){
    var url
    var assert = require('chai').assert
    , url = prompt('URL: ','');
    window.open(url, '_blank');

    assert.equal(url, 'http://localhost:3000/personas/create');
}

function test_3(){
    var expect = require('chai').expect
    var url = 'http://localhost:3000/personas/create';

    expect(url).to.be.a('string');
    expect(foo).to.equal('http://localhost:3000/personas/create');

}