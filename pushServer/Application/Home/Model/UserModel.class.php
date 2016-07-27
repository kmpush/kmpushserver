<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 2016/7/27
 * Time: 16:41
 */
namespace Home\Model;

use Think\Model;

class UserModel extends Model
{
    public function getNum($id,$psw)
    {
        return $this->where("Username='$id' and PassWord='$psw'")->find();
    }
}