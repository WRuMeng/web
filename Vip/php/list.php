<?php
	header('content-type:text/html; charset=utf-8');
	//获取json文件
	$arr =file_get_contents('../info/list.json');
	//转化为字符串，返回浏览器
	echo $arr;
?>