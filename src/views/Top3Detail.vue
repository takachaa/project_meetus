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
							<!-- <a class="p-offertitle" @click="backTop()">こんな職場です！{{ jobId }} </a> -->
							<router-link :to="{ name: 'Top2', params: { value: jobId }}" class="p-offertitle">こんな職場です！</router-link >
							<!--job-->
							<div class="p-offer p-offer--detail">
								<div class="p-offer__thumbnail">
									<!-- <swiper :options="swiperOption" ref="mySwiper1"> 
										<swiper-slide><img src="../img/img_company01.png" alt="" class="p-offer__thumbnail__img"></swiper-slide> 
										<swiper-slide><img src="../img/img_company01.png" alt="" class="p-offer__thumbnail__img"></swiper-slide> 
										<swiper-slide><img src="../img/img_company01.png" alt="" class="p-offer__thumbnail__img"></swiper-slide> 
										<swiper-slide><video width="384" height="141" controls src="https://res.cloudinary.com/code-kitchen/video/upload/v1555082747/movie.mp4"></video></swiper-slide>
										<div class="swiper-pagination"  slot="pagination"></div>
										<div class="swiper-button-prev" slot="button-prev"></div>
										<div class="swiper-button-next" slot="button-next"></div> 
									</swiper>  -->


									<swiper :options="swiperTopOptions" ref="swiperTop" class="swiperTop">
										<swiper-slide v-for="Slide in Slides" :key="Slide.index" >
											<img :src="Slide[1]" alt="" class="p-offer__thumbnail__img" v-if="Slide[0] == 'img'">
											<!-- <video width="384" height="141" controls :src="Slide[1]" v-else-if="Slide[0] == 'video'"></video>				 -->
										</swiper-slide>
										<div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
										<!-- <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
										<div class="swiper-button-next swiper-button-white" slot="button-next"></div> -->
									</swiper>
									<!-- swiper2 Thumbs -->
									<swiper :options="swiperThumbsOptions" ref="swiperThumbs" class="swiperThumbs">
										<swiper-slide v-for="Slide in Slides" :key="Slide.index">
											<img :src="Slide[1]" alt="" class="p-offer__thumbnail__img" v-if="Slide[0] == 'img'">
											<!-- <img :src="Slide[2]" alt="" class="p-offer__thumbnail__img" v-else-if="Slide[0] == 'video'"> -->
											<!-- <video width="96" height="25" controls :src="Slide[1]" v-else-if="Slide[0] == 'video'"></video>	 -->
										</swiper-slide>
									</swiper>
									<!-- <img src="../img/img_company01.png" alt="" class="p-offer__thumbnail__img"> -->
									<!-- <div class="p-offer__gallery u-fbox u-fbox--alcenter u-fbox--bxstart">
										<div class="p-offer__gallery__img is-active"><img src="../img/thumb_1.png" alt=""></div>
										<div class="p-offer__gallery__img"><img src="../img/thumb_2.png" alt=""></div>
										<div class="p-offer__gallery__img"><img src="../img/thumb_3.png" alt=""></div>
									</div> -->
									<span class="p-offer__thumbnail__iconbox p-offer__thumbnail__iconbox--detail u-fbox u-fbox--alstart u-fbox--wauto">
										<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--good"></span>
										<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--favorite"></span>
									</span>
								</div>
								<div class="p-offer__cat u-fbox u-fbox--alstart u-fbox--bxstart">
									<span class="p-offer__cat__icon">正社員</span>
									<span class="p-offer__cat__icon">未経験OK</span>
								</div>
								<h1 class="p-offer__title">({{jobId}})100%自社開発！北九州で腰を据えて働こう</h1>
								<p class="p-offer__desc">ネットワークエンジニア、Webエンジニア、プログラマー</p>
								<div class="p-offer__detail p-offer__detail--details">
									<div class="p-offer__detail__details">
										<p class="p-offer__detail__details__item">得意先様からの電話・FAXの注文に対するパソコンでの受注処理が主な業務です。<br>その他医薬品メーカーへの商品の発注や、在庫管理などの事務関連業務全般を行っていただきます。</p>
										<p class="p-offer__detail__details__item">会社名：SHINRAI GROUP<br>
											雇用形態：正社員<br>
											職種：技術職<br>
											勤務時間：9:00〜18:00<br>
											休日：完全週休二日制 土日祝日<br>
											資格：TOEIC800点以上<br>
											技術：Webシステム経験3年以上<br>
											その他：フレックス有、時短勤務有、テレワーク有</p>
									</div>
									<h2 class="p-offer__detail__details__title">こんな会社です！</h2>
									<ul class="p-offer__detail__details__list u-fbox u-fbox--alstart u-fbox--bxstart">
										<li class="p-offer__detail__details__list__item">しっかり固まった業務内容</li>
										<li class="p-offer__detail__details__list__item">シフト制</li>
										<li class="p-offer__detail__details__list__item">技術力・営業力</li>
										<li class="p-offer__detail__details__list__item">教育が充実</li>
									</ul>
									<h2 class="p-offer__detail__details__title">こんな人を探しています！</h2>
									<ul class="p-offer__detail__details__list u-fbox u-fbox--alstart u-fbox--bxstart">
										<li class="p-offer__detail__details__list__item">やる気と勢い</li>
										<li class="p-offer__detail__details__list__item">「まず、やってみよう」の精神</li>
										<li class="p-offer__detail__details__list__item">フットワークが軽い</li>
										<li class="p-offer__detail__details__list__item">新しいことが好き</li>
										<li class="p-offer__detail__details__list__item">突発残業OK</li>
									</ul>
									<div class="p-offer__detail__details__company">
										<p class="p-offer__detail__details__company__item">会社名：株式会社エムディーシー</p>
										<p class="p-offer__detail__details__company__item">URL：<a href="https://aaa.cp.jp" target="_blank" rel="noopener"></a>https://aaa.cp.jp</p>
										<p class="p-offer__detail__details__company__item">住所：〒800-0321 福岡県京都郡苅田町新浜町1-34</p>
										<p class="p-offer__detail__details__company__item">電話番号：000-0000-0000</p>
										<p class="p-offer__detail__details__company__item">地図（GoogleMap）
											<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.811430190144!2d130.98374551563583!3d33.76553839023065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3543ea24d48e7cef%3A0x1e629c98f103d16f!2z5qCq5byP5Lya56S-44OY44OD44K6IOacrOekvuW3peWgtA!5e0!3m2!1sja!2sjp!4v1624452980941!5m2!1sja!2sjp" style="border:0;" allowfullscreen="" loading="lazy"></iframe></p>
										<div class="p-offer__detail__details__company__agent u-fbox u-fbox--alcenter">
											<img src="../img/user.jpg" alt="" class="p-offer__detail__details__company__agent__img">
											<dl class="p-offer__detail__details__company__agent__detail">
												<dd class="p-offer__detail__details__company__agent__detail__desc">採用担当者</dd>
												<dt class="p-offer__detail__details__company__agent__detail__name">山田 太郎</dt>
											</dl>											
										</div>
									</div>										
									<h2 class="p-offer__detail__details__title p-offer__detail__details__title--agent">自己紹介</h2>
									<p class="p-offer__detail__details__item">テキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミー</p>
									<h2 class="p-offer__detail__details__title">こんな性格です！</h2>
									<ul class="p-offer__detail__details__list u-fbox u-fbox--alstart u-fbox--bxstart">
										<li class="p-offer__detail__details__list__item">穏やか</li>
										<li class="p-offer__detail__details__list__item">誰とでも打ち解ける</li>
										<li class="p-offer__detail__details__list__item">人の話を聞く</li>
									</ul>
									<h2 class="p-offer__detail__details__title">休日の過ごし方♪</h2>
									<ul class="p-offer__detail__details__list u-fbox u-fbox--alstart u-fbox--bxstart">
										<li class="p-offer__detail__details__list__item">NETFLIX</li>
										<li class="p-offer__detail__details__list__item">ドライブ</li>
										<li class="p-offer__detail__details__list__item">音楽鑑賞</li>
										<li class="p-offer__detail__details__list__item">お笑い番組</li>
									</ul>
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

