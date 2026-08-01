import type { IconType } from 'react-icons'
import { FaGamepad, FaGlobe, FaCube, FaFolder } from 'react-icons/fa6'

export interface Profile {
  name: string
  nameEn: string
  role: string
  school: string
  department: string
  graduationYear: string
  bio: string
  motto: string | null
  avatar: string | null
  links: {
    github: string
    twitter: string | null
    email: string
  }
}

export interface Skill {
  name: string
  version: string
  level: number
  category: string
  capabilities: string[]
  note: string | null
}

export interface Venue {
  name: string
  date: string
}

export interface Work {
  id: number
  title: string
  genre: string
  category: string
  thumbnail: string | null
  screenshots: string[]
  description: string
  tags: string[]
  platform: string[]
  period: string
  team: string
  role: string
  github: string | null
  link: string | null
  venues: Venue[]
  techPoints: string | null
  designNotes: string | null
  implementationTheme: string | null
  troubleshooting: string | null
  performance: string | null
}

export interface GameJam {
  name: string
  date: string
  theme: string
  description: string
  platform: string[]
  role: string
  team: string
  result: string | null
  url: string | null
  reflection: string
}

export type CertStatus = '取得済み' | '受験予定' | '取得予定' | '学習中'

export interface Certification {
  name: string
  date: string
  category: string
  score: string | null
  status: CertStatus
}

export interface TimelineItem {
  year: string
  event: string
}

export const CATEGORY_ICON: Record<string, IconType> = {
  game: FaGamepad,
  web: FaGlobe,
  '3d': FaCube,
}

export const CATEGORY_ICON_FALLBACK: IconType = FaFolder

export const profile: Profile = {
  name: '髙野　竜寛',
  nameEn: 'Takano Tatsuhiro',
  role: 'Game Creator',
  school: '京都デザイン＆テクノロジー専門学校',
  department: 'スーパーAI&テクノロジー科',
  graduationYear: '2028年3月卒業見込み',
  bio: '私はチーム制作をするとき、コミュニケーションを取ることを常に意識するようにしています。ゲーム企画の仕様書を見て、理解が曖昧な部分は全て聞いて解釈を擦り合わせたり、システムを実装するときもどういう風に設計したいかを他のプログラマーメンバーに相談したりしました。また、自分の担当箇所が終わった後は次担当する箇所を探したり、他の人に進捗度合いを確認し、手詰まり気味だったら意見を言ったりして考えを整理する手伝いをしたりして進捗が止まらないようにしました。そして、自分でプログラミングをするときは常にリファクタリングすることを心がけています。例えば、一つのクラスでやることをできるだけ一つに絞ったり、クラスの中の変数で使っている関数が1つしかなかったらフィールドからローカル変数に切り替えるということをしたりしています。うまくリファクタリングできた時はすごくうれしくなります。',
  motto: '変人ではあるが変態ではない',
  avatar: null,
  links: {
    github: 'https://github.com/username',
    twitter: 'https://twitter.com/username',
    email: 'taro@example.com',
  },
}

export const skills: Skill[] = [
  {
    name: 'Unity',
    version: '2022.3 LTS',
    level: 80,
    category: 'game',
    capabilities: ['3D/2Dゲーム開発', 'Physics演算','ProceduralGeneration', 'ScriptableObject'],
    note: 'プロシージャル迷宮生成・A*経路探索を個人作品で実装済み',
  },
  {
    name: 'C#',
    version: '.NET 6 / Unity対応',
    level: 70,
    category: 'language',
    capabilities: ['OOP設計', 'インターフェース活用', 'コルーチン', 'LINQ', 'ジェネリクス'],
    note: 'Unityゲーム開発を通じて実践的に習得',
  },
  {
    name: 'React',
    version: 'v18 / Hooks',
    level: 65,
    category: 'web',
    capabilities: ['コンポーネント設計', 'useState/useEffect', 'Props/Context', 'Vite構築'],
    note: 'このポートフォリオサイト自体をReactで制作',
  },
  {
    name: 'Git',
    version: '2.x',
    level: 70,
    category: 'vcs',
    capabilities: ['ブランチ運用', 'プルリクエスト', 'コンフリクト解消', 'rebase/cherry-pick'],
    note: 'チーム開発でGitHub Flowを実践。コードレビュー経験あり',
  },
  {
    name: 'GitHub',
    version: 'GitHub.com',
    level: 65,
    category: 'vcs',
    capabilities: ['リポジトリ管理', 'Issues / PR', 'GitHub Actions基礎', 'GitHub Pages'],
    note: '個人・チーム制作ともにGitHubで管理',
  },
  {
    name: 'Windows',
    version: 'Windows 11',
    level: 85,
    category: 'os',
    capabilities: ['開発環境構築', 'PowerShell基礎', 'WSL2', 'ファイルシステム管理'],
    note: 'メイン開発環境。ゲーム開発・Web開発ともにWindows上で実施',
  },
]

