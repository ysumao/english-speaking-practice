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
  },
  {
    day: 8,
    title: "Day 8 - 口语启动训练（留学生活方向）",
    theme: "表达建议、需求和寻求帮助",
    patterns: [
      {
        pattern: "Could you help me with...?",
        usage: "用于请求别人帮助你处理某件事。常见于学校办公室、图书馆、银行、宿舍、课堂和小组作业。",
        examples: [
          "Could you help me with this form?",
          "Could you help me with my registration?",
          "Could you help me with this assignment?",
          "Could you help me with my English presentation?",
          "Could you help me with setting up my student account?"
        ],
        practiceTip: "不要只说 Help me。要说 Could you help me with...? 它更礼貌，也更自然。"
      },
      {
        pattern: "I'm having trouble with...",
        usage: "用于表达“我在……方面遇到了困难”。比 I have a problem. 更自然、更口语。适合学习问题、生活问题、技术问题、语言问题、账号、系统和设备问题。",
        examples: [
          "I'm having trouble with my student account.",
          "I'm having trouble with the online system.",
          "I'm having trouble with understanding the assignment.",
          "I'm having trouble with speaking English fluently.",
          "I'm having trouble with finding the right classroom."
        ],
        practiceTip: "结构是 I'm having trouble with + noun / -ing。例如：I'm having trouble with opening this file."
      },
      {
        pattern: "Do you have any advice on...?",
        usage: "用于请求建议，非常适合和同学、老师、导师交流。常见于选课、学习方法、研究方向、适应生活、英语学习和时间管理。",
        examples: [
          "Do you have any advice on improving my speaking?",
          "Do you have any advice on choosing courses?",
          "Do you have any advice on preparing for seminars?",
          "Do you have any advice on adapting to university life?",
          "Do you have any advice on finding accommodation?"
        ],
        practiceTip: "这个句型比 What should I do? 更自然、更成熟。例如：Do you have any advice on joining class discussions?"
      },
      {
        pattern: "I was wondering if...",
        usage: "用于礼貌、自然地提出请求或询问信息，意思是“我想知道是否……”。常用于发邮件、问老师、问工作人员、请求帮助和询问信息。",
        examples: [
          "I was wondering if you could help me.",
          "I was wondering if I could ask you a question.",
          "I was wondering if the office is open today.",
          "I was wondering if I could change my appointment.",
          "I was wondering if you have time to discuss my project."
        ],
        practiceTip: "这个句型适合半正式场景。例如：I was wondering if I could ask you a question about the assignment."
      },
      {
        pattern: "What would you recommend?",
        usage: "用于询问别人推荐什么。常见于选课、买东西、餐厅点餐、旅游、学习资源和生活服务。",
        examples: [
          "What would you recommend for a beginner?",
          "What would you recommend for improving speaking?",
          "What would you recommend if I want to live near campus?",
          "What would you recommend from this menu?",
          "What would you recommend for preparing for academic writing?"
        ],
        practiceTip: "这个句型很适合打开对话。例如：I'm new here. What would you recommend?"
      }
    ],
    questions: [
      {
        question: "You cannot log into your university account. What would you say to the IT staff?",
        answer: "Hi, could you help me with my student account? I'm having trouble with logging into the online system. I've tried a few times, but it still doesn't work. I was wondering if you could check whether my account has been activated. Just to make sure, do I need to reset my password first?"
      },
      {
        question: "You don't understand an assignment. What would you say to your classmate?",
        answer: "I'm having trouble with understanding the assignment. I understand the general topic, but I'm not sure what we need to submit. Could you help me with the instructions? I was wondering if we need to work individually or in groups. Do you have any advice on how to start?"
      },
      {
        question: "You want advice from a senior student about studying abroad. What would you ask?",
        answer: "I was wondering if I could ask you a few questions about university life. I'm going to study abroad soon, and I'm still getting used to preparing everything. Do you have any advice on adapting to a new environment? Also, what would you recommend for improving English speaking before classes start?"
      },
      {
        question: "You are in a restaurant and you don't know what to order. What would you say?",
        answer: "Hi, I'm not very familiar with this menu. What would you recommend? I prefer something not too spicy. I was wondering if this dish is popular here. Also, could you help me understand what this ingredient is?"
      },
      {
        question: "You want to ask your professor for a short meeting. What would you say?",
        answer: "Professor, I was wondering if you have time to discuss my project this week. I'm having trouble with narrowing down my research topic. I've prepared some initial ideas, but I'm not sure which direction is more suitable. Do you have any advice on how I should develop it further?"
      }
    ],
    trainingFocus: "今天重点练习留学生活中的“求助系统”：说明困难用 I'm having trouble with...；请求帮助用 Could you help me with...?；请求建议用 Do you have any advice on...? 和 What would you recommend?；礼貌询问用 I was wondering if...。不要沉默，也不要硬扛，不会就问，不确定就确认。",
    quote: {
      text: "He who asks a question remains a fool for five minutes. He who does not ask remains a fool forever.",
      author: "Chinese proverb"
    },
    images: []

    // AI comic prompt ideas:
    // 1. A warm campus service desk comic illustration of an international student politely asking IT staff for help with a student account, speech bubbles saying "Could you help me with...?" and "I'm having trouble with...", bright supportive atmosphere.
    // 2. A friendly university classroom cartoon scene where a student asks a senior student for study abroad advice, sentence cards showing "Do you have any advice on...?" and "What would you recommend?", positive second-week learning mood.
  },
  {
    day: 9,
    title: "Day 9 - 口语启动训练（留学生活方向）",
    theme: "表达日常安排、时间管理和忙碌状态",
    patterns: [
      {
        pattern: "I have to...",
        usage: "用于表达“我必须…… / 我得……”，常用于日常安排、任务和责任。",
        examples: [
          "I have to finish my assignment tonight.",
          "I have to attend a meeting this afternoon.",
          "I have to prepare for tomorrow's class.",
          "I have to check my email first.",
          "I have to get up early tomorrow."
        ],
        practiceTip: "这是最基础的任务表达句型。每天可以问自己：What do I have to do today? 然后用 I have to... 回答。"
      },
      {
        pattern: "I'm supposed to...",
        usage: "意思是“我应该…… / 按安排我需要……”。它比 I have to... 稍微柔和，常用于计划、要求和规定。",
        examples: [
          "I'm supposed to submit the report by Friday.",
          "I'm supposed to meet my supervisor tomorrow.",
          "I'm supposed to read this paper before class.",
          "I'm supposed to bring my passport to the office.",
          "I'm supposed to work with my group members this week."
        ],
        practiceTip: "I have to... 语气更强；I'm supposed to... 表示按要求或计划应该做。例如：I'm supposed to submit it today, so I have to finish it this morning."
      },
      {
        pattern: "I'm running out of...",
        usage: "用于表达“……快不够了 / 快用完了”。特别常见于时间、钱、电量、耐心、精力和食物。",
        examples: [
          "I'm running out of time.",
          "I'm running out of money this month.",
          "My phone is running out of battery.",
          "I'm running out of energy today.",
          "We're running out of food in the fridge."
        ],
        practiceTip: "这个句型非常生活化。每天找一个真实情况说：I'm running out of... 例如：I'm running out of time, so I need to focus."
      },
      {
        pattern: "I need to make time for...",
        usage: "意思是“我需要抽时间做……”。适合表达你想重视某件事，但时间有限。",
        examples: [
          "I need to make time for English speaking practice.",
          "I need to make time for exercise.",
          "I need to make time for reading papers.",
          "I need to make time for cooking at home.",
          "I need to make time for calling my family."
        ],
        practiceTip: "这个句型特别适合你现在。可以说：I need to make time for speaking practice every day, even if I'm busy."
      },
      {
        pattern: "I'll try to...",
        usage: "用于表达“我会尽量……”，常用于承诺、计划和回复别人。注意它有时表示会尽力，但不一定保证。",
        examples: [
          "I'll try to finish it by tonight.",
          "I'll try to join the meeting on time.",
          "I'll try to speak more in class.",
          "I'll try to reply to your email later.",
          "I'll try to practice English for at least ten minutes every day."
        ],
        practiceTip: "I'll try to... 表示“我尽量……”。例如：I'll try to come. 意思是尽量来，不是百分百保证。"
      }
    ],
    questions: [
      {
        question: "What do you have to do today?",
        answer: "I have to practice English speaking today. I also have to check some information about studying abroad. To be honest, I'm running out of time before leaving, so I need to be more organized. I'll try to finish the most important tasks first. I think daily practice is still the most important thing for me right now."
      },
      {
        question: "What are you supposed to prepare before studying abroad?",
        answer: "I'm supposed to prepare many things before studying abroad. For example, I need to check my documents, accommodation, flight information, and university registration. I'm also supposed to improve my English speaking before classes start. I'm running out of time, so I need to make time for speaking practice every day. I'll try to prepare step by step instead of worrying too much."
      },
      {
        question: "Do you think you manage your time well?",
        answer: "To be honest, I don't always manage my time very well. Sometimes I spend too much time thinking and not enough time taking action. I need to make time for important things, especially English speaking practice. I'm running out of time before going abroad, so I have to become more disciplined. I'll try to build a better daily routine."
      },
      {
        question: "What do you usually do when you are running out of time?",
        answer: "When I'm running out of time, I try to focus on the most important task first. I don't want to waste time on small details. For example, if I have to prepare for class, I'll try to understand the main ideas first. I think this is better than trying to do everything perfectly. For me, finishing the key task is more important than doing everything at once."
      },
      {
        question: "How can you make time for English speaking every day?",
        answer: "I think I can make time for English speaking by keeping the practice short and simple. I don't have to practice for one hour every day. I can practice for ten or fifteen minutes, but I need to do it consistently. I'll try to use sentence patterns to answer a few questions every day. The main reason is that daily repetition can help me speak more naturally."
      }
    ],
    trainingFocus: "今天重点练习时间管理表达链：I have to..., I'm supposed to..., I'm running out of..., I need to make time for..., I'll try to...。这五个句型可以组成自然表达：I'm supposed to prepare for studying abroad, and I'm running out of time. I have to improve my speaking, so I need to make time for daily practice.",
    quote: {
      text: "Lost time is never found again.",
      author: "Benjamin Franklin"
    },
    images: []

    // AI comic prompt ideas:
    // 1. A warm comic illustration of an international student planning a busy day with a calendar, laptop, clock, and English speaking notes, speech bubbles saying "I have to..." and "I need to make time for...", positive study abroad mood.
    // 2. A cozy study-room cartoon scene where a student manages time before studying abroad, with a countdown calendar, checklist, and speaking practice timer, bright encouraging colors, clean composition.
  },
  {
    day: 10,
    title: "Day 10 - 口语启动训练（留学生活方向）",
    theme: "表达经历、经验和感受",
    patterns: [
      {
        pattern: "I've never... before.",
        usage: "用于表达“我以前从来没有……”。非常适合留学初期，因为你会遇到很多第一次，例如第一次出国、第一次用英语上课、第一次和外国同学合作、第一次独立生活、第一次处理学校手续。",
        examples: [
          "I've never studied abroad before.",
          "I've never lived in another country before.",
          "I've never taken a class fully in English before.",
          "I've never worked with international students before.",
          "I've never had this kind of experience before."
        ],
        practiceTip: "这个句型可以和感受连接：I've never... before, so I feel a little nervous. 例如：I've never lived abroad before, so I feel excited but also a bit worried."
      },
      {
        pattern: "This is my first time...",
        usage: "用于表达“这是我第一次……”。注意结构是 This is my first time + doing something.",
        examples: [
          "This is my first time studying abroad.",
          "This is my first time living alone.",
          "This is my first time joining an English discussion.",
          "This is my first time giving a presentation in English.",
          "This is my first time visiting this campus."
        ],
        practiceTip: "这个句型非常适合留学生活。例如：This is my first time visiting this university, so I'm still getting used to the campus."
      },
      {
        pattern: "I've had experience with...",
        usage: "用于表达“我有……方面的经验”。适合自我介绍、和导师交流、小组项目、课堂讨论和介绍专业背景。",
        examples: [
          "I've had experience with programming.",
          "I've had experience with mechanical design.",
          "I've had experience with SolidWorks.",
          "I've had experience with Arduino and ESP32 projects.",
          "I've had experience with teaching Python basics."
        ],
        practiceTip: "这个句型适合介绍技术背景。例如：I've had experience with mechanical design and programming, so I'm interested in intelligent manufacturing."
      },
      {
        pattern: "What I learned from this experience is that...",
        usage: "用于表达“我从这段经历中学到的是……”。这是比较成熟的表达方式，适合面试、学术交流、自我反思、课堂讨论、留学申请或导师交流。",
        examples: [
          "What I learned from this experience is that communication is very important.",
          "What I learned from this experience is that preparation can reduce stress.",
          "What I learned from this experience is that confidence comes from practice.",
          "What I learned from this experience is that teamwork requires patience.",
          "What I learned from this experience is that simple English can still be powerful."
        ],
        practiceTip: "不要只说 It was useful. 可以升级为 What I learned from this experience is that... 让表达更有深度。"
      },
      {
        pattern: "It was a bit challenging, but...",
        usage: "用于表达“有点挑战，但……”。非常适合描述困难经历，例如第一次做 presentation、第一次参加小组讨论、第一次独立处理问题、第一次用英语沟通或第一次适应新环境。",
        examples: [
          "It was a bit challenging, but I learned a lot.",
          "It was a bit challenging, but I managed to finish it.",
          "It was a bit challenging, but it helped me become more confident.",
          "It was a bit challenging, but my classmates were very supportive.",
          "It was a bit challenging, but I think it was a good experience."
        ],
        practiceTip: "这个句型可以让回答有转折和积极结尾。例如：It was a bit challenging, but I learned how to communicate more clearly."
      }
    ],
    questions: [
      {
        question: "Have you ever studied abroad before?",
        answer: "I've never studied abroad before, so I feel excited but also a little nervous. This is my first time preparing for a long-term study experience in another country. I think one of the biggest challenges will be communicating in English every day. However, I'm trying to prepare step by step. I hope I can adapt to the new environment quickly."
      },
      {
        question: "Have you ever given a presentation in English?",
        answer: "I've had some experience with presentations, but I haven't done many presentations fully in English. To be honest, speaking in front of people can be stressful for me. It was a bit challenging when I tried to explain technical ideas in English. What I learned from this experience is that preparation and simple sentence patterns are very important. I need to work on speaking more confidently."
      },
      {
        question: "What experience do you have with your academic or technical background?",
        answer: "I've had experience with mechanical design, programming, and some embedded system projects. For example, I've used SolidWorks for 3D modelling, and I've also worked with Arduino and ESP32. What I like about these experiences is that they connect theory with real practice. What I learned from this experience is that engineering problems often require both technical knowledge and practical testing."
      },
      {
        question: "Can you describe a challenging learning experience?",
        answer: "One challenging learning experience was improving my English speaking. I used to focus more on reading and listening, but speaking was much harder for me. It was a bit challenging, but I realized that daily sentence pattern practice can help a lot. What I learned from this experience is that consistency is more important than motivation. I'm still working on it, but I feel like I'm improving slowly."
      },
      {
        question: "What is something new you want to try after going abroad?",
        answer: "I want to try joining more discussions after going abroad. I've never studied in a fully English-speaking classroom before, so I know it may be difficult at first. This might be my first time communicating with classmates from many different countries. It will probably be a bit challenging, but I think it can help me become more confident and independent. I hope I can learn not only from teachers, but also from other students."
      }
    ],
    trainingFocus: "今天重点练习“经历型回答”：经历 → 感受 → 困难 → 收获。重点掌握 I've never... before., This is my first time..., It was a bit challenging, but..., What I learned from this experience is that...。真实交流中别人不只是问观点，还会问 Have you ever...? What was it like? What did you learn from it?",
    quote: {
      text: "Experience is the teacher of all things.",
      author: "Julius Caesar"
    },
    images: []

    // AI comic prompt ideas:
    // 1. A warm comic illustration of an international student reflecting on first-time experiences abroad, with small panels for presentation, campus, group discussion, and independent living, speech bubbles saying "I've never..." and "This is my first time...", positive mood.
    // 2. A cozy study journal cartoon scene where a student writes lessons learned from English speaking practice, with cards labeled "experience", "challenge", and "growth", soft light, encouraging study abroad atmosphere.
  },
  {
    day: 11,
    title: "Day 11 - 口语启动训练（留学生活方向）",
    theme: "表达担心、压力和应对方式",
    patterns: [
      {
        pattern: "I'm a bit worried about...",
        usage: "用于表达“我有点担心……”。比 I'm afraid of... 更自然、更日常，适合出国前焦虑、担心英语、课程、住宿、社交、钱和时间等场合。",
        examples: [
          "I'm a bit worried about speaking English every day.",
          "I'm a bit worried about understanding lectures.",
          "I'm a bit worried about making friends abroad.",
          "I'm a bit worried about managing my time well.",
          "I'm a bit worried about adapting to a new environment."
        ],
        practiceTip: "这个句型可以连接原因：I'm a bit worried about..., because... 例如：I'm a bit worried about speaking English every day because I still need time to organize my ideas."
      },
      {
        pattern: "I feel stressed when...",
        usage: "用于表达“当……时，我会有压力”。适用于学习压力、语言压力、时间压力、社交压力和任务压力。",
        examples: [
          "I feel stressed when I have too many things to do.",
          "I feel stressed when I cannot express myself clearly.",
          "I feel stressed when people speak too fast.",
          "I feel stressed when I have to speak in front of others.",
          "I feel stressed when I'm running out of time."
        ],
        practiceTip: "这个句型非常适合描述具体触发点。不要只说 I'm stressed. 要说 I feel stressed when...，这样别人更容易理解你。"
      },
      {
        pattern: "I'm trying not to...",
        usage: "用于表达“我正在努力不去……”。这是非常真实的心理状态表达，适合表达不过度焦虑、不拖延、不想太多、不害怕犯错、不依赖翻译等。",
        examples: [
          "I'm trying not to worry too much.",
          "I'm trying not to translate everything from Chinese.",
          "I'm trying not to be afraid of making mistakes.",
          "I'm trying not to compare myself with others.",
          "I'm trying not to leave everything until the last minute."
        ],
        practiceTip: "这个句型非常适合你现在。例如：I'm trying not to be afraid of making mistakes when I speak English. 这句话要反复练。"
      },
      {
        pattern: "The best way to deal with it is to...",
        usage: "用于表达“处理这个问题最好的方式是……”。适合给自己制定策略、给别人建议、课堂讨论、心理压力管理和学习方法表达。",
        examples: [
          "The best way to deal with it is to practice a little every day.",
          "The best way to deal with it is to prepare in advance.",
          "The best way to deal with it is to ask for help early.",
          "The best way to deal with it is to break the task into smaller steps.",
          "The best way to deal with it is to focus on communication, not perfection."
        ],
        practiceTip: "这个句型能让你的回答从“抱怨问题”变成“提出解决办法”。例如：I feel stressed when I have to speak English quickly. The best way to deal with it is to practice short answers every day."
      },
      {
        pattern: "I'll take it step by step.",
        usage: "用于表达“我会一步一步来”。非常适合出国前准备、适应新环境、面对压力时使用，也可以用来鼓励自己或别人。",
        examples: [
          "I'll take it step by step.",
          "I know it won't be easy, but I'll take it step by step.",
          "There are many things to prepare, so I'll take it step by step.",
          "My speaking won't improve overnight, so I'll take it step by step.",
          "Studying abroad is a big change, but I'll take it step by step."
        ],
        practiceTip: "这句话非常短，但很有力量。以后当你不知道怎么结尾时，可以用：I'll take it step by step. 它可以自然结束一段表达。"
      }
    ],
    questions: [
      {
        question: "What are you most worried about before studying abroad?",
        answer: "I'm a bit worried about speaking English every day. The main reason is that I still need time to organize my ideas when I speak. I feel stressed when people speak very fast or ask me questions suddenly. However, I'm trying not to be afraid of making mistakes. I think the best way to deal with it is to practice a little every day, and I'll take it step by step."
      },
      {
        question: "When do you usually feel stressed while learning English?",
        answer: "I feel stressed when I understand the question, but I cannot answer quickly in English. Sometimes I know what I want to say in Chinese, but I cannot find the right sentence pattern immediately. I'm trying not to translate everything from Chinese. The best way to deal with it is to build automatic sentence patterns. I know it takes time, so I'll take it step by step."
      },
      {
        question: "How do you deal with speaking anxiety?",
        answer: "To be honest, I still feel nervous when I speak English. I feel stressed when I focus too much on grammar and pronunciation. I'm trying not to worry too much about perfect sentences. The best way to deal with it is to speak simply and clearly first. For me, communication is more important than perfection, so I'll take it step by step."
      },
      {
        question: "What is stressful about preparing for study abroad?",
        answer: "There are many things to prepare before studying abroad, so it can feel stressful. I'm a bit worried about documents, accommodation, university registration, and English communication. I feel stressed when everything seems to happen at the same time. The best way to deal with it is to break everything into smaller steps. I'll take it step by step and try not to leave everything until the last minute."
      },
      {
        question: "What advice would you give to someone who is nervous about speaking English?",
        answer: "I would tell them not to worry too much about making mistakes. I know speaking English can feel stressful, especially when people speak fast. But the best way to deal with it is to practice simple sentence patterns every day. I'd also say that communication is more important than perfect grammar. If they keep practicing, they can improve step by step."
      }
    ],
    trainingFocus: "今天重点练习“问题 → 情绪 → 原因 → 应对方式 → 积极结尾”的表达链：I'm a bit worried about..., I feel stressed when..., I'm trying not to..., The best way to deal with it is to..., I'll take it step by step. 可以组成万能表达：I'm a bit worried about speaking English in real conversations. I feel stressed when people ask me questions suddenly. I'm trying not to translate everything from Chinese. The best way to deal with it is to practice useful sentence patterns every day. I'll take it step by step. 今天至少选 1 个问题，脱稿说 60 秒。",
    quote: {
      text: "You don't have to see the whole staircase, just take the first step.",
      author: "Martin Luther King Jr."
    },
    images: []

    // AI comic prompt ideas:
    // 1. A warm comic illustration of an international student preparing to study abroad, sitting at a desk with a checklist, passport, English notes, and a speech bubble saying "I'll take it step by step", calm but hopeful mood.
    // 2. A positive study-abroad cartoon scene showing a student managing speaking anxiety, with small visual icons for stress, practice, support, and progress, soft colors, clean composition, encouraging atmosphere.
  },
  {
    day: 12,
    title: "Day 12 - 口语启动训练（留学生活方向）",
    theme: "表达社交、认识新朋友和维持对话",
    patterns: [
      {
        pattern: "I'm not very good at starting conversations.",
        usage: "用于表达“我不太擅长主动开启对话”。这个句型很真实，也很自然，适合认识新同学、小组讨论、社交活动、解释自己为什么比较安静，或和朋友聊性格。",
        examples: [
          "I'm not very good at starting conversations.",
          "I'm not very good at small talk.",
          "I'm not very good at talking to new people.",
          "I'm not very good at keeping a conversation going.",
          "I'm not very good at speaking in groups."
        ],
        practiceTip: "这个句型可以接积极补充：I'm not very good at starting conversations, but I'm trying to be more open. 你不是在暴露弱点，而是在表达真实状态。"
      },
      {
        pattern: "I usually start by...",
        usage: "用于表达“我通常先从……开始”。适合描述步骤、方法和社交策略，比如解释如何认识新朋友、介绍学习方法、说明做事流程或分享经验。",
        examples: [
          "I usually start by saying hello.",
          "I usually start by asking where they are from.",
          "I usually start by asking about their major.",
          "I usually start by talking about the class.",
          "I usually start by asking a simple question."
        ],
        practiceTip: "这个句型特别适合克服“开口空白”。你可以准备几个固定开场：I usually start by asking about the course. / I usually start by asking if they are also new here."
      },
      {
        pattern: "That sounds interesting.",
        usage: "用于回应别人说的话，意思是“听起来很有意思”。这是非常重要的接话句，适合别人介绍专业、兴趣爱好、经历、旅行、课程或工作时使用。",
        examples: [
          "That sounds interesting.",
          "That sounds really interesting.",
          "That sounds like a great experience.",
          "That sounds like a lot of work.",
          "That sounds a bit challenging, but interesting."
        ],
        practiceTip: "不要听完别人说话只说 Oh. 你可以说：That sounds interesting. How did you get into that? 这样对话就能继续下去。"
      },
      {
        pattern: "How did you get into...?",
        usage: "用于问别人“你是怎么开始接触 / 喜欢上……的？”。这是非常自然的社交问题，适合聊专业、兴趣、运动、音乐、研究方向和工作经历。",
        examples: [
          "How did you get into engineering?",
          "How did you get into programming?",
          "How did you get into this research area?",
          "How did you get into playing guitar?",
          "How did you get into learning Chinese?"
        ],
        practiceTip: "这是一个非常好的 follow-up question。别人说：I'm studying robotics. 你可以接：That sounds interesting. How did you get into robotics? 这就是自然聊天。"
      },
      {
        pattern: "We should keep in touch.",
        usage: "用于表达“我们以后保持联系”。常用于初次认识后、活动结束后、聊天结束时，例如认识新同学、小组项目、学术活动、迎新活动或交换联系方式。",
        examples: [
          "We should keep in touch.",
          "We should keep in touch after the class.",
          "We should keep in touch during the semester.",
          "We should keep in touch if we take the same course.",
          "We should keep in touch and maybe study together sometime."
        ],
        practiceTip: "这个句型适合自然结束对话。例如：It was nice talking to you. We should keep in touch. 非常自然，也很实用。"
      }
    ],
    questions: [
      {
        question: "Are you good at starting conversations with new people?",
        answer: "To be honest, I'm not very good at starting conversations with new people. I sometimes feel nervous because I don't know what to say first. I usually start by asking simple questions, such as where they are from or what they are studying. I'm trying to be more open, especially before studying abroad. I think small conversations can help me make friends slowly."
      },
      {
        question: "How would you start a conversation with a new classmate?",
        answer: "I usually start by saying hello and asking if they are also new to the class. Then I might ask about their major or where they are from. If they tell me something about their background, I can say, \"That sounds interesting.\" After that, I can ask a follow-up question like, \"How did you get into this area?\" I think this is a simple and natural way to start a conversation."
      },
      {
        question: "Your classmate says, \"I'm studying robotics.\" How would you respond?",
        answer: "That sounds really interesting. I'm also interested in technology and intelligent manufacturing. How did you get into robotics? I've had some experience with programming and embedded systems, but I'm still learning more about this area. Maybe we can talk more about it sometime."
      },
      {
        question: "What makes socializing in English difficult for you?",
        answer: "I think socializing in English is difficult because I need to respond quickly. I'm not very good at small talk, especially when I meet someone for the first time. Sometimes I understand what they say, but I don't know how to continue the conversation. The best way to deal with it is to prepare some simple follow-up questions. I'll take it step by step."
      },
      {
        question: "How would you end a good conversation with a new friend?",
        answer: "If the conversation goes well, I would say something like, \"It was really nice talking to you.\" Then I might say, \"We should keep in touch.\" If we are in the same class, I could also say, \"Maybe we can study together sometime.\" I think this is a friendly and natural way to end a conversation. It also gives us a chance to talk again later."
      }
    ],
    trainingFocus: "今天重点练习“开始对话 → 接住对方 → 继续追问 → 自然结束”的社交流程：I'm not very good at starting conversations., I usually start by..., That sounds interesting., How did you get into...?, We should keep in touch. 可以组成真实场景：I'm not very good at starting conversations, but I usually start by asking simple questions. If someone tells me about their major, I can say, \"That sounds interesting.\" Then I can ask, \"How did you get into this area?\" If the conversation goes well, I can say, \"We should keep in touch.\" 今天重点练回应 + 追问。",
    quote: {
      text: "A friend may well be reckoned the masterpiece of nature.",
      author: "Ralph Waldo Emerson"
    },
    images: []

    // AI comic prompt ideas:
    // 1. A warm comic illustration of an international student starting a friendly conversation with a new classmate on campus, speech bubbles saying "That sounds interesting" and "How did you get into that?", soft colors, positive study abroad atmosphere.
    // 2. A lighthearted campus cartoon scene showing two students exchanging contact information after class, with notebooks, backpacks, and a small speech bubble saying "We should keep in touch", friendly and encouraging mood.
  },
  {
    day: 13,
    title: "Day 13 - 口语启动训练（留学生活方向）",
    theme: "学校办事、问路、预约、查询信息",
    patterns: [
      {
        pattern: "I'm here to...",
        usage: "用于说明“我来这里是为了……”。这是去学校办公室、银行、前台、医院时非常高频的开场句。",
        examples: [
          "I'm here to register for my course.",
          "I'm here to collect my student ID.",
          "I'm here to ask about my accommodation.",
          "I'm here to submit these documents.",
          "I'm here to check my appointment."
        ],
        practiceTip: "这个句型适合一进办公室就使用。不要一上来慌张地说很多句，先简单说明目的：Hi, I'm here to... 这就是清楚、自然、礼貌的开场。"
      },
      {
        pattern: "I'm looking for...",
        usage: "用于表达“我在找……”。常见于问路、找教室、找办公室、找文件、找课程信息或找某个负责人。",
        examples: [
          "I'm looking for the student services office.",
          "I'm looking for Room 305.",
          "I'm looking for the library entrance.",
          "I'm looking for information about course registration.",
          "I'm looking for someone who can help me with my visa documents."
        ],
        practiceTip: "这个句型非常适合问路和办事。比如：Excuse me, I'm looking for the student services office. 比直接说 Where is student office? 更自然。"
      },
      {
        pattern: "Is there a way to...?",
        usage: "用于询问“有没有办法……？”。这个句型非常实用，语气也很礼貌，适合解决问题、询问替代方案、系统无法登录、想改时间、想延期或想换课程。",
        examples: [
          "Is there a way to reset my password?",
          "Is there a way to change my appointment?",
          "Is there a way to access the system from home?",
          "Is there a way to submit the form online?",
          "Is there a way to contact the course coordinator?"
        ],
        practiceTip: "这个句型比直接说 Can I...? 更像是在寻找解决方案。例如：Is there a way to submit this document online? 非常适合学校行政场景。"
      },
      {
        pattern: "Would it be possible to...?",
        usage: "用于非常礼貌地请求“是否有可能……？”。适合半正式场合，尤其是给老师发邮件、和办公室沟通、请求改时间、请求延期或请求预约。",
        examples: [
          "Would it be possible to change the meeting time?",
          "Would it be possible to book an appointment for tomorrow?",
          "Would it be possible to get a copy of this document?",
          "Would it be possible to speak with someone from student services?",
          "Would it be possible to submit this a little later?"
        ],
        practiceTip: "这个句型比 Can I...? 更礼貌、更成熟。尤其对老师、工作人员说话时很好用：Would it be possible to meet sometime this week?"
      },
      {
        pattern: "Let me double-check...",
        usage: "用于表达“让我再确认一下……”。常见于确认时间、地点、文件、安排，以及避免误会。",
        examples: [
          "Let me double-check the time.",
          "Let me double-check the room number.",
          "Let me double-check my schedule.",
          "Let me double-check the deadline.",
          "Let me double-check whether I have the right document."
        ],
        practiceTip: "这个句型可以帮你争取思考时间。别人问 Are you free on Friday? 你可以说：Let me double-check my schedule. 这比沉默自然得多。"
      }
    ],
    questions: [
      {
        question: "You arrive at the student services office. What would you say?",
        answer: "Hi, I'm here to ask about my course registration. I'm looking for someone who can help me check my student account. Is there a way to confirm whether my registration is complete? Also, let me double-check whether I have all the required documents."
      },
      {
        question: "You cannot find your classroom. What would you ask?",
        answer: "Excuse me, I'm looking for Room 305. I have a class there, but I'm not familiar with this building. Is there a way to get there from here? Let me double-check the room number first. Yes, it says Room 305 on my timetable."
      },
      {
        question: "You want to change a meeting time with your professor. What would you say?",
        answer: "I'm sorry, but I may not be available at the original meeting time. Would it be possible to change the meeting time? I can check my schedule and suggest another time. Let me double-check my availability for this week."
      },
      {
        question: "You cannot access the university online system. What would you say to IT support?",
        answer: "Hi, I'm here to ask about the online system. I'm looking for help with my student account. Is there a way to reset my password or activate my account again? Let me double-check my student number if you need it."
      },
      {
        question: "You want to book an appointment with student services. What would you say?",
        answer: "Hi, I'm looking for an appointment with student services. Would it be possible to book a time for tomorrow or later this week? I'm here to ask about accommodation and registration. Let me double-check my schedule before confirming the time."
      }
    ],
    trainingFocus: "今天重点练习真实办事流程：说明目的 → 查询信息 → 请求解决方案 → 礼貌提出请求 → 再确认。重点掌握 I'm here to..., I'm looking for..., Is there a way to...?, Would it be possible to...?, Let me double-check...。可以组合成：Hi, I'm here to ask about my registration. I'm looking for someone who can help me check my account. Is there a way to confirm it online? Would it be possible to speak with a staff member? Let me double-check my student number. 英语口语不只是表达观点，更重要的是完成任务。",
    quote: {
      text: "Knowledge is power.",
      author: "Francis Bacon"
    },
    images: []

    // AI comic prompt ideas:
    // 1. A warm comic illustration of an international student at a university student services desk, politely asking for help with registration documents, with speech bubbles saying "I'm here to..." and "Would it be possible to...?", clean campus office setting.
    // 2. A friendly campus cartoon scene where a student is looking for Room 305 and asking directions, holding a timetable and phone map, soft colors, positive study abroad mood, clear visual storytelling.
  }
];

