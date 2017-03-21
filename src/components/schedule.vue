<template>
  <div class="main">
    <div class="container">
      <div class="row login_box">
        <div class="col-md-12 col-xs-12" align="center">
          <div class="">
            <h1>One Great Force </h1>
          </div>
          <hr>
          <div class="outter"><img src="../assets/lo.png" class="image-circle" /></div>

          <div class="col-md-12 col-xs-6" align="center">
            <h2 style="margin:5px">The Day's Task</h2>
            <input type="text" placeholder="What do you need to do?" autofocus class="text-input" v-model="newTask" v-on:keyup.enter="addTask">
            <!--<ul>
              <li v-for="(item, index) of todolist">
                {{ item }}
              </li>
            </ul>-->
              <ul class="list">

                <li v-for="task in taskList">

                  <input type="checkbox" class="checkbox">
                  <label for="checkbox">{{ task.text }}{% raw %}</label>
                  <button class="delete">X</button>

                </li>

              </ul>
            <hr>
            <div class="task">
              <!--v-if="todolist.length === 0-->
              <div class="col-md-10 col-xs-6">
                <div id="myDIV" class="header">
                  <div class="col-md-12 col-xs-6">
                    <h1> Job Well Done</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newTask: "",
        taskList:[]
    }
    methods: {
        addTask:function() {
          var task = this.newTask.trim()
          if (task) {
          this.taskList.push({
            text: task,
            checked: false
          })
          this.newTask = ""
        }
      }
        }
    }
  }
</script>

