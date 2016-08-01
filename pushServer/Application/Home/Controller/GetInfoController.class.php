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
    //获得各平台及总推送量
    public function getALLPushNum()
    {
        $data = array();
        $time = I('post.text');
        $num  = new PushMoModel();
        $data['java']         = $num->getFlatNum($time, 'JAVA');
        $data['kmbackground'] = $num->getFlatNum($time, 'kmbackground');
        $data['kmgate']       = $num->getFlatNum($time, 'kmgate');
        $data['kmhttpapi']    = $num->getFlatNum($time, 'kmhttpapi');
        $data['kmcompany']    = $num->getFlatNum($time, 'kmcompany');
        $data['Mozilla']      = $num->getFlatNum($time, 'Mozilla');
        $allnum = new PushNumModel();
        $data['total'] = $allnum->getNum($time);
        echo json_encode($data);
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
        $page = I('post.toPage');
        $num = new AllInfoModel();
        $arr = $num->getNum($time,$page);
        $arr3 = array();
        $arr2 = array();
        foreach ($arr as $item) {
            if(is_array($item)) {
                $arr1 = array();
                foreach ($item as $a) {
                    array_push($arr1, $a);
                }
                array_push($arr3, $arr1);
            }

        }
        $arr2['data'] = $arr3;
        $arr2['totalItems'] = $num->getCount($time);
        echo json_encode($arr2);
    }
}