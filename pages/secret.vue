<template>
  <div class="content">
    <img :src="user.picture"/>
    <p>Hi {{ user.email }}!</p>
    <p>This is a super secure page! Try loading this page again using the incognito/private mode of your browser.</p>

    <div class="row justify-content-center">
        <b-card
          v-for="(article, index) in articles"
          :key="index"
          no-body
          class="col-6 col-md-4 mb-2"
          :img-src="article.urlToImage"
          img-top
        >
          <template v-slot:header>
            <h4 class="mb-0">{{ article.source.name }}</h4>
          </template>

          <b-card-body>
            <b-card-title>{{ article.author }}</b-card-title>
            <b-card-sub-title class="mb-2">{{ article.title }}</b-card-sub-title>
            <b-card-text>
              {{ article.description }}
            </b-card-text>
          </b-card-body>

          <b-card-footer><a :href="article.url" target="_blank" rel="noopener noreferrer">Read more</a></b-card-footer>
        </b-card>
      </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  computed: {
    user() {
      return this.$auth.user
    }
  },
  async asyncData({ app }) {
    const { articles } = await app.$axios.$get(
      `https://newsapi.org/v2/everything?q=tesla&from=2022-07-17&sortBy=publishedAt&apiKey=${
        process.env.API_KEY
      }`
    );
    return { articles };
  }
}
</script>

<style scoped>
.content {
  text-align: center;
  padding-top: 20px;
}
img {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin: 15px 0;
}
</style>
