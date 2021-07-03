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
    }
  },
  methods:{
    LoginSubmit(){

      if (!this.user.email || !this.user.password){
        alert("login failed")
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

        this.$router.push({name:'Top2'})
      })
    }
  },
  mounted(){
    this.$emit('click', {'isHeaderActive':false,'isFooterActive':false}) 
  }
}
</script>
