<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 2016/7/29
 * Time: 11:21
 */
namespace Home\Controller;

use Think\Controller;
use Home\Model\TblMqlogModel;
use Home\Model\CompanyPushtimeModel;

class CompanyInfoController extends Controller
{
    //商家推送时延信息
    public function getInfo()
    {
        $a = new TblMqlogModel();
        $data = $a->getInfo(I('get.companyid'));
        $this->assign('data', json_encode($data));
        $this->assign('companyid', I('get.companyid'));
        $this->display('Index/comp_info');
    }

    //点击查询返回指定商家和时间段
    public function getTimeInfo(){
        $a = new TblMqlogModel();
        $data = $a->getTimeInfo(I('post.companyid'),I('post.from'),I('post.to'));
        echo json_encode($data);
    }

    //商家推送详细信息
    public function getMoreInfo()
    {
        $id = I('post.companyCode');
        $time = I('post.time');
        $n = I('post.num');
        $page = I('post.toPage');
        $num = new TblMqlogModel();
        $arr = $num->getMoreInfo($id,$time,$n,$page);
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
        $arr2['totalItems'] = $num->getCount($id,$time,$n);
        echo json_encode($arr2);
    }

    //时延信息折线图
    public function getDelayInfo()
    {
        $from = I('post.from');
        $to = I('post.to');
        $delay = new CompanyPushtimeModel();
        if($msg = $delay->getTimeDelayInfo($from, $to)) {
            echo json_encode($msg);
        }
        else{
            $this->error("can't get data");
        }
    }
}