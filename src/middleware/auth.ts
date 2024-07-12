import { useUserStore } from "~/stores/user";

export default defineNuxtRouteMiddleware((to) => {
  const userStore = useUserStore();

  if (!userStore.isAuthenticated && to.path !== "/login") {
    return navigateTo("/login");
  }
});
