import { promises as fs } from 'fs';
import path from 'path';

export const main = async () => {
  try {
    const filePath = path.resolve(__dirname, './main.html');
    const fileContent = await fs.readFile(filePath, 'utf8');
    console.log('leitura feita com sucesso')
    return fileContent;
  } catch (error) {
    console.error('Erro ao ler o arquivo:', error);
  }
};
