"use strict";

/*
  Add new lessons here when you are ready.

  const lessons = [
    {
      day: 1,
      title: "Day 1 - 口语启动训练",
      theme: "表达观点 + 表达原因 + 表达适应过程",
      patterns: [
        {
          pattern: "I think...",
          usage: "用于表达个人观点，适合日常聊天、课堂讨论和回答问题。",
          examples: [
            "I think this city is very convenient.",
            "I think speaking English every day is important.",
            "I think online learning can be helpful.",
            "I think I need more real conversation practice.",
            "I think simple English is very powerful."
          ],
          practiceTip: "使用 I think + 自己的观点，每天至少替换 10 句。"
        }
      ],
      questions: [
        {
          question: "Why do you want to study abroad?",
          answer: "I think studying abroad is a great opportunity for me..."
        }
      ],
      trainingFocus: "今天重点练习观点、原因和真实感受表达。",
      quote: {
        text: "The limits of my language mean the limits of my world.",
        author: "Ludwig Wittgenstein"
      },
      images: [
        {
          src: "assets/images/day1-comic-1.png",
          alt: "A student practicing English speaking with an AI coach",
          caption: "Daily speaking practice"
        }
      ],

      // Reserved for future expansion:
      // completed: false,
      // audioUrl: "",
      // reviewCount: 0,
      // difficultSentences: [],
      // progress: 0,
      // comicPrompt: "",
      // checkInStatus: "not-started"
    }
  ];
*/
const lessons = [
  {
    day: 1,
    title: "Day 1 - 口语启动训练（留学生活方向）",
    theme: "表达观点 + 表达原因 + 表达适应过程",
    patterns: [
      {
        pattern: "I think...",
        usage: "用于表达个人想法、轻度讨论、日常聊天、回答老师问题、小组讨论，并避免语气太绝对。这个句型自然、友好，不会太强势。",
        examples: [
          "I think this city is very convenient.",
          "I think speaking English every day is important.",
          "I think online learning can be helpful.",
          "I think Japanese food is healthier than fast food.",
          "I think I need more real conversation practice."
        ],
        practiceTip: "不要只读。重点练习 I think + 你自己的内容，每天至少替换 10 句。"
      },
      {
        pattern: "The main reason is that...",
        usage: "用于解释原因，特别适合回答 why questions、课堂表达、学术讨论、留学面试和日常解释。",
        examples: [
          "The main reason is that public transport is very convenient here.",
          "The main reason is that I want international experience.",
          "The main reason is that I enjoy solving technical problems.",
          "The main reason is that I need more speaking practice.",
          "The main reason is that the environment is quieter."
        ],
        practiceTip: "重点练习“一个观点 + 一个原因”。例如：I prefer studying at night. The main reason is that it's much quieter."
      },
      {
        pattern: "It depends on...",
        usage: "用于回答复杂问题、表达灵活观点、避免绝对化回答，也可以帮助你自然延长表达时间。",
        examples: [
          "It depends on the situation.",
          "It depends on how busy I am.",
          "It depends on the weather.",
          "It depends on the price.",
          "It depends on who I'm talking to."
        ],
        practiceTip: "别人问问题时，不要总是直接 Yes / No。试着先用 It depends on...，再补充具体情况。"
      },
      {
        pattern: "I'm still getting used to...",
        usage: "用于表达你正在适应新环境、新文化、新语言或新的学习方式。它比 I'm not used to... 更自然、更柔和。",
        examples: [
          "I'm still getting used to speaking English every day.",
          "I'm still getting used to the weather here.",
          "I'm still getting used to cooking by myself.",
          "I'm still getting used to the new schedule.",
          "I'm still getting used to talking with native speakers."
        ],
        practiceTip: "每天观察自己最近正在适应什么，然后套用这个句型，让表达更贴近真实生活。"
      },
      {
        pattern: "To be honest,...",
        usage: "用于表达真实感受、缓和语气、增加自然感，并引出个人想法。它是很常见的情绪缓冲句。",
        examples: [
          "To be honest, I was pretty nervous.",
          "To be honest, I don't really enjoy crowded places.",
          "To be honest, I need more confidence when speaking English.",
          "To be honest, I was surprised by the price.",
          "To be honest, I miss home sometimes."
        ],
        practiceTip: "当你想表达紧张、不喜欢、担心、疲惫或害怕时，可以先用 To be honest,... 让口语更自然。"
      }
    ],
    questions: [
      {
        question: "Why do you want to study abroad?",
        answer: "I think studying abroad is a great opportunity for me. The main reason is that I want to improve both my academic ability and my English communication skills. To be honest, I also want to experience a different culture and lifestyle. I think living in another country can help me become more independent."
      },
      {
        question: "What worries you most before going abroad?",
        answer: "To be honest, I'm a little worried about speaking English in real conversations. I can understand most listening materials, but speaking is still difficult for me. I'm still getting used to expressing my ideas quickly in English. However, I think things will improve after I spend more time in an English-speaking environment."
      },
      {
        question: "Do you prefer living in a big city or a small city?",
        answer: "It depends on the situation. I think big cities are more convenient because public transport and shopping are usually better. However, small cities are often quieter and less stressful. To be honest, I probably prefer big cities at this stage of my life."
      },
      {
        question: "How often do you practice English speaking?",
        answer: "I try to practice English speaking every day. The main reason is that I want to become more confident before studying abroad. To be honest, sometimes it's difficult to stay consistent, especially when I'm busy. However, I think daily practice is still very important."
      },
      {
        question: "What is difficult about speaking English?",
        answer: "I think the hardest part is organizing my ideas quickly. The main reason is that I still translate from Chinese into English sometimes. To be honest, I know many words, but I cannot always use them naturally in conversation. I'm still getting used to thinking directly in English."
      }
    ],
    trainingFocus: "今天重点建立固定口语骨架：先大声朗读句型和参考回答 3 遍，再用 I think... 等句型做替换练习，最后脱稿回答并录音 1 分钟，检查停顿、重复和中途放弃的问题。",
    quote: {
      text: "The limits of my language mean the limits of my world.",
      author: "Ludwig Wittgenstein"
    },
    images: []

    // AI comic prompt ideas:
    // 1. A warm flat illustration of an international student practicing English speaking at a desk with a laptop AI coach, sticky notes showing "I think..." and "To be honest...", cozy evening study room, optimistic mood, clean composition.
    // 2. A gentle campus-style comic scene of a student preparing to study abroad, speaking English confidently while walking through a modern university campus, speech bubbles with simple sentence patterns, bright and encouraging atmosphere.
  },
  {
    day: 2,
    title: "Day 2 - 口语启动训练（留学生活方向）",
    theme: "表达喜欢 / 不喜欢 + 表达习惯 + 延长对话",
    patterns: [
      {
        pattern: "I'm really into...",
        usage: "用于表达“我很喜欢 / 我很感兴趣”，比 I like... 更口语、更自然。常用于兴趣爱好、音乐电影、学习领域、科技、运动和游戏。",
        examples: [
          "I'm really into technology these days.",
          "I'm really into learning about AI and robotics.",
          "I'm really into Japanese food lately.",
          "I'm really into watching engineering videos on YouTube.",
          "I'm really into improving my English speaking skills."
        ],
        practiceTip: "以后不要总说 I like...，试着升级成 I'm really into...，例如：I'm really into coffee lately."
      },
      {
        pattern: "I spend a lot of time...",
        usage: "用于表达时间主要花在哪里，适合聊学习、工作、娱乐、兴趣和日常生活。",
        examples: [
          "I spend a lot of time studying English.",
          "I spend a lot of time working on programming projects.",
          "I spend a lot of time watching videos online.",
          "I spend a lot of time thinking about my future plans.",
          "I spend a lot of time using my computer."
        ],
        practiceTip: "这个句型特别容易展开。可以接原因，例如：I spend a lot of time reading research papers recently because I want to prepare for my future studies."
      },
      {
        pattern: "One thing I've noticed is that...",
        usage: "用于分享观察、表达变化、表达经验和轻度分析，特别适合留学生活方向的真实表达。",
        examples: [
          "One thing I've noticed is that speaking becomes easier with daily practice.",
          "One thing I've noticed is that people speak very fast in real conversations.",
          "One thing I've noticed is that public transport in Japan is extremely efficient.",
          "One thing I've noticed is that I feel more confident when I prepare sentence patterns in advance.",
          "One thing I've noticed is that studying abroad requires a lot of self-discipline."
        ],
        practiceTip: "每天观察一件小事，然后用 One thing I've noticed is that... 说出来，让表达更像真实聊天。"
      },
      {
        pattern: "I'm trying to...",
        usage: "用于表达正在努力改变习惯、学习新东西或提升自己。它比 I want to... 更真实、更生活化。",
        examples: [
          "I'm trying to improve my pronunciation.",
          "I'm trying to speak English more naturally.",
          "I'm trying to build better study habits.",
          "I'm trying to spend less time on my phone.",
          "I'm trying to become more confident in conversations."
        ],
        practiceTip: "以后表达目标时，优先使用 I'm trying to...，因为它强调你正在努力中。"
      },
      {
        pattern: "I'm not very good at...",
        usage: "用于自然承认自己不擅长什么。母语者也经常这样表达，这不会显得弱，反而很真实。",
        examples: [
          "I'm not very good at small talk.",
          "I'm not very good at remembering names.",
          "I'm not very good at speaking under pressure.",
          "I'm not very good at cooking.",
          "I'm not very good at understanding strong accents."
        ],
        practiceTip: "不要害怕承认不足。例如：I'm not very good at expressing complicated ideas quickly."
      }
    ],
    questions: [
      {
        question: "What are you really into these days?",
        answer: "I'm really into improving my English speaking skills these days. I spend a lot of time practicing sentence patterns and listening to natural conversations. One thing I've noticed is that speaking becomes easier when I stop trying to translate everything from Chinese. I'm trying to think more directly in English. To be honest, it's still difficult sometimes, but I think I'm improving slowly."
      },
      {
        question: "What do you spend most of your time doing?",
        answer: "I spend a lot of time studying and working on programming-related projects. Recently, I've also been reading about AGV systems and path planning because I'm interested in that research area. One thing I've noticed is that research requires a lot of patience and self-discipline. I'm trying to build a more consistent daily routine before studying abroad."
      },
      {
        question: "What is something you are trying to improve?",
        answer: "I'm trying to improve my English speaking confidence. I can understand most reading and listening materials, but speaking is still challenging for me. One thing I've noticed is that I become much more fluent when I use simple sentence patterns. I'm also trying to speak more regularly instead of only studying grammar and vocabulary."
      },
      {
        question: "What are you not very good at?",
        answer: "To be honest, I'm not very good at speaking English spontaneously. I usually need some time to organize my ideas before speaking. One thing I've noticed is that I speak much better when I feel relaxed. I'm trying to practice more natural conversation instead of focusing too much on perfect grammar."
      },
      {
        question: "What do you think will be difficult about studying abroad?",
        answer: "I think adapting to a completely new environment will be difficult at first. I'm not very good at starting conversations with strangers, especially in English. However, I'm trying to become more comfortable with real communication. One thing I've noticed is that confidence becomes more important than perfect grammar in real-life situations."
      }
    ],
    trainingFocus: "今天重点练习“句子之间的连接”，不要只回答一句话。用 I'm really into..., I spend a lot of time..., One thing I've noticed is that..., I'm trying to... 等句型自然展开，让回答更像真实聊天。",
    quote: {
      text: "Success is the sum of small efforts, repeated day in and day out.",
      author: "Robert Collier"
    },
    images: []

    // AI comic prompt ideas:
    // 1. A cheerful flat comic illustration of an international student extending an English conversation with a classmate on campus, speech bubbles showing "I'm really into..." and "One thing I've noticed is that...", warm colors, relaxed study abroad mood.
    // 2. A cozy learning dashboard-style cartoon scene of a student practicing English speaking habits, with notebooks, headphones, a laptop, and sentence pattern cards, positive atmosphere, clean composition, modern study room.
  },
  {
    day: 3,
    title: "Day 3 - 口语启动训练（留学生活方向）",
    theme: "表达计划 + 表达变化 + 表达压力",
    patterns: [
      {
        pattern: "Recently, I've been...",
        usage: "用于表达“最近我一直在……”，适合聊近况、社交聊天、和同学或导师交流，以及开场闲聊。",
        examples: [
          "Recently, I've been practicing my English speaking every day.",
          "Recently, I've been thinking a lot about studying abroad.",
          "Recently, I've been working on programming projects.",
          "Recently, I've been trying to improve my daily routine.",
          "Recently, I've been watching a lot of English videos online."
        ],
        practiceTip: "这个句型的重点不是语法，而是表达持续状态。别人问 What have you been up to lately? 时，可以直接用 Recently, I've been... 启动回答。"
      },
      {
        pattern: "I feel like...",
        usage: "用于表达感觉、情绪、主观看法和轻度不确定。它比 I think... 更口语、更自然、更柔和。",
        examples: [
          "I feel like my speaking is improving slowly.",
          "I feel like I need more real conversations.",
          "I feel like this city is very fast-paced.",
          "I feel like I learn better at night.",
          "I feel like I'm becoming more confident recently."
        ],
        practiceTip: "不要总说 I think...，可以换成 I feel like...，让表达更像真实聊天。"
      },
      {
        pattern: "One of the biggest challenges is...",
        usage: "用于展开复杂表达，特别适合学习、留学、工作、学术讨论和面试中表达困难、挑战或问题。",
        examples: [
          "One of the biggest challenges is speaking confidently in real conversations.",
          "One of the biggest challenges is managing my time effectively.",
          "One of the biggest challenges is adapting to a new environment.",
          "One of the biggest challenges is staying consistent every day.",
          "One of the biggest challenges is understanding different accents."
        ],
        practiceTip: "不要只说 It's difficult. 试着升级成 One of the biggest challenges is...，表达会更成熟。"
      },
      {
        pattern: "I've realized that...",
        usage: "用于分享成长、经验、变化和感悟，很适合连接过去和现在，也很适合你当前准备留学的阶段。",
        examples: [
          "I've realized that confidence is very important in speaking.",
          "I've realized that consistency matters more than motivation.",
          "I've realized that simple English is often more effective.",
          "I've realized that real conversations are very different from exams.",
          "I've realized that studying abroad requires independence."
        ],
        practiceTip: "用这个句型连接“过去”和“现在”。例如：I used to focus too much on vocabulary, but I've realized that speaking practice is more important for me right now."
      },
      {
        pattern: "I need to work on...",
        usage: "用于表达“我需要加强 / 改进……”，比 I need to improve... 更口语、更自然。",
        examples: [
          "I need to work on my pronunciation.",
          "I need to work on speaking more naturally.",
          "I need to work on managing stress.",
          "I need to work on starting conversations.",
          "I need to work on thinking directly in English."
        ],
        practiceTip: "不要总说 improve。试着换成 work on，例如：I need to work on my confidence."
      }
    ],
    questions: [
      {
        question: "What have you been doing recently?",
        answer: "Recently, I've been spending a lot of time practicing English speaking and preparing for studying abroad. I've also been reading about AGV systems and intelligent manufacturing because I'm interested in that research area. I feel like I'm becoming more focused recently. However, one of the biggest challenges is staying consistent every single day."
      },
      {
        question: "What is one challenge you are facing right now?",
        answer: "One of the biggest challenges is speaking English fluently in real conversations. I can understand most listening materials, but I still struggle to respond quickly. I've realized that speaking requires much more automatic thinking than reading or listening. I need to work on reacting more naturally in conversations."
      },
      {
        question: "What have you realized about learning English?",
        answer: "I've realized that consistency is more important than studying for long hours occasionally. I used to focus too much on vocabulary and grammar, but now I feel like speaking practice is more important for me. I've also realized that simple English can still sound natural and effective."
      },
      {
        question: "What do you need to work on most before going abroad?",
        answer: "I need to work on my speaking confidence the most. I feel like I become nervous when I try to speak too perfectly. One of the biggest challenges is organizing my ideas quickly enough in English. However, I've realized that communication is more important than perfect grammar."
      },
      {
        question: "How do you feel about your future study abroad life?",
        answer: "To be honest, I feel excited but also a little nervous. Recently, I've been thinking a lot about adapting to a completely new environment. One of the biggest challenges will probably be communicating confidently in English every day. However, I feel like this experience will help me grow a lot as a person."
      }
    ],
    trainingFocus: "今天重点练习“连续表达情绪 + 原因 + 感悟”。不要只说 Speaking is difficult，要用 One of the biggest challenges is..., I've realized that..., I need to work on... 继续展开。真正的口语能力是保持交流，而不是句句完美。",
    quote: {
      text: "A journey of a thousand miles begins with a single step.",
      author: "Laozi"
    },
    images: []

    // AI comic prompt ideas:
    // 1. A warm campus comic illustration of an international student walking forward with a backpack, thinking about study abroad plans and challenges, speech bubbles showing "Recently, I've been..." and "I need to work on...", hopeful mood, soft morning light.
    // 2. A cozy flat illustration of a student recording a one-minute English speaking practice at a desk, with sentence cards for "I feel like..." and "I've realized that...", calm focused atmosphere, modern study room, encouraging tone.
  },
  {
    day: 4,
    title: "Day 4 - 口语启动训练（留学生活方向）",
    theme: "表达选择、偏好和原因",
    patterns: [
      {
        pattern: "I prefer... because...",
        usage: "用于表达偏好，适合生活选择、学习方式、饮食偏好、居住选择、交通方式和学术方向。",
        examples: [
          "I prefer studying in a quiet place because I can focus better.",
          "I prefer cooking at home because it saves money.",
          "I prefer taking the train because it is more convenient.",
          "I prefer small group discussions because I feel less nervous.",
          "I prefer simple explanations because they are easier to remember."
        ],
        practiceTip: "不要只说 I like A。训练成 I prefer A because...，这样每次回答都会自然变长。"
      },
      {
        pattern: "I'd rather...",
        usage: "用于表达“我宁愿…… / 我更想……”，比 I want to... 更自然、更有选择感。常用于拒绝邀请、表达偏好、选择活动、安排时间和做决定。",
        examples: [
          "I'd rather stay at home tonight.",
          "I'd rather take the bus than walk in the rain.",
          "I'd rather practice speaking for ten minutes every day.",
          "I'd rather ask a simple question than stay silent.",
          "I'd rather prepare early than feel stressed later."
        ],
        practiceTip: "这个句型适合表达两个选择之间的偏好。结构是 I'd rather A than B，例如：I'd rather speak slowly than say nothing."
      },
      {
        pattern: "What I like about... is that...",
        usage: "用于具体说明你喜欢某事物的哪个方面。适合介绍城市、学校、专业、课程、生活方式、朋友或老师。",
        examples: [
          "What I like about this city is that it feels very safe.",
          "What I like about my major is that it combines theory and practice.",
          "What I like about English is that it helps me communicate with more people.",
          "What I like about group work is that I can hear different opinions.",
          "What I like about studying abroad is that it pushes me out of my comfort zone."
        ],
        practiceTip: "不要只说 I like this university。可以说：What I like about this university is that it has a strong research environment."
      },
      {
        pattern: "I'm more interested in...",
        usage: "用于表达“我对……更感兴趣”。它比 I like... 更适合学术、职业和研究方向交流，特别适合以后和导师、同学交流。",
        examples: [
          "I'm more interested in practical research.",
          "I'm more interested in intelligent manufacturing.",
          "I'm more interested in AGV path planning and scheduling.",
          "I'm more interested in solving real engineering problems.",
          "I'm more interested in learning through projects."
        ],
        practiceTip: "介绍专业兴趣时可以使用这个句型。例如：I'm more interested in simulation-based research because it helps me test ideas before real implementation."
      },
      {
        pattern: "For me, ... is more important than...",
        usage: "用于表达价值判断或优先级。适用于学习、工作、生活、选择学校、选择城市和选择研究方向。",
        examples: [
          "For me, consistency is more important than motivation.",
          "For me, communication is more important than perfect grammar.",
          "For me, a quiet environment is more important than a big room.",
          "For me, practical experience is more important than only reading books.",
          "For me, understanding the idea is more important than memorizing every word."
        ],
        practiceTip: "这个句型适合表达成熟观点。例如：For me, speaking clearly is more important than using difficult words."
      }
    ],
    questions: [
      {
        question: "Do you prefer studying alone or studying with others?",
        answer: "I prefer studying alone most of the time because I can focus better. However, I also think group discussions are useful when I need different opinions. What I like about studying alone is that I can control my own pace. For me, concentration is more important than speed. So I usually study alone first and then discuss with others later."
      },
      {
        question: "Would you rather live on campus or off campus?",
        answer: "I'd rather live on campus at the beginning because it would be more convenient. I think it can help me get used to university life more quickly. What I like about living on campus is that I can meet classmates more easily. However, after I become familiar with the city, I may consider living off campus. For me, convenience is more important than having a large room at the beginning."
      },
      {
        question: "What kind of research are you more interested in?",
        answer: "I'm more interested in practical research related to intelligent manufacturing. For example, I'm interested in AGV path planning, scheduling, and simulation systems. What I like about this area is that it connects algorithms with real industrial problems. For me, solving real engineering problems is more important than only studying abstract theory. I hope my future research can have practical value."
      },
      {
        question: "Do you prefer simple English or advanced English when speaking?",
        answer: "I prefer simple English when speaking because it helps me communicate more clearly. To be honest, advanced words are useful, but they can slow me down in real conversations. For me, communication is more important than perfect grammar or difficult vocabulary. I'd rather speak simply and clearly than stay silent because I'm afraid of making mistakes. I think this is especially important before studying abroad."
      },
      {
        question: "What is more important for studying abroad: independence or English ability?",
        answer: "I think both are important, but for me, independence may be slightly more important. The main reason is that studying abroad is not only about language, but also about daily life, time management, and problem-solving. Of course, English ability is still necessary because I need to communicate with teachers and classmates. I'd rather improve both step by step than worry too much about being perfect. What I like about studying abroad is that it can train both my independence and communication skills."
      }
    ],
    trainingFocus: "今天重点练三个动作：做选择、解释原因、表达优先级。用 I prefer..., I'd rather..., I'm more interested in... 做选择；用 because... 和 The main reason is that... 解释原因；用 For me, ... is more important than... 表达优先级。每次回答问题至少补一个 because。",
    quote: {
      text: "Do what you can, with what you have, where you are.",
      author: "Theodore Roosevelt"
    },
    images: []

    // AI comic prompt ideas:
    // 1. A friendly campus comic illustration of an international student choosing between studying alone in a quiet library and joining a small group discussion, speech bubbles with "I prefer..." and "For me...", warm colors, calm study abroad atmosphere.
    // 2. A clean flat illustration of a student comparing study abroad choices on a desk, with cards labeled campus life, research, English speaking, and independence, optimistic mood, soft light, modern learning dashboard style.
  },
  {
    day: 5,
    title: "Day 5 - 口语启动训练（留学生活方向）",
    theme: "表达同意、不同意和补充观点",
    patterns: [
      {
        pattern: "I agree with you, especially when you say that...",
        usage: "用于小组讨论、课堂交流、和同学讨论观点、表示认可别人，并接着别人的话继续说。它比简单说 I agree. 更自然，也更容易展开。",
        examples: [
          "I agree with you, especially when you say that speaking practice is important.",
          "I agree with you, especially when you say that studying abroad requires independence.",
          "I agree with you, especially when you say that communication is more important than perfect grammar.",
          "I agree with you, especially when you say that group work can help us learn from others.",
          "I agree with you, especially when you say that time management is very important for students."
        ],
        practiceTip: "听别人说完后，不要只说 I agree。可以重复对方观点中你最认可的部分：I agree with you, especially when you say that..."
      },
      {
        pattern: "I see your point, but...",
        usage: "用于礼貌表达不同意见，比直接说 I disagree. 更自然、更柔和。适合小组讨论、课堂辩论、学术交流和日常意见不同的时候。",
        examples: [
          "I see your point, but I think the situation is more complicated.",
          "I see your point, but I still prefer studying alone.",
          "I see your point, but not everyone learns in the same way.",
          "I see your point, but I think speaking practice is still necessary.",
          "I see your point, but we also need to consider the cost."
        ],
        practiceTip: "当你不同意别人时，先承认对方有道理：I see your point, but... 这样不会显得生硬。"
      },
      {
        pattern: "I'd like to add that...",
        usage: "用于补充观点，非常适合课堂、小组讨论和会议。它比 I want to say... 更自然，也稍微正式一点。",
        examples: [
          "I'd like to add that confidence is also very important.",
          "I'd like to add that practical experience can help us understand theory better.",
          "I'd like to add that international students may need more support at the beginning.",
          "I'd like to add that simple English can still be very effective.",
          "I'd like to add that daily practice is more useful than occasional intensive study."
        ],
        practiceTip: "当别人已经说了一个观点，而你想补充时，用 I'd like to add that... 自然加入讨论。"
      },
      {
        pattern: "That makes sense, because...",
        usage: "用于表示“有道理”，并解释为什么。常见于听别人解释后的回应、课堂讨论、学术交流和日常聊天。",
        examples: [
          "That makes sense, because real conversations are much faster than classroom listening.",
          "That makes sense, because many students feel nervous when they speak a second language.",
          "That makes sense, because living abroad requires both language skills and independence.",
          "That makes sense, because different people have different learning styles.",
          "That makes sense, because preparing early can reduce stress later."
        ],
        practiceTip: "不要只说 That makes sense。后面加 because...，你的回应会更完整。"
      },
      {
        pattern: "I'm not sure I fully agree with that.",
        usage: "用于温和表达不完全同意，比 You are wrong. 自然太多。适合小组讨论、学术观点不同、和同学讨论问题以及表达保留意见。",
        examples: [
          "I'm not sure I fully agree with that.",
          "I'm not sure I fully agree with that, because the problem may depend on the situation.",
          "I'm not sure I fully agree with that, but I understand your point.",
          "I'm not sure I fully agree with that, especially when we talk about international students.",
          "I'm not sure I fully agree with that, because practical experience is also important."
        ],
        practiceTip: "当你想表达不同意见，但又不想显得冲突太强时，可以说：I'm not sure I fully agree with that, because..."
      }
    ],
    questions: [
      {
        question: "Some people say grammar is more important than speaking fluency. Do you agree?",
        answer: "I see your point, but I don't fully agree with that. I think grammar is important, but speaking fluency is also necessary in real communication. That makes sense, because if I focus too much on grammar, I may become too nervous to speak. I'd like to add that communication is more important than perfect sentences, especially for international students."
      },
      {
        question: "Some students prefer studying alone. What do you think?",
        answer: "I agree with them, especially when they say that studying alone helps them focus better. I also prefer studying alone when I need to read or write carefully. However, I'd like to add that group discussions can also be useful. That makes sense, because different people can share different ideas and help each other understand the topic better."
      },
      {
        question: "Some people think studying abroad is mainly about improving English. Do you agree?",
        answer: "I'm not sure I fully agree with that. Of course, improving English is very important, but studying abroad is also about becoming more independent. I'd like to add that students need to manage their time, solve daily problems, and communicate with people from different cultures. That makes sense, because language is only one part of the whole experience."
      },
      {
        question: "Your classmate says, \"Simple English is enough. We don't need advanced vocabulary.\" How would you respond?",
        answer: "I agree with you, especially when you say that simple English can be enough for daily communication. Simple and clear English is very useful. However, I'd like to add that advanced vocabulary can still be helpful in academic reading and writing. So I think the key is to use simple English when speaking, but continue building vocabulary for academic purposes."
      },
      {
        question: "Some people believe confidence is more important than pronunciation. What do you think?",
        answer: "That makes sense, because confidence helps people keep speaking even when they make mistakes. I agree with this idea, especially in real conversations. However, I'd like to add that pronunciation is still important because it affects understanding. For me, confidence is the first step, but clear pronunciation should also be improved gradually."
      }
    ],
    trainingFocus: "今天重点练习回应别人，而不是只表达自己。可以先认可：I agree with you, especially when...；再补充：I'd like to add that...；或者礼貌不同意：I see your point, but...；最后解释原因：That makes sense, because...",
    quote: {
      text: "It always seems impossible until it's done.",
      author: "Nelson Mandela"
    },
    images: []

    // AI comic prompt ideas:
    // 1. A warm classroom comic illustration of international students in a small group discussion, one student politely responding with speech bubbles saying "I see your point, but..." and "I'd like to add that...", friendly academic atmosphere, soft colors.
    // 2. A modern campus study-room cartoon scene where students exchange opinions around a table, sticky notes with "I agree with you..." and "That makes sense, because...", encouraging collaborative mood, clean flat illustration style.
  },
  {
    day: 6,
    title: "Day 6 - 口语启动训练（留学生活方向）",
    theme: "表达请求、确认和听不懂时的追问",
    patterns: [
      {
        pattern: "Could you say that again?",
        usage: "用于请求对方重复，适合没听清老师说什么、同学说太快、办手续时没听懂、电话沟通和日常对话。",
        examples: [
          "Sorry, could you say that again?",
          "Could you say that again, please?",
          "I didn't catch that. Could you say that again?",
          "Sorry, I missed the last part. Could you say that again?",
          "Could you say that again a bit more slowly?"
        ],
        practiceTip: "不要害怕让别人重复。把 Sorry, could you say that again? 练到不用想，这比假装听懂重要得多。"
      },
      {
        pattern: "What do you mean by...?",
        usage: "用于询问某个词、概念或说法是什么意思。特别适合课堂讨论、学术交流、听到新词、听不懂对方表达和小组任务说明。",
        examples: [
          "What do you mean by \"deadline\"?",
          "What do you mean by \"assignment\"?",
          "What do you mean by \"group project\"?",
          "What do you mean by \"office hours\"?",
          "What do you mean by \"submit it online\"?"
        ],
        practiceTip: "这个句型非常适合课堂。例如：Sorry, what do you mean by \"office hours\"? 这不是丢脸，而是正常学术沟通。"
      },
      {
        pattern: "Do you mean that...?",
        usage: "用于确认自己是否理解正确。适用于老师布置任务、同学分工、行政手续、租房沟通、银行、医院和学校办公室场景。",
        examples: [
          "Do you mean that I need to submit it by Friday?",
          "Do you mean that the meeting is online?",
          "Do you mean that I should bring my passport?",
          "Do you mean that we need to work in groups?",
          "Do you mean that I can pay by card?"
        ],
        practiceTip: "以后不要只说 OK。如果你不确定，一定要用 Do you mean that...? 确认，避免误会。"
      },
      {
        pattern: "Could you explain that a bit more?",
        usage: "用于礼貌请求进一步解释，比 I don't understand. 更自然。适用于老师讲解内容、同学解释任务、导师讲研究方向、工作人员说明流程和学术讨论。",
        examples: [
          "Could you explain that a bit more?",
          "Could you explain the task a bit more?",
          "Could you explain the process a bit more?",
          "Could you explain the difference a bit more?",
          "Could you explain what I need to do next?"
        ],
        practiceTip: "当你不是完全不懂，而是“懂一点但不够清楚”时，用这个句型。它比直接沉默好很多。"
      },
      {
        pattern: "Just to make sure, ...",
        usage: "用于自然确认信息，意思是“为了确认一下……”。常用于确认时间、地点、任务、材料和步骤。",
        examples: [
          "Just to make sure, the class starts at 9, right?",
          "Just to make sure, we need to submit the report tomorrow, right?",
          "Just to make sure, the meeting is in Room 205, right?",
          "Just to make sure, I need to bring my passport, right?",
          "Just to make sure, I should email the file to you, right?"
        ],
        practiceTip: "这个句型会让你显得礼貌、认真、负责、沟通清楚。确认不是麻烦别人，而是避免错误。"
      }
    ],
    questions: [
      {
        question: "Your professor gives an instruction, but you don't catch the last part. What would you say?",
        answer: "Sorry, I didn't catch the last part. Could you say that again, please? I just want to make sure I understand the instruction correctly. Do you mean that we need to submit the assignment by Friday?"
      },
      {
        question: "Your classmate says, \"We should meet during office hours.\" You don't understand \"office hours.\" What would you say?",
        answer: "Sorry, what do you mean by \"office hours\"? I've heard this expression before, but I'm not completely sure how it works. Could you explain that a bit more?"
      },
      {
        question: "The university staff asks you to bring some documents tomorrow. How do you confirm?",
        answer: "Just to make sure, I need to bring my passport, student ID, and admission letter tomorrow, right? Do you mean that I should bring the original documents, not just copies?"
      },
      {
        question: "Your group member explains the task too quickly. What would you say?",
        answer: "Sorry, could you say that again a bit more slowly? I understand the general idea, but I missed some details. Could you explain what I need to do next?"
      },
      {
        question: "Your teacher says the assignment should be submitted online. You want to confirm the platform and deadline. What would you say?",
        answer: "Just to make sure, we need to submit the assignment online, right? Do you mean that we should upload it to the university system? And could you confirm the deadline again?"
      }
    ],
    trainingFocus: "今天重点练三种能力：没听清时请求重复，用 Sorry, could you say that again?；不理解时请求解释，用 What do you mean by...? 和 Could you explain that a bit more?；不确定时确认，用 Do you mean that...? 和 Just to make sure,... 不确定就确认，不要假装听懂。",
    quote: {
      text: "Ask, and it shall be given you; seek, and ye shall find.",
      author: "The Bible"
    },
    images: []

    // AI comic prompt ideas:
    // 1. A supportive campus office comic illustration of an international student politely asking a university staff member to repeat instructions, speech bubbles saying "Could you say that again?" and "Just to make sure...", warm colors, calm reassuring mood.
    // 2. A friendly classroom flat illustration of a student raising a hand to ask a professor for clarification, sentence cards showing "What do you mean by...?" and "Could you explain that a bit more?", bright academic atmosphere.
  },
  {
    day: 7,
    title: "Day 7 - 口语启动训练（留学生活方向）",
    theme: "表达过去经历 + 现在变化 + 未来打算",
    patterns: [
      {
        pattern: "I used to..., but now...",
        usage: "用于表达过去和现在的对比，非常适合描述自己的变化。常见于介绍英语学习经历、学习方法变化、生活习惯变化、个人成长、面试或课堂交流。",
        examples: [
          "I used to focus too much on grammar, but now I pay more attention to speaking.",
          "I used to feel nervous when speaking English, but now I'm trying to be more confident.",
          "I used to study alone most of the time, but now I also join discussions.",
          "I used to translate everything from Chinese, but now I'm trying to think in English.",
          "I used to avoid difficult conversations, but now I try to keep speaking."
        ],
        practiceTip: "每天可以说一句 I used to..., but now...。例如：I used to be afraid of making mistakes, but now I try to focus on communication."
      },
      {
        pattern: "So far, I've...",
        usage: "用于表达“到目前为止，我已经……”。常用于汇报进展、描述学习成果、和老师沟通、和同学聊天以及总结近期状态。",
        examples: [
          "So far, I've learned several useful sentence patterns.",
          "So far, I've practiced speaking for seven days.",
          "So far, I've realized that consistency is very important.",
          "So far, I've improved my confidence a little.",
          "So far, I've found that simple English is very useful in real conversations."
        ],
        practiceTip: "这个句型适合每周复盘。例如：So far, I've practiced English speaking for one week. 然后继续补充自己的感受。"
      },
      {
        pattern: "I'm planning to...",
        usage: "用于表达未来计划，比 I will... 更自然，因为很多时候计划还没有完全确定。常用于学习计划、出国准备、旅行安排、课程选择和生活规划。",
        examples: [
          "I'm planning to practice speaking every day.",
          "I'm planning to prepare for my study abroad life step by step.",
          "I'm planning to arrive a little earlier to get used to the environment.",
          "I'm planning to talk with more international students.",
          "I'm planning to improve my academic English before the semester starts."
        ],
        practiceTip: "以后表达未来计划时，不要只用 I want to...，可以多用 I'm planning to...。例如：I'm planning to build a daily speaking routine before I go abroad."
      },
      {
        pattern: "My goal is to...",
        usage: "用于表达“我的目标是……”。适用于自我介绍、学习计划、留学规划、和导师交流、面试和个人成长表达。",
        examples: [
          "My goal is to become more confident when speaking English.",
          "My goal is to communicate clearly in daily life.",
          "My goal is to understand lectures and join discussions.",
          "My goal is to improve my research ability during my study abroad.",
          "My goal is to build a strong academic foundation for my future PhD research."
        ],
        practiceTip: "这个句型可以帮你稳定表达方向。例如：My goal is to speak simple English clearly and naturally."
      },
      {
        pattern: "I hope I can...",
        usage: "用于表达希望自己能够做某事，语气自然、真诚，特别适合日常聊天、说未来愿望、表达期待、说个人目标和留学前自我介绍。",
        examples: [
          "I hope I can make some good friends abroad.",
          "I hope I can speak English more naturally.",
          "I hope I can adapt to the new environment quickly.",
          "I hope I can become more independent.",
          "I hope I can enjoy my study abroad experience."
        ],
        practiceTip: "这个句型可以让表达更有人情味。例如：I hope I can meet people from different cultures and learn from them."
      }
    ],
    questions: [
      {
        question: "How has your English learning changed recently?",
        answer: "I used to focus too much on vocabulary and grammar, but now I pay more attention to speaking practice. So far, I've practiced several useful sentence patterns. I've realized that simple English can still be very effective in real conversations. My goal is to speak more clearly and confidently before studying abroad. I hope I can keep practicing every day."
      },
      {
        question: "What have you achieved in your speaking practice so far?",
        answer: "So far, I've practiced English speaking for seven days. I've learned some useful sentence patterns for expressing opinions, asking questions, and confirming information. I used to feel nervous when speaking English, but now I'm trying to speak even when my sentences are not perfect. My goal is to become more comfortable in real conversations. I think this is a good start."
      },
      {
        question: "What are you planning to do before going abroad?",
        answer: "I'm planning to practice English speaking every day before going abroad. I'm also planning to prepare for daily life, such as accommodation, transportation, and university registration. My goal is to reduce stress before I arrive. I hope I can adapt to the new environment quickly. To be honest, I still feel a little nervous, but I think preparation will help a lot."
      },
      {
        question: "What kind of person do you hope to become during your study abroad?",
        answer: "I hope I can become more independent and confident during my study abroad. I used to rely on familiar environments, but now I want to challenge myself more. My goal is to communicate with different people and learn from different cultures. I'm planning to join more discussions and not stay silent all the time. I think studying abroad will help me grow a lot."
      },
      {
        question: "What is your main goal for English speaking in the next three months?",
        answer: "My goal is to speak simple English clearly and naturally. I used to think I needed advanced vocabulary to sound good, but now I've realized that clear communication is more important. So far, I've learned that sentence patterns can help me speak faster. I'm planning to practice short answers every day. I hope I can feel less nervous when talking with classmates and teachers abroad."
      }
    ],
    trainingFocus: "今天重点练习用时间线表达自己：过去用 I used to...；现在用 So far, I've... 和 Now I'm trying to...；未来用 I'm planning to..., My goal is to..., I hope I can...。从明天开始，不只是读参考答案，而是每天至少改写一个问题的答案，把它变成自己的真实经历。",
    quote: {
      text: "The secret of getting ahead is getting started.",
      author: "Mark Twain"
    },
    images: []

    // AI comic prompt ideas:
    // 1. A warm comic illustration of an international student looking at a one-week English speaking progress timeline, with panels labeled "I used to...", "So far, I've...", and "I'm planning to...", hopeful study abroad mood, clean flat style.
    // 2. A cozy desk scene cartoon showing a student rewriting a reference answer into a personal story, sentence cards with "My goal is to..." and "I hope I can...", soft evening light, encouraging first-week milestone atmosphere.
  }
];

