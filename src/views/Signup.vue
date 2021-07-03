<template>
  <div>
	
	<!--main-->
	<main>
		<div class="l-main">
			<!--article-->
			<article>
				
				<section id="step">
					<!--section-->
					<div class="l-main__section">
						<!--contents-->
						<div class="l-main__contents l-main__contents--full">
							<ul class="p-form__step p-form__step--step1 u-fbox" 
                  v-bind:class="{ 'p-form__step--step1': pageStatus === 1,  
                                  'p-form__step--step2': pageStatus === 2,  
                                  'p-form__step--step3': pageStatus === 3,  
                                  'p-form__step--step4': pageStatus === 4 || pageStatus === 5 }">
								<li class="p-form__step__item">会員情報</li>
								<li class="p-form__step__item">希望する職種</li>
								<li class="p-form__step__item">求職の目的</li>
								<li class="p-form__step__item">自分の性格</li>
							</ul>
						</div>
						<!--/contents-->
					</div>
					<!--/section-->
				</section>
				
				<!-- <registration-1></registration-1> -->
				<transition name="slide" mode="out-in" appear>
					<registration-1 :objects="registrationDataObjects" @click="move" v-if="pageStatus == 1"></registration-1>
					<registration-2 :objects="registrationDataObjects" @click="move" v-else-if="pageStatus == 2"></registration-2>
					<registration-3 :objects="registrationDataObjects" @click="move" v-else-if="pageStatus == 3"></registration-3>
					<registration-4 :objects="registrationDataObjects" @click="move" v-else-if="pageStatus == 4"></registration-4>
					<registration-5 :objects="registrationDataObjects" @click="move" v-else-if="pageStatus == 5"></registration-5>
				</transition>

			</article>
			<!--/article-->
		</div>	
	</main>
  
</div>
</template>

<script>
//import Test from '@/components/Test.vue'
import Registration1 from '@/components/Registration1.vue'
import Registration2 from '@/components/Registration2.vue'
import Registration3 from '@/components/Registration3.vue'
import Registration4 from '@/components/Registration4.vue'
import Registration5 from '@/components/Registration5.vue'
// import Registration2 from '../components/Registration2.vue'

export default {
  name: 'Signup',
  data () {
    return {
        pageStatus : 1,
		registrationDataObjects :{
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
	}
  },
  components: {
    Registration1,
    Registration2,
    Registration3,
    Registration4,
	Registration5
  },
  mounted(){
    this.$emit('click', {'isHeaderActive':true,'isFooterActive':false}) 
  },
  methods: {
    move(nextPageNumber) {
		this.pageStatus = nextPageNumber;
		if(this.pageStatus === 6){
			this.$router.push('/login')
		}
    },
  },
}

</script>
