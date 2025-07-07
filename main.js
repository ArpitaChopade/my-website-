if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/my-website-/sw.js')
      .then(reg => {
        console.log('Service Worker registered with scope:', reg.scope);

        // Subscribe user to push notifications
        subscribeUserToPush();
      })
      .catch(err => {
        console.error('Service Worker failed to register:', err);
      });
  });
}

// Function to subscribe user to push notifications
function subscribeUserToPush() {
  navigator.serviceWorker.ready.then(registration => {
    registration.pushManager.subscribe({ userVisibleOnly: true })
      .then(subscription => {
        console.log('User is subscribed:', subscription);
        // TODO: Send subscription to your backend for push notifications
      })
      .catch(err => {
        console.error('Failed to subscribe user:', err);
      });
  });
}

  }
  
