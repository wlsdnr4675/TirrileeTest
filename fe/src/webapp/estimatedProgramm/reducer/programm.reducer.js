const { createSlice } = require("@reduxjs/toolkit");
const isRejectedAction = action => (action.type.endsWith('rejected'))

const programmSlice = createSlice({
    name: 'programms',
    initialState: {
        programms:{}
    },
    reducers:{

    },
    extraReducers: (builder) =>{
        // builder
        // .addMatcher(isRejectedAction).addDefaultCase()
        // .addDefaultCase((state, payload)=>{})
    }
})

const {actions, reducer} = programmSlice;
export const { } = actions;
export default reducer;