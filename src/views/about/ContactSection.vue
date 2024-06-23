<script setup lang="ts">
import { Loader } from '@googlemaps/js-api-loader'
import EmailIcon from '@/components/icons/IconEnvelope.vue'
import MapMarkerIcon from '@/components/icons/IconMapMarker.vue'
import ContactInfo from './ContactInfo.vue'

let map: google.maps.Map

const loader = new Loader({
  apiKey: import.meta.env.VITE_MAP_API_KEY,
  version: 'weekly',
  language: 'en'
})

loader.load().then(async () => {
  console.log('success')
  const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary
  map = new Map(document.getElementById('map') as HTMLElement, {
    center: { lat: 48.754, lng: 21.915 },
    zoom: 14,
    mapId: '81b3df3ce91bbd23',
    disableDefaultUI: true
  })
})
</script>

<template>
  <div class="map-container">
    <div id="map"></div>
    <div class="contacts">
      <h2 class="heading-2">Contacts</h2>
      <div class="contact-info-grid">
        <ContactInfo text="gulkarine91@gmail.com">
          <EmailIcon />
        </ContactInfo>
        <ContactInfo text="Michalovce, Slovakia">
          <MapMarkerIcon />
        </ContactInfo>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.map-container {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
#map {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 90;
}

.contacts {
  position: relative;
  z-index: 999;
  background-color: rgba(#fff, 0.85);
  max-width: 380px;
  width: 100%;
  padding: 30px 40px;
  border-radius: 5px;
  display: flex;
  margin-top: -185px;

  flex-direction: column;

  h2 {
    margin-top: 10px;
    margin-bottom: 30px;
  }
}
</style>
