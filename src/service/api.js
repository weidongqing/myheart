import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
// const domain = 'http://192.168.1.6:3000'
var login = (userinfo) => {
	return Vue.http.post('api/v1/login', userinfo)
}
var register = (userinfo) => {
	return Vue.http.post('api/v1/register', userinfo)
}
var ping = () => {
	return Vue.http.get('api/v1/ping')
}
export default {
	login,
	register,
	ping
}