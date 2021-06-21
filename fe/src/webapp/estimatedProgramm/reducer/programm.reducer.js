import { ProgrammService } from "..";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const isRejectedAction = action => (action.type.endsWith('rejected'))

export const registerProgramm = createAsyncThunk(
    "programm/register",
    async(data) =>{
        const response = await ProgrammService.programmRegister(data)
        return response.data;
    }
)

export const resultProgramm = createAsyncThunk(
    "programm/result",
    async(programmId) =>{
        const response = await ProgrammService.programmresult(programmId)
        return response.data;
    }
)


const programmSlice = createSlice({
    name: 'programms',
    initialState: {
        programms:{},
        current: [],
    },
    reducers:{
        addProgramm : (state, {payload}) =>{
            console.log("addProgramms: " , payload)
            state.current.push(payload)
        }
        

    },
    extraReducers: (builder) =>{
        builder.addCase(registerProgramm.fulfilled,(state, {payload}) => {
            state.programms = payload
        })
        .addCase(resultProgramm.fulfilled,(state, {payload}) => {
            state.programms = payload
        })
        .addMatcher(isRejectedAction).addDefaultCase()
        .addDefaultCase((state, payload)=>{})
    }
})

const {actions, reducer} = programmSlice;
export const {addProgramm} = actions;
export default reducer;