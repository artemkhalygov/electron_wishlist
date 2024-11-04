
import React from "react";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import RecipesList from './components/RecipesList/index.jsx';
import Test from "./components/Test/index.jsx";
import Test2 from "./components/Test2/index.jsx";

import { HashRouter, Route, Routes } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails.jsx";
import WishlistProvider from './WishlistContext.jsx';
import WishlistPage from "./components/WishlistPage/WishlistPage.jsx";
import TranslationProvider from "./TranslationContext.jsx";
import DialogProvider from "./dialogContext/DialogContext.jsx";

const queryClient = new QueryClient()
function App() {
  return (
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <TranslationProvider>
          <WishlistProvider>
            <DialogProvider>
              <Routes>
                <Route path="/" element={<RecipesList />} />
                <Route path="/details/:recipeId" element={<RecipeDetails />} />
                <Route path="/wishlist" element={<WishlistPage />} />
              </Routes>
            </DialogProvider>
          </WishlistProvider>
        </TranslationProvider>
      </QueryClientProvider>
    </HashRouter>
  );
}

export default App;

