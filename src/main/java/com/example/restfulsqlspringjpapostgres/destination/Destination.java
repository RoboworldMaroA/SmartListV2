package com.example.restfulsqlspringjpapostgres.destination;

import javax.persistence.*;

@Entity(name = "Destination")
@Table
public class Destination {
    @Id
    @SequenceGenerator(
            name = "destination_sequence",
            sequenceName = "destination_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "destination_sequence"

    )

    @Column(name="id",
            updatable = false)
    private Long id;

    @Column(
            name = "name",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String name;

    @Column(
            name = "springTemperature",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String springTemperature;

    @Column(
            name = "summerTemperature",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String summerTemperature;

    private String autumnTemperature;
    private String winterTemperature;
    private String customerId;
    private String weatherId;
    private String listId;
    private String description;


    public Destination() {

    }
    //public Student(Long id, String name, String email, LocalDate dob, Integer age) {
//    public Destination(Long id, String name, String springTemperature, String summerTemperature, String autumnTemperature,
//                       String winterTemperature, String customerId, String weatherId,
//                       String listId, String description) {
//        this.id = id;
//        this.name = name;
//
//    }

//    public Destination(Long id, String name, String springTemperature, String summerTemperature, String autumnTemperature, String winterTemperature, String customerId, String weatherId, String listId, String description) {
//        this.id = id;
//        this.name = name;
//        this.springTemperature = springTemperature;
//        this.summerTemperature = summerTemperature;
//        this.autumnTemperature = autumnTemperature;
//        this.winterTemperature = winterTemperature;
//        this.customerId = customerId;
//        this.weatherId = weatherId;
//        this.listId = listId;
//        this.description = description;
//    }

    public Destination(Long id, String name, String springTemperature, String summerTemperature, String autumnTemperature, String winterTemperature, String customerId, String weatherId, String listId, String description) {
        this.id=id;
        this.name = name;
        this.springTemperature = springTemperature;
        this.summerTemperature = summerTemperature;
        this.autumnTemperature = autumnTemperature;
        this.winterTemperature = winterTemperature;
        this.customerId = customerId;
        this.weatherId = weatherId;
        this.listId = listId;
        this.description = description;
    }


    public Destination(String name, String springTemperature, String summerTemperature, String autumnTemperature, String winterTemperature, String customerId, String weatherId, String listId, String description) {
        this.name = name;
        this.springTemperature = springTemperature;
        this.summerTemperature = summerTemperature;
        this.autumnTemperature = autumnTemperature;
        this.winterTemperature = winterTemperature;
        this.customerId = customerId;
        this.weatherId = weatherId;
        this.listId = listId;
        this.description = description;
    }

    //constructor without id because it will automatically create id for us
    //public Student(String name, String email, LocalDate dob, Integer age) {//delete age from here because we want to calculate age


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpringTemperature() {
        return springTemperature;
    }

    public void setSpringTemperature(String springTemperature) {
        this.springTemperature = springTemperature;
    }

    public String getSummerTemperature() {
        return summerTemperature;
    }

    public void setSummerTemperature(String summerTemperature) {
        this.summerTemperature = summerTemperature;
    }

    public String getAutumnTemperature() {
        return autumnTemperature;
    }

    public void setAutumnTemperature(String autumnTemperature) {
        this.autumnTemperature = autumnTemperature;
    }

    public String getWinterTemperature() {
        return winterTemperature;
    }

    public void setWinterTemperature(String winterTemperature) {
        this.winterTemperature = winterTemperature;
    }

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }

    public String getWeatherId() {
        return weatherId;
    }

    public void setWeatherId(String weatherId) {
        this.weatherId = weatherId;
    }

    public String getListId() {
        return listId;
    }

    public void setListId(String listId) {
        this.listId = listId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", surname='" + springTemperature + '\'' +
                ", email='" + summerTemperature + '\'' +
                ", dob=" + autumnTemperature +
                ", age=" + winterTemperature +
                ", age=" + description +
                '}';
    }
}///end class student
