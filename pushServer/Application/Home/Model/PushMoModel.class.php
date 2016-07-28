<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 2016/7/15
 * Time: 9:21
 */
namespace Home\Model;

use Think\Model;

class PushMoModel extends Model
{
    public function getNum($time)
    {
        return $this->where("'$time'<=date")->field('flat,sum(pushnum) as num')->group('flat')->select();
    }
    public function getFlatNum ($time, $flat)
    {
        return $this->where("'$time'<= date AND flat = '$flat'")->select();
    }
}