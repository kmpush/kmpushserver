<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>K米平台服务质量监测系统</title>

    <link rel="stylesheet" href="/pushServer/Public/css/divider.css">
    <link rel="stylesheet" href="/pushServer/Public/css/styles.css">
    <link rel="stylesheet" href="/pushServer/Public/css/table.css">
    <link rel="stylesheet" href="/pushServer/Public/css/menu.css">
    <link rel="stylesheet" href="/pushServer/Public/css/button.css">
    <link rel="stylesheet" href="/pushServer/Public/css/jPages.css">
    <link rel="stylesheet" href="http://apps.bdimg.com/libs/jqueryui/1.10.4/css/jquery-ui.min.css">

    <script> var Home = '/pushServer/Home';</script>
    <script src="/pushServer/Public/js/jquery.min.js"></script>
    <script src="//apps.bdimg.com/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
    <script src="/pushServer/Public/js/echarts.js"></script>
    <script src="/pushServer/Public/js/china.js"></script>
    <script src="/pushServer/Public/js/function.js" type="text/javascript"></script>
    <script src="/pushServer/Public/js/jPages.js"></script>
    <script>
        var appUrl = '/pushServer/index.php';
    </script>

</head>
<body>
<div id="a1">
    <div style="float: right">
        <label for="from" style="font-size: 20px">开始时间</label>
        <input type="text" id="from" name="from" style="width:105px;height: 25px;font-size: 20px">
        <button class="blue ui button" onclick="PostData()">查询</button>
    </div>
    <br><br>
    <span style="border-bottom:2px solid #2D96E9;font-size: 20px;font-weight:bold">推送量</span>

    <div class="ui Inverted divider"></div><br/>
    <!--推送折线图-->
    <div id="first" style="left:10%;width: 80%;height:400px;"></div>
    <script src="/pushServer/Public/js/first.js"></script>
</div>
<div id="a2">
    <span style="border-bottom:2px solid #2D96E9;font-size: 20px;font-weight:bold">平均推送时延热点图</span>

    <div class="ui Inverted divider"></div>
    <!--推送热点图-->
    <div id="second" style="left:10%;width: 80%;height:400px;margin-top: 20px"></div>
    <script src="/pushServer/Public/js/second.js"></script>
</div>
<div id="a3text">
    <span style="float: left;border-bottom:2px solid #2D96E9;font-size: 20px;font-weight:bold">推送时延分布</span>

    <span style="margin-left: 40%;border-bottom:2px solid #2D96E9;font-size: 20px;font-weight:bold">发起推送平台占比</span>

    <div class="ui Inverted divider"></div>
</div>
<!--两个饼图-->
<div id="a3">
    <div id="third" style="float:left;padding-left: 5%;padding-top:2%;width: 40%;height:380px;"></div>
    <script src="/pushServer/Public/js/third.js"></script>
    <br>

    <div class="ui vertical divider"></div>
    <div id="forth" style="margin-left:55%;width: 40%;height:380px;"></div>
    <script src="/pushServer/Public/js/forth.js"></script>
</div>
<!--详情表-->
<div id="a4">
    <span style="border-bottom:2px solid #2D96E9;font-size: 20px;font-weight:bold">推送详细记录</span>

    <div class="ui Inverted divider"></div>
    <table class="ui selectable  celled table" id="infotable">
        <thead>
        <tr>
            <th>推送时间</th>
            <th>网关相应时间</th>
            <th>时延（秒）</th>
            <th>商家编码</th>
            <th>推送平台</th>
            <th>所属城市</th>
        </tr>
        </thead>
        <tbody id="tb">

        </tbody>
    </table>

    <div id="a5">
        <div class="ui horizontal divider">End</div>
    </div>
</div>
</body>
</html>