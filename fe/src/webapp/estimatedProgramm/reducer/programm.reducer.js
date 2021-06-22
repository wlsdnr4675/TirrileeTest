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
        options: [{
            option: "GPS(내주변)",
            price: 200
        },{
            option: "지도(맵커스텀)",
            price: 200
        },{
            option: "카카오톡 푸쉬",
            price: 200
        },{
            option: "커뮤니티",
            price: 200
        },{
            option: "공유하기",
            price: 200
        },{
            option: "유저타입확장",
            price: 200
        },{
            option: "채팅(실시간)",
            price: 200
        },
        {
            option: "필요없어요",
            price: 0
        },],
        currentOption:[],
    },
    reducers:{
        addProgramm : (state, {payload}) =>{
            console.log("addProgramms: " , payload)
            state.current.push(payload)
        },
        addOption : (state, {payload}) => {
            state.currentOption.push(payload)
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
export const {addProgramm, addOption} = actions;
export default reducer;