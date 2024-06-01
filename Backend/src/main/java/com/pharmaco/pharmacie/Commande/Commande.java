package com.pharmaco.pharmacie.Commande;


import com.pharmaco.pharmacie.Facture.Facture;
import com.pharmaco.pharmacie.Fournisseur.Fournisseur;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class Commande {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String type;
    private String date;
    private String addresse;
    private String telephone;
    private String status;
    private String produits;
    private double MontantTotal;
    private String client;
    private String UrlOrdonnance;

    @ManyToOne
    private Fournisseur fournisseur;   

    @OneToOne(mappedBy = "commande")
    private Facture facture;

    public Commande() {
    }

    public Commande(long id, String date, String status, String Adresse , String client , String telephone , double MontantTotal , String produits , String UrlOrdonnance) {
        this.id = id; 
        this.date = date;
        this.status = status;
        this.MontantTotal = MontantTotal;
        this.addresse = Adresse;
        this.telephone = telephone;
        this.produits = produits;
        this.client = client;
        this.UrlOrdonnance = UrlOrdonnance;
    }

    public long getId() {
        return id;
    }

    public String getType() {
        return type;
    }

    public String getDate() {
        return date;
    }

    public String getStatus() {
        return status;
    }

    public double getMontantTotal() {
        return MontantTotal;
    }

    public String getAddresse() {
        return addresse;
    }

    public String getTelephone() {
        return telephone;
    }

    public String getProduits() {
        return produits;
    }

    public Fournisseur getFournisseur() {
        return fournisseur;
    }

    public Facture getFacture() {
        return facture;
    }

    public String getClient() {
        return client;
    }

    public String getUrlOrdonnance() {
        return UrlOrdonnance;
    }

    public void setFournisseur(Fournisseur fournisseur) {
        this.fournisseur = fournisseur;
    }

    public void setFacture(Facture facture) {
        this.facture = facture;
    }


    public void setId(long id) {
        this.id = id;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setMontantTotal(double MontantTotal) {
        this.MontantTotal = MontantTotal;
    }

    public void setAddresse(String addresse) {
        this.addresse = addresse;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public void setProduits(String produits) {
        this.produits = produits;
    }

    public void setClient(String client) {
        this.client = client;
    }

    public void setUrlOrdonnance(String UrlOrdonnance) {
        this.UrlOrdonnance = UrlOrdonnance;
    }
}
