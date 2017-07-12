const defaultState = {
    deck: generateCards(),
    draw: 4,
    dealer: [],
    hand: [],
    dealerScore: 0,
    handScore: 0,
    winner: null
};

export function appReducer(state = defaultState, action){
    switch(action.type){
        case "SHUFFLE_DECK":
            let newDeck = shuffle(state.deck);
            return Object.assign({}, state, {
                deck: newDeck,
                draw: 4,
                hand: [...state.deck.slice(0, 2)],
                dealer: [...state.deck.slice(2, 4)],
                handScore: parseInt(state.deck[0]) + parseInt(state.deck[1]),
                dealerScore: parseInt(state.deck[2]) + parseInt(state.deck[3]),
                winner: null
            });
        case "DRAW_DEALER":
            let tally = state.dealerScore + parseInt(state.deck[state.draw]);
            winner = (tally === 21 || (tally >= state.handScore && tally <= 21)) ? "Dealer" : "Player";
            return Object.assign({}, state, {
                draw: state.draw + 1,
                dealer: [...state.dealer, state.deck[state.draw]],
                dealerScore: tally,
                winner: winner
            });
        case "DRAW_HAND":
            tally = state.handScore + parseInt(state.deck[state.draw]);
            winner = tally === 21 ? "Player" : tally < 21 ? null : 'Dealer';
            return Object.assign({}, state, {
                draw: state.draw + 1,
                hand: [...state.hand, state.deck[state.draw]],
                handScore: tally,
                winner: winner
            });
        default:
            return state;
    }
}


function generateCards(){
  let decks = 5;
  let array = [];
  let suits = ['Diamonds', 'Clubs', 'Hearts', 'Spades'];
  let cards = ['1 one', '2 two', '3 three', '4 four', '5 five', '6 six', '7 seven', '8 eight', '9 nine', '10ten', '10J', '10Q', '10K'];
  while(--decks){
    for(let i = 0; i < 4; i++){
      for(let j = 0; j < 13; j++){
        let card = cards[j] + suits[i];
        array.push(card);
      } 
    }
  }
  return array;
}

function shuffle(array){
    let m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
}
