


document.getElementById('logout').style.display='none';


Kakao.init('914acb3c822fd52dca46391c5ec5623a');
Kakao.isInitialized();
function kakaoLogin(){
    Kakao.Auth.login({
        success:function(response){
            Kakao.Api.request({
                url:'/v2/user/me',
                success:function(response){
                    console.log(response);
                    document.getElementById('user').innerText = 
                        response.kakao_account.profile.nickname;
                    document.getElementById('login').style.display='none';
                    alert(response.kakao_account.profile.nickname +'님 로그인 되었습니다.')
                }
            })
        }
    })
}
function kakaoLogout(){
    if (!Kakao.Auth.getAccessToken()) {
        Kakao.Auth.login({
            success:function(response){
                Kakao.Api.request({
                    url:'/v1/user/unlink',
                    success:function(response){
                        console.log(response);
                        document.getElementById('user').style.display='none';
                        document.getElementById('login').style.display='block';
                        document.getElementById('logout').style.display='none';
                        alert(response.kakao_account.profile.nickname +'님 로그아웃 되었습니다.')
                    }
                })
        Kakao.Auth.setAccessToken(undefinded)
      }
}
)}
}