<?php
// 链接书库
$link=mysql_connect('localhost:3306','root','666');
//判断连接结果
if(!$link){
    //连接失败
    echo '数据库连接失败!<br/>';
    echo '错误编码是:' . mysql_errno(). '<br/>';
    //mysql获取到的错误信息默认是GBK编码
    echo '错误信息是:' . iconv('GBK','UTF-8',mysql_error()) . '<br/>';

    //终止脚本
    exit;
}

function my_error($sql){
    //执行sql语句
    $res = mysql_query($sql);

    //判断结果
    if(!$res){
        echo 'SQL语句有语法错误!<br/>';
        echo '错误编码是:' . mysql_errno(). '<br/>';
        //mysql获取到的错误信息默认是GBK编码
        echo '错误信息是:' . iconv('GBK','UTF-8',mysql_error()) . '<br/>';

        //终止脚本
        exit;
    }

    //返回执行正确的结果
    return $res;
}

//操作数据库: 设置字符集,选择数据库
$sql = "set names utf8";
my_error($sql);

//选择数据库
$sql = "use tianya";
my_error($sql);
?>