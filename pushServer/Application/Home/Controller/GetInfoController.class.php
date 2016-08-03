<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 2016/7/13
 * Time: 17:30
 */
namespace Home\Controller;

use Home\Model\DelayHotpoinModel;
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
        $from = I('post.from');
        $to = I('post.to');
        $num  = new PushMoModel();
        $data['java']         = $num->getFlatNum($from,$to, 'JAVA');
        $data['kmbackground'] = $num->getFlatNum($from,$to, 'kmbackground');
        $data['kmgate']       = $num->getFlatNum($from,$to, 'kmgate');
        $data['kmhttpapi']    = $num->getFlatNum($from,$to, 'kmhttpapi');
        $data['kmcompany']    = $num->getFlatNum($from,$to, 'kmcompany');
        $data['Mozilla']      = $num->getFlatNum($from,$to, 'Mozilla');
        $allnum = new PushNumModel();
        $data['total'] = $allnum->getNum($from,$to);
        echo json_encode($data);
    }

    //推送时延
    public function getPushTime()
    {
        $from = I('post.from');
        $to = I('post.to');
        $num = new PushTimeModel();
        echo json_encode($num->getNum($from,$to));
    }

    //推送平台
    public function getPushMo()
    {
        $from = I('post.from');
        $to = I('post.to');
        $num = new PushMoModel();
        echo json_encode($num->getNum($from,$to));
    }

    //热点图
    public function getHotPoin()
    {
        $from = I('post.from');
        $to = I('post.to');
        $num = new HotPoinModel();
        echo json_encode($num->gethotNum($from,$to));
    }

    //详细信息表
    public function getTableInfo()
    {
        $from = I('post.from');
        $to = I('post.to');
        $page = I('post.toPage');
        $num = new AllInfoModel();
        $arr = $num->getNum($from,$to,$page);
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
        $arr2['totalItems'] = $num->getCount($from,$to);
        echo json_encode($arr2);
    }
    //时延热点图
    public function getTimeHot(){
        $from = I('post.from');
        $to = I('post.to');
        $a = new DelayHotpoinModel();
        $arr = $a->getTimeNum($from,$to);
        echo json_encode($arr);
    }
}