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
    public function gethotNum($time)
    {
        return $this->query("select city,sum(hotNum) as hotNum from (SELECT city,sum(hotNum) as hotNum,date FROM km_hot_poin group by city,date) a where date>='$time' group by city");
    }
}