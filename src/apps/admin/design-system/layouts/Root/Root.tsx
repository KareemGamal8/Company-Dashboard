import { Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

// export default function Root({ children }: any) {
//   return <>{children}</>;
// }

export default function Root({ children }: any) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  // const [canPass, setCanPass] = useState(user.isLoggedIn());

  // useEffect(() => {
  //   if (user.isLoggedIn()) return;

  //   getGuestToken().then(response => {
  //     user.login(response.data.user);
  //     setCanPass(true);
  //   });
  // }, []);

  // if (!canPass) return <ProgressBar />;

  return <Box px={isMobile ? 0 : "md"}>{children}</Box>;
}