const STORAGE_KEYS = {
  theme: "englishSpeaking.theme",
  bookmarks: "englishSpeaking.bookmarks"
};

const state = {
  theme: "dark",
  bookmarks: new Set(),
  searchTerm: "",
  activeDay: null,
  answerSearchHits: new Set(),
  searchMatches: [],
  activeSearchIndex: -1,
  renderMatchCounter: 0
};

const elements = {
  body: document.body,
  dayNav: document.getElementById("dayNav"),
  bookmarkList: document.getElementById("bookmarkList"),
  lessonContainer: document.getElementById("lessonContainer"),
  searchInput: document.getElementById("searchInput"),
  searchPrev: document.getElementById("searchPrev"),
  searchNext: document.getElementById("searchNext"),
  searchCount: document.getElementById("searchCount"),
  topbarBookmark: document.getElementById("topbarBookmark"),
  themeToggle: document.getElementById("themeToggle"),
  lessonCount: document.getElementById("lessonCount")
};

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  loadPreferences();
  state.activeDay = lessons[0]?.day || null;
  applyTheme();
  renderApp();
  bindEvents();
}

function bindEvents() {
  elements.themeToggle.addEventListener("click", toggleTheme);
  elements.searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      commitSearch(event.target.value);
    }
  });
  elements.searchInput.addEventListener("search", (event) => {
    if (!event.target.value) {
      commitSearch("");
    }
  });
  elements.searchPrev.addEventListener("click", () => stepSearchResult(-1));
  elements.searchNext.addEventListener("click", () => stepSearchResult(1));

  document.addEventListener("click", (event) => {
    const bookmarkButton = event.target.closest("[data-bookmark-day]");
    if (bookmarkButton) {
      toggleBookmark(Number(bookmarkButton.dataset.bookmarkDay));
      return;
    }

    const answerButton = event.target.closest("[data-answer-toggle]");
    if (answerButton) {
      toggleAnswer(answerButton);
    }
  });

}

