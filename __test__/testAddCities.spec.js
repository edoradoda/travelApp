// Import the js file to test
import { addCities } from "../src/client/js/addCities"
  
describe("Testing the City functionality", () => {
    test("Testing the addCities() function", () => {
           expect(addCities).toBeDefined();
})});