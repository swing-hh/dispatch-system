export interface IQuestionWarp {
  tid: number, // 题目id
  category: number, // 题目类型区分
  question?: IQuestion,
  jsonData?: any, // 自定义题目数据
  [propName: string]: any
}

export interface IQuestion {
  [key: string]: any
}