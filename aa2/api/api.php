<?php
header("Content-Type:application/json");
function response($order_id,$amount,$response_code,$response_desc){
$response['order_id'] = $order_id;
$response['adress'] = $amount;
$response['response_code'] = $response_code;
$response['response_desc'] = $response_desc;

$json_response = json_encode($response);
echo $json_response;
}
if (isset($_GET['getall']) ) {
	$con = mysqli_connect("aa2","root","","jai");


$order_id = $_GET['getall'];
$result = mysqli_query($con, "SELECT * FROM `haty` WHERE id=$order_id ");
if(mysqli_num_rows($result)>0){
$row = mysqli_fetch_array($result);
$id = $row['id'];
$lat = $row['lat'];
$lng = $row['lng'];
$adr = $row['adress'];
$pc1 = $row['pic1'];
$pc2 = $row['pic2'];
$pc3 = $row['pic3'];

$kv = $row['kvadr'];

$cena = $row['cena'];
$kom = $row['komnat'];
response2($id, $lat, $lng,$adr,$pc1,$pc2,$pc3,$kv,$cena,$kom);
}else{
response2(NULL, NULL, 200,"No Record Found");
}
}else{
response2(NULL, NULL, 400,"Invalid Request");
}
function response2($a,$b,$c,$adr,$p1,$p2,$p3,$kv,$cena,$kom){
	$response['order_id'] = $a;
$response['lat'] = $b;
$response['lng'] = $c;
$response['adress'] = $adr;
$response['pic1'] = $p1;
$response['pic2'] = $p2;
$response['pic3'] = $p3;
$response['kvadr'] = $kv;


$response['cena'] = $cena;
$response['komnat'] = $kom;

$json_response = json_encode($response);
echo $json_response;
}
?>