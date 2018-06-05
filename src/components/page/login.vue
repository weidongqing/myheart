<template lang='pug'>
    .login
        .box
            .toptitle myHeart
            .content
                .inputitem(for='username')
                    input(type='text' v-model='userinfo.username' ref='username' @focus='focusInput("username", "pu")' @blur='notFocus("username", "pu")')
                    p(@click='focusP("username")' ref='pu') 用户名
                .inputitem(for='password')
                    input(type='password' v-model='userinfo.password' ref='password' @focus='focusInput("password", "pp")' @blur='notFocus("password", "pp")')
                    p(@click='focusP("password")' ref='pp') 密码
            .loginbtn(@click='login') 登录
            .footbtn
                span(@click='goRegister') 立即注册
                span 忘记密码
</template>
<script>
import api from '@/service/api'
export default {
	data () {
		return {
			userinfo: {
				username: '',
				password: ''
			}
		}
	},
	methods: {
		focusP: function (ref) {
			this.$refs[ref].focus()
		},
		focusInput: function (classname, ref) {
			if (!this.userinfo[classname]) {
				this.$refs[ref].classList.add('smallp')
			} else {
				this.$refs[ref].classList.add('notransitionsmallp')
				
			}
		},
		notFocus: function (classname, ref) {
			if (!this.userinfo[classname]) {
				this.$refs[ref].classList.add('normalp')
			} else {
				this.$refs[ref].classList.add('notransitionsmallp')
			}
		},
		login: function () {
			let base64 = require('js-base64').Base64
			this.userinfo.password = base64.encode(this.userinfo.password)
			api.login(JSON.stringify(this.userinfo)).then((response)=>{
	            console.log(response)
	        },(error)=>{
	            console.log(error)
	        })
	  // 		var ws = new WebSocket('ws://192.168.1.6:8080	/ws')

			// ws.onopen = function(evt) { 
			//   ws.send('ping')
			// }

			// ws.onmessage = function(evt) {
			//   console.log('webSockets message: ' + evt.data)
			//   ws.close()
			// }

			// ws.onclose = function(evt) {
			//   console.log('webSockets closed')
			// }
		},
		goRegister: function () {
			this.$router.push('/register')
			// this.$router.push({name:'Register'})
		}
	}
}
</script>
<style lang='stylus'>
	.login
		background url('../../assets/bg.jpg') no-repeat
		background-size 100% 100%
		min-height 100%
		height 100%
		width 100%
		.box
			position absolute
			width 15%
			margin-left 40%
			height 25%
			top 30%
			background #ccc
			opacity 0.5
			.toptitle
				margin-top 15px
				margin-bottom 30px
				font-size 30px
			.inputitem
				height 80%
				margin 5%
				width 90%
				margin-bottom 30px
				input
					height 30px
					width calc(100% - 24px)
					padding 6px 12px
					border 1px solid #ccc
				input:focus
					& ~ p
						color #000
						transition 150ms
						transform scale(0.8) translate(-20px, -40px)
				.smallp
					color #000
					transition 150ms
					transform scale(0.8) translate(-20px, -40px)
				.notransitionsmallp
					color #000
					transition 0
					transform scale(0.8) translate(-20px, -40px)
				.normalp
					color #777
					transition 150ms
					transform scale(1) translate(0, 0)
				p
					cursor text
					font-size 16px
					color #777
					position absolute
					z-index 1
					margin-top -32px
					margin-left 10px
			.loginbtn
				height 30px
				line-height 30px
				margin-top 20px
				width calc(90% - 24px)
				margin-left calc(5% + 1px)
				background green
				padding 6px 12px
				color #fff
				cursor pointer
			.footbtn
				margin-top 20px
				margin-right 24px
				float right
				span
					color #008000
					margin-left 10px
					cursor pointer
					&:hover
						text-decoration underline
				
</style>