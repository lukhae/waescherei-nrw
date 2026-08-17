import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx(),
    icon({
      include: {
        bi: [
          'arrow-right', 'arrow-left', 'arrow-up',
          'telephone-fill', 'telephone',
          'envelope-fill', 'envelope',
          'geo-alt-fill', 'geo-alt',
          'clock-fill', 'clock',
          'stars', 'star-fill',
          'check2', 'check2-circle', 'check-circle-fill',
          'shield-check', 'shield',
          'person-check',
          'leaf', 'leaf-fill',
          'patch-check', 'patch-check-fill',
          'building', 'building-check',
          'hospital', 'shop', 'mortarboard', 'boxes', 'cup-hot',
          'calendar2-check', 'calendar2', 'calendar2-week', 'calendar-check', 'calendar',
          'people', 'people-fill',
          'graph-up',
          'send', 'send-fill',
          'list', 'x-lg',
          'plus-circle', 'dash-circle',
          'chevron-left', 'chevron-right',
          'linkedin', 'facebook', 'instagram', 'twitter-x',
          'exclamation-triangle', 'house',
          'info-circle', 'award', 'bullseye', 'eye',
          'clock-history', 'arrow-repeat',
          'grid', 'lightning-charge-fill','chevron-down',
          'quote', 'moon-stars', 'currency-dollar', 'currency-euro', 'journal-text', 'tags', 'link-45deg', 'check-circle', 'briefcase', 'rulers', 'droplet', 'virus', 'window', 'brush', 'box-seam', 'wrench', 'headset', 'mortarboard-fill', 'file-earmark-check', 'exclamation-triangle-fill', 'lock', 'file-earmark-text', 'calendar3', 'chat-quote', 'play-fill', 'camera-video-fill', 'inbox', 'chat-heart-fill', 'yelp', 'google', 'file-text',
          'house-door', 'shield-lock', 'calendar-event', 'heart', 'arrow-repeat',
          'activity', 'bag', 'brush-fill', 'building-fill', 'building-gear', 'buildings',
          'car-front', 'cart', 'cone-striped', 'cup', 'easel2', 'house-add', 'house-check',
          'house-fill', 'house-heart', 'ladder', 'mic', 'p-square', 'snow', 'tools', 'trash',
          'truck', 'window-fullscreen',
        ],
      },
    }),
  ],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-body',
      weights: ['300', '400', '500', '600', '700', '800'],
    },
    {
      provider: fontProviders.google(),
      name: 'Sora',
      cssVariable: '--font-heading-src',
      weights: ['400', '500', '600', '700', '800'],
    },
  ],
});
