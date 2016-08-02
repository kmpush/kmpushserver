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
        $from = I('post.from');
        $to = I('post.to');
        $page = I('post.toPage');
        $city = I('post.city');
        $num = new AllInfoModel();
        $arr = $num->gethotinfo($from,$to,$city,$page);
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
        $arr2['totalItems'] = $num->getCityCount($from,$to,$city);
        echo json_encode($arr2);
    }
}