<template>
  <div class="body">
    <div :class="`gradient-header-${themeType}`">
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div
        :class="`d-flex justify-start align-center base-container text-color-p-${themeType}S ma-0 w-100`"
      >
        <div class="d-flex flex-column">
          <vue-typed-js
            :type-speed="80"
            :back-speed="40"
            :strings="[
              'OLÁ!',
              'meu nome é José Trovarelli Neto',
              'Desenvolvedor web front-end :)',
            ]"
          >
            <h1><span class="typing"></span></h1>
          </vue-typed-js>
        </div>
      </div>
      <div :class="`header-${themeType}`"></div>
    </div>
    <div class="base-container mt-12">
      <v-row
        v-if="show.count1"
        :class="` translate-from-left relative icons_index-${themeType}-sr mt-12`"
      >
        <v-col md="6" cols="12">
          <v-row
            :class="`bg-color-s-${themeType} pa-8`"
            style="border-radius: 20px"
          >
            <v-col
              v-for="(icon, index) in themeType !== 'dark'
                ? iconsLangLight
                : iconsLangDark"
              :key="index"
              md="4"
              cols="3"
              class="d-flex justify-center align-center"
            >
              <img
                class="img_header"
                :src="requireImage(icon.name)"
                @mouseover="changeText(icon.name)"
                @mouseleave="changeText('default')"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col md="6" cols="12" class="px-12 relative">
          <div class="come_to_right">
            <h3 class="pa-8" v-html="dynamicText.text"></h3>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs)
export default {
  data() {
    return {
      dynamicText: {
        text: 'Sejam bem-vindos, aqui estão algumas das tecnologias que venho aprimorando desde que comecei minha carreira na área de desenvolvimento web.',
      },
      show: {
        count1: false,
        count2: false,
        count3: false,
      },
      iconsLangLight: [
        {
          name: 'vue',
        },

        {
          name: 'ts',
        },
        {
          name: 'react',
        },
        {
          name: 'html',
        },
        {
          name: 'css',
        },

        {
          name: 'js',
        },
      ],
      iconsLangDark: [
        {
          name: 'vue',
        },

        {
          name: 'ts',
        },
        {
          name: 'react',
        },
        {
          name: 'html2',
        },
        {
          name: 'css2',
        },

        {
          name: 'js2',
        },
      ],
    }
  },

  computed: {
    themeType() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
  },
  created() {
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    changeText(img) {
      switch (img) {
        case 'default':
          this.dynamicText.text =
            'Sejam bem-vindos, aqui estão algumas das tecnologias que venho aprimorando desde que comecei minha carreira na área de desenvolvimento web.'
          break
        case 'vue':
          this.dynamicText.text = `Vue.js é um framework de progressivo de JavaScript para a construção de interfaces de usuário. Trabalho com Vue.js a cerca de ${this.getTimeDate(
            '2021',
            '09',
            '02'
          )}, e nesse meio tempo adquiri muita experiência não só na utilização desse framework, mas também na utilização e fundamentos do JavaScript.`
          break
        case 'ts':
          this.dynamicText.text = `TypeScript é um superconjunto de JavaScript, ou seja, um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript. Trabalhei em alguns projetos utilizando TypeScript e pretendo montar alguns sozinho, para mais informações sobre meus projetos clique aqui.`
          break
        case 'react':
          this.dynamicText.text = `O React é uma biblioteca criada para construir telas de forma declarativa. Minha experiência com React é baseada apenas em cursos, bootcamps e projetos próprios. Caso tenha interesse, poderá ver alguns dos meus projetos em React clicando aqui.`
          break
        case 'html':
          this.dynamicText.text = `HTML é uma linguagem de marcação de textos utilizada principalmente na estruturação de páginas web. Tenho estudado e trabalhado com HTML desde que entrei na faculdade(cerca de ${this.getTimeDate(
            '2021',
            '07',
            '02'
          )}), formando uma base solida de conhecimento e utilização dessa tecnologia.`
          break
        case 'html2':
          this.dynamicText.text = `HTML é uma linguagem de marcação de textos utilizada principalmente na estruturação de páginas web. Tenho estudado e trabalhado com HTML desde que entrei para faculdade(cerca de ${this.getTimeDate(
            '2020',
            '07',
            '02'
          )}), formando uma base solida de conhecimento e utilização dessa tecnologia.`
          break
        case 'css':
          this.dynamicText.text = `CSS é uma linguagem de estilização em cascatas utilizada na estilização e animação de elementos de páginas web. Tenho estudado e trabalhado com CSS desde que entrei para faculdade(cerca de ${this.getTimeDate(
            '2020',
            '07',
            '02'
          )}), formando uma base solida de conhecimento e utilização dessa tecnologia.`
          break
        case 'css2':
          this.dynamicText.text = `CSS é uma linguagem de estilização em cascatas utilizada na estilização e animação de elementos de páginas web. Tenho estudado e trabalhado com CSS desde que entrei para faculdade(cerca de ${this.getTimeDate(
            '2020',
            '07',
            '02'
          )}), formando uma base solida de conhecimento e utilização dessa tecnologia.`
          break
        case 'js':
          this.dynamicText.text = `JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web. Tenho estudado e trabalhado com Javascript desde que entrei para faculdade(cerca de ${this.getTimeDate(
            '2020',
            '07',
            '02'
          )}) formando uma base solida de conhecimento e utilização dessa tecnologia.`
          break
        case 'js2':
          this.dynamicText.text = `JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web. Tenho estudado e trabalhado com Javascript desde que entrei para faculdade(cerca de ${this.getTimeDate(
            '2020',
            '07',
            '02'
          )}) formando uma base solida de conhecimento e utilização dessa tecnologia.`
          break
      }
    },
    getTimeDate(y, m, d) {
      const date2 = new Date(y, m, d)
      const date1 = new Date()
      const diff = Math.floor(date1.getTime() - date2.getTime())
      const day = 1000 * 60 * 60 * 24

      const days = Math.floor(diff / day)
      const months = Math.floor(days / 31)
      const years = Math.floor(months / 12)

      let message = ''

      if (years > 0 && years <= 1) {
        message += years + ' ano \n'
      } else if (years > 1) {
        message += years + ' anos \n'
      } else {
        message += months + ' meses '
      }

      return message
    },
    requireImage(img) {
      return require(`../static/img/${img}.png`)
    },
    handleScroll(event) {
      const vhPixels =
        (100 * window.scrollY) / document.documentElement.clientHeight

      if (vhPixels >= 57) this.show.count1 = true
      if (vhPixels >= 85) this.show.count2 = true
    },
  },
}
</script>

