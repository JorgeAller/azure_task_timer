import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ConfigurationState {
    theme: 'light' | 'dark';
    language: 'es' | 'en';
}

const initialState: ConfigurationState = {
    theme: 'light',
    language: 'en',
};

export const configurationSlice = createSlice({
    name: 'configuration',
    initialState,
    reducers: {
        setTheme(state, action: PayloadAction<'light' | 'dark'>) {
            state.theme = action.payload;
        },
        setLanguage(state, action: PayloadAction<'es' | 'en'>) {
            state.language = action.payload;
        },
    },
});

export const { 
    setTheme, 
    setLanguage 
} = configurationSlice.actions;