</div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'Top3Detail',
  data(){
	return {
		jobId : '',
		// Slides: ["/img/img_company01.png","/img/img_company01.png","/img/img_company01.png","/img/img_company01.png"],
		Slides:[
			['img', require('@/img/img_company01.png')],
			['img', require('@/img/img_company02.png')],
			['img', require('@/img/img_company03.png')],
			// ['video', "https://res.cloudinary.com/code-kitchen/video/upload/v1555082747/movie.mp4", require('@/img/img_company03.png')],

		],			
		swiperTopOptions: {
			effect: 'fade',
			loop: true,
			loopedSlides:3, //loopedSlidesは同じ値にする
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		},
		swiperThumbsOptions: {
			loop: true,
			loopedSlides: 3, //loopedSlidesは同じ値にする
			slidesPerView: 3,
			slideToClickedSlide: true
		}
		
	}
  },
  computed: {
		
	},
  created(){
	
  },
  mounted() {
	
	this.$emit('click', {'isHeaderActive':true,'isFooterActive':true}) 

	this.$nextTick(() => {
		const swiperTop = this.$refs.swiperTop.$swiper
		const swiperThumbs = this.$refs.swiperThumbs.$swiper

		swiperTop.controller.control = swiperThumbs
		swiperThumbs.controller.control = swiperTop

		// swiperTop.forEach((e, i) => {
		// 	e.controller.control = this.Slides[i];
		// });

		// swiperThumbs.forEach((e, i) => {
		// 	e.controller.control = this.Slides[i];
		// });
	})

	//画面遷移時に前のページのスクロール位置に引きずられてしまうので、スクロールをTOPにリセット
	window.scrollTo(0,0);

	const that = this;

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


/* .swiperTop {
  background-color: rgb(173, 215, 233);
} */
.swiperThumbs {
  background-color:white;
}
.swiperTop .swiper-slide {
  text-align: center;
  /* padding: 150px 0; */
}

.swiperThumbs .swiper-slide {
  text-align: center;
  /* dpadding: 50px 0; */
  border: 2px solid white;
}

/* .swiperThumbs .swiper-slide:hover {
  cursor: pointer;
} */

/* .swiper-slide-active {
  background-color: rgb(173, 215, 233);
} */

.swiperThumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.swiperThumbs .swiper-slide-active {
  opacity: 1;
}

</style>