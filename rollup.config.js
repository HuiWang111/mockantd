import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import autoExternal from 'rollup-plugin-auto-external';
import fs from 'fs';
import path from 'path';

const env = process.env.NODE_ENV;
const styleExtensions = [ '.css', 'less' ];
const indexModuleName = 'index.ts';
const cjsNamedExports = {
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
};

function createRollupConfig(moduleName, moduleFile) {
    const isIndex = moduleName === indexModuleName;

    return {
        input: moduleFile,
        output: {
            file: isIndex ? 'temp/cjs/index.js' : `temp/cjs/${moduleName}/index.js`,
            format: 'cjs'
        },
        experimentalCodeSplitting: true,
        onwarn: (warning) => {
            if (warning.code === 'THIS_IS_UNDEFINED') {
                return;
            }
        },
        plugins: [
            autoExternal(),
            postcss({
                extensions: styleExtensions,
                use: [
                    ['less', { javascriptEnabled: true }]
                ],
                extract: true
            }),
            typescript({
                tsconfig: 'tsconfig.json'
            }),
            commonjs({
                include: 'node_modules/**',
                namedExports: cjsNamedExports
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
}

// 获取moduels
const componentsDirection = 'src/components';
const moduleNames = fs.readdirSync(path.resolve(componentsDirection));
const moduleMap = moduleNames.reduce((map, moduleName) => {
    map[moduleName] = moduleName === indexModuleName
        ? `${componentsDirection}/${moduleName}`
        : `${componentsDirection}/${moduleName}/index.ts`;

    return map;
}, {});

// 创建module配置
const modulesConfig = [];
for (const moduleName in moduleMap) {
    const cjsConfig = createRollupConfig(moduleName, moduleMap[moduleName]);
    modulesConfig.push(cjsConfig);
}

export default modulesConfig;
