<template>
  <div :id="id" :style="height" class="map admin-map" />
</template>

<script>
export default {
  name: 'LeafletMap',
  props: {
    latlng: {
      type: Array,
      required: false,
      default: () => [23.0208241, 72.50863950000002],
    },
    height: {
      default: 'height: 400px;',
      type: String,
      required: false,
    },
    id: {
      type: String,
      default: '',
    },
    zoom: {
      type: Number,
      default: 15,
    },
    mapClass: {
      default: 'map admin-map',
      type: String,
    },
    isMove: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      map: null,
      tileLayer: null,
      address: {},
      latitudeLongitude: this.latlng,
    }
  },

  mounted() {
    this.initMap()
  },
  methods: {
    getCurrentlatlng() {
      const vm = this
      navigator.geolocation.getCurrentPosition(function (location) {
        // eslint-disable-next-line vue/no-mutating-props
        vm.latlng = [location.coords.latitude, location.coords.longitude]
        vm.getAddress(location.coords.latitude, location.coords.longitude)
      })
    },
    getAddress(lat, lng) {
      const timer = this.getAddress.timer
      if (timer) {
        clearTimeout(timer)
      }
      this.getAddress.timer = setTimeout(() => {
        // eslint-disable-next-line no-undef
        const M = L
        const vm = this
        const latlng = [lat, lng]
        const geocodeService = M.esri.Geocoding.geocodeService()
        geocodeService
          .reverse()
          .latlng(latlng)
          .run(function (error, result) {
            if (error) {
              return
            }
            vm.$emit('changeAddress', result)
            vm.address = result.address
          })
      }, 800)
    },
    initMap(lat, lng) {
      const vm = this
      const options = {
        center: vm.latitudeLongitude,
        zoom: vm.zoom,
      }
      // eslint-disable-next-line no-undef
      const M = L
      const map = M.map(vm.id, options)

      M.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: 'Long isLand',
      }).addTo(map)

      M.control.scale().addTo(map)

      // eslint-disable-next-line no-var
      var myMarker = M.marker(vm.latitudeLongitude, {
        title: '',
        alt: '',
        draggable: this.isMove,
      })
        .on('dragend', function () {
          vm.getAddress(myMarker.getLatLng().lat, myMarker.getLatLng().lng)
        })
        .addTo(map)

      if (this.isMove) {
        map.on('move', function () {
          myMarker.setLatLng(map.getCenter())
          vm.getAddress(map.getCenter().lat, map.getCenter().lng)
        })
      }

      // eslint-disable-next-line no-undef
      const arcgisOnline = L.esri.Geocoding.arcgisOnlineProvider()

      // eslint-disable-next-line no-undef
      L.esri.Geocoding.geosearch({
        providers: [
          arcgisOnline,
          // eslint-disable-next-line no-undef
          L.esri.Geocoding.mapServiceProvider({
            label: 'States and Counties',
            url:
              'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer',
            layers: [2, 3],
            searchFields: ['NAME', 'STATE_NAME'],
          }),
        ],
      }).addTo(map)
    },
  },
}
</script>
