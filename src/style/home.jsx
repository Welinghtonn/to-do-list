import { createGlobalStyle } from "styled-components";

// Temas
export const lightTheme = {
  body: "#ffffff",
  text: "#001F36",
  button: "#001F36",
  border: "#001F36",
  inputPlaceholder: "#001F36",
  containerBg: "#fbffcd",
  checkboxBg: "#001F36",
  checkboxBorder: "#79ae92"
};

export const darkTheme = {
  body: "#001F36",
  text: "#fbffcd",
  button: "#1c5560",
  border: "#79ae92",
  inputPlaceholder: "#fbffcd",
  containerBg: "#1c5560",
  checkboxBg: "#232323",
  checkboxBorder: "#79ae92"
};

// Estilos Globais
export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Jersey+10&family=Jersey+25&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");

  /* Estilos Base */
  html, body {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};
    transition: all 0.4s ease;
  }

  /* Estilos de Botão do Cabeçalho */
  header button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 30px;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.containerBg};
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover {
      border: 1px solid ${({ theme }) => theme.border};
    }
  }

  /* Layout Principal */
  .main {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 80px;
  }

  /* Estilos de Parágrafo */
  p {
    color: ${({ theme }) => theme.text};
  }

  /* Estilos de Alertas */
  .css-3lhuho-MuiPaper-root-MuiAlert-root {
    justify-content: center;
    align-items: center;
    background-color: #ffff00;
  }

  .css-zioonp-MuiAlert-message {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Estilos do Container Superior */
  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    width: 90%;
  }

  /* Estilos do Container */
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 700px;
    gap: 10px;
  }

  /* Estilos do Título */
  .Title {
    font-family: "Jersey 25", sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.text};
    font-size: 34px;
  }

  /* Estilos da Barra de Pesquisa */
  .container-search {
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: solid 3px ${({ theme }) => theme.border};
  }

  input {
    width: 100%;
    height: 30px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.text};
    background: transparent;

    &::placeholder {
      font-size: 20px;
      color: ${({ theme }) => theme.inputPlaceholder};
    }
  }

  .search {
    color: ${({ theme }) => theme.text};
    font-size: 15px;
  }

  /* Estilos das Opções */
  .container-options {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .dropDown {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.containerBg};
    border: solid 2px ${({ theme }) => theme.border};
    cursor: pointer;
    user-select: none;
    font-family: "Rubik", sans-serif;
    padding: 0 6px;
  }

  .buttonDropdown {
    border: none;
    outline: none;
    background: transparent;
    color: ${({ theme }) => theme.text};
  }

  /* Estilos do Dropdown */
  :where(.css-dev-only-do-not-override-vryruh).ant-dropdown .ant-dropdown-menu{
    border-radius: 0;
    background-color: ${({ theme }) => theme.containerBg};
  }

  .css-dev-only-do-not-override-vryruh.ant-dropdown .ant-dropdown-menu-item:hover {
    border-radius: 0;
    background-color: ${({ theme }) => theme.body};
  }

  /* Estilos do Sol */
  .container-sun {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 30px;
    color: #ffff00;
    background-color: ${({ theme }) => theme.containerBg};
    border: solid 2px ${({ theme }) => theme.border};
    cursor: pointer;
  }

  .sun {
    font-size: 20px;
  }

  /* Estilos de Conteúdo */
  .content {
    display: flex;
    flex-direction: column;
    height: 50vh;
    width: 700px;
    gap: 15px;
    max-height: 70vh; 
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 12px;            
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.containerBg};  
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.body};    
      border: 3px solid ${({ theme }) => theme.containerBg};  
    }
  }

  /* Estilos do Pop-up */
  .pop-up {
    display: flex;
    justify-content: end;
  }

  /* Estilos do Botão */
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    width: 130px;
    height: 30px;
    border: none;
    border: 1px solid ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.containerBg};
    cursor: pointer;
    transition: all 0.4s ease;
  }

  /* Estilos do Modal */
  .modal {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: ${({ theme }) => theme.containerBg};
  }

  .header {
    color: ${({ theme }) => theme.text};
    font-family: "Rubik", sans-serif;
    font-weight: 400;
  }

  .headerClose {
    display: flex;
    justify-content: end;
    width: 100%;
    position: absolute;
  }

  .headerClose > .close {
    display: block;
    padding: 2px 5px;
    line-height: 20px;
    position: absolute;
    top: -22px;
    border: 1px solid ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};
    font-size: 24px;
    cursor: pointer;
  }

  .content-modal {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 700px;
    padding: 10px 0;
    gap: 20px;
  }

  /* Estilos do Container para Adicionar */
  .container-add {
    display: flex;
    height: 40px;
    border-bottom: solid 2px ${({ theme }) => theme.border};
    background-color: ${({ theme }) => theme.containerBg};
  }

  .container-add input {
    height: 100%;
    color: ${({ theme }) => theme.text};
  }

  /* Estilos dos Itens do Container */
  .container-itens {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: solid 3px ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.text};
    font-size: 20px;
    font-family: "Rubik", sans-serif;
  }

  /* Estilos da Caixa de Seleção */
  .checkbox {
    display: flex;
    align-items: center;
    height: 30px;
    justify-content: center;
  }

  .checkbox input {
    outline: none;
    background: ${({ theme }) => theme.checkboxBg};
    cursor: pointer;
  }

  .checkbox p {
    height: 100%;
  }

  .labelCheckbox {
    display: flex;
    align-items: end;
    justify-content: space-between;
    border-bottom: solid 2px ${({ theme }) => theme.body};
  }

  /* Estilos do Formulário */
  form label {
    display: flex;
    align-items: end;
    justify-content: space-between;
    border-bottom: solid 2px ${({ theme }) => theme.border};
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    width: 400px;
  }

  label input {
    display: flex;
    align-items: center;
    justify-content: end;
  }

  /* Estilos de Data */
  .date {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .date button {
    border: none;
    outline: none;
    cursor: pointer;
    color: red;
    background: transparent;
  }

  .date svg {
    font-size: 25px;
  }

  .css-jupps9-MuiInputBase-root-MuiOutlinedInput-root {
    color: ${({ theme }) => theme.text};
    height: 30px;
  }
  
  .css-1dune0f-MuiInputBase-input-MuiOutlinedInput-input {
    outline: none;
    border: none;
  }

  .dateInput {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};
    outline: none;
    border: none;
  }
  
  /* Estilos para Adicionar Tarefa */
  .containerAddTask {
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;
  }
  
  .addTask {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    width: 90px;
    padding: 10px;
    background-color: ${({ theme }) => theme.body};
    border: solid 2px ${({ theme }) => theme.border};
    cursor: pointer;
  }

  .content-modal button {
    color: ${({ theme }) => theme.text};
  }

  /* Estilos do Botão de Alerta */
  .alertButton {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .css-1gl5z62-MuiPaper-root-MuiAlert-root {
    width: 450px;
  }

  .css-zioonp-MuiAlert-message {
    width: 100%;
  }

  .alertButton button {
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.containerBg};
    padding: 4px 10px;
    cursor: pointer;
  }

  /* Media Queries */
  @media screen and (max-width: 775px) {
    .button{
      width: 80px;
      font-size: 9px;
      gap: 3px;
    }

    .headerClose > .close{
      right: -43px;
    }
    .container {
      width: 100%;
    }
    .content {
      width: 90%;
    }
    .modal {

      width: 100%;
    }
    .content-modal {
      width: 100%;
    }
    .headerClose {
      width: 90%;
    }
  }

  @media screen and (max-width: 476px) {
    .headerClose > .close{
      right: -29px;
    }

    form label {
      width: 100%;
      align-items: start;
      flex-direction: column;
    }
  }
`;
