# English Speaking Daily Training

一个本地可运行的英语口语学习复习页面项目。页面使用纯 HTML、CSS 和 JavaScript 构建，不需要后端、数据库或网络资源。

## 如何打开页面

直接双击 `index.html`，或在 Chrome / Edge 中打开它即可使用。

## 如何添加新的 Day 内容

每天的学习内容都写在 `script.js` 顶部的 `lessons` 数组中。当前项目框架中 `lessons` 保持为空：

```js
const lessons = [];
```

后续添加 Day 1 时，把注释里的示例结构复制到数组中，并填入当天内容。每个 Day 建议包含：

- `day`
- `title`
- `theme`
- `patterns`
- `questions`
- `trainingFocus`
- `quote`
- `images`

不要把每日内容直接写死在 `index.html` 中，页面会根据 `script.js` 中的数据自动生成导航和内容卡片。

## 如何修改主题颜色

主题颜色集中写在 `style.css` 的 CSS 变量中。

深色主题在 `:root` 中：

```css
:root {
  --bg: #10151f;
  --card: #1a2434;
  --primary: #66d9e8;
}
```

浅色主题在 `body.light-theme` 中：

```css
body.light-theme {
  --bg: #f6f4ef;
  --card: #ffffff;
  --primary: #176b87;
}
```

修改这些变量即可调整整体视觉风格。

## 主题切换功能

页面右上角有 `Dark Theme / Light Theme` 按钮。点击后会切换主题，并把选择保存到 `localStorage`。下次打开页面时会自动恢复上一次使用的主题。

## 书签功能

每个 Day section 顶部都有 `Add Bookmark / Cancel Bookmark` 按钮。

- 点击 `Add Bookmark` 后，该 Day 会被加入书签。
- 左侧 Days 导航中会显示 `★` 标记。
- 左侧 Bookmarks 区域会列出所有已收藏的 Day。
- 点击 Bookmarks 中的 Day 可以快速跳转。
- 书签状态会保存到 `localStorage`，刷新后仍然保留。

## 搜索功能

顶部搜索框可以搜索：

- Day 标题
- 今日主题
- sentence pattern
- 使用场合
- 英文例句
- Speaking Questions
- Reference Answer
- 今日训练重点
- 今日英语名言
- 漫画图片说明

输入关键词后按 `Enter` 才会执行搜索，输入过程中不会立刻过滤页面。搜索会过滤显示相关 Day，并高亮匹配内容。若有多个命中，可以使用搜索框旁边的 `Previous` / `Next` 按钮在命中结果之间跳转；如果命中结果分布在不同 Day，页面会自动切换到对应 Day。清空搜索框后会恢复正常显示。如果没有匹配结果，页面会显示友好的空状态提示。

## Reference Answer 隐藏 / 显示

Speaking Questions 中每个问题都有自己独立的 `Show Answer / Hide Answer` 按钮。

- 默认只显示问题，不显示 Reference Answer。
- 点击 `Show Answer` 展开该问题的参考答案。
- 点击 `Hide Answer` 再次隐藏。
- 每个问题的展开状态互不影响。
- 刷新页面后，答案默认恢复隐藏。
- 搜索仍然会匹配隐藏状态下的 Reference Answer。
- 如果搜索关键词命中某个 Reference Answer，该问题卡片会高亮并自动展开答案，方便对照复习。

这个功能适合先自己进行口语回答，再点击查看参考答案进行比较。

## 如何添加漫画图片

图片建议放在：

```text
assets/images/
```

然后在对应 Day 的 `images` 字段中配置。每个 Day 支持 0 到 2 张图片：

```js
images: [
  {
    src: "assets/images/day1-comic-1.png",
    alt: "A student practicing English speaking with an AI coach",
    caption: "Daily speaking practice"
  },
  {
    src: "assets/images/day1-comic-2.png",
    alt: "A student studying abroad on campus",
    caption: "Study abroad life"
  }
]
```

图片显示规则：

- `images` 为空时，不显示漫画区域。
- 有 1 张图片时，页面会居中大图展示。
- 有 2 张图片时，页面会使用双列卡片展示。
- 图片会带圆角、阴影和 caption。
- 图片加载失败不会影响其他文字内容阅读。

推荐命名方式：

```text
day1-comic-1.png
day1-comic-2.png
day2-comic-1.png
```

如果后续需要生成 AI 绘图提示词，可以根据当天学习主题生成温暖、轻松、积极的漫画风格 prompt。

## 后续扩展预留

`script.js` 的 Day 示例结构中已经预留了未来可扩展字段：

- `completed`
- `audioUrl`
- `reviewCount`
- `difficultSentences`
- `progress`
- `comicPrompt`
- `checkInStatus`

未来可以继续增加每日学习完成状态、录音文件链接、复习次数统计、难句收藏、导出 PDF、学习进度条、AI 漫画 prompt 和每日口语打卡状态。
