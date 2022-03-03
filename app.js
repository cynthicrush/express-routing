const express = require('express')
const app = express()

const ExpressError = require('./expressError')
const { convertAndCheckNums, getMean, getMedian, getMode } = require('./script');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/mean', function(req, res) {
    if(!req.query.numbers) {
        throw new ExpressError('Please pass a "numbers" query with a list of numbers.', 400)
    }
    let numbers = req.query.numbers.split(',')
    let array = convertAndCheckNums(numbers)
    if(array instanceof Error) {
        throw new ExpressError(numbers.message)
    }
    let result = {
        operation: "mean",
        result: getMean(array)
    }
    return res.send(result)
})

app.get('/median', function(req, res) {
    if(!req.query.numbers) {
        throw new ExpressError('Please pass a "numbers" query with a list of numbers.', 400)
    }
    let numbers = req.query.numbers.split(',')
    let array = convertAndCheckNums(numbers)
 
 if(array instanceof Error) {
     throw new ExpressError(numbers.message)
 }   let result = {
        operation: "median",
        result: getMedian(array)
    }
    return res.send(result)
})

app.get('/mode', function(req, res) {
    if(!req.query.numbers) {
        throw new ExpressError('Please pass a "numbers" query with a list of numbers.', 400)
    }
    let numbers = req.query.numbers.split(',')
    let array = convertAndCheckNums(numbers)
    if(array instanceof Error) {
        throw new ExpressError('Please enter only numbers!')
    }
    let result = {
        operation: "median",
        result: getMode(array)
    }
    return res.send(result)
})

app.use(function (req, res, next) {
    const notFoundError = new ExpressError("Not Found", 404);
    return next(notFoundError)
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);

    return res.json({
        message: err.message
    });
});

app.listen(3000, function() {
    console.log('App on port 3000')
})