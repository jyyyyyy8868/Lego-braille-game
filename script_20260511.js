const BRAILLE_DATA = {
    'A': [1], 'B': [1, 4], 'C': [1, 5], 'D': [1, 5, 3], 'E': [1, 3],
    'F': [1, 4, 5], 'G': [1, 4, 5, 3], 'H': [1, 4, 3], 'I': [4, 5], 'J': [4, 5, 3],
    'K': [1, 2], 'L': [1, 2, 4], 'M': [1, 2, 5], 'N': [1, 2, 5, 3], 'O': [1, 2, 3],
    'P': [1, 2, 4, 5], 'Q': [1, 2, 4, 5, 3], 'R': [1, 2, 4, 3], 'S': [2, 4, 5], 'T': [2, 4, 5, 3],
    'U': [1, 2, 6], 'V': [1, 2, 4, 6], 'W': [4, 5, 3, 6], 'X': [1, 2, 5, 6], 'Y': [1, 2, 5, 3, 6],
    'Z': [1, 2, 3, 6]
};

const KNOWLEDGE = [
    '盲文是由法国盲人路易·布莱尔于1824年发明的触觉书写系统，至今已有近200年历史。',
    '英文盲文由6个点位组成3×2的矩阵，每个字母对应唯一的点位组合。第一行1、2、3，第二行4、5、6。',
    '盲文字母有规律可循：A-E使用第一行点位，F-J则在第一行基础上加第二行点位1。',
    '通过触摸盲文，视障人士可以阅读书籍、书写文字，实现与世界的沟通。',
    '盲文不仅是文字，更是连接视障者与世界的桥梁。',
    '学习盲文需要耐心和练习，每个点位组合都承载着意义。',
    '盲文的点位组合看似复杂，但掌握规律后就能快速识别。',
    '许多国家都有自己的盲文系统，但英文盲文是最基础和通用的。'
];

const TIPS = [
    { title: '点位记忆基础', text: '盲文6点位固定不变：第一行1、2、3，第二行4、5、6。点位1是最常用的起始点！' },
    { title: 'A-E规律', text: 'A到E只使用第一行的前5个点位。A只有点1，B有1和4，C有1和2，D有1、2、4，E有1和2...' },
    { title: 'F-J规律', text: 'F到J在A-E基础上都加上了点位5。F=A+4+5，G=B+5，H=C+5，I=4+5，J=2+4+5...' },
    { title: 'K-O规律', text: 'K到O在A-E基础上加上了点位3。K=A+3，L=B+3，M=C+3，N=D+3，O=E+3...' },
    { title: '形象记忆法', text: '把字母和点位形状联想起来：A像金字塔底部，B像两个伙伴手拉手！' },
    { title: '分组练习法', text: '每天练习5个字母，循序渐进。A-E、F-J、K-O...分组学习效率更高！' },
    { title: '触摸模拟法', text: '用手指在桌上按点位形状点击，模拟触摸阅读的感觉，加深记忆！' },
    { title: '盲文乐高法', text: '用乐高积木还原字母形状，动手实践比单纯看更有效！' },
    { title: '读词记忆法', text: '看到一个单词时，尝试回忆每个字母的盲文，强化整体记忆！' },
    { title: '逆向思维法', text: '看到盲文时，先想点位组合，再推导字母，双向训练！' },
    { title: '常见字母组合', text: 'TH、ING、EA、ER是英语常见组合，记住它们的盲文能快速阅读！' },
    { title: '语境理解法', text: '在句子中理解单词，比单独记字母更有效，因为有上下文提示！' }
];

const WORD_LIST = [
    'APPLE', 'BANANA', 'CHERRY', 'DATE', 'ELDER', 'FIG', 'GRAPE', 'HONEY', 'ICE', 'JUICE',
    'KIWI', 'LEMON', 'MANGO', 'NECTAR', 'ORANGE', 'PEACH', 'PEAR', 'QUINCE', 'RASPBERRY', 'STRAWBERRY',
    'TOMATO', 'UMBER', 'VANILLA', 'WATER', 'XENON', 'YOGURT', 'ZEBRA', 'STAR', 'MOON', 'PLANET', 'COMET'
];

