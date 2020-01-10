<template>
  <Page class="page" actionBarHidden="true">
      <GridLayout rows="68, 50, *" columns="*, *">
        <Label row="0" col="0" colSpan="2" text="회원가입" class="joinTitle" />
        <Label row="1" col="0" colSpan="2" text="회원가입을 위해 본인인증이 필요합니다." class="authenticate" />
        <TabView tabTextColor="#9D9D9D" tabBackgroundColor="#F8F8F8" selectedTabTextColor="#555" row="2" col="0" colSpan="2" :selectedIndex="selectedIndex" @selectedIndexChange="indexChange">
          <TabViewItem title="휴대폰 인증">
            <GridLayout rows="*, *, *, *, *, *, *, *, *" columns="*, *, *, *">
              <Label class="form_name" row="0" col="0" text="국적" />
              <check-box boxType="circle" name="gender" value="gender" fillColor='#E61773' text="내국인" font-size="20" row="0" col="1" :checked="isChecked" @checkedChange="isChecked = $event.value" />
              <check-box boxType="circle" name="gender" value="gender" fillColor='#E61773' text="외국인" font-size="20" row="0" col="2" :checked="isChecked" @checkedChange="isChecked = $event.value" />

              <Label class="form_name" row="1" col="0" text="이름" />
              <TextField class="field" row="1" col="1" colSpan="3" hint="이름" />

              <Label class="form_name" row="2" col="0" text="성별" />
              <check-box boxType="circle" name="gender" value="gender" fillColor='#E61773' text="남성" font-size="20" row="2" col="1" :checked="isChecked" @checkedChange="isChecked = $event.value" />
              <check-box boxType="circle" name="gender" value="gender" fillColor='#E61773' text="여성" font-size="20" row="2" col="2" :checked="isChecked" @checkedChange="isChecked = $event.value" />

              <Label class="form_name" row="3" col="0" text="생년월일" />
              <DropDown row="3" col="1"
                  ref="dropDownList" 
                  selectedIndex="0" 
                  :items="items" 
                  v-model="selectedItem" 
                  @selectedYears="dropDownSelectedYears" 
                  class="field">
              </DropDown>
              <DropDown row="3" col="2"
                  ref="dropDownList" 
                  selectedIndex="0" 
                  :items="items" 
                  v-model="selectedItem" 
                  @selectedYears="dropDownSelectedYears" 
                  class="field">
              </DropDown>
              <DropDown row="3" col="3"
                  ref="dropDownList" 
                  selectedIndex="0" 
                  :items="items" 
                  v-model="selectedItem" 
                  @selectedYears="dropDownSelectedYears" 
                  class="field">
              </DropDown>

              <Label class="form_name" row="4" col="0" text="휴대폰 번호" />
              <DropDown row="4" col="1" colSpan="3"
                  ref="dropDownList" 
                  selectedIndex="0" 
                  :items="items" 
                  v-model="selectedItem" 
                  @selectedYears="dropDownSelectedYears" 
                  class="field">
              </DropDown>

              <TextField class="field" row="5" col="1" text=" " />
              <TextField class="field" row="5" col="2" text=" " />
              <TextField class="field" row="5" col="3" text=" " />

              <Button class="CertificationNum" row="6" col="1" colSpan="3" text="인증번호받기" />

              <Label class="form_name" row="7" col="0" text="인증번호" />
              <TextField class="field" row="7" col="1" colSpan="3" hint="인증번호 3분 이내 입력" />

               <Button row="8" col="0" colSpan="4" text="확인" @tap="goToLogin" class="btn" />
            </GridLayout>

           
          </TabViewItem>
          <TabViewItem title="아이핀 인증">
            <Label text="dsfasdf" />
          </TabViewItem>
        </TabView>
      </GridLayout>
  </Page>
</template>

<script>
import Login from './Login'

export default {
  data() {
    return {
      items: [
          2020,
          2019,
          2018, 
          2017,
          2016
      ],

      selectedItem: 0
    }
  },

  methods: {
    indexChange(args) {
      let newIndex = args.value
      console.log(newIndex)
    },

    dropDownSelectedYears() {
        // console.log(this.selectedItem);
        let index = this.$refs.dropDownList.nativeView.selectedIndex;
    },

    goToLogin() {
      this.$navigateTo(Login)
    }
  },

  components: {
    Login
  }

}
</script>

<style scoped>
.joinTitle {
  width: 100%;
  height: 68;
  background-color: #FFF;
  color: #555555;
  font-size: 18;
  font-weight: bold;
  text-align: center;
  padding-top: 22;
}

.authenticate {
  width: 100%;
  height: 50;
  background-color: #EEEEEE;
  color: #888888;
  font-size: 14;
  font-weight: normal;
  line-height: 50;
  text-align: center;
  padding-top: 16;
}

.form_name {
  color: #555555;
  font-weight: 500;
  font-size: 14;
  padding-left: 20;
  vertical-align: middle; 
}

.CertificationNum {
  height: 40;
  background-color: #C7C7C7;
  color: #FFF;
  font-size: 14;
  font-weight: bold;
  text-align: center;
}

.field {
  height: 40;
  border-width: 1;
  border-color: #DBDBDB;
  border-radius: 3;
}
</style>