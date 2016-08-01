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

class CompanyInfoController extends Controller
{
    //商家详细信息
    public function getInfo()
    {
        $a = new TblMqlogModel();
        $arr = $a->getInfo(I('get.companyid'));
        print_r($arr);
//        $this->assign($arr);
//        $this->display('index:company_info');
    }
}