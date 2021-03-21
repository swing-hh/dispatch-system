/**
 * 场景入参
 */
export interface IScenePayload {
  preSceneArgs?: {
    [key: string]: any
  };
  nextSceneArgs?: {
    [key: string]: any
  };
  trans?: {
    type: "lottie";
    name: string
  }
  [key: string]: any
}

/**
 * 场景行为枚举
 */
export enum SceneActionType {
  // 场景入栈
  Push = "push",
  // 场景替换为当前的activeted场景
  Replace = "replace",
  // 销毁场景
  Destory = "destory"
}

/**
 * 场景行为
 */
export interface ISceneAction {
  // 场景类型
  type: SceneActionType;
  // 目标场景
  targetSceneID?: number;
  // 入参
  payload: IScenePayload
}

/**
 * 触发器类型
 */
export enum TriggerType {
  Complete = "complete", // 完成场景
  Answer = "answer", // 回答
  AnswerCorrect = "answerCorrect", // 回答正确
  AnswerWrong = "answerWrong", // 回答错误
  HitTimeNode = "hitTimeNode", // 命中时间节点
  Destory = "destory" // 销毁
}

/**
 * 触发器完成
 */
export interface TriggerComplete {
  name: TriggerType.Complete;
  value?: number | string;
}

/**
 * 回答
 */
export interface TriggerAnswer {
  name: TriggerType.Answer;
  value: number | string; // 答案
}

/**
 * 答对
 */
export interface TriggerAnswerCorrect {
  name: TriggerType.AnswerCorrect;
  value: number | string;
}

/**
 * 答错
 */
export interface TriggerAnswerWrong {
  name: TriggerType.AnswerWrong;
  value: number | string;
}

/**
 * 命中时间节点
 */
export interface TriggerHieTimeNode {
  name: TriggerType.HitTimeNode;
  value: number;
}

/**
 * 销毁
 */
export interface TriggerDestory {
  name: TriggerType.Destory;
  value?: IScenePayload;
}

export type ITrigger = 
  | TriggerAnswer
  | TriggerAnswerCorrect
  | TriggerAnswerCorrect
  | TriggerAnswerWrong
  | TriggerComplete
  | TriggerHieTimeNode
  | TriggerDestory;

/**
 * 场景观察者，场景触发器+触发后具体行为的封装
 * 用与抽象场景事件与对应事件的响应
 */
export interface ISceneObserver {
  trigger: ITrigger;
  action: ISceneAction;
}
