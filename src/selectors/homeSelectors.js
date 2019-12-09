export const getHomeState = state => state.home;
export const getDrawers = state => getHomeState(state).drawers;
export const getSingleDrawer = (state, i) => getHomeState(state).drawers[i];
export const getCards = (state, i) => getSingleDrawer(state, i).content;
export const getSingleCard = (state, i, cardIndex) => getSingleDrawer(state, i).content[cardIndex];
