const redux = require('redux')
const createStore = redux.createStore
const combineReducer = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buy_cake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buy_icecream(){
    return{
        type: BUY_ICECREAM,
        info: 'Something sweet'
    }
}

// reducer = (prevState, action) => newState (update the states based on actions)

// const initialState = {
//     numOfCakes: 10,
//     numOfIcecream: 20
// }
const initialCakeState = {
    numOfCakes: 10
}
const initialIcecreamState = {
    numOfIcecream: 15
}


const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }

}
const iceCreamReducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIcecream: state.numOfIcecream - 1
        }
        default: return state
    }

}

const rootReducer = combineReducer({
    cake: cakeReducer,
    icecream: iceCreamReducer
})
const store = createStore(rootReducer)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(()=> console.log('Updated State', store.getState()))
store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_icecream())
store.dispatch(buy_icecream())
unsubscribe()
