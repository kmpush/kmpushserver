<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>登录系统</title>
    <link rel="stylesheet" type="text/css" href="/pushServer/Public/css/login.css"/>
    <script src="/pushServer/Public/js/jquery.min.js"></script>

    <script>
        function login() {
            var a = document.getElementById('userID').value;
            var b = document.getElementById('psw').value;

            if (a == '' || b == '') {
                alert("用户名或密码不能为空！")
            }
            else {
                $.ajax({
                    type: "post",
                    url: "/pushServer/Home/Index/checkid",
                    async: true, //异步执行
                    data: {id:a,psw:b},
                    success: function (msg) {
                       if(msg==0)
                       {
                           alert("用户名或密码错误！")
                       }
                        else {
                           window.location.href = '/pushServer/Home/Index/info';
                       }

                    },

                });
            }
        }
    </script>
</head>

<body>
<div id="slick-login" >
    <label>username</label><input type="text" id="userID" class="placeholder" placeholder="username">
    <label>password</label><input type="password" id="psw" class="placeholder" placeholder="password">
    <button onclick="login()">登录</button>
</div>
</body>

</html>