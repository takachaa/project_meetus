<template>
  <div class="l-main">
    <!-- ローディングのためのコンポーネント -->
    <Loading/>
    <!--article-->
    <article>
      <section id="login">
        <!--section-->
        <div class="l-main__section">
          <!--contents-->
          <div class="l-main__contents">
            <div class="p-form__login u-fbox u-fbox--alcenter">
              <div class="p-form__login__logo"><img src="../img/logo.png" alt="meetus"></div>
              <div class="p-form__login__form">
                <form action="" @submit.prevent="LoginSubmit">
                  <input type="text" v-model="user.email" name="mail" placeholder="メールアドレス" class="">
                  <input type="password"  v-model="user.password" name="password" placeholder="パスワード">  
                  <input type="submit" value="ログイン" class="c-btn__login">
                </form>
                <span class="p-form__error" v-for="errorMessage in errorMessages" :key="errorMessage.index">{{ errorMessage }}</span>
                <a class="p-form__login__form__foget">パスワードがわからない場合</a>
              </div>
              <router-link to="/signup" class="c-btn__registration">アカウント登録はこちら</router-link>
              <!-- <a class="c-btn__registration">アカウント登録はこちら</a> -->
            </div>
          </div>
          <!--/contents-->
        </div>
        <!--/section-->
      </section>

    </article>
    <!--/article-->
  </div>	
</template>

<script>
import axios from '../axios-auth'

export default {
  name: 'Login',
  data(){
    return{
      user: {},
      errorMessages:[]
    }
  },
  methods:{
    LoginSubmit(){

      this.errorMessages = []
      let isError = false;

      if (!this.user.email){
        this.errorMessages.push("メールアドレスを入力してください。")
        isError = true
      }else{
        const reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/;
        if (!reg.test(this.user.email)) {
          this.errorMessages.push("メールアドレスを正しく入力してください")
          isError = true
        }
      }

      if (!this.user.password){
        this.errorMessages.push("パスワードを入力してください")
        isError = true
      }

      if(isError){
        return
      }

      this.$store.dispatch("changeLodingStatus", true);

      axios.post('/accounts:signInWithPassword?key=AIzaSyDzRU5FwYeaIGi7bVAAxF1cmboXP8Ne7gE',
      {
        email:this.user.email,
        password:this.user.password,
        returnSecureToken:true
      }
      ).then(response => {
        this.errorMessages = []
        this.$store.dispatch("changeLodingStatus", false);
        this.$store.dispatch("updateIdToken", response.data.idToken)
        this.$store.dispatch("updateUserId", response.data.localId)//追加分 localUserIdをストアに保存

        this.$store.dispatch('setMatchesList', true)//ログイン時にマッチリストを取得

        const now = new Date();
        const expiryTimeMs = now.getTime() + (response.data.expiresIn * 1000)
        localStorage.setItem('idToken', response.data.idToken)
        localStorage.setItem('userId', response.data.localId) //追加分 localUserIdをLocalStorage保存
        localStorage.setItem('expiryTimeMs', expiryTimeMs)
        localStorage.setItem('refreshToken', response.data.refreshToken)

        setTimeout(() => {
            this.$store.dispatch('refreshIdToken', response.data.refreshToken)
        }, response.data.expiresIn * 1000)

        this.$emit('activateNotificationClick', true) 

        this.$router.push({name:'Top2'})
      })
      .catch(() => {
        this.errorMessages = []
        this.$store.dispatch("changeLodingStatus", false);
        this.errorMessages.push("メールアドレスかパスワードが正しくありません。")
        
      })
      
    }
  },
  mounted(){
    this.$emit('click', {'isHeaderActive':false,'isFooterActive':false}) 
   
  }
}
</script>
