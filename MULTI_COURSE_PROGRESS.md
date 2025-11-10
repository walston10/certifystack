# Multi-Course Architecture - Implementation Progress

## ✅ Phase 1: File Structure (COMPLETE)

### Content Directories Created
```
public/content/
├── network-plus/ (existing)
├── a-plus-core1/ ✅
│   ├── lessons/
│   ├── labs/
│   ├── solutions/
│   └── reference/
└── a-plus-core2/ ✅
    ├── lessons/
    ├── labs/
    ├── solutions/
    └── reference/
```

### Data Directories Created
```
src/data/courses/
├── network-plus/ ✅
├── a-plus-core1/ ✅
│   ├── lessons.js (placeholder)
│   └── labs.js (placeholder)
└── a-plus-core2/ ✅
    ├── lessons.js (placeholder)
    └── labs.js (placeholder)
```

## ✅ Phase 2: Course Catalog (COMPLETE)

### Created: `src/data/courseCatalog.js`
- Defines metadata for all courses (Network+, A+ Core 1, A+ Core 2)
- Pricing information ($79 each, $129 bundle for A+)
- Course stats (lessons, labs, duration, difficulty)
- Bundle detection logic
- Helper functions for course management

**Key Features:**
- `getActiveCourses()` - Get all active courses
- `getBundleInfo(courseId)` - Get bundle details
- `canBundle(courseId1, courseId2)` - Check if courses can bundle
- Path helpers for backward compatibility

## ✅ Phase 3: Course Catalog UI (COMPLETE)

### Created: `CourseCatalog.jsx` + `CourseCatalog.css`
**Features:**
- Displays all active courses in grid
- Shows access badges (Subscription/Owned/Bundle)
- Bundle pricing display (A+ Core 1 + Core 2 for $129)
- Course stats (lessons, hours, difficulty)
- Domain/topic preview
- "Coming Soon" section (Security+, CCNA)
- Loads user access from Supabase
- Responsive design

## 🚧 Phase 4: CourseOverview (TODO)

### Need to Create: `CourseOverview.jsx`
Individual course detail page showing:
- Course header with branding
- Full description and objectives
- Complete module/domain list
- Lesson grid with completion status
- Lab list
- Pricing and purchase options
- "Start Learning" CTA (checks access)
- Progress indicator if started

**Route:** `/course/:courseId`

## 🚧 Phase 5: Update Routing (TODO)

### App.js Changes Needed

**Add new routes:**
```javascript
<Route path="/courses" element={<CourseCatalog />} />
<Route path="/course/:courseId" element={<CourseOverview />} />
<Route path="/course/:courseId/lessons" element={<LessonGrid />} />
```

**Update existing routes (ADD courseId):**
```javascript
// OLD
<Route path="/lesson/:id" element={<LessonViewer />} />
<Route path="/lab/:id" element={<LabViewer />} />

// NEW (keep old for backward compatibility)
<Route path="/course/:courseId/lesson/:lessonId" element={<LessonViewer />} />
<Route path="/course/:courseId/lab/:labId" element={<LabViewer />} />
<Route path="/course/:courseId/quiz/:lessonId" element={<QuizActivity />} />
<Route path="/course/:courseId/flashcards/:lessonId" element={<FlashcardActivity />} />

// BACKWARD COMPATIBILITY (redirect to network-plus)
<Route path="/lesson/:id" element={<Navigate to="/course/network-plus/lesson/:id" />} />
<Route path="/lab/:id" element={<Navigate to="/course/network-plus/lab/:id" />} />
```

## 🚧 Phase 6: Update Components (TODO)

### Components to Make Course-Agnostic

**1. LessonViewer.jsx**
```javascript
// OLD
const { id } = useParams();
fetch(`/content/network-plus/lessons/lesson-${id}.md`)

// NEW
const { courseId, lessonId } = useParams();
fetch(`/content/${courseId}/lessons/lesson-${lessonId}.md`)
```

**2. LabViewer.jsx**
```javascript
const { courseId, labId } = useParams();
fetch(`/content/${courseId}/labs/lab-${labId}.md`)
```

**3. QuizActivity.jsx**
- Add courseId param
- Load quiz from `courses/${courseId}/quizzes/`

**4. FlashcardActivity.jsx**
- Add courseId param
- Load flashcards from `courses/${courseId}/flashcards/`

**5. Dashboard.jsx → LessonGrid.jsx**
- Rename to LessonGrid
- Add courseId param
- Fetch lessons from `courses/${courseId}/lessons.js`
- Make course-specific instead of hardcoded Network+

