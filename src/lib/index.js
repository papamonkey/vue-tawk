let Tawk = {}
const isInit = () => {
  if (window.Tawk_API) {
    return true
  }
  return false
}
Tawk.install = function (Vue, options) {
  Vue.prototype.$Tawk = {}
  Vue.prototype.$Tawk.$startChat = () => {
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
  Vue.prototype.$Tawk.$updateChatUser = (user) => {
    if (!isInit()) return
    if (!user) return
    window.Tawk_API.setAttributes({
      'name': user.name,
      'email': user.email,
      'hash': user.hash
    }, function (error) {
      if (!!error) {
        console.log(error);
      }
    })
  }
  Vue.prototype.$Tawk.$endChat = () => {
    window.Tawk_API.endChat()
  }
  Vue.prototype.$Tawk.$isInit = () => {
    return isInit()
  }
  Vue.prototype.$Tawk.$toggle = () => {
    if (isInit()) {
      window.Tawk_API.toggle();
    }
  }
  Vue.prototype.$Tawk.$maximize = () => {
    if (isInit()) {
      window.Tawk_API.maximize();
    }
  }
  Vue.prototype.$Tawk.$minimize =() => {
    if (isInit()) {
      window.Tawk_API.minimize();
    }
  }
  Vue.prototype.$Tawk.$toggleVisibility = () => {
    if (isInit()) {
      window.Tawk_API.toggleVisibility();
    }
  }
  Vue.prototype.$Tawk.$popup = () => {
    if (isInit()) {
      window.Tawk_API.popup();
    }
  }
  Vue.prototype.$Tawk.$hideWidget = () => {
    if (isInit()) {
      window.Tawk_API.hideWidget();
    }
  }
  Vue.prototype.$Tawk.$showWidget = () => {
    if (isInit()) {
      window.Tawk_API.showWidget();
    }
  }
  Vue.prototype.$Tawk.$onChatStarted = (callback) => {
    if (isInit()) {
      window.Tawk_API.onChatStarted = callback;
    }
  }
  Vue.prototype.$Tawk.$onChatEnded  = (callback) => {
    if (isInit()) {
      window.Tawk_API.onChatEnded  = callback;
    }
  }
}
export default Tawk
