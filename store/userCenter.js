//用户中心模块
export const state = () => ({
  user: {}
})

export const mutations = {
  setUser (state, user) {
    state.user = user
  },
  updateNickname (state, nickname) {
    state.user.nickname = nickname
  },
  updatePhone (state, phone) {
    state.user.phone = phone
  },
  updateHead (state, headUrl) {
    state.user.head_url = headUrl
  },
  updateGender (state, gender) {
    state.user.gender = gender
  },
  updateIntroduce (state, introduce) {
    state.user.introduce = introduce
  },
  updateThemeColor (state, themeColor) {
    state.user.theme_color = themeColor
  },
  updateBgUrl (state, bgUrl) {
    state.user.bg_url = bgUrl
  },
  updateEmail (state, email) {
    state.user.email = email
  },

}
