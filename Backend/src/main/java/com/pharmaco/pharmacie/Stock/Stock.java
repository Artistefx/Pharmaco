package com.pharmaco.pharmacie.Stock;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pharmaco.pharmacie.Produit.Produit;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Stock {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nom;
    private int quantite;

    @OneToOne
    private Produit produit;

    public Stock() {
    }

    public Stock(long id, String nom, int quantite) {
        this.id = id;
        this.nom = nom;
        this.quantite = quantite;
    }

    public long getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public int getQuantite() {
        return quantite;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setQuantite(int quantite) {
        this.quantite = quantite;
    }

    @JsonIgnore
    public Produit getProduit() {
        return produit;
    }

    public void setProduit(Produit produit) {
        this.produit = produit;
    }

}
