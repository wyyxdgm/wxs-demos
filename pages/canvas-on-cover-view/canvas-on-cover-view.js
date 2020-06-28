const app = getApp()

Page({
  data: {

  },
  onLoad: function() {
    this.draw1();
    this.draw2();
  },
  draw1() {
    const ctx = wx.createCanvasContext('canvas-on-cover')
    ctx.setFillStyle('green')
    ctx.fillRect(10, 10, 150, 75)
    ctx.draw()
  },
  draw2() {
    const query = wx.createSelectorQuery()
    query.select('#canvas')
      .fields({ node: true, size: true })
      .exec((res) => {
        const canvas = res[0].node
        const ctx = canvas.getContext('2d')

        this.bgImage = canvas.createImage();
        this.bgImage.src = "https://mp.easyar.cn/artravel/radar_bg.png";
        this.bgImage.onload = () => {
          console.log('onload')
          ctx.drawImage(this.bgImage, 0, 0, 100, 100);
          ctx.font="48px serif";
          ctx.fillStyle = '#dada00';
          ctx.fillText('canvascanvascanvascanvas', 180, 180)
        };
      })
  }
})