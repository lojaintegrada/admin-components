/**
 * Script que a app roda no <head> para descobrir em qual chrome está.
 *
 * Vai como string porque precisa executar antes do primeiro paint, dentro de uma tag inline — se
 * fosse componente React, rodaria depois da hidratação e a página pintaria com a paleta errada antes
 * de corrigir.
 *
 * Uso (pages router), dentro do <Head> do _document:
 *   <script dangerouslySetInnerHTML={{ __html: chromeBootstrap }} />
 * O <html> precisa de suppressHydrationWarning, porque o script muta o documentElement antes do
 * React assumir.
 *
 * Lê `top`, e não `parent`: a app roda dentro do iframe do painel, que por sua vez roda dentro da
 * shell, então `parent` é o painel e só acerta um dos arranjos. Nos casos degenerados o resultado é o
 * certo por construção — painel fora da shell não tem o atributo, e app aberta direto tem
 * `top === self`. Se a leitura falhar, o catch deixa a app na paleta legada.
 *
 * Mora neste pacote, e não no `admin-components`, porque nesta geração o `admin-components` é um
 * bundle único sem subpath: importar de lá arrastaria os componentes React para dentro do
 * `_document`. Na linha 1.x/2.x ele vive em `admin-components/chrome-bootstrap`.
 */
exports.chromeBootstrap =
  'try{var c=top.document.documentElement.dataset.chrome;if(c)document.documentElement.dataset.chrome=c}catch(e){}'
