# Mars Rover - ThoughtWorks Code Assignment

A squad of robotic rovers have been landed by NASA on a plateau on Mars. This plateau, which is curiously rectangular, can be navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth.

A rover’s position and location is represented by a combination of x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.
 
To control a rover, NASA sends a simple string of letters. The possible letters are ‘L’, ‘R’ and ‘M’. ‘L’ and ‘R’ makes the rover spin 90 degrees left or right respectively, without moving from its current spot. ‘M’ means move forward one grid point, and maintain the same heading.

### Example rover control string

```
LMLMLMLMM
```

The logic in this repository takes the control string and applies actions to move the robotic rovers sequentially across the plateau. 

## Getting Started

The instructions below will get your Mars Rover project setup in your dev environment in a few minutes!

### Prerequisites

- Ensure you have the latest verison of node installed. 
- This code was built and tested using [Node12.16.0](https://nodejs.org/download/release/v12.16.0/).

### Installing

Firstly, clone the repository 

```
git clone https://github.com/mikegyi/marsrover.git
```

Install package dependencies

```
npm install
```

You should now have all the necessary packages required to run the tests in the next section. 

## Running the tests

The JavaScript testing framework [Jasmine](https://github.com/jasmine/jasmine#installation) will have been installed in the previous section. 

So to run the tests, simply use the following in our command line

```
jasmine
```

*Desired result*
<br>
<img src="/docs/desired-output.png" width=40%>
<br>

### My design 

- To move forward, the rover simply adds 1 to the x or y co-ordinate, dependent on the current heading
- To turn, the rover uses the current heading to move through the compass points either clockwise (R) or anti-clockwise (L) 
- To execute multiple actions, the rover iterates over each action, applying the action sequentially
- To ensure the rovers move in order, a variable is assigned to each rovers position and the actions are applied one after another in the code

### My assumptions

- The rover can only face 4 different compass directions - N E S and W
- The rover won't be instructed by its users to fall off the 5 x 5 grid 
- The users won't instruct the rovers to crash into each other

### My process

- I built the project up with a strict focus on TDD using Jasmine
- Firstly, I wrote a test for the most simple action 'M' and then wrote the logic to make the test go green
- Once I had the most simple action working, I continued to build out the others 'L' and 'R', using the same process - writing the tests first
- I then wrote a test for a sequence of actions then used a for..of statement to iterate over the string and apply each action sequentially
- Next, I wrote the test for the given test data input
- I then used the split() method to convert the data into an array
- Then I had to convert the strings into an object in order for the given test input to work with the logic
- Finally, I had to convert the resulting object back to a string to make sure the test went green

## Built With

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - The language used
* [Jasmine](https://jasmine.github.io/) - The testing framework used

