<?php
  header('content-type:text/html;charset=utf8');
  include_once './mysql.php';
  // 获取数据
  $index=$_POST['index'];
  $lists=array();
  switch($index){
      case 1:
      $sql='select * from list1';
      break;
      case 2:
      $sql='select * from list2';
      break;
      case 3:
      $sql='select * from list4';
      break;
      case 4:
      $sql='select * from list4';
      break;
      case 5:
      $sql='select * from list5';
      break;
      case 6:
      $sql='select * from list6';
      break;
      case 7:
      $sql='select * from list7';
      break;
      case 8:
      $sql='select * from list8';
      break;
      default:
      $sql='select * from list3';
      break;
  }
  $res=my_error($sql);
  while($row=mysql_fetch_assoc($res)){
    $lists[]=$row;
  }
  echo json_encode($lists);
?>