// pages/movable/movable.js

const POI_1_STAGE = {
  HIDDEN: 0,
  BOTTOM: 1,
  TOP: 2,
}

const POI_1_BOTTOM = {
  [POI_1_STAGE.HIDDEN]: '-1050rpx',
  [POI_1_STAGE.BOTTOM]: '-300rpx',
  [POI_1_STAGE.TOP]: '0rpx',
}

const EVENT = {
  INIT: 'init',
  BEFORE_STAGE_CHANGED: 'beforeStageChanged',
  STAGE_CHANGED: 'stageChanged',
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    left: 50,
    top: 50,
    taptest: 'taptest',
    show: true,
    event: { // 'init','beforeStageChanged','stageChanged'
      type: 'init',
      px2rpx: 750 / wx.getSystemInfoSync().windowWidth,
      stages: ['-1050rpx', '-200rpx', '0rpx'], // stage:0,1,2,...
      currentStage: 0,
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    setTimeout(() => {
      this.setData({
        // show: false,
      })
    }, 3000)
  },
  taptest() {
    this.setData({
      show: !this.data.show,
    })
  },
  animationToStage(e) {
    console.log('animationToStage', e)
  },
  poiInfoTouchStart(e) {
    console.log('poiInfoTouchStart', e)
  },
  poiInfoTouchEnd(e) {
    console.log('poiInfoTouchEnd', e)
  },
  toStage(stage) {
    const bottom = POI_1_BOTTOM[stage];
    const animation = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease-in-out',
    }).bottom(bottom).step();
    this.setData({
      animation: animation.export(),
      event: {
        type: EVENT.BEFORE_STAGE_CHANGED,
        nextStage: stage
      }
    });
  },
  stage0() {
    this.toStage(POI_1_STAGE.HIDDEN);
  },
  stage1() {
    this.toStage(POI_1_STAGE.BOTTOM);
  },
  stage2() {
    this.toStage(POI_1_STAGE.TOP);
  },
})