function loadPreferences() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
  state.theme = savedTheme === "light" ? "light" : "dark";

  try {
    const savedBookmarks = JSON.parse(localStorage.getItem(STORAGE_KEYS.bookmarks) || "[]");
    state.bookmarks = new Set(savedBookmarks.map(Number));
  } catch {
    state.bookmarks = new Set();
  }
}

function applyTheme() {
  const isLight = state.theme === "light";
  elements.body.classList.toggle("light-theme", isLight);
  elements.themeToggle.querySelector(".theme-icon").textContent = isLight ? "☼" : "☾";
  elements.themeToggle.querySelector(".theme-text").textContent = isLight ? "Light Theme" : "Dark Theme";
  elements.themeToggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem(STORAGE_KEYS.theme, state.theme);
  applyTheme();
}

function toggleBookmark(day) {
  if (state.bookmarks.has(day)) {
    state.bookmarks.delete(day);
  } else {
    state.bookmarks.add(day);
  }

  localStorage.setItem(STORAGE_KEYS.bookmarks, JSON.stringify([...state.bookmarks]));
  renderNavigation(getVisibleLessons());
  updateBookmarkButtons();
}

function renderApp() {
  const visibleLessons = getVisibleLessons();
  ensureActiveLesson(visibleLessons);
  updateSearchMatches();
  state.answerSearchHits = findAnswerSearchHits(visibleLessons);

  renderNavigation(visibleLessons);
  renderLessons(visibleLessons);
  updateBookmarkButtons();
  updateSearchControls();
  scrollCurrentSearchMatchIntoView();
}

