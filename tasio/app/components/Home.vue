<template>
<StackLayout id="home">
    <GridLayout rows="auto, *" verticalAlignment="top">
        <Image row="0" src="~/assets/images/map.png" />

        <!-- Make overflow scroll-Y -->
        <StackLayout row="1" orientation="vertical">
            <!-- <ScrollView orientation="vertical"> -->
                <StackLayout orientation="vertical">
                    <DropDown ref="dropDownList" selectedIndex="0" :items="items" v-model="selectedItem" @selectedIndexChanged="dropDownSelectedIndexChanged" class="dropdown">
                        <Label text="출발지: " />
                    </DropDown>
                    <DropDown ref="dropDownList" selectedIndex="0" :items="items" v-model="selectedItem" @selectedIndexChanged="dropDownSelectedIndexChanged" class="dropdown">
                    </DropDown>
                    <Label text="약 1.5km (약 20분 소요)" row="3" col="0" class="callTime" />
                    <Button text="호출하기" row="3" col="0" @tap="callShuttle" class="btn callBtn" />
                </StackLayout>
            <!-- </ScrollView> -->
        </StackLayout>
    </GridLayout>
</StackLayout>
</template>

<script>
import CallShuttle from './CallShuttle';

export default {
    data() {
        return {
            itemList: 10,
            items: [
                '자율주행 테마파크',
                '고군산 탐방센터',
                '선착장행 주차장',
                '유람선 선착장',
                '테마파크행 주차장'
            ],

            selectedItem: 0
        }
    },

    components: {
        CallShuttle
    },

    methods: {
        dropDownSelectedIndexChanged() {
            // console.log(this.selectedItem);
            let index = this.$refs.dropDownList.nativeView.selectedIndex;
        },

        callShuttle() {
            this.$navigateTo(CallShuttle);
        }
    }
}
</script>

<style scoped>
.dropdown {
    font-size: 15;
    width: auto;
    height: 53;
    margin: 10;
    background: #FFF;
    border-width: 1;
    border-color: #DBDBDB;
    border-radius: 3;
    vertical-align: middle;
}

.callTime {
    color: #888888;
    font-size: 14;
    margin-left: 61;
}

.callBtn {
    margin-top: 68;
}

.pad {
    padding: 0 10;
}
</style>
