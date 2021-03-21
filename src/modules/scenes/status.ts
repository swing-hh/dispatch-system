export enum SceneStatus {
  Inactive = "inactive", // 活动状态
  ToBePrepared = "toBePrepared", // 准备
  Preparing = "preparing", // 解析
  Active = "active", // 积极
  Pause = "pause", // 暂停
  Resuming = "resuming", // 恢复
  Releasing = "releasing", // 释放
  Released = "released" // 发布
}

export enum SceneStatusActions {
  SetData = "setData", // 设置数据
  FinishedMount = "finishedMount", // 完成安装
  StartPreparing = "startPreparing", // 开始准备
  FinishedPreparing = "finishedPreparing", // 完成准备
  StartPausing = "startPausing", // 开始暂停
  StartResuming = "startResuming", // 开始恢复
  FinishedResuming = "finishedResuming", // 完成恢复
  DestoryScene = "destoryScene", // 销毁场景
  DoRelease = "doRelease", // 执行释放
  PrepareToRestart = "prepareToRestart" // 准备重新启动
}

export const SceneStatusActionsMap = {
  [SceneStatus.Inactive]: {
    [SceneStatusActions.SetData]: SceneStatus.ToBePrepared,
    [SceneStatusActions.FinishedMount]: SceneStatus.ToBePrepared
  },
  [SceneStatus.ToBePrepared]: {
    [SceneStatusActions.StartPreparing]: SceneStatus.Preparing
  },
  [SceneStatus.Preparing]: {
    [SceneStatusActions.FinishedPreparing]: SceneStatus.Active
  },
  [SceneStatus.Active]: {
    [SceneStatusActions.DestoryScene]: SceneStatus.Releasing,
    [SceneStatusActions.StartPausing]: SceneStatus.Pause,
    [SceneStatusActions.StartResuming]: SceneStatus.Active
  },
  [SceneStatus.Pause]: {
    [SceneStatusActions.StartResuming]: SceneStatus.Resuming
  },
  [SceneStatus.Resuming]: {
    [SceneStatusActions.FinishedPreparing]: SceneStatus.Active
  },
  [SceneStatus.Releasing]: {
    [SceneStatusActions.DoRelease]: SceneStatus.Released
  },
  [SceneStatus.Released]: {
    [SceneStatusActions.PrepareToRestart]: SceneStatus.Inactive
  }
}