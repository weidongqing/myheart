<template lang='pug'>
    .register
        .box
            .toptitle
                span myHeart
                span(style='margin: 0 5px;') |
                span(style='font-size:20px;color:#000;') 用户注册
            .content
                .inputitem(for='nickname')
                    input(type='text' v-model='userinfo.nickname' ref='nickname' @focus='focusInput("nickname", "pn")' @blur='notFocus("nickname", "pn")')
                    p(@click='focusP("nickname")' ref='pn') 昵称
                .inputitem(for='username')
                    input(type='text' v-model='userinfo.username' ref='username' @focus='focusInput("username", "pu")' @blur='notFocus("username", "pu")')
                    p(@click='focusP("username")' ref='pu') 用户名
                .inputitem(for='password')
                    input(type='password' v-model='userinfo.password' ref='password' @focus='focusInput("password", "pp")' @blur='notFocus("password", "pp")')
                    p(@click='focusP("password")' ref='pp') 密码
            .registerbtn(@click='register') 立即注册
</template>
<script>
import api from '@/service/api'
export default {
	data () {
		return {
			userinfo: {
				nickname: '',
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
		register: function () {
			let base64 = require('js-base64').Base64
			this.userinfo.password = base64.encode(this.userinfo.password)
			api.register(JSON.stringify(this.userinfo)).then((response)=>{
	            this.$router.push('/login')
	        },(error)=>{
	            console.log(error)
	        })
		}
	}
}
</script>
<style lang='stylus'>
	.register
		height 100%
		width 100%
		.box
			position absolute
			width 30%
			margin-left 35%
			height 90%
			top 30px
			// background #ccc
			opacity 0.5
			.toptitle
				margin-top 15px
				margin-bottom 30px
				font-size 30px
				padding 10px
				border-bottom 1px solid #ccc
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
			.registerbtn
				height 30px
				line-height 30px
				margin-top 20px
				width calc(90% - 24px)
				margin-left calc(5% + 1px)
				background green
				padding 6px 12px
				color #fff
				cursor pointer
				
</style>