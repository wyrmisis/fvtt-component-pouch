import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

export default {
  input: './index.js',
  output: [
    { file: './dist/bundle.js' },
    { file: './dist/bundle.min.js', plugins: [terser()] }
  ],
  plugins: [
    babel({
      babelHelpers: 'bundled',
      plugins: [
        ["@babel/plugin-proposal-decorators", {
          legacy: true 
        }],
        ['@babel/plugin-proposal-class-properties']
      ]
    }),
    nodeResolve({ browser: true })
  ]
};