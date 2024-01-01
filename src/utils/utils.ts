export const statusHandler = (response: any) => {
  const status = response?.data?.success || response?.data?.status

  return {
    isSuccess: () => status || status === "success",
    isError: () => !status || status === "error",
  }
}

export const getToken = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("token")
  }
}
