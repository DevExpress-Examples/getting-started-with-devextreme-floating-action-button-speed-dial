<script setup lang="ts">
import DxSpeedDialAction from 'devextreme-vue/speed-dial-action';
import config from 'devextreme/core/config';
import notify from 'devextreme/ui/notify';
import type { FloatingActionButtonConfig, NotificationOptions } from '../types';

// Configure the floating action button
const fabConfig: FloatingActionButtonConfig = {
  icon: 'share',
  position: {
    my: 'right bottom',
    at: 'right bottom',
    of: '#app-container',
    offset: '-16 -16',
  },
};

config({
  floatingActionButtonConfig: fabConfig,
});

const showNotification = (message: string): void => {
  const notificationOptions: NotificationOptions = {
    message,
    position: {
      my: 'left bottom',
      at: 'left bottom',
      of: '#app-container',
      offset: '16 -16',
    },
    minWidth: null,
    width: 320 * 0.7,
  };

  notify(notificationOptions, 'info', 1000);
};

const handleCopyClick = (): void => {
  showNotification('Copied to clipboard');
};

const handleEmailClick = (): void => {
  showNotification('Sent by email');
};

const handleSocialClick = (): void => {
  showNotification('Shared on Social Media');
};
</script>

<template>
  <div id="app-container">
    <p>View's content</p>

    <DxSpeedDialAction
      hint="Copy to clipboard"
      icon="copy"
      @click="handleCopyClick"
    />

    <DxSpeedDialAction
      hint="Send by email"
      icon="email"
      @click="handleEmailClick"
    />

    <DxSpeedDialAction
      hint="Share on Social Media"
      icon="link"
      @click="handleSocialClick"
    />
  </div>
</template>

<style scoped>
#app-container {
  height: 360px;
  width: 320px;
  border: 1px solid rgb(221 221 221);
}

p {
  font-size: 14px;
  text-align: center;
}
</style>
