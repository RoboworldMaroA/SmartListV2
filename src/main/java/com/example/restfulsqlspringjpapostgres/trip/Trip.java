package com.example.restfulsqlspringjpapostgres.trip;

import com.example.restfulsqlspringjpapostgres.customer.Customer;

import javax.persistence.*;
import java.time.LocalDate;

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

    private String tripName;

//    @Column(
//            name = "customerId",
//            nullable = false,
//            columnDefinition = "TEXT"
//    )
//
//    private String customerId;

    @Column(
            name = "weatherId",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String weatherId;


    private String listId;

    private String camera;
    private String camcorder;
    private String smartphone;
    private String destinationId;
    private String destination;

    private LocalDate departureDay;
    private LocalDate returnDay;
    private String activity;
    private String tripPassword;
    private String description;
    private String adminPrivileges;
    private String payStatus;
    private String smallLuggage;
    private String mediumLuggage;
    private String largeLuggage;
    private String transport;


    @Transient//this tell this colum (age) no need to be more in database table
    private Integer age;

    public Trip() {
    }

    //public Student(Long id, String name, String email, LocalDate dob, Integer age) {
    public Trip(Long id, String tripName, String weatherId, String listId,
                String camera, String camcorder,String smartphone, String destinationId, String destination,
                LocalDate departureDay, LocalDate returnDay, String activity, String tripPassword,
                String description, String adminPrivileges, String payStatus,
                String smallLuggage, String mediumLuggage,String largeLuggage,String transport) {
        this.id = id;
        this.tripName = tripName;
//        this.customerId = customerId;
        this.weatherId = weatherId;
        this.listId = listId;
        this.camera = camera;
        this.camcorder=camcorder;
        this.smartphone=smartphone;
        this.destinationId = destination;
        this.departureDay = departureDay;
        this.returnDay = returnDay;
        this.activity = activity;
        this.tripPassword = tripPassword;
        this.description = description;
        this.adminPrivileges= adminPrivileges;
        this.payStatus=payStatus;
        this.smallLuggage=smallLuggage;
        this.mediumLuggage=mediumLuggage;
        this.largeLuggage=largeLuggage;
        this.transport=transport;
    }
    //constructor without id because it will automatically create id for us
    //public Student(String name, String email, LocalDate dob, Integer age) {//delete age from here because we want to calculate age

    public Trip(String tripName,  String weatherId, String camera,String listId,
                String camcorder,String smartphone, String destinationId, LocalDate departureDay,
                LocalDate returnDay, String activity, String tripPassword, String description,
                String adminPrivileges, String payStatus,
                String smallLuggage, String mediumLuggage,String largeLuggage,String transport) {
        this.tripName = tripName;
//        this.customerId = customerId;
        this.weatherId = weatherId;
        this.camera = camera;
        this.listId = listId;
        this.camcorder = camcorder;
        this.smartphone = smartphone;
        this.destinationId = destinationId;
        this.departureDay = departureDay;
        this.returnDay = returnDay;
        this.activity = activity;
        this.tripPassword = tripPassword;
        //this.age = age;
        this.description = description;
        this.adminPrivileges= adminPrivileges;
        this.payStatus=payStatus;
        this.smallLuggage=smallLuggage;
        this.mediumLuggage=mediumLuggage;
        this.largeLuggage=largeLuggage;
        this.transport=transport;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTripName() {
        return tripName;
    }

    public void setTripName(String name) {
        this.tripName = name;
    }

//    public String getCustomerId() {
//        return customerId;
//    }
//
//    public void setCustomerId(String customerId) {
//        this.customerId = customerId;
//    }

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

    public String getCamera() {
        return camera;
    }

    public void setCamera(String camera) {
        this.camera = camera;
    }

    public String getCamcorder() {
        return camcorder;
    }

    public void setCamcorder(String camcorder) {
        this.camcorder = camcorder;
    }

    public String getSmartphone() {
        return smartphone;
    }

    public void setSmartphone(String smartphone) {
        this.smartphone = smartphone;
    }

    public String getDestinationId() {
        return destinationId;
    }

    public void setDestinationId(String destinationId) {
        this.destinationId = destinationId;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
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

    public String getSmallLuggage() {
        return smallLuggage;
    }

    public void setSmallLuggage(String smallLuggage) {
        this.smallLuggage = smallLuggage;
    }

    public String getMediumLuggage() {
        return mediumLuggage;
    }

    public void setMediumLuggage(String mediumLuggage) {
        this.mediumLuggage = mediumLuggage;
    }

    public String getLargeLuggage() {
        return largeLuggage;
    }

    public void setLargeLuggage(String largeLuggage) {
        this.largeLuggage = largeLuggage;
    }

    public String getTransport() {
        return transport;
    }

    public void setTransport(String transport) {
        this.transport = transport;
    }

    @Override
    public String toString() {
        return "Trip{" +
                "id=" + id +
                ", name='" + Customer.class.getName() + '\'' +
                ", surname='" + weatherId + '\'' +
                ", email='" + listId + '\'' +
                ", dob=" + departureDay +
                ", age=" + age +
                ", age=" + activity +
                '}';
    }
}///end class student
