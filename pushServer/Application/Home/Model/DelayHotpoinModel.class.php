<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 2016/8/3
 * Time: 14:41
 */
namespace Home\Model;

use Think\Model;

class DelayHotpoinModel extends Model
{
    public function getTimeNum($from,$to)
    {
        return $this->where("'$from'<=date and '$to'>=date")->field("city,sum(time) as time")->group('city')->select();
    }
}