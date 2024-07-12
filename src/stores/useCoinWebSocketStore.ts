// stores/useWebSocketStore.ts
import { defineStore } from "pinia";
import ReconnectingWebSocket from "reconnecting-websocket";

interface CoinData {
  coin_id: number;
  name: string;
  logo: string;
  current_price: number;
  sell_toman_price: number;
  buy_toman_price: number;
  change_24h: number;
  volume_24h: number;
  chart_image: string;
  symbol: string;
  market_cap: number;
}

export const useCoinWebSocketStore = defineStore("coinWebSocket", () => {
  const coins = ref<CoinData[]>([]);
  let socket: ReconnectingWebSocket | null = null;

  const status = ref("not-started");
  const connectWebSocket = (
    url: string,
    protocols?: string | string[],
    options?: any
  ) => {
    if (socket) {
      return;
    }
    socket = new ReconnectingWebSocket(url, protocols, options);

    socket.onmessage = (event: MessageEvent) => {
      // console.log(event);

      const data = JSON.parse(event.data);
      // console.log(data);

      coins.value = data;
    };

    socket.onopen = () => {
      console.log("WebSocket connected");
      status.value = "connected";
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected");
      status.value = "disconnected";
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
      status.value = `error: ${error.toString()}`;
    };
  };
  const reconnectWebSocket = (
    url: string,
    protocols?: string | string[],
    options?: any
  ) => {
    if (socket) {
      socket.close();
    }
    connectWebSocket(url, protocols, options);
  };
  return {
    coins,
    connectWebSocket,
    reconnectWebSocket,
  };
});
