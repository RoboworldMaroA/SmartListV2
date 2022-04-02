package com.example.restfulsqlspringjpapostgres.TravelingList;

import javax.persistence.*;

@Entity(name = "TravelingList")
@Table
public class TravelingList {
    @Id
    @SequenceGenerator(
            name = "list_sequence",
            sequenceName = "list_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "list_sequence"

    )
    private Long Id;

    private String name;
    //dodac stsaus tylko dla kazdej lisy a lementy w liscie beda tylko na fron end
    @Column(
            name = "documentsListStatus",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String documentsListStatus;

    @Column(
            name = "beachListStatus",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String beachListStatus;

    @Column(
            name = "HikingListStatus",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String essentialListStatus;




    public TravelingList() {

    }

    public TravelingList(Long Id, String name, String documentsListStatus,
                         String beachListStatus, String essentialListStatus) {
        this.Id = Id;
        this.name = name;
        this.documentsListStatus = documentsListStatus;
        this.beachListStatus = beachListStatus;
        this.essentialListStatus = essentialListStatus;
    }

    public TravelingList(String name, String documentsListStatus, String beachListStatus,
                         String essentialListStatus) {
        this.name = name;
        this.documentsListStatus = documentsListStatus;
        this.beachListStatus = beachListStatus;
        this.essentialListStatus = essentialListStatus;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        this.Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDocumentsListStatus() {
        return documentsListStatus;
    }

    public void setDocumentsListStatus(String documentsListStatus) {
        this.documentsListStatus = documentsListStatus;
    }

    public String getBeachListStatus() {
        return beachListStatus;
    }

    public void setBeachListStatus(String beachListStatus) {
        this.beachListStatus = beachListStatus;
    }

    public String getEssentialListStatus() {
        return essentialListStatus;
    }

    public void setEssentialListStatus(String essentialListStatus) {
        this.essentialListStatus = essentialListStatus;
    }


    @Override
    public String toString() {
        return "Trip{" +
                "id=" + Id +
                ", name='" + documentsListStatus + '\'' +
                ", surname='" + beachListStatus + '\'' +
                ", email='" + documentsListStatus + '\'' +
                '}';
    }
}///end class student
