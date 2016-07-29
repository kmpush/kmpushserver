<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 2016/7/29
 * Time: 11:14
 */
namespace Home\Model;

use Think\Model;

class TblCompanyModel extends Model
{
    protected $connection = 'DB_CONFIG1';
    public function getInfo($companyCode)
    {
        return $this->where("CompanyCode='$companyCode'")->select();
    }
}