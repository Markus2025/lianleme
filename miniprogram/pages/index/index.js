Page({
  copyUrl() { wx.setClipboardData({ data: 'https://app.goformoon.cn' }) },
  goBuy() { wx.switchTab({ url: '/pages/buy/buy' }) },
})
