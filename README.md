# vue-tawk
wrapper of tawk 

This Vue plugin injects a tawk.io instance into all of your vue instances

## Install

``` bash
npm install vue-tawk --save
or
yarn add vue-tawk -D
```
  
## Usage

### Initialize
First you'll need to register the plugin  
Second you should had a account of https://www.tawk.to/

``` js
import Tawk from 'vue-echo'
  
Vue.use(Tawk, {
    tawkSrc: 'YOU_TAWK_SRC'
})
```

### Set the visitor name and email

```js
this.$Tawk.$updateChatUser(user)
the object of user should like that
{
    name: 'user name',
    email: 'user email',
    hash: '' // see more https://www.tawk.to/javascript-api/#securemode
}
```

### Ends the current ongoing chat.
you should close the chat when user logout your website
```js
this.$Tawk.$endChat()
```