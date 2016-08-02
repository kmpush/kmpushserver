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
    public function getNum($from,$to, $page)
    {
        return $this->where("'$from'<=pushTime and '$to'>=pushTime")->page($page, 10)->select();
    }

    //点击热点图触发的结果
    public function gethotinfo($from,$to, $city, $page)
    {
        return $this->where("'$from'<=pushTime AND '$to'>=pushTime AND city='$city'")->page($page, 10)->select();
    }

    //总条数
    public function getCount($from,$to)
    {
        return $this->where("'$from'<=pushTime and '$to'>=pushTime")->count();
    }

    //城市详细数据总条数
    public function getCityCount($from,$to, $city)
    {
        return $this->where("'$from'<=pushTime AND '$to'>=pushTime AND city='$city'")->count();
    }
}