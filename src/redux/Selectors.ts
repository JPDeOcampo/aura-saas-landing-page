import type { RootState } from "./store";

export const selectAIPrompt = (state: RootState) => state.ai.prompt;
export const selectAIResponse = (state: RootState) => state.ai.response;
export const selectAIStatus = (state: RootState) => state.ai.status;
export const selectAIError = (state: RootState) => state.ai.error;
export const selectAIHistory = (state: RootState) => state.ai.history;

export const selectIsLoading = (state: RootState) =>
  state.ai.status === "loading";
export const selectHasResponse = (state: RootState) =>
  state.ai.status === "success" && state.ai.response.length > 0;
