<template>
  <Page class="page" actionBarHidden="true">
      <GridLayout width="100%" height="100%" rows="auto, 0, auto, *" columns="*">
          <StackLayout height="100%" row="0" col="0">
              <Label text="휴대폰 번호 인증" class="certTitle" />
              <Label text="연락 받을 수 있는 휴대폰 번호를 입력하세요. 서비스 이용에 반드시 필요합니다." class="certContent" />

              <GridLayout height="70%" rows="auto, auto" columns="auto, * auto" class="certPhone">
                  <DropDown row="0" col="0"
                    ref="dropDownList" 
                    selectedIndex="0" 
                    :items="items" 
                    v-model="selectedItem" 
                    @selectedYears="dropDownSelectedYears" 
                  ></DropDown>
                  <TextField row="0" col="1" hint="01023456789" />
                  <Button row="0" col="2" text="보내기" class="btn" />

                  <TextField row="1" col="0" colSpan="2" hint="인증 번호 입력" />
                  <Label row="1" col="2" text="02:37" />
              </GridLayout>
              <Button row="2" col="0" text="다음" class="btn" />
          </StackLayout>
      </GridLayout>
  </Page>
</template>

<script>
export default {
    data() {
    return {
      items: [
          +82
      ],

      selectedItem: 0
    }
  },
    methods: {
        dropDownSelectedYears() {
            // console.log(this.selectedItem);
            let index = this.$refs.dropDownList.nativeView.selectedIndex;
        },
    }

}
</script>

<style scoped>
.certTitle {
    color: #555;
    font-size: 18;
    font-weight: bold;
    vertical-align: middle;
    text-align: center;
    margin-top: 22
}

.certContent {
    color: #555;
    font-size: 14;
    text-align: center;
    margin-top: 37;
}

.certPhone {
    margin-top: 73;
    margin-left: 17;
    margin-right: 17;
    border-width: 1;
    border-color: #DBDBDB;
    vertical-align: middle;
    background-color: transparent;
}
</style>