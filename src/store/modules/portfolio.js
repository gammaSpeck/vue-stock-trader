const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  BUY_STOCK(state, { stockId, quantity, stockPrice }) {
    const cost = stockPrice * quantity;
    // Cant buy if insufficient funds
    if (state.funds < cost) throw Error("Insufficient Funds");

    const record = state.stocks.find(el => el.id === stockId);

    if (record) record.quantity += quantity;
    else state.stocks.push({ id: stockId, quantity });

    state.funds -= cost;
  },
  SELL_STOCK(state, { stockId, quantity, stockPrice }) {
    const cost = stockPrice * quantity;
    const record = state.stocks.find(el => el.id === stockId);

    //  Cant sell what you dont own
    if (quantity > record.quantity) throw Error("Cant sell what you dont own");

    if (record.quantity > quantity) record.quantity -= quantity;
    else state.stocks.splice(state.stocks.indexOf(record), 1);

    state.funds += cost;
  },

  SET_PORTFOLIO(state, portfolio) {
    console.log({ portfolio });
    state.funds = portfolio.funds;
    state.stocks =
      portfolio.stockPortfolio.map(s => ({ id: s.id, quantity: s.quantity })) ||
      [];
  }
};

const actions = {
  sellStock({ commit }, order) {
    commit("SELL_STOCK", order);
  }
};

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(s => {
      const record = getters.stocks.find(e => e.id === s.id);
      return {
        id: s.id,
        quantity: s.quantity,
        name: record.name,
        price: record.price
      };
    });
  },
  funds: s => s.funds
};

export default {
  state,
  getters,
  mutations,
  actions
};
