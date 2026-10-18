Page({
  buy() {
    // 支付接入占位：虚拟支付开通后走 wx.requestOrder / 服务端下单回调，落 memberUntil。
    wx.showToast({ title: '支付通道开通中', icon: 'none' })
  },
})
