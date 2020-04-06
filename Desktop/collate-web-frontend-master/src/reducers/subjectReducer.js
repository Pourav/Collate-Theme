export const subjectReducer=(state,action)=>{
    switch(action.type){
        case "SET_SUBJECT":
        return{
            ...state,
            SubjectList:action.payload.SubjectList
        }
        default:
            return state;
    }
}