import esbuild from 'rollup-plugin-esbuild'
import { getPackagesSync } from '@lerna/project'

const inputs = getPackagesSync()

console.log(inputs);

export default {
  plugins: [
    esbuild()
  ]
}
