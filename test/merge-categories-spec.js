const { expect } = require('chai');
const { mergeCategories } = require('../merge-categories');

describe("mergeCategories()", () => {
  context("Using <li> tags", () => {
    const template = `
      <div>
        <ul>
          <!-- Content here -->
        </ul>
      </div>
    `;

    it("should return no <li>s for no categories", () => {
    });
      //Arrange
      const arr = []
      //Act
      const actual = mergeCategories(template, arr, 'li' )
      //Assert
      expect(actual).to.include('<div>')
      expect(actual).to.include('</div>')
      expect(actual).to.include('<ul>')
      expect(actual).to.include('</ul>')
      expect(actual).to.not.include('<li>')
      expect(actual).to.not.include('</li>')
      expect(actual).to.not.include('<!--Content here -->')

    it("should return a single <li> for one category", () => {
      // Arrange
      const arr = ['hello']
      // Act
      const actual = mergeCategories(template, arr, 'li')
      // Assert
      expect(actual).to.include('<div>')
      expect(actual).to.include('</div>')
      expect(actual).to.include('<ul>')
      expect(actual).to.include('</ul>')
      expect(actual).to.include('<li>hello</li>')
      expect(actual).to.not.include('<!--Content here -->')
    });

    it("should return an <li> for each category", () => {
      // Arrange
      const arr = ['dog', 'cat', 'elephant']
      // Act
      const actual = mergeCategories(template, arr, 'li')
      // Assert
      expect(actual).to.include('<div>')
      expect(actual).to.include('</div>')
      expect(actual).to.include('<ul>')
      expect(actual).to.include('</ul>')
      expect(actual).to.include('<li>dog</li>')
      expect(actual).to.include('<li>cat</li>')
      expect(actual).to.include('<li>elephant</li>')
      expect(actual).to.not.include('<!--Content here -->')

    });
  });

  context("using <option> tags", () => {
    const template = `
      <div>
        <select>
          <!-- Content here -->
        </select>
      </div>
    `;

    it("should return no <option>s for no categories", () => {
      // arrange
      const arr = []
      //act
      let actual = mergeCategories(template, arr, 'option')
      //assert
      expect(actual).to.include('<div>')
      expect(actual).to.include('</div>')
      expect(actual).to.include('<select>')
      expect(actual).to.include('</select>')
      expect(actual).to.not.include('<option>')
      expect(actual).to.not.include('</option>')
      expect(actual).to.not.include('<!--Content here -->')
    });

    it("should return a single <option> for one category", () => {
      //arrange
      const arr = ['kyrie']
      //act
      let actual = mergeCategories(template, arr, 'option')
      //assert
      expect(actual).to.include('<div>')
      expect(actual).to.include('</div>')
      expect(actual).to.include('<select>')
      expect(actual).to.include('</select>')
      expect(actual).to.include('<option>kyrie</option>')
      expect(actual).to.not.include('<!--Content here -->')
    });

    it("should return an <option> for each category", () => {
      //arrange
      const arr = ['kyrie', 'kd', 'rj']
      //act
      let actual = mergeCategories(template, arr, 'option')
      //assert
      expect(actual).to.include('<div>')
      expect(actual).to.include('</div>')
      expect(actual).to.include('<select>')
      expect(actual).to.include('</select>')
      expect(actual).to.include('<option>kyrie</option>')
      expect(actual).to.include('<option>kd</option>')
      expect(actual).to.include('<option>rj</option>')
      expect(actual).to.not.include('<!--Content here -->')

    });
  });
});
