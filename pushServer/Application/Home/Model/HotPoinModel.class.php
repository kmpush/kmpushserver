<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 2016/7/15
 * Time: 10:04
 */
namespace Home\Model;

use Think\Model;

class HotPoinModel extends Model
{
    public function gethotNum($from,$to)
    {
        return $this->where("date>='$from' and date<='$to'")->field("city,sum(hotNum) as hotNum")->group('city')->select();
    }
}