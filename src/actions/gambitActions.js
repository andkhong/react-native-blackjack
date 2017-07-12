const SHUFFLE_DECK = "SHUFFLE_DECK";
const DRAW_HAND = "DRAW_HAND";
const DRAW_DEALER = "DRAW_DEALER";

export function shuffleDeck() {
    return {
        type: SHUFFLE_DECK
    }
}

export function drawHand() {
    return {
        type: DRAW_HAND
    }
}

export function drawDealer() {
    return {
        type: DRAW_DEALER
    }
}