 import { toast } from "vue-sonner";
import { isEmailOrPhoneNumber } from "~/utils/validationUtils";
import VOtpInput from "vue3-otp-input";
import {
  getValidationErrorType,
  getValidationErrorTypeForPassword,
  ValidationErrorType,
  PasswordValidationErrorType,
} from "~/utils/validationUtils";
import { useFetch } from "@vueuse/core";

export function useLoginForm(
  otpInput: globalThis.Ref<InstanceType<typeof VOtpInput> | null>
) {
  const route = useRoute();
  const router = useRouter();
  const config = useRuntimeConfig();

  const username = ref<null | string>(null);
  const password = ref<null | string>(null);

  const passwordElement = ref(null);
  const passwordFocus = ref(false);

  const usernameErrors = ref<string[]>([]);
  const passwordErrors = ref<string[]>([]);
  const backendError = ref<string | null>(null);

  const requestBody: any = ref<any>({ position: "login" });

  const modalTitle = ref("کد برای شما ارسال شد");

  onMounted(() => {
    const routValue = route.query.u || "";
    if (routValue !== "") {
      const { u, ...queryWithoutNumber } = route.query;
      router.replace({ query: queryWithoutNumber });
    }
    if (isEmailOrPhoneNumber(`${routValue}`)) {
      username.value = `${routValue}`;
      passwordFocus.value = true;
    }
  });

  const resetErrorsMessage = () => {
    usernameErrors.value = [];
    passwordErrors.value = [];
    backendError.value = null;
  };

  const validationForm = () => {
    resetErrorsMessage();
    // Validation pass flag
    let validationPass = true;
    const errorType = getValidationErrorType(username.value ?? "");
    const passwordErrorType = getValidationErrorTypeForPassword(
      password.value ?? ""
    );

    switch (errorType) {
      case ValidationErrorType.None:
        // Input is valid
        break;
      case ValidationErrorType.EmptyInput:
        // Input is empty
        validationPass = false;
        usernameErrors.value.push("ورودی خالی است");
        break;
      case ValidationErrorType.InvalidEmail:
        // Input is an invalid email
        validationPass = false;
        usernameErrors.value.push("فرمت ایمیل نادرست است");
        break;
      case ValidationErrorType.InvalidPhoneNumber:
        // Input is an invalid Iranian phone number
        validationPass = false;
        usernameErrors.value.push("فرمت شماره نادرست است");
        break;
      case ValidationErrorType.InvalidInput:
        // Input is neither a valid email nor a valid Iranian phone number
        validationPass = false;
        usernameErrors.value.push("فرمت ورودی نادرست است");
        break;
    }

    switch (passwordErrorType) {
      case PasswordValidationErrorType.EmptyInput:
        validationPass = false;
        passwordErrors.value.push("پسورد نمی تواند خالی باشد");
        break;
      case PasswordValidationErrorType.TooShort:
        validationPass = false;
        passwordErrors.value.push("پسورد نمی تواند کمتر از 8 کاراکتر باشد");
        break;
      case PasswordValidationErrorType.MissingDigit:
        validationPass = false;
        passwordErrors.value.push("پسورد حداقل باید یک عدد داشته باشد");
        break;
    }
    return validationPass;
  };

  watch(password, () => {
    passwordErrors.value = [];
  });
  watch(username, () => {
    usernameErrors.value = [];
  });

  const {
    isFetching,
    error,
    data,
    execute,
    onFetchFinally,
    onFetchError,
    onFetchResponse,
  } = useFetch<{ message: string; error: string }>(
    `${config.public.apiBaseURL}accounts/send-otp/`,
    {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Accept-Language": "fa",
        // "a-language": "fa",
      },
    },
    { immediate: false, updateDataOnError: true }
  )
    .post(() => JSON.stringify(requestBody.value))
    .json();

  onFetchResponse((response) => {
    const modal: any = document.getElementById("my_modal_2");
    if (modal) {
      modal.showModal();
    }
    console.log(response.status);
  });

  onFetchError((error) => {
    // toast.error(data.value.message[0], {
    //   duration: 6000,
    // });
    backendError.value = data.value.message.message;
    console.error(error.message);
  });

  const submitForm = async () => {
    if (!validationForm()) {
      console.log("validationForm => Failed");
      return;
    }
    requestBody.value = { position: "login" };
    if (isValidPhoneNumber(`${username.value}`)) {
      requestBody.value.phone_number = `${username.value}`;
      modalTitle.value = "کد ۵ رقمی به شماره تلفن شما ارسال شد";
    } else if (isValidEmail(`${username.value}`)) {
      requestBody.value.email = `${username.value}`;
      modalTitle.value = "کد ۵ رقمی به ایمیل شما ارسال شد";
    } else {
      return;
    }

    await execute();
  };

  const buttonClass = computed(() => {
    if (
      isEmailOrPhoneNumber(`${username.value}`) &&
      isValidPassword(`${password.value}`)
    ) {
      return "bg-[#FF7028] text-white transition ease-in-out";
    } else {
      return "bg-[#262626] text-[#676767] transition ease-in-out";
    }
  });

  const enableButton = computed(() => {
    return (
      isEmailOrPhoneNumber(`${username.value}`) &&
      isValidPassword(`${password.value}`)
    );
  });

  const resendOTP = () => {
    if (otpInput) {
      otpInput.value?.clearInput();
    }
    const modal: any = document.getElementById("my_modal_2");
    if (modal) {
      modal.close();
    }
    submitForm();
    
  };
  return {
    username,
    password,
    passwordElement,
    passwordFocus,
    usernameErrors,
    passwordErrors,
    isFetching,
    submitForm,
    buttonClass,
    modalTitle,
    enableButton,
    backendError,
    resendOTP,
  };
}
