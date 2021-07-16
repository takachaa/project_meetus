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
							<router-link :to="{ name: 'Menu' }" class="p-offertitle p-offertitle--good">メッセージ</router-link>
							
							<!-- <div class="p-menu u-margin--bottom30">
								<div class="p-menu__user u-fbox u-fbox--alcenter">
									<div class="p-menu__user__img"><img src="../img/user.jpg" alt=""></div>
									<p class="p-menu__user__name">ミータス太郎</p>
								</div>
							</div> -->
							
							<form action="">
								<div class="p-form__search u-fbox u-fbox--alcenter u-margin--bottom30">
									<input type="text" name="search" placeholder="ユーザーを検索" class="p-form__search__input">
									<input type="submit" value="検索" class="p-form__search__submit">
								</div>
							</form>
							
							<div class="p-talk p-talk--list">
								<router-link v-for="room in getMatchesList" :key="room.id" :to="{ name: 'MessageDetail', params: { roomId : `${room.roomId}` , fromId : `${room.fromId}` ,toId : `${room.toId}`}}">
									<!-- <router-link v-for="room in getMatchesList" :key="room.id" :to="{ name: 'MessageDetail', query: { roomId : `${room.roomId}` /*, fromId : `${room.fromId}` ,toId : `${room.toId}`*/}}"> -->
									<div class="p-talk__user u-fbox u-fbox--alcenter is-active">
										<div class="p-talk__user__img"><img src="../img/user.jpg" alt=""></div>
										<dl class="p-talk__user__profile">
										<dt class="p-talk__user__profile__name">{{room.fromId}} => {{room.toId}} ROOM: {{room.roomId}}</dt>
										<dd class="p-talk__user__profile__message">{{ room.read_flg == 1 ? "新着メッセージはありません。":"新着メッセージがあります。" }}</dd>
										</dl>
									</div>
								</router-link>
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
  name: 'Message',
  computed:{
	getMatchesList(){
		return this.$store.getters.matchesList
	}
  },
  mounted(){
    this.$emit('click', {'isHeaderActive':true,'isFooterActive':true}) 
  }
}
</script>
