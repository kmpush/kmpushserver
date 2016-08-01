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
    public function getNum($time, $page)
    {
        return $this->where("'$time'<=pushTime")->page($page, 10)->select();
    }

    //点击热点图触发的结果
    public function gethotinfo($time, $city, $page)
    {
        return $this->where("'$time'<=pushTime AND city='$city'")->page($page, 10)->select();
    }

    //总条数
    public function getCount($time)
    {
        return $this->where("'$time'<=pushTime")->count();
    }

    //城市详细数据总条数
    public function getCityCount($time, $city)
    {
        return $this->where("'$time'<=pushTime AND city='$city'")->count();
    }
}