<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 2016/8/1
 * Time: 9:54
 */
namespace Home\Model;

use Think\Model;

class TblMqlogModel extends Model
{
    protected $connection = 'DB_CONFIG2';
    public function getInfo($companyCode)
    {
        return $this->query("SELECT companycode,convert(CreateTime,date) as date,max(TIMESTAMPDIFF(SECOND,CreateTime,ReceiveTime)) as max,min(TIMESTAMPDIFF(SECOND,CreateTime,ReceiveTime)) as min,avg(TIMESTAMPDIFF(SECOND,CreateTime,ReceiveTime)) as avg FROM kmgate.km_tbl_mqlog where companycode='$companyCode' group by convert(CreateTime,date);");
    }
}