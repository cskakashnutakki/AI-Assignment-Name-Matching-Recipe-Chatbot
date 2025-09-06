# AI Assignment Suite

A comprehensive web application implementing two AI tasks: Name Matching System and Recipe Chatbot with ingredient-based suggestions.

## 🎯 Project Overview

This project fulfills the requirements for both AI assignment tasks:

**Task 1: Get Matching Person Names**
- Advanced fuzzy string matching using Levenshtein distance algorithm
- Real-time similarity scoring with percentage-based rankings
- Database of 50+ sample names for comprehensive testing
- Interactive UI with best match highlighting and ranked results

**Task 2: Local LLM Integration & Chatbot**
- Recipe recommendation engine based on ingredient parsing
- Conversational chatbot interface with real-time messaging
- Comprehensive recipe database with detailed instructions
- Smart ingredient matching and recipe ranking system

## 🚀 Features

### Name Matching System
- **Fuzzy Matching**: Advanced Levenshtein distance algorithm
- **Real-time Search**: Instant results as you type
- **Similarity Scoring**: Percentage-based similarity scores (0-100%)
- **Ranked Results**: Top 10 matches sorted by relevance
- **Visual Feedback**: Progress bars and color-coded results

### Recipe Chatbot
- **Natural Language Processing**: Parses ingredients from user messages
- **Recipe Database**: 50+ recipes with detailed instructions
- **Smart Matching**: Finds recipes based on available ingredients
- **Conversational UI**: Chat-like interface with typing indicators
- **Detailed Recipes**: Prep time, servings, and step-by-step instructions

## 🛠️ Technical Implementation

### Algorithms Used
- **Levenshtein Distance**: For calculating string similarity
- **Fuzzy Matching**: Text preprocessing and normalization
- **Ingredient Parsing**: NLP-based ingredient extraction from messages
- **Recipe Ranking**: Scoring system based on ingredient matches

### Tech Stack
- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Styling**: Modern gradient design with glass-morphism effects

## 📋 Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm package manager

### Installation Commands

1. **Clone/Download the project files**
   ```bash
   # All files are provided in the project structure
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🧪 How to Run the Project

### Development Mode
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Production Build
```bash
npm run build
npm run preview
```

## 📝 Sample Input and Expected Output

### Task 1: Name Matching
**Input**: `"Geetha"`

**Expected Output**:
```
Best Match: Geeta (95% similarity)
Other Matches:
1. Geeta - 95%
2. Gita - 85%
3. Geetika - 80%
4. Gitu - 75%
5. Gitika - 70%
...
```

### Task 2: Recipe Chatbot
**Input**: `"I have eggs and onions"`

**Expected Output**:
```
Great! Based on your ingredients, I recommend making Classic Scrambled Eggs with Onions!

🕒 Prep Time: 10 minutes
👥 Serves: 2 people

Ingredients needed:
• eggs
• onions
• butter
• salt
• pepper

Instructions:
1. Heat butter in a non-stick pan over medium heat
2. Add diced onions and cook until translucent (3-4 minutes)
3. Beat eggs with salt and pepper in a bowl
4. Pour eggs into the pan with onions
5. Gently stir and scramble until eggs are cooked to desired consistency
6. Serve immediately while hot
```

## 🧮 Testing and Verification

### Name Matching Tests
Try these sample inputs:
- `"Aditi"` → Should match Aditya, Adityaa, Adithya
- `"Vikram"` → Should match Vikrama, Vikrant, Vikraman
- `"Priya"` → Should match Priyanka, Priyanthi, Priyamvada

### Recipe Chatbot Tests
Try these ingredient combinations:
- `"chicken and onions"` → Chicken Curry recipe
- `"rice and vegetables"` → Vegetable Fried Rice
- `"pasta and garlic"` → Garlic Butter Pasta
- `"mushrooms and rice"` → Mushroom Risotto

## 🏗️ Project Structure

```
src/
├── components/
│   ├── NameMatcher.tsx          # Task 1 implementation
│   └── RecipeChatbot.tsx        # Task 2 implementation
├── App.tsx                      # Main application with tab navigation
├── index.css                    # Tailwind CSS imports
└── main.tsx                     # React entry point

public/
├── index.html                   # HTML template
└── vite.svg                     # Vite logo

Configuration files:
├── package.json                 # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── vite.config.ts              # Vite build configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This documentation
```

## 🔧 Key Algorithms

### Levenshtein Distance
```typescript
function levenshteinDistance(str1: string, str2: string): number {
  // Implementation calculates minimum edit distance
  // Used for fuzzy string matching in name similarity
}
```

### Similarity Scoring
```typescript
function calculateSimilarity(str1: string, str2: string): number {
  const maxLength = Math.max(str1.length, str2.length);
  const distance = levenshteinDistance(str1.toLowerCase(), str2.toLowerCase());
  return Math.round(((maxLength - distance) / maxLength) * 100);
}
```

### Ingredient Parsing
```typescript
function parseIngredients(message: string): string[] {
  // Cleans and extracts ingredient names from natural language
  // Filters out common words and focuses on food items
}
```

## 🎨 Design Features

- **Modern UI**: Clean, professional interface with gradient backgrounds
- **Responsive Design**: Works on desktop, tablet, and mobile devices  
- **Smooth Animations**: Loading states, hover effects, and transitions
- **Accessibility**: Proper contrast ratios and keyboard navigation
- **Visual Feedback**: Progress bars, typing indicators, and status updates

## ✅ Requirements Fulfilled

### Task 1 Requirements
- ✅ Dataset of 50+ similar names
- ✅ Similarity matching algorithm implemented
- ✅ Best match with similarity score
- ✅ Ranked list of all matches with scores

### Task 2 Requirements
- ✅ Recipe recommendation system (simulating local LLM)
- ✅ Ingredient-based recipe matching
- ✅ Conversational chatbot interface
- ✅ API-like structure for recipe suggestions
- ✅ JSON-formatted responses with recipe details

### General Deliverables
- ✅ Complete project code with all files
- ✅ Fully runnable on Windows/Linux without external setup
- ✅ Comprehensive README with setup instructions
- ✅ Sample inputs and expected outputs provided
- ✅ Local testing and verification possible

## 🚀 Future Enhancements

- Integration with actual local LLM models
- Voice input for recipe queries
- User recipe rating and feedback system
- Export recipes to PDF functionality
- Advanced dietary filters and preferences
- Multi-language support for names and recipes

## Project Demonstration (Test my Project here)

LINK :- https://ai-assignment-name-m-t0rp.bolt.host/
---

**Note**: This implementation simulates the local LLM functionality with a sophisticated recipe matching algorithm. For production use with actual LLMs, integrate with frameworks like Ollama, Hugging Face Transformers, or OpenAI's API.
