<template>
  <section id="regForm">
    <!--section-->
    <div class="l-main__section">
      <!--contents-->
      <div class="l-main__contents">
        <div class="p-form__registration">
          <h1 class="p-form__registration__title">あなたの基本情報を教えてください。</h1>								       						
          <dl>
            <dt class="p-form__registration__stitle">お名前（名字、イニシャル、ハンドルネーム等）</dt>
            <dd class="p-form__registration__item"><input type="text" name="your-name" placeholder="名字、イニシャル、ハンドルネーム" v-model="objects.name"></dd>
            <dt class="p-form__registration__stitle">メールアドレス</dt>
            <dd class="p-form__registration__item"><input type="email" name="your-email" placeholder="○○@○○○○.○○○"  v-model="objects.mail"></dd>
            <dt class="p-form__registration__stitle">パスワード</dt>
            <dd class="p-form__registration__item"><input type="password" name="your-password" placeholder="" class="p-form__registration__item__password"  v-model="objects.password"><span class="p-form__registration__item__icon"></span></dd>    
            <dt class="p-form__registration__stitle">性別</dt>
            <dd class="p-form__registration__item">
              <div class="p-form__registration__item__radio u-fbox">
                <label><input type="radio" name="sex" value="男性" v-model="objects.gender"><span>男性</span></label>
                <label><input type="radio" name="sex" value="女性" v-model="objects.gender"><span>女性</span></label>
              </div>
            </dd>
            <dt class="p-form__registration__stitle">生まれた年</dt><dd class="p-form__registration__item">
              <select name="year" v-model="objects.yearOfBirth">
                <option value="" selected="">----年</option>
                <option value="1970">1970年</option>
                <option value="1971">1971年</option>
                <option value="1972">1972年</option>
                <option value="1973">1973年</option>
                <option value="1974">1974年</option>
                <option value="1975">1975年</option>
                <option value="1976">1976年</option>
                <option value="1977">1977年</option>
                <option value="1978">1978年</option>
                <option value="1979">1979年</option>
                <option value="1980">1980年</option>
                <option value="1981">1981年</option>
                <option value="1982">1982年</option>
                <option value="1983">1983年</option>
                <option value="1984">1984年</option>
                <option value="1985">1985年</option>
                <option value="1986">1986年</option>
                <option value="1987">1987年</option>
                <option value="1988">1988年</option>
                <option value="1989">1989年</option>
                <option value="1990">1990年</option>
                <option value="1991">1991年</option>
                <option value="1992">1992年</option>
                <option value="1993">1993年</option>
                <option value="1994">1994年</option>
                <option value="1995">1995年</option>
                <option value="1996">1996年</option>
                <option value="1997">1997年</option>
                <option value="1998">1998年</option>
                <option value="1998">1999年</option>
                <option value="1999">2000年</option>
              </select>
            </dd>
            <dt class="p-form__registration__stitle">お住いの都道府県</dt><dd class="p-form__registration__item">
              <select name="pref" v-model="objects.address1">
                <option value="" selected="">都道府県</option>
                <option value="北海道">北海道</option>
                <option value="青森県">青森県</option>
                <option value="岩手県">岩手県</option>
                <option value="宮城県">宮城県</option>
                <option value="秋田県">秋田県</option>
                <option value="山形県">山形県</option>
                <option value="福島県">福島県</option>
                <option value="茨城県">茨城県</option>
                <option value="栃木県">栃木県</option>
                <option value="群馬県">群馬県</option>
                <option value="埼玉県">埼玉県</option>
                <option value="千葉県">千葉県</option>
                <option value="東京都">東京都</option>
                <option value="神奈川県">神奈川県</option>
                <option value="新潟県">新潟県</option>
                <option value="富山県">富山県</option>
                <option value="石川県">石川県</option>
                <option value="福井県">福井県</option>
                <option value="山梨県">山梨県</option>
                <option value="長野県">長野県</option>
                <option value="岐阜県">岐阜県</option>
                <option value="静岡県">静岡県</option>
                <option value="愛知県">愛知県</option>
                <option value="三重県">三重県</option>
                <option value="滋賀県">滋賀県</option>
                <option value="京都府">京都府</option>
                <option value="大阪府">大阪府</option>
                <option value="兵庫県">兵庫県</option>
                <option value="奈良県">奈良県</option>
                <option value="和歌山県">和歌山県</option>
                <option value="鳥取県">鳥取県</option>
                <option value="島根県">島根県</option>
                <option value="岡山県">岡山県</option>
                <option value="広島県">広島県</option>
                <option value="山口県">山口県</option>
                <option value="徳島県">徳島県</option>
                <option value="香川県">香川県</option>
                <option value="愛媛県">愛媛県</option>
                <option value="高知県">高知県</option>
                <option value="福岡県">福岡県</option>
                <option value="佐賀県">佐賀県</option>
                <option value="長崎県">長崎県</option>
                <option value="熊本県">熊本県</option>
                <option value="大分県">大分県</option>
                <option value="宮崎県">宮崎県</option>
                <option value="鹿児島県">鹿児島県</option>
                <option value="沖縄県">沖縄県</option>
              </select>
            </dd>
            <dt class="p-form__registration__stitle">お住まいの市区町村</dt>
            <dd class="p-form__registration__item"><input type="text" name="area" placeholder="市区町村" v-model="objects.address2"></dd>
          </dl>
          <div class="p-form__registration__btn u-fbox u-fbox--bxcenter">
            <a class="c-btn__back" @click="back" >戻る</a>
            <a class="c-btn__next" @click="next">次へ</a>
          </div>
        </div>
        
      </div>
      <!--/contents-->
    </div>
    <!--/section-->
  </section>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'Registration1',
  data () {
    return {
        page : 1,
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
  mounted: function() {
    $('.p-form__registration__item__icon').on('click',function() {
      $(this).toggleClass('is-active');
      var _type = $('.p-form__registration__item__password').attr('type');
      if(_type=='password'){
        $('.p-form__registration__item__password').attr('type','text');
      }else{
        $('.p-form__registration__item__password').attr('type','password');
      }
    });  
  },
  methods : {
    back(){
      this.$router.push('/login')
    },
    next(){     
      this.$emit('click', this.page + 1)     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a.disabled{
    pointer-events: none;
}
</style>
