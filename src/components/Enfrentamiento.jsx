import { Box, Text, Stack } from "@chakra-ui/react";

export function Enfrentamiento(props) {
  return (
    <Stack direction="row">
      <Box border="solid">
        <Text fontSize={30}>{props.hora}</Text>
      </Box>
      <Box border="solid" display="flex" w="100%" alignItems="center" justifyContent="center" gap={10}>
        <Box border="solid" display="flex" w="15%" justifyContent="center">
          <Text fontSize={30}>{props.equipoUno}</Text>
        </Box>
        <Box border="solid" display="flex" w="15%" justifyContent="center">
          <Text fontSize={30}>{props.equipoDos}</Text>
        </Box>
      </Box>
    </Stack>
  );
}
