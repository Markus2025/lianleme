Page({
  data: { memberText: '未开通' },
  onShow() {
    const app = getApp()
    if (app.globalData.member && app.globalData.member > Date.now()) {
      const d = new Date(app.globalData.member)
      this.setData({ memberText: '永久会员 ✓' })
    }
  },
  goHelp() { wx.navigateTo({ url: '/pages/help/help' }) },
})
