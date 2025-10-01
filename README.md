# Repositório de Testes E2E com Cypress
Este repositório contém testes End-to-End (E2E) desenvolvidos com a ferramenta Cypress. O objetivo destes testes é validar a funcionalidade de login da página [Practice Test Automation](https://practicetestautomation.com/practice-test-login/).

Os cenários de teste foram criados com base nas técnicas de particionamento de equivalência e análise de valor limite, cobrindo casos de sucesso, falhas esperadas e valores de entrada que testam os limites do sistema.

## Tabela de Casos de Teste
A tabela abaixo detalha os casos de teste que foram automatizados, com base nas classes e valores definidos.


| ID    | Classe/Valor Limite | Entrada | Resultado Esperado | Resultado Obtido |
| -------- | -------- | -------- | --- | --- |
|CT001|Classe válida |Usuário: 'student'<br>Senha: 'Password123' |Login realizado com sucesso, exibindo a mensagem "Congratulations student. You successfully logged in!". |Login realizado com sucesso, exibindo a mensagem "Congratulations student. You successfully logged in!". |
|CT002|Classe inválida |Usuário: 'otheruser'<br>Senha: 'Password123' |Exibir a mensagem de erro: "Your username is invalid!".	|Exibida a mensagem de erro: "Your username is invalid!".|
|CT003|Classe Inválida	|Usuário: 'otheruser'<br>Senha: 'Password12345'|Exibir a mensagem de erro: "Your password is invalid!".	|Exibida a mensagem de erro: "Your password is invalid!".|
|CT004|Valor Limite	|Usuário: 'o'<br>Senha: 'Password12345'|Exibir a mensagem de erro: "Your username is invalid!".	|Exibida a mensagem de erro: "Your username is invalid!".|
|CT005|Valor Limite	|Usuário: (null)<br>Senha: 'Password123'|Exibir a mensagem de erro: "Your username is invalid!".|Exibida a mensagem de erro: "Your username is invalid!".|
|CT006|Valor Limite	|Usuário: 'student'<br>Senha: 'Password123'|Exibir a mensagem de erro: "Your password is invalid!".	|Exibida a mensagem de erro: "Your password is invalid!".|