const ADJECTIVE_HINTS = {
    'APPLE': ['砸中牛顿引发万有引力', '乔布斯被咬一口的标志', '夏娃偷吃的伊甸园禁果', 'MacBook背面的闪亮Logo', '平安夜必备的圣诞礼物', '切开后星星形状的果肉', '汁多脆甜的红富士品种', '派皮包裹的经典甜点'],
    'BANANA': ['米老鼠唐老鸭最爱零食', '小黄人手拿的黄色武器', '孙悟空花果山的山珍', '大猩猩金刚的专属口粮', '麦当劳薯条的黄金搭档', '丛林泰山的能量补给', '剥开皮才能享用的弯月', '富含钾元素的运动伴侣'],
    'CHERRY': ['情人节表白的浪漫象征', '黑森林蛋糕的点睛之笔', '美国国树开出的娇艳果实', '拿破仑白兰地的酿造原料', '酸甜爆汁的车厘子别名', '春天枝头的红色玛瑙', '核小肉厚的迷你水果', '鸡尾酒里的精致装饰'],
    'DATE': ['沙特皇室的沙漠面包', '穆斯林斋月的神圣果实', '中东绿洲的甜蜜馈赠', '椰枣树垂下的金色宝石', '晒干后甜度爆表的蜜饯', '圣经中提及的古老食物', '天然无添加的健康零食', '烘焙糕点的黄金配料'],
    'ELDER': ['哈利波特魔法药水材料', '欧洲女巫的神秘浆果', '紫色晶莹的接骨木果实', '秋季枝头的串串紫珠', '北欧传统的酿酒原料', '富含花青素的超级食物', '魔法森林的神秘果实', '冬季温暖的热饮配料'],
    'FIG': ['佛陀菩提树下的顿悟果实', '地中海阳光的金色礼物', '切开后如蜂巢的独特纹理', '软糯香甜的无花果干', '烘焙界的百搭食材', '绿色外皮包裹的甜蜜', '无需开花即可结果', '中东沙漠的生命之果'],
    'GRAPE': ['波尔多红酒的灵魂原料', '普罗旺斯阳光下的串串紫晶', '古希腊神话的神圣果实', '吐鲁番火焰山的甜蜜', '提子干的原始形态', '藤蔓缠绕的翡翠珍珠', '香槟气泡的来源', '抗氧化的紫色精灵'],
    'HONEY': ['蜜蜂舞蹈传递的甜蜜密码', '蜂巢里流淌的金色液体', '新西兰麦卢卡的珍贵馈赠', '中医养生的润肺佳品', '搭配酸奶的天然甜味', '冬季暖心的蜂蜜柚子茶', '花粉酿成的金色琼浆', '美容养颜的液体黄金'],
    'ICE': ['泰坦尼克号沉没的元凶', '冰雪奇缘艾莎的魔法', '冰镇可乐的灵魂伴侣', '哈尔滨冰雕节的主角', '水分子凝结的晶莹晶体', '夏天解暑的降温神器', '滑冰场上的银色光芒', '冰箱冷冻室的常客'],
    'JUICE': ['水果压榨出的生命精华', '早餐餐桌上的维C炸弹', '农夫果园的新鲜萃取', '果汁机高速旋转的产物', '解渴降温的夏日神器', '浓缩还原的便携饮品', '儿童成长的营养补给', '健康生活的绿色选择'],
    'KIWI': ['新西兰国鸟同名水果', '毛茸茸棕色外皮的奇异果', '切开后绿色果肉配黑籽', '沙拉碗里的绿色宝石', '酸甜清爽的进口水果', '富含维生素的营养之王', '刀叉切开的优雅吃法', '水果拼盘的点睛之笔'],
    'LEMON': ['黄色椭圆的酸爽精灵', '泡水喝的美白圣品', '西餐去腥的厨房神器', '柠檬塔的灵魂主角', '莫吉托鸡尾酒的灵魂', '烘焙界的酸味调节剂', '皮薄汁多的尤力克品种', '夏季饮品的清新伴侣'],
    'MANGO': ['热带水果之王的霸气称号', '印度泰姬陵旁的金黄果实', '芒果糯米饭的甜蜜主角', '杨枝甘露的核心原料', '纤维丰富的多汁水果', '夏天街头的解暑圣品', '金黄色泽的热带风情', '甜品店的百搭食材'],
    'NECTAR': ['希腊神话众神的饮品', '花之精华酿成的琼浆', '蜂鸟采集的甜美汁液', '神话传说中的不老泉', '水果压榨的天然饮品', '香甜浓郁的花蜜精华', '大自然馈赠的甜蜜', '餐桌上的金色甘露'],
    'ORANGE': ['维C含量之王的柑橘', '荷兰画家梵高的橙色激情', '剥开后一瓣瓣的甜蜜', '冬季补充能量的水果', '陈皮的原始形态', '橙汁汽水的灵魂来源', '佛罗里达阳光的礼物', '春节年货的必备水果'],
    'PEACH': ['《西游记》蟠桃盛会主角', '水蜜桃的多汁诱惑', '毛茸茸的粉色外衣', '黄桃罐头的童年回忆', '桃花盛开后的甜蜜果实', '寿星祝寿的吉祥象征', '夏天解暑的水润水果', '果肉饱满的美味'],
    'PEAR': ['润肺止咳的白色精灵', '冰糖炖雪梨的经典搭配', '鸭梨形状的清脆口感', '秋天枝头的金黄果实', '川贝枇杷膏的原料', '皮薄汁多的砀山梨', '润肺化痰的天然良药', '果汁饱满的清甜水果'],
    'QUINCE': ['温柏树上的芳香果实', '莎士比亚诗歌中的象征', '欧式果酱的独特原料', '婚礼花艺的装饰元素', '黄色硬实的稀有水果', '烹饪肉类的提鲜神器', '中世纪欧洲的珍贵水果', '香气浓郁的厨房秘密'],
    'RASPBERRY': ['红色宝石般的树莓', '法式甜点的经典装饰', '酸甜可口的夏日浆果', '覆盆子的美味别名', '烘焙界的红色点缀', '富含纤维的健康零食', '果酱的优质原料', '水果沙拉的色彩担当'],
    'STRAWBERRY': ['心形外观的浪漫水果', '草莓蛋糕的甜蜜主角', '奶油的最佳拍档', '春季采摘园的热门选择', '红色诱惑的甜品皇后', '果酱瓶里的红色精华', '巧克力喷泉的完美搭档', '情人节礼物的甜蜜选择'],
    'TOMATO': ['既是水果也是蔬菜的争议', '意大利面酱的灵魂', '普罗旺斯阳光下的红宝石', '番茄炒蛋的国民美食', '沙拉碗里的红色主角', '番茄酱的原始形态', '多汁饱满的夏日蔬菜', '菜园里的红色明星'],
    'UMBER': ['文艺复兴油画的赭石颜料', '大地色系的温暖色调', '艺术大师的调色盘必备', '古老壁画的原始色彩', '矿物提取的天然颜料', '温暖厚重的棕色系', '古典绘画的经典颜色', '艺术创作的基础色'],
    'VANILLA': ['马达加斯加的金色豆荚', '冰淇淋的灵魂味道', '甜品界的百搭香料', '法式奶油的香气来源', '烘焙必备的香草精', '白色奶油的完美搭档', '甜品师的秘密武器', '香甜气息的代名词'],
    'WATER': ['化学式H2O的神奇液体', '生命之源的蓝色星球', '海洋潮汐的永恒律动', '雨水滋润万物生长', '解渴消暑的最佳选择', '云朵凝结的晶莹水滴', '冰川融化的纯净之源', '人类生存的必备元素'],
    'XENON': ['元素周期表的稀有气体', '汽车氙气大灯的光芒', '医疗麻醉的高科技应用', '霓虹灯的蓝色光芒', '惰性气体家族的一员', '等离子体的重要成分', '高科技领域的神秘元素', '发光特性的神奇气体'],
    'YOGURT': ['益生菌发酵的健康食品', '希腊酸奶的浓稠口感', '水果燕麦的完美搭档', '助消化的早餐选择', '乳酸菌的美味产物', '健康生活的代表食品', '冷藏柜里的白色美味', '营养丰富的发酵牛奶'],
    'ZEBRA': ['非洲草原的条纹精灵', '斑马线设计的灵感来源', '黑白相间的独特外衣', '马科家族的条纹成员', '动物园里的人气明星', '奔跑如飞的草原健将', '独特条纹的伪装大师', '生态系统的重要成员'],
    'STAR': ['夜空中闪烁的点点光芒', '五角星的几何美感', '好莱坞星光大道的荣耀', '星座组成的神秘图案', '流星划过的许愿时刻', '北极星指引的方向', '银河星系的微小成员', '黑暗中的希望象征'],
    'MOON': ['嫦娥仙子的月宫居所', '阴晴圆缺的永恒变化', '人类登月的伟大梦想', '潮汐涨落的引力来源', '中秋节的团圆象征', '月光洒落的银色光辉', '夜空中最亮的陪伴', '月球漫步的历史时刻'],
    'PLANET': ['太阳系的八大成员', '地球家园的兄弟姐妹', '木星大红斑的神秘风暴', '土星迷人的光环', '火星探索的红色星球', '宇宙航行的遥远目标', '公转自转的天体', '银河系中的微小尘埃'],
    'COMET': ['哈雷彗星的76年回归', '长尾巴划过夜空', '太空中的神秘访客', '冰与尘埃的宇宙旅行者', '千年一遇的天文奇观', '古人眼中的扫帚星', '彗星撞击的宇宙事件', '太阳系边缘的流浪者']
};

const ENGLISH_WORDS = [
    'APPLE', 'BALL', 'CAT', 'DOG', 'EGG', 'FISH', 'GIRL', 'HOUSE', 'ICE', 'JUMP',
    'KING', 'LOVE', 'MOTHER', 'NIGHT', 'OCEAN', 'PEACE', 'QUEEN', 'RAIN', 'SMILE', 'TREE',
    'UMBRELLA', 'VILLAGE', 'WATER', 'XRAY', 'YELLOW', 'ZOO', 'BRAVE', 'CHARM', 'DREAM', 'EAGLE',
    'FUTURE', 'GLORY', 'HAPPY', 'IDEAL', 'JOY', 'KIND', 'LIGHT', 'MUSIC', 'NATURE', 'OPERA',
    'POWER', 'QUIET', 'RICH', 'SMART', 'THINK', 'UNITY', 'VALOR', 'WISDOM', 'YOUTH', 'ZEAL'
];