function commitSearch(value) {
  state.searchTerm = value.trim().toLowerCase();
  state.activeSearchIndex = state.searchTerm ? 0 : -1;
  const visibleLessons = getVisibleLessons();
  state.activeDay = visibleLessons[0]?.day || lessons[0]?.day || null;
  renderApp();
}

function stepSearchResult(direction) {
  if (!state.searchMatches.length) {
    return;
  }

  state.activeSearchIndex = (state.activeSearchIndex + direction + state.searchMatches.length) % state.searchMatches.length;
  state.activeDay = state.searchMatches[state.activeSearchIndex].day;
  renderApp();
}

function getVisibleLessons() {
  if (!state.searchTerm) {
    return lessons;
  }

  return lessons.filter((lesson) => lessonMatchesSearch(lesson, state.searchTerm));
}

function lessonMatchesSearch(lesson, term) {
  return collectLessonSearchText(lesson).some((value) => value.toLowerCase().includes(term));
}

function collectLessonSearchText(lesson) {
  const values = [
    lesson.title,
    lesson.theme,
    lesson.trainingFocus,
    lesson.quote?.text,
    lesson.quote?.author
  ];

  lesson.patterns?.forEach((item) => {
    values.push(item.pattern, item.usage, item.practiceTip, ...(item.examples || []));
  });

  lesson.questions?.forEach((item) => {
    values.push(item.question, item.answer);
  });

  lesson.images?.forEach((item) => {
    values.push(item.alt, item.caption);
  });

  return values.filter(Boolean);
}

