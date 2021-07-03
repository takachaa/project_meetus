<template>
<div>

	
	<!--main-->
	<main>
		<div class="l-main">
			<!--article-->
			<article>
				
				<section id="searchform">
					<!--section-->
					<div class="l-main__section">
						<!--contents-->
						<div class="l-main__contents">
							<form action="">
								<div class="p-form__search u-fbox u-fbox--alcenter">
									<input type="text" name="search" placeholder="地域や職種、企業名などを検索" class="p-form__search__input">
									<input type="submit" value="検索" class="p-form__search__submit">
								</div>
							</form>
							<a class="p-form__detailopen u-fbox u-fbox--alcenter">より詳細な検索条件を指定</a>
						</div>
						<!--/contents-->
					</div>
					<!--/section-->
				</section>
				
				<section id="jobs">
					<!--section-->
					<div class="l-main__section">
						<!--contents-->
						<div class="l-main__contents">
							
							<!--job-->
							<div class="p-offer" id="1">
								<div class="p-offer__thumbnail">
									<img src="../img/img_company01.png" alt="" class="p-offer__thumbnail__img">
									<span class="p-offer__thumbnail__iconbox u-fbox u-fbox--alstart u-fbox--wauto">
										<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--good"></span>
										<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--favorite"></span>
									</span>
								</div>
								<div class="p-offer__cat u-fbox u-fbox--alstart u-fbox--bxstart">
									<span class="p-offer__cat__icon">正社員</span>
									<span class="p-offer__cat__icon">未経験OK</span>
								</div>
								<h1 class="p-offer__title">(1)100%自社開発！北九州で腰を据えて働こう</h1>
								<p class="p-offer__desc">ネットワークエンジニア、Webエンジニア、プログラマー</p>
								<div class="p-offer__detail">
									<dl class="p-offer__detail__company u-fbox u-fbox--alstart">
										<dt class="p-offer__detail__company__name">株式会社ジョブマッチング</dt>
										<dd class="p-offer__detail__company__url"><a href="" class="p-offer__detail__company__url__text">https://www.xxx.com</a></dd>
										<dd class="p-offer__detail__company__place u-fbox u-fbox--alcenter u-fbox--wauto">福岡県北九州市</dd>
									</dl>
									<div class="p-offer__detail__details">
										<p class="p-offer__detail__details__item">得意先様からの電話・FAXの注文に対するパソコンでの受注処理が主な業務です。<br>その他医薬品メーカーへの商品の発注や、在庫管理などの事務関連業務全般を行っていただきます。</p>
										<p class="p-offer__detail__details__item">会社名：SHINRAI GROUP<br>
											勤務地：熊本市 武蔵ケ丘<br>
											給与：月給 17万〜22万円<br>
											雇用形態：正社員</p>
										<div class="p-offer__detail__details__btn">
											<!-- <a href="" class="c-btn__detail">さらに詳細を見る</a> -->
											<router-link :to="{ name: 'Top3Detail', params: { value: '1' }}" class="c-btn__detail">さらに詳細を見る</router-link >
										</div>
										<span class="c-btn__modalclose">詳細を閉じる</span>
									</div>
								</div>
							</div>
							<!--/job-->
							
							<!--job-->
							<div class="p-offer" id="2">
								<div class="p-offer__thumbnail">
									<img src="../img/img_company01.png" alt="" class="p-offer__thumbnail__img">
									<span class="p-offer__thumbnail__iconbox u-fbox u-fbox--alstart u-fbox--wauto">
										<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--good"></span>
										<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--favorite"></span>
									</span>
								</div>
								<div class="p-offer__cat u-fbox u-fbox--alstart u-fbox--bxstart">
									<span class="p-offer__cat__icon">正社員</span>
									<span class="p-offer__cat__icon">未経験OK</span>
								</div>
								<h1 class="p-offer__title">(2)100%自社開発！北九州で腰を据えて働こう</h1>
								<p class="p-offer__desc">ネットワークエンジニア、Webエンジニア、プログラマー</p>
								<div class="p-offer__detail">
									<dl class="p-offer__detail__company u-fbox u-fbox--alstart">
										<dt class="p-offer__detail__company__name">株式会社ジョブマッチング</dt>
										<dd class="p-offer__detail__company__url"><a href="" class="p-offer__detail__company__url__text">https://www.xxx.com</a></dd>
										<dd class="p-offer__detail__company__place u-fbox u-fbox--alcenter u-fbox--wauto">福岡県北九州市</dd>
									</dl>
									<div class="p-offer__detail__details">
										<p class="p-offer__detail__details__item">得意先様からの電話・FAXの注文に対するパソコンでの受注処理が主な業務です。<br>その他医薬品メーカーへの商品の発注や、在庫管理などの事務関連業務全般を行っていただきます。</p>
										<p class="p-offer__detail__details__item">会社名：SHINRAI GROUP<br>
											勤務地：熊本市 武蔵ケ丘<br>
											給与：月給 17万〜22万円<br>
											雇用形態：正社員</p>
										<div class="p-offer__detail__details__btn">
											<!-- <a href="" class="c-btn__detail">さらに詳細を見る</a> -->
											<!-- <router-link to="/detail" class="c-btn__detail">さらに詳細を見る</router-link> -->
											<router-link :to="{ name: 'Top3Detail', params: { value: '2' }}" class="c-btn__detail">さらに詳細を見る</router-link >
										</div>
										<span class="c-btn__modalclose">詳細を閉じる</span>
									</div>
								</div>
							</div>
							<!--/job-->

							<!--job-->
							<div class="p-offer" id="3">
								<div class="p-offer__thumbnail">
									<img src="../img/img_company01.png" alt="" class="p-offer__thumbnail__img">
									<span class="p-offer__thumbnail__iconbox u-fbox u-fbox--alstart u-fbox--wauto">
										<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--good"></span>
										<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--favorite"></span>
									</span>
								</div>
								<div class="p-offer__cat u-fbox u-fbox--alstart u-fbox--bxstart">
									<span class="p-offer__cat__icon">正社員</span>
									<span class="p-offer__cat__icon">未経験OK</span>
								</div>
								<h1 class="p-offer__title">(3)100%自社開発！北九州で腰を据えて働こう</h1>
								<p class="p-offer__desc">ネットワークエンジニア、Webエンジニア、プログラマー</p>
								<div class="p-offer__detail">
									<dl class="p-offer__detail__company u-fbox u-fbox--alstart">
										<dt class="p-offer__detail__company__name">株式会社ジョブマッチング</dt>
										<dd class="p-offer__detail__company__url"><a href="" class="p-offer__detail__company__url__text">https://www.xxx.com</a></dd>
										<dd class="p-offer__detail__company__place u-fbox u-fbox--alcenter u-fbox--wauto">福岡県北九州市</dd>
									</dl>
									<div class="p-offer__detail__details">
										<p class="p-offer__detail__details__item">得意先様からの電話・FAXの注文に対するパソコンでの受注処理が主な業務です。<br>その他医薬品メーカーへの商品の発注や、在庫管理などの事務関連業務全般を行っていただきます。</p>
										<p class="p-offer__detail__details__item">会社名：SHINRAI GROUP<br>
											勤務地：熊本市 武蔵ケ丘<br>
											給与：月給 17万〜22万円<br>
											雇用形態：正社員</p>
										<div class="p-offer__detail__details__btn">
											<!-- <a href="" class="c-btn__detail">さらに詳細を見る</a> -->
											<!-- <router-link to="/detail" class="c-btn__detail">さらに詳細を見る</router-link> -->
											<router-link :to="{ name: 'Top3Detail', params: { value: '3' }}" class="c-btn__detail">さらに詳細を見る</router-link >
										</div>
										<span class="c-btn__modalclose">詳細を閉じる</span>
									</div>
								</div>
							</div>
							<!--/job-->

							<!--job-->
							<div class="p-offer" id="4">
								<div class="p-offer__thumbnail">
									<img src="../img/img_company01.png" alt="" class="p-offer__thumbnail__img">
									<span class="p-offer__thumbnail__iconbox u-fbox u-fbox--alstart u-fbox--wauto">
										<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--good"></span>
										<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--favorite"></span>
									</span>
								</div>
								<div class="p-offer__cat u-fbox u-fbox--alstart u-fbox--bxstart">
									<span class="p-offer__cat__icon">正社員</span>
									<span class="p-offer__cat__icon">未経験OK</span>
								</div>
								<h1 class="p-offer__title">(4 )100%自社開発！北九州で腰を据えて働こう</h1>
								<p class="p-offer__desc">ネットワークエンジニア、Webエンジニア、プログラマー</p>
								<div class="p-offer__detail">
									<dl class="p-offer__detail__company u-fbox u-fbox--alstart">
										<dt class="p-offer__detail__company__name">株式会社ジョブマッチング</dt>
										<dd class="p-offer__detail__company__url"><a href="" class="p-offer__detail__company__url__text">https://www.xxx.com</a></dd>
										<dd class="p-offer__detail__company__place u-fbox u-fbox--alcenter u-fbox--wauto">福岡県北九州市</dd>
									</dl>
									<div class="p-offer__detail__details">
										<p class="p-offer__detail__details__item">得意先様からの電話・FAXの注文に対するパソコンでの受注処理が主な業務です。<br>その他医薬品メーカーへの商品の発注や、在庫管理などの事務関連業務全般を行っていただきます。</p>
										<p class="p-offer__detail__details__item">会社名：SHINRAI GROUP<br>
											勤務地：熊本市 武蔵ケ丘<br>
											給与：月給 17万〜22万円<br>
											雇用形態：正社員</p>
										<div class="p-offer__detail__details__btn">
											<!-- <a href="" class="c-btn__detail">さらに詳細を見る</a> -->
											<!-- <router-link to="/detail" class="c-btn__detail">さらに詳細を見る</router-link> -->
											<router-link :to="{ name: 'Top3Detail', params: { value: '4' }}" class="c-btn__detail">さらに詳細を見る</router-link >
										</div>
										<span class="c-btn__modalclose">詳細を閉じる</span>
									</div>
								</div>
							</div>
							<!--/job-->
							
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
	<router-link to="/login" class="p-footer__menu__icon p-footer__menu__icon--search"></router-link>
	<!--footer-->
	
	<!--/footer-->
	
	<!--more search-->
	<div class="p-form__jobsearch">
		<form>
			<div class="p-form__jobsearch__item">
				<select name="pref">
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
			</div>
			<div class="p-form__jobsearch__item">
				<select name="occupation">
					<option value="" selected="">職種を選んでください</option>
					<option value="営業">営業</option>
					<option value="製造業">製造業</option>
					<option value="サービス業">サービス業</option>
					<option value="飲食業">飲食業</option>
				</select>
			</div>
			<div class="p-form__jobsearch__item">
				<input type="text" name="keyword" placeholder="キーワード検索">
			</div>
			<div class="p-form__jobsearch__title">求職する目的や希望する条件は？<span>（複数選択可能）</span></div>
			<div class="p-form__jobsearch__item">
				<div class="p-form__checkbox u-fbox u-fbox--alstart u-fbox--bxstart">
					<label><input type="checkbox" name="purpose" value="年収アップ"><span>年収アップ</span></label>
					<label><input type="checkbox" name="purpose" value="スキルチェンジ"><span>スキルチェンジ</span></label>
					<label><input type="checkbox" name="purpose" value="自分にあった職場探し"><span>自分にあった職場探し</span></label>
					<label><input type="checkbox" name="purpose" value="Uターン/Iターン"><span>ターン/Iターン</span></label>
					<label><input type="checkbox" name="purpose" value="新しいことにチャレンジ"><span>新しいことにチャレンジ</span></label>
					<label><input type="checkbox" name="purpose" value="通勤時間の短縮"><span>通勤時間の短縮</span></label>
					<label><input type="checkbox" name="purpose" value="環境の良い場所へ移住"><span>環境の良い場所へ移住</span></label>
					<label><input type="checkbox" name="purpose" value="フレックス制度"><span>フレックス制度</span></label>
					<label><input type="checkbox" name="purpose" value="しっかり固まった業務内容"><span>しっかり固まった業務内容</span></label>
					<label><input type="checkbox" name="purpose" value="シフト制"><span>シフト制</span></label>
					<label><input type="checkbox" name="purpose" value="会社全体のやる気・勢い"><span>会社全体のやる気・勢い</span></label>
					<label><input type="checkbox" name="purpose" value="勤務時間の明確化"><span>勤務時間の明確化</span></label>
					<label><input type="checkbox" name="purpose" value="教育が充実"><span>教育が充実</span></label>
					<label><input type="checkbox" name="purpose" value="祝日休業"><span>祝日休業</span></label>
					<label><input type="checkbox" name="purpose" value="技術力・営業力"><span>技術力・営業力</span></label>
					<label><input type="checkbox" name="purpose" value="夏季休暇制度"><span>夏季休暇制度</span></label>
					<label><input type="checkbox" name="purpose" value="安定性"><span>安定性</span></label>
					<label class="p-form__checkbox__w100"><input type="checkbox" name="purpose" value="勤務時間調整がある程度できる"><span>勤務時間調整がある程度できる</span></label>
					<label class="p-form__checkbox__w100"><input type="checkbox" name="purpose" value="仕事について相談できる環境"><span>仕事について相談できる環境</span></label>
				</div>
			</div>
			<div class="p-form__jobsearch__title">自分の性格・仕事への姿勢<span>（複数選択可能）</span></div>
			<div class="p-form__jobsearch__item">
				<div class="p-form__checkbox u-fbox u-fbox--alstart u-fbox--bxstart">
					<label><input type="checkbox" name="personality" value="やる気と勢い"><span>やる気と勢い</span></label>
					<label><input type="checkbox" name="personality" value="緻密・正確な作業"><span>緻密・正確な作業</span></label>
					<label><input type="checkbox" name="personality" value="ミスが少ない"><span>ミスが少ない</span></label>
					<label><input type="checkbox" name="personality" value="「まず、やってみよう」の精神"><span>「まず、やってみよう」の精神</span></label>
					<label><input type="checkbox" name="personality" value="時間に正確"><span>時間に正確</span></label>
					<label><input type="checkbox" name="personality" value="集中力が高い"><span>集中力が高い</span></label>
					<label><input type="checkbox" name="personality" value="フットワークが軽い"><span>フットワークが軽い</span></label>
					<label><input type="checkbox" name="personality" value="会社・上司を尊重"><span>会社・上司を尊重</span></label>
					<label><input type="checkbox" name="personality" value="部下の面倒見が良い"><span>部下の面倒見が良い</span></label>
					<label><input type="checkbox" name="personality" value="チームワークが得意"><span>チームワークが得意</span></label>
					<label><input type="checkbox" name="personality" value="新しいことが好き"><span>新しいことが好き</span></label>
					<label><input type="checkbox" name="personality" value="覚えた作業は着実にこなす"><span>覚えた作業は着実にこなす</span></label>
					<label><input type="checkbox" name="personality" value="何でも調べる"><span>何でも調べる</span></label>
					<label><input type="checkbox" name="personality" value="メモはしっかり取る"><span>メモはしっかり取る</span></label>
					<label><input type="checkbox" name="personality" value="自分の意見をはっきり言う"><span>自分の意見をはっきり言う</span></label>
					<label><input type="checkbox" name="personality" value="相手の話に耳を傾ける"><span>相手の話に耳を傾ける</span></label>
					<label><input type="checkbox" name="personality" value="進むべき方向に向かって全力"><span>進むべき方向に向かって全力</span></label>
					<label><input type="checkbox" name="personality" value="相手を立てる"><span>相手を立てる</span></label>
					<label><input type="checkbox" name="personality" value="突発残業OK"><span>突発残業OK</span></label>
					<label><input type="checkbox" name="personality" value="計画的な残業OK"><span>計画的な残業OK</span></label>
					<label class="p-form__checkbox__w100"><input type="checkbox" name="personality" value="仕事は時間内にしっかりこなす"><span>仕事は時間内にしっかりこなす</span></label>
					<label class="p-form__checkbox__w100"><input type="checkbox" name="personality" value="状況に柔軟に対応"><span>状況に柔軟に対応</span></label>
				</div>
			</div>
			<div class="p-form__jobsearch__btn u-fbox u-fbox--alcenter u-fbox--bxcenter">
				<a href="" class="c-btn__clear">条件をクリア</a>
				<a href="" class="c-btn__search">上記の条件で検索</a>
			</div>
			<span class="p-form__jobsearch__close"></span>
		</form>
	</div>
	<!--m/ore search-->
