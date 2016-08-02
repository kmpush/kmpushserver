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
    public function getNum($from,$to)
    {
        return $this->where("'$from'<=date and '$to'>=date")->select();
    }

}