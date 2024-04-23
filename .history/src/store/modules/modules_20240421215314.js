// modules/index.js

// Importa todos os módulos no diretório atual (exceto o index.js)
const moduleFiles = import.meta.glob('./!(index).js');

// Objeto que conterá todos os módulos
const modules = {};

// Função para carregar os módulos
async function loadModules() {
  for await (const path of Object.keys(moduleFiles)) {
    const moduleName = path.replace(/^\.\//, '').replace(/\.js$/, '');
    const module = await moduleFiles[path]();
    modules[moduleName] = module.default;
  }
}

// Carrega os módulos
loadModules();

export default modules;
