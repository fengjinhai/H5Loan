<template>
  <ul class="bannerbox">
      <li v-for="item in orderedBanners" :key="item.id" :class="item.class">
        <a :href="item.url">
        <img :src="item.src" :alt="item.title" />
    <button class="cta-button">Pelajari Lebih Lanjut</button>
      </a>
      </li>
    </ul>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        {
          id: 1,
          src: "../public/360kredi.png",
          url:"https://www.baidu.com",
          title: "360kredi",
          class: "banner1",
        },
        {
          id: 2,
          src: "../public/pinjamduit.png",
          url:"https://www.baidu.com",
          title: "pinjamduit",
          class: "banner2",
        },
        {
          id: 3,
          src: "../public/rupiahcepat.png",
          url:"https://www.baidu.com",
          title: "rupiahcepat",
          class: "banner3",
        },
      ],
    };
  },
  computed: {
    orderedBanners() {
      const params = new URLSearchParams(window.location.search);
      const orderParam = params.get("order"); 
      // 将所有 banners 按 id 顺序排列
      let orderedBanners = [...this.banners];
      // 如果存在order参数，找到对应id的banner并放在第一位
      if (orderParam) {
        const index = orderedBanners.findIndex(
          (banner) => banner.id.toString() === orderParam
        );
        if (index !== -1) {
          const [selectedBanner] = orderedBanners.splice(index, 1);
          orderedBanners.unshift(selectedBanner);
        }
      }

      return orderedBanners;
    },
  },
};
</script>

<style scoped>


.bannerbox {
  margin:80px 9px;

}
li {
  box-shadow: 5px 2px 10px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  border-radius: 8px;
  overflow: hidden;
  height: 350px;
  margin-bottom: 40px;
  background: white;
  width: 100%;
  height: 100%;
}

a{
  display: flex;
    align-items: center;
    flex-direction: column;
    text-decoration: none;
  height: 100%;
  width: 100%;
}
img {
  width: 100%;
  object-fit: contain;
}



.cta-button {
  background-color: #ff5722;
  color: white;
  margin:14px 0 ;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  animation: shake 2s ease-in-out infinite; /* 添加摇动动画 */

}
@keyframes shake {
  0% { transform: scale(1); }
  50% { transform: scale(1.04); } /* 放大 */
  100% { transform: scale(1); }   /* 回到原始大小 */
}

</style>
