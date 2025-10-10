<script setup lang="ts">
import DxSpeedDialAction from 'devextreme-vue/speed-dial-action';
import type { DxSpeedDialActionTypes } from 'devextreme-vue/speed-dial-action';
import config from 'devextreme/core/config';
import notify from 'devextreme/ui/notify';
import type { FloatingActionButtonConfig, NotificationOptions } from '../types';

// Configure the floating action button
const fabConfig: FloatingActionButtonConfig = {
  icon: 'add',
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

const handleCopyClick = (e: DxSpeedDialActionTypes.ClickEvent): void => {
  const hint = e.component.option('hint');
  showNotification(`${hint}: Copied to clipboard`);
};

const handleEmailClick = (e: DxSpeedDialActionTypes.ClickEvent): void => {
  const hint = e.component.option('hint');
  showNotification(`${hint}: Sent by email`);
};

const handleFacebookClick = (e: DxSpeedDialActionTypes.ClickEvent): void => {
  const hint = e.component.option('hint');
  showNotification(`${hint}: Shared on Facebook`);
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
      hint="Share on Facebook"
      icon="like"
      @click="handleFacebookClick"
    />
  </div>
</template>

<style scoped>
#app-container {
  height: 360px;
  width: 320px;
  position: relative;
  margin: 50px;
  padding: 20px;
  border: 1px solid #ddd;
}

p {
  text-align: center;
}
</style>
