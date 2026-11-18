# Navigation

The site uses regular page links, with no client-side router. The [shared layout](./src/layouts/Layout.astro) lets supporting browsers prerender likely same-origin destinations. The [global stylesheet](./src/styles/global.css) enables native cross-fades for same-origin page navigations when reduced motion is not requested. Browsers without support still navigate normally.