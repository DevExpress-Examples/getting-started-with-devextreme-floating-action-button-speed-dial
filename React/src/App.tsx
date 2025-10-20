import { useCallback } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import SpeedDialAction from 'devextreme-react/speed-dial-action';
import type { SpeedDialActionTypes } from 'devextreme-react/speed-dial-action';
import config from 'devextreme/core/config';
import notify from 'devextreme/ui/notify';

// Configure the floating action button
config({
  floatingActionButtonConfig: {
    icon: 'share',
    position: {
      of: '#app-container',
      my: 'right bottom',
      at: 'right bottom',
      offset: '-16 -16',
    },
  },
});

function App(): JSX.Element {
  const showNotification = useCallback((message: string) => {
    notify(
      {
        message,
        position: {
          my: 'left bottom',
          at: 'left bottom',
          of: '#app-container',
          offset: '16 -16',
        },
        minWidth: null,
        width: 320 * 0.7,
      },
      'info',
      1000,
    );
  }, []);

  const handleCopyClick = useCallback(
    (e: SpeedDialActionTypes.ClickEvent) => {
      e.component.option('hint');
      showNotification('Copied to clipboard');
    },
    [showNotification],
  );

  const handleEmailClick = useCallback(
    (e: SpeedDialActionTypes.ClickEvent) => {
      e.component.option('hint');
      showNotification('Sent by email');
    },
    [showNotification],
  );

  const handleSocialClick = useCallback(
    (e: SpeedDialActionTypes.ClickEvent) => {
      e.component.option('hint');
      showNotification('Shared on Social Media');
    },
    [showNotification],
  );

  return (
    <div id="app-container">
      <p>View&apos;s content</p>

      <SpeedDialAction
        hint="Copy to clipboard"
        icon="copy"
        onClick={handleCopyClick}
      />

      <SpeedDialAction
        hint="Send by email"
        icon="email"
        onClick={handleEmailClick}
      />

      <SpeedDialAction
        hint="Share on Social Media"
        icon="link"
        onClick={handleSocialClick}
      />
    </div>
  );
}

export default App;
