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
						<div class="l-main__contents u-padding--top60">
							<div class="u-fixed u-fixed--title">
								<router-link :to="{ name: 'Menu' }" class="p-offertitle p-offertitle--good">プロフィール</router-link>
							</div>
							<div class="p-menu u-margin--bottom30">
								<div class="p-menu__user u-fbox u-fbox--alcenter">
									<div class="p-menu__user__img"><img src="../img/user.jpg" alt=""></div>
									<p class="p-menu__user__name">ミータス太郎</p>
								</div>
							</div>
							
							<div class="p-profile">
								<h1 class="p-profile__title">マイフォト</h1>
								<ul class="p-profile__photo u-fbox u-fbox--alstart u-fbox--bxstart">
									<li class="p-profile__photo__item"><a href="" class="p-profile__photo__item__add"></a></li>
									<li class="p-profile__photo__item"><img src="../img/user.jpg" alt="" class="p-profile__photo__item__img"></li>
									<li class="p-profile__photo__item"><img src="../img/user.jpg" alt="" class="p-profile__photo__item__img"></li>
								</ul>
								<h1 class="p-profile__title">
									<a href="" class="p-profile__edit">自己紹介</a>
								</h1>
								<div class="p-profile__msg">
									<p>はじめまして。テキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミー</p>
								</div>
								<h1 class="p-profile__title">
									<a href="" class="p-profile__edit">基本情報</a>
								</h1>
								<dl>
									<dt class="p-form__registration__stitle">お名前（名字、イニシャル、ハンドルネーム等）</dt>
									<dd class="p-form__registration__item p-form__registration__item--profile">山田 太郎</dd>
									<dt class="p-form__registration__stitle">メールアドレス</dt>
									<dd class="p-form__registration__item p-form__registration__item--profile">○○@○○○○.○○○</dd>
									<dt class="p-form__registration__stitle">パスワード</dt>
									<dd class="p-form__registration__item p-form__registration__item--profile">123456789</dd>
									<dt class="p-form__registration__stitle">性別</dt>
									<dd class="p-form__registration__item p-form__registration__item--profile">男性</dd>
									<dt class="p-form__registration__stitle">生まれた年</dt>
									<dd class="p-form__registration__item p-form__registration__item--profile">1980年</dd>
									<dt class="p-form__registration__stitle">お住いの都道府県</dt>
									<dd class="p-form__registration__item p-form__registration__item--profile">福岡県</dd>
									<dt class="p-form__registration__stitle">お住まいの市区町村</dt>
									<dd class="p-form__registration__item p-form__registration__item--profile">福岡市中央区</dd>
									<dt class="p-form__registration__stitle">職種</dt>
									<dd class="p-form__registration__item p-form__registration__item--profile">営業</dd>
									<dt class="p-form__registration__stitle">雇用形態</dt>
									<dd class="p-form__registration__item p-form__registration__item--profile">正社員</dd>
									<dt class="p-form__registration__stitle">求職する目的や希望する条件は？</dt>
									<dd class="p-form__registration__item p-form__registration__item--profile">年収アップ,通勤時間の短縮,勤務時間の明確化</dd>
									<dt class="p-form__registration__stitle">自分の性格・仕事への姿勢</dt>
									<dd class="p-form__registration__item p-form__registration__item--profile">時間に正確,集中力が高い,メモはしっかり取る,相手の話に耳を傾ける,相手を立てる,計画的な残業OK</dd>
								</dl>
                                <h1 class="p-profile__title">
									<a href="" class="p-profile__edit">学歴・職歴・言語・スキル</a>
								</h1>
								<dl>
									<dt class="p-form__registration__stitle">学歴/dt>
									<dd class="p-form__registration__item p-form__registration__item--profile">横浜大学</dd>
									<dt class="p-form__registration__stitle">職歴</dt>
									<dd class="p-form__registration__item p-form__registration__item--profile">Qookai株式会社</dd>
									<dt class="p-form__registration__stitle">言語</dt>
									<dd class="p-form__registration__item p-form__registration__item--profile">英語、日本語</dd>
									<dt class="p-form__registration__stitle">スキル</dt>
									<dd class="p-form__registration__item p-form__registration__item--profile">プログラム、簿記</dd>
								</dl>
								
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
	<!--/main-->
</div>
</template>

<script>

export default {
  name: 'Profile',
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
