<template>
  <section id="regForm">
    <!--section-->
    <div class="l-main__section">
      <!--contents-->
      <div class="l-main__contents">
        <div class="p-form__registration">
          <h1 class="p-form__registration__title">ご希望の職種と雇用形態は？</h1>
          <dl>
            <dt class="p-form__registration__stitle">職種</dt>
            <dd class="p-form__registration__item">
              <select name="occupation" v-model="objects.occupation">
                <option value="" selected="">職種を選んでください</option>
                <option value="営業">営業</option>
                <option value="製造業">製造業</option>
                <option value="サービス業">サービス業</option>
                <option value="飲食業">飲食業</option>
              </select>
            </dd>
            <dt class="p-form__registration__stitle">雇用形態</dt>
            <dd class="p-form__registration__item">
              <select name="employment"  v-model="objects.employmentStatus">
                <option value="" selected="">雇用形態を選んでください</option>
                <option value="正社員">正社員</option>
                <option value="契約社員">契約社員</option>
                <option value="パート">パート</option>
                <option value="アルバイト">アルバイト</option>
              </select>
            </dd>
          </dl>
          <div class="p-form__registration__btn u-fbox u-fbox--bxcenter">
            <a class="c-btn__back" @click="back">戻る</a>
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
export default {
  name: 'Registration2',
  data () {
    return {
        page : 2,
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
      this.$emit('click', this.page - 1)
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
