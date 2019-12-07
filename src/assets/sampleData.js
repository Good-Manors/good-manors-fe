const house = {
  title: 'My House!',
  drawers: [
    {
      name: 'Kitchen',
      cards: [
        { name: 'Fridge', type: 'Appliance', content: [['text', 'this is my text'], ['key-value', ['key', 'value']]] },
        { name: 'Oven', type: 'Appliance', content: [['log', ['a', 'b', 'c']], ['text', 'another text entry']] }
      ]
    },
    {
      name: 'Exterior', 
      cards: [
        { name: 'Oak Tree', type: 'Plant', content: [['key-value', ['species', 'red oak']], ['text', 'planted in 1998']] },
        { name: 'Deck Color', type: 'Paint Swatch', content: [['key-value', ['brand', 'Benjamin Moore']], ['key-value', ['color', 'Lime Green']]] }
      ]
    }
  ]
};

export default house;
