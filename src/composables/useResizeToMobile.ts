export function useResizeToMobile(mobileWidth: number = 768) {
  const isMobile = ref(window.innerWidth <= mobileWidth);

  const checkWidth = () => {
    isMobile.value = window.innerWidth <= mobileWidth;
  };

  onMounted(() => {
    window.addEventListener("resize", checkWidth);
    checkWidth(); // Check initially
  });

  onUnmounted(() => {
    window.removeEventListener("resize", checkWidth);
  });

  return {
    isMobile,
  };
}
