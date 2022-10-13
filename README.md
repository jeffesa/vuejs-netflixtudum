# Guia do projeto Netflix Tadum
- [Rodando o projeto](#markdown-header-rodando-o-projeto)
- [Git flow](#markdown-header-git-flow)
- [Adicionando uma nova página](#markdown-header-adicionando-uma-nova-pagina)
- [Observações](#markdown-header-observacoes)
- [Classes utilitárias customizadas](#markdown-header-classes-utilitarias-customizadas)
- [Estilização customizada de elementos globais](#markdown-header-estilizacao-customizada-de-elementos-globais)
- [Componentes](#markdown-header-componentes)

## Rodando o projeto
Recomendamos o uso do gerenciador yarn para rodar o projeto e instalação de dependências.

```
# instale as dependencias
yarn

# rode o projeto em modo dev
yarn dev
```
## Git flow
Antes de iniciar o desenvolvimento de uma feature ou página, crie uma branch separada a partir da master.
```
git checkout master

git pull

git checkout -b feature/<page-name-or-feature>
```
Após finalizar o desenvolvimento, envie sua branch para o repositório:
```
git add file.txt

git commit -m "Do this"

git push -u origin feature/<page-name-or-feature>
```
Termine fazendo o PR para a branch master.

## Adicionando uma nova página
Novas páginas devem ser adicionadas na pasta frontend/components/ seguindo o padrão kebab-case, exemplo: `/nova-pagina/index.vue`

- Use a pasta nova-pagina/ para guardar todo componente não compartilhado com outras páginas.
- Todo arquivo index.vue dentro de components/ poderá ser considerado uma página.
- Após criar o arquivo da página, acesse pelo browser, exemplo: `localhost:3000/nova-pagina/`

## Observações
A importação automática de components/ está ativada nesse projeto. Saiba mais:
- https://nuxtjs.org/guides/directory-structure/components#components-discovery
- https://fullstackworld.com/2020-06-01-auto-import-components-in-nuxtjs/

Utilizamos o bulma e o buefy no projeto, então existem diversas classes e componentes prontos, veja as documentações:
- https://bulma.io/
- https://buefy.org/

Para conferir como alguns componentes/classes são utilizados dentro do próprio projeto, deixamos uma página de referência em:

frontend/pages/reference.vue



## Classes utilitárias customizadas
O bulma não disponibiliza classes utilitárias pra tudo, por isso, adicionamos as nossas.
### Espaçamento
Verifique todos os tamanhos em frontend/assets/css/spacings.scss
```
// aplica padding/margin em todos os lados:
p-#/m-#

// aplica padding/margin somente na horizontal (left e right):
p-x-#/m-x-#

// aplica padding/margin somente na vertical (top e bottom):
p-y-#/m-y-#

// margin 0 auto, pra centralizar as coisas:
m-0-a

// adicionando esse sufixo nas classes de padding e margin é a mesma coisa q utilizar no css o until($desktop), é o responsivo pra touch, serve em todas as formas de padding e margin
-touch
// exemplos:
m-t-8-touch
p-4-touch
```
### Tamanhos de fonte
Todos os tamanhos podem ser conferidos em frontend/assets/css/sizes.scss
```
// classes de font-size
.is-size-1 // 193.91px ($size-1)
.is-size-7 // 20px ($size-7)
```

### Cores
As cores definidas podem ser conferidas em frontend/assets/css/colors.scss
```
// classes de cor de texto
.has-text-purple
.has-text-primary
.has-text-gray-light

// classes de cor de fundo
.has-background-purple
.has-background-green
.has-background-yellow
```
## Estilização customizada de elementos globais
### Botão Scroll to top
Para customizar o botão, adicione o estilo como no trecho abaixo na tag `style` (sem o atributo `scoped`) no index.vue da página.
```
<style lang="scss">
@import "~assets/css/overrides";

// Scroll to top customization
.scroll-top-btn {
  background: $black;
  border-color: $pink;;
}
.scroll-top-btn .icon{
  stroke: $pink;
}
</style>
```

## Componentes
Lista dos componentes compartilhados e uso básico. Para mais detalhes, verifique o componente dentro do projeto.
### ResponsiveImage
Utilizado para carregar diferentes imagens em diferentes viewport breakpoints. Uso:
```
<template>
  <ResponsiveImage :sources="image.src" :lazyload="false" :alt="image.alt" />
</template>

<script>
import baseImage from '~/utils/baseImage'

export default {
  data() {
    return {
      image: baseImage([
        {src:'/images/page_1/section_1/mobile.png, /images/page_1/section_1/mobile@2x.png 2x', query: '(max-width: 1023px)'},
        {src:'/images/page_1/section_1/desktop.png, /images/page_1/section_1/desktop@2x.png 2x', query: ''}
      ], 'Alternative text'),
    }
  }
}
</script>
```
### LazyImage
```
<template>
  <LazyImage :src="image2.src" alt="" role="presentation" class="icon-image" />
</template>

<script>
import baseImage from '~/utils/baseImage'

export default {
  data() {
    return {
      image2: baseImage('/images/shared/success.svg', 'Success', 'Success'),
    }
  }
}
</script>
```
### CardSlider
Apesar do nome, o CardSlider não se limita apenas à cards. Para ver todas as opções de configuração, visite a página da lib usada: https://flickity.metafizzy.co/options.html
```
<template>
  <CardSlider :queries="slider_config" class="m-b-56">
    <div v-for="index in 10" :key="index" class="p-12">
      <div class="generic-card">
        {{ index }}
      </div>
    </div>
  </CardSlider>
</template>

<script>
import baseImage from '~/utils/baseImage'

export default {
  data() {
    return {
      slider_config:[
        {
          max_width: 1024, // apply config below 1025px
          config: {
            imagesLoaded:false,
            cellAlign: 'left',
            contain: true,
            draggable:true, 
            freeScroll: false,
            prevNextButtons: false,
            pageDots: true,
            wrapAround: false,
            arrowShape: "M36.9,49.6c-0.8,0.8-0.8,2,0,2.8l22.5,23c0.6,0.6,1.6,0.6,2.2,0c0.6-0.6,0.6-1.5,0-2.1L41.1,52.4 c-0.8-0.8-0.8-2,0-2.8l22.4-22.9c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.6-0.6-2.2,0L36.9,49.6z",
            selectedAttraction: 0.01,
            friction: 0.15
          }
        },
        {
          max_width: 9999, // apply config to all sizes, except to <1024
          config: {
            imagesLoaded:false,
            cellAlign: 'center',
            initialIndex: 1,
            contain: true,
            draggable:true, 
            freeScroll: false,
            prevNextButtons: false,
            pageDots: false,
            wrapAround: false,
            arrowShape: "M36.9,49.6c-0.8,0.8-0.8,2,0,2.8l22.5,23c0.6,0.6,1.6,0.6,2.2,0c0.6-0.6,0.6-1.5,0-2.1L41.1,52.4 c-0.8-0.8-0.8-2,0-2.8l22.4-22.9c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.6-0.6-2.2,0L36.9,49.6z",
            selectedAttraction: 0.01,
            friction: 0.15
          }
        }
      ]
    }
  }
}
</script>
```
### LazyImage
```
<template>
  <LazyImage :src="image2.src" alt="" role="presentation" class="icon-image" />
</template>

<script>
import baseImage from '~/utils/baseImage'

export default {
  data() {
    return {
      image2: baseImage('/images/shared/success.svg', 'Success', 'Success'),
    }
  }
}
</script>
```
### Spotify Embed
Informação completa: https://developer.spotify.com/documentation/widgets/generate/embed/
```
<template>
  <iframe
    src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
    width="300"
    height="380"
    frameborder="0"
    allowtransparency="true"
    allow="encrypted-media"
  />
</template>

<script>
export default { }
</script>
```
### Share
Componente simples, que normalmente será utilizado no final das páginas internas.
```
<template>
  <Share
    text-class="has-text-yellow"
    button-class="is-secondary"
  />
</template>

<script>
export default { }
</script>
```
### VideoFrame
Wrapper com os estilos próprios do projeto sobre uma lib que prove uma interface para a API do YouTube. O componente extende todos os listeners e props descritos aqui:
https://github.com/kaorun343/vue-youtube-embed
```
<template>
  <VideoFrame
    video-id="5qap5aO4i9A"
    style="height: 500px"
  />
</template>

<script>
export default { }
</script>
```