<template>
<Page class="page" actionBarHidden="false">
    <ActionBar>
        <StackLayout orientation="horizontal">
            <!-- <Image src="~/assets/images/btn_menu.png" width="16" height="14" verticalAlignment="left" /> -->
            <Image src="~/assets/images/logo.png" width="86" height="auto" verticalAlignment="center" />
        </StackLayout>
    </ActionBar>

    <StackLayout>
        <ScrollView orientation="vertical">
            <GridLayout rows="auto, *, auto" verticalAlignment="top">
                <Image width="100%" height="450" src="~/assets/images/map2.png" row="0" col="auto" />
                <StackLayout row="1">
                    <GridLayout class="destWrap" rows="*" columns="auto, auto">
                        <Image class="iconmap" src="~/assets/images/icon_location.png" col="0" width="22" height="22" />
                        <Label class="destName" text="도착지: 유람선 선착장" col="1" />
                    </GridLayout>
                    <GridLayout rows="*" columns="auto, *, auto" backgroundColor="#FFF">
                      <Image class="driverPro" src="~/assets/images/driver.png" col="0" width="60" height="60" />
                      <StackLayout class="shuttInfo" col="1">
                        <Label class="shuName" text="SCN-004" />
                        <Label class="shuName padNo" text="셔틀 담당자: " />
                        <Label class="depTime" text="약 3분후 도착합니다." />
                      </StackLayout>
                      <Button col="2" text="취소" width="60" height="60" class="cancel" @tap="$navigateBack" />
                    </GridLayout>
                </StackLayout>
            </GridLayout>
        </ScrollView>
    </StackLayout>
</Page>
</template>

<script>
export default {

}
</script>

<style scoped>
.destWrap {
    height: 53;
    background-color: #E61773;
    color: #FFF;
    line-height: 27;
    vertical-align: top;
}

.iconmap {
  display: inline-block;
  margin-left: 30;
  vertical-align: middle;
}

.destName {
  margin-left: 12;
  line-height: 53;
  vertical-align: middle;
  font-size: 15;
}

.driverPro {
  display: inline-block;
  margin-left: 20;
}

.shuttInfo {
  height: 92;
  padding-left: 20;
  text-align: left;
  vertical-align: middle;
}

.shuName {
  color: #555;
  font-size: 14;
}

.padNo {
  padding-top: -3;
}

.depTime {
  color: #E61773;
  font-size: 12;
  line-height: 18px;
}

.cancel {
    background-color: #C4C4C4;
    color: #FFF;
    border-radius: 50;
    font-size: 15;
    font-weight: bold;
    z-index: 0;
}
</style>
