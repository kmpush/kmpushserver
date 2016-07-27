<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 2016/7/14
 * Time: 16:14
 */
namespace Home\Model;

use Think\Model;

class PushTimeModel extends Model
{
    public function getNum($time)
    {
        return $this->where("'$time'<=date")->field('sum(from0to1) as a,sum(from1to5) as b,sum(from5to10) as c,sum(from10to30) as d,sum(from30to60) as e,sum(than60) as f,sum(noanswer) as g')->select();
    }
}