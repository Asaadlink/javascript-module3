import { addButton } from "../utils/dom";

/**
 * Write the assertions using the most appropriate matcher
 */
describe("10-exercises", () => {
  beforeAll(() => {
    // 1. set the default inner html of the document body
    //    to have a div with a class of .wrapper
    const innerHtml = document.createElement('div');
    innerHtml.classList.add('wrapper');
    document.body.appendChild(innerHtml)
  });

  test("adds a button to the dom", () => {
    // You should make 1 assertion in this test, see bellow
    expect.assertions(1);

    const btnText = "Save";

    // 2. execute the addButton function and pass it as an argument
    //    the `btnText` variable
    addButton(btnText);
    // 3. use document.querySelector to get the new button
    //    the `addButton` creates a button with a class of .btn
    //    that you can use in document.querySelector
    const buttonElement = document.querySelector('.btn');
    // 4. make an assertion that the buttons textContent is
    //    the same as the `btnText` variable
    expect(buttonElement.textContent).toEqual(btnText)
  });
});
