<?php
namespace Home\Controller;

use Think\Controller;
use Home\Model\UserModel;

class IndexController extends Controller
{
    public function index()
    {
        $this->display('login');
    }

    public function checkid()
    {
        $username = I('post.id');
        $password = md5(I('post.psw'));
        $a = new UserModel();
        if ($a->getNum($username, $password) == '') {
            echo 0;
        } else {
            echo 1;
        }
    }

    public function info()
    {
        $this->display('index');
    }

    public function time_delay_info()
    {
        $this->display('time_delay_info');
    }

    public function company_info()
    {
        $this->display('comp_info');
    }
}