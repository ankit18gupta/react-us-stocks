import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ArticleProps, ArticlesState } from "../../models/types";
import { appConstants } from "../../utils/constants";
import getFilteredArticles from "../../utils/getFilteredArticles";
import getSortedArticles from "../../utils/getSortedArticles";
import getActivePageArticles from "../../utils/getActivePageArticles";

// Custom version of create slice
const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

// Initial state of articles
const initialArticlesState: ArticlesState = {
  loading: true,
  error: null,
  articles: [],
  filteredArticles: [],
  selectedCategories: [],
  selectedAuthors: [],
  sortingOption: "latestToEarliest",
  activePageNumber: 1,
  activePageArticles: [],
};

// articlesSlice with initial state and object of reducer functions to update the state based on the actions dispatched by components
const articlesSlice = createAppSlice({
  name: "articles",
  initialState: initialArticlesState,
  reducers: (create) => ({
    // Reducer to fetch articles from the API URL using asyncThunk
    fetchArticles: create.asyncThunk(
      async (fetchUrl: string) => {
        const response = await axios.get(fetchUrl);
        return response.data as ArticleProps[];
      },
      {
        pending: (state) => {
          state.loading = true;
          state.error = null;
        },
        rejected: (state) => {
          state.loading = false;
          state.error = appConstants.ERROR_MESSAGE;
          state.articles = [];
          state.filteredArticles = [];
        },
        fulfilled: (state, { payload }) => {
          state.loading = false;
          state.error = null;
          state.articles = payload;
          state.filteredArticles = payload;
        },
      }
    ),
    // Reducer to update the filtered articles by categories
    filterArticlesByCategories: create.reducer<string>((state, { payload }) => {
      state.selectedCategories = state.selectedCategories.includes(payload)
        ? state.selectedCategories.filter((category) => category !== payload)
        : [...state.selectedCategories, payload];
      state.filteredArticles = getFilteredArticles(
        state.selectedCategories,
        state.selectedAuthors,
        state.articles
      );
    }),
    // Reducer to update the filtered articles by authors
    filterArticlesByAuthors: create.reducer<string>((state, { payload }) => {
      state.selectedAuthors = state.selectedAuthors.includes(payload)
        ? state.selectedAuthors.filter((author) => author !== payload)
        : [...state.selectedAuthors, payload];
      state.filteredArticles = getFilteredArticles(
        state.selectedCategories,
        state.selectedAuthors,
        state.articles
      );
    }),
    // Reducer to update the sorted articles
    sortArticles: create.reducer<string>((state, { payload }) => {
      state.sortingOption = payload;
      state.filteredArticles = getSortedArticles(
        state.sortingOption,
        state.filteredArticles
      );
    }),
    // Reducer to update the current page articles
    currentPageArticles: create.reducer<number>((state, { payload }) => {
      state.activePageNumber = payload;
      state.activePageArticles = getActivePageArticles(
        state.activePageNumber,
        state.filteredArticles
      );
    }),
  }),
});

// Export action creators generated for each reducer function to be utilized by components to dispatch an action
export const {
  fetchArticles,
  filterArticlesByCategories,
  filterArticlesByAuthors,
  sortArticles,
  currentPageArticles,
} = articlesSlice.actions;

// Export Reducer function for the whole articlesSlice
export default articlesSlice.reducer;
