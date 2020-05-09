import sort from '../src/sort';

describe('sort', () => {
  const data = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];

  const expectdata = sort(data);

  const result = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},      
  ];

  test('toStrictEqual',() => {
    expect(expectdata).toStrictEqual(result);
  });

  test('toEqual', () => {
    expect(expectdata).toEqual(result);
  });

  test('toBe', () => {
     expect(expectdata).toBe(result);
  });

});