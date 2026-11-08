export interface ComparisonRow {
  category: string;
  xichi: {
    title: string;
    description: string;
    positive: boolean;
    tag?: string;
  };
  conventional: {
    title: string;
    description: string;
    positive: boolean;
    tag?: string;
  };
}

export const comparisonData: ComparisonRow[] = [
  {
    category: 'Fleksibilitas Dialog & Karakter',
    xichi: {
      title: 'Dialog Luwes & Multimodal',
      description: 'Didukung LLM mutakhir (Gemini/DeepSeek), paham konteks panjang dan berkarakter humoris.',
      positive: true,
      tag: 'LLM Multimodal',
    },
    conventional: {
      title: 'Perintah Kaku Berpola',
      description: 'Hanya respons kata pemicu baku, sering error "Maaf tidak mengerti" saat bicara santai.',
      positive: false,
      tag: 'Command-Only',
    },
  },
  {
    category: 'Streaming Musik & Podcast',
    xichi: {
      title: 'YouTube Mandiri Rp 0 Selamanya',
      description: 'Stream YouTube langsung dari perangkat tanpa biaya langganan dan tanpa perlu HP.',
      positive: true,
      tag: 'Rp 0 Selamanya',
    },
    conventional: {
      title: 'Wajib Langganan Berbayar',
      description: 'Wajib bayar Rp 55-75 rb/bln. Tanpa langganan, dibatasi iklan berulang dan acak lagu.',
      positive: false,
      tag: 'Bayar Bulanan',
    },
  },
  {
    category: 'Data Cuaca & Gempa BMKG',
    xichi: {
      title: 'Integrasi API BMKG Indonesia',
      description: 'Terhubung langsung API resmi BMKG untuk info gempa terkini dan sirine cuaca ekstrem lokal.',
      positive: true,
      tag: 'BMKG API Live',
    },
    conventional: {
      title: 'Data Global Terbatas',
      description: 'Hanya cuaca global generik tanpa deteksi gempa atau sirine kebencanaan lokal.',
      positive: false,
      tag: 'Data Global',
    },
  },
  {
    category: 'Privasi & Lokasi Server',
    xichi: {
      title: 'Open-Source & Self-Host',
      description: 'Firmware 100% transparan, kontrol penuh API key pribadi, dan bisa self-host.',
      positive: true,
      tag: '100% Transparan',
    },
    conventional: {
      title: 'Terkunci Cloud Asing',
      description: 'Rekaman suara tersimpan di cloud luar negeri untuk analitik dan target iklan.',
      positive: false,
      tag: 'Cloud Asing',
    },
  },
  {
    category: 'Kustomisasi Alat (MCP Superpowers)',
    xichi: {
      title: '47+ MCP Tools & Smart Relay',
      description: 'Bebas kustomisasi koding (GitHub/Notion), kalkulator ilmiah, hingga saklar fisik lampu.',
      positive: true,
      tag: '47 MCP Tools',
    },
    conventional: {
      title: 'Ekosistem Tertutup',
      description: 'Fitur terbatas bawaan pabrik, tidak fleksibel menambah otomasi atau alat koding.',
      positive: false,
      tag: 'Walled Garden',
    },
  },
];
