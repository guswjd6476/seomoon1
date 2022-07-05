Kakao.init('914acb3c822fd52dca46391c5ec5623a');
Kakao.isInitialized();
function kakaoLogin(){
    Kakao.Auth.login({
        success:function(response){
            Kakao.Api.request({
                url:'/vs/user/me',
                success:function(response){
                    console.log(response);
                    // document.getElementById('user').innerText = 
                    //     response.kakao_account.profile.nickname;
                }
            })
        }
    })
}
function kakaoLogout(){
    
}