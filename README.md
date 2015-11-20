# SimpleSequence.io
[SimpleSequence.io](http://simplesequence.io) is a microservice for generating sequence numbers using simple HTTP/REST calls.

It is intended to be deployed using AWS Lambda and AWS API gateway - with the associated scaling dials set to appropriate values.

See [SimpleSequence.io](http://simplesequence.io) for documentation.

## Why?
If you've built a system of any complexity, you've neeeded sequences.   Most databases have them.   But sometimes you need a database independent way to generate an increasing series of numbers, with no collisions.   T
here are many ways to do this: this is one.  Inspired by [TimerCheck.io](https://timercheck.io/)
