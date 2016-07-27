<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 2016/7/15
 * Time: 14:45
 */

namespace Home\Model;

use Think\Model;

class AllInfoModel extends Model
{
    //全部信息
    public function getNum($time)
    {
        return $this->where("'$time'<=pushTime")->limit(100)->select();
    }
    //点击热点图触发的结果
    public function gethotinfo($time,$city)
    {
        return $this->where("'$time'<=pushTime AND city='$city'")->limit(100)->select();
    }
}