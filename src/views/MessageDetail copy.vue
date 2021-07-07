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
						<div class="l-main__contents u-padding--top80">
							<div class="u-fixed u-fixed--title">
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
							</div>
							
							<div class="p-talk p-talk--timeline u-margin--bottom15">
								<dl class="p-talk__comment p-talk__comment--me u-fbox u-fbox--alend u-fbox--bxstart">
									<dt class="p-talk__comment__img"><img src="img/user.jpg" alt=""></dt>
									<dd class="p-talk__comment__message">初めまして</dd>
								</dl>
								<dl class="p-talk__comment p-talk__comment--you u-fbox u-fbox--alend u-fbox--bxend">
									<dd class="p-talk__comment__message">初めまして初めまして</dd>
									<dt class="p-talk__comment__img"><img src="img/user.jpg" alt=""></dt>
									<dd class="p-tale__comment__meta">既読 2021年6月10日 11:11</dd>
								</dl>
								<dl class="p-talk__comment p-talk__comment--me u-fbox u-fbox--alend u-fbox--bxstart">
									<dt class="p-talk__comment__img"><img src="img/user.jpg" alt=""></dt>
									<dd class="p-talk__comment__message">初めまして初めまして初めまして初めまして初めまして初めまして初めまして初めまして初めまして初めまして</dd>
								</dl>
								<dl class="p-talk__comment p-talk__comment--you u-fbox u-fbox--alend u-fbox--bxend">
									<dd class="p-talk__comment__message">初めまして初めまして初めまして初めまして初めまして初めまして初めまして初めまして初めまして初めまして</dd>
									<dt class="p-talk__comment__img"><img src="img/user.jpg" alt=""></dt>
									<dd class="p-tale__comment__meta">既読 2021年6月10日 11:11</dd>
								</dl>
								<dl class="p-talk__comment p-talk__comment--you u-fbox u-fbox--alend u-fbox--bxend">
									<dd class="p-talk__comment__message">初めまして初めまして</dd>
									<dt class="p-talk__comment__img"><img src="img/user.jpg" alt=""></dt>
									<dd class="p-tale__comment__meta">既読 2021年6月10日 11:11</dd>
								</dl>
								<dl class="p-talk__comment p-talk__comment--me u-fbox u-fbox--alend u-fbox--bxstart">
									<dt class="p-talk__comment__img"><img src="img/user.jpg" alt=""></dt>
									<dd class="p-talk__comment__message">初めまして初めまして初めまして初めまして初めまして初めまして初めまして初めまして初めまして初めまして</dd>
								</dl>
								<dl class="p-talk__comment p-talk__comment--you u-fbox u-fbox--alend u-fbox--bxend">
									<dd class="p-talk__comment__message">初めまして初めまして初めまして初めまして初めまして初めまして初めまして初めまして初めまして初めまして</dd>
									<dt class="p-talk__comment__img"><img src="img/user.jpg" alt=""></dt>
									<dd class="p-tale__comment__meta">既読 2021年6月10日 11:11</dd>
								</dl>
							</div>
							
							<form action="">
								<div class="p-form__search p-form__search--talk u-fbox u-fbox--alstart u-margin--bottom10">
									<textarea name="search" placeholder="メッセージ" class="p-form__search__input p-form__search__input--talk"></textarea>
									<input type="submit" value="検索" class="p-form__search__submit p-form__search__submit--plane p-form__search__submit--talk" >
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
import $ from 'jquery'

export default {
  name: 'MessageDetail',
  data(){
	return {
		messageId : this.$route.params.messageId
	}
  },
  mounted(){
    this.$emit('click', {'isHeaderActive':true,'isFooterActive':false}) 

	/**talk入力部分の文字量に合わせた入力卵サイズ調整**/
	$('.p-form__search__input--talk').attr('rows', 1).on('input', function() {
		$(this).height(0).innerHeight(this.scrollHeight);
		timeline_height();
	});
	/**talk送信**/
	$('.p-form__search__submit--talk').on('click',function(){
		$(this).val('');
		timeline_height();							  
	});
	
	/**talk部分の高さ調整**/
	if($('.p-talk--timeline').length){
		timeline_height();
	}
	
	function timeline_height(){
		
		var partsh = $('.p-header').outerHeight() + $('.p-talk__user').outerHeight() + $('.p-form__search').outerHeight() + $('.p-footer').outerHeight();
		var bh = $('.p-talk--timeline').outerHeight() - $('.p-talk--timeline').innerHeight();//タイムライン のマージン等
		var ch = 50;//外枠のマージン等
		var wh = $(window).innerHeight() - partsh - bh - ch;
		
		$('.p-talk--timeline').css({'min-height':wh+'px','max-height':wh+'px'});
	}
  },
  methods:{
  }
}
</script>
