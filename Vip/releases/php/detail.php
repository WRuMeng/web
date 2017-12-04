<?php
	$result =file_get_contents('../info/detail.json');
	//转化为对象类型
	$s=json_decode($result);
	//转化为字符串格式
	echo  json_encode($s);
?>