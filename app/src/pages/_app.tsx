import "@/src/styles/globals.scss";
import type { AppProps } from "next/app";
import { setupStore } from "@/src/store/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  const store = setupStore()
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
}
