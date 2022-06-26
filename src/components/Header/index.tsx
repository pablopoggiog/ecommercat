import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  useColorMode,
  Center,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useAppSelector } from "hooks/reduxHooks";
import { CartItem } from "components";
import { cartReducer } from "state/slices/cart/slice";
import { ReactComponent as CartIcon } from "assets/cart-icon.svg";
import NintendoLogo from "assets/nintendo-logo.png";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { cartList, totalPrice } = useAppSelector(cartReducer);

  return (
    <Box px={4} borderBottom="1px lightgray solid">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box w={60}>
          <Image w={100} rounded="lg" src={NintendoLogo} alt="Nintendo logo" />
        </Box>

        <Flex alignItems="center">
          <Stack direction="row" spacing={7}>
            <Button colorScheme="teal" onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Menu closeOnSelect={false}>
              <MenuButton
                as={Button}
                rounded="full"
                variant="link"
                cursor="pointer"
                minW={0}
              >
                <Avatar
                  size="sm"
                  src="https://avatars.dicebear.com/api/male/username.svg"
                />
              </MenuButton>
              <MenuList alignItems="center">
                <br />
                <Center>
                  <Avatar
                    size="2xl"
                    src="https://avatars.dicebear.com/api/male/username.svg"
                  />
                </Center>
                <br />
                <Center>
                  <Text fontWeight="extrabold">Your Cart</Text>
                </Center>
                <br />
                <Center>
                  <Text mb={3} fontWeight="semibold">
                    {cartList.length
                      ? `Total: $${totalPrice}`
                      : "Nothing here yet!"}
                  </Text>
                </Center>
                {!!cartList.length && (
                  <>
                    <MenuDivider />

                    {cartList?.map(({ product, amount }, index) => (
                      <MenuItem
                        key={product.id}
                        justifyContent="space-between"
                        gap={5}
                        maxW="90vw"
                      >
                        <CartItem
                          product={product}
                          amount={amount}
                          isDropdownItem
                        />
                      </MenuItem>
                    ))}

                    <MenuDivider />
                    <MenuItem closeOnSelect w="full">
                      <Center w="full">
                        <RouterLink to="/checkout" style={{ width: "100%" }}>
                          <Button
                            colorScheme="teal"
                            w="full"
                            rightIcon={<CartIcon />}
                          >
                            Checkout
                          </Button>
                        </RouterLink>
                      </Center>
                    </MenuItem>
                  </>
                )}
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};
