# CertifyStack Scalable Architecture Restructure Plan

## Current Issues
- Activity components (OSIActivity, TopologyActivity) at root component level
- Not scalable for multiple lessons per course
- Not scalable for multiple courses (Network+, Security+, CCNA, Cloud+)
- Activities and styles mixed with core app components

## Proposed Structure

```
src/
├── components/
│   ├── common/                    # Core app components
│   │   ├── Dashboard.jsx
│   │   ├── LessonViewer.jsx
│   │   ├── FlashcardPlayer.jsx
│   │   ├── Login.jsx
│   │   └── ...
│   └── activities/                # Activity infrastructure
│       ├── ActivityLoader.jsx     # Dynamic activity loader
│       └── BaseActivity.jsx       # Base activity template
│
├── courses/                       # ALL course-specific code
│   ├── network-plus/
│   │   ├── activities/            # Interactive lesson activities
│   │   │   ├── index.js           # Activity registry for Network+
│   │   │   ├── lesson-01/
│   │   │   │   ├── OSIActivity.jsx
│   │   │   │   └── OSIActivity.css
│   │   │   ├── lesson-02/
│   │   │   │   ├── TopologyActivity.jsx
│   │   │   │   └── TopologyActivity.css
│   │   │   ├── lesson-03/
│   │   │   │   ├── SubnettingActivity.jsx
│   │   │   │   └── SubnettingActivity.css
│   │   │   └── shared/            # Reusable activity components
│   │   │       ├── NetworkDiagram.jsx
│   │   │       ├── DragDropBuilder.jsx
│   │   │       └── PortVisualizer.jsx
│   │   ├── data/
│   │   │   ├── lessons.js
│   │   │   ├── labs.js
│   │   │   ├── domainConfig.js
│   │   │   └── index.js
│   │   ├── flashcards/
│   │   │   ├── index.js
│   │   │   └── lesson-XX-flashcards.js
│   │   └── quizzes/
│   │       ├── index.js
│   │       └── lesson-XX-quiz.js
│   │
│   ├── security-plus/             # Future: Security+ course
│   │   ├── activities/
│   │   │   ├── index.js
│   │   │   ├── lesson-01/
│   │   │   │   ├── ThreatModelingActivity.jsx
│   │   │   │   └── ...
│   │   │   └── shared/
│   │   ├── data/
│   │   ├── flashcards/
│   │   └── quizzes/
│   │
│   ├── ccna/                      # Future: CCNA course
│   │   └── ...
│   │
│   ├── cloud-practitioner/        # Future: AWS Cloud Practitioner
│   │   └── ...
│   │
│   └── index.js                   # Course registry/router
│
├── data/
│   └── courseRegistry.js          # Maps course slugs to course modules
│
└── styles/
    ├── common/                    # Shared app styles
    └── activities/                # Base activity styles
        └── BaseActivity.css
```

## Activity Registry Pattern

### Example: `src/courses/network-plus/activities/index.js`

```javascript
// Registry maps lessonId to activity component
import { lazy } from 'react';

export const activityRegistry = {
  1: lazy(() => import('./lesson-01/OSIActivity')),
  2: lazy(() => import('./lesson-02/TopologyActivity')),
  3: lazy(() => import('./lesson-03/SubnettingActivity')),
  // ... add more as needed
};

export function getActivityForLesson(lessonId) {
  return activityRegistry[lessonId] || null;
}
```

### Example: `src/components/activities/ActivityLoader.jsx`

```javascript
import { Suspense } from 'react';

export function ActivityLoader({ courseId, lessonId }) {
  const { getActivityForLesson } = useCourseActivities(courseId);
  const ActivityComponent = getActivityForLesson(lessonId);

  if (!ActivityComponent) {
    return <div>No interactive activity for this lesson</div>;
  }

  return (
    <Suspense fallback={<div>Loading activity...</div>}>
      <ActivityComponent />
    </Suspense>
  );
}
```

## Migration Steps

1. **Phase 1: Create new structure**
   - Create `src/courses/` directory
   - Move `src/data/courses/network-plus/` → `src/courses/network-plus/data/`
   - Move flashcards and quizzes into course folder
   - Create `activities/` folder structure

2. **Phase 2: Move activities**
   - Move `OSIActivity.jsx` → `courses/network-plus/activities/lesson-01/`
   - Move `TopologyActivity.jsx` → `courses/network-plus/activities/lesson-02/`
   - Move corresponding CSS files
   - Create activity registry

3. **Phase 3: Update imports**
   - Update LessonViewer to use ActivityLoader
   - Update all imports throughout the app
   - Test each activity still works

4. **Phase 4: Clean up**
   - Remove old activity files from `src/components/`
   - Remove old activity styles from `src/styles/`
   - Update gitignore if needed

## Benefits

### Scalability
- ✅ Easy to add new courses (just copy course folder structure)
- ✅ Easy to add new lessons with activities
- ✅ Each course completely isolated
- ✅ No naming conflicts between courses

### Maintainability
- ✅ Clear separation of concerns
- ✅ Easy to find course-specific code
- ✅ Shared components reduce duplication
- ✅ Activity registry makes it clear what activities exist

### Performance
- ✅ Lazy loading activities (only load when needed)
- ✅ Code splitting per course
- ✅ Smaller initial bundle size

### Developer Experience
- ✅ Consistent structure across all courses
- ✅ Clear conventions for adding new content
- ✅ Easy to navigate codebase
- ✅ Documentation becomes self-evident from structure

## Future Enhancements

1. **Activity Templates**: Create base templates for common activity types
   - Drag & Drop activities
   - Multiple choice interactive
   - Simulation activities
   - Lab environment activities

2. **Course Configuration**: Centralized course config file
   ```javascript
   {
     id: 'network-plus',
     name: 'CompTIA Network+',
     totalLessons: 30,
     domains: [...],
     hasActivities: true,
     hasLabs: true
   }
   ```

3. **Activity Metadata**: Track activity types and requirements
   ```javascript
   {
     lessonId: 1,
     activityType: 'interactive-diagram',
     estimatedTime: 15,
     difficulty: 'intermediate',
     prerequisites: []
   }
   ```

## Implementation Priority

1. **High Priority** (Do Now)
   - Create new folder structure
   - Move existing activities
   - Create ActivityLoader component
   - Update LessonViewer

2. **Medium Priority** (Next Sprint)
   - Create shared activity components
   - Standardize activity API/props
   - Add activity metadata

3. **Low Priority** (Future)
   - Activity templates library
   - Course cloning tool/script
   - Activity analytics tracking
