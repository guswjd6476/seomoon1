


//914acb3c822fd52dca46391c5ec5623a
Kakao.init('914acb3c822fd52dca46391c5ec5623a');
Kakao.isInitialized();
function kakaoLogin(){
    Kakao.Auth.login({
        success:function(response){
            Kakao.API.request({
                url:'/v2/user/me',
                success:function(response){
                    console.log(response);
                    document.getElementById('userbox').style.display='block';
                    document.getElementById('user').innerText = 
                        response.kakao_account.profile.nickname;
                    document.getElementById('loginbox').style.display='none';
                    document.getElementById('join').style.display='none';
                    document.getElementById('logout').style.display='block';
                    alert(response.kakao_account.profile.nickname +'님 로그인 되었습니다.')
                }
            })
        }
    })
}
function kakaoLogout(){
    if (Kakao.Auth.getAccessToken()) {
                Kakao.API.request({
                    url:'/v1/user/unlink',
                    success:function(response){
                        console.log(response);
                        document.getElementById('userbox').style.display='none';
                        document.getElementById('loginbox').style.display='block';
                        document.getElementById('logout').style.display='none';
                        document.getElementById('join').style.display='block';
                        alert(response.kakao_account.profile.nickname +'님 로그아웃 되었습니다.')
                    }
                })
        Kakao.Auth.setAccessToken(undefinded);
      }
}
