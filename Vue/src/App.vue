<template>
    <div id="app-container">
        <p>View's content</p>
        <DxSpeedDialAction
            hint="Copy to clipboard"
            icon="ion ion-md-copy"
            @click="showNotification('Copied to clipboard')"
        />
        <DxSpeedDialAction
            hint="Send by email"
            icon="ion ion-md-mail"
            @click="showNotification('Sent by email')"
        />
        <DxSpeedDialAction
            hint="Share on Facebook"
            icon="ion ion-logo-facebook"
            @click="showNotification('Shared on Facebook')"
        />
    </div>
</template>

<script>
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.material.blue.light.css';
// Custom icons by Ionicons
import 'ionicons/dist/css/ionicons.css';

import DxSpeedDialAction from 'devextreme-vue/speed-dial-action';

import notify from 'devextreme/ui/notify';
import config from 'devextreme/core/config';

config({
    floatingActionButtonConfig: {
        icon: 'icon ion-md-share',
        position: {
            my: 'right bottom',
            at: 'right bottom',
            of: '#app-container',
            offset: '-16 -16'
        }
    }
});

export default {
    components: {
        DxSpeedDialAction
    },
    methods: {
        showNotification(message) {
            notify({
                message: message,
                position: {
                    my: 'left bottom',
                    at: 'left bottom',
                    of: '#app-container',
                    offset: '16 -16'
                },
                minWidth: null,
                width: 320 * 0.7
            }, "info", 1000);
        }
    }
}
</script>
<style>
.dx-fa-button-icon, .dx-fa-button-icon-close {
    text-align: center;
}

p {
    text-align: center;
}

#app-container {
    height: 360px;
    width: 320px;
    border: 1px solid black;
}
</style>