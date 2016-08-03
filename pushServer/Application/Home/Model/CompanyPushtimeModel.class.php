<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 2016/8/3
 * Time: 16:14
 */
namespace Home\Model;

use Think\Model;

class CompanyPushtimeModel extends Model
{
    //所有商家延迟信息最大值、最小值、平均值数据
    public function getTimeDelayInfo($from, $to){
        return $this->where("'$from'<=date and '$to'>=date")->select();
    }
}