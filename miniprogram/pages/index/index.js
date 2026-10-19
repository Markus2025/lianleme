Page({
  copyUrl() { wx.setClipboardData({ data: 'https://lianleme.goformoon.cn' }) },
  goBuy() { wx.switchTab({ url: '/pages/buy/buy' }) },
})
