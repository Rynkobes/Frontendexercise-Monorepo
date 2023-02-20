import React from 'react'
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "store";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
