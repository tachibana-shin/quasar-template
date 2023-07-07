import transformerDirectives from "@unocss/transformer-directives"
import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetWind,
} from "unocss"

export default defineConfig({
  presets: [
    presetWind(),
    presetUno(),
    presetAttributify({
      prefix: "un-",
      prefixedOnly: true, // <--
    }),
    presetTypography(),
  ],
  rules: [
    [/^size-\[([^[\]]+)\]/, ([, value]) => ({ width: value, height: value })],
    [/^font-family-(.+)/, ([, value]) => ({ "font-family": value })],
  ],
  transformers: [transformerDirectives()],
})
