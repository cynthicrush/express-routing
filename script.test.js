const {
    getMean,
    getMedian, 
    getMode
} = require('./script')

describe('testing getMean function', function() {
    it('find mean from an array of numbers', function() {
        expect(getMean([1, 3, 2, 5, 4])).toEqual(3)
    })
})

describe('testing getMedian function', function() {
    it('even length', function() {
        expect(getMedian([1, 3, 2, 5])).toEqual(2.5)
    })
    it('odd length', function() {
        expect(getMedian([1, 3, 2, 5, 4])).toEqual(3)
    })
})

describe('testing getMode function', function() {
    it('find mode from an array of numbers', function() {
        expect(getMode([1, 3, 2, 5, 4, 1, 3])).toEqual([1, 3])
    })
})