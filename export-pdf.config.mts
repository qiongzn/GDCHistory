import { defineConfig } from 'vitepress-export-pdf'

export default defineConfig({
  outFile: 'GDCHistory.pdf',
  outDir: './pdf',
  pdfOptions: {
    format: 'A4',
    printBackground: true,
    margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' },
    timeout: 120000,
  },
  async beforePdf(page) {
    await page.evaluate(() => {
      document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        img.loading = 'eager'
      })
      window.scrollTo(0, document.body.scrollHeight)
    })
    await page.evaluate(async () => {
      const imgs = Array.from(document.querySelectorAll('img'))
      await Promise.all(imgs.map(img => {
        if (img.complete && img.naturalHeight !== 0) return
        return new Promise(resolve => {
          img.addEventListener('load', resolve, { once: true })
          img.addEventListener('error', resolve, { once: true })
        })
      }))
    })
    await new Promise(r => setTimeout(r, 1000))
  },
})