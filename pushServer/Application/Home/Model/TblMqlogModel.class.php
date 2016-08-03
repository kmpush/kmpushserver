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
    //单独商家折线图
    public function getInfo($companyCode)
    {
        return $this->query("SELECT companycode,convert(CreateTime,date) as date,max(TIMESTAMPDIFF(SECOND,CreateTime,ReceiveTime)) as max,min(TIMESTAMPDIFF(SECOND,CreateTime,ReceiveTime)) as min,avg(TIMESTAMPDIFF(SECOND,CreateTime,ReceiveTime)) as avg FROM kmgate.km_tbl_mqlog where companycode='$companyCode' group by convert(CreateTime,date);");
    }
    //单独商家超过平均值OR最大值OR最小值推送详情
    public function getMoreInfo($companyCode,$time,$num,$page){
        return $this->where("companycode='$companyCode' and convert(CreateTime,date)='$time' and timestampdiff(second,CreateTime,ReceiveTime)>='$num'")->field("CreateTime,ReceiveTime,timestampdiff(second,CreateTime,ReceiveTime) as date,SourceSystem")->page($page,10)->select();
    }
    public function getCount($companyCode,$time,$num){
        return $this->where("companycode='$companyCode' and convert(CreateTime,date)='$time' and timestampdiff(second,CreateTime,ReceiveTime)>='$num'")->count();
    }
}