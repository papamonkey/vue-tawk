let Tawk = {}
Tawk.install = function (Vue, options) {
  Vue.prototype.$Tawk = {}
  Vue.prototype.$Tawk.$createChat = function () {
    let Tawk_API = {}
    let Tawk_LoadStart = new Date()
    let s1 = document.createElement("script")
    let s0 = document.getElementsByTagName("script")[0]
    s1.async = true
    s1.src = options.tawkSrc
    s1.charset = 'UTF-8'
    s1.setAttribute('crossorigin', '*')
    s0.parentNode.insertBefore(s1, s0)
    window.Tawk_API = Tawk_API
  }
  Vue.prototype.$Tawk.$createChat()
  Vue.prototype.$Tawk.$updateChatUser = function (user) {
    if (!user) return
    window.Tawk_API.onLoad = function () {
      window.Tawk_API.setAttributes({
        'name': user.name,
        'email': user.email,
        'hash': user.emailHmac
      }, function (error) {
        console.log(error)
      })
    }
  }
  Vue.prototype.$Tawk.$endChat = function () {
    window.Tawk_API.endChat()
  }
  Vue.prototype.$Tawk.$isInit = function () {
    if (window.Tawk_API) {
      return true
    }
    return false
  }
}
export default Tawk
