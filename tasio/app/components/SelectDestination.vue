<template>
<StackLayout>
    <GridLayout rows="auto, auto, *" columns="*">
        <Image row="0" col="0" src="~/assets/images/map.png" />
        <DropDown row="1" col="0"
            ref="dropDownList"
            selectedIndex="0" 
            :items="items" 
            v-model="selectedItem" 
            @selectedIndexChanged="dropDownSelectedIndexChanged" 
            class="dropdown"
            borderWidth="1"
            borderColor="#DBDBDB"
            borderRadius="3"
            marginTop="30"
            marginBottom="10">
        </DropDown>
        <DropDown row="2" col="0"
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
    </GridLayout>
</StackLayout>
</template>

<script>
export default {

    data() { 
        return { 
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

    methods: {
        dropDownSelectedIndexChanged() { 
            // console.log(this.selectedItem);
            let index = this.$refs.dropDownList.nativeView.selectedIndex;
        }
    }

}
</script>

<style scoped>
.dropdown {
    font-size: 15;
    height: 40;
    padding: 4;
    width: 100%;
    background: #FFF;
}
</style>
