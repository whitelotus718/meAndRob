const { expect } = require('chai');
const { mergeItems } = require('../merge-items');
describe("The mergeItems function", () => {
  const template = `
    <table>
      <tbody>
        <!-- Content here -->
      </tbody>
    </table>
  `;
  it("should return no <tr>s and no <td>s for no items", () => {
    //arrange
    const arr = []
    //act
    let result = mergeItems(template, arr)
    //assert
    expect(result).to.include('<table>')
    expect(result).to.include('</table>')
    expect(result).to.include('<tbody>')
    expect(result).to.include('</tbody>')
    expect(result).to.not.include('<tr>')
    expect(result).to.not.include('</tr>')
    expect(result).to.not.include('<td>')
    expect(result).to.not.include('</td>')
    expect(result).to.not.include('<!--Content here-->')


  });

  it("should return a single <tr>, four <td>s, and a <form> for one uncompleted item", () => {
    //arrange
    const items = [{ title: 'Clean Room', category: 'Chores' }]
    //act
    let result = mergeItems(template, items)
    //assert
    expect(result).to.include('<table>')
    expect(result).to.include('</table>')
    expect(result).to.include('<tbody>')
    expect(result).to.include('</tbody>')
    expect(result).to.include('<tr>')
    expect(result).to.include('</tr>')
    expect(result).to.include('<td>Clean Room</td>')
    expect(result).to.include('<td>Chores</td>')
    expect(result).to.include('<form method="POST" action="/items/1">')
    expect(result).to.not.include('<!--Content here-->')
  
  });

  it("should return a single <tr>, four <td>s, and no <form> for one completed item", () => {
    //arrange
    const items = [{ title: 'Clean Room', category: 'Chores', isComplete: true }]
    //act
    let result = mergeItems(template, items)
    //assert
    expect(result).to.include('<table>')
    expect(result).to.include('</table>')
    expect(result).to.include('<tbody>')
    expect(result).to.include('</tbody>')
    expect(result).to.include('<tr>')
    expect(result).to.include('</tr>')
    expect(result).to.include('<td>Clean Room</td>')
    expect(result).to.include('<td>Chores</td>')
    expect(result).to.not.include('<form method="POST" action="/items/1">')
    expect(result).to.not.include('<!--Content here-->')

  });

  it("should return three <tr>s for three items", () => {
    //arrange
    const items = [{ title: 'Clean Room', category: 'Chores', isComplete: true },
  { title: 'Take Out Garbage', category: 'Chores', isComplete: true },
  { title: 'Mow The Lawn', category: 'Chores', isComplete: false }]
    //act
    let result = mergeItems(template, items)
    
    //assert
    
    expect(result).to.include('<table>')
    expect(result).to.include('</table>')
    expect(result).to.include('<tbody>')
    expect(result).to.include('</tbody>')
    expect(result).to.include('<tr>')
    expect(result).to.include('</tr>')
    expect(result).to.include('<tr>')
    expect(result).to.include('</tr>')
    expect(result).to.include('<tr>')
    expect(result).to.include('</tr>')
    expect(result).to.include('<td>Clean Room</td>')
    expect(result).to.include('<td>Chores</td>')
    expect(result).to.include('<td>Chores</td>')
    expect(result).to.include('<td>Chores</td>')
    expect(result).to.include('<td>Tale Out Garbage</td>')
    expect(result).to.include('<td>Mow The Lawn</td>')
    expect(result).to.include('<form method="POST" action="/items/1">')
    expect(result).to.not.include('<!--Content here-->')
  });
});
