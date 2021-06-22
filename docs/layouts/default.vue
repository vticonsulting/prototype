<template>
  <div class="flex flex-col min-h-screen">
    <HancockNavbar />
    <main class="flex-1">
      <SectionWrapper>
        <Nuxt :key="$route.params.id" />
      </SectionWrapper>
    </main>
    <PortalTarget name="overlays" />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Nuxt.js with TailwindCSS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js with TailwindCSS example',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
  },
}
</script>

<style>
:root {
  --color-primary-50: #faf2f5;
  --color-primary-100: #f5e6ea;
  --color-primary-200: #e5bfcb;
  --color-primary-300: #d699ac;
  --color-primary-400: #b74d6d;
  --color-primary-500: #98002f;
  --color-primary-600: #89002a;
  --color-primary-700: #720023;
  --color-primary-800: #5b001c;
  --color-primary-900: #4a0017;

  --color-temparture-01: #3eff00;
  --color-temparture-02: #b0ff00;
  --color-temparture-03: #fffa00;
  --color-temparture-04: #ffdc00;
  --color-temparture-05: #ffbe00;
  --color-temparture-06: #ffa000;
  --color-temparture-07: #ff8200;
  --color-temparture-08: #ff6400;
  --color-temparture-09: #ff4600;
  --color-temparture-10: #ff2800;
}
</style>
