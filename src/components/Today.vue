<template>
  <div class="width-section overview-section">
    <h2 class="h2 overview-section__title" data-theme-dark-tx="var(--c-dm-white-light)">Overview - Today</h2>

    <div class="overview-section__cards">
      <!-- Facebook -->
      <div class="card" data-theme-dark-bg="var(--bg-dm-blue-dark)">
        <div class="card--flex">
          <h3 class="card__title h3" data-theme-dark-tx="var(--c-dm-blue-low)">Page views</h3>
          <img src="../assets/icon-facebook.svg" alt="Facebook">
        </div>

        <div class="card--flex">
          <span class="card__quantity" data-theme-dark-tx="var(--c-dm-white-light)">{{ networks ? returnCantMil(networks.facebook_views) : '...' }}</span>
          <span class="flex--self-end card__percentage text--danger">3%</span>
        </div>
      </div>

      <div class="card" data-theme-dark-bg="var(--bg-dm-blue-dark)">
        <div class="card--flex">
          <h3 class="card__title h3" data-theme-dark-tx="var(--c-dm-blue-low)">Likes</h3>
          <img src="../assets/icon-facebook.svg" alt="Facebook">
        </div>

        <div class="card--flex">
          <span class="card__quantity" data-theme-dark-tx="var(--c-dm-white-light)">{{ networks ? returnCantMil(networks.facebook_likes) : '...' }}</span>
          <span class="flex--self-end card__percentage text--danger">3%</span>
        </div>
      </div>

      <!-- Instagram -->
      <div class="card" data-theme-dark-bg="var(--bg-dm-blue-dark)">
        <div class="card--flex">
          <h3 class="card__title h3" data-theme-dark-tx="var(--c-dm-blue-low)">Page views</h3>
          <img src="../assets/icon-instagram.svg" alt="Instagram">
        </div>

        <div class="card--flex">
          <span class="card__quantity" data-theme-dark-tx="var(--c-dm-white-light)">{{ networks ? returnCantMil(networks.instagram_views) : '...' }}</span>
          <span class="flex--self-end card__percentage text--success">3%</span>
        </div>
      </div>

      <div class="card" data-theme-dark-bg="var(--bg-dm-blue-dark)">
        <div class="card--flex">
          <h3 class="card__title h3" data-theme-dark-tx="var(--c-dm-blue-low)">Likes</h3>
          <img src="../assets/icon-instagram.svg" alt="Instagram">
        </div>

        <div class="card--flex">
          <span class="card__quantity" data-theme-dark-tx="var(--c-dm-white-light)">{{ networks ? returnCantMil(networks.instagram_likes) : '...' }}</span>
          <span class="flex--self-end card__percentage text--success">3%</span>
        </div>
      </div>

      <!-- Twitter -->
      <div class="card" data-theme-dark-bg="var(--bg-dm-blue-dark)">
        <div class="card--flex">
          <h3 class="card__title h3" data-theme-dark-tx="var(--c-dm-blue-low)">Page views</h3>
          <img src="../assets/icon-twitter.svg" alt="Twitter">
        </div>

        <div class="card--flex">
          <span class="card__quantity" data-theme-dark-tx="var(--c-dm-white-light)">{{ networks ? returnCantMil(networks.twitter_views) : '...' }}</span>
          <span class="flex--self-end card__percentage text--success">3%</span>
        </div>
      </div>

      <div class="card" data-theme-dark-bg="var(--bg-dm-blue-dark)">
        <div class="card--flex">
          <h3 class="card__title h3" data-theme-dark-tx="var(--c-dm-blue-low)">Likes</h3>
          <img src="../assets/icon-twitter.svg" alt="Twitter">
        </div>

        <div class="card--flex">
          <span class="card__quantity" data-theme-dark-tx="var(--c-dm-white-light)">{{ networks ? returnCantMil(networks.twitter_likes) : '...' }}</span>
          <span class="flex--self-end card__percentage text--success">3%</span>
        </div>
      </div>

      <!-- Youtube -->
      <div class="card" data-theme-dark-bg="var(--bg-dm-blue-dark)">
        <div class="card--flex">
          <h3 class="card__title h3" data-theme-dark-tx="var(--c-dm-blue-low)">Page views</h3>
          <img src="../assets/icon-youtube.svg" alt="youtube">
        </div>

        <div class="card--flex">
          <span class="card__quantity" data-theme-dark-tx="var(--c-dm-white-light)">{{ networks ? returnCantMil(networks.youtube_views) : '...' }}</span>
          <span class="flex--self-end card__percentage text--success">3%</span>
        </div>
      </div>

      <div class="card" data-theme-dark-bg="var(--bg-dm-blue-dark)">
        <div class="card--flex">
          <h3 class="card__title h3" data-theme-dark-tx="var(--c-dm-blue-low)">Likes</h3>
          <img src="../assets/icon-youtube.svg" alt="youtube">
        </div>

        <div class="card--flex">
          <span class="card__quantity" data-theme-dark-tx="var(--c-dm-white-light)">{{ networks ? returnCantMil(networks.youtube_likes) : '...' }}</span>
          <span class="flex--self-end card__percentage text--danger">3%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',

  props: { 
    networks: Object
  },

  setup () {
    const returnCantMil = (value) => {
      if (value >= 11000 ) return `${value.toString().substring(0, 2)}k` 
      return value
    }

    return { returnCantMil }
  }
}

</script>

<style lang="scss" scoped>
  .overview-section__cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 25px;
    margin-top: 20px;
  }
    .card {
      height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: var(--bg-lm-blue-low);
      padding: 20px;
      cursor: pointer;
      transition: background ease .5s;
      border-radius: 5px;
      &:hover {
        background: #E1E3F0;
      }
    }

  .card--flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

    // --- Textos 
  .overview-section__title {
    color: var(--c-lm-blue-medium);
  }
    .card__title {
      color: var(--c-lm-blue-medium);
    }
    .card__quantity {
      color: var(--c-lm-blue-dark);
      font-weight: 700;
      font-size: 2rem;
      line-height: 32px;
    }
    .card__percentage {
      font-size: .7rem;
      font-weight: 600;
    }
    .flex--self-end {
      align-self: flex-end;
    }

    .text--danger { color: var(--c-lm-red-regular); }
    .text--success { color: var(--c-lm-green-regular); }
</style>