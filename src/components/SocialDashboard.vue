<template>
  <div class="width-section social-section">
    <div class="social-section__header">
      <div class="social-section__titles">
        <h1 class="social-section__title h1" data-theme-dark-tx="var(--c-dm-white-light)">Social Media Dashboard</h1>
        <span class="social-section__followers span" data-theme-dark-tx="var(--c-dm-blue-low)">Total Followers: {{ plussNetworks }}</span>
      </div>

      <hr class="social-separate">

      <label class="social-section__mode" for="mode" id="btnMode" @click="darkMode">
        <span class="social-section__text-mode h3" data-theme-dark-tx="var(--c-dm-blue-low)">Dark Mode</span>
        <span class="social-section__btn" data-theme-dark-bg="var(--bg-dm-green-regular)">
          <span class="social-section__btn-circle" data-theme-dark-bg="var(--bg-dm-blue-high)"></span>
        </span>
      </label>
    </div>

    <div class="social-section__cards">
      <div class="card card-facebook">
        <div class="card-content" data-theme-dark-bg="var(--bg-dm-blue-dark)">
          <div class="card-network">
            <img src="../assets/icon-facebook.svg" class="card-network__icon" alt="Facebook">
            <span class="card-network__text" data-theme-dark-tx="var(--c-dm-blue-low)">@nathanf</span>
          </div>

          <span class="card-content__quantity" data-theme-dark-tx="var(--c-dm-white-light)">{{ networks ? returnCantMil(networks.facebook_followers) : '...' }}</span>
          <span class="card-content__followers">FOLLOWERS</span>
          <span class="card-percentage text--danger">99 Today</span>
        </div>
      </div>

      <div class="card card-twitter">
        <div class="card-content" data-theme-dark-bg="var(--bg-dm-blue-dark)">
          <div class="card-network">
            <img src="../assets/icon-twitter.svg" class="card-network__icon" alt="Twitter">
            <span class="card-network__text" data-theme-dark-tx="var(--c-dm-blue-low)">@nathanf</span>
          </div>

          <span class="card-content__quantity" data-theme-dark-tx="var(--c-dm-white-light)">{{ networks ? returnCantMil(networks.instagram_followers) : '...' }}</span>
          <span class="card-content__followers">FOLLOWERS</span>
          <span class="card-percentage text--success">99 Today</span>
        </div>
      </div>

      <div class="card card-instagram">
        <div class="card-content" data-theme-dark-bg="var(--bg-dm-blue-dark)">
          <div class="card-network">
            <img src="../assets/icon-instagram.svg" class="card-network__icon" alt="Instagram">
            <span class="card-network__text" data-theme-dark-tx="var(--c-dm-blue-low)">realnathanf</span>
          </div>

          <span class="card-content__quantity" data-theme-dark-tx="var(--c-dm-white-light)">{{ networks ? returnCantMil(networks.twitter_follewers) : '...' }}</span>
          <span class="card-content__followers">FOLLOWERS</span>
          <span class="card-percentage text--success">99 Today</span>
        </div>
      </div>

      <div class="card card-youtube">
        <div class="card-content" data-theme-dark-bg="var(--bg-dm-blue-dark)">
          <div class="card-network">
            <img src="../assets/icon-youtube.svg" class="card-network__icon" alt="Youtube">
            <span class="card-network__text" data-theme-dark-tx="var(--c-dm-blue-low)">Nathan F.</span>
          </div>

          <span class="card-content__quantity" data-theme-dark-tx="var(--c-dm-white-light)">{{ networks ? returnCantMil(networks.youtube_followers) : '...' }}</span>
          <span class="card-content__followers">SUBSCRIBERS</span>
          <span class="card-percentage text--success">99 Today</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, watchEffect } from "vue"

export default {
  name: 'SocialDashboard',

  props: { 
    networks: Object
  },

  setup (props) {
    const plussNetworks = ref();

    const darkMode = () => {
      document.querySelector(".social-section__btn-circle").classList.toggle("mode-active")
      if (localStorage.getItem("darkmode") === 'false') {
        localStorage.setItem("darkmode", true)
      } else if (localStorage.getItem("darkmode") === 'true') {
        localStorage.setItem("darkmode", false)
      } 
    }

    watchEffect(() => {
      if (props.networks) plussNetworks.value = props.networks.facebook_followers + props.networks.twitter_follewers + props.networks.instagram_followers + props.networks.youtube_followers;
    })

    const returnCantMil = (value) => {
      if (value >= 11000 ) return `${value.toString().substring(0, 2)}k` 
      return value
    }

    onMounted(() => {
      if (!localStorage.getItem("darkmode")) return localStorage.setItem("darkmode", false)
      if (localStorage.getItem("darkmode") === 'true') document.querySelector(".social-section__btn-circle").classList.toggle("mode-active")
    })

    return { darkMode, returnCantMil, plussNetworks }
  }
}
</script>

<style scoped lang="scss">
  @import '../dev/sass/breakpoint/_breakpoint.scss';
  .social-section__header {
    @include tablet {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .social-separate {
    display: none;
    @include mobile {
      display: block;
    }
  }


    .social-section__title {
      color: var(--c-lm-blue-dark);
    }
    .social-section__followers {
      font-weight: 600;
      color: var(--c-lm-blue-medium);
    }

  .social-section__mode {
    user-select: none;
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
  }
    .social-section__text-mode {
      color: var(--c-lm-blue-regular);
      font-weight: 600;
      font-size: .8rem;
    }

    .social-section__btn {
      background: var(--bg-lm-blue-regular);
      width: 50px;
      height: 25px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      position: relative;
      & > input {
        display: none;
      }
    }

    .social-section__btn-circle {
      display: inline-block;
      width: 22px;
      height: 22px;
      position: absolute;
      right: 2px;
      border-radius: 50%;
      background: var(--bg-dm-blue-light);
    }

    .mode-active {
      left: 2px;
    }

  // --- Cards
  .social-section__cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 25px;
    margin-top: 20px;
  }
  .card {
    padding-top: 5px;
    border-radius: 5px;
    overflow: hidden;
  }
  .card-content { 
    background: var(--bg-lm-blue-low);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 0;
    cursor: pointer;
    transition: background ease .5s;
    &:hover {
      background: #E1E3F0;
    }
  }
    .card-facebook { background: var(--bg-lm-light-blue-regular); }
    .card-twitter { background: var(--bg-lm-light-blue-low); }
    .card-instagram { background: linear-gradient(90deg, var(--bg-lm-orange-regular), var(--bg-lm-pink-regular)) }
    .card-youtube { background: var(--bg-lm-red-regular) }

  .card-network {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .card-network__text {
    font-size: .8rem;
    font-weight: 600;
    color: var(--c-lm-blue-dark);
  }
  .card-content__quantity {
    display: block;
    font-size: 3rem;
    font-weight: 700;
    margin-top: 10px;
    color: var(--c-lm-blue-dark);
  }
  .card-content__followers {
    font-size: .8rem;
    letter-spacing: 2px;
    color: var(--c-lm-blue-regular);
  }

  .card-percentage {
    margin-top: 10px;
    font-size: .7rem;
    font-weight: 600;
  }

  .text--danger { color: var(--c-lm-red-regular); }
  .text--success { color: var(--c-lm-green-regular); }
</style>