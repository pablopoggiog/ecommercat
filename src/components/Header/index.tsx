// import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  // Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  // useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { useAppSelector, useAppDispatch } from "hooks/reduxHooks";
import {
  cartReducer,
  incrementProductAmount,
  decrementProductAmount,
} from "state/slices/cart/slice";

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded="md"
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.200", "gray.700"),
//     }}
//     href={"#"}
//   >
//     {children}
//   </Link>
// );

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const dispatch = useAppDispatch();
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const { cartList, totalPrice } = useAppSelector(cartReducer);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box w={60}>
            <CheckCircleIcon w="unset" h={7} />
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu closeOnSelect={false}>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <Text fontWeight="extrabold">Your Cart</Text>
                  </Center>
                  <br />
                  <Center>
                    <Text fontWeight="semibold">
                      {cartList.length
                        ? `Total: $${totalPrice}`
                        : "Nothing here yet!"}
                    </Text>
                  </Center>
                  <MenuDivider />

                  {cartList.map(({ product: { name, id }, amount }) => {
                    const increment = () =>
                      dispatch(incrementProductAmount(id));
                    const decrement = () =>
                      dispatch(decrementProductAmount(id));

                    return (
                      <MenuItem justifyContent="space-between" gap={5}>
                        <Text fontWeight="bold">{name}</Text>
                        <Flex gap={3} align="center">
                          <Button onClick={decrement}>-1</Button>
                          <Text fontSize="lg" fontWeight="bold">
                            {amount}
                          </Text>
                          <Button onClick={increment}>+1</Button>
                        </Flex>
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
