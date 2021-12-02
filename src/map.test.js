/* eslint-disable jest/valid-expect */
import { expect } from 'chai';
import map from './map';

it('map should be a function', () => {
  expect(map).to.be.a('function');
});

it('map([1,2], (item)=> item), should return [1,2]', () => {
  expect(map([1, 2], i => i)).to.be.deep.equal([1, 2]);
  //deep = pq os arrays comparados estão em endereços diferentes de memória
});

it('map([3,4], (item)=> item + 1), should return [4,5]', () => {
  expect(map([3, 4], i => i + 1)).to.be.deep.equal([4, 5]);
  //agora recebe uma função q itera cada elemento somando 1
});

it('map([1,2], (item, index)=> index), should return [0, 1]', () => {
  expect(map([1, 2], (item, index) => index)).to.be.deep.equal([0, 1]);
  //agora retorna o index= 0, 1
});

it('map([1,2], (item, index, array)=> array), should return [[1,2], [1,2]]', () => {
  expect(map([1, 2], (item, index, array) => array)).to.be.deep.equal(
    [[1, 2],
    [1, 2]]
  );
  //agora retorna o array= repete pra cada item..
});

