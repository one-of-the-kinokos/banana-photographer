import { Button } from "@/components/ui/button";
import { useNavigate } from "@/router";
import { Flex, Icon, Spacer } from "@chakra-ui/react";
import { LuBanana } from "react-icons/lu";

export default function RootIndex() {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        minWidth={"100vw"}
        width={"100vw"}
        minHeight={"100vh"}
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
      >
        <Icon scale={"10"} color={"yellow.500"}>
          <LuBanana />
        </Icon>
        <Spacer maxHeight={"100px"} />
        <Button
          colorPalette={"green"}
          onClick={() => {
            navigate("/camera");
          }}
        >
          Launch the camera app.
        </Button>
      </Flex>
    </>
  );
}
