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
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { useAppSelector } from "hooks/reduxHooks";
import { CartItem } from "components";
import { cartReducer } from "state/slices/cart/slice";
import CartIcon from "assets/cart-icon.png";
import NintendoLogo from "assets/nintendo-logo.png";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { cartList, totalPrice } = useAppSelector(cartReducer);

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box w={60}>
          <Image w={100} rounded="lg" src={NintendoLogo} />
        </Box>

        <Flex alignItems="center">
          <Stack direction="row" spacing={7}>
            <Button onClick={toggleColorMode}>
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
                      <CartItem
                        key={product.id}
                        product={product}
                        amount={amount}
                        isDropdownItem
                      />
                    ))}

                    <MenuDivider />
                    <MenuItem
                      closeOnSelect
                      w="full"
                      _hover={{ background: "transparent" }}
                    >
                      <Center w="full">
                        <RouterLink to="/checkout" style={{ width: "100%" }}>
                          <Button
                            w="full"
                            rightIcon={<Image w={6} src={CartIcon} />}
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
