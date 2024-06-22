<template>
  <section class="z-50 fixed bottom-0 overflow-x-hidden w-full left-0 right-0">
    <div class="tradingview-widget-container  ">
      <div class="tradingview-widget-container__widget"></div>
      <div class="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank" class=" hidden">
          <span class="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  </section>

</template>


<script>
import { onMounted } from 'vue';

export default {
  setup() {
    const loadTradingViewWidget = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "symbols": [
          {
            "description": "BTC",
            "proName": "BINANCE:BTCUSD"
          },
          {
            "description": "SOL",
            "proName": "BINANCE:SOLUSD"
          },
          {
            "description": "ETH",
            "proName": "BINANCE:ETHUSDT"
          },
          {
            "description": "AVAX",
            "proName": "BINANCE:AVAXUSDT"
          },
          {
            "description": "DOGE",
            "proName": "BINANCE:DOGEUSDT"
          },
          {
            "description": "BNB",
            "proName": "BINANCE:BNBUSDT"
          },
          {
            "description": "MATIC",
            "proName": "BINANCE:MATICUSDT"
          },
          {
            "description": "",
            "proName": "BINANCE:NOTUSDT"
          }
        ],
        "showSymbolLogo": true,
        "isTransparent": true,
        "displayMode": "regular",
        "colorTheme": "dark",
        "locale": "en"
      });
      document.querySelector('.tradingview-widget-container__widget').appendChild(script);
    };

    onMounted(() => {
      loadTradingViewWidget();
    });
  }
};
</script>


<style>
swiper-container {
  width: 100%;
  height: 100%;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 200%;
    height: 1px;
    background: linear-gradient(90deg, black 50%, transparent 50%);
    background-size: 10% 1px;
    background-position: -50px;
    background-repeat: repeat-x;
    position: absolute;
    left: -10%;
    top: 40%;
    animation: line-slide 60s forwards infinite linear;
    z-index: 1;
  }

  &.swiper--bottom {
    &:after {
      animation-direction: reverse;
    }
  }
}

.swiper-wrapper {
  -webkit-transition-timing-function: linear !important;
  transition-timing-function: linear !important;
  position: relative;
}

@keyframes line-slide {
  0% {
    background-position: -5% 0;
  }

  100% {
    background-position: 100% 0;
  }
}

.swiper-slide {
  width: auto;
}
</style>