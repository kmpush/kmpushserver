<?php
return array(
    //'配置项'=>'配置值'
    'db_type' => 'mysql',
    'db_user' => 'ktvme',
    'db_pwd' => 'ktvme123!@#',
    'db_host' => '192.168.84.73',
    'db_port' => '3306',
    'db_name' => 'kmpushserver',
    'DB_PREFIX' => 'km_', // 数据库表前缀

    'DB_CONFIG1' => array(
        'db_type' => 'mysql',
        'db_user' => 'ktvme',
        'db_pwd' => 'ktvme123!@#',
        'db_host' => '192.168.84.73',
        'db_port' => '3306',
        'db_name' => 'kmdbcenter',
        'DB_PREFIX' => 'km_', // 数据库表前缀
    ),
    'DB_CONFIG2' => array(
        'db_type' => 'mysql',
        'db_user' => 'ktvme',
        'db_pwd' => 'ktvme123!@#',
        'db_host' => '192.168.84.73',
        'db_port' => '3306',
        'db_name' => 'kmgate',
        'DB_PREFIX' => 'km_', // 数据库表前缀
    ),

    'TMPL_PARSE_STRING'=>array(
        '__CSS__' => '/Public/css',
        '__JS__' => '/Public/js',
        '__Home__'=>'/Home'
    )
);