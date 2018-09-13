<?php
$data = json_decode(file_get_contents('php://input'),true);
$content = $data["content"];
$randomNum = mt_rand(1, 26); // 랜덤
if($content == "랜덤"){
echo <<< EOD
    {
        "message": {
            "text": "$randomNum"
        },
        "keyboard": { 
            "type": "buttons",
            "buttons": [
                "랜덤",
                "자리 배치"
            ]
        }
    }
EOD;
}

elseif(strpos($content, "마이페이지") !== false){
echo <<< EOD
    {
        "message": {
            "text": "처음 오신 것을 환영합니다!"
        },
        "keyboard": { 
            "type": "buttons",
            "buttons": [
                "랜덤",
                "자리 배치"
            ]
        }
    }
EOD;
}

else {
echo <<< EOD
    {
        "message": {
            "text": "개발중인 기능이거나 잘못된 입력입니다ㅠㅠ"
        }, 
        "keyboard": { 
            "type": "buttons",
            "buttons": [
                "랜덤",
                "자리 배치"
            ]
        }
    }
EOD;
}
?>