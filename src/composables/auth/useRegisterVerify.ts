import { useFetch } from "@vueuse/core";
import { toast } from "vue-sonner";
import { hasExactLength } from "~/utils/validationUtils";

export function useRegisterVerify(
  password: globalThis.Ref<string | null>,
  username: globalThis.Ref<string | null>
) {
  const router = useRouter();
  const config = useRuntimeConfig();
  const registerRequestBody: any = ref<any>({});
  const userStore = useUserStore();
  const backendError = ref<string | null>(null);

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
        "Accept-Language": "fa",
      },
    },
    { immediate: false, updateDataOnError: true }
  )
    .post(() => JSON.stringify(registerRequestBody.value))
    .json();

  onFetchResponse(async (response) => {
    const access = useCookie("arnitex-access-token");
    const refresh = useCookie("arnitex-refresh-token");
    if (data.value.data.access && data.value.data.refresh) {
      access.value = data.value.data.access;
      refresh.value = data.value.data.refresh;
      console.log(access.value);

      setTimeout(async () => {
        await userStore.fetchUser(true);
        router.push({ path: "/" });
      }, 400);
    } else {
      toast.error("خطایی پیش آمد :(", {
        duration: 6000,
      });
    }
  });

  onFetchError((error) => {
    // toast.error(data.value.message, {
    //   duration: 6000,
    // });
    backendError.value = data.value.messages.otp
      ? data.value.messages.otp
      : data.value.messages.message;
    // console.error(error.message);
  });

  const verifyCodeModel = ref("");
  const submitRegisterVerify = async () => {
    backendError.value = "";
    registerRequestBody.value = {
      password1: password.value,
      password2: password.value,
      otp: verifyCodeModel.value,
    };
    if (isValidPhoneNumber(`${username.value}`)) {
      registerRequestBody.value.phone_number = `${username.value}`;
    } else if (isValidEmail(`${username.value}`)) {
      registerRequestBody.value.email = `${username.value}`;
    } else {
      return;
    }

    await execute();
  };
  const verifyEnableButton = computed(() => {
    return hasExactLength(`${verifyCodeModel.value}`, 5);
  });

  return {
    verifyCodeModel,
    verifyEnableButton,
    isFetching,
    submitRegisterVerify,
    backendError,
  };
}
