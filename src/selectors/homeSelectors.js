export const getHomeState = state => state.homes;
export const getDrawers = state => state.homes.drawers;
export const getSingleDrawer = (state, i) => getHomeState(state).drawers[i];
export const getCards = (state, i) => state.homes.cards[i];
export const getSingleCard = (state, i, cardIndex) => getSingleDrawer(state, i).content[cardIndex];
