export const getHomeState = state => state.homes;
export const getHomeInfo = state => state.homes.home;
export const getHomeName = state => state.homes.home.title;
export const getDrawers = state => state.homes.drawers;
export const getSingleDrawer = (state, i) => getHomeState(state).drawers[i];

export const getCardsByDrawer = (state, id) => {
  let flag = true;
  let i = 0;
  const drawers = getDrawers(state);
  while(flag) {
    if(drawers[i]._id === id) {
      return getCards(state, i);
    }
    else i++;
  }
};

export const getCards = (state, i) => {
  const cards = state.homes.cards[i];
  if(!cards) return [];
  return cards;
};

export const getSingleCard = (state, i, cardIndex) => getSingleDrawer(state, i).content[cardIndex];
