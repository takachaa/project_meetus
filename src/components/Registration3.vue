<template>
  <section id="regForm">
    <!--section-->
    <div class="l-main__section">
      <!--contents-->
      <div class="l-main__contents">
        <div class="p-form__registration">
          <h1 class="p-form__registration__title">求職する目的や希望する条件は？<span>（複数選択可能）</span><span class="p-form__error">未入力です。</span></h1>
          <form action="">
            <div class="p-form__jobsearch__item">
              <div class="p-form__checkbox u-fbox u-fbox--alstart u-fbox--bxstart">
                <label><input type="checkbox" name="purpose" value="年収アップ" v-model="objects.purposeAndConditions"><span>年収アップ</span></label>
                <label><input type="checkbox" name="purpose" value="スキルチェンジ" v-model="objects.purposeAndConditions"><span>スキルチェンジ</span></label>
                <label><input type="checkbox" name="purpose" value="自分にあった職場探し" v-model="objects.purposeAndConditions"><span>自分にあった職場探し</span></label>
                <label><input type="checkbox" name="purpose" value="Uターン/Iターン" v-model="objects.purposeAndConditions"><span>ターン/Iターン</span></label>
                <label><input type="checkbox" name="purpose" value="新しいことにチャレンジ" v-model="objects.purposeAndConditions"><span>新しいことにチャレンジ</span></label>
                <label><input type="checkbox" name="purpose" value="通勤時間の短縮" v-model="objects.purposeAndConditions"><span>通勤時間の短縮</span></label>
                <label><input type="checkbox" name="purpose" value="環境の良い場所へ移住" v-model="objects.purposeAndConditions"><span>環境の良い場所へ移住</span></label>
                <label><input type="checkbox" name="purpose" value="フレックス制度" v-model="objects.purposeAndConditions"><span>フレックス制度</span></label>
                <label><input type="checkbox" name="purpose" value="しっかり固まった業務内容" v-model="objects.purposeAndConditions"><span>しっかり固まった業務内容</span></label>
                <label><input type="checkbox" name="purpose" value="シフト制" v-model="objects.purposeAndConditions"><span>シフト制</span></label>
                <label><input type="checkbox" name="purpose" value="会社全体のやる気・勢い" v-model="objects.purposeAndConditions"><span>会社全体のやる気・勢い</span></label>
                <label><input type="checkbox" name="purpose" value="勤務時間の明確化" v-model="objects.purposeAndConditions"><span>勤務時間の明確化</span></label>
                <label><input type="checkbox" name="purpose" value="教育が充実" v-model="objects.purposeAndConditions"><span>教育が充実</span></label>
                <label><input type="checkbox" name="purpose" value="祝日休業" v-model="objects.purposeAndConditions"><span>祝日休業</span></label>
                <label><input type="checkbox" name="purpose" value="技術力・営業力" v-model="objects.purposeAndConditions"><span>技術力・営業力</span></label>
                <label><input type="checkbox" name="purpose" value="夏季休暇制度" v-model="objects.purposeAndConditions"><span>夏季休暇制度</span></label>
                <label><input type="checkbox" name="purpose" value="安定性" v-model="objects.purposeAndConditions"><span>安定性</span></label>
                <label class="p-form__checkbox__w100"><input type="checkbox" name="purpose" value="勤務時間調整がある程度できる" v-model="objects.purposeAndConditions"><span>勤務時間調整がある程度できる</span></label>
                <label class="p-form__checkbox__w100"><input type="checkbox" name="purpose" value="仕事について相談できる環境" v-model="objects.purposeAndConditions"><span>仕事について相談できる環境</span></label>
              </div>
            </div>
            <div class="p-form__registration__btn u-fbox u-fbox--bxcenter">
              <a class="c-btn__back" @click="back">戻る</a>
              <a class="c-btn__next" @click="next">次へ</a>
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
export default {
  name: 'Registration3',
  data () {
    return {
      page : 3,
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
    next(){
      
      this.$emit('click', this.page + 1)
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
