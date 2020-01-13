<template>
  <FlexboxLayout flexDirection="row" justifyContent="space-between" id="header">
        <FlexboxLayout class="btn1 menu">
            <Image class="icon" src="~/assets/images/btn_menu.png" width="16" height="14" verticalAlignment="left" />
        </FlexboxLayout>
        <FlexboxLayout class="btn1 pp">
            <Image class="icon" row="0" col="1" src="~/assets/images/logo.png" width="86" height="auto" verticalAlignment="center" />
        </FlexboxLayout>
    </FlexboxLayout>
</template>

<script>
export default {

}
</script>

<style scoped>
#header {
    padding: 0;
}

#header .btn1 {
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
}

#header .btn1 .icon {
    padding: 0;
    margin: 0;
}

#header .btn1.pp {
    height: 100%;
}

#header .btn1.menu .icon {
    height: 60%;
}
</style>