const STORAGE_KEYS = {
  theme: "englishSpeaking.theme",
  bookmarks: "englishSpeaking.bookmarks",
  completed: "englishSpeaking.completed",
  itemFavorites: "englishSpeaking.itemFavorites"
};

const state = {
  theme: "dark",
  bookmarks: new Set(),
  completed: new Set(),
  itemFavorites: new Set(),
  searchTerm: "",
  activeDay: null,
  favoriteTargetId: null,
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
  searchClear: document.getElementById("searchClear"),
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
  elements.searchClear.addEventListener("click", () => {
    elements.searchInput.value = "";
    commitSearch("");
  });
  elements.searchPrev.addEventListener("click", () => stepSearchResult(-1));
  elements.searchNext.addEventListener("click", () => stepSearchResult(1));

  document.addEventListener("click", (event) => {
    const bookmarkButton = event.target.closest("[data-bookmark-day]");
    if (bookmarkButton) {
      toggleBookmark(Number(bookmarkButton.dataset.bookmarkDay));
      return;
    }

    const favoriteButton = event.target.closest("[data-favorite-id]");
    if (favoriteButton) {
      toggleItemFavorite(favoriteButton.dataset.favoriteId);
      return;
    }

    const favoriteLink = event.target.closest("[data-select-favorite]");
    if (favoriteLink) {
      selectFavorite(favoriteLink.dataset.selectFavorite);
      return;
    }

    const answerButton = event.target.closest("[data-answer-toggle]");
    if (answerButton) {
      toggleAnswer(answerButton);
      return;
    }

    const completionButton = event.target.closest("[data-complete-day]");
    if (completionButton) {
      toggleCompleted(Number(completionButton.dataset.completeDay));
      return;
    }

    const dayStepButton = event.target.closest("[data-step-day]");
    if (dayStepButton) {
      stepDay(Number(dayStepButton.dataset.stepDay));
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

  try {
    const savedCompleted = JSON.parse(localStorage.getItem(STORAGE_KEYS.completed) || "[]");
    state.completed = new Set(savedCompleted.map(Number));
  } catch {
    state.completed = new Set();
  }

  try {
    const savedItemFavorites = JSON.parse(localStorage.getItem(STORAGE_KEYS.itemFavorites) || "[]");
    state.itemFavorites = new Set(savedItemFavorites);
  } catch {
    state.itemFavorites = new Set();
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

function toggleCompleted(day) {
  if (state.completed.has(day)) {
    state.completed.delete(day);
  } else {
    state.completed.add(day);
  }

  localStorage.setItem(STORAGE_KEYS.completed, JSON.stringify([...state.completed]));
  renderApp();
}

function toggleItemFavorite(id) {
  if (state.itemFavorites.has(id)) {
    state.itemFavorites.delete(id);
  } else {
    state.itemFavorites.add(id);
  }

  localStorage.setItem(STORAGE_KEYS.itemFavorites, JSON.stringify([...state.itemFavorites]));
  renderApp();
}

function renderApp() {
  const visibleLessons = getVisibleLessons();
  ensureActiveLesson(visibleLessons);
  updateSearchMatches();
  state.answerSearchHits = findAnswerSearchHits(visibleLessons);

  renderNavigation(visibleLessons);
  renderLessons(visibleLessons);
  updateBookmarkButtons();
  updateFavoriteButtons();
  updateSearchControls();
  scrollCurrentSearchMatchIntoView();
  scrollFavoriteTargetIntoView();
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
    const isCompleted = state.completed.has(lesson.day);
    const isActive = state.activeDay === lesson.day;

    return `
      <button class="nav-button ${isActive ? "active" : ""}" type="button" data-select-day="${lesson.day}">
        <span class="nav-day-label">
          <span class="completion-dot ${isCompleted ? "done" : ""}" aria-label="${isCompleted ? "Completed" : "Not completed"}">${isCompleted ? "✓" : ""}</span>
          Day ${lesson.day}
        </span>
        <span class="nav-badges">
          ${isBookmarked ? `<span class="bookmark-star" aria-label="Bookmarked">★</span>` : ""}
        </span>
      </button>
    `;
  }).join("") || `<p class="empty-small">No matching days.</p>`;

  const bookmarkedLessons = lessons.filter((lesson) => state.bookmarks.has(lesson.day));
  const favoriteItems = getFavoriteItems();
  const dayBookmarkHtml = bookmarkedLessons.map((lesson) => `
    <button class="bookmark-link" type="button" data-select-day="${lesson.day}">
      <span>Day ${lesson.day}</span>
      <span class="bookmark-star" aria-hidden="true">★</span>
    </button>
  `).join("");
  const itemFavoriteHtml = favoriteItems.map((item) => `
    <button class="bookmark-link item-favorite-link" type="button" data-select-favorite="${escapeAttribute(item.id)}">
      <span>
        <small>${escapeHtml(item.type)} · Day ${item.day}</small>
        ${escapeHtml(item.label)}
      </span>
      <span class="bookmark-star" aria-hidden="true">★</span>
    </button>
  `).join("");

  elements.bookmarkList.innerHTML = dayBookmarkHtml || itemFavoriteHtml
    ? `${dayBookmarkHtml}${itemFavoriteHtml}`
    : `<p class="empty-small">Bookmarked days and favorite sentences will appear here.</p>`;

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
  elements.lessonContainer.innerHTML = renderLessonCard(activeLesson, visibleLessons);
}

function renderLessonCard(lesson, visibleLessons = lessons) {
  const accent = getLessonAccent(lesson.day);
  const isCompleted = state.completed.has(lesson.day);
  const activeIndex = visibleLessons.findIndex((item) => item.day === lesson.day);
  const previousLesson = visibleLessons[activeIndex - 1];
  const nextLesson = visibleLessons[activeIndex + 1];

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

      <footer class="lesson-footer">
        <button class="day-step-button" type="button" data-step-day="-1" ${previousLesson ? "" : "disabled"}>
          Previous Day
        </button>
        <button class="complete-toggle ${isCompleted ? "done" : ""}" type="button" data-complete-day="${lesson.day}" aria-pressed="${isCompleted}">
          <span aria-hidden="true">${isCompleted ? "✓" : "○"}</span>
          <span>${isCompleted ? "Completed" : "Mark as Done"}</span>
        </button>
        <button class="day-step-button" type="button" data-step-day="1" ${nextLesson ? "" : "disabled"}>
          Next Day
        </button>
      </footer>
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
        ${patterns.map((item, patternIndex) => {
          const patternId = getPatternId(state.activeDay, patternIndex);
          return `
          <article class="pattern-card">
            <div class="pattern-topline" id="${patternId}">
              <strong class="sentence-pattern">${formatText(item.pattern, state.activeDay)}</strong>
              ${renderFavoriteButton(patternId, `Pattern: ${item.pattern}`)}
            </div>
            <p class="usage">${formatText(item.usage || "", state.activeDay)}</p>
            <ul class="example-list">
              ${(item.examples || []).map((example, index) => {
                const exampleId = getExampleId(state.activeDay, patternIndex, index);
                return `<li id="${exampleId}"><span class="example-number" aria-hidden="true">${index + 1}</span><span class="example-text">${formatText(example, state.activeDay)}</span>${renderFavoriteButton(exampleId, `Example: ${example}`)}</li>`;
              }).join("")}
            </ul>
            ${item.practiceTip ? `<p class="practice-tip">${formatText(item.practiceTip, state.activeDay)}</p>` : ""}
          </article>
        `;
        }).join("")}
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
      <h4 class="section-title questions-title" id="questions-title-${lesson.day}">Speaking Questions</h4>
      <div class="question-grid">
        ${questions.map((item, index) => renderQuestionCard(lesson.day, item, index)).join("")}
      </div>
    </section>
  `;
}

function renderQuestionCard(day, item, index) {
  const questionId = getQuestionId(day, index);
  const answerId = `answer-${questionId}`;
  const shouldOpen = state.answerSearchHits.has(questionId) || state.favoriteTargetId === answerId;

  return `
    <article class="question-card ${shouldOpen ? "search-hit" : ""}">
      <div class="question-topline" id="${questionId}">
        <p class="question-text"><span class="question-emoji" aria-hidden="true">💬</span>${formatText(item.question || "", day)}</p>
        <div class="question-actions">
          ${renderFavoriteButton(questionId, `Question: ${item.question || ""}`)}
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
      </div>
      <div class="answer-panel ${shouldOpen ? "open" : ""}" id="${answerId}">
        <div class="answer-content">
          <div class="answer-heading">
            <strong>Reference Answer</strong>
            ${renderFavoriteButton(answerId, `Answer: ${item.question || ""}`)}
          </div>
          <p class="answer-text"><span class="answer-emoji" aria-hidden="true">✨</span>${formatText(item.answer || "", day)}</p>
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
  state.favoriteTargetId = null;
  if (state.searchMatches.length) {
    const nextIndex = state.searchMatches.findIndex((match) => match.day === day);
    state.activeSearchIndex = nextIndex >= 0 ? nextIndex : state.activeSearchIndex;
  }
  renderApp();
}

function stepDay(direction) {
  const visibleLessons = getVisibleLessons();
  const currentIndex = visibleLessons.findIndex((lesson) => lesson.day === state.activeDay);
  const nextLesson = visibleLessons[currentIndex + direction];

  if (!nextLesson) {
    return;
  }

  selectDay(nextLesson.day);
}

function selectFavorite(id) {
  const item = getFavoriteItems().find((favorite) => favorite.id === id);
  if (!item) {
    return;
  }

  state.activeDay = item.day;
  state.favoriteTargetId = id;
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

function updateFavoriteButtons() {
  document.querySelectorAll("[data-favorite-id]").forEach((button) => {
    const id = button.dataset.favoriteId;
    const isFavorite = state.itemFavorites.has(id);
    button.setAttribute("aria-pressed", String(isFavorite));
    button.innerHTML = `<span aria-hidden="true">${isFavorite ? "★" : "☆"}</span>`;
  });
}

function updateSearchControls() {
  const total = state.searchMatches.length;
  const current = total ? state.activeSearchIndex + 1 : 0;
  const dayLabel = total && state.activeDay ? ` · Day ${state.activeDay}` : "";
  elements.searchCount.textContent = `${current} / ${total}${dayLabel}`;
  elements.searchClear.disabled = !state.searchTerm;
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

function scrollFavoriteTargetIntoView() {
  if (!state.favoriteTargetId) {
    return;
  }

  requestAnimationFrame(() => {
    const target = document.getElementById(state.favoriteTargetId);
    target?.scrollIntoView({ behavior: "smooth", block: "center" });
    target?.classList.add("favorite-target");
    window.setTimeout?.(() => target?.classList.remove("favorite-target"), 1200);
    state.favoriteTargetId = null;
  });
}

function getQuestionId(day, index) {
  return `day-${day}-q-${index}`;
}

function getPatternId(day, index) {
  return `day-${day}-pattern-${index}`;
}

function getExampleId(day, patternIndex, exampleIndex) {
  return `day-${day}-pattern-${patternIndex}-example-${exampleIndex}`;
}

function renderFavoriteButton(id, label) {
  const isFavorite = state.itemFavorites.has(id);
  return `
    <button
      class="item-favorite-toggle"
      type="button"
      data-favorite-id="${escapeAttribute(id)}"
      aria-label="${escapeAttribute(isFavorite ? `Remove favorite ${label}` : `Add favorite ${label}`)}"
      aria-pressed="${isFavorite}"
      title="${escapeAttribute(isFavorite ? "Remove favorite" : "Add favorite")}"
    >
      <span aria-hidden="true">${isFavorite ? "★" : "☆"}</span>
    </button>
  `;
}

function getFavoriteItems() {
  const items = [];

  lessons.forEach((lesson) => {
    lesson.patterns?.forEach((pattern, patternIndex) => {
      const patternId = getPatternId(lesson.day, patternIndex);
      if (state.itemFavorites.has(patternId)) {
        items.push({
          id: patternId,
          day: lesson.day,
          type: "Pattern",
          label: pattern.pattern
        });
      }

      pattern.examples?.forEach((example, exampleIndex) => {
        const exampleId = getExampleId(lesson.day, patternIndex, exampleIndex);
        if (state.itemFavorites.has(exampleId)) {
          items.push({
            id: exampleId,
            day: lesson.day,
            type: "Example",
            label: example
          });
        }
      });
    });

    lesson.questions?.forEach((question, questionIndex) => {
      const questionId = getQuestionId(lesson.day, questionIndex);
      if (state.itemFavorites.has(questionId)) {
        items.push({
          id: questionId,
          day: lesson.day,
          type: "Question",
          label: question.question
        });
      }

      const answerId = `answer-${questionId}`;
      if (state.itemFavorites.has(answerId)) {
        items.push({
          id: answerId,
          day: lesson.day,
          type: "Answer",
          label: question.question
        });
      }
    });
  });

  return items;
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
