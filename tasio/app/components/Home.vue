<template>
<Page class="page" actionBarHidden="false">
    <ActionBar title="타시오" />
    <GridLayout rows="auto, *" columns="*">
        <component v-bind:key='component' v-for="component in componentArray" v-show="currentComponent" row="0" col="0" :is="component" />
        <StackLayout row="1" col="0">
            <Label text="&copy; Springcloud Ltd,." />
            <Label text="경기도 성남시 수정구 창업로 42, 경기기업성장센터 523, 524" />
        </StackLayout>
    </GridLayout>
</Page>
</template>

<script>
import SelectDestination from './SelectDestination';

export default {
    data() {
        return {
            currentComponent: 'SelectDestination',

            componentArray: ['SelectDestination']
        }
    },

    components: {
      SelectDestination
    }
} 
</script>

<style scoped>
ActionBar {
    background-color: #FFF;
    color: #000000;
}

.message {
    vertical-align: center;
    text-align: center;
    font-size: 20;
    color: #333333;
}
</style>
