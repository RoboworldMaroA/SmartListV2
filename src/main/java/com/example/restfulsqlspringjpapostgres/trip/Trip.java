package com.example.restfulsqlspringjpapostgres.trip;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.Period;

@Entity(name = "Trip")
@Table
public class Trip {
    @Id
    @SequenceGenerator(
            name = "trip_sequence",
            sequenceName = "trip_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "trip_sequence"

    )

    @Column(name="id",
            updatable = false)
    private Long id;

    private String name;

    @Column(
            name = "customerId",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String customerId;

    @Column(
            name = "weatherId",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String weatherId;

    @Column(
            name = "listId",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String listId;
    private String destinationId;
    private LocalDate departureDay;
    private LocalDate returnDay;
    private String activity;
    private String tripPassword;
    private String description;
    private String adminPrivileges;
    private String payStatus;

    @Transient//this tell this colum (age) no need to be more in database table
    private Integer age;

    public Trip() {

    }
    //public Student(Long id, String name, String email, LocalDate dob, Integer age) {
    public Trip(Long id, String name, String customerId, String weatherId, String listId, String destinationId, LocalDate departureDay, LocalDate returnDay, String activity, String tripPassword, String description, String adminPrivileges,String payStatus) {
        this.id = id;
        this.name=name;
        this.customerId = customerId;
        this.weatherId = weatherId;
        this.listId = listId;
        this.destinationId = destinationId;
        this.departureDay = departureDay;
        this.returnDay = returnDay;
        this.activity = activity;
        this.tripPassword = tripPassword;
        //this.age = age;
        this.description = description;
        this.adminPrivileges= adminPrivileges;
        this.payStatus=payStatus;
    }
    //constructor without id because it will automatically create id for us
    //public Student(String name, String email, LocalDate dob, Integer age) {//delete age from here because we want to calculate age

    public Trip(String name, String customerId, String weatherId, String listId, String destinationId, LocalDate departureDay, LocalDate returnDay, String activity, String tripPassword, String description, String adminPrivileges,String payStatus) {
        this.name=name;
        this.customerId = customerId;
        this.weatherId = weatherId;
        this.listId = listId;
        this.destinationId = destinationId;
        this.departureDay = departureDay;
        this.returnDay = returnDay;
        this.activity = activity;
        this.tripPassword = tripPassword;
        //this.age = age;
        this.description = description;
        this.adminPrivileges= adminPrivileges;
        this.payStatus=payStatus;
    }

//    public String getActivity() {
//        return activity;
//    }
//
//    public void setActivity(String address) {
//        this.activity = address;
//    }
//
//    public String getAdminPrivileges() {
//        return adminPrivileges;
//    }
//
//    public void setAdminPrivileges(String adminPrivileges) {
//        this.adminPrivileges = adminPrivileges;
//    }
////getters and setters
//
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getCustomerId() {
//        return customerId;
//    }
//
//    public void setCustomerId(String name) {
//        this.customerId = name;
//    }
//
//    public String getWeatherId() {
//        return weatherId;
//    }
//
//    public void setWeatherId(String surname) {
//        this.weatherId = surname;
//    }
//
//    public String getListId() {
//        return listId;
//    }
//
//    public void setListId(String email) {
//        this.listId = email;
//    }
//
//    public String getDestinationId() {
//        return destinationId;
//    }
//
//    public void setDestinationId(String phoneNumber) {
//        this.destinationId = phoneNumber;
//    }
//
//    public LocalDate getDepartureDay() {
//        return departureDay;
//    }
//
//    public void setDepartureDay(LocalDate dob) {
//        this.departureDay = dob;
//    }
//
//    public String getDescription() {
//        return description;
//    }
//
//    public void setDescription(String customerPasswordAgain) {
//        this.description = customerPasswordAgain;
//    }
//
//    public LocalDate getReturnDay() {
//        return returnDay;
//    }
//
//    public void setReturnDay(String sex) {
//        this.returnDay = sex;
//    }
//
//    public String getTripPassword() {
//        return tripPassword;
//    }
//
//    public void setTripPassword(String password) {
//        this.tripPassword = password;
//    }
//
//    //    public Integer getAge() {
////        return age;
////    }
//    public Integer getAge() {
//        return Period.between(this.departureDay, LocalDate.now()).getYears();
//    }
//    public void setAge(Integer age) {
//        this.age = age;
//    }


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

    public String getDestinationId() {
        return destinationId;
    }

    public void setDestinationId(String destinationId) {
        this.destinationId = destinationId;
    }

    public LocalDate getDepartureDay() {
        return departureDay;
    }

    public void setDepartureDay(LocalDate departureDay) {
        this.departureDay = departureDay;
    }

    public LocalDate getReturnDay() {
        return returnDay;
    }

    public void setReturnDay(LocalDate returnDay) {
        this.returnDay = returnDay;
    }

    public String getActivity() {
        return activity;
    }

    public void setActivity(String activity) {
        this.activity = activity;
    }

    public String getTripPassword() {
        return tripPassword;
    }

    public void setTripPassword(String tripPassword) {
        this.tripPassword = tripPassword;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAdminPrivileges() {
        return adminPrivileges;
    }

    public void setAdminPrivileges(String adminPrivileges) {
        this.adminPrivileges = adminPrivileges;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getPayStatus() {
        return payStatus;
    }

    public void setPayStatus(String payStatus) {
        this.payStatus = payStatus;
    }

    @Override
    public String toString() {
        return "Trip{" +
                "id=" + id +
                ", name='" + customerId + '\'' +
                ", surname='" + weatherId + '\'' +
                ", email='" + listId + '\'' +
                ", dob=" + departureDay +
                ", age=" + age +
                ", age=" + activity +
                '}';
    }
}///end class student
