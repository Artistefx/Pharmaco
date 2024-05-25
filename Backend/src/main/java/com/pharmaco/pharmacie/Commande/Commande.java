package com.pharmaco.pharmacie.Commande;

import java.util.List;

import com.pharmaco.pharmacie.Client.Client;
import com.pharmaco.pharmacie.Facture.Facture;
import com.pharmaco.pharmacie.Fournisseur.Fournisseur;
import com.pharmaco.pharmacie.Produit.Produit;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class Commande {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String type;
    private String date;
    private String status;
    private double MontantTotal;

    @ManyToOne
    private Client client;

    @ManyToOne
    private Fournisseur fournisseur;   

    @ManyToMany
    private List<Produit> produits;

    @OneToOne(mappedBy = "commande")
    private Facture facture;

    public Commande() {
    }

    public Commande(long id, String date, String status, double MontantTotal) {
        this.id = id;
        this.date = date;
        this.status = status;
        this.MontantTotal = MontantTotal;
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

    


}
