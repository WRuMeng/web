<?php
	//获取json文件
	$arr =file_get_contents('../info/shop.json');
	//转化为字符串，返回浏览器
	echo $arr;
?>