<style>
  body {
    background: #0264d6;
    /* Old browsers */
    background: -moz-radial-gradient(center, ellipse cover, #0264d6 1%, #1c2b5a 100%);
    /* FF3.6+ */
    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(1%, #0264d6), color-stop(100%, #1c2b5a));
    /* Chrome,Safari4+ */
    background: -webkit-radial-gradient(center, ellipse cover, #0264d6 1%, #1c2b5a 100%);
    /* Chrome10+,Safari5.1+ */
    background: -o-radial-gradient(center, ellipse cover, #0264d6 1%, #1c2b5a 100%);
    /* Opera 12+ */
    background: -ms-radial-gradient(center, ellipse cover, #0264d6 1%, #1c2b5a 100%);
    /* IE10+ */
    background: radial-gradient(ellipse at center, #0264d6 1%, #1c2b5a 100%);
    /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0264d6', endColorstr='#1c2b5a', GradientType=1);
    /* IE6-9 fallback on horizontal gradient */
    height: calc(100vh);
    width: 100%;
  }

  * {
    font-family: 'Raleway', sans-serif;
    color: #FFF;
  }

  .task {
    font-size: 20px;
    color: #FC563B;
  }

  div h3 span {
    color: #FFF;
    font-size: 14px;
  }

  div span {
    font-weight: 200;
  }

  h1 {
    font-weight: 200;
  }

  .login_box {
    background: #0264d6;
    /* Old browsers */
    /* IE9 SVG, needs conditional override of 'filter' to 'none' */
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMTAwJSIgeDI9IjEwMCUiIHkyPSIwJSI+CiAgICA8c3RvcCBvZmZzZXQ9IjUlIiBzdG9wLWNvbG9yPSIjZjMyZDI3IiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iOTklIiBzdG9wLWNvbG9yPSIjZmY2YjQ1IiBzdG9wLW9wYWNpdHk9IjEiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+Cjwvc3ZnPg==);
    background: -moz-linear-gradient(45deg, #0264d6 5%, #ff6b45 99%);
    /* FF3.6+ */
    background: -webkit-gradient(linear, left bottom, right top, color-stop(5%, #f32d27), color-stop(99%, #ff6b45));
    /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(45deg, #0264d6 5%, #ff6b45 99%);
    /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(45deg, #0264d6 5%, #ff6b45 99%);
    /* Opera 11.10+ */
    background: -ms-linear-gradient(45deg, #0264d6 5%, #ff6b45 99%);
    /* IE10+ */
    background: linear-gradient(45deg, #0264d6 5%, #ff6b45 99%);
    /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f32d27', endColorstr='#ff6b45', GradientType=1);
    /* IE6-8 fallback on horizontal gradient */
    width: 35%;
    /* height:70%; */
    position: absolute;
    top: 15%;
    left: 32.5%;
    -webkit-box-shadow: 0px 0px 8px 0px rgba(50, 50, 50, 0.54);
    -moz-box-shadow: 0px 0px 8px 0px rgba(50, 50, 50, 0.54);
    box-shadow: 0px 0px 8px 0px rgba(50, 50, 50, 0.54);
  }

  @media (max-width: 767px) {
    .login_box {
      background: #f32d27;
      /*Old browsers */
      /*IE9 SVG, needs conditional override of 'filter' to 'none' */
      background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMTAwJSIgeDI9IjEwMCUiIHkyPSIwJSI+CiAgICA8c3RvcCBvZmZzZXQ9IjUlIiBzdG9wLWNvbG9yPSIjZjMyZDI3IiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iOTklIiBzdG9wLWNvbG9yPSIjZmY2YjQ1IiBzdG9wLW9wYWNpdHk9IjEiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+Cjwvc3ZnPg==);
      background: -moz-linear-gradient(45deg, #f32d27 5%, #ff6b45 99%);
      /* FF3.6+ */
      background: -webkit-gradient(linear, left bottom, right top, color-stop(5%, #f32d27), color-stop(99%, #ff6b45));
      /* Chrome,Safari4+ */
      background: -webkit-linear-gradient(45deg, #f32d27 5%, #ff6b45 99%);
      /* Chrome10+,Safari5.1+ */
      background: -o-linear-gradient(45deg, #f32d27 5%, #ff6b45 99%);
      /* Opera 11.10+ */
      background: -ms-linear-gradient(45deg, #f32d27 5%, #ff6b45 99%);
      /* IE10+ */
      background: linear-gradient(45deg, #f32d27 5%, #ff6b45 99%);
      /* W3C */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f32d27', endColorstr='#ff6b45', GradientType=1);
      /* IE6-8 fallback on horizontal gradient */
      width: 90%;
      height: 80%;
      position: absolute;
      top: 10%;
      left: 5%;
      -webkit-box-shadow: 0px 0px 8px 0px rgba(50, 50, 50, 0.54);
      -moz-box-shadow: 0px 0px 8px 0px rgba(50, 50, 50, 0.54);
      box-shadow: 0px 0px 8px 0px rgba(50, 50, 50, 0.54);
    }
  }

  .image-circle {
    border-radius: 50%;
    width: 175px;
    height: 175px;
    border: 4px solid #FFF;
    margin: 10px;
  }

  .follow {
    background-color: #0264d6;
    height: 80px;
    cursor: pointer;
  }

  .follow:hover {
    background-color: #0264d6;
    height: 80px;
    cursor: pointer;
  }

  .login_control {
    background-color: #FFF;
    padding: 10px;
  }

  .control {
    color: #000;
    margin: 10px;
  }

  .label {
    color: #0264d6;
    font-size: 18px;
    font-weight: 500;
  }

  .form-control {
    color: #000000 !important;
    font-size: 25px;
    border: none;
    padding: 25px;
    padding-left: 10px;
    border-bottom: 1px solid #CCC;
    margin-bottom: 10px;
    outline: none;
    -webkit-box-shadow: none !important;
    -moz-box-shadow: none !important;
    box-shadow: none !important;
  }

  .form-control:focus {
    border-radius: 0px;
    border-bottom: 1px solid #0264d6;
    margin-bottom: 10px;
    outline: none;
    -webkit-box-shadow: none !important;
    -moz-box-shadow: none !important;
    box-shadow: none !important;
  }

  .btn-orange {
    background-color: #FC563B;
    border-radius: 0px;
    margin: 5px;
    padding: 5px;
    width: 150px;
    font-size: 20px;
    font-weight: inherit;
  }

  .btn-orange:hover {
    background-color: #0264d6;
    border-radius: 0px;
    margin: 5px;
    padding: 5px;
    width: 150px;
    font-size: 20px;
    font-weight: inherit;
    color: #FFF !important;
  }

  .line {
    border-bottom: 2px solid #F32D27;
  }

  .outter {
    padding: 0px;
    border: 1px solid rgba(255, 255, 255, 0.29);
    border-radius: 50%;
    width: 200px;
    height: 200px;
  }
</style>
