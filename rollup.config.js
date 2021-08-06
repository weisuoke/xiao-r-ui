import path from 'path'
import esbuild from 'rollup-plugin-esbuild'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { getPackagesSync } from '@lerna/project'
import pkg from './package.json'

const deps = Object.keys(pkg.dependencies)
const inputs = getPackagesSync()
  .map(pkg => pkg.name)

const getOutFile = (name, dir = 'lib') => {
  return `${dir}/${name}/index.js`
}

export default inputs.map(name => ({
  input: path.resolve(__dirname, `./packages/${name}/index.tsx`),
  output: [{
    format: 'es',
    file: getOutFile(name, 'es'),
  },{
    format: 'cjs',
    file: getOutFile(name, 'lib'),
    exports: 'named'
  }],
  plugins: [
    esbuild(),
    nodeResolve()
  ],
  external(id) {
    let result = deps.some(k => new RegExp('^' + k).test(id))
    console.log('🆚', result, deps)
    return deps.some(k => new RegExp('^' + k).test(id))
  }
}))
