const EventEmitter = require('events');
const { expect } = require('chai');
const { getBodyFromRequest } = require('../get-body-from-request');
describe("The getBodyFromRequest function", () => {
  let fakeReq = null;

  beforeEach(() => {
    fakeReq = new EventEmitter();
  });

  it('returns an empty string for no body', done => {
    //arrange
    const bodyPromise = getBodyFromRequest(fakeReq);

    //act
    fakeReq.emit('end')

    //assert
    bodyPromise
      .then(body => {
        if (body === ""){
          done()
        } else {
          done(`Failed. Got ${body}`)
        }
      })
  });

  it('returns the data read from the stream', done => {
    //arrange
    const bodyPromise1 = getBodyFromRequest(fakeReq);
    const data1 = "NBA is back!";
    const data2 = " KD the goat";

    //act
    fakeReq.emit('data', data1)
    fakeReq.emit('data', data2)

    fakeReq.emit('end');

    //assert
    bodyPromise1
      .then(body => {
        if (body == (data1 + data2)){
          done()
        } else {
          done(`Failed. Got "${body}"`)
        }
      })
  });
});
