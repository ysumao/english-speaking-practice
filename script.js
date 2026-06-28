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
  },
  {
    day: 14,
    title: "Day 14 - 留学生活口语训练",
    theme: "宿舍、租房与设备报修",
    patterns: [
      {
        pattern: "There seems to be a problem with...",
        usage: "用于表达“……好像出了点问题”。它比直接说 It's broken 更谨慎、自然，因为你可能还不知道具体原因。适合向宿舍前台报修、联系房东或物业、报告网络/设备/系统故障。",
        examples: [
          "There seems to be a problem with the heating.",
          "There seems to be a problem with the Wi-Fi.",
          "There seems to be a problem with the kitchen sink.",
          "There seems to be a problem with my room key.",
          "There seems to be a problem with the washing machine."
        ],
        practiceTip: "看到身边的设备，快速替换最后的名词：There seems to be a problem with the door. / There seems to be a problem with the light."
      },
      {
        pattern: "...isn't working properly.",
        usage: "用于表达“……不能正常工作”。这个句型比 It doesn't work 信息更准确：设备可能还能运行，但功能不正常。适合电器、门锁、房卡、网络、学校系统等异常场景。",
        examples: [
          "The shower isn't working properly.",
          "The air conditioner isn't working properly.",
          "My student card isn't working properly.",
          "The washing machine isn't working properly.",
          "The university website isn't working properly."
        ],
        practiceTip: "练习“设备名称 + isn't working properly”。例如：The printer isn't working properly. / The microwave isn't working properly. 注意复数主语要说：The lights aren't working properly."
      },
      {
        pattern: "Could someone take a look at it?",
        usage: "用于表达“能请人来看一下吗？”这是请求工作人员、维修人员或技术人员检查问题的自然表达。",
        examples: [
          "Could someone take a look at it today?",
          "Could someone take a look at the shower?",
          "Could someone take a look at my room key?",
          "Could someone take a look at the heating system?",
          "Could someone take a look at it as soon as possible?"
        ],
        practiceTip: "完整表达可以是：The heater isn't working properly. Could someone take a look at it? 练习时不要只报告问题，还要主动提出请求。"
      },
      {
        pattern: "How long do you think it will take to...?",
        usage: "用于询问“你觉得做……大约需要多长时间？”既可以询问维修时间，也可以询问办手续、步行或完成任务所需的时间。",
        examples: [
          "How long do you think it will take to fix it?",
          "How long do you think it will take to replace the lock?",
          "How long do you think it will take to process my application?",
          "How long do you think it will take to walk there?",
          "How long do you think it will take to restore the internet connection?"
        ],
        practiceTip: "重点掌握：How long will it take to + 动词？例如：How long will it take to repair the washing machine? 加入 do you think 后，语气通常更自然、柔和。"
      },
      {
        pattern: "Do I need to be there when...?",
        usage: "用于表达“当……的时候，我需要在场吗？”报修、送货、房屋检查或安装设备时非常实用。",
        examples: [
          "Do I need to be there when the technician arrives?",
          "Do I need to be there when they repair the shower?",
          "Do I need to be there when the package is delivered?",
          "Do I need to be there when the landlord inspects the room?",
          "Do I need to be there when the new router is installed?"
        ],
        practiceTip: "将 when 后面的情景进行替换：Do I need to be there when they fix it? / Do I need to be there when the delivery arrives?"
      }
    ],
    questions: [
      {
        question: "The shower in your room has stopped working properly. What would you say to the accommodation staff?",
        answer: "Hi, there seems to be a problem with the shower in my room. It isn't working properly, and the water stays cold. Could someone take a look at it today? How long do you think it will take to fix it? Also, do I need to be there when the technician arrives?"
      },
      {
        question: "The Wi-Fi in your accommodation is very unstable. How would you report it?",
        answer: "There seems to be a problem with the Wi-Fi in my room. It connects for a few minutes, but then it stops working. Could someone take a look at it? I have an online meeting tomorrow, so I need a stable connection. How long do you think it will take to solve the problem?"
      },
      {
        question: "Your room key does not always open the door. What would you say at reception?",
        answer: "Hi, my room key isn't working properly. Sometimes it opens the door, but sometimes it doesn't. There seems to be a problem with the card or the lock. Could someone take a look at it? Do I need to bring any identification if the key has to be replaced?"
      },
      {
        question: "A technician is coming to repair your washing machine. What information would you confirm?",
        answer: "Do I need to be there when the technician arrives? I have a class in the morning, so I may not be in my room. How long do you think it will take to repair the washing machine? Also, will the technician contact me before arriving? I'd like to make sure someone can access the laundry room."
      },
      {
        question: "The heating in your room is not working on a cold evening. How would you ask for urgent help?",
        answer: "There seems to be a problem with the heating in my room. It isn't working properly, and the room is getting very cold. Could someone take a look at it as soon as possible? How long do you think it will take to fix it? Is there a temporary heater I can use tonight?"
      }
    ],
    trainingFocus: "今天重点练习完整报修流程：清楚说明故障 → 请求检查 → 询问维修时间 → 确认后续安排。重点掌握 There seems to be a problem with..., ...isn't working properly., Could someone take a look at it?, How long do you think it will take to...?, Do I need to be there when...? 今天至少选两种设备进行替换练习，例如 shower, Wi-Fi, washing machine, heater, room key。不要背整段答案，要练习快速替换故障对象和具体情况。",
    quote: {
      text: "Well done is better than well said.",
      author: "Benjamin Franklin"
    },
    images: []

    // AI comic prompt ideas:
    // 1. A warm comic illustration of an international student reporting a dorm maintenance issue at the accommodation reception, holding a phone with a photo of a broken shower, speech bubble saying "Could someone take a look at it?", clean cozy dorm setting.
    // 2. A friendly study-abroad cartoon scene showing a technician fixing Wi-Fi or heating in a student room while the student politely confirms the repair time, soft colors, practical daily life mood.
  },
  {
    day: 15,
    title: "Day 15 - 餐厅与咖啡店高频口语",
    theme: "点餐、调整餐品、结账和打包",
    patterns: [
      {
        pattern: "Could I get...?",
        usage: "用于表达“我可以要……吗？”这是餐厅、咖啡店和商店里非常自然的请求方式。这里的 get 不是“去拿”，而是“要、点”。",
        examples: [
          "Could I get a cup of coffee, please?",
          "Could I get the chicken sandwich?",
          "Could I get some extra napkins?",
          "Could I get a glass of water?",
          "Could I get the bill, please?"
        ],
        practiceTip: "练习：Could I get + 食物、饮料或物品？注意加上 please，语气会更礼貌。"
      },
      {
        pattern: "What does this come with?",
        usage: "用于询问“这个里面配有什么？”适合询问套餐、主食或餐点附带哪些东西，也可以用于租房、酒店和购物场景。",
        examples: [
          "What does this come with?",
          "What does the breakfast set come with?",
          "Does this come with chips?",
          "Does the meal come with a drink?",
          "Does the room come with free Wi-Fi?"
        ],
        practiceTip: "掌握两个结构：What does this come with? / Does this come with + 名词？第二个结构也可以用于租房、酒店和购物。"
      },
      {
        pattern: "Could I have... instead of...?",
        usage: "用于表达“我可以用……替换……吗？”这是修改餐品或更换选项时非常实用的句型，也可以用于更换课程、时间或房间。",
        examples: [
          "Could I have salad instead of chips?",
          "Could I have tea instead of coffee?",
          "Could I have rice instead of bread?",
          "Could I have the sauce on the side instead?",
          "Could I have a window seat instead of an aisle seat?"
        ],
        practiceTip: "基础结构是：Could I have A instead of B? 也可以只把 instead 放在句末：Could I have water instead?"
      },
      {
        pattern: "Could we split the bill?",
        usage: "用于表达“我们可以分开付账吗？”和同学、朋友外出吃饭时非常高频，适合各自支付、平均分账或确认付款方式。",
        examples: [
          "Could we split the bill?",
          "Could we pay separately?",
          "Could we split the bill between three people?",
          "Can we each pay for our own meal?",
          "Shall we split the bill evenly?"
        ],
        practiceTip: "注意两种情况：pay separately 表示各付各的；split the bill evenly 表示平均分账。在实际结账前最好先问清楚。"
      },
      {
        pattern: "Can I get this to go?",
        usage: "用于表达“这个可以帮我打包带走吗？”在餐厅吃不完，或者直接购买外带餐品时使用。在澳大利亚等地，takeaway 也很常见。",
        examples: [
          "Can I get this to go?",
          "Could I get my coffee to go?",
          "Can you pack this up for me?",
          "Could I have a takeaway container?",
          "I'd like to take the rest home."
        ],
        practiceTip: "如果被问 Is this for here or takeaway? 可以回答：Takeaway, please. 也可以说 Can I get this to go? / Could I have a takeaway container?"
      }
    ],
    questions: [
      {
        question: "You want to order a coffee and a sandwich. What would you say?",
        answer: "Hi, could I get a flat white and a chicken sandwich, please? What does the sandwich come with? If it normally comes with chips, could I have salad instead? That's everything, thank you."
      },
      {
        question: "You are not sure what is included in a lunch set. What would you ask?",
        answer: "Excuse me, what does the lunch set come with? Does it include a drink? Could I have tea instead of a soft drink? Also, is the soup included in the price?"
      },
      {
        question: "You are eating with two classmates and want to pay separately. What would you say?",
        answer: "Excuse me, could we split the bill between three people? We would each like to pay for our own meal. Can we pay separately by card? I'll pay for the coffee and the pasta."
      },
      {
        question: "You cannot finish your meal. How would you ask to take it home?",
        answer: "Excuse me, I can't finish this. Can I get it to go? Could I have a takeaway container, please? I'd like to take the rest home. Thank you."
      },
      {
        question: "Your meal comes with chips, but you want rice. What would you say?",
        answer: "Could I have rice instead of chips, please? I don't mind paying a little extra if necessary. Also, could I get the sauce on the side? And could I have a glass of water, please?"
      }
    ],
    trainingFocus: "今天重点练习完整的餐厅交流顺序：Could I get...?, What does this come with?, Could I have A instead of B?, Could we split the bill?, Can I get this to go? 模拟点餐时，至少替换三组内容：coffee / tea / juice, chips / rice / salad, sandwich / pasta / chicken。今天不要只朗读，请关掉参考答案，模拟一次从点餐到结账的完整对话。",
    quote: {
      text: "The secret of success is constancy of purpose.",
      author: "Benjamin Disraeli"
    },
    images: []

    // AI comic prompt ideas:
    // 1. A warm comic illustration of an international student ordering coffee and a sandwich at a cozy campus cafe, politely asking "Could I get...?" and "What does this come with?", soft lighting, friendly barista, study abroad daily life.
    // 2. A lighthearted restaurant cartoon scene where three international students split the bill and pack leftovers to go, with speech bubbles saying "Could we split the bill?" and "Can I get this to go?", cheerful social mood.
  },
  {
    day: 16,
    title: "Day 16 - 超市、商店与退换货高频口语",
    theme: "寻找商品、询问尺寸、确认折扣、付款和退换货",
    patterns: [
      {
        pattern: "Where can I find...?",
        usage: "用于表达“我在哪里可以找到……？”常用于在超市寻找商品、在商场寻找柜台、在图书馆寻找书籍，或在校园里寻找设施。",
        examples: [
          "Where can I find the milk?",
          "Where can I find cleaning products?",
          "Where can I find phone chargers?",
          "Where can I find the customer service desk?",
          "Where can I find books on engineering?"
        ],
        practiceTip: "看到购物清单上的物品，直接套用：Excuse me, where can I find...? 相比只说商品名称，这样更完整、更礼貌。"
      },
      {
        pattern: "Do you have this in...?",
        usage: "用于表达“这个有……的吗？”常用于询问不同的尺寸、颜色、款式或数量，尤其适合购买衣服、鞋子或寻找替代规格。",
        examples: [
          "Do you have this in a larger size?",
          "Do you have this in black?",
          "Do you have this in a different colour?",
          "Do you have these shoes in size nine?",
          "Do you have this in a smaller pack?"
        ],
        practiceTip: "重点练习三个高频替换：in a larger size, in black, in size nine。注意询问鞋子时通常使用复数：Do you have these in size nine?"
      },
      {
        pattern: "Is this on sale?",
        usage: "用于表达“这个正在打折吗？”适合商品标签不清楚、确认促销价格、询问优惠是否仍然有效，或确认折扣适用范围。",
        examples: [
          "Is this on sale?",
          "Is this included in the promotion?",
          "Is there a discount on this item?",
          "Is the discount already included in the price?",
          "Does the student discount apply to this?"
        ],
        practiceTip: "注意 on sale 是正在打折，for sale 是正在出售。所以“这个打折吗”要说：Is this on sale?"
      },
      {
        pattern: "Can I pay by...?",
        usage: "用于表达“我可以用……付款吗？”常用于超市、商店、餐厅结账，询问是否接受现金、银行卡或手机支付。",
        examples: [
          "Can I pay by card?",
          "Can I pay in cash?",
          "Can I pay by contactless?",
          "Can I pay with my phone?",
          "Can I pay for these separately?"
        ],
        practiceTip: "常见搭配：pay by card, pay in cash, pay with my phone。在澳大利亚，如果工作人员问 Card or cash? 可以回答：Card, please."
      },
      {
        pattern: "I'd like to return/exchange this.",
        usage: "用于表达“我想退掉 / 更换这个商品”。适合商品尺寸不合适、产品损坏或无法使用、买错商品、请求退款或更换。",
        examples: [
          "I'd like to return this.",
          "I'd like to exchange this for a larger size.",
          "I'd like to return this and get a refund.",
          "I'd like to exchange these shoes for another pair.",
          "I'd like to return this because it doesn't work properly."
        ],
        practiceTip: "return 表示退货，exchange 表示换货。完整表达可以是：I'd like to return this because it doesn't fit. fit 表示尺寸合适，例如 It doesn't fit. / It's too small. / It's too large."
      }
    ],
    questions: [
      {
        question: "You cannot find rice in a supermarket. What would you ask?",
        answer: "Excuse me, where can I find the rice? I checked the food section, but I couldn't see it. Is it in a different aisle? Also, is there a particular brand you would recommend?"
      },
      {
        question: "You like a jacket, but it is too small. What would you say?",
        answer: "Excuse me, do you have this jacket in a larger size? This one is a little too small for me. Do you have it in black as well? I'd like to try both sizes before deciding."
      },
      {
        question: "A price label is unclear. How would you confirm the discount?",
        answer: "Excuse me, is this on sale? The sign says there is a discount, but I'm not sure whether it applies to this item. Is the discount already included in the price? Does the student discount apply as well?"
      },
      {
        question: "You want to pay for your groceries using your phone. What would you say?",
        answer: "Can I pay with my phone? I don't have much cash with me. If mobile payment isn't available, I can pay by card. Could I also have a receipt, please?"
      },
      {
        question: "You bought a charger, but it does not work. What would you say at customer service?",
        answer: "Hi, I'd like to return this charger because it doesn't work properly. I bought it two days ago, and I still have the receipt. I'd like to get a refund, if possible. Alternatively, I could exchange it for another one."
      }
    ],
    trainingFocus: "今天重点练习完整购物流程：Where can I find...?, Do you have this in...?, Is this on sale?, Can I pay by...?, I'd like to return or exchange this. 请模拟三个场景，每个说 30 秒：在超市寻找商品、在服装店购买衣服、到客服柜台退换商品。尤其要练熟：Excuse me, where can I find...? 和 I'd like to return this because...，这两句在国外生活中非常实用。",
    quote: {
      text: "Practice makes perfect.",
      author: ""
    },
    images: []

    // AI comic prompt ideas:
    // 1. A warm comic illustration of an international student asking a supermarket staff member where to find rice and cleaning products, with a shopping basket and clear aisle signs, speech bubble saying "Where can I find...?", friendly daily life mood.
    // 2. A lighthearted store customer service cartoon scene where a student returns a broken phone charger with a receipt, politely saying "I'd like to return this because it doesn't work properly", clean shop setting, positive tone.
  },
  {
    day: 17,
    title: "Day 17 - 公共交通与问路高频口语",
    theme: "乘坐公交、火车或地铁，确认路线、换乘和下车地点",
    patterns: [
      {
        pattern: "Which line should I take to...?",
        usage: "用于表达“去……我应该坐哪条线路？”适合询问地铁或火车线路、不确定应该乘坐哪趟公交、向工作人员或当地人问路线、在车站规划行程。",
        examples: [
          "Which line should I take to the city centre?",
          "Which train should I take to the airport?",
          "Which bus should I take to the university?",
          "Which line should I take to get to Central Station?",
          "Which platform should I go to for the express train?"
        ],
        practiceTip: "重点替换目的地：Which line should I take to + 地点？问公交或火车时，也可以直接替换 line：Which bus should I take? / Which train should I take?"
      },
      {
        pattern: "Does this bus/train stop at...?",
        usage: "用于表达“这辆公交 / 这趟火车会在……停吗？”适合上车前确认路线、不确定车辆是否经过目的地、向司机/工作人员/乘客确认、避免坐错方向。",
        examples: [
          "Does this bus stop at the university?",
          "Does this train stop at Central Station?",
          "Does this service stop near the airport?",
          "Does this bus stop outside the library?",
          "Does this train stop at every station?"
        ],
        practiceTip: "上车前不要只问 University? 要说完整：Excuse me, does this bus stop at the university?"
      },
      {
        pattern: "How often does... run?",
        usage: "用于表达“……多久一班？”这里的 run 指交通工具按照线路运行。适合询问公交、火车或机场班车班次，错过一班车后询问下一班，或确认周末/夜间服务频率。",
        examples: [
          "How often does this bus run?",
          "How often do the trains run on weekends?",
          "How often does the airport shuttle run?",
          "How often does this service run after 8 p.m.?",
          "How often do buses run from here to the campus?"
        ],
        practiceTip: "注意主语单复数：How often does this bus run? / How often do the buses run?"
      },
      {
        pattern: "Where do I need to change?",
        usage: "用于表达“我需要在哪里换乘？”适合路线需要换乘、不确定在哪一站换车、询问应该换乘哪条线路或查看路线后再次确认。",
        examples: [
          "Where do I need to change?",
          "Where do I need to change trains?",
          "Do I need to change at Central Station?",
          "Which line do I change to?",
          "How many times do I need to change?"
        ],
        practiceTip: "把路线信息问完整：Where do I need to change, and which line should I take next? change trains/buses 表示换乘，不是“更换一辆坏掉的车”。"
      },
      {
        pattern: "Could you let me know when we get to...?",
        usage: "用于表达“到……的时候，可以提醒我一下吗？”这是担心坐过站时非常实用的请求，适合第一次乘坐某条线路、听不清报站、不熟悉周围环境时使用。",
        examples: [
          "Could you let me know when we get to the university?",
          "Could you let me know when we reach Central Station?",
          "Could you tell me when I need to get off?",
          "Could you let me know when we're close to the airport?",
          "Could you tell me which stop I should get off at?"
        ],
        practiceTip: "完整表达可以是：I'm new here. Could you let me know when we get to the university? 这是一句非常实用的“防止坐过站”表达。"
      }
    ],
    questions: [
      {
        question: "You want to travel from your accommodation to the university. What would you ask?",
        answer: "Excuse me, which bus should I take to the university? Does this bus stop near the main entrance? How often does it run in the morning? Also, could you tell me which stop I should get off at?"
      },
      {
        question: "You are at a train station and need to travel to the airport. What would you ask the staff?",
        answer: "Excuse me, which train should I take to the airport? Does the next train go there directly, or do I need to change? If I need to change, where should I do that? Which platform does the train leave from?"
      },
      {
        question: "You have just missed a bus. How would you ask about the next one?",
        answer: "Excuse me, I've just missed the bus to the city centre. How often does this bus run? Do you know when the next one will arrive? Also, does it stop near Central Station?"
      },
      {
        question: "You are on an unfamiliar bus and are worried about missing your stop. What would you say?",
        answer: "Excuse me, I'm new to this area. Could you let me know when we get to the university? I'm not sure which stop I should get off at. Is it far from here?"
      },
      {
        question: "Your journey requires two trains. How would you confirm the route?",
        answer: "Which train should I take first? Where do I need to change trains? Do I change at Central Station? After that, which line should I take? Does the second train stop at the university station?"
      }
    ],
    trainingFocus: "今天重点练习完整乘车流程：Which line should I take to...?, Does this train stop at...?, How often does it run?, Where do I need to change?, Could you let me know when we get to...? 请分别模拟三个场景：从住处前往学校、从学校前往市中心、从市中心前往机场。每个场景连续说 30 秒，不要只读单句。",
    quote: {
      text: "The journey of a lifetime starts with the turning of a page.",
      author: "Rachel Anders"
    },
    images: []

    // AI comic prompt ideas:
    // 1. A warm comic illustration of an international student asking for directions at a train station, looking at a route map and saying "Which line should I take to the university?", bright station signs, calm helpful atmosphere.
    // 2. A friendly bus cartoon scene where a student politely asks a passenger or driver "Could you let me know when we get to the university?", city bus interior, soft colors, study abroad daily life.
  },
  {
    day: 18,
    title: "Day 18 - 看病、药店与身体不适高频口语",
    theme: "身体不舒服、预约看医生、去药店买药、询问用药方式",
    patterns: [
      {
        pattern: "I've been feeling...",
        usage: "用于表达“我最近一直感觉……”，适合看医生时说明持续性的症状、和朋友说自己不舒服，或解释自己为什么想休息。",
        examples: [
          "I've been feeling tired recently.",
          "I've been feeling dizzy since this morning.",
          "I've been feeling sick for two days.",
          "I've been feeling a bit weak lately.",
          "I've been feeling unwell since last night."
        ],
        practiceTip: "重点练习：I've been feeling + adjective + time expression. 例如：I've been feeling tired for a few days."
      },
      {
        pattern: "I have a pain in...",
        usage: "用于表达“我……部位疼”，这是向医生描述身体疼痛时非常直接、清楚的句型，适合看医生、去药店咨询或说明具体疼痛位置。",
        examples: [
          "I have a pain in my stomach.",
          "I have a pain in my back.",
          "I have a pain in my chest.",
          "I have a pain in my left knee.",
          "I have a pain in my lower back."
        ],
        practiceTip: "注意身体部位前通常加 my，例如 my stomach, my back, my throat, my knee。也可以说 My stomach hurts. / My back hurts.，但今天重点练 I have a pain in..."
      },
      {
        pattern: "It hurts when I...",
        usage: "用于表达“当我……的时候会疼”。这个句型比单纯说疼更具体，适合描述动作引发的疼痛、咳嗽/吞咽/走路时不适或运动损伤。",
        examples: [
          "It hurts when I swallow.",
          "It hurts when I walk.",
          "It hurts when I cough.",
          "It hurts when I move my arm.",
          "It hurts when I press here."
        ],
        practiceTip: "根据症状替换动作。例如喉咙痛：It hurts when I swallow. 膝盖痛：It hurts when I walk."
      },
      {
        pattern: "Is this available over the counter?",
        usage: "用于询问“这个可以直接买到吗？需要处方吗？”over the counter 指不需要医生处方、可以在药店直接购买。",
        examples: [
          "Is this available over the counter?",
          "Is this medicine available over the counter?",
          "Is allergy medicine available over the counter?",
          "Is pain relief available over the counter?",
          "Do I need a prescription for this?"
        ],
        practiceTip: "记住两个关键词：over the counter = 非处方；prescription = 处方。药店里也可以直接问：Do I need a prescription for this?"
      },
      {
        pattern: "How often should I take this?",
        usage: "用于表达“这个药我应该多久吃一次？”适合药店咨询用药、医生开药后确认剂量、询问一天几次或确认饭前饭后。",
        examples: [
          "How often should I take this?",
          "How often should I take these tablets?",
          "Should I take this before or after meals?",
          "How many times a day should I take it?",
          "Should I take it with water?"
        ],
        practiceTip: "重点掌握：How often should I take this? / How many times a day should I take it? / Should I take this before or after meals?"
      }
    ],
    questions: [
      {
        question: "You feel unwell and want to describe your symptoms to a doctor. What would you say?",
        answer: "I've been feeling unwell since last night. I also have a pain in my stomach. It hurts when I move around too much. I'm not sure if it is something serious, but I wanted to get it checked. I haven't taken any medicine yet."
      },
      {
        question: "You have a sore throat and go to a pharmacy. What would you say?",
        answer: "Hi, I've been feeling sick since yesterday, and my throat is quite sore. It hurts when I swallow. Is there anything available over the counter for a sore throat? Also, how often should I take it?"
      },
      {
        question: "You hurt your knee while walking. How would you explain it?",
        answer: "I have a pain in my left knee. It started this morning after I walked for a long time. It hurts when I go up and down stairs. I can still walk, but it feels uncomfortable. I'm not sure if I need to see a doctor."
      },
      {
        question: "You want to buy medicine for a headache. What would you ask the pharmacist?",
        answer: "Hi, I've been having a headache since this afternoon. Is there any pain relief available over the counter? Do I need a prescription for this medicine? How often should I take it, and should I take it after meals?"
      },
      {
        question: "You are not sure how to take the medicine. What would you ask?",
        answer: "Could you tell me how often I should take this? Should I take it before or after meals? Also, how many tablets should I take each time? I want to make sure I use it correctly."
      }
    ],
    trainingFocus: "今天重点练习完整的看病 / 买药流程：I've been feeling..., I have a pain in..., It hurts when I..., Is this available over the counter?, How often should I take this? 至少替换三个症状，例如 headache, sore throat, stomach pain, back pain, knee pain。重点不是说得高级，而是说得清楚、具体、可理解。",
    quote: {
      text: "An ounce of prevention is worth a pound of cure.",
      author: "Benjamin Franklin"
    },
    images: []

    // AI comic prompt ideas:
    // 1. A warm comic illustration of an international student explaining a sore throat to a friendly pharmacist, with speech bubbles saying "It hurts when I swallow" and "Is this available over the counter?", clean modern pharmacy, reassuring mood.
    // 2. A gentle clinic cartoon scene where a student describes knee pain to a doctor using "I've been feeling..." and "It hurts when I walk", clear body-language storytelling, soft colors, calm supportive atmosphere.
  },
  {
    day: 19,
    title: "Day 19 - 机场、入境与行李高频口语",
    theme: "机场值机、转机、入境、海关、行李丢失",
    patterns: [
      {
        pattern: "I'm travelling for...",
        usage: "用于表达“我这次出行是为了……”，适合入境、值机或签证检查时说明出行目的，也可以用于介绍自己是来学习、旅游或参加会议。",
        examples: [
          "I'm travelling for study.",
          "I'm travelling for university.",
          "I'm travelling for a research programme.",
          "I'm travelling for a conference.",
          "I'm travelling for a long-term study programme."
        ],
        practiceTip: "入境时尽量简洁，不要说得太复杂：I'm travelling for study. I'll be studying at the university."
      },
      {
        pattern: "I'll be staying at...",
        usage: "用于表达“我会住在……”，适合入境官询问住宿地址、酒店或宿舍登记、打车时说明目的地，或和学校工作人员确认住处。",
        examples: [
          "I'll be staying at the university accommodation.",
          "I'll be staying at a student residence.",
          "I'll be staying at this address.",
          "I'll be staying with a friend for the first few days.",
          "I'll be staying near the campus."
        ],
        practiceTip: "提前准备好自己的英文地址。练习时可以说：I'll be staying at this address. Here is the confirmation email."
      },
      {
        pattern: "I have a connecting flight to...",
        usage: "用于表达“我还有一班转机去……”，适合向机场工作人员说明要转机、航班延误时说明后续行程、询问转机登机口或确认行李中转。",
        examples: [
          "I have a connecting flight to Sydney.",
          "I have a connecting flight to Kuala Lumpur.",
          "I have a connecting flight in two hours.",
          "I have a connecting flight, and I'm worried I might miss it.",
          "I have a connecting flight, but I'm not sure where to go."
        ],
        practiceTip: "如果时间很赶，可以说：I have a connecting flight in one hour. Could you tell me where to go?"
      },
      {
        pattern: "My baggage hasn't arrived yet.",
        usage: "用于表达“我的行李还没有到”，是行李丢失或延误时必须会说的句型，适合向航空公司报失和询问行李追踪。",
        examples: [
          "My baggage hasn't arrived yet.",
          "My suitcase hasn't arrived yet.",
          "My checked baggage hasn't arrived yet.",
          "My baggage is missing.",
          "My baggage seems to be delayed."
        ],
        practiceTip: "baggage 和 luggage 都可以表示行李；checked baggage 指托运行李。完整表达：My checked baggage hasn't arrived yet. Here is my baggage claim tag."
      },
      {
        pattern: "I need to declare...",
        usage: "用于表达“我需要申报……”，适合海关申报食品、药品、大量现金或特殊物品。否定形式 I don't have anything to declare. 也很重要。",
        examples: [
          "I need to declare some food.",
          "I need to declare this medicine.",
          "I need to declare some cash.",
          "I'm not sure if I need to declare this.",
          "I don't have anything to declare."
        ],
        practiceTip: "如果不确定，不要猜测，可以问：I'm not sure if I need to declare this."
      }
    ],
    questions: [
      {
        question: "The immigration officer asks why you are entering the country. What would you say?",
        answer: "I'm travelling for study. I'll be studying at a university here. I'll be staying at the university accommodation near the campus. Here is my admission letter and accommodation confirmation. I plan to stay for the duration of my programme."
      },
      {
        question: "You are at the airport and need to catch another flight. What would you say to airport staff?",
        answer: "Excuse me, I have a connecting flight to Sydney. The flight leaves in about one hour, and I'm not sure where to go. Could you tell me which terminal I need? Also, do I need to go through security again?"
      },
      {
        question: "Your checked baggage has not appeared at the baggage claim area. What would you say?",
        answer: "Hi, my checked baggage hasn't arrived yet. I've been waiting at the baggage claim area, but I can't see my suitcase. Here is my baggage claim tag. Could you help me check where it is?"
      },
      {
        question: "Customs asks whether you have anything to declare. What would you say?",
        answer: "I'm not sure if I need to declare this medicine. It is for personal use, and I have the original packaging with me. I also have a copy of the prescription if needed. Could you let me know if I need to declare it?"
      },
      {
        question: "A taxi driver asks where you are going after arriving at the airport. What would you say?",
        answer: "I'll be staying at a student residence near the university. Here is the address. It's my first time going there, so I'm not familiar with the area. Could you take me to this address, please?"
      }
    ],
    trainingFocus: "今天重点练习完整机场流程：I'm travelling for..., I'll be staying at..., I have a connecting flight to..., My baggage hasn't arrived yet., I need to declare...。重点模拟两类场景：入境官问答，包括目的、学校、住址和停留时间；行李问题处理，包括说明行李没到、提供行李牌和留下联系方式。",
    quote: {
      text: "Fortune favors the prepared mind.",
      author: "Louis Pasteur"
    },
    images: []

    // AI comic prompt ideas:
    // 1. A warm comic illustration of an international student speaking calmly with an immigration officer, holding an admission letter and accommodation confirmation, speech bubbles saying "I'm travelling for study" and "I'll be staying at...", clear modern airport setting.
    // 2. A helpful airport-service cartoon scene where a student reports delayed checked baggage using a baggage claim tag, with a connecting-flight board in the background, soft colors, practical and reassuring mood.
  },
  {
    day: 20,
    title: "Day 20 - 银行、SIM卡与付款问题高频口语",
    theme: "开银行账户、办理手机卡、确认费用、设置自动扣款、处理付款失败",
    patterns: [
      {
        pattern: "What documents do I need to...?",
        usage: "用于表达“我需要什么文件来……？”这是办理手续时非常高频的句型，适合开银行账户、办手机卡、学校注册、申请学生卡、办理住宿或提交身份证明材料。",
        examples: [
          "What documents do I need to open a bank account?",
          "What documents do I need to get a SIM card?",
          "What documents do I need to register with the university?",
          "What documents do I need to prove my address?",
          "What documents do I need to apply for a student discount?"
        ],
        practiceTip: "把句型和具体任务绑定：What documents do I need to + 动词？例如：What documents do I need to activate my account?"
      },
      {
        pattern: "Are there any fees for...?",
        usage: "用于表达“……有没有费用？”适合确认银行账户月费、手机套餐费用、取现/转账手续费，以及取消服务或提前解约费用。",
        examples: [
          "Are there any fees for opening the account?",
          "Are there any monthly fees?",
          "Are there any fees for international transfers?",
          "Are there any fees for using this card overseas?",
          "Are there any cancellation fees?"
        ],
        practiceTip: "重点练 monthly fees, transfer fees, cancellation fees。办任何服务前都可以问：Are there any extra fees I should know about?"
      },
      {
        pattern: "Does this plan include...?",
        usage: "用于表达“这个套餐包含……吗？”这里的 plan 通常指手机套餐、网络套餐、保险计划或银行服务方案。",
        examples: [
          "Does this plan include unlimited calls?",
          "Does this plan include international calls?",
          "Does this plan include mobile data?",
          "Does this plan include 5G access?",
          "Does this plan include roaming?"
        ],
        practiceTip: "手机卡场景中重点掌握 data, calls, texts, roaming。例如：Does this plan include enough data for video calls?"
      },
      {
        pattern: "Can I set up...?",
        usage: "用于表达“我可以设置……吗？”适合办理账户、付款方式、自动扣款、网上银行、手机号绑定、账单提醒等。",
        examples: [
          "Can I set up online banking?",
          "Can I set up automatic payments?",
          "Can I set up a mobile banking app?",
          "Can I set up a direct debit for my rent?",
          "Can I set up payment reminders?"
        ],
        practiceTip: "记住 automatic payments = 自动付款；direct debit = 自动扣款。例如：Can I set up a direct debit for my rent?"
      },
      {
        pattern: "My payment didn't go through.",
        usage: "用于表达“我的付款没有成功”。这里的 go through 表示交易、付款或申请成功完成，适合银行卡、网上支付、学费、房租或 App 扣款失败时使用。",
        examples: [
          "My payment didn't go through.",
          "My card didn't go through.",
          "The transaction didn't go through.",
          "My online payment didn't go through.",
          "I tried to pay, but it didn't go through."
        ],
        practiceTip: "付款失败时比 It failed. 更自然的表达是 My payment didn't go through. 如果要继续问原因，可以说：Could you check what happened?"
      }
    ],
    questions: [
      {
        question: "You want to open a bank account. What would you ask?",
        answer: "Hi, what documents do I need to open a bank account? I'm an international student, and I've just arrived. Are there any monthly fees for this account? Also, can I set up online banking and a mobile banking app today?"
      },
      {
        question: "You want to get a SIM card for daily use. What would you ask?",
        answer: "Hi, what documents do I need to get a SIM card? I'm looking for a plan with enough mobile data. Does this plan include unlimited calls and texts? Does it include 5G access? Also, are there any cancellation fees?"
      },
      {
        question: "You want to pay rent automatically every month. What would you say to the bank staff?",
        answer: "I need to pay my rent every month, so can I set up a direct debit? I want the payment to go out automatically. Are there any fees for setting this up? Also, can I get a notification when the payment is made?"
      },
      {
        question: "Your card payment fails in a store. What would you say?",
        answer: "Sorry, my payment didn't go through. Could I try again? Maybe there was a problem with the card machine. If it still doesn't work, I can try another card or pay in cash."
      },
      {
        question: "You are choosing between two phone plans. What would you ask?",
        answer: "Does this plan include international calls? How much mobile data does it include each month? Are there any extra fees if I use more data? Also, are there any cancellation fees if I change my plan later?"
      }
    ],
    trainingFocus: "今天重点练习完整办事流程：What documents do I need to...?, Are there any fees for...?, Does this plan include...?, Can I set up...?, My payment didn't go through. 重点模拟两个场景：银行开户，包括文件、费用、网上银行和自动扣款；办理手机卡，包括套餐、流量、通话和取消费用。",
    quote: {
      text: "The beginning is the most important part of the work.",
      author: "Plato"
    },
    images: []

    // AI comic prompt ideas:
    // 1. A warm comic illustration of an international student opening a bank account, showing a passport and university documents to a helpful bank employee, with speech bubbles saying "What documents do I need?" and "Can I set up online banking?", clean modern branch.
    // 2. A friendly mobile-phone shop cartoon scene where a student compares two SIM plans and asks about data, 5G, roaming, and cancellation fees, bright clear plan cards, practical study-abroad mood.
  },
  {
    day: 21,
    title: "Day 21 - 课堂、Seminar 与小组讨论高频口语",
    theme: "听课没跟上、请同学解释、确认讨论重点、参与小组任务",
    patterns: [
      {
        pattern: "I'm not following this part.",
        usage: "用于表达“我这部分没跟上”。比直接说 I don't understand 更自然，也更适合课堂和讨论。适合听课时某部分没理解、小组讨论中跟不上逻辑、同学解释太快，或老师讲到某个步骤时自己卡住了。",
        examples: [
          "I'm not following this part.",
          "I'm not following the calculation here.",
          "I'm not following the logic of this argument.",
          "I'm not following the second step.",
          "I'm not following how you got this result."
        ],
        practiceTip: "不要怕说这句话。这不是“我很差”，而是“我需要把这部分弄清楚”。可以说：Sorry, I'm not following this part. Could you go over it again?"
      },
      {
        pattern: "Could you walk me through...?",
        usage: "用于表达“你可以带我一步一步过一遍……吗？”walk someone through something 是非常高频的口语表达，意思是“逐步解释”。适合请同学解释作业步骤、请老师解释解题过程、请工作人员说明系统操作，或请组员说明项目流程。",
        examples: [
          "Could you walk me through the steps?",
          "Could you walk me through the assignment requirements?",
          "Could you walk me through the process?",
          "Could you walk me through how you solved this problem?",
          "Could you walk me through the presentation structure?"
        ],
        practiceTip: "这个句型尤其适合理工科方向。例如：Could you walk me through how this algorithm works? 这比简单说 Please explain. 更自然、更具体。"
      },
      {
        pattern: "How does this relate to...?",
        usage: "用于表达“这个和……有什么关系？”这是课堂和学术讨论中的高频句型，适合连接概念和主题、理解理论和案例之间的关系、课堂提问，以及讨论论文、模型或实验结果。",
        examples: [
          "How does this relate to the main topic?",
          "How does this relate to our assignment?",
          "How does this relate to the previous lecture?",
          "How does this relate to real-world applications?",
          "How does this relate to AGV path planning?"
        ],
        practiceTip: "这个句型可以让你在课堂上提出更成熟的问题。例如：How does this relate to the model we discussed last week? 这比简单问“什么意思”更学术。"
      },
      {
        pattern: "I'd like to clarify one thing.",
        usage: "用于表达“我想澄清一件事”。这个句型适合在讨论中礼貌插入，确认某个细节。适合课堂提问、小组分工、会议讨论、确认任务要求和避免误解。",
        examples: [
          "I'd like to clarify one thing.",
          "I'd like to clarify the deadline.",
          "I'd like to clarify our group roles.",
          "I'd like to clarify what we need to submit.",
          "I'd like to clarify the difference between these two methods."
        ],
        practiceTip: "这个句型很适合替代过于直接的 I have a question. I have a question 没错，但 I'd like to clarify one thing. 听起来更成熟、更有目的性。"
      },
      {
        pattern: "Should we focus on... or...?",
        usage: "用于表达“我们应该重点关注……还是……？”这是小组讨论中非常实用的决策句型，适合小组项目确定方向、讨论报告重点、分配任务、选择研究角度和准备 presentation。",
        examples: [
          "Should we focus on theory or application?",
          "Should we focus on the case study or the literature review?",
          "Should we focus on cost or performance?",
          "Should we focus on the problem definition or the solution?",
          "Should we focus on the simulation results or the algorithm design?"
        ],
        practiceTip: "这个句型可以帮你主动参与小组讨论。不要一直等别人安排任务，可以说：Should we focus on the model first or the simulation part?"
      }
    ],
    questions: [
      {
        question: "You don't understand one part of the lecture. What would you say?",
        answer: "Sorry, I'm not following this part. I understand the general idea, but I'm not sure how this step works. Could you walk me through the calculation again? I'd like to clarify how you got this result."
      },
      {
        question: "Your group is discussing an assignment, but the task is still unclear. What would you say?",
        answer: "I'd like to clarify one thing before we start. What exactly do we need to submit for this assignment? Should we focus on the case study or the literature review? Also, could someone walk me through the requirements again?"
      },
      {
        question: "You are discussing a research topic with a classmate. How would you ask about its relevance?",
        answer: "That sounds interesting. How does this relate to real-world applications? I'm especially interested in how the theory connects with practical engineering problems. For example, how does this relate to AGV scheduling or path planning?"
      },
      {
        question: "Your group is preparing a presentation. How would you help decide the focus?",
        answer: "Should we focus on the problem definition first or the solution? I think the audience needs to understand the background before we explain the method. I'd also like to clarify who will present each part. Could we walk through the presentation structure together?"
      },
      {
        question: "A classmate explains a solution too quickly. What would you say?",
        answer: "Sorry, I'm not following how you got this result. Could you walk me through the steps? I understand the final answer, but I'm confused about the middle part. I'd like to clarify the logic before moving on."
      }
    ],
    trainingFocus: "今天练习一套课堂参与系统：I'm not following this part., Could you walk me through...?, How does this relate to...?, I'd like to clarify one thing., Should we focus on... or...? 可以组合成：I'm not following this part. Could you walk me through the steps again? I'd like to clarify how this relates to our assignment. Should we focus on the theory or the application? 今天至少模拟两个场景：课堂没听懂，向老师追问；小组讨论中，确认任务重点。",
    quote: {
      text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
      author: "Benjamin Franklin"
    },
    images: []

    // AI comic prompt ideas:
    // 1. A warm comic illustration of an international student in a seminar room politely raising a hand and saying "I'd like to clarify one thing," while classmates discuss a group assignment on a whiteboard, bright academic atmosphere.
    // 2. A friendly study-abroad classroom cartoon where a student asks a classmate to walk through an assignment step by step, with notes, laptops, and a presentation outline, soft colors and encouraging mood.
  },
  {
    day: 22,
    title: "Day 22 - 邮件、消息与学校沟通高频句型",
    theme: "给老师、同学、学校办公室发邮件或消息",
    patterns: [
      {
        pattern: "I'm writing to...",
        usage: "用于表达“我写信是为了……”。这是邮件开头最常用的句型之一，适合给老师发邮件、联系学校办公室、询问课程信息、说明问题、请求帮助或预约。",
        examples: [
          "I'm writing to ask about the assignment.",
          "I'm writing to confirm my appointment.",
          "I'm writing to ask for some information about course registration.",
          "I'm writing to let you know that I may be late.",
          "I'm writing to follow up on my previous email."
        ],
        practiceTip: "以后写邮件不要一上来写一大段背景，先用一句话说明目的：I'm writing to ask about... 这样会让邮件非常清楚。"
      },
      {
        pattern: "I've attached...",
        usage: "用于表达“我已经附上了……”。适合发送文件、提交材料、发作业、发送证明文件，或给老师发草稿和表格。",
        examples: [
          "I've attached my assignment.",
          "I've attached the required documents.",
          "I've attached my draft for your review.",
          "I've attached a copy of my passport.",
          "I've attached the completed form to this email."
        ],
        practiceTip: "注意常见搭配：attach a file, attach a document, attach a copy of... 邮件中可以写：I've attached the file to this email."
      },
      {
        pattern: "Could you confirm whether...?",
        usage: "用于表达“您能否确认一下是否……？”这个句型比直接问 Is it...? 更正式、更适合邮件。适合确认截止日期、是否收到文件、会议时间、注册状态或要求是否正确。",
        examples: [
          "Could you confirm whether you received my email?",
          "Could you confirm whether the deadline is Friday?",
          "Could you confirm whether my registration is complete?",
          "Could you confirm whether I need to submit a hard copy?",
          "Could you confirm whether the meeting will be online or in person?"
        ],
        practiceTip: "这是非常适合学生的句型。结构是：Could you confirm whether + 完整句子？例如：Could you confirm whether I need to bring my student ID?"
      },
      {
        pattern: "I haven't received... yet.",
        usage: "用于礼貌说明“我还没有收到……”。适合没收到回复、确认邮件、学生卡、登录信息或课程材料的场景。",
        examples: [
          "I haven't received the confirmation email yet.",
          "I haven't received my student ID yet.",
          "I haven't received any update yet.",
          "I haven't received the login details yet.",
          "I haven't received a reply to my previous email yet."
        ],
        practiceTip: "注意 yet 放在句末，表示“到现在还没有”。I haven't received the document yet. 比 You didn't send me the document. 礼貌很多。"
      },
      {
        pattern: "I'll get back to you...",
        usage: "用于表达“我之后回复你 / 我之后再告诉你”。这是非常自然的沟通句型，适合需要查信息再回复、暂时不能确定时间、需要考虑后再答复，或在小组讨论中暂时没有答案。",
        examples: [
          "I'll get back to you later today.",
          "I'll get back to you by tomorrow.",
          "I'll get back to you after checking my schedule.",
          "I'll get back to you once I have more information.",
          "I'll get back to you as soon as possible."
        ],
        practiceTip: "这个句型非常适合避免当场卡住。别人问你是否有空时，可以说：Let me check my schedule, and I'll get back to you later today."
      }
    ],
    questions: [
      {
        question: "You want to email your professor about an assignment. What would you write or say?",
        answer: "Dear Professor, I'm writing to ask about the assignment for this week. Could you confirm whether the deadline is this Friday? I'm not completely sure whether we need to submit a hard copy or upload it online. Thank you for your help."
      },
      {
        question: "You need to send documents to student services. What would you write?",
        answer: "Hello, I'm writing to submit the required documents for my registration. I've attached the completed form and a copy of my passport to this email. Could you confirm whether you received them? Please let me know if anything else is needed."
      },
      {
        question: "You have not received your login details. What would you say to IT support?",
        answer: "Hi, I haven't received my login details yet. I'm writing to ask whether my student account has been activated. Could you confirm whether the details have already been sent? I need them to access the university system."
      },
      {
        question: "A classmate asks whether you can join a group meeting, but you are not sure yet. What would you say?",
        answer: "I'm not sure yet. I need to check my schedule first. I'll get back to you later today. If I'm not available at that time, maybe we can choose another time that works for everyone."
      },
      {
        question: "You sent an email last week but received no reply. How would you follow up politely?",
        answer: "Hello, I'm writing to follow up on my previous email. I haven't received a reply yet, so I just wanted to check whether my message was received. Could you confirm whether there is any update? Thank you very much."
      }
    ],
    trainingFocus: "今天练习一套完整的邮件沟通流程：I'm writing to..., I've attached..., Could you confirm whether...?, I haven't received... yet., I'll get back to you... 可以组合成：I'm writing to ask about my registration. I've attached the required documents to this email. Could you confirm whether you received them? I haven't received a confirmation email yet. I'll get back to you if you need any additional information. 今天请重点模拟两个场景：给老师发邮件问作业要求；给学校办公室发邮件提交文件并确认收到。",
    quote: {
      text: "Brevity is the soul of wit.",
      author: "William Shakespeare"
    },
    images: []

    // AI comic prompt ideas:
    // 1. A warm comic illustration of an international student writing a polite email to a professor on a laptop, with a clean inbox interface and speech bubbles showing "I'm writing to..." and "Could you confirm whether...?", calm study desk setting.
    // 2. A friendly campus office cartoon scene where a student sends attached documents to student services and receives a confirmation message, with soft colors, clear email icons, and a practical study-abroad mood.
  },
  {
    day: 23,
    title: "Day 23 - 图书馆、学习资源与打印高频口语",
    theme: "图书馆借书、续借、查数据库、预约自习室、打印材料",
    patterns: [
      {
        pattern: "I'd like to borrow...",
        usage: "用于表达“我想借……”。适合在图书馆借书、借电脑、耳机、充电器、课程教材，以及实验或学习设备。",
        examples: [
          "I'd like to borrow this book.",
          "I'd like to borrow a laptop.",
          "I'd like to borrow a charger.",
          "I'd like to borrow these textbooks.",
          "I'd like to borrow some books on engineering."
        ],
        practiceTip: "这个句型比直接说 I want this book. 更自然、更礼貌。在图书馆可以说：Hi, I'd like to borrow this book. Do I need my student card?"
      },
      {
        pattern: "When is this due?",
        usage: "用于表达“这个什么时候到期 / 什么时候该还？”due 是留学生活中非常重要的词，可以用于借书归还日期、作业截止日期、账单付款日期和表格提交日期。",
        examples: [
          "When is this due?",
          "When is the book due?",
          "When is the assignment due?",
          "When is the payment due?",
          "When is the form due?"
        ],
        practiceTip: "把 due 练到非常熟。不要总说 What is the deadline? 也可以说：When is it due? 这句话非常口语、非常高频。"
      },
      {
        pattern: "Can I renew...?",
        usage: "用于表达“我可以续借 / 延长……吗？”renew 在图书馆和服务类场景很常见，适合续借图书、延长借用设备时间、延长会员/账户/服务，或更新许可证和文件。",
        examples: [
          "Can I renew this book?",
          "Can I renew it online?",
          "Can I renew my library card?",
          "Can I renew the loan for another week?",
          "Can I renew this if nobody else has reserved it?"
        ],
        practiceTip: "注意：renew a book = 续借一本书；renew a card = 更新 / 延长卡的有效期；renew online = 在线续借。图书馆里很实用的一句是：Can I renew this book online?"
      },
      {
        pattern: "How do I access...?",
        usage: "用于表达“我怎样访问 / 使用……？”这个句型非常适合大学学习资源，适合访问学校数据库、使用电子书、查看课程资料、进入学习平台和登录打印系统。",
        examples: [
          "How do I access the online library?",
          "How do I access the course materials?",
          "How do I access academic journals?",
          "How do I access the printing system?",
          "How do I access the lecture recordings?"
        ],
        practiceTip: "这个句型特别适合学校 IT、图书馆和课程平台。例如：How do I access academic journals from home? 这句话很适合以后查论文。"
      },
      {
        pattern: "Is there a limit on...?",
        usage: "用于表达“……有没有限制？”适合询问数量、时间、次数或权限限制，例如借书数量限制、打印页数限制、自习室预约时长、数据库访问限制和续借次数限制。",
        examples: [
          "Is there a limit on how many books I can borrow?",
          "Is there a limit on printing pages?",
          "Is there a limit on study room bookings?",
          "Is there a limit on how long I can use this computer?",
          "Is there a limit on how many times I can renew a book?"
        ],
        practiceTip: "这个句型适合办事时提前问清楚规则。结构是：Is there a limit on + noun / how many / how long...? 例如：Is there a limit on how long I can book a study room?"
      }
    ],
    questions: [
      {
        question: "You want to borrow a textbook from the library. What would you say?",
        answer: "Hi, I'd like to borrow this textbook. Do I need to use my student card? When is this book due? Also, can I renew it online if I need more time?"
      },
      {
        question: "You want to access academic journals from home. What would you ask?",
        answer: "Hi, how do I access academic journals from home? Do I need to log in through the university library website? I'm looking for papers related to engineering and operations research. Is there a limit on how many articles I can download?"
      },
      {
        question: "You borrowed a book but need more time. What would you say?",
        answer: "Hi, can I renew this book for another week? I still need it for my assignment. It is due tomorrow, so I wanted to check before it becomes late. Can I renew it online, or do I need to do it at the library desk?"
      },
      {
        question: "You want to book a study room for group work. What would you ask?",
        answer: "Hi, how do I book a study room for group work? Is there a limit on how long we can use it? We need a quiet place to prepare our presentation. Also, do we need to check in when we arrive?"
      },
      {
        question: "You need to print your assignment but don't know how the system works. What would you say?",
        answer: "Hi, how do I access the printing system? I need to print my assignment before class. Is there a limit on printing pages? Also, can I pay with my student card, or do I need to add credit first?"
      }
    ],
    trainingFocus: "今天练习一套完整的图书馆学习流程：I'd like to borrow..., When is this due?, Can I renew...?, How do I access...?, Is there a limit on...? 可以组合成：I'd like to borrow this book. When is it due? Can I renew it online? Also, how do I access the online library? Is there a limit on how many articles I can download? 今天请重点模拟两个场景：借书和续借，包括 borrow / due / renew；查论文和打印，包括 access journals / printing system / limit。",
    quote: {
      text: "Reading is to the mind what exercise is to the body.",
      author: "Joseph Addison"
    },
    images: []

    // AI comic prompt ideas:
    // 1. A warm comic illustration of an international student at a university library desk borrowing engineering textbooks and asking "When is this due?", with bookshelves, a student card, and a helpful librarian, calm study-focused mood.
    // 2. A friendly campus library cartoon scene where a student accesses academic journals on a laptop and prints an assignment nearby, with subtle icons for databases, printing credits, and study rooms, bright and positive atmosphere.
  },
  {
    day: 24,
    title: "Day 24 - 预约、改时间与迟到沟通高频口语",
    theme: "临时有事、迟到、改时间、说明自己什么时候有空",
    patterns: [
      {
        pattern: "I'm afraid I can't make it to...",
        usage: "用于表达“恐怕我去不了 / 参加不了……”。这里的 make it to 表示“成功到场、参加”，适合不能参加小组会议、不能去预约、不能上某节课、不能参加活动或不能按时赴约。",
        examples: [
          "I'm afraid I can't make it to the meeting.",
          "I'm afraid I can't make it to class today.",
          "I'm afraid I can't make it to the appointment.",
          "I'm afraid I can't make it to the group discussion.",
          "I'm afraid I can't make it to the seminar this afternoon."
        ],
        practiceTip: "这句话比直接说 I can't come. 更礼貌、更自然。注意 make it to + 地点 / 活动。"
      },
      {
        pattern: "Something came up.",
        usage: "用于表达“临时有事”。这是非常地道的口语表达，常用于解释为什么突然不能参加、需要迟到、取消或改时间，也适合不想过度解释私人原因的场景。",
        examples: [
          "Sorry, something came up.",
          "Something came up, so I may be late.",
          "Something came up, and I can't make it to the meeting.",
          "Something urgent came up this morning.",
          "I'm really sorry, but something came up at the last minute."
        ],
        practiceTip: "这句话适合不想解释太多细节时使用。完整表达可以是：Sorry, something came up, and I'm afraid I can't make it to the meeting."
      },
      {
        pattern: "Could we move it to...?",
        usage: "用于表达“我们可以把它改到……吗？”这里的 it 可以指 meeting, appointment, discussion, call 等。适合改会议时间、改预约时间、改讨论时间、和同学协调小组任务，或和老师重新约时间。",
        examples: [
          "Could we move it to tomorrow?",
          "Could we move it to Friday afternoon?",
          "Could we move it to next week?",
          "Could we move it to 3 p.m.?",
          "Could we move it to after class?"
        ],
        practiceTip: "比起重新解释一整句 Could we change the meeting time to...? 口语里更常说：Could we move it to...? 但前提是双方都知道 it 指什么。"
      },
      {
        pattern: "I'm available between... and...",
        usage: "用于清楚表达“我在……到……之间有空”。适合预约老师 office hours、安排小组会议、和朋友约时间、和学校办公室确认 appointment，以及安排线上会议。",
        examples: [
          "I'm available between 2 and 4 p.m.",
          "I'm available between Monday and Wednesday.",
          "I'm available between classes.",
          "I'm available between 10 a.m. and noon.",
          "I'm available between 3 and 5 tomorrow afternoon."
        ],
        practiceTip: "这个句型很适合替代模糊的 I have time. 更清楚的表达是：I'm available between 2 and 4 p.m."
      },
      {
        pattern: "I'll be about... minutes late.",
        usage: "用于表达“我大概要迟到……分钟”。这是迟到时必须掌握的句型，适合上课、小组会议、预约、交通延误、打车或公交延误等场景。",
        examples: [
          "I'll be about five minutes late.",
          "I'll be about ten minutes late.",
          "I'll be about fifteen minutes late.",
          "I'll be about twenty minutes late because of traffic.",
          "I'll be about ten minutes late, but I'm on my way."
        ],
        practiceTip: "迟到时不要只说 I'm late. 要说明预计时间：I'll be about ten minutes late. 这会让对方更容易安排。"
      }
    ],
    questions: [
      {
        question: "You cannot attend a group meeting because something urgent came up. What would you say?",
        answer: "Sorry, something urgent came up, and I'm afraid I can't make it to the group meeting today. Could we move it to tomorrow afternoon? I'm available between 2 and 4 p.m. I'm really sorry for the inconvenience."
      },
      {
        question: "You are on your way to class, but you will be late. What would you say to your classmate?",
        answer: "I'm on my way, but I'll be about ten minutes late. Something came up this morning, so I left later than planned. Could you save me a seat if possible? I'll join the class as soon as I arrive."
      },
      {
        question: "You need to reschedule a meeting with your professor. What would you say?",
        answer: "I'm sorry, but I'm afraid I can't make it to our meeting at the original time. Something came up, and I need to reschedule. Could we move it to Friday afternoon? I'm available between 3 and 5 p.m."
      },
      {
        question: "Your group wants to arrange a discussion. How would you tell them your available time?",
        answer: "I'm available between 10 a.m. and noon tomorrow. I'm also available after 4 p.m. on Friday. Could we move the discussion to one of those times? I think it would be better to choose a time when everyone can join."
      },
      {
        question: "You have an appointment with student services, but your bus is delayed. What would you say?",
        answer: "Hi, I have an appointment at 2 p.m., but my bus is delayed. I'll be about fifteen minutes late. I'm really sorry about that. Should I still come, or should we move it to another time?"
      }
    ],
    trainingFocus: "今天练习一套时间协调系统：I'm afraid I can't make it to..., Something came up., Could we move it to...?, I'm available between... and..., I'll be about... minutes late. 可以组合成：Sorry, something came up, and I'm afraid I can't make it to the meeting. Could we move it to tomorrow? I'm available between 2 and 4 p.m. If that doesn't work, I can also do Friday afternoon. 今天重点模拟两个场景：不能参加小组会议，主动改时间；快迟到了，提前告知预计迟到时间。",
    quote: {
      text: "Punctuality is the politeness of kings.",
      author: "Louis XVIII"
    },
    images: []

    // AI comic prompt ideas:
    // 1. A warm comic illustration of an international student politely messaging a study group to reschedule a meeting, with a calendar app showing available time slots and speech bubbles saying "Could we move it to tomorrow?", calm responsible mood.
    // 2. A friendly campus cartoon scene where a student is on a delayed bus and sends a message saying "I'll be about fifteen minutes late", with a phone, bus stop, and appointment reminder, soft colors and practical study-abroad atmosphere.
  },
  {
    day: 25,
    title: "Day 25 - 室友、宿舍规则与共同生活高频口语",
    theme: "和室友相处、请求对方小声一点、协商家务、表达歉意和建立规则",
    patterns: [
      {
        pattern: "Is it okay if I...?",
        usage: "用于礼貌询问“我可以……吗？”适合问室友能否使用厨房、冰箱、洗衣机，能否开窗、开灯、邀请朋友来，借用公共空间，或临时调整共同生活安排。",
        examples: [
          "Is it okay if I use the kitchen now?",
          "Is it okay if I open the window?",
          "Is it okay if I invite a friend over?",
          "Is it okay if I do my laundry tonight?",
          "Is it okay if I leave my bag here for a while?"
        ],
        practiceTip: "这个句型非常适合替代直接的 Can I...? 它语气更柔和，更适合室友关系。"
      },
      {
        pattern: "Would you mind keeping...?",
        usage: "用于礼貌地请求别人改变行为，表示“你介意保持……吗？”适合请室友小声一点、保持厨房干净、关门轻一点，或不要占用公共空间太久。",
        examples: [
          "Would you mind keeping the noise down?",
          "Would you mind keeping the kitchen clean?",
          "Would you mind keeping the door closed?",
          "Would you mind keeping your things on your side?",
          "Would you mind keeping the bathroom dry after using it?"
        ],
        practiceTip: "这个句型比较礼貌，但也比较直接。如果怕太强硬，可以加一句：Sorry to ask, but would you mind keeping the noise down?"
      },
      {
        pattern: "I'll make sure to...",
        usage: "用于表达“我会确保……”。适合向室友承诺会保持干净、表示自己会遵守规则、道歉后说明改进，或在小组合作中承担责任。",
        examples: [
          "I'll make sure to clean up after cooking.",
          "I'll make sure to keep my things tidy.",
          "I'll make sure to lock the door.",
          "I'll make sure to turn off the lights.",
          "I'll make sure to be quiet after 10 p.m."
        ],
        practiceTip: "这个句型比简单说 I will do it. 更有责任感。特别适合道歉后补一句：Sorry about that. I'll make sure to clean up next time."
      },
      {
        pattern: "Let's take turns...",
        usage: "用于表达“我们轮流……”。这是共同生活和小组合作中的高频句型，适合轮流打扫卫生、倒垃圾、做饭、分配小组任务，或轮流发言和展示。",
        examples: [
          "Let's take turns cleaning the kitchen.",
          "Let's take turns taking out the rubbish.",
          "Let's take turns using the washing machine.",
          "Let's take turns presenting each section.",
          "Let's take turns leading the group discussion."
        ],
        practiceTip: "这个句型非常适合提出公平安排。例如：Let's take turns cleaning the shared areas, so it feels fair for everyone."
      },
      {
        pattern: "I didn't mean to...",
        usage: "用于解释“我不是故意……”。适合不小心打扰室友、忘记清理东西、说错话、迟到或误会，以及社交场合中缓和气氛。",
        examples: [
          "I didn't mean to wake you up.",
          "I didn't mean to make so much noise.",
          "I didn't mean to leave the kitchen messy.",
          "I didn't mean to interrupt you.",
          "I didn't mean to cause any trouble."
        ],
        practiceTip: "这个句型后面通常接一句补救：I didn't mean to make so much noise. I'll be more careful next time."
      }
    ],
    questions: [
      {
        question: "You want to invite a friend to your accommodation. What would you ask your roommate?",
        answer: "Is it okay if I invite a friend over this evening? We'll just study in my room for a while. I'll make sure to keep the noise down. If it's not a good time, I can meet them somewhere else."
      },
      {
        question: "Your roommate often makes noise late at night. What would you say politely?",
        answer: "Sorry to ask, but would you mind keeping the noise down after 10 p.m.? I usually need to sleep early because I have class in the morning. I don't want to cause any conflict, but it would really help me. Thank you for understanding."
      },
      {
        question: "You forgot to clean the kitchen after cooking. What would you say?",
        answer: "Sorry, I didn't mean to leave the kitchen messy. I was in a hurry earlier. I'll make sure to clean up after cooking next time. I'll clean it now."
      },
      {
        question: "You and your roommates need to divide housework. What would you suggest?",
        answer: "Maybe we can make a simple cleaning schedule. Let's take turns cleaning the kitchen and taking out the rubbish. I think that would be fair for everyone. I'll make sure to do my part on time."
      },
      {
        question: "Your roommate asks if they can use the washing machine first. How would you respond?",
        answer: "Sure, that's fine. I was planning to do my laundry later anyway. Is it okay if I use it after you finish? Maybe we can take turns using it when we both need it."
      }
    ],
    trainingFocus: "今天练习一套共同生活沟通系统：Is it okay if I...?, Would you mind keeping...?, I'll make sure to..., Let's take turns..., I didn't mean to... 可以组合成：Is it okay if I use the kitchen now? I'll make sure to clean up after cooking. Also, maybe we can take turns taking out the rubbish. Sorry about yesterday — I didn't mean to leave it there. 今天重点模拟两个场景：请求室友配合，比如小声一点、保持干净、轮流做家务；自己犯错后补救，比如道歉、解释、承诺下次注意。",
    quote: {
      text: "No act of kindness, no matter how small, is ever wasted.",
      author: "Aesop"
    },
    images: []

    // AI comic prompt ideas:
    // 1. A warm comic illustration of two international student roommates calmly making a shared cleaning schedule in a dorm kitchen, with speech bubbles saying "Let's take turns" and "I'll make sure to clean up", friendly cooperative mood.
    // 2. A cozy study-abroad dorm cartoon scene where one student politely asks a roommate to keep the noise down after 10 p.m., with soft lighting, textbooks, laundry basket, and a peaceful respectful atmosphere.
  },
  {
    day: 26,
    title: "Day 26 - 社团、校园活动与认识新圈子高频口语",
    theme: "参加 orientation、加入社团、报名活动、接受或婉拒邀请",
    patterns: [
      {
        pattern: "I signed up for...",
        usage: "用于表达“我报名了……”。适合报名 orientation、社团活动、workshop、语言交换、校园旅行或志愿活动。",
        examples: [
          "I signed up for the orientation session.",
          "I signed up for a campus tour.",
          "I signed up for the engineering club.",
          "I signed up for a language exchange event.",
          "I signed up for a workshop on academic writing."
        ],
        practiceTip: "这个句型很适合回答 What are you doing this week? 例如：I signed up for a campus tour this Friday."
      },
      {
        pattern: "Are there any spots left for...?",
        usage: "用于表达“……还有名额吗？”这里的 spot 表示“名额、位置”。适合活动报名、预约 workshop、加入社团活动、参加旅行/讲座/课程，或预约学习小组。",
        examples: [
          "Are there any spots left for the campus tour?",
          "Are there any spots left for the workshop?",
          "Are there any spots left for the language exchange event?",
          "Are there any spots left for this Friday's activity?",
          "Are there any spots left for new members?"
        ],
        practiceTip: "这句话比 Can I join? 更具体。如果活动可能满员，用它非常自然。"
      },
      {
        pattern: "What kind of events do you usually run?",
        usage: "用于表达“你们通常办什么类型的活动？”这里的 run 表示“组织、举办”。适合询问社团活动、学生组织、志愿者项目、学术协会或学校服务部门。",
        examples: [
          "What kind of events do you usually run?",
          "What kind of workshops do you usually run?",
          "What kind of activities do club members usually do?",
          "What kind of events do you run during the semester?",
          "What kind of support sessions do you run for international students?"
        ],
        practiceTip: "这个句型适合社团摊位、orientation、student union。可以问：What kind of events do you usually run for new students?"
      },
      {
        pattern: "Count me in.",
        usage: "用于表达“算我一个”。这是非常自然的口语表达，用来接受邀请，适合同学邀请你参加活动、小组约一起学习、朋友约吃饭、社团组织活动，或临时决定加入某个计划。",
        examples: [
          "Count me in.",
          "If you're going to the event, count me in.",
          "That sounds fun. Count me in.",
          "Count me in for the group study session.",
          "Count me in if there's still space."
        ],
        practiceTip: "这是一个很短但很地道的表达。别人说 We're going to the student event tonight. 你可以说：Sounds good. Count me in."
      },
      {
        pattern: "I might sit this one out.",
        usage: "用于礼貌婉拒活动，表示“这次我可能不参加了”。适合太累、太忙、不方便、不想直接说 no，或某个活动不太适合你的场景。",
        examples: [
          "I might sit this one out.",
          "I'm a bit tired, so I might sit this one out.",
          "I have too much work, so I might sit this one out.",
          "I'll join next time, but I might sit this one out today.",
          "This event sounds fun, but I might sit this one out."
        ],
        practiceTip: "它比直接说 I don't want to go. 更自然、更委婉。可以加一句积极结尾：I might sit this one out, but please let me know about the next one."
      }
    ],
    questions: [
      {
        question: "You want to join an orientation activity. What would you ask?",
        answer: "Hi, are there any spots left for the orientation activity this week? I'm a new international student, and I'd like to learn more about the campus. What kind of events do you usually run for new students? If there's still space, I'd like to sign up."
      },
      {
        question: "A classmate invites you to a campus event. You want to join. What would you say?",
        answer: "That sounds fun. Count me in. I signed up for a campus tour before, but I haven't joined many social events yet. I think this could be a good chance to meet more people. What time does it start?"
      },
      {
        question: "You are asking about a student club. What would you say?",
        answer: "Hi, I'm interested in learning more about this club. What kind of events do you usually run during the semester? Are there any spots left for new members? I'm especially interested in activities related to engineering or technology."
      },
      {
        question: "You are too tired to join an activity today. How would you politely decline?",
        answer: "Thanks for inviting me, but I might sit this one out today. I'm a bit tired and need to finish some work. The event sounds really nice, though. Please let me know if there's another one next time."
      },
      {
        question: "You signed up for a workshop and want to tell your classmate about it. What would you say?",
        answer: "I signed up for a workshop on academic writing this Friday. I think it could be useful because I need to improve my academic English. There were only a few spots left, so I registered early. If you're interested, you should check whether there are any spots left."
      }
    ],
    trainingFocus: "今天练习一套校园参与系统：I signed up for..., Are there any spots left for...?, What kind of events do you usually run?, Count me in., I might sit this one out. 可以组合成：I signed up for a language exchange event. Are there any spots left for the campus tour as well? What kind of events do you usually run for international students? If it's not too late, count me in. But if I'm too busy this week, I might sit this one out. 今天重点模拟两个场景：主动加入活动，包括报名、询问名额、了解活动内容；回应邀请，包括接受邀请或礼貌婉拒。",
    quote: {
      text: "No man is an island.",
      author: "John Donne"
    },
    images: []

    // AI comic prompt ideas:
    // 1. A warm comic illustration of an international student at a campus orientation booth asking "Are there any spots left?", with club posters, friendly student volunteers, and a bright welcoming university atmosphere.
    // 2. A lively but calm study-abroad cartoon scene where students invite a new classmate to a language exchange event, with speech bubbles saying "Count me in" and "I might sit this one out", positive social campus mood.
  },
  {
    day: 27,
    title: "Day 27 - Presentation 与课堂展示高频口语",
    theme: "课堂 presentation、展示 slides、引出主题、转到下一部分、处理提问",
    patterns: [
      {
        pattern: "Today, I'll be talking about...",
        usage: "用于表达“今天我会讲……”。这是 presentation 开头最常用的句型之一，适合课堂展示开场、小组汇报开场、研讨课发言、介绍研究主题，或在线上会议中简短说明主题。",
        examples: [
          "Today, I'll be talking about AGV path planning.",
          "Today, I'll be talking about our group project.",
          "Today, I'll be talking about the main findings from this paper.",
          "Today, I'll be talking about the challenges of studying abroad.",
          "Today, I'll be talking about how simulation can support decision-making."
        ],
        practiceTip: "这个句型要练到自动化。以后 presentation 一开始，不要想复杂开场，直接说：Today, I'll be talking about..."
      },
      {
        pattern: "The purpose of this presentation is to...",
        usage: "用于表达“这次展示的目的是……”。这个句型比简单说 I will talk about... 更正式一点，很适合大学课堂。适合说明展示目标、介绍研究目的、解释报告结构、开始学术汇报或小组 presentation 开场。",
        examples: [
          "The purpose of this presentation is to introduce our research topic.",
          "The purpose of this presentation is to explain the main problem.",
          "The purpose of this presentation is to compare two different methods.",
          "The purpose of this presentation is to discuss the results of our simulation.",
          "The purpose of this presentation is to show how the model works."
        ],
        practiceTip: "这个句型很适合连接研究方向：The purpose of this presentation is to explain how AGV scheduling can improve warehouse efficiency."
      },
      {
        pattern: "As you can see from this slide,...",
        usage: "用于表达“正如你们从这页幻灯片可以看到的……”。这是讲 slides 时非常实用的引导句，适合解释图表、讲数据、指向图片或流程图、展示模型结构和实验结果。",
        examples: [
          "As you can see from this slide, the system has three main parts.",
          "As you can see from this slide, the results improved after optimization.",
          "As you can see from this slide, the process is divided into five steps.",
          "As you can see from this slide, the problem becomes more complex when there are more AGVs.",
          "As you can see from this slide, the simulation results are quite clear."
        ],
        practiceTip: "不要只是读 slide 上的文字。要练：As you can see from this slide, + 你对图表的解释。这样你才是在“讲”，不是在“念”。"
      },
      {
        pattern: "Let's move on to...",
        usage: "用于表达“接下来我们进入……”。这是 presentation 中最常用的转场句，适合从背景转到方法、从方法转到结果、从结果转到讨论、小组展示中切换部分，或课堂讲解中推进结构。",
        examples: [
          "Let's move on to the next slide.",
          "Let's move on to the methodology.",
          "Let's move on to the simulation results.",
          "Let's move on to the main challenges.",
          "Let's move on to the conclusion."
        ],
        practiceTip: "Presentation 不流畅，很多时候不是内容问题，而是缺少转场句。把 Let's move on to... 练熟，可以让展示显得更有结构。"
      },
      {
        pattern: "I'll come back to that later.",
        usage: "用于表达“这个问题我稍后会再讲”。当别人提前问到后面内容，或者你暂时不想打断展示节奏时，这句话非常有用。适合 presentation 中处理提前问题、课堂解释时保持结构、小组讨论中暂时搁置某个点，或会议中控制发言顺序。",
        examples: [
          "I'll come back to that later.",
          "I'll come back to this point later in the presentation.",
          "I'll come back to the results in a few minutes.",
          "I'll come back to the limitations at the end.",
          "That's a good question, and I'll come back to it later."
        ],
        practiceTip: "这句话可以帮你避免被问题打乱节奏。例如：That's a good question. I'll come back to that later when I discuss the results."
      }
    ],
    questions: [
      {
        question: "You are starting a presentation about your research topic. What would you say?",
        answer: "Good morning, everyone. Today, I'll be talking about AGV path planning and scheduling. The purpose of this presentation is to introduce the main problem and explain why it is important in warehouse systems. I'll first give some background, then discuss the method, and finally show some simulation results."
      },
      {
        question: "You are explaining a slide with a system diagram. What would you say?",
        answer: "As you can see from this slide, the system has three main parts: the warehouse environment, the AGV fleet, and the task scheduling module. The arrows show how information moves between different parts of the system. This diagram helps us understand the overall structure before we move on to the algorithm."
      },
      {
        question: "You need to move from background to methodology. What would you say?",
        answer: "Now that we have introduced the background, let's move on to the methodology. In this part, I'll explain how we model the problem and what assumptions we make. The purpose of this section is to show how the research question is translated into a workable model."
      },
      {
        question: "Someone asks a question that you will answer later in your presentation. What would you say?",
        answer: "That's a good question. I'll come back to that later when I discuss the simulation results. For now, I'd like to finish explaining the model structure first. Then the results will make more sense."
      },
      {
        question: "You are presenting your group project and need to introduce the next speaker. What would you say?",
        answer: "That's all for my part. I've introduced the background and the main problem. Now let's move on to the methodology. My group member will explain how we designed the model and how we tested it in the simulation."
      }
    ],
    trainingFocus: "今天练习一套完整的 presentation 流程：Today, I'll be talking about..., The purpose of this presentation is to..., As you can see from this slide,..., Let's move on to..., I'll come back to that later. 可以组合成：Today, I'll be talking about AGV scheduling. The purpose of this presentation is to explain the problem and compare different methods. As you can see from this slide, the system includes tasks, vehicles, and routes. Now, let's move on to the methodology. If you have questions about the results, I'll come back to that later. 今天重点模拟两个场景：开场 30 秒，包括主题、目的、结构；讲 slide 30 秒，包括图表、流程、转场。",
    quote: {
      text: "If you can't explain it simply, you don't understand it well enough.",
      author: "Albert Einstein"
    },
    images: []

    // AI comic prompt ideas:
    // 1. A warm comic illustration of an international student giving a classroom presentation about AGV path planning, pointing to a slide with a simple system diagram, with speech bubbles saying "Today, I'll be talking about..." and "Let's move on to...", confident academic mood.
    // 2. A friendly university seminar cartoon scene where a student handles a question politely during a presentation, saying "I'll come back to that later", with classmates listening, slides on screen, soft colors and supportive atmosphere.
  },
  {
    day: 28,
    title: "Day 28 - 导师沟通、研究讨论与请教建议",
    theme: "和导师 / 老师 / senior student 讨论研究方向、进展、问题和下一步",
    patterns: [
      {
        pattern: "I'm currently looking into...",
        usage: "用于表达“我目前正在研究 / 了解……”。比简单说 I'm studying... 更像研究语境。适合和导师介绍研究进展、和同学聊研究方向、说明自己正在查资料，或描述当前关注的问题。",
        examples: [
          "I'm currently looking into AGV path planning.",
          "I'm currently looking into warehouse simulation.",
          "I'm currently looking into scheduling problems.",
          "I'm currently looking into different optimization methods.",
          "I'm currently looking into how simulation can support decision-making."
        ],
        practiceTip: "这个句型很适合介绍当前课题：I'm currently looking into multi-AGV scheduling in warehouse systems."
      },
      {
        pattern: "My understanding is that...",
        usage: "用于表达“我的理解是……”。这是表达自己理解、同时保留修正空间的学术沟通句型。适合向老师确认理解、解释论文内容、小组讨论、课堂提问，或避免说得太绝对。",
        examples: [
          "My understanding is that the model has three main parts.",
          "My understanding is that the algorithm is used to reduce travel time.",
          "My understanding is that simulation is mainly used for validation.",
          "My understanding is that the objective function focuses on efficiency.",
          "My understanding is that the constraints define what the AGVs can and cannot do."
        ],
        practiceTip: "当不确定自己理解是否正确时，用：My understanding is that..., but please correct me if I'm wrong. 这句话非常适合和导师沟通。"
      },
      {
        pattern: "I'm considering two options: ... and ...",
        usage: "用于清楚表达“我正在考虑两个选择：……和……”。适合选研究方向、选方法、选软件工具、选课程或选论文结构。",
        examples: [
          "I'm considering two options: simulation and mathematical modelling.",
          "I'm considering two options: FlexSim and a Python-based simulation platform.",
          "I'm considering two options: exact optimization and heuristic algorithms.",
          "I'm considering two options: focusing on scheduling or path planning.",
          "I'm considering two options: a practical project or a more theoretical model."
        ],
        practiceTip: "这个句型能帮你把模糊问题说清楚。不要说 I don't know what to do. 要说：I'm considering two options: A and B. 这样别人更容易给你建议。"
      },
      {
        pattern: "I'd appreciate your feedback on...",
        usage: "用于表达“如果您能对……给我反馈，我会很感谢”。非常适合对导师、老师和 senior student 使用。适合请导师看研究计划、请老师看草稿、请同学看 presentation、请别人评价想法，或邮件/面对面沟通。",
        examples: [
          "I'd appreciate your feedback on my research proposal.",
          "I'd appreciate your feedback on this model.",
          "I'd appreciate your feedback on my presentation slides.",
          "I'd appreciate your feedback on the structure of my report.",
          "I'd appreciate your feedback on whether this topic is feasible."
        ],
        practiceTip: "这句话比 Please give me advice. 更礼貌、更成熟。可以直接说：I'd appreciate your feedback on whether this research direction is realistic."
      },
      {
        pattern: "What would be a reasonable next step?",
        usage: "用于表达“下一步比较合理的做法是什么？”这是非常适合研究讨论的句型。适合和导师讨论课题、项目遇到瓶颈、小组任务推进、选题不确定，或需要明确下一阶段工作。",
        examples: [
          "What would be a reasonable next step?",
          "What would be a reasonable next step for this project?",
          "What would be a reasonable next step after the literature review?",
          "What would be a reasonable next step if the model becomes too complex?",
          "What would be a reasonable next step before building the simulation?"
        ],
        practiceTip: "这个句型非常适合结尾。当你解释完现状后，可以问：Based on this, what would be a reasonable next step? 这会显得你很主动，也很清楚。"
      }
    ],
    questions: [
      {
        question: "You want to introduce your current research interest to your supervisor. What would you say?",
        answer: "I'm currently looking into AGV path planning and scheduling in warehouse systems. My understanding is that this topic connects optimization, simulation, and practical logistics problems. I'm especially interested in how multiple AGVs can work together efficiently. At this stage, I'm still trying to narrow down the research focus."
      },
      {
        question: "You are unsure whether to use FlexSim or build a Python simulation. How would you explain this?",
        answer: "I'm considering two options: using FlexSim for system simulation and developing a Python-based simulation platform for algorithm testing. My understanding is that FlexSim is useful for visual validation, while Python may offer more flexibility for algorithm experiments. I'd appreciate your feedback on which option would be more suitable for my research. What would be a reasonable next step?"
      },
      {
        question: "You want your supervisor to comment on your research proposal. What would you say?",
        answer: "I've prepared a draft of my research proposal. I'd appreciate your feedback on the research question, methodology, and overall structure. My understanding is that the proposal should clearly explain the problem, the method, and the expected contribution. Could you let me know whether the current direction is feasible?"
      },
      {
        question: "You are discussing two possible research directions with a senior student. What would you say?",
        answer: "I'm considering two options: focusing more on AGV scheduling or focusing more on path planning. My understanding is that scheduling is more related to task allocation and system efficiency, while path planning is more related to movement and conflict avoidance. I'm currently looking into both areas, but I need to choose a clearer focus. What would be a reasonable next step?"
      },
      {
        question: "You want to confirm whether your understanding of a paper is correct. What would you say?",
        answer: "My understanding is that this paper proposes a heuristic algorithm for improving AGV task allocation. It seems that the main objective is to reduce total completion time. I'm currently looking into how the authors define the constraints. I'd appreciate your feedback on whether I'm interpreting the model correctly."
      }
    ],
    trainingFocus: "今天练习一套研究沟通系统：I'm currently looking into..., My understanding is that..., I'm considering two options: ... and ..., I'd appreciate your feedback on..., What would be a reasonable next step? 可以组合成：I'm currently looking into AGV scheduling and simulation. My understanding is that simulation can help validate the algorithm. I'm considering two options: using FlexSim or building a Python-based platform. I'd appreciate your feedback on which direction is more suitable. What would be a reasonable next step? 今天重点模拟两个场景：向导师介绍研究兴趣；向导师请教方法选择。",
    quote: {
      text: "Research is to see what everybody else has seen, and to think what nobody else has thought.",
      author: "Albert Szent-Gyorgyi"
    },
    images: []

    // AI comic prompt ideas:
    // 1. A warm comic illustration of an international student discussing AGV scheduling with a supervisor in a university office, with notes about simulation, optimization, and next steps on a whiteboard, calm academic mood.
    // 2. A friendly research meeting cartoon scene where a student compares FlexSim and Python simulation options with a senior student, laptops open, diagrams on paper, speech bubbles saying "I'd appreciate your feedback" and "What would be a reasonable next step?"
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
