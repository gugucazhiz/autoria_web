package com.example;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

    @RestController
    public class ExemploController {

        @PostMapping("/submit")
        public void getDados(@RequestBody DadosDTO dados) {
            System.out.println("Nome: " + dados.getNome());
            System.out.println("Idade: " + dados.getIdade());
            System.out.println("Senha: " + dados.getSenha());
            System.out.println("Email: " + dados.getEmail());
        }
    }
    class DadosDTO {
        private String nome;
        private int idade;
        private String senha;
        private String email;

        // Getters e Setters
        public String getNome() { return nome; }
        public void setNome(String nome) { this.nome = nome; }

        public int getIdade() { return idade; }
        public void setIdade(int idade) { this.idade = idade; }

        public String getSenha() { return senha; }
        public void setSenha(String senha) { this.senha = senha; }

        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
    }
