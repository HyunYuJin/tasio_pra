<template>
<Page class="page" actionBarHidden="false">
    <ActionBar>
        <StackLayout>
            <Image src="~/assets/images/logo.png" width="100" height="auto" verticalAlignment="center" />
        </StackLayout>
        <NavigationButton text="Back" android.systemIcon="ic_menu_back"></NavigationButton>
    </ActionBar>
    <StackLayout>
        <!-- <component 
            v-bind:key="component" 
            v-for="component in componentsArray"
            v-show="component === currentComponent" 
            :is="component" 
            row="0" col="0" /> -->
            <GridLayout rows="auto, *" verticalAlignment="top">
                <Image row="0" src="~/assets/images/map.png" />

                <!-- Make overflow scroll-Y -->
                <StackLayout row="1" orientation="vertical">
                    <ScrollView orientation="vertical">
                        <StackLayout orientation="vertical">
                            <DropDown
                                ref="dropDownList" 
                                selectedIndex="0" 
                                :items="items" 
                                v-model="selectedItem" 
                                @selectedIndexChanged="dropDownSelectedIndexChanged" 
                                class="dropdown" 
                                borderWidth="1" 
                                borderColor="#DBDBDB" 
                                borderRadius="3">
                            </DropDown>
                            <DropDown
                                ref="dropDownList" 
                                selectedIndex="0" 
                                :items="items" 
                                v-model="selectedItem" 
                                @selectedIndexChanged="dropDownSelectedIndexChanged" 
                                class="dropdown" 
                                borderWidth="1" 
                                borderColor="#DBDBDB" 
                                borderRadius="3">
                            </DropDown>
                            <Button text="호출하기" row="3" col="0" @tap="callShuttle" class="callBtn" />
                        </StackLayout>
                    </ScrollView>
                </StackLayout>
            </GridLayout>
        <!-- <RadListView ref="listView" for="item in itemList"> -->
            <!-- The v-template component is used internally by the ListView component to iterate over its list items.  -->
            <!-- <v-template> -->
                <!-- <StackLayout orientation="vertical">
                    <Label text="&copy; Springcloud Ltd,." />
                    <Label text="경기도 성남시 수정구 창업로 42, 경기기업성장센터 523, 524" />
                </StackLayout> -->
            <!-- </v-template>
        </RadListView> -->
    </StackLayout>
</Page>
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
.message {
    vertical-align: center;
    text-align: center;
    font-size: 20;
    color: #333333;
}

.dropdown {
    font-size: 15;
    height: 53;
    width: 100%;
    background: #FFF;
}

.callBtn {
    width: 100%;
    height: 53;
    background: #E61773;
    color: #FFF;
    font-size: 15;
    font-weight: bold;
}

.pad {
    padding: 0 10;
}
</style>
