package com.pharmaco.pharmacie.Facture;

import com.pharmaco.pharmacie.Commande.Commande;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Facture {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String description;
    private String date;
    private double MontantTotal;

    @OneToOne
    private Commande commande;

    public Facture() {
    }

    public Facture(long id, String description, String date, double MontantTotal) {
        this.id = id;
        this.description = description;
        this.date = date;
        this.MontantTotal = MontantTotal;
    }

    public long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public String getDate() {
        return date;
    }

    public double getMontantTotal() {
        return MontantTotal;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setMontantTotal(double MontantTotal) {
        this.MontantTotal = MontantTotal;
    }

}
