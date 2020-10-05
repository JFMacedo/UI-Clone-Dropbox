import React from 'react';

import {
  Container,
  Navigation,
  DropboxLogo,
  Form
} from './styles';

const MenuForm: React.FC = () => {
  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }
 
  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>

        <button className="action--close" onClick={handleToggle}>✕</button>
      </Navigation>

      <Form>
        <span className="title">Registre-se</span>
        <span className="subtitle">preencha o formulário abaixo</span>
        <input type="text" name="name" placeholder="Nome" />
        <input type="text" name="last-name" placeholder="Sobrenome" />
        <input type="email" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Senha" />

        <button>Prossegir</button>
        <span className="terms">
          Esta página está sujeita à Politica de provacidade e aos Termos de serviço.
        </span>
      </Form>
    </Container>
  );
}

export default MenuForm;