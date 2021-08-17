import {createSlice} from '@reduxjs/toolkit';

interface PageState {
    loading: boolean,
}

const initialState: PageState = {
    loading: false,
}

export const modalSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        loadingStart(state) {
            state.loading = false;
        },
        loadingEnd(state) {
            state.loading = true;
        }
    }
})

export const { loadingStart, loadingEnd } = modalSlice.actions;
export default modalSlice.reducer;
