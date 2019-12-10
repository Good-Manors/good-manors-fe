const house = {
  title: 'My House!',
  drawers: [
    {
      name: 'Kitchen',
      cards: [
        { name: 'Fridge', 
          type: 'Appliance', 
          content: [['text', 'I bought this fridge from our neighbor Jeff.'], ['key-value', ['Brand', 'value']], ['log', ['Purchased: 12/12/96', 'Serviced: 12/12/98', 'Serviced: 12/10/08']]] },
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