class Game {
    constructor() {
        this.currentLevel = 1;
        this.points = this.loadPoints();
        this.unlockedLevels = this.loadUnlockedLevels();
        this.usedWordsPerLevel = this.loadUsedWords();
        this.level1Dots = [];
        this.level2Index = 0;
        this.level2Selected = [];
        this.level4Score = 0;
        this.level4Remaining = 10;
        this.level4CurrentLetter = '';
        this.level5Word = '';
        this.level5CurrentIndex = 0;
        this.level5CompletedLetters = [];
        this.level5Selected = [];
        this.level6Score = 0;
        this.level6Remaining = 8;
        this.level6PrevWord = '';
        this.level7Score = 0;
        this.level7Remaining = 6;
        this.level7CurrentWord = '';
        this.level7Hints = [];
        this.level7AdjectiveLeft = 4;
        this.level7LetterLeft = 2;
        this.level8Word = '';
        this.level8SelectedCells = [];
        this.level8Revealed = [];
        this.level8Board = [];
        this.level8RevealedLetters = [];
        this.level8Hints = [];
        this.level8AdjectiveLeft = 2;
        this.level9Score = 0;
        this.level9Tiles = [];
        this.level9UsedIndices = [];
        this.level9LastSubmission = '';
        
        this.initStars();
        this.bindEvents();
    }

