

export default function (state={}, action=null) {
    if(!action){
        action={};
        action.payload={};
        action.payload.cnt = 0;
    }
    console.log('action in reducer',action.payload.data);
    switch (action.type){
        case 'ADD_FAVORITE':
            return {...state, cnt:action.payload.data};
        default: return state;
    }
}