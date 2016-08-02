<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>商家推送时延</title>

    <link rel="stylesheet" href="/pushServer/Public/css/divider.css">
    <link rel="stylesheet" href="/pushServer/Public/css/styles.css">
    <link rel="stylesheet" href="/pushServer/Public/css/table.css">
    <link rel="stylesheet" href="/pushServer/Public/css/bigpage.css">
    <link rel="stylesheet" href="http://apps.bdimg.com/libs/jqueryui/1.10.4/css/jquery-ui.min.css">

    <script> var Home = '/pushServer/index.php/Home';</script>
    <script src="/pushServer/Public/js/jquery.min.js"></script>
    <script src="//apps.bdimg.com/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
    <script src="/pushServer/Public/js/echarts.js"></script>
    <script src="/pushServer/Public/js/compage.js"></script>
    <script>var data =JSON.parse( '<?php echo ($data); ?>');</script>
    <script type="text/javascript" src="/pushServer/Public/js/push_comp_info.js"></script>
</head>
<body>
<div id="a1">
    <br><p id="companyid" style="display: none"><?php echo ($companyid); ?></p><br>
    <span style="border-bottom:2px solid #2D96E9;font-size: 20px;font-weight:bold">商家推送时延</span>
    <div class="ui Inverted divider"></div><br/>
    <!--推送折线图-->
    <div id="push_figure" style="left:10%;width: 80%;height:400px;"></div>
    <script src="/pushServer/Public/js/comp_info.js"></script>
</div>
<div id="a2">
    <span style="border-bottom:2px solid #2D96E9;font-size: 20px;font-weight:bold">推送详细记录</span>

    <div class="ui Inverted divider"></div>
    <table class="ui selectable  celled table" id="comtable">
        <thead>
        <tr>
            <th>推送时间</th>
            <th>网关相应时间</th>
            <th>时延（秒）</th>
            <th>商家编码</th>
            <th>推送平台</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
</div>
</body>
</html>