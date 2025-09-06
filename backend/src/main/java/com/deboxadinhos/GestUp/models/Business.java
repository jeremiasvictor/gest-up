package com.deboxadinhos.GestUp.models;
import jakarta.persistence.*;
import java.util.List;
import java.util.UUID;


@Entity
@Table(name = "business")
public class Business {

    @Id
    @GeneratedValue
    private UUID id;
    private String name;
    private String cnpj;
    private String address;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "business", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    private List<Product> product;

    public String getCnpj() {
        return cnpj;
    }

    public UUID getId() {
        return id;
    }

    public List<Product> getProduct() {
        return product;
    }

    public String getAddress() { return address; }

    public String getName() {
        return name;
    }

    public User getUser() {
        return user;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setProduct(List<Product> product) {
        this.product = product;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
