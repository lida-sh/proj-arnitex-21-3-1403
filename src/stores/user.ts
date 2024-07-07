import { defineStore } from "pinia";
import { ref, computed } from "vue";

interface User {
  id: string;
  user: number;
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: null | string;
  address: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  national_id: string;
}

export const useUserStore = defineStore("user", () => {
  const config = useRuntimeConfig();

  const user = ref<null | User>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const setUser = (userData: User) => {
    user.value = userData;
  };

  const clearUser = () => {
    user.value = null;
  };

  const isAuthenticated = computed(() => !!user.value);

  const fetchUser = async (force: boolean = false) => {
    const access = useCookie("arnitex-access-token");
    if(!access.value){
      console.log("no cookie");
      return;
    }
    if (user.value && !force) {
      return;
    }

    loading.value = true;
    error.value = null;

    try {
      const { data } = await useFetch(
        `https://arnitex.ir/api/v1/accounts/profile/`,
        {
          timeout: 5000,
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: `Bearer ${access.value}`,
          },
        }
      );
      setUser(data.value.data as User);
    } catch (err) {
      error.value = "Failed to fetch user data";
      console.log(error.value);
    } finally {
      loading.value = false;
      console.log(user.value);
    }
  };

  return {
    user,
    setUser,
    clearUser,
    isAuthenticated,
    fetchUser,
    loading,
    error,
  };
});
