const $Tawk = {};
$Tawk.$createChat = function (options) {
  let Tawk_API = {}
  let s1 = document.createElement("script")
  let s0 = document.getElementsByTagName("script")[0]
  s1.async = true
  s1.src = options.tawkSrc
  s1.charset = 'UTF-8'
  s1.setAttribute('crossorigin', '*')
  s0.parentNode.insertBefore(s1, s0)
  window.Tawk_API = Tawk_API
}
$Tawk.$updateChatUser = function (user) {
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

$Tawk.$setAttributes = function (attributes) {
  if (!attributes || !window || !window.Tawk_API || !window.Tawk_API.setAttributes) return
  window.Tawk_API.setAttributes(attributes)
}
$Tawk.$endChat = function () {
  window.Tawk_API.endChat()
}
$Tawk.$isInit = function () {
  if (window.Tawk_API) {
    return true
  }
  return false
}
$Tawk.$toggleVisibility = function () {
  if(window.Tawk_API && window.Tawk_API.toggleVisibilit)
    window.Tawk_API.toggleVisibility();
}
$Tawk.$showWidget = function () {
  if(window.Tawk_API && window.Tawk_API.showWidget)
    window.Tawk_API.showWidget();
}
$Tawk.$hideWidget = function () {
  if(window.Tawk_API && window.Tawk_API.hideWidget)
    window.Tawk_API.hideWidget();
}
$Tawk.$setOnLoadFunction = function (onLoadFunction) {
  if(window.Tawk_API)
    window.Tawk_API.onLoad = onLoadFunction;
}

let Tawk = {}
Tawk.install = function (Vue, options) {
  $Tawk.$createChat(options)
  Vue.prototype.$Tawk = $Tawk;
}
export default Tawk
export {$Tawk}