function findAnswerSearchHits(visibleLessons) {
  const hits = new Set();
  if (!state.searchTerm) {
    return hits;
  }

  visibleLessons.forEach((lesson) => {
    lesson.questions?.forEach((item, index) => {
      if ((item.answer || "").toLowerCase().includes(state.searchTerm)) {
        hits.add(getQuestionId(lesson.day, index));
      }
    });
  });

  return hits;
}

function updateSearchMatches() {
  state.searchMatches = [];
  if (!state.searchTerm) {
    state.activeSearchIndex = -1;
    return;
  }

  getVisibleLessons().forEach((lesson) => {
    collectLessonSearchText(lesson).forEach((value) => {
      const count = countMatches(value, state.searchTerm);
      for (let index = 0; index < count; index += 1) {
        state.searchMatches.push({ day: lesson.day });
      }
    });
  });

  if (!state.searchMatches.length) {
    state.activeSearchIndex = -1;
    return;
  }

  if (state.activeSearchIndex < 0 || state.activeSearchIndex >= state.searchMatches.length) {
    state.activeSearchIndex = 0;
  }

  state.activeDay = state.searchMatches[state.activeSearchIndex].day;
}

function countMatches(value = "", term = "") {
  if (!term) {
    return 0;
  }

  return String(value).toLowerCase().split(term).length - 1;
}

