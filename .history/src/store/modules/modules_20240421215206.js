// modules/index.js

// Importa todos os módulos no diretório atual (exceto o index.js)
const moduleFiles = import.meta.globEager('*.js');

// Objeto que conterá todos os módulos
const modules = {};

// Itera sobre os módulos importados
for (const path in moduleFiles) {
  if (path === './index.js') continue;
  const moduleName = path.replace(/^\.\/(.*)\.\w+$/, '$1'); // Remove o caminho e a extensão do arquivo
  modules[moduleName] = moduleFiles[path].default; // Armazena o módulo no objeto de módulos
}

export default modules;
