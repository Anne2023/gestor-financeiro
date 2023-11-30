// Importa o componente Home que representa a página principal do aplicativo
import Home from "./Home";

// Importa o componente GlobalStyles que contém os estilos globais do aplicativo
import GlobalStyles from "./styles/globalStyles";

// Define o componente funcional App, componente principal do aplicativo
function App() {
  return (
    <>
      {/* Renderiza o componente Home */}
      <Home/>
      
      {/* Renderiza o componente GlobalStyles para aplicar os estilos globais */}
      <GlobalStyles/>
    </>
  );
}

// Exporta o componente App como padrão para ser utilizado em outros arquivos
export default App;
