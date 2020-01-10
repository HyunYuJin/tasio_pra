<template>
  <Page class="page" actionBarHidden="true">
      <GridLayout rows="60, 40, auto, *" columns="*">
        <Label class="certTitle" row="0" text="휴대폰 번호 인증" />
        <Label class="certContent" row="1" text="연락 받을 수 있는 휴대폰 번호를 입력하세요. 서비스 이용에 반드시 필요합니다." />
        <GridLayout class="certPhone" row="2" rows="53" columns="*, *, *" >
            <DropDown width="20%" col="0"
                ref="dropDownList" 
                selectedIndex="0" 
                :items="items" 
                v-model="selectedItem" 
                @selectedYears="dropDownSelectedYears" 
            >
            </DropDown>
            <TextField width="50%" col="1" text="01023456789" />
            <Button class="btn" width="30%" col="2" text="보내기" />
        </GridLayout>
        <Button row="3" text="다음" class="btn" />
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
    padding-top: 22;
}

.certContent {
    color: #555;
    font-size: 14;
    text-align: center;
    padding-top: 37;
}

.certPhone {
    padding-top: 73;
    border-width: 1;
    border-color: #DBDBDB;
    vertical-align: middle;
    background-color: transparent;
}
</style>