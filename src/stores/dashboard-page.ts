import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useDashboardPageStore = defineStore("dashboard-page", () => {
  const currencyList = [
    {
      id: "toman",
      title: " تومان",
      symbol: "IRT",
    },
    {
      id: "tether",
      title: "تتر",
      symbol: "USDT",
    },
  ];

  const currencyIndex = ref(0);
  const currency = ref<undefined | any>(currencyList[currencyIndex.value]);

  const setToman = () => {
    currency.value = currencyList.find((object) => object.id === "toman");
  };
  const setTether = () => {
    currency.value = currencyList.find((object) => object.id === "tether");
  };
  watch(currencyIndex, (newValue, oldValue) => {
    if (newValue > currencyList.length - 1) {
      return;
    }
    currency.value = currencyList[newValue];
  });

  return {
    currencyList,
    currency,
    setToman,
    setTether,
    currencyIndex,
  };
});
