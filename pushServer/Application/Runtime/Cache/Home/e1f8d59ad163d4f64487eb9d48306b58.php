<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>K米平台服务质量监测系统</title>
    <link rel="stylesheet" href="/pushServer/Public/css/menu.css">
    <link rel="stylesheet" href="/pushServer/Public/css/button.css">
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
    <script src="/pushServer/Public/js/tablesort.js"></script>
    <script src="/pushServer/Public/js/function.js" type="text/javascript"></script>
    <script>
        if ('<?php echo ($data); ?>' != '') {
            var data = JSON.parse('<?php echo ($data); ?>');
        }
        else var data = 0
    </script>
</head>
<body>
<!--左菜单栏-->
<div class="left_div">
    <div class="ui vertical menu" id="left_menu">
        <br><br>
        <a class="item active" href="/pushServer/index.php/Home/Index/info"> <strong>推送量</strong> </a>
        <a class="item" href="/pushServer/index.php/Home/Index/info"> 平台推送量对比 </a>
        <a class="item" href="/pushServer/index.php/Home/Index/info"> 推送量城市分布 </a>
        <a class="item" href="/pushServer/index.php/Home/Index/info"> 推送平台占比 </a>
        <a class="item" href="/pushServer/index.php/Home/Index/info"> 推送详细记录 </a>

        <a class="item active" href="/pushServer/index.php/Home/Index/time_delay_info"> <strong>推送时延</strong> </a>
        <a class="item" href="/pushServer/index.php/Home/Index/time_delay_info"> 日推送时延 </a>
        <a class="item" href="/pushServer/index.php/Home/Index/time_delay_info"> 平均推送时延城市分布 </a>
        <a class="item" href="/pushServer/index.php/Home/Index/time_delay_info"> 推送时延分布 </a>
        <a class="item" href="/pushServer/index.php/Home/Index/time_delay_info"> 推送详细记录 </a>

        <a class="item active" href="/pushServer/index.php/Home/Index/company_info"> <strong>商家详情</strong> </a>
        <a class="item" href="javascript:go_here('a1')"> 商家推送时延 </a>
        <a class="item" href="javascript:go_here('a2')"> 商家推送详细记录 </a>
    </div>
</div>
<div class="right_content">
    <!--顶部导航菜单-->
    <div style="background:url('/pushServer/Public/css/image/bluesky.jpg') no-repeat center;background-size:100%">
        <br>

        <div id="header"><span
                style="padding:20px;border-bottom:2px solid #2D96E9;font-size: 2.5em;font-family:KaiTi_GB2312; font-weight:bold">K米平台服务质量监测系统</span>
        </div>
        <br>

        <div class="ui tabular menu " style="padding-left:30px">
            <a class="item" href="/pushServer/index.php/Home/Index/info"><strong>推送量</strong> </a>
            <a class="item" href="/pushServer/index.php/Home/Index/time_delay_info"><strong>推送时延</strong></a>
            <a class="item active">商家详情 </a>
        </div>
    </div>

    <div id="a1">
        <div style="float: right">
            <label for="company_code" style="font-size: 20px">商家编码</label>
            <input type="text" id="company_code" name="company_code" style="width:105px;height: 25px;font-size: 20px">
            <label for="from" style="font-size: 20px">开始时间</label>
            <input type="text" id="from" name="from" style="width:105px;height: 25px;font-size: 20px">
            <label for="to" style="font-size: 20px">结束时间</label>
            <input type="text" id="to" name="to" style="width:105px;height: 25px;font-size: 20px">
            <button class="blue ui button" onclick="PostCompanyData()">查询</button>
        </div>
        <br>

        <div id="hidden" style="display: none">
            <p id="companyid" style="display: none"><?php echo ($companyid); ?></p><br>
            <span style="border-bottom:2px solid #2D96E9;font-size: 20px;font-weight:bold">商家推送时延</span>

            <div class="ui Inverted divider"></div>
            <br>
            <!--推送折线图-->
            <div id="push_figure" style="left:10%;width: 80%;height:400px;"></div>
        </div>
    </div>
    <div id="a2" style="display: none">
        <span style="border-bottom:2px solid #2D96E9;font-size: 20px;font-weight:bold">推送详细记录</span>

        <div class="ui Inverted divider"></div>
        <table class="ui sortable  celled table" id="comtable">
            <thead>
            <tr>
                <th>推送时间</th>
                <th>网关相应时间</th>
                <th class="number">时延（秒）</th>
                <th>推送平台</th>
            </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        <script>
            $('table').tablesort();
            $('thead th.number').data('sortBy', function (th, td, tablesort) {
                return parseInt(td.text(), 10);
            });
        </script>
    </div>
</div>
</body>
</html>
<script src="/pushServer/Public/js/animate.js"></script>
<script type="text/javascript" src="/pushServer/Public/js/push_comp_info.js"></script>
<script>
    //填充2个时间输入框的默认值
    var date = new Date().DateAdd('m', -1);
    var olddate = date.Format('yyyy-MM-dd');
    var nowdate = new Date().Format('yyyy-MM-dd');
    $("#from").val(olddate);
    $("#to").val(nowdate);
</script>