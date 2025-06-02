import axios from "axios";
import ReactMarkdown from "react-markdown";

// Helper function to add delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Function to make API request with retry logic
export async function getLearningPath(prompt, maxRetries = 2) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  if (!apiKey) {
    throw new Error("Gemini API key is missing. Please check your .env file.");
  }
  
  let retries = 0;
  
  while (retries <= maxRetries) {
    try {
      // Make request to Gemini API
      const response = await axios({
        method: 'post',
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          contents: [
            {
              parts: [
                {
                  text: prompt
                }
              ]
            }
          ]
        },
        timeout: 30000
      });
      
      let generatedText = "";
      if (response.data.candidates && 
          response.data.candidates[0] && 
          response.data.candidates[0].content && 
          response.data.candidates[0].content.parts && 
          response.data.candidates[0].content.parts[0]) {
        generatedText = response.data.candidates[0].content.parts[0].text;
      }
      
      return generatedText || "No content was generated. Please try again.";
    
    } catch (error) {
      if (error.response) {
        if (error.response.status === 429) {
          if (retries < maxRetries) {
            const waitTime = (retries + 1) * 2000;
            await delay(waitTime);
            retries++;
            continue;
          } else {
            throw new Error("Gemini API rate limit exceeded. Please try again in a few moments.");
          }
        }
        if (error.response.status === 400) {
          throw new Error("Bad request. Check your prompt and try again.");
        } else if (error.response.status === 401 || error.response.status === 403) {
          throw new Error("Invalid API key. Please check your Gemini API key.");
        } else if (error.response.status >= 500) {
          throw new Error("Gemini servers are currently experiencing issues. Please try again later.");
        }
      }
      if (error.code === 'ECONNABORTED') {
        throw new Error("Request timed out. Please check your internet connection and try again.");
      }
      throw new Error(error.message || "Failed to get learning path. Please try again.");
    }
  }
}