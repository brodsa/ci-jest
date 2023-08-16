/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

beforeEach(( ) =>{
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})

describe("DOM test", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    })
});

// Mockuping - loading part of the dom
// beforeEach(( ) =>{
//     document.body.innerHTML = "<p id='par'></p>"
// })

// describe("DOM test", () => {
//     test("expects pe content to change", () => {
//         buttonClick();
//         expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
//     });
// });