package com.deboxadinhos.GestUp.models;
import jakarta.persistence.*;
import java.util.List;


@Entity
@Table(name = "empresa")
public class Empresa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String cnpj;
    private String endereco;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @OneToMany(mappedBy = "empresa", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    private List<Produto> produto;

    public String getCnpj() {
        return cnpj;
    }

    public long getId() {
        return id;
    }

    public List<Produto> getProduto() {
        return produto;
    }

    public String getEndereco() {
        return endereco;
    }

    public String getName() {
        return name;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setProduto(List<Produto> produto) {
        this.produto = produto;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}
