/**
 * Created by tushar on 30/07/17.
 */

declare const require: any
const glob = require('glob')
const {rollup} = require('rollup')
const {promisify} = require('util')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')

const globP = promisify(glob)
const fileName = (i: string) => i.replace('src/dom/', '').replace('.js', '')
const reverseName = (i: string) => `./${i}.js`
const GeneratorConfig = {
  format: 'umd',
  moduleName: 'anydom',
  plugins: [
    resolve({jsnext: true, main: true}),
    commonjs()
  ]
}

async function main () {
  const files = await globP('src/dom/*.js', null)
  const names = files.map(fileName)
  const bundles = await Promise.all<any>(files.map((file: string) => rollup({entry: file, ...GeneratorConfig})))
  await Promise.all(bundles.map((bundle, i) => bundle.write({
    ...GeneratorConfig,
    dest: reverseName(names[i])
  })))
}

main().catch(err => {
  throw err
})

