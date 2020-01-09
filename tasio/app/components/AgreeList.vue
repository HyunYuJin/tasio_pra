<template>
<Page class="page" actionBarHidden="true">
    <GridLayout columns="*" rows="auto, auto, *, auto">
        <Image src="~/assets/images/TASIOLogo.png" class="tasioLogo" />
        <Label row="1" col="0" text="권한 허용 후 서비스를 이용할 수 있습니다." class="tasioIntro" />->

        <!-- Accordion component will be part of ListView component -->
        <Accordion 
            class="accordionWrap" 
            row="2" 
            height="100%" 
            ref="accordion" 
            allowMultiple="false" 
            childItems="children" 
            for="item of items">
            
            <v-template if="$odd" name="title-odd">
                <StackLayout class="accordionTitle">
                    <Label :text="item.title" />
                </StackLayout>
            </v-template>

            <v-template if="$even" name="title-even">
                <StackLayout class="accordionTitle">
                    <Label :text="item.title" />
                </StackLayout>
            </v-template>

            <!-- Children -->
            <v-template if="$odd" name="content-odd">
                <StackLayout class="accordionContentWrap">
                    <Label class="accordionContent" :text="item.text" />
                </StackLayout>
            </v-template>

            <v-template if="$even" name="content-even">
                <StackLayout class="accordionContentWrap">
                    <Label class="accordionContent" :text="item.text" />
                </StackLayout>
            </v-template>

        </Accordion>
        <StackLayout class="taioApp" row="3" col="0">
            <GridLayout rows="*" columns="5, auto">
                <Image src="~/assets/images/ellipse.png" row="0" col="0" class="ellipse" />
                <Label class="line" text="선택 권한은 서비스 사용 중 필요한 시점에 동의를 받고" row="0" col="1" />
            </GridLayout>
            <Label class="line" text="있습니다. 허용하지 않을 경우에도 해당 기능 외 서비스는" />
            <Label class="line" text="이용 가능합니다." />
            <GridLayout rows="*" columns="5, auto">
                <Image src="~/assets/images/ellipse.png" row="0" col="0" class="ellipse"/>
                <Label class="line highlight" text="접근 권한 변경" row="0" col="1" />
            </GridLayout>
            <Label class="line" text="휴대폰 설정 > 앱 > 타시오" />
            <Button text="확인" class="btn mar" />
        </StackLayout>
        
    </GridLayout>
</Page>
</template>

<script>
export default {
    data() {
        return {    
            items: [
                {
                    title: '위치',   
                    children: [{
                        text: '출발지 및 목적지 설정에 사용됩니다.'
                    }]
                },
                {
                    title: '저장공간',            
                    children: [{
                        text: '호출 상품의 정보를 저장하는데 사용됩니다.'
                    }]
                },
                {
                    title: '전화',  
                    children: [{
                        text: '타시오에서 인증받을 전화번호 정보를 가져오는데 사용됩니다.'
                    }]
                },
                {
                    title: '주소록',
                    children: [{
                        text: '상품 호출 이후 진행 상황을 수신하는데 사용됩니다.'
                    }]
                },
                {
                    title: '(선택) 마이크',
                    children: [{
                        text: '음성 인식을 활용하여 출발지 및 도착지를 설정할 때 사용됩니다.'
                    }]
                },
                {
                    title: '(선택) 카메라',
                    children: [{
                        text: 'QR코드 인식 및 기타 고객 제보 시 사용됩니다.'
                    }]
                }
            ]
        }
    }
}
</script>

<style scoped>
.tasioLogo {
    width: 117.52;
    height: 49.16;
    margin-top: 53;
    text-align: center;
}

.tasioIntro {
    font-size: 14;
    color: #555555;
    text-align: center;
    margin-top: 12.8;
    margin-bottom: 55;
}

.accordionWrap {
    margin-left: 29;
    margin-right: 29; 
}

.accordionTitle {
    background-color: transparent;
    border-bottom-width: 1;
    border-color: #E2E2E2;
    color: #333333;
    font-size: 14;
    padding-top: 15;
    padding-bottom: 15;
}

.accordionContentWrap {
    width: auto;
    height: 55;
}

.accordionContent {
    padding-top: 18;
    text-align: left;
    font-weight: normal;
    font-size: 13;
    color: #A7A7A7;
}

.taioApp {
    margin-top: 33;
    width: auto;
    color: #A7A7A7;
    font-size: 13;
    font-weight: normal;
}

.ellipse {
    width: 3;
    margin-left: 35;
    vertical-align: middle;
}

.line {
    margin-left: 37;
}

.highlight {
    color: #E61773;
}

.mar {
    margin-top: 34;
    margin-bottom: 10;
}
</style>
