import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy';
import bundleSize from 'rollup-plugin-bundle-size';
import autoExternal from 'rollup-plugin-auto-external';

export default {
  input: 'index.js',
  output: [
    { file: 'build/bundle.js', format: 'cjs' },
    { file: 'build/module.js', format: 'esm' },
  ],
  plugins: [
    babel({
      babelrc: false,
      presets: [['@babel/preset-env', { loose: true }], '@babel/preset-react'],
    }),
    copy({
      targets: [{ src: 'typings/*', dest: 'build' }],
    }),
    bundleSize(),
    autoExternal(),
  ],
};