export const works: Work[] = [
  {
    id: 1,
    title: 'CUBE ROAD',
    genre: '3Dパズル',
    category: 'game',
    thumbnail: null,
    screenshots: [],
    description:
      'チーム制作で開発した3Dパズルゲーム。ルービックキューブの上に乗り物と道があり、スタート地点から進んでいく乗り物をルービックキューブを回転させる要領で道をつないでいき、ゴールまで導いてクリアを目指していきます。',
    tags: ['Unity', 'C#', 'ProceduralGeneration', 'NavMesh'],
    platform: ['Windows', 'WebGL'],
    period: '2024年10月〜2025年2月（4ヶ月）',
    team: 'チーム制作',
    role: 'プログラマー',
    github: 'https://github.com/COSM1C-0715/CubeRoad.git',
    link: null,
    venues: [
      { name: '学校 卒業制作展示会', date: '2026年2月' },
      { name: 'itch.io 公開', date: '2026年3月〜' },
    ],
    techPoints:
      '線路が回転したときに乗り物も一緒に回転するように、乗り物が線路の上に来た時に、乗り物を乗っている線路の子オブジェクトになるようにしました。',
    designNotes:
      '処理しているときの数値の変化を可視化できるようにしたかったので変数にSerealize属性をつけた。',
    implementationTheme:
      '',
    troubleshooting:
      '乗り物がキューブとキューブの間に入ってしまう→一つ一つのキューブの大きさを変えることで解決。',
    performance:
      '',
  },
  {
    id: 2,
    title: 'ガマちゃんラッシュ',
    genre: 'カジュアルアクションパズル2Dゲーム',
    category: 'game',
    thumbnail: null,
    screenshots: [],
    description:
      'チームで開発したカジュアルアクションパズル2Dゲーム。選んだ商品の金額を目指してガマちゃんと呼ばれる財布を振って小銭を出して高いスコアを目指すゲーム。',
    tags: ['Unity', 'C#', 'A*Pathfinding', 'ScriptableObject'],
    platform: ['Windows'],
    period: '2025年6月〜2025年9月（4ヶ月）',
    team: '3人（PG×2、レベルデザイン×1）',
    role: 'メインプログラマー（敵AI・ゲームループ担当）',
    github: 'https://github.com/Shin2519/Gamachan.git',
    link: null,
    venues: [
      { name: 'ゲームジャム（学内）', date: '2025年9月' },
    ],
    techPoints:
      '衝突判定を実装するときに文字列ではなく、オブジェクトにアタッチしたスクリプトの中にある値を取得して、数値比較をすることによって負荷を軽減した。',
    designNotes:
      'システムを実装した後に外部から見えるようにしていた変数の中で変数の中身を確認・操作する必要がないと思った変数はすべてprivateにしたり、Serealize属性を外したりし、宣言したグローバル変数の中で特定の関数で完結している変数があればローカル変数に変更した。',
    implementationTheme:
      '',
    troubleshooting:
      'ボタンが押された分だけ処理されて演出が重なる問題が発生したので、ボタンを押したときの処理をbool型の変数で制御することによって、処理がされている間はボタンを押しても何も起きないようにしました。',
    performance:
      'UIのテキストを毎フレーム更新するのではなく、表示させる値が変わったときにのみ更新させることによって負荷を削減。',
  },
]

export const gameJams: GameJam[] = [
  {
    name: '若きクリエイター展',
    date: '',
    theme: '',
    description: '2Dパズル、指定の金額を目指してお金を入れていく',
    platform: ['WebGL', 'Windows'],
    role: 'プログラマー',
    team: '4名（PG×2・デザイナー×1・サウンド×1）',
    result: null,
    url: 'https://itch.io/username/ggj2025',
    reflection: 'ゲームの経験がない方にもやってもらえるので想定していない方法がたくさん見つかり、とても勉強になった。',
  },
]

export const certifications: Certification[] = [
  {
    name: 'AI-900',
    date: '2024年6月合格',
    category: '',
    score: '700点',
    status: '取得済み',
  },
  {
    name: 'MOS-PowerPoint',
    date: '2024年9月取得',
    category: 'ベンダー認定',
    score: null,
    status: '取得済み',
  },
  {
    name: 'MOS Excel 365',
    date: '2024年8月取得',
    category: 'ベンダー認定',
    score: null,
    status: '取得済み',
  },
  {
    name: '普通自動車第一種運転免許（AT限定）',
    date: '2024年2月取得',
    category: '免許',
    score: null,
    status: '取得済み',
  },
]

export const timeline: TimelineItem[] = [
  { year: '2024年4月', event: '京都デザイン＆テクノロジー専門学校 スーパーゲームクリエイター科 入学' },
  { year: '2024年5月', event: 'Unityに初めて触れ始める' },
  { year: '2025年10月', event: '初めての合同制作' },
  { year: '2026年3月', event: '合同制作のゲーム完成' },
  { year: '2026年4月', event: 'C言語について学び始める' },
  { year: '2026年5月', event: '2回目の合同制作' },
  { year: '2026年10月', event: '合同制作のゲーム完成' },
]
