import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import typescript from 'rollup-plugin-typescript2';

const env = process.env.NODE_ENV;

export default {
    input: 'src/components/index.ts',
    output: {
        file: 'dist/cjs/index.js',
        format: 'cjs'
    },
    experimentalCodeSplitting: true,
    external: ['react', 'react-dom', 'moment', 'lodash', 'classnames'],
    onwarn: (warning) => {
        if (warning.code === 'THIS_IS_UNDEFINED') {
            return;
        }
    },
    plugins: [
        image(),
        postcss({
            extensions: [ '.css', 'less' ],
            use: [
                ['less', { javascriptEnabled: true }]
            ],
            extract: 'mockantd.css'
        }),
        typescript(),
        commonjs({
            include: 'node_modules/**',
            namedExports: {
                'node_modules/react-is/index.js': ['isFragment', 'ForwardRef', 'isMemo', 'createContext'],
                'node_modules/react/index.js': [
                    'createContext',
                    'useRef',
                    'useState',
                    'useEffect',
                    'useLayoutEffect',
                    'Component',
                    'forwardRef',
                    'useImperativeHandle',
                    'useMemo',
                    'useContext',
                    'isValidElement',
                    'cloneElement',
                    'useCallback'
                ]
            }
        }),
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        replace({
            exclude: 'node_modules/**',
            'process.env.NODE_ENV': JSON.stringify(env || 'development')
        })
    ],
};
