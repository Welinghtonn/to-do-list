import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fbffcd",
  text: "#001F36",
  button: "#ffffff",
  border: "#fff",
  inputPlaceholder: "#001F36",
  containerBg: "#ffffff",
  checkboxBg: "#ffffff",
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

export const GlobalStyles = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Jersey+10&family=Jersey+25&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");

  html,
  body {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};

    transition: all 0.4s ease;
  }
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
  }
  header button:hover{
    border: 1px solid ${({ theme }) => theme.border};
    transition: all 0.4s ease;
  }

  .main {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
  }

  p {
    color: ${({ theme }) => theme.text};
  }

  .css-3lhuho-MuiPaper-root-MuiAlert-root{
    justify-content: center;
    align-items: center;
    background-color: #ffff00;
  }

  .css-zioonp-MuiAlert-message{
    display: flex;
    align-items: center;
    justify-content: center;
  }


  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    width: 90%;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 700px;
    gap: 10px;
    
  }

  .Title {
    font-family: "Jersey 25", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: ${({ theme }) => theme.text};
    font-size: 34px;
  }

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
  }

  ::-webkit-input-placeholder {
    font-size: 20px;
    color: ${({ theme }) => theme.inputPlaceholder};
  }

  .search {
    color: ${({ theme }) => theme.text};
    font-size: 15px;
  }

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

    cursor: pointer;
    user-select: none;

    font-family: "Rubik", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    padding: 0 6px;
  }

  .buttonDropdown{
    border: none;
    outline: none;
    background: transparent;
    color: ${({ theme }) => theme.text};
  }

  
  :where(.css-dev-only-do-not-override-vryruh).ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item{
  }
  :where(.css-dev-only-do-not-override-vryruh).ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item:hover{
    border-radius: 0;
    background-color: ${({ theme }) => theme.body};
  }

  :where(.css-dev-only-do-not-override-vryruh).ant-dropdown .ant-dropdown-menu{
    border-radius: 0;
    background-color: ${({ theme }) => theme.containerBg};
  }


  .container-sun {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 30px;

    color: #ffff00;
    background-color: ${({ theme }) => theme.containerBg};

    cursor: pointer;
  }

  .sun {
    font-size: 20px;
  }

  .content {
    display: flex;
    flex-direction: column;
    height: 50vh;
    width: 700px;
    gap: 15px;
    max-height: 70vh; 
    overflow-y: auto;

    &&::-webkit-scrollbar {
      width: 12px;            
    }
    &&::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.containerBg};  
    }

    &&::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.body};    
      border: 3px solid ${({ theme }) => theme.containerBg};  
    }
  }

  .pop-up {
    display: flex;
    justify-content: end;
    width: 700px;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: none;
    border: 1px solid ${({ theme }) => theme.border};

    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.containerBg};

    cursor: pointer;
    transition: all 0.4s ease;
  }

  .modal {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;

    background-color: ${({ theme }) => theme.containerBg};
  }
  
  .header {
    color: ${({ theme }) => theme.text};
    font-family: "Rubik", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  }
  .headerClose{
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
    right: -12px;
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
    padding: 10px 5px;
    gap: 20px;
  }

  .container-add {
    display: flex;
    height: 40px;
    border-bottom: ${({ theme }) => theme.body} solid 2px;

    background-color: ${({ theme }) => theme.containerBg};
  }

  .container-add input {
    height: 100%;
 
    color: ${({ theme }) => theme.text};
  }

  .container-itens {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: ${({ theme }) => theme.border} solid 3px;

    color: ${({ theme }) => theme.text};

    font-size: 20px;
    font-family: "Rubik", sans-serif;
    font-optical-sizing: auto;
  }

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

  label {
    display: flex;
    align-items: center;
  
    border-bottom: ${({ theme }) => theme.body} solid 2px;

    font-family: "Rubik", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  }

  label input {
    display: flex;
    align-items: center;
    justify-content: end;

  }
  
  label p{
    width: 100%;
  }

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

  .date svg{
    font-size: 25px;
  }

  .css-jupps9-MuiInputBase-root-MuiOutlinedInput-root {
    color: ${({ theme }) => theme.text};
    height: 30px;
  }
  
  .css-1dune0f-MuiInputBase-input-MuiOutlinedInput-input{
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
  
  
  .addTask {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 33%;
    padding: 10px;

    background-color: ${({ theme }) => theme.body};
    
    cursor: pointer;
  }

  .content-modal button {
    color: ${({ theme }) => theme.text};

    border: none;
  }

  .alertButton{
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

  .alertButton button{
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.containerBg};

    padding: 4px 10px;

    cursor: pointer;
  }

  @media screen and (max-width: 775px){
    .container{
      width: 100%;
    }
    .content{
      width: 90%;
    }

    .popup-content{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
    }

    .pop-up{
      width: 90%;
    }

    .modal{
      width: 90%;
    }

    .content-modal{
      width: 100% ;
    }

    .headerClose{
      width: 90%;
    }
  }
`;