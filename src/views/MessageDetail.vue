<template>
<div>
	<!--main-->
	<main>
		<div class="l-main">
			<!--article-->
			<article>
				
				<section id="talklist">
					<!--section-->
					<div class="l-main__section">
						<!--contents-->
						<div class="l-main__contents">
							<router-link :to="{ name: 'Message', params: { value: messageId }}" class="p-talk p-talk--user">
							<!-- <a href="" class="p-talk p-talk--user"> -->
								<div class="p-talk__user u-fbox u-fbox--alcenter">
									<div class="p-talk__user__img"><img src="../img/user.jpg" alt=""></div>
									<dl class="p-talk__user__profile">
										<dt class="p-talk__user__profile__name">株式会社BBB</dt>
										<dd class="p-talk__user__profile__message">求職者太郎</dd>
									</dl>
								</div>
							<!-- </a> -->
							</router-link >
							
							<div class="p-talk p-talk--timeline u-margin--bottom15">
								<dl class="p-talk__comment p-talk__comment--me u-fbox u-fbox--alend u-fbox--bxstart">
									<dt class="p-talk__comment__img"><img src="../img/user.jpg" alt=""></dt>
									<dd class="p-talk__comment__message">初めまして</dd>
								</dl>
								<dl class="p-talk__comment p-talk__comment--you u-fbox u-fbox--alend u-fbox--bxend">
									<dd class="p-talk__comment__message">初めまして初めまして</dd>
									<dd class="p-tale__comment__meta">既読 2021年6月10日 11:11</dd>
								</dl>
								<dl class="p-talk__comment p-talk__comment--me u-fbox u-fbox--alend u-fbox--bxstart">
									<dt class="p-talk__comment__img"><img src="../img/user.jpg" alt=""></dt>
									<dd class="p-talk__comment__message">初めまして初めまして初めまして初めまして初めまして初めまして初めまして初めまして初めまして初めまして</dd>
								</dl>
								<dl class="p-talk__comment p-talk__comment--you u-fbox u-fbox--alend u-fbox--bxend">
									<dd class="p-talk__comment__message">初めまして初めまして初めまして初めまして初めまして初めまして初めまして初めまして初めまして初めまして</dd>
									<dd class="p-tale__comment__meta">既読 2021年6月10日 11:11</dd>
								</dl>
							</div>
							
							<form action="">
								<div class="p-form__search u-fbox u-fbox--alcenter u-margin--bottom30">
									<input type="text" name="search" placeholder="メッセージ" class="p-form__search__input">
									<input type="submit" value="検索" class="p-form__search__submit p-form__search__submit--plane">
								</div>
							</form>
							
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
  name: 'MessageDetail',
  data(){
	return {
		messageId : this.$route.params.messageId
	}
  },
  mounted(){
    this.$emit('click', {'isHeaderActive':true,'isFooterActive':false}) 
  },
  methods:{
  }
}
</script>
