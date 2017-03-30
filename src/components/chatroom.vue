<template>
  <div class="chatroom">
    <ul id="messages"></ul>

    <div class="container text-center">
      <div class="row" align="center">
        <h1 style="color: rgb(#fffff);"><i aria-hidden="true" class="fa fa-whatsapp"></i> iTrest Chatroom</h1>
        <div class="round hollow text-center">
          <button v-on:click="(true) in Click" class="open-btn" id="addClass"><i class="fa fa-whatsapp" aria-hidden="true"></i> Click Here</button>
        </div>
         <div>
          <router-link to="clockin">
            <h4>Back to clock-in</h4>
          </router-link>
        </div>
        <div>
          <router-link to="/">
            <h4>Logout</h4>
          </router-link>
        </div>
        <hr>
        <div id="img" align="left">
          <img src="static/img/itrestpro.png" />
        </div>

        <h1 v-if="Click === 0"></h1>

        <div id="chatroom" class="col-md-6 col-md-offset-6" align="right">
          <aside id="sidebar_secondary" class="tabbed_sidebar ng-scope chat_sidebar">

            <div class="popup-head">
              <div class="popup-head-left pull-left">

                <h3>Hey Jude</h3><small><br> <span class="glyphicon glyphicon-briefcase" aria-hidden="true"></span> Web Developer</small>
              </div>
              <div class="popup-head-right pull-right">
                <button class="chat-header-button" type="button"><i class="glyphicon glyphicon-facetime-video"></i></button>
                <button class="chat-header-button" type="button"><i class="glyphicon glyphicon-earphone"></i></button>
                <div class="btn-group gurdeepoushan">
                  <button class="chat-header-button" data-toggle="dropdown" type="button" aria-expanded="false">
                        <i class="glyphicon glyphicon-paperclip"></i>
                      </button>
                  <ul role="menu" class="dropdown-menu pull-right">
                    <li><a href="#"><span class="glyphicon glyphicon-picture" aria-hidden="true"></span> Gallery</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-camera" aria-hidden="true"></span> Photo</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-facetime-video" aria-hidden="true"></span> Video</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-headphones" aria-hidden="true"></span> Audio</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span> Location</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> Contact</a></li>
                  </ul>
                </div>

                <button data-widget="remove" id="removeClass" class="chat-header-button pull-right" type="button"><i class="glyphicon glyphicon-remove"></i></button>
              </div>
            </div>
            <div id="chat" class="chat_box_wrapper chat_box_small chat_box_active" style="opacity: 1; display: block; transform: translateX(0px);">
              <div class="chat_box touchscroll chat_box_colors_a">
                <div class="chat_message_wrapper">
                  <div class="chat_user_avatar">
                    <a href="https://www.facebook.com/rhannyuy.brightstar" target="_blank">
                      <img alt="Hey Jude (Web Developer)" title="Hey Jude (Web Developer)" src="" class="static-img-itrestlo.png">
                    </a>
                  </div>

                  <ul class="chat_message">
                    <li>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus distinctio dolor earum est hic id impedit ipsum minima mollitia natus nulla perspiciatis quae quasi, quis recusandae, saepe, sunt totam.
                        <span class="chat_message_time">13:34</span>
                      </p>
                    </li>
                  </ul>
                </div>
                <div class="chat_message_wrapper">
                  <div class="chat_user_avatar">
                    <a href="https://www.facebook.com/rhannyuy.brightstar" target="_blank">
                      <img alt="Hey Jude (Web Developer)" title="Hey Jude (Web Developer)" src="" class="static-img-itrestlo.png">
                    </a>
                  </div>
                  <ul class="chat_message">
                    <li>
                      <p>
                        https://www.facebook.com/rhannyuy.brightstar
                        <span class="chat_message_time">23 Jun 1:10am</span>
                      </p>
                    </li>
                  </ul>
                </div>
                <div class="chat_message_wrapper chat_message_right">
                  <div class="chat_user_avatar">
                  </div>

                </div>

              </div>

            </div>
            <div id="ch">
              <div class="chat_submit_box">
                <div class="uk-input-group">
                  <div class="gurdeep-chat-box">
                    <span style="vertical-align: sub;" class="uk-input-group-addon">
                      <a href="#"><i class="fa fa-smile-o"></i></a>
                    </span>
                    <input v-model="newMessage" type="text" placeholder="Type a message" name="sendMessage" class="md-input">
                    <span v-for="msg of messages" style="vertical-align: sub;" class="uk-input-group-addon">
                      {{msg}}
                      <a href="#"><i class="fa fa-camera"></i></a>
                    </span>
                  </div>
                </div>

                <span class="uk-input-group-addon">
                    <a v-on:click="sendMessage" href="#"><i class="glyphicon glyphicon-send"></i></a>
                  </span>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>



  </div>
