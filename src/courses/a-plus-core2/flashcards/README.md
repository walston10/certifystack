# A+ Core 2 Flashcards Guide

## Structure

Each lesson has its own flashcard file named `lesson-XX-flashcards.js` where XX is the lesson number (31-60).

## Creating Flashcard Files

### 1. Create a new flashcard file
Example: `lesson-32-flashcards.js`

```javascript
export const lesson32Flashcards = [
  {
    id: 1,
    front: "What is Active Directory?",
    back: "Microsoft's directory service for Windows domain networks - manages users, computers, and resources centrally."
  },
  {
    id: 2,
    front: "What does GPO stand for?",
    back: "Group Policy Object - used to configure and enforce settings across Windows domain networks."
  },
  // Add more cards...
];
```

### 2. Update the index.js file

After creating a new flashcard file, you must import it and add it to the registry in `index.js`:

```javascript
// Add import at top
import { lesson32Flashcards } from './lesson-32-flashcards';

// Add to allFlashcards object
export const allFlashcards = {
  31: lesson31Flashcards,
  32: lesson32Flashcards,  // Add this line
  // ...
};
```

## Flashcard Format

Each flashcard object requires:
- `id`: Number - Sequential ID starting from 1
- `front`: String - The question or term
- `back`: String - The answer or definition

### Best Practices

1. **Keep it concise**: Front should be a clear question, back should be a focused answer
2. **Use consistent numbering**: Start each lesson's cards at id: 1
3. **One concept per card**: Don't try to teach multiple things in one card
4. **Use examples**: Include real-world examples in answers when helpful
5. **Formatting**: Use markdown-style formatting in text if needed

### Example Template

```javascript
export const lessonXXFlashcards = [
  {
    id: 1,
    front: "Question here?",
    back: "Answer here with important details."
  },
  {
    id: 2,
    front: "Another question?",
    back: "Another answer."
  },
];
```

## Testing Your Flashcards

After adding flashcards:
1. Navigate to the lesson in the app
2. Click the "Flashcards" tab
3. Verify cards load and display correctly
4. Check that the spaced repetition system is working

## Lesson Numbering

A+ Core 1 uses lessons 1-30 (see ../a-plus-core1/flashcards/)
A+ Core 2 uses lessons 31-60