    initStars() {
        const container = document.getElementById('stars-container');
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.width = (Math.random() * 3 + 2) + 'px';
            star.style.height = star.style.width;
            container.appendChild(star);
        }
    }

    bindEvents() {
        document.getElementById('start-btn').addEventListener('click', () => this.showLevelSelect());
        document.getElementById('back-to-start').addEventListener('click', () => this.showStart());
        document.getElementById('continue-to-level').addEventListener('click', () => this.startLevel());
        document.getElementById('back-to-select').addEventListener('click', () => this.showLevelSelect());
        document.getElementById('next-level').addEventListener('click', () => this.nextLevel());
        document.getElementById('back-to-levels').addEventListener('click', () => this.showLevelSelect());
        
        const levelCards = document.querySelectorAll('.level-card');
        levelCards.forEach(card => {
            card.addEventListener('click', () => this.selectLevel(parseInt(card.dataset.level)));
        });

        document.getElementById('level2-prev').addEventListener('click', () => this.level2Prev());
        document.getElementById('level2-next').addEventListener('click', () => this.level2Next());
        document.getElementById('level3-continue').addEventListener('click', () => this.showSuccess());
        
        document.getElementById('level5-confirm').addEventListener('click', () => this.level5Confirm());
        document.getElementById('level5-reset').addEventListener('click', () => this.level5Reset());
        
        document.getElementById('chain-submit').addEventListener('click', () => this.submitChain());
        document.getElementById('decrypt-submit').addEventListener('click', () => this.submitDecrypt());
        document.getElementById('buy-adjective').addEventListener('click', () => this.buyAdjective());
        document.getElementById('buy-letter').addEventListener('click', () => this.buyLetter());
        document.getElementById('buy-select').addEventListener('click', () => this.buySelect());
        
        document.getElementById('level8-check').addEventListener('click', () => this.checkLevel8());
        document.getElementById('level8-clear').addEventListener('click', () => this.clearLevel8());
        document.getElementById('buy-level8-adjective').addEventListener('click', () => this.buyLevel8Adjective());
        document.getElementById('buy-random-reveal').addEventListener('click', () => this.buyRandomReveal());
        document.getElementById('buy-select-reveal').addEventListener('click', () => this.buySelectReveal());
        
        document.getElementById('scrabble-submit').addEventListener('click', () => this.submitScrabble());
        
        document.addEventListener('keydown', (e) => {
            if (e.shiftKey && e.key === 'U') {
                this.unlockAllLevels();
            }
            if (e.shiftKey && e.key === 'C') {
                this.resetGame();
            }
        });
    }

    unlockAllLevels() {
        this.unlockedLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.saveUnlockedLevels();
        this.showLevelSelect();
    }

    resetGame() {
        localStorage.removeItem('braille-points');
        localStorage.removeItem('braille-unlocked');
        localStorage.removeItem('braille-used-words');
        
        this.points = 0;
        this.unlockedLevels = [1];
        this.usedWordsPerLevel = {};
        
        this.showStart();
    }

    loadPoints() {
        const saved = localStorage.getItem('braille-points');
        return saved ? parseInt(saved) : 0;
    }

    savePoints() {
        localStorage.setItem('braille-points', this.points.toString());
    }

    loadUnlockedLevels() {
        const saved = localStorage.getItem('braille-unlocked');
        return saved ? JSON.parse(saved) : [1];
    }

    saveUnlockedLevels() {
        localStorage.setItem('braille-unlocked', JSON.stringify(this.unlockedLevels));
    }

    loadUsedWords() {
        const saved = localStorage.getItem('braille-used-words');
        return saved ? JSON.parse(saved) : {};
    }

    saveUsedWords() {
        localStorage.setItem('braille-used-words', JSON.stringify(this.usedWordsPerLevel));
    }

    showStart() {
        this.hideAllScreens();
        document.getElementById('start-screen').classList.add('active');
    }

    showLevelSelect() {
        this.hideAllScreens();
        document.getElementById('level-select').classList.add('active');
        this.updateLevelSelect();
        document.getElementById('total-points').textContent = this.points;
    }

    updateLevelSelect() {
        const levelCards = document.querySelectorAll('.level-card');
        levelCards.forEach(card => {
            const level = parseInt(card.dataset.level);
            if (this.unlockedLevels.includes(level)) {
                card.classList.remove('locked');
                card.classList.add('unlocked');
            } else {
                card.classList.remove('unlocked');
                card.classList.add('locked');
            }
        });
    }

    selectLevel(level) {
        if (!this.unlockedLevels.includes(level)) return;
        this.currentLevel = level;
        this.showTip();
    }

    showTip() {
        this.hideAllScreens();
        document.getElementById('tip-screen').classList.add('active');
        document.getElementById('tip-title').textContent = `第${this.currentLevel}关知识点`;
        
        const tip = TIPS[(this.currentLevel - 1) % TIPS.length];
        document.getElementById('tip-card').innerHTML = `
            <h4>${tip.title}</h4>
            <p>${tip.text}</p>
        `;
    }

    startLevel() {
        this.hideAllScreens();
        document.getElementById('game-screen').classList.add('active');
        document.getElementById('current-level').textContent = this.currentLevel;
        document.getElementById('game-points').textContent = this.points;
        
        const levelNames = [
            '', '初识点位', '认识字母', '盲文知识', '字母配对', '组词闯关',
            '单词接龙', '盲文解密', '找词游戏', '盲文拼字'
        ];
        document.getElementById('level-name').textContent = levelNames[this.currentLevel];
        
        this.hideAllLevelContent();
        document.getElementById(`level${this.currentLevel}-content`).classList.remove('hidden');
        
        this.initLevel(this.currentLevel);
    }

    hideAllScreens() {
        const screens = document.querySelectorAll('.screen');
        screens.forEach(screen => screen.classList.remove('active'));
    }

    hideAllLevelContent() {
        const contents = document.querySelectorAll('.level-content');
        contents.forEach(content => content.classList.add('hidden'));
    }

    initLevel(level) {
        switch (level) {
            case 1: this.initLevel1(); break;
            case 2: this.initLevel2(); break;
            case 3: this.initLevel3(); break;
            case 4: this.initLevel4(); break;
            case 5: this.initLevel5(); break;
            case 6: this.initLevel6(); break;
            case 7: this.initLevel7(); break;
            case 8: this.initLevel8(); break;
            case 9: this.initLevel9(); break;
        }
    }

    initLevel1() {
        const grid = document.getElementById('level1-grid');
        const cells = grid.querySelectorAll('.grid-cell');
        cells.forEach(cell => {
            cell.classList.remove('selected');
            cell.addEventListener('click', () => this.clickLevel1Dot(cell));
        });

        const order = [1, 2, 3, 4, 5, 6];
        const hint = document.getElementById('level1-hint');
        hint.innerHTML = `请点击 <span class="highlight">点位${order[0]}</span>`;
    }

    clickLevel1Dot(cell) {
        const dotNum = parseInt(cell.dataset.dot);
        const order = [1, 2, 3, 4, 5, 6];
        
        if (!cell.classList.contains('selected')) {
            const expected = order[this.level1Dots.length];
            
            if (dotNum === expected) {
                cell.classList.add('selected');
                this.level1Dots.push(dotNum);
                
                if (this.level1Dots.length < 6) {
                    const nextDot = order[this.level1Dots.length];
                    document.getElementById('level1-hint').innerHTML = `请点击 <span class="highlight">点位${nextDot}</span>`;
                } else {
                    this.level1Dots = [1, 2, 3, 4, 5, 6];
                    setTimeout(() => this.showSuccess(), 500);
                }
            }
        }
    }

    initLevel2() {
        this.level2Index = 0;
        this.level2Selected = [];
        this.updateLevel2();
        
        const grid = document.getElementById('level2-grid');
        const cells = grid.querySelectorAll('.grid-cell');
        cells.forEach(cell => {
            cell.classList.remove('selected', 'locked');
            cell.addEventListener('click', () => this.clickLevel2Dot(cell));
        });
    }

    updateLevel2() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const currentLetter = letters[this.level2Index];
        const dots = BRAILLE_DATA[currentLetter];
        
        document.getElementById('letter-progress').textContent = this.level2Index + 1;
        document.getElementById('level2-letter').textContent = currentLetter;
        
        const brailleCell = document.getElementById('level2-braille');
        brailleCell.innerHTML = '';
        for (let i = 1; i <= 6; i++) {
            const dot = document.createElement('div');
            dot.className = `dot ${dots.includes(i) ? 'active' : ''}`;
            brailleCell.appendChild(dot);
        }
        
        document.getElementById('dot-explanation').textContent = `点位：${dots.join('、')}`;
    }

    clickLevel2Dot(cell) {
        const dotNum = parseInt(cell.dataset.dot);
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const currentLetter = letters[this.level2Index];
        const expectedDots = BRAILLE_DATA[currentLetter];
        
        if (!cell.classList.contains('selected')) {
            cell.classList.add('selected');
            this.level2Selected.push(dotNum);
            
            if (this.level2Selected.length === expectedDots.length && 
                this.level2Selected.every(dot => expectedDots.includes(dot))) {
                setTimeout(() => {
                    this.level2Selected.forEach(dot => {
                        document.querySelector(`.level-content:not(.hidden) .grid-cell[data-dot="${dot}"]`).classList.add('locked');
                    });
                    if (this.level2Index < 25) {
                        this.level2Next();
                    } else {
                        this.showSuccess();
                    }
                }, 500);
            }
        }
    }

    level2Prev() {
        if (this.level2Index > 0) {
            this.level2Index--;
            this.level2Selected = [];
            const cells = document.querySelectorAll('.level-content:not(.hidden) .grid-cell');
            cells.forEach(cell => cell.classList.remove('selected', 'locked'));
            this.updateLevel2();
        }
    }

    level2Next() {
        if (this.level2Index < 25) {
            this.level2Index++;
            this.level2Selected = [];
            const cells = document.querySelectorAll('.level-content:not(.hidden) .grid-cell');
            cells.forEach(cell => cell.classList.remove('selected', 'locked'));
            this.updateLevel2();
        }
    }

    initLevel3() {
        const selector = document.getElementById('letter-selector');
        selector.innerHTML = '';
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        letters.split('').forEach(letter => {
            const btn = document.createElement('button');
            btn.className = 'selector-letter';
            btn.textContent = letter;
            btn.addEventListener('click', () => this.showLetterInfo(letter));
            selector.appendChild(btn);
        });
    }

    showLetterInfo(letter) {
        const dots = BRAILLE_DATA[letter];
        const result = document.getElementById('selector-result');
        result.innerHTML = `
            <span style="font-size: 2rem; font-weight: 600; color: var(--primary-color);">${letter}</span>
            <span style="font-size: 1.5rem; color: var(--light-text);">→</span>
            <div class="braille-cell">
                ${[1,2,3,4,5,6].map(i => `<div class="dot dot-${i} ${dots.includes(i) ? 'active' : ''}"></div>`).join('')}
            </div>
            <span style="font-size: 0.9rem; color: var(--light-text);">点位：${dots.join('、')}</span>
        `;
    }

    initLevel4() {
        this.level4Score = 0;
        this.level4Remaining = 10;
        this.updateLevel4Display();
        this.generateLevel4Question();
        this.generateDictionary();
    }

    updateLevel4Display() {
        document.getElementById('match-score').textContent = this.level4Score;
        document.getElementById('match-remaining').textContent = this.level4Remaining;
    }

    generateLevel4Question() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const randomIndex = Math.floor(Math.random() * 26);
        this.level4CurrentLetter = letters[randomIndex];
        
        const brailleCell = document.getElementById('match-braille');
        brailleCell.innerHTML = '';
        const dots = BRAILLE_DATA[this.level4CurrentLetter];
        for (let i = 1; i <= 6; i++) {
            const dot = document.createElement('div');
            dot.className = `dot dot-${i} ${dots.includes(i) ? 'active' : ''}`;
            brailleCell.appendChild(dot);
        }
        
        this.generateOptions();
    }

    generateOptions() {
        const options = document.getElementById('match-options');
        options.innerHTML = '';
        
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const correctLetter = this.level4CurrentLetter;
        const wrongLetters = letters.split('').filter(l => l !== correctLetter);
        
        const optionLetters = [correctLetter];
        while (optionLetters.length < 6) {
            const random = wrongLetters[Math.floor(Math.random() * wrongLetters.length)];
            if (!optionLetters.includes(random)) {
                optionLetters.push(random);
            }
        }
        
        optionLetters.sort(() => Math.random() - 0.5);
        
        optionLetters.forEach(letter => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = letter;
            btn.addEventListener('click', () => this.checkLevel4Answer(btn, letter === correctLetter));
            options.appendChild(btn);
        });
    }

    checkLevel4Answer(btn, isCorrect) {
        const options = document.querySelectorAll('.option-btn');
        options.forEach(opt => opt.style.pointerEvents = 'none');
        
        if (isCorrect) {
            btn.classList.add('correct');
            this.level4Score += 10;
            document.getElementById('level4-feedback').textContent = '正确！';
            document.getElementById('level4-feedback').className = 'feedback-area success';
        } else {
            btn.classList.add('wrong');
            document.getElementById('level4-feedback').textContent = `错误！正确答案是 ${this.level4CurrentLetter}`;
            document.getElementById('level4-feedback').className = 'feedback-area error';
        }
        
        this.level4Remaining--;
        this.updateLevel4Display();
        
        if (this.level4Remaining > 0) {
            setTimeout(() => {
                this.generateLevel4Question();
                document.getElementById('level4-feedback').innerHTML = '';
            }, 1000);
        } else {
            setTimeout(() => this.showSuccess(), 1000);
        }
    }

    generateDictionary() {
        const grid = document.getElementById('dictionary-grid');
        grid.innerHTML = '';
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        letters.split('').forEach(letter => {
            const dots = BRAILLE_DATA[letter];
            const item = document.createElement('div');
            item.className = 'dict-item';
            item.innerHTML = `
                <span class="dict-letter">${letter}</span>
                <div class="dict-braille">
                    ${[1,2,3,4,5,6].map(i => `<div class="dict-dot ${dots.includes(i) ? 'active' : ''}"></div>`).join('')}
                </div>
            `;
            grid.appendChild(item);
        });
    }

    initLevel5() {
        const usedWords = this.usedWordsPerLevel[5] || [];
        const available = ENGLISH_WORDS.filter(w => !usedWords.includes(w) && w.length >= 4);
        
        if (available.length === 0) {
            this.showSuccess();
            return;
        }
        
        this.level5Word = available[Math.floor(Math.random() * available.length)];
        usedWords.push(this.level5Word);
        this.usedWordsPerLevel[5] = usedWords;
        this.saveUsedWords();
        
        this.level5CurrentIndex = 0;
        this.level5CompletedLetters = [];
        this.level5Selected = [];
        
        document.getElementById('level5-word').textContent = '_'.repeat(this.level5Word.length);
        this.updateLevel5Progress();
        
        const grid = document.getElementById('level5-grid');
        const cells = grid.querySelectorAll('.grid-cell');
        cells.forEach(cell => {
            cell.classList.remove('selected');
            cell.addEventListener('click', () => this.clickLevel5Dot(cell));
        });
        
        this.generateLevel5Dictionary();
    }

    updateLevel5Progress() {
        const progress = document.getElementById('level5-progress');
        progress.innerHTML = '';
        
        for (let i = 0; i < this.level5Word.length; i++) {
            const letter = document.createElement('div');
            letter.className = `progress-letter ${i < this.level5CurrentIndex ? 'completed' : i === this.level5CurrentIndex ? 'active' : 'pending'}`;
            letter.textContent = i < this.level5CurrentIndex ? this.level5Word[i] : '?';
            progress.appendChild(letter);
        }
        
        document.getElementById('current-letter').textContent = this.level5Word[this.level5CurrentIndex];
    }

    clickLevel5Dot(cell) {
        const dotNum = parseInt(cell.dataset.dot);
        
        if (!cell.classList.contains('selected')) {
            cell.classList.add('selected');
            this.level5Selected.push(dotNum);
        }
    }

    level5Confirm() {
        const currentLetter = this.level5Word[this.level5CurrentIndex];
        const expected = BRAILLE_DATA[currentLetter];
        
        const feedback = document.getElementById('level5-feedback');
        
        if (this.level5Selected.length === expected.length && 
            this.level5Selected.every(dot => expected.includes(dot))) {
            this.level5CompletedLetters.push(currentLetter);
            this.level5CurrentIndex++;
            this.level5Selected = [];
            
            const cells = document.querySelectorAll('.level-content:not(.hidden) .grid-cell');
            cells.forEach(cell => cell.classList.remove('selected'));
            
            feedback.textContent = '正确！';
            feedback.className = 'feedback-area success';
            
            if (this.level5CurrentIndex >= this.level5Word.length) {
                setTimeout(() => this.showSuccess(), 1000);
            } else {
                this.updateLevel5Progress();
            }
        } else {
            feedback.textContent = '不对，请重新尝试';
            feedback.className = 'feedback-area error';
            this.level5Selected = [];
            const cells = document.querySelectorAll('.level-content:not(.hidden) .grid-cell');
            cells.forEach(cell => cell.classList.remove('selected'));
        }
    }

    level5Reset() {
        this.level5Selected = [];
        const cells = document.querySelectorAll('.level-content:not(.hidden) .grid-cell');
        cells.forEach(cell => cell.classList.remove('selected'));
        document.getElementById('level5-feedback').innerHTML = '';
    }

    generateLevel5Dictionary() {
        const grid = document.getElementById('level5-dictionary');
        grid.innerHTML = '';
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        letters.split('').forEach(letter => {
            const dots = BRAILLE_DATA[letter];
            const item = document.createElement('div');
            item.className = 'dict-item';
            item.innerHTML = `
                <span class="dict-letter">${letter}</span>
                <div class="dict-braille">
                    ${[1,2,3,4,5,6].map(i => `<div class="dict-dot ${dots.includes(i) ? 'active' : ''}"></div>`).join('')}
                </div>
            `;
            grid.appendChild(item);
        });
    }

    initLevel6() {
        this.level6Score = 0;
        this.level6Remaining = 8;
        this.updateLevel6Display();
        this.generateLevel6Word();
    }

    updateLevel6Display() {
        document.getElementById('chain-score').textContent = this.level6Score;
        document.getElementById('chain-remaining').textContent = this.level6Remaining;
    }

    generateLevel6Word() {
        const usedWords = this.usedWordsPerLevel[6] || [];
        const available = ENGLISH_WORDS.filter(w => !usedWords.includes(w) && w.length >= 3);
        
        if (available.length === 0) {
            this.showSuccess();
            return;
        }
        
        this.level6PrevWord = available[Math.floor(Math.random() * available.length)];
        usedWords.push(this.level6PrevWord);
        this.usedWordsPerLevel[6] = usedWords;
        this.saveUsedWords();
        
        document.getElementById('prev-word-label').textContent = this.level6PrevWord;
        
        const brailleContainer = document.getElementById('prev-word-braille');
        brailleContainer.innerHTML = '';
        
        this.level6PrevWord.split('').forEach(letter => {
            const cell = document.createElement('div');
            cell.className = 'braille-cell';
            const dots = BRAILLE_DATA[letter];
            for (let i = 1; i <= 6; i++) {
                const dot = document.createElement('div');
                dot.className = `dot dot-${i} ${dots.includes(i) ? 'active' : ''}`;
                cell.appendChild(dot);
            }
            brailleContainer.appendChild(cell);
        });
        
        document.getElementById('chain-input').value = '';
    }

    submitChain() {
        const input = document.getElementById('chain-input').value.toUpperCase().trim();
        
        if (!input) {
            document.getElementById('level6-feedback').textContent = '请输入单词';
            document.getElementById('level6-feedback').className = 'feedback-area error';
            return;
        }
        
        const lastLetter = this.level6PrevWord[this.level6PrevWord.length - 1];
        const firstLetter = input[0];
        
        if (firstLetter !== lastLetter) {
            document.getElementById('level6-feedback').textContent = `单词必须以 ${lastLetter} 开头！`;
            document.getElementById('level6-feedback').className = 'feedback-area error';
            return;
        }
        
        if (ENGLISH_WORDS.includes(input)) {
            this.level6Score += input.length * 5;
            this.level6Remaining--;
            this.updateLevel6Display();
            
            document.getElementById('level6-feedback').textContent = `正确！+${input.length * 5}分`;
            document.getElementById('level6-feedback').className = 'feedback-area success';
            
            if (this.level6Remaining > 0) {
                setTimeout(() => {
                    this.generateLevel6Word();
                    document.getElementById('level6-feedback').innerHTML = '';
                }, 1000);
            } else {
                setTimeout(() => this.showSuccess(), 1000);
            }
        } else {
            document.getElementById('level6-feedback').textContent = '不存在这个单词';
            document.getElementById('level6-feedback').className = 'feedback-area error';
        }
    }

    initLevel7() {
        this.level7Score = 0;
        this.level7Remaining = 6;
        this.level7Hints = [];
        this.level7AdjectiveLeft = 4;
        this.level7LetterLeft = 2;
        this.updateLevel7Display();
        this.generateLevel7Word();
    }

    updateLevel7Display() {
        document.getElementById('decrypt-score').textContent = this.level7Score;
        document.getElementById('decrypt-remaining').textContent = this.level7Remaining;
        document.getElementById('buy-adjective').textContent = `兑换(${this.level7AdjectiveLeft}/4)`;
        document.getElementById('buy-letter').textContent = `兑换(${this.level7LetterLeft}/2)`;
        this.updateLevel7HintsDisplay();
    }

    generateLevel7Word() {
        const usedWords = this.usedWordsPerLevel[7] || [];
        const available = WORD_LIST.filter(w => !usedWords.includes(w));
        
        if (available.length === 0) {
            this.showSuccess();
            return;
        }
        
        this.level7CurrentWord = available[Math.floor(Math.random() * available.length)];
        usedWords.push(this.level7CurrentWord);
        this.usedWordsPerLevel[7] = usedWords;
        this.saveUsedWords();
        
        const brailleContainer = document.getElementById('decrypt-braille');
        brailleContainer.innerHTML = '';
        
        this.level7CurrentWord.split('').forEach(letter => {
            const cell = document.createElement('div');
            cell.className = 'braille-cell';
            const dots = BRAILLE_DATA[letter];
            for (let i = 1; i <= 6; i++) {
                const dot = document.createElement('div');
                dot.className = `dot dot-${i} ${dots.includes(i) ? 'active' : ''}`;
                cell.appendChild(dot);
            }
            brailleContainer.appendChild(cell);
        });
        
        document.getElementById('decrypt-input').value = '';
        document.getElementById('level7-feedback').innerHTML = '';
        document.getElementById('current-hints').innerHTML = '';
        this.level7Hints = [];
    }

    submitDecrypt() {
        const input = document.getElementById('decrypt-input').value.toUpperCase().trim();
        
        if (!input) {
            document.getElementById('level7-feedback').textContent = '请输入答案';
            document.getElementById('level7-feedback').className = 'feedback-area error';
            return;
        }
        
        if (input === this.level7CurrentWord) {
            const basePoints = this.level7CurrentWord.length * 10;
            const hintPenalty = (4 - this.level7AdjectiveLeft) * 5 + (2 - this.level7LetterLeft) * 15;
            const earned = Math.max(5, basePoints - hintPenalty);
            
            this.level7Score += earned;
            this.level7Remaining--;
            this.updateLevel7Display();
            
            document.getElementById('level7-feedback').textContent = `正确！+${earned}分`;
            document.getElementById('level7-feedback').className = 'feedback-area success';
            
            if (this.level7Remaining > 0) {
                setTimeout(() => {
                    this.level7AdjectiveLeft = 4;
                    this.level7LetterLeft = 2;
                    this.level7Hints = [];
                    this.generateLevel7Word();
                    this.updateLevel7Display();
                }, 1500);
            } else {
                setTimeout(() => this.showSuccess(), 1500);
            }
        } else {
            document.getElementById('level7-feedback').textContent = '答案不正确，请再试一次';
            document.getElementById('level7-feedback').className = 'feedback-area error';
        }
    }

    buyAdjective() {
        if (this.level7AdjectiveLeft <= 0) {
            document.getElementById('level7-feedback').textContent = '形容词提示已用完';
            document.getElementById('level7-feedback').className = 'feedback-area error';
            return;
        }
        if (!this.usePoints(5)) {
            document.getElementById('level7-feedback').textContent = '积分不足（需要5积分）';
            document.getElementById('level7-feedback').className = 'feedback-area error';
            return;
        }
        
        const adjectives = ADJECTIVE_HINTS[this.level7CurrentWord] || ['有趣'];
        const usedAdjectives = this.level7Hints.map(h => h.replace('提示：', ''));
        const availableAdjectives = adjectives.filter(a => !usedAdjectives.includes(a));
        
        if (availableAdjectives.length === 0) {
            document.getElementById('level7-feedback').textContent = '没有更多独特的形容词提示了';
            document.getElementById('level7-feedback').className = 'feedback-area error';
            this.points += 5;
            this.savePoints();
            this.updatePointsDisplay();
            return;
        }
        
        const randomAdj = availableAdjectives[Math.floor(Math.random() * availableAdjectives.length)];
        
        this.level7Hints.push(`提示：${randomAdj}`);
        this.level7AdjectiveLeft--;
        this.updateLevel7Display();
        document.getElementById('level7-feedback').textContent = '已获得形容词提示！';
        document.getElementById('level7-feedback').className = 'feedback-area success';
    }

    buyLetter() {
        if (this.level7LetterLeft <= 0) {
            document.getElementById('level7-feedback').textContent = '字母提示已用完';
            document.getElementById('level7-feedback').className = 'feedback-area error';
            return;
        }
        if (!this.usePoints(15)) {
            document.getElementById('level7-feedback').textContent = '积分不足（需要15积分）';
            document.getElementById('level7-feedback').className = 'feedback-area error';
            return;
        }
        
        const wordLength = this.level7CurrentWord.length;
        const randomIndex = Math.floor(Math.random() * wordLength);
        const letter = this.level7CurrentWord[randomIndex];
        
        this.level7Hints.push(`位置${randomIndex + 1}是：${letter}`);
        this.level7LetterLeft--;
        this.updateLevel7Display();
        document.getElementById('level7-feedback').textContent = `位置${randomIndex + 1}是 ${letter}！`;
        document.getElementById('level7-feedback').className = 'feedback-area success';
    }

    buySelect() {
        if (!this.usePoints(25)) {
            document.getElementById('level7-feedback').textContent = '积分不足（需要25积分）';
            document.getElementById('level7-feedback').className = 'feedback-area error';
            return;
        }
        
        const positions = [];
        for (let i = 0; i < this.level7CurrentWord.length; i++) {
            positions.push(`位置${i + 1}`);
        }
        
        const select = document.createElement('select');
        select.innerHTML = positions.map((p, i) => `<option value="${i}">${p}</option>`).join('');
        
        const container = document.createElement('div');
        container.style.marginTop = '10px';
        container.appendChild(select);
        
        const btn = document.createElement('button');
        btn.className = 'secondary-btn';
        btn.textContent = '确认';
        btn.addEventListener('click', () => {
            const index = parseInt(select.value);
            const letter = this.level7CurrentWord[index];
            this.level7Hints.push(`位置${index + 1}是：${letter}`);
            this.updateLevel7Display();
            container.remove();
            document.getElementById('level7-feedback').textContent = `位置${index + 1}是 ${letter}！`;
            document.getElementById('level7-feedback').className = 'feedback-area success';
        });
        container.appendChild(btn);
        
        document.getElementById('current-hints').appendChild(container);
    }

    updateLevel7HintsDisplay() {
        const container = document.getElementById('current-hints');
        const existing = container.querySelector('select');
        if (!existing) {
            container.innerHTML = '';
            this.level7Hints.forEach(hint => {
                const tag = document.createElement('span');
                tag.className = 'hint-tag';
                tag.textContent = hint;
                container.appendChild(tag);
            });
        }
    }

    initLevel8() {
        if (!this.usedWordsPerLevel[8]) {
            this.usedWordsPerLevel[8] = [];
        }
        const usedWords = this.usedWordsPerLevel[8];
        const available = WORD_LIST.filter(w => !usedWords.includes(w));
        
        if (available.length === 0) {
            this.showSuccess();
            return;
        }
        
        this.level8Word = available[Math.floor(Math.random() * available.length)];
        usedWords.push(this.level8Word);
        this.level8SelectedCells = [];
        this.level8Revealed = [];
        this.level8Board = [];
        this.level8RevealedLetters = [];
        this.level8Hints = [];
        this.level8AdjectiveLeft = 2;
        
        document.getElementById('level8-word').textContent = '?'.repeat(this.level8Word.length);
        this.generateLevel8Board();
        this.updateLevel8Found();
        this.updateLevel8HintsDisplay();
        document.getElementById('level8-feedback').innerHTML = '';
    }

    generateLevel8Board() {
        const board = document.getElementById('wordfind8-board');
        board.innerHTML = '';
        
        const letters = this.level8Word.split('');
        const randomLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').filter(l => !letters.includes(l));
        
        const boardLetters = [...letters];
        while (boardLetters.length < 36) {
            const random = randomLetters[Math.floor(Math.random() * randomLetters.length)];
            boardLetters.push(random);
        }
        
        boardLetters.sort(() => Math.random() - 0.5);
        this.level8Board = boardLetters;
        
        boardLetters.forEach((letter, index) => {
            const cell = document.createElement('div');
            cell.className = 'wordfind-cell';
            cell.dataset.index = index;
            const dots = BRAILLE_DATA[letter];
            
            cell.innerHTML = `
                <div class="cell-braille">
                    ${[1,2,3,4,5,6].map(i => `<div class="braille-dot ${dots.includes(i) ? 'active' : ''}"></div>`).join('')}
                </div>
                <span class="cell-letter" style="opacity: 0.15;">?</span>
            `;
            
            cell.addEventListener('click', () => this.clickLevel8Cell(cell, index, letter));
            board.appendChild(cell);
        });
    }

    clickLevel8Cell(cell, index, letter) {
        if (this.level8SelectedCells.length >= this.level8Word.length) {
            document.getElementById('level8-feedback').textContent = `只能选择${this.level8Word.length}个字母`;
            document.getElementById('level8-feedback').className = 'feedback-area error';
            return;
        }
        
        const isAlreadySelected = this.level8SelectedCells.some(c => c.index === index);
        if (isAlreadySelected) {
            cell.classList.remove('selected');
            cell.style.opacity = '1';
            this.level8SelectedCells = this.level8SelectedCells.filter(c => c.index !== index);
        } else {
            cell.classList.add('selected');
            cell.style.opacity = '0.5';
            this.level8SelectedCells.push({ index, letter });
        }
        
        document.getElementById('level8-feedback').innerHTML = '';
        this.updateLevel8Found();
    }

    updateLevel8Found() {
        const foundContainer = document.getElementById('level8-found');
        foundContainer.innerHTML = '';
        
        this.level8SelectedCells.forEach(({ letter }) => {
            const chip = document.createElement('div');
            chip.className = 'found-letter-chip';
            const dots = BRAILLE_DATA[letter];
            const isRevealed = this.level8RevealedLetters.includes(letter);
            
            chip.innerHTML = `
                <span>${isRevealed ? letter : '?'}</span>
                <div class="chip-braille">
                    ${[1,2,3,4,5,6].map(i => `<div class="chip-dot ${dots.includes(i) ? 'active' : ''}"></div>`).join('')}
                </div>
            `;
            foundContainer.appendChild(chip);
        });
    }

    checkLevel8() {
        const selectedLetters = this.level8SelectedCells.map(c => c.letter).join('');
        
        if (selectedLetters.length !== this.level8Word.length) {
            document.getElementById('level8-feedback').textContent = `请选择${this.level8Word.length}个字母`;
            document.getElementById('level8-feedback').className = 'feedback-area error';
            return;
        }
        
        if (selectedLetters === this.level8Word) {
            this.level8RevealedLetters = this.level8Word.split('');
            
            const cells = document.querySelectorAll('.wordfind-cell');
            cells.forEach(cell => {
                const index = parseInt(cell.dataset.index);
                const isSelected = this.level8SelectedCells.some(c => c.index === index);
                if (isSelected) {
                    const letter = this.level8Board[index];
                    cell.querySelector('.cell-letter').textContent = letter;
                    cell.querySelector('.cell-letter').style.opacity = '1';
                }
            });
            
            this.updateLevel8Found();
            document.getElementById('level8-feedback').textContent = '正确！找到了隐藏的单词！';
            document.getElementById('level8-feedback').className = 'feedback-area success';
            
            setTimeout(() => this.showSuccess(), 1500);
        } else {
            document.getElementById('level8-feedback').textContent = '不对，请重新选择';
            document.getElementById('level8-feedback').className = 'feedback-area error';
        }
    }

    clearLevel8() {
        this.level8SelectedCells.forEach(({ index }) => {
            const cell = document.querySelector(`.wordfind-cell[data-index="${index}"]`);
            cell.classList.remove('selected');
            cell.style.opacity = '1';
        });
        this.level8SelectedCells = [];
        this.updateLevel8Found();
        document.getElementById('level8-feedback').innerHTML = '';
    }

    buyLevel8Adjective() {
        if (this.level8AdjectiveLeft <= 0) {
            document.getElementById('level8-feedback').textContent = '形容词提示已用完';
            document.getElementById('level8-feedback').className = 'feedback-area error';
            return;
        }
        if (!this.usePoints(5)) {
            document.getElementById('level8-feedback').textContent = '积分不足（需要5积分）';
            document.getElementById('level8-feedback').className = 'feedback-area error';
            return;
        }
        
        const adjectives = ADJECTIVE_HINTS[this.level8Word] || ['有趣'];
        const usedAdjectives = this.level8Hints.map(h => h.replace('提示：', ''));
        const availableAdjectives = adjectives.filter(a => !usedAdjectives.includes(a));
        
        if (availableAdjectives.length === 0) {
            document.getElementById('level8-feedback').textContent = '没有更多独特的形容词提示了';
            document.getElementById('level8-feedback').className = 'feedback-area error';
            this.points += 5;
            this.savePoints();
            this.updatePointsDisplay();
            return;
        }
        
        const randomAdj = availableAdjectives[Math.floor(Math.random() * availableAdjectives.length)];
        
        this.level8Hints.push(`提示：${randomAdj}`);
        this.level8AdjectiveLeft--;
        this.updateLevel8HintsDisplay();
        document.getElementById('buy-level8-adjective').textContent = `兑换(${this.level8AdjectiveLeft}/2)`;
        document.getElementById('level8-feedback').textContent = '已获得形容词提示！';
        document.getElementById('level8-feedback').className = 'feedback-area success';
    }

    updateLevel8HintsDisplay() {
        const container = document.getElementById('level8-hints');
        container.innerHTML = '';
        this.level8Hints.forEach(hint => {
            const tag = document.createElement('span');
            tag.className = 'hint-tag';
            tag.textContent = hint;
            container.appendChild(tag);
        });
    }

    buyRandomReveal() {
        if (!this.usePoints(8)) {
            document.getElementById('level8-feedback').textContent = '积分不足（需要8积分）';
            document.getElementById('level8-feedback').className = 'feedback-area error';
            return;
        }
        
        const unrevealedIndices = [];
        this.level8Word.split('').forEach((letter, i) => {
            const foundIndex = this.level8Board.indexOf(letter, i > 0 ? this.level8Board.indexOf(letter) + 1 : 0);
            if (foundIndex !== -1 && !this.level8RevealedLetters.includes(letter)) {
                unrevealedIndices.push(foundIndex);
            }
        });
        
        if (unrevealedIndices.length === 0) {
            document.getElementById('level8-feedback').textContent = '所有字母已显示';
            document.getElementById('level8-feedback').className = 'feedback-area error';
            this.points += 8;
            this.savePoints();
            this.updatePointsDisplay();
            return;
        }
        
        const idx = unrevealedIndices[Math.floor(Math.random() * unrevealedIndices.length)];
        const letter = this.level8Board[idx];
        
        this.level8RevealedLetters.push(letter);
        
        const cells = document.querySelectorAll('.wordfind-cell');
        cells[idx].querySelector('.cell-letter').textContent = letter;
        cells[idx].querySelector('.cell-letter').style.opacity = '1';
        cells[idx].classList.add('revealed');
        
        document.getElementById('level8-feedback').textContent = '已揭示一个字母！';
        document.getElementById('level8-feedback').className = 'feedback-area success';
        this.updateLevel8Found();
    }

    buySelectReveal() {
        if (!this.usePoints(18)) {
            document.getElementById('level8-feedback').textContent = '积分不足（需要18积分）';
            document.getElementById('level8-feedback').className = 'feedback-area error';
            return;
        }
        
        const wordLength = this.level8Word.length;
        const positions = [];
        for (let i = 0; i < wordLength; i++) {
            if (!this.level8RevealedLetters.includes(this.level8Word[i])) {
                positions.push({ index: i, letter: this.level8Word[i] });
            }
        }
        
        if (positions.length === 0) {
            document.getElementById('level8-feedback').textContent = '所有字母已显示';
            document.getElementById('level8-feedback').className = 'feedback-area error';
            this.points += 18;
            this.savePoints();
            this.updatePointsDisplay();
            return;
        }
        
        const select = document.createElement('select');
        select.innerHTML = positions.map(p => `<option value="${p.index},${p.letter}">位置${p.index + 1}</option>`).join('');
        
        const container = document.createElement('div');
        container.style.marginTop = '10px';
        container.appendChild(select);
        
        const btn = document.createElement('button');
        btn.className = 'secondary-btn';
        btn.textContent = '确认';
        btn.addEventListener('click', () => {
            const [index, letter] = select.value.split(',');
            this.level8RevealedLetters.push(letter);
            
            const boardIndex = this.level8Board.indexOf(letter);
            if (boardIndex !== -1) {
                const cells = document.querySelectorAll('.wordfind-cell');
                cells[boardIndex].querySelector('.cell-letter').textContent = letter;
                cells[boardIndex].querySelector('.cell-letter').style.opacity = '1';
                cells[boardIndex].classList.add('revealed');
            }
            
            container.remove();
            document.getElementById('level8-feedback').textContent = `位置${parseInt(index) + 1}是 ${letter}！`;
            document.getElementById('level8-feedback').className = 'feedback-area success';
            this.updateLevel8Found();
        });
        container.appendChild(btn);
        
        const shopItems = document.querySelector('.hint-shop');
        shopItems.appendChild(container);
    }

    initLevel9() {
        this.level9Score = 0;
        this.level9Tiles = [];
        this.level9UsedIndices = [];
        this.updateLevel9Display();
        this.generateLevel9Tiles();
    }

    updateLevel9Display() {
        document.getElementById('scrabble-score').textContent = this.level9Score;
    }

    generateLevel9Tiles() {
        const rack = document.getElementById('scrabble-rack');
        rack.innerHTML = '';
        
        const letterDistribution = {
            'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 'F': 2, 'G': 3, 'H': 2, 'I': 9, 'J': 1,
            'K': 1, 'L': 4, 'M': 2, 'N': 6, 'O': 8, 'P': 2, 'Q': 1, 'R': 6, 'S': 4, 'T': 6,
            'U': 4, 'V': 2, 'W': 2, 'X': 1, 'Y': 2, 'Z': 1
        };
        
        const letters = [];
        for (const [letter, count] of Object.entries(letterDistribution)) {
            for (let i = 0; i < count; i++) {
                letters.push(letter);
            }
        }
        
        const shuffled = letters.sort(() => Math.random() - 0.5);
        this.level9Tiles = shuffled.slice(0, 7);
        
        this.level9Tiles.forEach((letter, index) => {
            const tile = document.createElement('div');
            tile.className = 'scrabble-tile';
            tile.dataset.index = index;
            
            const dots = BRAILLE_DATA[letter];
            tile.innerHTML = `
                <span class="tile-letter">${letter}</span>
                <div class="tile-braille">
                    ${[1,2,3,4,5,6].map(i => `<div class="tile-dot ${dots.includes(i) ? 'active' : ''}"></div>`).join('')}
                </div>
            `;
            
            tile.addEventListener('click', () => this.clickLevel9Tile(tile, index));
            rack.appendChild(tile);
        });
    }

    clickLevel9Tile(tile, index) {
        const input = document.getElementById('scrabble-input');
        const currentValue = input.value;
        
        if (!this.level9UsedIndices.includes(index)) {
            input.value = currentValue + this.level9Tiles[index];
            this.level9UsedIndices.push(index);
            tile.style.opacity = '0.5';
            
            this.updateLevel9BrailleDisplay();
        }
    }

    updateLevel9BrailleDisplay() {
        const display = document.getElementById('scrabble-braille-display');
        display.innerHTML = '';
        
        const inputValue = document.getElementById('scrabble-input').value;
        inputValue.split('').forEach(letter => {
            const mini = document.createElement('div');
            mini.className = 'braille-mini';
            const dots = BRAILLE_DATA[letter];
            mini.innerHTML = [1,2,3,4,5,6].map(i => `<div class="mini-dot ${dots.includes(i) ? 'active' : ''}"></div>`).join('');
            display.appendChild(mini);
        });
    }

    submitScrabble() {
        const input = document.getElementById('scrabble-input').value.toUpperCase().trim();
        
        if (!input) {
            document.getElementById('level9-feedback').textContent = '请输入单词';
            document.getElementById('level9-feedback').className = 'feedback-area error';
            return;
        }
        
        const inputArray = input.split('');
        const tilesCopy = [...this.level9Tiles];
        
        let valid = true;
        for (const letter of inputArray) {
            const index = tilesCopy.indexOf(letter);
            if (index === -1) {
                valid = false;
                break;
            }
            tilesCopy[index] = '';
        }
        
        if (!valid) {
            document.getElementById('level9-feedback').textContent = '无法使用当前字母组成该单词';
            document.getElementById('level9-feedback').className = 'feedback-area error';
            return;
        }
        
        if (ENGLISH_WORDS.includes(input)) {
            const score = input.length * 10;
            this.level9Score += score;
            this.updateLevel9Display();
            
            document.getElementById('level9-feedback').textContent = `正确！+${score}分`;
            document.getElementById('level9-feedback').className = 'feedback-area success';
            
            this.level9UsedIndices = [];
            document.getElementById('scrabble-input').value = '';
            document.getElementById('scrabble-braille-display').innerHTML = '';
            
            const tiles = document.querySelectorAll('.scrabble-tile');
            tiles.forEach(tile => tile.style.opacity = '1');
            
            setTimeout(() => {
                document.getElementById('level9-feedback').innerHTML = '';
                this.generateLevel9Tiles();
            }, 1500);
        } else {
            this.level9LastSubmission = input;
            document.getElementById('level9-feedback').textContent = `组成的单词 "${input}" 不在词库中`;
            document.getElementById('level9-feedback').className = 'feedback-area error';
        }
    }

    usePoints(amount) {
        if (this.points >= amount) {
            this.points -= amount;
            this.savePoints();
            this.updatePointsDisplay();
            return true;
        }
        return false;
    }

    updatePointsDisplay() {
        document.getElementById('game-points').textContent = this.points;
        document.getElementById('total-points').textContent = this.points;
    }

    showSuccess() {
        this.hideAllScreens();
        document.getElementById('success-screen').classList.add('active');
        
        const levelNames = [
            '', '初识点位', '认识字母', '盲文知识', '字母配对', '组词闯关',
            '单词接龙', '盲文解密', '找词游戏', '盲文拼字'
        ];
        
        document.getElementById('success-level-text').textContent = `第 ${this.currentLevel} 关 · ${levelNames[this.currentLevel]}`;
        
        const basePoints = 10;
        const levelBonus = this.currentLevel * 5;
        const earned = basePoints + levelBonus;
        
        this.points += earned;
        this.savePoints();
        
        document.getElementById('earned-points').textContent = earned;
        
        const knowledgeIndex = (this.currentLevel - 1) % KNOWLEDGE.length;
        document.getElementById('knowledge-text').textContent = KNOWLEDGE[knowledgeIndex];
        
        const tipIndex = this.currentLevel % TIPS.length;
        document.getElementById('offline-text').textContent = TIPS[tipIndex].text;
        
        if (this.currentLevel < 9) {
            if (!this.unlockedLevels.includes(this.currentLevel + 1)) {
                this.unlockedLevels.push(this.currentLevel + 1);
                this.saveUnlockedLevels();
            }
