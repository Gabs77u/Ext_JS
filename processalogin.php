<?php
  $loginuser = $_REQUEST["user"];
  $password = MD5($_REQUEST["pass"];
  
  $conexao = mysql_connect("localhost","root","vertrigo");
  mysql_select_db("autenticacao");
  $sql = "SELECT*FROM usuarios WHERE login='$loginuser' AND senha='$password'";
  $resultado = mysql_query ($sql);
  
  $linha = mysql_num_rows($resultado):
  
  echo ($linha>0)?"{sucess:true}";"{sucess:false}";
  
  mysql_close($conexao);
  
?>