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
    public function getNum($from,$to)
    {
        return $this->where("'$from'<= date AND '$to'>= date")->field('flat,sum(pushnum) as num')->group('flat')->select();
    }
    public function getFlatNum ($from,$to, $flat)
    {
        return $this->where("'$from'<= date AND '$to'>= date AND flat = '$flat'")->select();
    }
}