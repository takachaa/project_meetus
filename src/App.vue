<template>
  <div>
    <!--header-->
    <header class="l-header" v-if="isHeaderActive">
      <div class="p-header u-fbox u-fbox--alcenter">
        <!-- <div class="p-header__menu  p-header__menu--login"><span></span></div> -->
        <div class="p-header__logo p-header__logo--login"><img src="./img/logo.png" alt="meetus" class="p-header__logo__img"></div>
        <!-- <div class="p-header__login p-header__login--login" v-if="!isAuthenticated">
          <router-link to="/login"><img src="./img/icon_login.svg" alt="ログイン" class="p-header__login__icon"></router-link>
        </div>
        <div class="p-header__login" v-else>
            <img src="./img/icon_login.svg" alt="ログアウト" class="p-header__login__icon" @click="logout">
        </div> -->
        <div class="p-header__loginbox p-header__login--login u-fbox u-fbox--alcenter u-fbox--bxend">
          <!-- <a href="" class="p-header__loginbox__icon p-header__loginbox__icon--good"></a>
          <a href="" class="p-header__loginbox__icon p-header__loginbox__icon--star"></a> -->
          <span class="p-header__loginbox__icon p-header__loginbox__icon--notice"><span class="p-header__loginbox__icon__num">{{getNewMessageCount}}</span></span>
          <router-link v-if="!isAuthenticated" to="/login" class="p-header__loginbox__icon p-header__loginbox__icon--topics"></router-link>
          <span v-else class="p-header__loginbox__icon p-header__loginbox__icon--topics" @click="logout"></span>
          
        </div>
      </div>
    </header>
    <!--/header-->
    <!-- <transition name="slide" mode="out-in" appear> -->
    <transition name="fade">
      <router-view @click="changeHeaderFooterStatus" @activateNotificationClick="activateNotificationSocket"/>
    </transition>

    <!--footer-->
    <footer v-if="isFooterActive && isAuthenticated">
      <div class="p-footer">
        <div class="p-footer__menu u-fbox u-fbox--alcenter">
          <!-- <a href="" class="p-footer__menu__icon p-footer__menu__icon--search"></a> -->
          <router-link to="/top2" class="p-footer__menu__icon p-footer__menu__icon--search"></router-link>
          <!-- <a href="" class="p-footer__menu__icon p-footer__menu__icon--good"></a> -->
          <router-link to="/like" class="p-footer__menu__icon p-footer__menu__icon--good"></router-link>			
          <!-- <a href="" class="p-footer__menu__icon p-footer__menu__icon--star"></a> -->
          <router-link to="/favorite" class="p-footer__menu__icon p-footer__menu__icon--star"></router-link>
          <!-- <a href="" class="p-footer__menu__icon p-footer__menu__icon--message"></a> -->
          <router-link to="/message" class="p-footer__menu__icon p-footer__menu__icon--message"></router-link>
          <!-- <a href="" class="p-footer__menu__icon p-footer__menu__icon--other"></a> -->
          <router-link to="/menu" class="p-footer__menu__icon p-footer__menu__icon--other"></router-link>
        </div>
      </div>
    </footer>
    <!--/footer-->
  </div>
</template>

<script>
import io from 'socket.io-client';  //追加
//import axios from 'axios'
//import { mapActions } from 'vuex'

export default {
  name: 'App',
  data(){
    return {
      // socket : io(`${location.hostname}:3000/notification`),
      socket:null,
      isHeaderActive: true,
      isFooterActive: true,
    }
  },
  computed:{
    isAuthenticated(){
      return this.$store.getters.idToken != null
    },
    getUerId() {
      return this.$store.getters.userId
    },
    getNewMessageCount() {
      let newMessageCount = 0
      this.$store.getters.matchesList.forEach((element)=>{
        if(element.read_flg == 0){
          newMessageCount ++
        }
      }) 

      let show_icon = newMessageCount > 0 ? 'N' : ''
      return show_icon
    },
  },
  beforeMount(){
    console.log('App.vue before mounted')

    if(this.isAuthenticated){
      this.activateNotificationSocket(true)    
    }
  },
  destroyed(){
    console.log('App.vue destoryed')   
    if(this.socket){
      this.socket.disconnect()
    }
  },
  methods:{
    logout(){
      this.socket.disconnect()
      this.socket = null
      this.$store.dispatch("logout");
    },
    changeHeaderFooterStatus(obj){
      this.isHeaderActive = obj.isHeaderActive;
      this.isFooterActive = obj.isFooterActive;
    },
    activateNotificationSocket(status){
      if(status){

        this.$store.dispatch('setMatchesList', true)

        this.socket = io(`${location.hostname}:3000/notification`)

        this.socket.on('message', (data)=>{
          console.log("notification receive message")
          console.log(data)   
          if(data.type == 'newMessage'){
            this.$store.dispatch('changeMatchesListStatus', data)
          }
        })
        
        this.socket.emit('join',{userId : this.$store.state.userId})
      }     
    },
  }
}
</script>


<style>
@import "./css/style.css";
.slide-enter-active {
  transition: all .1s ease;
}
.slide-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-enter, .slide-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .8s
}
.fade-enter, .fade-leave {
  opacity: 0.5
}
</style>
