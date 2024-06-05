import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';


export default [
  {
    input: './src/main.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        external: ['React']
      },
    ],
    plugins: [
      peerDepsExternal(),
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'react': ['createElement', 'Component', 'useState', 'useEffect', 'useMemo'], // Add other named exports you need
        'react-dom': ['render']
      }
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true
    }),
    terser(),
      postcss({
        plugins: [],
        minimize: true,
      }),
      external(),
      resolve(),
      terser(),
    ]
  }
];
