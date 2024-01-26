export const statusHandler = (response: any) => {
  const status = response?.data?.success || response?.data?.status;

  return {
    isSuccess: () => status || status === "success",
    isError: () => !status || status === "error",
  };
};

export const getToken = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("token");
  }
};

export const capitalizeFirst = (str: string) => {
  // Check if the input is a valid string
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }

  // Capitalize the first letter and concatenate the rest of the string
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const isSuccess = (res) => {
  if (!res) return;

  return res?.data?.success || res?.data?.status?.toLowerCase() === "success";
};
