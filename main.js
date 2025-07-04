if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('Service Worker Registered'))
    .catch(err => console.log('Service Worker registration failed:', err));
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(reg => {
          console.log('Service Worker registered.', reg);
  
          // Now subscribe to push notifications
          subscribeUserToPush();
        })
        .catch(err => console.log('Service Worker registration failed:', err));
    });
  }
  
  // Function to subscribe user to push notifications
  function subscribeUserToPush() {
    navigator.serviceWorker.ready.then(registration => {
      registration.pushManager.subscribe({ userVisibleOnly: true })
        .then(subscription => {
          console.log('User is subscribed:', subscription);
          // TODO: Send subscription details to your backend server here
        })
        .catch(err => console.error('Failed to subscribe user:', err));
    });
  }
  