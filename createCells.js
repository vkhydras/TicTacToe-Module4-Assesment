function createCells(req, res, next) {
    const cellsArray = [];
  
    for (let i = 0; i < 9; i++) {
      cellsArray.push({
        value: "",
        id: i,
        clicked: false,
      });
    }

//Next function is called to pass control to the next middleware 

    return cellsArray
    next();
  }
  
  module.exports = createCells
  