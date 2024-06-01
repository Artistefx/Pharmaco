package com.pharmaco.pharmacie.Client;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Client {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nom;
    private String prenom;
    private String dateNaissance;
    private String email;
    private String motDePasse;
    private String Sexe;


    public Client() {
    }

    public Client(long id, String nom, String prenom, String DateNaissance, String email, String MotDePasse, String Sexe) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = DateNaissance;
        this.email = email;
        this.motDePasse = MotDePasse;
        this.Sexe = Sexe;
    }

    public long getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public String getDateNaissance() {
        return dateNaissance;
    }

    public String getEmail() {
        return email;
    }

    public String getMotDePasse() {
        return motDePasse;
    }

    public String getSexe() {
        return Sexe;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public void setDateNaissance(String DateNaissance) {
        this.dateNaissance = DateNaissance;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setMotDePasse(String motDePasse) {
        this.motDePasse = motDePasse;
    }

    public void setSexe(String Sexe) {
        this.Sexe = Sexe;
    }


}
