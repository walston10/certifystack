# A+ Core 1 Flashcards Guide

## Structure

Each lesson has its own flashcard file named `lesson-XX-flashcards.js` where XX is the lesson number (01-30).

## Creating Flashcard Files

### 1. Create a new flashcard file
Example: `lesson-02-flashcards.js`

```javascript
export const lesson2Flashcards = [
  {
    id: 1,
    front: "What is BIOS?",
    back: "Basic Input/Output System - firmware that initializes hardware during boot process before handing control to the operating system."
  },
  {
    id: 2,
    front: "What does UEFI stand for?",
    back: "Unified Extensible Firmware Interface - modern replacement for BIOS with better security and faster boot times."
  },
  // Add more cards...
];
```

### 2. Update the index.js file

After creating a new flashcard file, you must import it and add it to the registry in `index.js`:

```javascript
// Add import at top
import { lesson2Flashcards } from './lesson-02-flashcards';

// Add to allFlashcards object
export const allFlashcards = {
  1: lesson1Flashcards,
  2: lesson2Flashcards,  // Add this line
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

A+ Core 1 uses lessons 1-30
A+ Core 2 uses lessons 31-60 (see ../a-plus-core2/flashcards/)
