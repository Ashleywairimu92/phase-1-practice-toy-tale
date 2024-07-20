let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
// const { expect } = require('chai'); // Assuming you're using Chai for assertions

// describe('My Module', () => {
//   describe('Functionality XYZ', () => {
//     it('should pass this test', () => {
//       expect(true).to.be.true;
//     });

//     // Add more tests here
//   });
// });
