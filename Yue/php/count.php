<?php
  header('content-type:text/html; charset=utf8');
  include './mysql.php';
  $index=isset($_POST['index'])?$_POST['index']:3;
  $page=isset($_POST['page'])?$_POST['page']:1;
  
    //设定每页显示的数据量
    $length =15;
    //求出分页偏移量
    $offset = ($page - 1) * $length;
    //获取总记录数
    switch($index){
      case 1:
      $sql = "select count(*) as c from list1";
      break;
      case 2:
      $sql = "select count(*) as c from list2";
      break;
      case 3:
      $sql = "select count(*) as c from list3";
      break;
      case 4:
      $sql = "select count(*) as c from list4";
      break;
      case 5:
      $sql = "select count(*) as c from list5";
      break;
      case 6:
      $sql = "select count(*) as c from list6";
      break;
      case 7:
      $sql = "select count(*) as c from list7";
      break;
      case 8:
      $sql = "select count(*) as c from list8";
      break;

    }
    $res = my_error($sql);
    $count = mysql_fetch_assoc($res);
    $counts = $count['c'];			//总记录数
    //总页数
    $pages  = ceil($counts / $length);
  
    //求出上一页和下一页对应的页码
    $prev = $page > 1 ? $page - 1 : 1;
    $next = $page < $pages ? $page + 1 : $pages;
  
    //组织SQL语句查询所有学生信息
    $sql = "select * from list1 limit {$offset},{$length}";
    switch($index){
      case 1:$sql = "select * from list1 limit {$offset},{$length}";
      break;
      case 2:
      $sql = "select * from list2 limit {$offset},{$length}";
      break;
      case 3:
      $sql = "select * from list3 limit {$offset},{$length}";
      break;
      case 4:
      $sql = "select * from list4 limit {$offset},{$length}";
      break;
      case 5:
      $sql = "select * from list5 limit {$offset},{$length}";
      break;
      case 6:
      $sql = "select * from list6 limit {$offset},{$length}";
      break;
      case 7:
      $sql = "select * from list7 limit {$offset},{$length}";
      break;
      case 8:
      $sql = "select * from list8 limit {$offset},{$length}";
      break;

    }
  
    //执行
    $res = my_error($sql);
    $res = my_error($sql);
    //取出所有数据
    $lists = array();
    while($row = mysql_fetch_assoc($res)){
      $lists[] = $row;
    }
   echo json_encode($lists);
?>