function getFirstSearchMatchIndexForDay(day) {
  if (!state.searchTerm) {
    return 0;
  }

  const index = state.searchMatches.findIndex((match) => match.day === day);
  return index >= 0 ? index : 0;
}

function ensureActiveLesson(visibleLessons) {
  if (!visibleLessons.length) {
    state.activeDay = null;
    return;
  }

  if (!visibleLessons.some((lesson) => lesson.day === state.activeDay)) {
    state.activeDay = visibleLessons[0].day;
  }
}

function renderNavigation(visibleLessons) {
  elements.lessonCount.textContent = String(lessons.length);

  if (lessons.length === 0) {
    elements.dayNav.innerHTML = `<p class="empty-small">No lessons yet.</p>`;
    elements.bookmarkList.innerHTML = `<p class="empty-small">No bookmarks yet.</p>`;
    return;
  }

  elements.dayNav.innerHTML = visibleLessons.map((lesson) => {
    const isBookmarked = state.bookmarks.has(lesson.day);
    const isActive = state.activeDay === lesson.day;

    return `
      <button class="nav-button ${isActive ? "active" : ""}" type="button" data-select-day="${lesson.day}">
        <span>Day ${lesson.day}</span>
        ${isBookmarked ? `<span class="bookmark-star" aria-label="Bookmarked">★</span>` : ""}
      </button>
    `;
  }).join("") || `<p class="empty-small">No matching days.</p>`;

  const bookmarkedLessons = lessons.filter((lesson) => state.bookmarks.has(lesson.day));
  elements.bookmarkList.innerHTML = bookmarkedLessons.map((lesson) => `
    <button class="bookmark-link" type="button" data-select-day="${lesson.day}">
      <span>Day ${lesson.day}</span>
      <span class="bookmark-star" aria-hidden="true">★</span>
    </button>
  `).join("") || `<p class="empty-small">Bookmarked days will appear here.</p>`;

  document.querySelectorAll("[data-select-day]").forEach((button) => {
    button.addEventListener("click", () => selectDay(Number(button.dataset.selectDay)));
  });
}

