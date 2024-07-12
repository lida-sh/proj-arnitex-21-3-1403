import { useFetch } from "@vueuse/core";

export function useUserProfile() {
  const config = useRuntimeConfig();
  const access = useCookie("arnitex-access-token");

  const {
    isFetching,
    error,
    data,
    execute,
    onFetchFinally,
    onFetchError,
    onFetchResponse,
  } = useFetch<{ message: string; error: string }>(
    `${config.public.apiBaseURL}accounts/register-verify/`,
    {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: `Bearer${access.value}`,
      },
    },
    { immediate: false, updateDataOnError: true }
  ).json();

  onFetchResponse((response) => {
    const access = useCookie("arnitex-access-token");
    const refresh = useCookie("arnitex-refresh-token");
    // if (data.value.access && data.value.refresh) {
    //   access.value = data.value.access;
    //   refresh.value = data.value.refresh;
    //   router.push({ path: "/" });
    // } else {
    //   toast.error("خطایی پیش آمد :(", {
    //     duration: 6000,
    //   });
    // }
  });

  onFetchError((error) => {
    // toast.error(error.message, {
    //   duration: 6000,
    // });
    console.error(error.message);
  });
}
