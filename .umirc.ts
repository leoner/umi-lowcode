import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/lowcode', component: '@/pages/lowcode' },
  ],
  fastRefresh: {},
  externals: {
    react: 'var window.React',
    'react-dom': 'var window.ReactDOM',
    'prop-types': 'var window.PropTypes',
    '@alifd/next': 'var window.Next',
    '@alilc/lowcode-engine': 'var window.AliLowCodeEngine',
    '@alilc/lowcode-editor-core':
      'var window.AliLowCodeEngine.common.editorCabin',
    '@alilc/lowcode-editor-skeleton':
      'var window.AliLowCodeEngine.common.skeletonCabin',
    '@alilc/lowcode-designer':
      'var window.AliLowCodeEngine.common.designerCabin',
    '@alilc/lowcode-engine-ext': 'var window.AliLowCodeEngineExt',
    '@ali/lowcode-engine': 'var window.AliLowCodeEngine',
    moment: 'var window.moment',
    lodash: 'var window._',
  },
});
