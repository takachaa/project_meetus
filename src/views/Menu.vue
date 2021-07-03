<template>
<div>
<!--main-->
	<main>
		<div class="l-main">
			<!--article-->
			<article>
				
				<section id="user">
					<!--section-->
					<div class="l-main__section">
						<!--contents-->
						<div class="l-main__contents">							
							<!--menu-->
							<div class="p-menu">
								<div class="p-menu__user u-fbox u-fbox--alcenter">
									<div class="p-menu__user__img"><img src="../img/user.jpg" alt=""></div>
									<p class="p-menu__user__name">ミータス太郎</p>
								</div>
							</div>
							<!--/menu-->							
						</div>
						<!--/contents-->
					</div>
					<!--/section-->
				</section>
				
				<section id="menus">
					<!--section-->
					<div class="l-main__section">
						<!--contents-->
						<div class="l-main__contents">							
							<!--menu-->
							<div class="p-menu">
								<div class="p-menu__menus u-fbox u-fbox--bxstart">
									<a href="" class="p-menu__menus__icon p-menu__menus__icon--profile"></a>
									<!-- <a href="" class="p-menu__menus__icon p-menu__menus__icon--search"></a> -->
									<router-link :to="{ name: 'Top2' }" class="p-menu__menus__icon p-menu__menus__icon--search"></router-link>								
									<!-- <a href="" class="p-menu__menus__icon p-menu__menus__icon--foot"></a> -->
									<router-link :to="{ name: 'Footprints' }" class="p-menu__menus__icon p-menu__menus__icon--foot"></router-link>
									<!-- <a href="" class="p-menu__menus__icon p-menu__menus__icon--message"></a> -->
									<router-link :to="{ name: 'Message' }" class="p-menu__menus__icon p-menu__menus__icon--message"></router-link>
									<!-- <a href="" class="p-menu__menus__icon p-menu__menus__icon--good1"></a> -->
									<router-link :to="{ name: 'Like', params: { componentName: 'LikeFrom' } }" class="p-menu__menus__icon p-menu__menus__icon--good1"></router-link>
									<!-- <a href="" class="p-menu__menus__icon p-menu__menus__icon--good2"></a> -->
									<router-link :to="{ name: 'Like', params: { componentName: 'LikeTo' }}" class="p-menu__menus__icon p-menu__menus__icon--good2"></router-link>									
									<!-- <a href="" class="p-menu__menus__icon p-menu__menus__icon--star"></a> -->
									<router-link :to="{ name: 'Favorite' }" class="p-menu__menus__icon p-menu__menus__icon--star"></router-link>
									<!-- <a href="" class="p-menu__menus__icon p-menu__menus__icon--history"></a> -->
									<router-link :to="{ name: 'History' }" class="p-menu__menus__icon p-menu__menus__icon--history"></router-link>
									
									<a href="" class="p-menu__menus__icon p-menu__menus__icon--notice"></a>
									<a href="" class="p-menu__menus__icon p-menu__menus__icon--help"></a>
									<a href="" class="p-menu__menus__icon p-menu__menus__icon--edit"></a>
								</div>
							</div>
							<!--/menu-->							
						</div>
						<!--/contents-->
					</div>
					<!--/section-->
				</section>
				
				<section id="ad">
					<!--section-->
					<div class="l-main__section">
						<!--contents-->
						<div class="l-main__contents l-main__contents--full">							
							<!--menu-->
							<div class="p-menu">
								<div class="p-menu__ad u-fbox">
									<a href="" class="p-menu__ad__item"><img src="../img/bnr1.jpg" alt=""></a>
									<a href="" class="p-menu__ad__item"><img src="../img/bnr2.jpg" alt=""></a>
									<a href="" class="p-menu__ad__item"><img src="../img/bnr3.jpg" alt=""></a>
								</div>
							</div>
							<!--/menu-->							
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

export default {
  name: 'Menu',
  data(){
	return {
	}
  },
  mounted(){
    this.$emit('click', {'isHeaderActive':true,'isFooterActive':true}) 
  },
  methods:{
  }
}
</script>

<style scoped>
a:link,
a:visited,
a:hover,
a:active {
  color: red;
}
</style>
