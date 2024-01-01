import { useRouter } from "next/navigation";
import Layout from "../Layout";

const AppLayout = (props: any) => {
  const router = useRouter();
  const pageKey = router.asPath;
  return (
    <>
      <Layout>{props.children}</Layout>
    </>
  );
};

export default AppLayout;
