import { useNavigate } from "@/router";
import {
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Camera, CameraType } from "react-camera-pro";
import { MdCamera } from "react-icons/md";

export default function CameraIndex() {
  const camera = useRef<CameraType | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [isCameraActive, setCameraActive] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <>
      <Flex
        direction={"column"}
        minWidth={"100vw"}
        width={"100vw"}
        minHeight={"100vh"}
        height={"100vh"}
        justifyContent={"end"}
        alignItems={"center"}
        hidden={!isCameraActive}
      >
        <Camera
          ref={camera}
          facingMode="environment"
          errorMessages={{
            noCameraAccessible: undefined,
            permissionDenied: undefined,
            switchCamera: undefined,
            canvas: undefined,
          }}
        />
        <Flex
          direction={"column"}
          minWidth={"full"}
          minHeight={"full"}
          justifyContent={"end"}
          alignItems={"center"}
        >
          <IconButton
            width={"150px"}
            height={"50px"}
            marginBottom={"20px"}
            colorPalette={"green"}
            onClick={() => {
              setImage(camera.current!.takePhoto("base64url") as string);
              setCameraActive(false);
            }}
          >
            <MdCamera />
          </IconButton>
          <Button
            width={"150px"}
            height={"50px"}
            marginBottom={"10px"}
            colorPalette={"green"}
            onClick={() => {
              setCameraActive(false);
            }}
          >
            PREVIEW MODE
          </Button>
        </Flex>
      </Flex>
      <Flex
        minWidth={"100vw"}
        width={"100vw"}
        minHeight={"100vh"}
        height={"100vh"}
        direction={"column"}
        bgColor={"yellow.400"}
        hidden={isCameraActive}
      >
        <Flex
          marginTop={"10px"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {image ? (
            <>
              <Image
                minWidth={"90vw"}
                width={"90vw"}
                height={"auto"}
                src={image}
              ></Image>
            </>
          ) : (
            <>
              <Box
                minWidth={"90vw"}
                width={"90vw"}
                minHeight={"90vh"}
                height={"90vh"}
                bgColor={"white"}
              >
                <Center>No image.</Center>
              </Box>
            </>
          )}
        </Flex>
        <Spacer maxHeight={"10px"} />
        <Flex justifyContent={"center"}>
          <Button
            width={"150px"}
            height={"50px"}
            marginX={"5px"}
            colorPalette={"green"}
            onClick={() => {
              setCameraActive(true);
            }}
          >
            CAMERA MODE
          </Button>
          <Button
            width={"150px"}
            height={"50px"}
            marginX={"5px"}
            colorPalette={"green"}
            onClick={() => {
              navigate("/");
            }}
          >
            TOP
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