<style lang="scss" scoped>
@import '/assets/variables.scss';
.w-100 {
  height: 100%;
}
.relative {
  position: relative;
}
.translate-from-right {
  animation-name: showAfter;
  animation-duration: 1s;
  opacity: 0;
  animation-fill-mode: forwards;
  animation-direction: alternate;
  @keyframes showAfter {
    0% {
      transform: translateX(50vw);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

.translate-from-left {
  animation-name: showAfter2;
  animation-duration: 1s;
  opacity: 0;
  animation-fill-mode: forwards;
  animation-direction: alternate;
  @keyframes showAfter2 {
    0% {
      transform: translateX(-50vw);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

.gradient-header-dark {
  background: linear-gradient(132deg, #fc415a, #591bc5, #212335);
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0px;

  .cube {
    position: absolute;
    top: 80vh;
    left: 45vw;
    width: 10px;
    height: 10px;
    border: solid 1px #d7d4e4;
    transform-origin: top left;
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    animation: cube 12s ease-in forwards infinite;
  }
  .cube:nth-child(2n) {
    border-color: #fff;
  }
  .cube:nth-child(2) {
    animation-delay: 2s;
    left: 25vw;
    top: 40vh;
  }
  .cube:nth-child(3) {
    animation-delay: 4s;
    left: 75vw;
    top: 50vh;
  }
  .cube:nth-child(4) {
    animation-delay: 6s;
    left: 90vw;
    top: 10vh;
  }
  .cube:nth-child(5) {
    animation-delay: 8s;
    left: 10vw;
    top: 85vh;
  }
  .cube:nth-child(6) {
    animation-delay: 10s;
    left: 50vw;
    top: 10vh;
  }
}
.gradient-header-light {
  background: linear-gradient(
    132deg,
    rgb(250, 115, 97),
    rgb(250, 253, 87),
    rgb(255, 177, 32)
  );
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0px;

  .cube {
    position: absolute;
    top: 80vh;
    left: 45vw;
    width: 10px;
    height: 10px;
    border: solid 1px #d7d4e4;
    transform-origin: top left;
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    animation: cube 12s ease-in forwards infinite;
  }
  .cube:nth-child(2n) {
    border-color: #fff;
  }
  .cube:nth-child(2) {
    animation-delay: 2s;
    left: 25vw;
    top: 40vh;
  }
  .cube:nth-child(3) {
    animation-delay: 4s;
    left: 75vw;
    top: 50vh;
  }
  .cube:nth-child(4) {
    animation-delay: 6s;
    left: 90vw;
    top: 10vh;
  }
  .cube:nth-child(5) {
    animation-delay: 8s;
    left: 10vw;
    top: 85vh;
  }
  .cube:nth-child(6) {
    animation-delay: 10s;
    left: 50vw;
    top: 10vh;
  }
}
@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes cube {
  from {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: scale(20) rotate(960deg) translate(-50%, -50%);
    opacity: 0;
  }
}
.header-dark {
  position: absolute;
  margin: auto;
  top: auto;
  right: 0;
  left: 0;
  bottom: 0;
  height: 40%;
  width: 100%;
  background: linear-gradient(to top, $black 5%, transparent 100%);
}
.header-light {
  position: absolute;
  margin: auto;
  top: auto;
  right: 0;
  left: 0;
  bottom: 0;
  height: 40%;
  width: 100%;
  background: linear-gradient(to top, white 5%, transparent 100%);
}
.icons_index-dark-sr {
  background: #212335 !important;
  border-radius: 20px;
  box-shadow: -10px 8px #591bc5;
}
.icons_index-light-sr {
  background: #faf4a2 !important;
  border-radius: 20px;
  box-shadow: -10px 8px rgb(250, 160, 42);
}
.icons_index-dark-sl {
  background: #212335 !important;
  border-radius: 20px;
  box-shadow: 10px 8px #591bc5;
}
.icons_index-light-sl {
  background: #faf4a2 !important;
  border-radius: 20px;
  box-shadow: -10px 8px rgb(250, 160, 42);
}
.img_header {
  cursor: pointer;
  width: 80px;
  transform: scale(1);
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
  }
}
</style>
