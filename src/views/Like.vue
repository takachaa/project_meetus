<template>
<div>
	<!--main-->
	<main>
		<div class="l-main">
			<!--article-->
			<article>
				
				<section id="jobs">
					<!--section-->
					<div class="l-main__section">
						<!--contents-->
						<div class="l-main__contents">
							
							<!-- <a href="top_login.html" class="p-offertitle p-offertitle--good">足あと</a> -->
							<router-link :to="{ name: 'Menu' }" class="p-offertitle p-offertitle--good">いいね !</router-link>
							
							<div class="p-offer__toggle u-fbox">
								<a class="p-offer__toggle__btn" v-bind:class="{ 'is-active': currentComponent === 'LikeFrom'}" @click="changeLikeStatus('LikeFrom')">企業からいいね</a>
								<a class="p-offer__toggle__btn" v-bind:class="{ 'is-active': currentComponent === 'LikeTo'}" @click="changeLikeStatus('LikeTo')">あなたからいいね</a>
							</div>
							
							<transition name="slide" mode="out-in" appear>
								<component :is="currentComponent"></component>
							</transition>

									
						</div>
						<!--/contents-->
					</div>
					<!--/section-->
				</section>

			</article>
			<!--/article-->
		</div>	
	</main>
	<!--/main-->
</div>
</template>

<script>
import LikeFrom from '@/components/LikeFrom.vue' 
import LikeTo from '@/components/LikeTo.vue' 

export default {
  name: 'Like',
  data(){
	return {
		currentComponent:'LikeFrom'
	}
  },
  mounted(){
    this.$emit('click', {'isHeaderActive':true,'isFooterActive':true}) 
	if(this.$route.params.componentName){
		this.currentComponent = this.$route.params.componentName
	}
	
  },
  components:{
	LikeFrom,
	LikeTo
  },
  methods:{
	changeLikeStatus(likeStatus){
		this.currentComponent = likeStatus
	}
  }
}
</script>
