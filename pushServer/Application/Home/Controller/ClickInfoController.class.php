<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 2016/7/21
 * Time: 16:28
 */
namespace Home\Controller;

use Think\Controller;
use Home\Model\AllInfoModel;


class ClickInfoController extends Controller
{
    //点击热点图
    public function clickhot()
    {
        $a = new AllInfoModel();
        echo json_encode($a->gethotinfo(I('post.time'), I('post.city')));
    }
}