function renderLessons(visibleLessons) {
  if (lessons.length === 0) {
    elements.lessonContainer.innerHTML = renderEmptyState(
      "还没有添加学习内容",
      "请把 Day 1 的内容整理进 script.js 的 lessons 数组后开始复习。页面框架、导航、搜索、书签、漫画区域和答案隐藏功能都已经准备好。",
      "＋"
    );
    return;
  }

  if (visibleLessons.length === 0) {
    elements.lessonContainer.innerHTML = renderEmptyState(
      "没有找到匹配内容",
      "换一个关键词试试。搜索会匹配主题、句型、例句、问题和隐藏状态下的 Reference Answer。",
      "⌕"
    );
    return;
  }

  const activeLesson = visibleLessons.find((lesson) => lesson.day === state.activeDay) || visibleLessons[0];
  state.renderMatchCounter = getFirstSearchMatchIndexForDay(activeLesson.day);
  elements.lessonContainer.innerHTML = renderLessonCard(activeLesson);
}

function renderLessonCard(lesson) {
  const accent = getLessonAccent(lesson.day);

  return `
    <article class="lesson-card" id="day-${lesson.day}" data-day="${lesson.day}" style="--lesson-accent: ${accent.primary}; --lesson-accent-soft: ${accent.soft}; --lesson-accent-strong: ${accent.strong};">
      <header class="lesson-header">
        <div>
          <div class="lesson-kicker">Day ${lesson.day}</div>
          <h3>${formatText(lesson.title || `Day ${lesson.day}`, lesson.day)}</h3>
          <p class="theme-line">${formatText(lesson.theme || "今日主题待添加", lesson.day)}</p>
        </div>
      </header>

      <div class="lesson-body">
        ${renderPatterns(lesson.patterns)}
        ${renderQuestions(lesson)}
        ${renderFocus(lesson.trainingFocus)}
        ${renderQuote(lesson.quote)}
        ${renderImages(lesson.images)}
      </div>
    </article>
  `;
}

