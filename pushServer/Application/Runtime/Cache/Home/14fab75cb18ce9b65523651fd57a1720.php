<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>商家详细信息</title>
    <link rel="stylesheet" href="/pushServer/Public/css/table.css">
    <style>
        .main{
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
            <tr><th colspan="4">商家信息</th>
            </tr></thead>
            <tbody>
            <tr>
                <td class="collapsing" style="width:10%">商家名字 </td>
                <td style="width:40%"> <?php echo ($CompanyName); ?> </td>
                <td style="width:10%"> 公司编码 </td>
                <td style="width:40%"> <?php echo ($CompanyCode); ?> </td>
            </tr>
            <tr>
                <td> 公司ID </td>
                <td> <?php echo ($CompanyID); ?> </td>
                <td> 用户注册ID </td>
                <td> <?php echo ($RegisterUserID); ?> </td>
            </tr>
            <tr>
                <td class="collapsing"> 法人 </td>
                <td> <?php echo ($RelationName); ?> </td>
                <td> 法人电话 </td>
                <td> <?php echo ($RelationPhone); ?> </td>
            </tr>
            <tr>
                <td> 区域码 </td>
                <td> <?php echo ($RegionCode); ?> </td>
                <td> 法人QQ </td>
                <td> <?php echo ($RelationQQ); ?> </td>
            </tr>
            <tr>
                <td> 公司地址 </td>
                <td colspan="3"> <?php echo ($CompanyAddress); ?> </td>
            </tr>
            <tr>
                <td> 公司印象 </td>
                <td colspan="3">
                    <?php echo ($CompanyMemo); ?>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
</body>
</html>