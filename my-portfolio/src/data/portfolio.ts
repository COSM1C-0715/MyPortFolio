export interface Profile
{
    name: string
    nameEn: string
    role: string
    school: string
    department: string
    graduationYear: string
    bio: string
    motto: string | null
    avatar: string | null
    links:
    {
        github: string
        twitter: string
        email: string
    }
}
export interface Skill
{
    name: string
    version: string
    level: number
    category: string
    capabilities: string[]
    note: string | null
}
export interface Venue
{
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

export interface Gamejam
{
    name: string
    date: string
    theme: string
    decsription: string
    platform: string[]
    role: string
    team: string
    result: string | null
    url: string | null
    reflection: string
}

export type CertiStatus = '取得済み' | '受験予定' | '取得予定' | '学習中'

export interface Certification
{
    name: string
    date: string
    category: string
    score: string | null
    status: CertiStatus
}

export interface TimelineItem
{
    year: string
    event: string
}

export const profile: Profile = 
{
    name: '髙野 竜寛',
    nameEn: 'Tatsuhiro Takano',
    role: 'Game Creater',
    school: '京都デザイン＆テクノロジー専門学校',
    department: 'ゲームクリエイター科',
    graduationYear: '2028年度卒業見込み',
    bio: '',
    motto: '変人ではあるが変態ではない',
    avatar: null,
    links:
    {
        github: 'https://github.com/COSM1C-0715',
        twitter: '',
        email: ''
    }
}

export const skills: Skill[] = 
[
    {
        name: 'Unity',
        version: '',
        level: 50,
        category: 'game',
        capabilities: [],
        note: '',
    },
]

export const works: Work[] = 
[
    {
        id:1,
        
    }
]