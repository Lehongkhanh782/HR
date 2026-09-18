importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBnb2O9FP2uwLrAUKZKmshsSiSODz1uGxw",
  authDomain: "htv-hr-thongbao.firebaseapp.com",
  projectId: "htv-hr-thongbao",
  storageBucket: "htv-hr-thongbao.firebasestorage.app",
  messagingSenderId: "777531029266",
  appId: "1:777531029266:web:928792dc92ac58f4b925cb"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  var d = payload.data || {};
  var tieuDe = d.title || 'HTV HR';
  var noiDung = d.body || '';
  self.registration.showNotification(tieuDe, {
    body: noiDung,
    icon: 'https://lh3.googleusercontent.com/d/1NmEtOM0IPmywMgJoaFKmSWCzNIWRTtJF',
    badge: 'https://lh3.googleusercontent.com/d/1NmEtOM0IPmywMgJoaFKmSWCzNIWRTtJF'
  });
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});
