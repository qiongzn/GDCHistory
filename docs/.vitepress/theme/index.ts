import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import './custom.css'

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('.vp-doc img:not(.no-zoom)', {
        background: 'rgba(10, 10, 10, 0.88)',
        margin: 24,
      })
    }
    onMounted(() => initZoom())
    watch(() => route.path, () => nextTick(() => initZoom()))
  },
}
