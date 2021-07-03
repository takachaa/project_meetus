<template>
  <section id="regForm">
    <Loading/>
    <!--section-->
    <div class="l-main__section">
      <!--contents-->
      <div class="l-main__contents">
        <div class="p-form__registration">
          <h1 class="p-form__registration__title">以下の内容で送信します。</h1>
          <form action="">
          <dl>
            <dt class="p-form__registration__stitle">お名前（名字、イニシャル、ハンドルネーム等）</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">{{objects.name}}</dd>
            <dt class="p-form__registration__stitle">メールアドレス</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">{{objects.mail}}</dd>
            <!-- <dt class="p-form__registration__stitle">パスワード</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">123456789</dd> -->
            <dt class="p-form__registration__stitle">性別</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">{{objects.gender}}</dd>
            <dt class="p-form__registration__stitle">生まれた年</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">{{objects.yearOfBirth}}年</dd>
            <dt class="p-form__registration__stitle">お住いの都道府県</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">{{objects.address1}}</dd>
            <dt class="p-form__registration__stitle">お住まいの市区町村</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">{{objects.address2}}</dd>
            <dt class="p-form__registration__stitle">職種</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">{{objects.occupation}}</dd>
            <dt class="p-form__registration__stitle">雇用形態</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">{{objects.employmentStatus}}</dd>
            <dt class="p-form__registration__stitle">求職する目的や希望する条件は？</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">{{objects.purposeAndConditions.join('、')}}</dd>
            <dt class="p-form__registration__stitle">自分の性格・仕事への姿勢</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">{{objects.personalityAndPosture.join('、')}}</dd>
          </dl>
          <div class="p-form__registration__btn u-fbox u-fbox--bxcenter">
            <a class="c-btn__back" @click="back">戻る</a>
            <a class="c-btn__next" @click="register">次へ</a>
          </div>
          
        </form>
        </div>
        
      </div>
      <!--/contents-->
    </div>
    <!--/section-->
  </section>
</template>

<script>
import axios from '../axios-auth'

export default {
  name: 'Registration5',
  data () {
    return {
        page : 5,
		}
  },
  props: {
    objects :{
      name : "",
			mail : "",
			password : "",
			gender : "",
			yearOfBirth : "",
			address1 :"",
			address2 :"",
			occupation : "",
			employmentStatus : "",
			purposeAndConditions : [],
			personalityAndPosture : []
    }
  },
  methods : {
    back(){     
      this.$emit('click', this.page -1)
    },
    // next(){    
    //   this.$router.push('/mailAuth')  
    // },
    register(){
      if (!this.objects.mail || !this.objects.password){
        alert('mail address or password is empty')  
        return 
      } 

      this.$store.dispatch("changeLodingStatus", true);

      axios.post('/accounts:signUp?key=AIzaSyDzRU5FwYeaIGi7bVAAxF1cmboXP8Ne7gE',
      {
        email:this.objects.mail,
        password:this.objects.password,
        returnSecureToken:true
      }
      ).then(response => {
        console.log(response)
        this.$store.dispatch("changeLodingStatus", false);
        this.$router.push({name:'MailAuth',params: { mail:this.objects.mail, password:this.objects.password }})
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
