<template>
<div>	
	<!--main-->
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
								<div class="u-block--w40 u-margin--lauto u-margin--rauto u-margin--bottom30"><img src="../img/img_start.png" alt="start"></div>
								<p class="u-align--center u-margin--bottom30 u-block--w100">お探しのページは存在しません。<br>Not found 404</p>
								<a class="c-btn__start" @click="moveTop">トップページへ</a>
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

export default {
  name: 'NotFound',
  monted(){
	this.$emit('click', {'isHeaderActive':true,'isFooterActive':false}) 
  },
  methods:{
    moveTop(){
      this.$router.push('/top2')
    }
  }
}
</script>

<style scoped>
input[type="text"][name="auth"]{
	text-align: center;
}
</style>