function renderPatterns(patterns = []) {
  if (!patterns.length) {
    return "";
  }

  return `
    <section aria-labelledby="patterns-title">
      <h4 class="section-title" id="patterns-title">Core Sentence Patterns</h4>
      <div class="pattern-grid">
        ${patterns.map((item) => `
          <article class="pattern-card">
            <strong class="sentence-pattern">${formatText(item.pattern, state.activeDay)}</strong>
            <p class="usage">${formatText(item.usage || "", state.activeDay)}</p>
            <ul class="example-list">
              ${(item.examples || []).map((example) => `<li>${formatText(example, state.activeDay)}</li>`).join("")}
            </ul>
            ${item.practiceTip ? `<p class="practice-tip">${formatText(item.practiceTip, state.activeDay)}</p>` : ""}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderQuestions(lesson) {
  const questions = lesson.questions || [];
  if (!questions.length) {
    return "";
  }

  return `
    <section aria-labelledby="questions-title-${lesson.day}">
      <h4 class="section-title" id="questions-title-${lesson.day}">Speaking Questions</h4>
      <div class="question-grid">
        ${questions.map((item, index) => renderQuestionCard(lesson.day, item, index)).join("")}
      </div>
    </section>
  `;
}

function renderQuestionCard(day, item, index) {
  const questionId = getQuestionId(day, index);
  const answerId = `answer-${questionId}`;
  const shouldOpen = state.answerSearchHits.has(questionId);

  return `
    <article class="question-card ${shouldOpen ? "search-hit" : ""}">
      <div class="question-topline">
        <p class="question-text">${formatText(item.question || "", day)}</p>
        <button
          class="answer-toggle"
          type="button"
          data-answer-toggle="${answerId}"
          aria-controls="${answerId}"
          aria-expanded="${shouldOpen}"
        >
          ${shouldOpen ? "Hide Answer" : "Show Answer"}
        </button>
      </div>
      <div class="answer-panel ${shouldOpen ? "open" : ""}" id="${answerId}">
        <div class="answer-content">
          <strong>Reference Answer</strong>
          <p>${formatText(item.answer || "", day)}</p>
        </div>
      </div>
    </article>
  `;
}

function renderFocus(trainingFocus) {
  if (!trainingFocus) {
    return "";
  }

  return `
    <section>
      <h4 class="section-title">Training Focus</h4>
      <div class="focus-card">${formatText(trainingFocus, state.activeDay)}</div>
    </section>
  `;
}

function renderQuote(quote) {
  if (!quote?.text) {
    return "";
  }

  return `
    <section>
      <h4 class="section-title">Daily Quote</h4>
      <div class="quote-card">
        <blockquote>“${formatText(quote.text, state.activeDay)}”</blockquote>
        ${quote.author ? `<cite>${formatText(quote.author, state.activeDay)}</cite>` : ""}
      </div>
    </section>
  `;
}

function renderImages(images = []) {
  const validImages = images.slice(0, 2).filter((image) => image?.src);
  if (!validImages.length) {
    return "";
  }

  const layoutClass = validImages.length === 1 ? "single-image" : "two-images";

  return `
    <section>
      <h4 class="section-title">Daily Comic</h4>
      <div class="image-grid ${layoutClass}">
        ${validImages.map((image) => `
          <figure class="image-card">
            <img src="${escapeAttribute(image.src)}" alt="${escapeAttribute(image.alt || image.caption || "Daily comic image")}" loading="lazy">
            ${image.caption ? `<figcaption>${formatText(image.caption, state.activeDay)}</figcaption>` : ""}
          </figure>
        `).join("")}
      </div>
    </section>
  `;
}

function renderEmptyState(title, message, icon) {
  return `
    <div class="empty-state">
      <div class="empty-state-inner">
        <div class="empty-icon" aria-hidden="true">${icon}</div>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(message)}</p>
      </div>
    </div>
  `;
}

function toggleAnswer(button) {
  const answerPanel = document.getElementById(button.dataset.answerToggle);
  if (!answerPanel) {
    return;
  }

  const isOpen = answerPanel.classList.toggle("open");
  button.textContent = isOpen ? "Hide Answer" : "Show Answer";
  button.setAttribute("aria-expanded", String(isOpen));
}

function selectDay(day) {
  state.activeDay = day;
  if (state.searchMatches.length) {
    const nextIndex = state.searchMatches.findIndex((match) => match.day === day);
    state.activeSearchIndex = nextIndex >= 0 ? nextIndex : state.activeSearchIndex;
  }
  renderApp();
}

function updateBookmarkButtons() {
  document.querySelectorAll("[data-bookmark-day]").forEach(updateBookmarkButton);

  if (elements.topbarBookmark) {
    elements.topbarBookmark.dataset.bookmarkDay = state.activeDay || "";
    elements.topbarBookmark.disabled = !state.activeDay;
    updateBookmarkButton(elements.topbarBookmark);
  }
}

function updateBookmarkButton(button) {
  const day = Number(button.dataset.bookmarkDay);
  const isBookmarked = state.bookmarks.has(day);
  button.setAttribute("aria-pressed", String(isBookmarked));
  button.innerHTML = `
    <span aria-hidden="true">${isBookmarked ? "★" : "☆"}</span>
    <span>${isBookmarked ? "Cancel Bookmark" : "Add Bookmark"}</span>
  `;
}

function updateSearchControls() {
  const total = state.searchMatches.length;
  const current = total ? state.activeSearchIndex + 1 : 0;
  elements.searchCount.textContent = `${current} / ${total}`;
  elements.searchPrev.disabled = total <= 1;
  elements.searchNext.disabled = total <= 1;
}

function scrollCurrentSearchMatchIntoView() {
  if (!state.searchTerm || state.activeSearchIndex < 0) {
    return;
  }

  requestAnimationFrame(() => {
    const current = document.querySelector(".search-highlight.current");
    current?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

function getQuestionId(day, index) {
  return `day-${day}-q-${index}`;
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttribute(value = "") {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

function formatText(value = "", day = state.activeDay) {
  const escaped = escapeHtml(value);
  if (!state.searchTerm || !day) {
    return escaped;
  }

  const term = escapeRegExp(state.searchTerm);
  const pattern = new RegExp(term, "gi");

  return escaped.replace(pattern, (match) => {
    const currentIndex = state.renderMatchCounter;
    const isCurrent = state.searchMatches[currentIndex]?.day === day && currentIndex === state.activeSearchIndex;
    state.renderMatchCounter += 1;
    return `<mark class="search-highlight ${isCurrent ? "current" : ""}">${match}</mark>`;
  });
}

function escapeRegExp(value = "") {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getLessonAccent(day) {
  const accents = [
    { primary: "#66d9e8", soft: "rgba(102, 217, 232, 0.14)", strong: "#9ae6f0" },
    { primary: "#8b9dff", soft: "rgba(139, 157, 255, 0.14)", strong: "#bac4ff" },
    { primary: "#78d99b", soft: "rgba(120, 217, 155, 0.14)", strong: "#b8efcc" },
    { primary: "#ffd166", soft: "rgba(255, 209, 102, 0.14)", strong: "#ffe4a3" },
    { primary: "#f59ac2", soft: "rgba(245, 154, 194, 0.14)", strong: "#ffc1da" },
    { primary: "#7dd3fc", soft: "rgba(125, 211, 252, 0.14)", strong: "#bae6fd" },
    { primary: "#c4b5fd", soft: "rgba(196, 181, 253, 0.14)", strong: "#ddd6fe" }
  ];

  return accents[(day - 1) % accents.length];
}
