export interface ChronosFeature {
  num: string;
  title: string;
  desc: string;
  badge?: string;
}

export interface ChronosConfig {
  sectionBadge: string;
  sectionTitleWords: string[];
  description: string;
  playStoreUrl: string;
  githubUrl: string;
  features: ChronosFeature[];
  demoUser: {
    appName: string;
    connectionStatus: string;
    deviceName: string;
    bleAddress: string;
    activeMusic: {
      title: string;
      artist: string;
      app: string;
    };
    notification: {
      app: string;
      sender: string;
      message: string;
    };
    defaultToggles: { id: string; label: string; initial: boolean }[];
  };
}

export const chronchiConfig: ChronosConfig = {
  sectionBadge: '06 / Support Aplikasi Chronos',
  sectionTitleWords: ['CHRONOS', '—', 'INTEGRASI', 'HP', 'VIA', 'BLE.'],
  description:
    'Hubungkan HP Android ke Xichi via BLE (Chronos by fbiego) untuk sinkronisasi notifikasi, kontrol musik, peta, dan waktu seketika.',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.fbiego.chronos',
  githubUrl: 'https://github.com/fbiego/chronos-esp32',
  features: [
    {
      num: '01',
      title: 'Notifikasi & Panggilan',
      desc: 'Pesan WhatsApp, Telegram, dan panggilan telepon masuk langsung tampil di layar Xichi.',
      badge: 'Notif Bridge',
    },
    {
      num: '02',
      title: 'Kontrol Musik HP',
      desc: 'Atur Play/Pause, judul lagu, dan volume musik smartphone dari meja kerjamu.',
      badge: 'Media Sync',
    },
    {
      num: '03',
      title: 'Navigasi Google Maps',
      desc: 'Panduan belokan dan jarak Maps langsung terpampang di layar Xichi.',
      badge: 'Maps Turn',
    },
    {
      num: '04',
      title: 'Waktu, Cuaca & Alarm',
      desc: 'Jam, alarm, dan cuaca otomatis tersinkron dari HP tanpa butuh jaringan WiFi.',
      badge: 'Auto Time',
    },
  ],
  demoUser: {
    appName: 'CHRONOS (fbiego)',
    connectionStatus: 'BLE CONNECTED',
    deviceName: 'Xichi Core ESP32',
    bleAddress: 'BLE: 7C:DF:A1:08:9E',
    activeMusic: {
      title: 'Midnight Coding Lo-Fi',
      artist: 'Xichi Audio Session',
      app: 'Spotify Music',
    },
    notification: {
      app: 'WHATSAPP',
      sender: 'Irsyad',
      message: 'Xichi berhasil tersambung ke Chronos App!',
    },
    defaultToggles: [
      { id: 'notif-sync', label: 'Sinkron Notifikasi', initial: true },
      { id: 'media-sync', label: 'Kontrol Pemutar Musik', initial: true },
    ],
  },
};

