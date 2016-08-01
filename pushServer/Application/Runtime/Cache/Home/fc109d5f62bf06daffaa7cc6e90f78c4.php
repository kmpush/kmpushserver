<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>商家详细信息</title>
    <link rel="stylesheet" href="/pushServer/Public/css/table.css">
    <style>
        .main {
            position: absolute;
            left: 10%;
            top: 25px;
            width: 80%;
            height: auto;
        }
    </style>
</head>
<body>
<div class="main">
    <div>
        <table class="ui celled striped table" style="width:100%">
            <thead>
            <tr>
                <th colspan="4">商家信息</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td class="collapsing" style="width:10%">商家名字</td>
                <td style="width:40%;text-align: left;"> <?php echo ($companyname); ?></td>
                <td style="width:10%"> 公司编码</td>
                <td style="width:40%;text-align: left;"> <?php echo ($companycode); ?></td>
            </tr>
            <tr>
                <td> 公司ID</td>
                <td style="text-align: left;"> <?php echo ($companyid); ?></td>
                <td> 用户注册ID</td>
                <td style="text-align: left;"> <?php echo ($registeruserid); ?></td>
            </tr>
            <tr>
                <td class="collapsing"> 法人</td>
                <td style="text-align: left;"> <?php echo ($relationname); ?></td>
                <td> 法人电话</td>
                <td style="text-align: left;"> <?php echo ($relationphone); ?></td>
            </tr>
            <tr>
                <td> 区域码</td>
                <td style="text-align: left;"> <?php echo ($regioncode); ?></td>
                <td> 法人QQ</td>
                <td style="text-align: left;"> <?php echo ($relationqq); ?></td>
            </tr>
            <tr>
                <td> 公司地址</td>
                <td colspan="3" style="text-align: left;"> <?php echo ($companyaddress); ?></td>
            </tr>
            <tr>
                <td> 公司印象</td>
                <td colspan="3" style="text-align: left;">
                    <?php echo ($companymemo); ?>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
</body>
</html>