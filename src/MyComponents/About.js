import React from 'react'

export const About = () => {
    return (
        <div>
            this is an about component
            <p>
            Implement a frequency stack with the following methods:

FrequencyStack() constructs a new instance of a frequency stack
append(int val) appends val to the stack
pop() pops and returns the most frequent element in the stack. If there's more than one most frequent element, the one that's closer to the top of the stack should be popped first.
You can assume that for pop, the stack is non-empty when they are called.

Constraints

n ≤ 100,000 where n is the number of methods that will be called to append  
            </p>
        </div>
    )
}