</div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'Login',
  data(){
	return {
		jobId : this.$route.params.value
		// isSearchDetailActive : false,
		// isCompanyDetailActive : false
	}
  },
  mounted: function() {
	
	const that = this;

	that.$emit('click', {'isHeaderActive':true,'isFooterActive':true}) 
	
	$('.p-form__detailopen').on('click',function(e) {
		e.preventDefault();
		$('.p-form__jobsearch').addClass('is-active');
		$('body').addClass('is-active');
	});

	$('.p-form__jobsearch__close').on('click',function() {
		$('.p-form__jobsearch').removeClass('is-active');
		$('.p-form__jobsearch__title').removeClass('is-active');
		$('body').removeClass('is-active');
		$('.p-form__jobsearch__title + .p-form__jobsearch__item').removeAttr('style');
	});

	$('.p-offer__detail__company').on('click',function() {
		$(this).next('.p-offer__detail__details').slideToggle(300);
	});
	$('.p-offer__detail .c-btn__modalclose').on('click',function() {
		$(this).parents('.p-offer__detail').find('.p-offer__detail__details').slideToggle(300);
	});
	
	$('.p-form__jobsearch__title').on('click',function() {
		$(this).toggleClass('is-active');
		$(this).next('.p-form__jobsearch__item').slideToggle(300);
	});

	//以下大石追加分
	$('.p-offer__thumbnail__iconbox__icon--good').on('click', function(){
		if ($(this).hasClass('is-active')) {
			that.toast('「いいね！」を解除しました。');
			$(this).removeClass('is-active');
		} else {
			$(this).addClass('is-active');
			that.toast('「いいね！」を登録しました。');
		}		
	});

	$('.p-offer__thumbnail__iconbox__icon--favorite').on('click', function(){
		if ($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
			that.toast('「お気に入り」を解除しました。');
		} else {
			$(this).addClass('is-active');
			that.toast('「お気に入り」を登録しました。');
		}		
	});

	//詳細からの画面遷移の場合はJOBIDがパラメータで送られてくるので対象の仕事情報までスクロール
	if(that.jobId){
		$(`#${that.jobId}`).get(0).scrollIntoView(true)
	}


	
  },
  methods : {
    toast(message){
		// this.$toast(message,{duration:1000, horizontalPosition:'center', verticalPosition:'center', transition: 'fade',}, )
		this.$toasted.show(message, { theme: "toasted-primary", 
			position: "bottom-center", 
			duration : 1000, 
			fullWidth:true,
			fitToScreen:true,
			className: ['toasting']
			}
		)
	}
  }
}
</script>

<style>
.toasting {
  color: white !important;
  background-color: #41c1eb !important;
  /* margin-bottom:10% !important; */
  /* vertical-align: middle !important; */
  /* display:table-cell !important;;
  vertical-align:middle !important; */
}
</style>