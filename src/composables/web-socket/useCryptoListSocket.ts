// composables/useWebSocket.ts

import ReconnectingWebSocket from "reconnecting-websocket";

interface CoinData {
  [x: string]: PropertyKey | undefined;
  name: string;
  logo: string;
  current_price: number;
  sell_toman_price: number;
  buy_toman_price: number;
  change_24h: number;
  volume_24h: number;
  market_cap: number;
  chart_image: string;

}

interface UseWebSocketReturn {
  coins: Ref<CoinData[]>;
  status: Ref<string>;
}

export function useWebSocket(
  url: string,
  protocols?: string | string[],
  options?: any
): UseWebSocketReturn {
  const coins = ref<CoinData[]>([]);
  let socket: ReconnectingWebSocket | null = null;
  const status = ref("not-started");

  const connectWebSocket = () => {
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
      status.value = `error: ${error.toString}`;
    };


  };

  onMounted(() => {
    connectWebSocket();
  });

  onUnmounted(() => {
    if (socket) {
      socket.close();
    }
  });

  return {
    coins,
    status,
  };
}
