import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from './redux/store';
import { theme } from './theme/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css'
import { router } from './router/router';

function App() {

    return (
        <>
            <QueryClientProvider client={new QueryClient()}>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <RouterProvider router={router}/>
                    </ThemeProvider>
                </Provider>
            </QueryClientProvider>
        </>
    )
}

export default App
