<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 2016/7/13
 * Time: 17:30
 */
namespace Home\Controller;

use Think\Controller;
use Home\Model\PushNumModel;
use Home\Model\PushTimeModel;
use Home\Model\PushMoModel;
use Home\Model\HotPoinModel;
use Home\Model\AllInfoModel;


class GetInfoController extends Controller
{
    //推送量
    public function getPushNum()
    {
        $time = I('post.text');
        $num = new PushNumModel();
        echo json_encode($num->getNum($time));
    }

    //推送时延
    public function getPushTime()
    {
        $time = I('post.text');
        $num = new PushTimeModel();
        echo json_encode($num->getNum($time));
    }

    //推送平台
    public function getPushMo()
    {
        $time = I('post.text');
        $num = new PushMoModel();
        echo json_encode($num->getNum($time));
    }

    //热点图
    public function getHotPoin()
    {
        $time = I('post.text');
        $num = new HotPoinModel();
        echo json_encode($num->gethotNum($time));
    }

    //详细信息表
    public function getTableInfo()
    {
        $time = I('post.text');
        $num = new AllInfoModel();
        echo json_encode($num->getNum($time));
    }
}