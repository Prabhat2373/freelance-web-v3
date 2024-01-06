import RegisterContainer from "@/containers/auth/register/RegisterContainer";
import { FormContextProvider } from "@/contexts/FormContext";
import { Providers } from "@/features/rtk/provider";

const RegisterIndex = () => {
  return (
    <Providers>
      <FormContextProvider>
        <RegisterContainer />
      </FormContextProvider>
    </Providers>
  );
};

export default RegisterIndex;
