const modules = {};

// Importação dinâmica dos módulos Vuex
const moduleFiles = import.meta.glob('./*.js');

Object.keys(moduleFiles).forEach((key) => {
  if (key === './index.js') return;
  
  const moduleName = key.replace(/^\.\//, '').replace(/\.js$/, '');
  
  moduleFiles[key]().then((module) => {
    modules[moduleName] = module.default;
  });
});

export default modules;
