<template>
<Page class="page" actionBarHidden="true">
    <GridLayout backgroundColor="#E5E5E5" width="100%" height="100%" rows="auto, 0, auto, *" columns="*">
        <StackLayout height="100%" row="0" col="0">
            <Label text="휴대폰 번호 인증" class="certTitle" />
            <Label text="연락 받을 수 있는 휴대폰 번호를 입력하세요. 서비스 이용에 반드시 필요합니다." class="certContent" />
            <StackLayout height="60%">
                <GridLayout height="53" rows="auto" columns="auto, *, auto" class="certPhone">
                    <DropDown class="drop" width="25%" height="100%" row="0" col="0" ref="dropDownList" selectedIndex="0" :items="items" v-model="selectedItem" @selectedYears="dropDownSelectedYears"></DropDown>
                    <TextField width="50%" height="100%" row="0" col="1" hint="01023456789" />
                    <Button width="25%" height="36" row="0" col="2" text="보내기" class="btn" />
                </GridLayout>

                <GridLayout height="53" rows="auto" columns="auto, * auto" class="certPhone">
                    <TextField class="inputPhone" row="1" col="0" colSpan="2" hint="인증 번호 입력" />
                    <Label class="inputTimer" row="1" col="2" text="02:37" />
                </GridLayout>
            </StackLayout>

            <Button @tap="goToLogin" row="2" col="0" text="다음" class="btn" />

        </StackLayout>
    </GridLayout>
</Page>
</template>

<script>
import Login from './Login'

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
    margin-bottom: 73;
}

.certPhone {
    /* margin-top: 73; */
    margin-left: 17;
    margin-right: 17;
    border-width: 1;
    border-color: #DBDBDB;
    vertical-align: middle;
    background-color: #FFF;
}

.drop {
    height: 100%;
    text-align: center;
    vertical-align: middle;
    border-right-width: 1;
    border-color: #DBDBDB;
}

.inputPhone {
    border-width: 0;
}

.inputTimer {
    /* vertical-align: middle; */
    line-height: 53;
    color: #E61773;
    font-size: 15;
    padding-right: 20;
    font-weight: bold;
}
</style>
