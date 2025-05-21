
// Gemini API service for code explanation
export async function explainCode(code: string, level: 'beginner' | 'advanced'): Promise<string> {
  if (!code.trim()) {
    throw new Error('Please provide code to explain');
  }
  
  const API_KEY = 'AIzaSyC6tajklMGVAKPrvGRwopB27BgbKGoHr94'; // Updated API key
  // Updated API endpoint URL with the correct version and model
  const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
  
  try {
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Explain the following code in ${level} terms with visually appealing markdown formatting:\n\n${code}`
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
      }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to generate explanation');
    }
    
    const data = await response.json();
    
    // Extract the explanation text from Gemini's response
    const explanationText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!explanationText) {
      throw new Error('No explanation was generated');
    }
    
    return explanationText;
  } catch (error) {
    console.error('Error generating explanation:', error);
    throw error instanceof Error 
      ? error 
      : new Error('Explanation could not be generated. Please try again.');
  }
}
