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
								<router-link :to="{ name: 'Message'}" class="p-talk p-talk--user">
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
								<dl v-for="message in messages"  v-bind:key="message.index" class="p-talk__comment u-fbox u-fbox--alend" v-bind:class="{ 'p-talk__comment--me': message.user == toId ,'u-fbox--bxstart' : message.user == toId,  'p-talk__comment--you':message.user == fromId, 'u-fbox--bxend':message.user == fromId}">
									<dt v-if='message.user == toId' class="p-talk__comment__img"><img src="../img/user.jpg" alt=""></dt>						
									<dd v-if="message.type == 'mess'" class="p-talk__comment__message">{{ message.message }}</dd>
									<!-- <img v-if="message.type == 'file'" :src="message.message">
									<br v-if="message.type == 'file'">
									<a v-if="message.type == 'file'" :href="'http://' + location.hostname +':8080' + message.message" download>ダウンロード</a> -->
									<dd class="p-tale__comment__meta">{{ message.created_time }}</dd>
								</dl>
								<!-- <dl class="p-talk__comment p-talk__comment--me u-fbox u-fbox--alend u-fbox--bxstart">
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
								</dl> -->
							</div>
							
							<form action="" @submit.prevent="sendMessage">
								<div class="p-form__search p-form__search--talk u-fbox u-fbox--alstart u-margin--bottom10">
									<textarea name="search" placeholder="メッセージ" class="p-form__search__input p-form__search__input--talk" v-model="message"></textarea>
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
import io from 'socket.io-client';  //追加
import $ from 'jquery'
import axios from 'axios'

export default {
  name: 'MessageDetail',
  data(){
	return {
		fromId : this.$route.params.fromId,
		toId : this.$route.params.toId,
		roomId : this.$route.params.roomId,
		socket : io(`${location.hostname}:3000/chat`),
		message:'',
		messages:[]
	}
  },
  mounted(){

	//パラメータがない場合は強制的に前ページに飛ばす
	if(!this.$route.params.fromId || !this.$route.params.roomId){
		this.$router.push('/message')
	}

    this.$emit('click', {'isHeaderActive':true,'isFooterActive':false}) 

	this.getExistMessages()

	this.socket.on('message', (message)=>{
        console.log("receive message")
		if(message.type == "mess"){
			console.log("mess")
			console.log(message)
			this.messages.push(message)
			console.log(this.messages)
		}else{
			console.log("file")
			console.log(message)
			this.messages.push(message)
			console.log(this.messages)
		}
   
        this.$nextTick(()=>{
            // var messageBox = document.getElementById('chatbox')
			// console.log(messageBox)
            // messageBox.scrollTop = messageBox.scrollHeight
        })
    })

	this.setFromIdAndRoomId();


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
  destroyed(){
		console.log('destroyed')
		//websocketのdisconnectを呼び出し
		this.socket.disconnect()
  },
  methods:{
		setFromIdAndRoomId(){
			this.socket.emit('join',{fromId : this.fromId, roomId :this.roomId ,toId:this.toId})   
		},
		sendMessage(){   
			this.socket.emit('message', this.message)
			this.message = ''
			// var textarea = document.getElementById('target');
			// textarea.setAttribute('style','');
			// textarea.value = "";
		},
		getExistMessages(){
			axios.get(`http://${location.hostname}:3000/api/messages`,{
				params: {
					roomId: this.roomId,
					toId: this.toId
				}
			})
			.then((res) => {
				console.log(res.data)
				this.messages = res.data
			
				this.$store.dispatch('changeMatchesListStatus', {type:"readMessage", fromId:this.toId, roomId:this.roomId, read_flg:1})				
			})
			.catch((e) => alert(e))
		},
  }
}
</script>
