// import { Avatar, Box, Flex, Text, Title } from "@mantine/core";
// import cache from "@mongez/cache";
// import { trans } from "@mongez/localization";
// import { current } from "@mongez/react";
// import { useBooleanState, useOnce } from "@mongez/react-hooks";
// import { refresh } from "@mongez/react-router";
// import ScrollPopup from "apps/admin/design-system/layouts/BaseLayout/ScrollPopup";
// import { getUserGym } from "apps/admin/home/services/home-service";
// import { useState } from "react";

// export const gymCacheKey = "selected-gym";

// export default function SelectedGym() {
//   const [isOpened, open, close] = useBooleanState(false);
//   const [data, setData] = useState([]);

//   const setGymSelection = selectedGym => {
//     cache.set(gymCacheKey, selectedGym);
//     close();
//     refresh();
//   };

//   useOnce(() => {
//     if (cache.get(gymCacheKey)) return;
//     getUserGym().then(response => {
//       setData(response.data);
//       open();
//     });
//   });

//   return (
//     <ScrollPopup centered opened={isOpened} onClose={close}>
//       <Title order={4} ta="center" py={20}>
//         {trans("selectedGymTitle")}
//       </Title>
//       <Flex justify="space-between">
//         {data.map((gym: any) => {
//           return (
//             <>
//               <Box
//                 style={{
//                   cursor: "pointer",
//                 }}
//                 ta="center"
//                 key={gym.id}
//                 onClick={() => setGymSelection(gym)}>
//                 <Avatar m="auto" size="xl" src={gym.logo_url["web-icon-1x"]} />
//                 <Text m="auto">
//                   {trans(
//                     current("localeCode") === "en" ? gym.en_name : gym.ar_name,
//                   )}
//                 </Text>
//               </Box>
//             </>
//           );
//         })}
//       </Flex>
//     </ScrollPopup>
//   );
// }
