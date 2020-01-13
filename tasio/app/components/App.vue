<template>
  <Page class="page" actionBarHidden="true">
        <ScrollView>
            <AbsoluteLayout width="100%" height="100%">
                <FlexboxLayout width="100%" height="100%" justifyContent="center"
                    alignItems="center">
                    <StackLayout id="background">
                    </StackLayout>
                </FlexboxLayout>
                <FlexboxLayout flexDirection="column" height="100%" width="100%" id="app">
                    <Header class="header" />

                    <StackLayout class="home-panel" flexGrow="7" id="view">
                        <Home />
                    </StackLayout>

                    <!-- <Footer class="footer" /> -->
                </FlexboxLayout>
            </AbsoluteLayout>
        </ScrollView>
    </Page>
</template>

<script>
import Header from './Header';
import Home from './Home';

const platform = require("tns-core-modules/platform");
const application = require("tns-core-modules/application");

export default {
    data() {
        return {
            platform: '',
            width: 0,
            height: 0
        }
    },

    mounted() {
        this.width = platform.screen.mainScreen.widthDIPs;
        this.height = platform.screen.mainScreen.heightDIPs;

        if(application.ios) {
            this.platform = "ios";
        } else if(application.android) {
            this.platform = "android";
        }
    },

    components: {
        Header,
        Home
    }
}
</script>

<style scoped>
#background {
     width: 100;
     height: 100;
     border-radius: 50%;
}

#app {
    z-index: 10;
}

#view {
    vertical-align: center;
}

.header {
    height: 57;
    background-color: #FFF;
    border-bottom-width: 1;
    border-color: #DBDBDB;
    color: #000000;
}
</style>