<template>
  <Page class="page" actionBarHidden="true">
      <StackLayout orientation="vertical">
          <Image src="~/assets/images/logo.png" class="loginLogo" />
          <Label text="안녕하세요 타시오 입니다." class="loginIntro" />
          <TextField hint="아이디" class="textField" />
          <TextField hint="비밀번호" class="textField between" />
          <Button text="로그인" class="btn loginBtn" @tap="goToHome" />
          <check-box text="자동 로그인" class="saveLogin" :checked="isChecked" @checkedChange="isChecked = $event.value" />
          
          <StackLayout orientation="horizontal" class="loginHelp">
              <Label class="helpLabel" text="아이디찾기" />
              <Label class="helpLabel" text="비밀번호찾기" />
              <Label class="helpLabel" text="회원가입" />
          </StackLayout>
      </StackLayout>
  </Page>
</template>

<script>
import Home from './Home'

export default {
    methods: {
        goToHome() {
            this.$navigateTo(Home)
        }
    },

    components: {
        Home
    }

}
</script>

<style scoped>
.loginLogo {
    width: 117.44;
    height: 32.61;
    margin-top: 140;
}

.loginIntro {
    color: #555;
    font-size: 18;
    vertical-align: top;
    text-align: center;
    font-weight: bold;
    margin-top: 15.39;
}

.textField {
    border-width: 1;
    border-color: #DBDBDB;
    border-radius: 3; 
    width: auto;
    height: 53;
    padding-left: 20;
    font-size: 15;
    color: #C6C6C6;
    margin-top: 104;
}

.between {
    margin-top: 10;
}

.loginBtn {
    margin-top: 10;
}

.saveLogin {
    color: #555555;
    font-size: 14;
    margin-left: 10;
    margin-top: 11;
}

.loginHelp {
    margin-top: 45;
    border-top-width: 1;
    border-color: #DBDBDB;
    width: auto;
    margin-left: 10;
    margin-right: 10; 
}

.helpLabel {
    width: 33.3%;
    text-align: center;
    margin-top: 17;
    color: #555555;
    font-size: 12;
}
</style>