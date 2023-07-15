//Defining function called create cells sor generating the cellArray
function createCells(req, res, next) {
    const cellsArray = [];
//This 'for loop' used to add objects to the cells array 
    for (let i = 0; i < 9; i++) {
      cellsArray.push({
        value: "",
        id: i,
        clicked: false,
      });
    }
//Next functio is called to pass control to the next middleware 
    return cellsArray
    next();
  }
//exports the create cell so to be used in other functions
  module.exports = createCells
  