</template>

<script>
  var io = require('socket.io-client')
  export default {
    data() {
      return {
        newMessage: '',
        messages: [],
        socket: null
      }
    },
    created() {
      this.socket = io()
      this.socket.on('chat message', function(msg) {
        ('#messages').append(('<li>').text(msg))
      })
    },
    methods: {
      sendMessage() {
        this.socket.emit('send', {
          message: this.newMessage
        })
        this.newMessage = ''
        return false
      }
    }

  }
</script>

<style>
  body {
    font-family: 'Open Sans', sans-serif;
  }

  .chat_box .chat_message_wrapper ul.chat_message>li+li {
    margin-top: 10px;
  }

  .popup-box-on {
    display: block !important;
  }

  a:focus {
    outline: none;
    outline-offset: 0px;
  }

  .popup-head-left.pull-left h1 {
    color: #fff;
    float: left;
    font-family: oswald;
    font-size: 18px;
    margin: 2px 0 0 5px;
  }

  .popup-head-left a small {
    display: table;
    font-size: 11px;
    color: #fff;
    line-height: 4px;
    opacity: 0.5;
    padding: 0 0 0 7px;
  }

  .chat-header-button {
    background: transparent none repeat scroll 0 0;
    border: 1px solid #fff;
    border-radius: 7px;
    font-size: 15px;
    height: 30px;
    opacity: 0.9;
    padding: 0;
    text-align: center;
    width: 26px;
  }

  .popup-head-right {
    margin: 9px 0 0;
  }

  .popup-head .btn-group {
    margin: -5px 3px 0 -1px;
  }

  .gurdeepoushan .dropdown-menu {
    padding: 6px;
  }

  .gurdeepoushan .dropdown-menu li a span {
    border: 1px solid;
    border-radius: 50px;
    display: list-item;
    font-size: 19px;
    height: 40px;
    line-height: 36px;
    margin: auto;
    text-align: center;
    width: 40px;
  }

  .gurdeepoushan .dropdown-menu li {
    float: left;
    text-align: center;
    width: 33%;
  }

  .gurdeepoushan .dropdown-menu li a {
    border-radius: 7px;
    font-family: oswald;
    padding: 3px;
    transition: all 0.3s ease-in-out 0s;
  }

  .gurdeepoushan .dropdown-menu li a:hover {
    background: #27b0e1 none repeat scroll 0 0 !important;
    color: #fff;
  }

  .popup-head {
    background: #27b0e1 none repeat scroll 0 0 !important;
    border-bottom: 3px solid #ccc;
    color: #27b0e1;
    display: table;
    width: 100%;
    padding: 8px;
  }

  .popup-head .md-user-image {
    border: 2px solid #5a7172;
    border-radius: 12px;
    float: left;
    width: 44px;
  }

  .uk-input-group-addon .glyphicon.glyphicon-send {
    color: #27b0e1;
    font-size: 21px;
    line-height: 36px;
    padding: 0 6px;
  }

  .chat_box_wrapper.chat_box_small.chat_box_active {
    height: 342px;
    overflow-y: scroll;
    width: 300px;
  }

  aside {
    background-attachment: fixed;
    background-clip: border-box;
    background-color: rgba(transparent);
    background-image: url("https://scontent.fixc1-1.fna.fbcdn.net/v/t1.0-9/12670232_624826600991767_3547881030871377118_n.jpg?oh=f012838d46b547b3f2f633737794db27&oe=58E0EBE7");
    background-origin: padding-box;
    background-position: center top;
    background-repeat: repeat;
    border: 0px solid #304445;
    /*bottom: 0;*/
    /*display: 0;*/
    height: 500px;
    /*position: right;*/
    right: 70px;
    float: right;
    width: 300px;
    font-family: 'Open Sans', sans-serif;
  }

  .chat_box {
    padding: 10px;
  }

  .chat_box .chat_message_wrapper::after {
    clear: both;
  }

  .chat_box .chat_message_wrapper::after,
  .chat_box .chat_message_wrapper::before {
    content: " ";
    display: table;
  }

  .chat_box .chat_message_wrapper .chat_user_avatar {
    float: left;
  }

  .chat_box .chat_message_wrapper {
    margin-bottom: 32px;
  }

  .md-user-image {
    border-radius: 50%;
    width: 34px;
  }

  #img {
    position: absolute;
    border: 0 none;
    box-sizing: border-box;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
  }

  .chat_box .chat_message_wrapper ul.chat_message,
  .chat_box .chat_message_wrapper ul.chat_message>li {
    list-style: outside none none;
    padding: 0;
  }

  .chat_box .chat_message_wrapper ul.chat_message {
    float: left;
    margin: 0 0 0 20px;
    max-width: 100%;
  }

  .chat_box.chat_box_colors_a .chat_message_wrapper ul.chat_message>li:first-child::before {
    border-right-color: #616161;
  }

  .chat_box .chat_message_wrapper ul.chat_message>li:first-child::before {
    border-color: transparent #ededed transparent transparent;
    border-style: solid;
    border-width: 0 16px 16px 0;
    content: "";
    height: 0;
    left: -14px;
    position: absolute;
    top: 0;
    width: 0;
  }

  .chat_box.chat_box_colors_a .chat_message_wrapper ul.chat_message>li {
    background: #27b0e1 none repeat scroll 0 0;
    color: #000000;
  }

  .open-btn {
    border: 2px solid #189d0e;
    border-radius: 32px;
    color: #276a83 !important;
    display: inline-block;
    margin: 10px 0 0;
    padding: 9px 16px;
    text-decoration: none !important;
    text-transform: uppercase;
  }

  .chat_box .chat_message_wrapper ul.chat_message>li {
    background: #ededed none repeat scroll 0 0;
    border-radius: 4px;
    clear: both;
    color: #276a83;
    display: block;
    float: left;
    font-size: 13px;
    padding: 8px 16px;
    position: relative;
    word-break: break-all;
  }

  .chat_box .chat_message_wrapper ul.chat_message,
  .chat_box .chat_message_wrapper ul.chat_message>li {
    list-style: outside none none;
    padding: 0;
  }

  .chat_box .chat_message_wrapper ul.chat_message>li {
    margin: 0;
  }

  .chat_box .chat_message_wrapper ul.chat_message>li p {
    margin: 0;
  }

  .chat_box.chat_box_colors_a .chat_message_wrapper ul.chat_message>li .chat_message_time {
    color: rgba(#276a83);
  }

  .chat_box .chat_message_wrapper ul.chat_message>li .chat_message_time {
    color: #27c183;
    display: block;
    font-size: 11px;
    padding-top: 2px;
    text-transform: uppercase;
  }

  .chat_box .chat_message_wrapper.chat_message_right .chat_user_avatar {
    float: left;
  }

  .chat_box .chat_message_wrapper.chat_message_right ul.chat_message {
    float: left;
    margin-left: 0 !important;
    margin-right: 24px !important;
  }

  .chat_box.chat_box_colors_a .chat_message_wrapper.chat_message_right ul.chat_message>li:first-child::before {
    border-left-color: #27c183;
  }

  .chat_box.chat_box_colors_a .chat_message_wrapper ul.chat_message>li:first-child::before {
    border-right-color: #ff3954;
  }

  .chat_box .chat_message_wrapper.chat_message_right ul.chat_message>li:first-child::before {
    border-color: transparent transparent transparent #ededed;
    border-width: 0 0 29px 29px;
    left: auto;
    right: -14px;
  }

  .chat_box .chat_message_wrapper ul.chat_message>li:first-child::before {
    border-color: transparent #ededed transparent transparent;
    border-style: solid;
    border-width: 0 29px 29px 0;
    content: "";
    height: 0;
    left: -14px;
    position: absolute;
    top: 0;
    width: 0;
  }

  .chat_box.chat_box_colors_a .chat_message_wrapper.chat_message_right ul.chat_message>li {
    background: #E8FFD4 none repeat scroll 0 0;
  }

  .chat_box .chat_message_wrapper ul.chat_message>li {
    background: #ededed none repeat scroll 0 0;
    border-radius: 12px;
    clear: both;
    color: #ff3954;
    display: block;
    float: left;
    font-size: 13px;
    padding: 10px 16px;
    position: relative;
  }

  .gurdeep-chat-box {
    background: #ff3954 none repeat scroll 0 0;
    border-radius: 5px;
    float: right;
    padding: 7px;
    /*bottom: 0;*/
  }

  #submit_message {
    background: transparent none repeat scroll 0 0;
    border: medium none;
    padding: 4px;
  }

  .gurdeep-chat-box i {
    color: #333;
    font-size: 30px;
    line-height: 1px;
  }

  .chat_submit_box {
    /*bottom: 0;*/
    box-sizing: border-box;
    left: 0;
    overflow: hidden;
    padding: 10px;
    /*position: absolute;*/
    width: 100%;
    /*top: 310px;*/
  }

  .uk-input-group {
    border-collapse: separate;
    display: table;
    position: relative;
    top: 30px
  }

  .chat_box {
    background-color: deepskyblue;
  }


  /*#chatroom {
        top: 0;
      }*/
</style>
