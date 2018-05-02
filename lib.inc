<?php
/**
* html特殊文字の変換
*/
function e( $val ){
	return htmlspecialchars( $val, ENT_QUOTES, 'UTF-8');
}

/**
* e()をそのままecho
*/
function e_c($val){
	echo e($val);
}

/**
* var_dumpを見やすく出力
*/
function dump($v){
	echo '<pre>';
	var_dump($v);
	echo '</pre>';
}


/**
* タグで囲んで出力
*/
function tag_wrap($t,$v,$c = null){
	$c = isset($c) ? ' class="'.$c.'"':'';
}
?>
