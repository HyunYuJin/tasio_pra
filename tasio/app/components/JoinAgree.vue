<template>
  <Page class="page" actionBarHidden="true">
      <StackLayout orientation="vertical">
          <Label text="추가 동의가 필요합니다." class="agreeTitle" />
          
          <StackLayout class="agreeContent">
            <Label text="전체동의는 필수 및 선택정보에 대한 동의도 포함되어 있" />
            <Label text="으며, 개별적으로도 동의를 선택할 수 있습니다." />
            <Label text="선택항목에 대한 동의를 거부하는 경우에도 서비스 이용이" />
            <Label text="가능합니다." />
          </StackLayout>

          <GridLayout class="chkWrap1" rows="auto" columns="auto, *">
              <check-box class="checkBtn" fillColor='#E61773' font-size="20" row="0" col="0" :checked="isChecked" @checkedChange="isChecked = $event.value" />
              <Label class="allAgree" row="0" col="1" text="모두 확인, 동의합니다." />
          </GridLayout>

          <GridLayout class="chkWrap2" rows="auto, auto, auto" columns="auto, *">
              <check-box fillColor='#E61773' font-size="20" row="0" col="0" :checked="isChecked" @checkedChange="isChecked = $event.value" />
              <Label class="allAgree" row="0" col="1" text="(필수) 개인정보 수집 및 이용에 대한 동의" />
              <check-box fillColor='#E61773' font-size="20" row="1" col="0" :checked="isChecked" @checkedChange="isChecked = $event.value" />
              <Label class="allAgree" row="1" col="1" text="(필수) 위치기반서비스 이용약관" />
              <check-box fillColor='#E61773' font-size="20" row="2" col="0" :checked="isChecked" @checkedChange="isChecked = $event.value" />
              <Label class="allAgree" row="2" col="1" text="(필수) 위치정보 탑승위치 제공 동의" />
          </GridLayout>

          <GridLayout class="chkWrap3" rows="auto, auto" columns="auto, *">
              <check-box fillColor='#E61773' font-size="20" row="0" col="0" :checked="isChecked" @checkedChange="isChecked = $event.value" />
              <Label class="allAgree" row="0" col="1" text="(선택) 이벤트 및 마케팅 활용 동의" />
              <check-box fillColor='#E61773' font-size="20" row="1" col="0" :checked="isChecked" @checkedChange="isChecked = $event.value" />
              <Label class="allAgree" row="1" col="1" text="(선택) 이벤트 알림 수신 동의" />
          </GridLayout>

          <Button class="btn mar" text="다음" @tap="goToJoin" />
      </StackLayout>
  </Page>
</template>

<script>
import Join from './Join';

export default {
    methods: {
        goToJoin() {
            this.$navigateTo(Join)
        }
    },

    components: {
        Join
    }

}
</script>

<style scoped>
.agreeTitle {
    font-size: 18;
    font-weight: bold;
    text-align: center;
    color: #555555;
    margin-top: 22;
}

.agreeContent {
    margin-top: 37;
    margin-bottom: 37;
    margin-left: 30;
    font-size: 13;
    font-weight: normal;
    color: #555555;
}

.chkWrap1 {
    width: auto;
    height: 53;
    background-color: #FFFFFF;
    margin-left: 17;
    margin-right: 17;
    border-width: 1;
    border-color: #DBDBDB;
    line-height: 53;
}

.chkWrap2 {
    width: auto;
    height: 131;
    background-color: #FFFFFF;
    margin-left: 17;
    margin-right: 17;
    border-width: 1;
    border-color: #DBDBDB;
    margin-top: 10;
}

.chkWrap3 {
    width: auto;
    height: 94;
    background-color: #FFFFFF;
    margin-left: 17;
    margin-right: 17;
    border-width: 1;
    border-color: #DBDBDB;
    border-top-width: 0;
    margin-bottom: 90;
}

.checkBtn {
    line-height: 53;
}

.allAgree {
    font-size: 15;
    vertical-align: middle;
    color: #555555;
    padding-left: 4;
}
</style>