export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
      const authStore = useAuthStore();
      const token = localStorage.getItem("getToken");
      if (token) {
        authStore.setToken(token);
      }
    }
  });
  