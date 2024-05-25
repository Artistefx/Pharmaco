package com.pharmaco.pharmacie.Fournisseur;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import java.util.List;
import com.pharmaco.pharmacie.Commande.Commande;
import com.pharmaco.pharmacie.Produit.Produit;

@Entity
public class Fournisseur {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nom;
    private String adresse;
    private String email;
    private String telephone;

    @OneToMany(mappedBy = "fournisseur")
    private List<Commande> commandes;

    @OneToMany(mappedBy = "fournisseur")
    private List<Produit> produits;

    public Fournisseur() {
    }

    public Fournisseur(long id, String nom, String adresse, String email, String telephone) {
        this.id = id;
        this.nom = nom;
        this.adresse = adresse;
        this.email = email;
        this.telephone = telephone;
    }

    public long getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public String getAdresse() {
        return adresse;
    }

    public String getEmail() {
        return email;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }



}
