import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


/* ========= get headphones  ============= */
export const fetchHeadphones = createAsyncThunk('get/headphone',async ()=>{
    const res = await axios.get("http://localhost:3001/headphones")
    return console.log(res.data)
})