## 🚧 Phase 7: Update Access Control (TODO)

### Update `src/utils/accessControl.js`

**New function: `checkCourseAccess(userId, courseId)`**
```javascript
export const checkCourseAccess = async (userId, courseId) => {
  // 1. Check subscription (course_id = null)
  // 2. Check specific course purchase (course_id = courseId)
  // 3. Check bundle access (A+ Core 1 <-> Core 2)

  return {
    hasAccess: boolean,
    accessType: 'subscription' | 'course' | 'bundle' | 'none'
  };
};
```

**Bundle Logic:**
- If user owns 'a-plus-core1', they get access to 'a-plus-core2'
- If user owns 'a-plus-core2', they get access to 'a-plus-core1'
- Check `user_access` table for course_id match

## 🚧 Phase 8: Update Navigation (TODO)

### Navigation.jsx Changes
Add "Courses" link to top nav:
```javascript
<NavLink to="/courses">
  <BookOpen size={20} />
  <span>Courses</span>
</NavLink>
```

### DashboardHome.jsx Updates
- Update "Lessons" feature card to go to `/courses` instead of `/lessons`
- Or add separate "My Courses" card
- Show progress across all enrolled courses

## 🚧 Phase 9: Testing (TODO)

### Test Checklist
- [ ] `/courses` displays all 3 courses
- [ ] Course cards show correct pricing
- [ ] Bundle option shows for A+ courses
- [ ] Clicking course goes to `/course/:courseId`
- [ ] CourseOverview displays correctly
- [ ] Old URLs redirect properly (backward compatibility)
- [ ] New URLs work: `/course/network-plus/lesson/1`
- [ ] Access control works for multiple courses
- [ ] Bundle detection works (owning Core 1 gives access to Core 2)
- [ ] Components fetch from correct course folder

## 📋 Files Created So Far

```
✅ public/content/a-plus-core1/          (folders)
✅ public/content/a-plus-core2/          (folders)
✅ src/data/courseCatalog.js             (catalog + helpers)
✅ src/data/courses/a-plus-core1/lessons.js
✅ src/data/courses/a-plus-core1/labs.js
✅ src/data/courses/a-plus-core2/lessons.js
✅ src/data/courses/a-plus-core2/labs.js
✅ src/components/CourseCatalog.jsx
✅ src/components/CourseCatalog.css
```

## 📋 Files Still Needed

```
🚧 src/components/CourseOverview.jsx
🚧 src/components/CourseOverview.css
🚧 src/components/LessonGrid.jsx (refactor from Dashboard)
🚧 src/utils/accessControl.js (update for multi-course)
```

## 🔄 Files to Update

```
🔄 src/App.js                    (add routes, backward compatibility)
🔄 src/components/Navigation.jsx (add Courses link)
🔄 src/components/DashboardHome.jsx (update feature cards)
🔄 src/components/LessonViewer.jsx (add courseId param)
🔄 src/components/LabViewer.jsx   (add courseId param)
🔄 src/components/QuizActivity.jsx (add courseId param)
🔄 src/components/FlashcardActivity.jsx (add courseId param)
```

## 🎯 Next Steps (Priority Order)

1. **Create CourseOverview component** - Individual course detail page
2. **Update App.js routing** - Add new routes + backward compatibility
3. **Update LessonViewer, LabViewer** - Make course-agnostic
4. **Update accessControl.js** - Multi-course + bundle logic
5. **Update Navigation** - Add "Courses" link
6. **Test end-to-end** - Full user flow through multiple courses

## 🎨 Design Notes

- Each course has unique brand color (cyan, purple, light purple)
- Course cards use gradient headers
- Bundle pricing prominently displayed
- Access badges show subscription/ownership status
- "Coming Soon" section for future courses

## 🔐 Access Control Strategy

**Subscription Users:**
- Access ALL courses (past, present, future)
- Check: `user_access.access_type = 'subscription'`

**Course Purchase Users:**
- Access specific course purchased
- Check: `user_access.course_id = 'network-plus'`

**Bundle Users (A+ Only):**
- Purchasing one A+ course grants access to both
- Check: If own 'a-plus-core1' OR 'a-plus-core2', grant both

**Free Tier:**
- First 5 lessons per course (future enhancement)

---

**Status:** 40% Complete
**Remaining Work:** ~6-8 hours
**Blockers:** None
**Ready for:** CourseOverview component creation

