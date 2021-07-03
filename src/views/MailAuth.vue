<template>
<div>	
	<!-- ローディングのためのコンポーネント -->
	<!--main-->
    <Loading/>
	<main>
		<div class="l-main">
			<!--article-->
			<article>
				
				<section id="regForm">
					<!--section-->
					<div class="l-main__section">
						<!--contents-->
						<div class="l-main__contents">
							
							<div class="p-form__login u-fbox u-fbox--alcenter">
								<p class="u-align--center u-margin--bottom30 u-block--w100">ご登録のメールアドレス<br>[ ○○@○○○○.○○○ ]<br>宛に「確認コード」を送信しました。<br>メール本文に記載の「確認コード」を<br>入力してください。</p>
								<div class="p-form__login__form">
									<form action="" @submit.prevent="authSubmit">
										<input type="text" name="auth" placeholder="" class="">
										<input type="submit" value="認証" class="c-btn__login">
									</form>
									<a class="p-form__login__form__foget" @click="resendEmail">確認メールを再送信する</a>
								</div>
							</div>
							
						</div>
						<!--/contents-->
					</div>
					<!--/section-->
				</section>
			</article>
			<!--/article-->
		</div>	
	</main>
</div>
</template>

<script>
import axios from '../axios-auth'

export default {
  name: 'MailAuth',
  data(){
	return{
		mail:this.$route.params.mail,
		password:this.$route.params.password
	}	
  },
  mounted(){
	// console.log('mounted')
	// console.log(this.$route.query.mail)
	// console.log(this.$route.query.password)

	// this.mail = this.$route.query.mail
	// this.password = this.$route.params.password

	this.$emit('click', {'isHeaderActive':true,'isFooterActive':false}) 
  },
  methods:{
    authSubmit(){

		if (!this.mail || !this.password){
			alert("mail or password empty")
			return 
		} 

		this.$store.dispatch("changeLodingStatus", true);

		console.log('authsubmit')
		console.log(this.mail)
		console.log(this.password)

		//以下仮です。
		axios.post('/accounts:signInWithPassword?key=AIzaSyDzRU5FwYeaIGi7bVAAxF1cmboXP8Ne7gE',
		{
			email:this.mail,
			password:this.password,
			returnSecureToken:true
		}
		).then(response => {

			this.$store.dispatch("changeLodingStatus", false);
			this.$store.dispatch("updateIdToken", response.data.idToken)
			this.$store.dispatch("updateUserId", response.data.localId)//追加分 localUserIdをストアに保存

			const now = new Date();
			const expiryTimeMs = now.getTime() + (response.data.expiresIn * 1000)
			localStorage.setItem('idToken', response.data.idToken)
			localStorage.setItem('userId', response.data.localId) //追加分 localUserIdをLocalStorage保存
			localStorage.setItem('expiryTimeMs', expiryTimeMs)
			localStorage.setItem('refreshToken', response.data.refreshToken)

			setTimeout(() => {
				this.$store.dispatch('refreshIdToken', response.data.refreshToken)
			}, response.data.expiresIn * 1000)

			this.$router.push({name:'SignupComplete'})
		})

      
    },
    resendEmail(){
      alert('resendEmail')
    }
  }
}
</script>

<style scoped>
input[type="text"][name="auth"]{
	text-align: center;
}
</style>
