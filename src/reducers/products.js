const initialState = {
    isReady: false,
    items: null,

};

export default (state= initialState, action) => {
    switch (action.type){
        case 'SET_PRODUCTS':
            return{
                ...state,
                items: action.payload,
                isReady: true
            };

         case 'SET_FILTER':
            return{
                ...state,
                filterBy: action.payload
            };
            

        case 'SET_IS_READY':
            return {
                ...state,
                isReady: action.payload
            }
            break;
        default:
            return state;
    }
};