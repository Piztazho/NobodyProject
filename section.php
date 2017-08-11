<?
	include 'credentials.php';
	ini_set('allow_url_fopen',1);
	try {
		$filter = $_GET["field"];

		$url = str_replace ( ' ', '%20',$main_dir.'users/'.$user_name.'/projects/?field='.$filter.'&client_id='.$client_id);

		$ch = curl_init();
		curl_setopt ($ch, CURLOPT_URL, $url);
		curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, 5);
		curl_setopt ($ch, CURLOPT_RETURNTRANSFER, true);
		$contents = curl_exec($ch);

		if (curl_errno($ch)) {
		  echo curl_error($ch);
		  echo "\n<br />";
		  $contents = '';
		} else {
		  curl_close($ch);
		}

		if (!is_string($contents) || !strlen($contents)) {
			echo "Failed to get contents.";
			$contents = '';
		}

		echo $contents;

	} catch (Exception $e) {
    	echo json_encode(Array('error' => $e->getMessage()));
	}