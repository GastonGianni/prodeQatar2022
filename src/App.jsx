import { ChakraProvider } from "@chakra-ui/react";
import { Enfrentamiento } from "./components/Enfrentamiento";
import NavBar from "./components/NavBar";

function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <Enfrentamiento hora="18:00" equipoUno="Argentina" equipoDos="Brasil" />
      <Enfrentamiento hora="18:00" equipoUno="Peru" equipoDos="Ecuador" />
      <Enfrentamiento hora="18:00" equipoUno="Cacacacaca" equipoDos="asdasd" />
    </ChakraProvider>
  );
}

export default App;
