<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 2016/7/13
 * Time: 17:09
 */
namespace Home\Model;

use Think\Model;

class PushNumModel extends Model
{
    public function getNum($time)
    {
        return $this->where("'$time'<=date")->select();
    }
}