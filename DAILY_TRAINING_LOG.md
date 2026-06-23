# Daily Training Project Log

This file records the current formatting rules for the English speaking review dashboard. Use it as the standard when adding future daily training content to `script.js`.

## 2026-06-07 UI And Format Standard

### Current Page Behavior

- The page shows one Day at a time, instead of stacking all days in one long scroll page.
- The left navigation selects a Day and switches the main content area to that Day.
- On mobile, the Day navigation becomes a compact non-sticky top strip and scrolls away naturally while reading.
- On mobile, the Bookmarks list is hidden to avoid blocking the reading area; bookmarking is still available from the top toolbar.
- Bookmarks are controlled from the top toolbar, immediately to the left of the theme toggle button.
- The old dashboard status strip was removed.
- Search only runs after pressing `Enter`.
- Search results are highlighted in the content.
- `Previous` and `Next` buttons move between search matches.
- `Clear` resets the current search.
- If search matches appear in different Days, the page automatically switches to the matching Day.
- Search result status uses the format `current / total · Day N`.
- Reference Answers remain hidden by default, but if a search term matches a hidden answer, that answer can be highlighted/opened by the search flow.
- Each Day has a completion state saved in `localStorage`.
- The left Day navigation shows completion status.
- Each Day page has a bottom action bar:
  - `Previous Day`
  - `Mark as Done` / `Completed`
  - `Next Day`

### Visual Rules

- Default theme remains dark.
- Each Day uses a slightly different accent color through `getLessonAccent(day)`.
- Section titles use the same visual style:
  - `Core Sentence Patterns`
  - `Speaking Questions`
  - `Training Focus`
  - `Daily Quote`
- Section title style:
  - larger font
  - bold weight
  - current Day accent color
  - subtle glow
- `Core Sentence Patterns` cards use accent-colored styling and a more prominent sentence pattern badge.
- Example sentences use the same font and size as Reference Answers:
  - Helvetica font stack
  - `1.12rem`
  - comfortable line height
- Each example sentence starts with a CSS-rendered colorful number badge from 1 to 5.
- Speaking Questions:
  - question text starts with `💬`
  - Reference Answer text starts with `✨`
  - Reference Answer text uses Helvetica font stack and larger readable size
- Daily Quote uses a handwritten-style English font stack:
  - `Segoe Print`
  - `Bradley Hand ITC`
  - `Comic Sans MS`
  - cursive fallback

## Required Data Structure For New Days

Add new daily content only inside the `lessons` array in `script.js`.

Every new Day must follow this structure:

```js
{
  day: 8,
  title: "Day 8 - 口语启动训练（留学生活方向）",
  theme: "当天主题",
  patterns: [
    {
      pattern: "Sentence pattern...",
      usage: "中文说明：使用场合、语气、适用场景。",
      examples: [
        "Example sentence 1.",
        "Example sentence 2.",
        "Example sentence 3.",
        "Example sentence 4.",
        "Example sentence 5."
      ],
      practiceTip: "中文练习建议。"
    }
  ],
  questions: [
    {
      question: "Speaking question?",
      answer: "Reference answer."
    }
  ],
  trainingFocus: "当天训练重点。",
  quote: {
    text: "Daily quote.",
    author: "Author"
  },
  images: []

  // AI comic prompt ideas:
  // 1. English prompt for a warm, positive comic illustration.
  // 2. English prompt for another optional comic illustration.
}
```

## Rules For Adding Future Daily Training

- Do not change the existing page structure unless the user explicitly asks.
- Do not modify older Days unless the user explicitly asks.
- Add the new object at the end of the `lessons` array.
- Use the next Day number in sequence.
- Preserve all 5 Core Sentence Patterns if provided.
- Each pattern should include:
  - `pattern`
  - `usage`
  - exactly 5 example sentences when available
  - `practiceTip`
- Each Speaking Question should include:
  - `question`
  - `answer`
- Keep Reference Answers as plain text in the data. The hide/show behavior is handled by the renderer.
- If no comic image paths are provided, use:

```js
images: []
```

- If comic image paths are provided, use up to 2 images:

```js
images: [
  {
    src: "assets/images/day8-comic-1.png",
    alt: "Short English description of the image",
    caption: "Short caption"
  }
]
```

- Always add 1 to 2 English AI comic prompt ideas as comments at the end of the Day object.
- Comic prompts should be:
  - warm
  - positive
  - light and study-focused
  - related to the Day theme
  - suitable for English learning or study abroad life
- Avoid changing CSS or HTML when adding ordinary daily content.

## Publishing Cadence

- From Day 12 onward, ordinary daily additions should be committed locally but not pushed to GitHub immediately.
- Push to GitHub only on Day 20, Day 30, and other future 10-day milestones, unless the user explicitly asks for an earlier push.

## Current Days Added

- Day 1: 表达观点 + 表达原因 + 表达适应过程
- Day 2: 表达喜欢 / 不喜欢 + 表达习惯 + 延长对话
- Day 3: 表达计划 + 表达变化 + 表达压力
- Day 4: 表达选择、偏好和原因
- Day 5: 表达同意、不同意和补充观点
- Day 6: 表达请求、确认和听不懂时的追问
- Day 7: 表达过去经历 + 现在变化 + 未来打算
- Day 8: 表达建议、需求和寻求帮助
- Day 9: 表达日常安排、时间管理和忙碌状态
- Day 10: 表达经历、经验和感受
- Day 11: 表达担心、压力和应对方式
- Day 12: 表达社交、认识新朋友和维持对话
- Day 13: 学校办事、问路、预约、查询信息
- Day 14: 宿舍、租房与设备报修
- Day 15: 点餐、调整餐品、结账和打包
- Day 16: 寻找商品、询问尺寸、确认折扣、付款和退换货
- Day 17: 乘坐公交、火车或地铁，确认路线、换乘和下车地点
- Day 18: 身体不舒服、预约看医生、去药店买药、询问用药方式
- Day 19: 机场值机、转机、入境、海关、行李丢失

## Implementation Notes

- Search highlighting is generated by `formatText()`.
- Day accent colors are controlled by `getLessonAccent(day)`.
- Example number badges are rendered by CSS using `.example-number`.
- Speaking question and answer emojis are inserted in `renderQuestionCard()`.
- The one-Day-at-a-time page behavior is handled by `state.activeDay`, `selectDay()`, and `renderLessons()`.
- The top toolbar bookmark button is `#topbarBookmark`.
- Completion state is stored under `englishSpeaking.completed`.
- Day completion is handled by `toggleCompleted()`.
- Bottom day navigation is handled by `stepDay()`.
