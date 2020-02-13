var marsRover = require("../src/marsRover")

describe("applyAction", function() {
  let positionStart
   beforeEach(function() {
    positionStart = {
      heading: 'N',
      x: 0,
      y: 0
    }
   })
    it("moves forward one space", function() {
      const positionEnd = {
        heading: 'N',
        x: 0,
        y: 1
      }
      const start  = positionStart
      const result = marsRover.applyAction(start, 'M')
      expect(result).toEqual(positionEnd);
    });
    it("turns left", function() {
      const positionEnd = {
        heading: 'W',
        x: 0,
        y: 0
      }
      const start  = positionStart
      const result = marsRover.applyAction(start, 'L')
      expect(result).toEqual(positionEnd);
    });
    it("turns right", function() {
      const positionEnd = {
        heading: 'E',
        x: 0,
        y: 0
      }
      const start  = positionStart
      const result = marsRover.applyAction(start, 'R')
      expect(result).toEqual(positionEnd);
    });
  });

  describe('marsRover', function() {
    it('can apply actions to mars rovers', function() {
      const result = marsRover.marsRover(
        "5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM"
      ) 
      const positionEnd = "1 3 N\n5 1 E"
      expect(result).toBe(positionEnd);
    })
  })