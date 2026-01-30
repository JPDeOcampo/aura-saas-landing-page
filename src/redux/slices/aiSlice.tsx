import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";

export interface AIState {
  prompt: string;
  response: string;
  history: Array<{ prompt: string; response: string; timestamp: number }>;
  status: "idle" | "loading" | "success" | "error";
  error: string | null;
}

const initialState: AIState = {
  prompt: "",
  response: "",
  history: [],
  status: "idle",
  error: null,
};

const simulateAI = (prompt: string): string => {
  const words = prompt.split(" ");
  const topic = words.length > 3 ? words.slice(0, 3).join(" ") + "..." : prompt;

  const templates = [
    `I've analyzed your request regarding "${topic}". \n\nProposed Strategy:\n1. Structured approach to ${words[0] || "the task"}.\n2. Optimized workflow for Philippine-based operations.\n3. Scalable implementation of "${prompt}".`,
    `✨ Professional Enhancement:\n\nOriginal: "${prompt}"\n\nRefined Output: "Leveraging advanced methodologies to streamline ${prompt}, ensuring high-impact results with localized context for Metro Manila stakeholders."`,
    `🚀 AI Transformation for: ${topic}\n\n• Clarity: 98% Improved\n• Tone: Professional/Executive\n• Actionable: Yes\n\nFinal Version: Your idea "${prompt}" has been re-engineered for maximum efficiency and enterprise-level presentation.`,
  ];

  return templates[Math.floor(Math.random() * templates.length)];
};

export const generateAIResponse = createAsyncThunk(
  "ai/generateResponse",
  async (prompt: string, { rejectWithValue, signal }) => {
    try {
      const delay = Math.floor(Math.random() * 1000) + 1000;

      await new Promise((resolve, reject) => {
        const timeout = setTimeout(resolve, delay);
        signal.addEventListener("abort", () => {
          clearTimeout(timeout);
          reject(new Error("Generation cancelled"));
        });
      });

      return simulateAI(prompt);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Failed to connect to AI engine";
      return rejectWithValue(errorMessage);
    }
  },
);

const aiSlice = createSlice({
  name: "ai",
  initialState,
  reducers: {
    setPrompt: (state, action: PayloadAction<string>) => {
      state.prompt = action.payload;
    },
    resetAI: (state) => {
      state.status = "idle";
      state.response = "";
      state.error = null;
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(generateAIResponse.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(generateAIResponse.fulfilled, (state, action) => {
        state.status = "success";
        state.response = action.payload;
        state.history.unshift({
          prompt: state.prompt,
          response: action.payload,
          timestamp: Date.now(),
        });
      })
      .addCase(generateAIResponse.rejected, (state, action) => {
        if (action.meta.aborted) return;

        state.status = "error";
        state.error = action.payload as string;
      });
  },
});

export const { setPrompt, resetAI, clearHistory } = aiSlice.actions;
export default aiSlice.reducer;
