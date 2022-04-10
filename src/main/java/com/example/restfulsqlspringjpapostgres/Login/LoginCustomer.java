//package com.example.restfulsqlspringjpapostgres.Login;
//
//import javax.persistence.*;
//import java.time.LocalDate;
//import java.time.Period;
//
//@Entity(name = "Customer")
//@Table
//public class LoginCustomer {
//    @Id
//    @SequenceGenerator(
//            name = "customer_sequence",
//            sequenceName = "customer_sequence",
//            allocationSize = 1
//    )
//    @GeneratedValue(
//            strategy = GenerationType.SEQUENCE,
//            generator = "customer_sequence"
//
//    )
//
//    @Column(name="id",
//            updatable = false)
//    private Long id;
//
//    @Column(
//            name = "name",
//            nullable = false,
//            columnDefinition = "TEXT"
//    )
//    private String name;
//
//    @Column(
//            name = "surname",
//            nullable = false,
//            columnDefinition = "TEXT"
//    )
//    private String surname;
//
//    @Column(
//            name = "email",
//            nullable = false,
//            columnDefinition = "TEXT"
//    )
//    private String email;
//    private String phoneNumber;
//    private LocalDate dob;
//    private String sex;
//    private String address;
//    private String customerPassword;
//    private String customerPasswordAgain;
//    private String adminPrivileges;
//    private String role;
//
//    @Transient//this tell this colum (age) no need to be more in database table
//    private Integer age;
//
//    public LoginCustomer() {
//
//    }
//    //public Student(Long id, String name, String email, LocalDate dob, Integer age) {
//    public LoginCustomer(Long id, String name, String surname, String email, String phoneNumber, LocalDate dob, String sex, String address, String customerPassword, String customerPasswordAgain, String adminPrivileges, String role) {
//        this.id = id;
//        this.name = name;
//        this.surname = surname;
//        this.email = email;
//        this.phoneNumber = phoneNumber;
//        this.dob = dob;
//        this.sex = sex;
//        this.address=address;
//        this.customerPassword = customerPassword;
//        //this.age = age;
//        this.customerPasswordAgain = customerPasswordAgain;
//        this.adminPrivileges= adminPrivileges;
//        this.role= role;
//    }
//    //constructor without id because it will automatically create id for us
//    //public Student(String name, String email, LocalDate dob, Integer age) {//delete age from here because we want to calculate age
//
//    public LoginCustomer(String name, String surname, String email, String phoneNumber, LocalDate dob, String sex, String address, String customerPassword, String customerPasswordAgain, String adminPrivileges, String role) {
//        this.name = name;
//        this.surname = surname;
//        this.email = email;
//        this.phoneNumber = phoneNumber;
//        this.dob = dob;
//        this.sex = sex;
//        this.address=address;
//        this.customerPassword = customerPassword;
//        //this.age = age;
//        this.customerPasswordAgain = customerPasswordAgain;
//        this.adminPrivileges= adminPrivileges;
//        this.role= role;
//    }
//
//    public String getAddress() {
//        return address;
//    }
//
//    public void setAddress(String address) {
//        this.address = address;
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
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public String getSurname() {
//        return surname;
//    }
//
//    public void setSurname(String surname) {
//        this.surname = surname;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getPhoneNumber() {
//        return phoneNumber;
//    }
//
//    public void setPhoneNumber(String phoneNumber) {
//        this.phoneNumber = phoneNumber;
//    }
//
//    public LocalDate getDob() {
//        return dob;
//    }
//
//    public void setDob(LocalDate dob) {
//        this.dob = dob;
//    }
//
//    public String getCustomerPasswordAgain() {
//        return customerPasswordAgain;
//    }
//
//    public void setCustomerPasswordAgain(String customerPasswordAgain) {
//        this.customerPasswordAgain = customerPasswordAgain;
//    }
//
//    public String getSex() {
//        return sex;
//    }
//
//    public void setSex(String sex) {
//        this.sex = sex;
//    }
//
//    public String getCustomerPassword() {
//        return customerPassword;
//    }
//
//    public void setCustomerPassword(String password) {
//        this.customerPassword = password;
//    }
//
//    //    public Integer getAge() {
////        return age;
////    }
//    public Integer getAge() {
//        return Period.between(this.dob, LocalDate.now()).getYears();
//    }
//    public void setAge(Integer age) {
//        this.age = age;
//    }
//
//
//    public String getRole() {
//        return role;
//    }
//
//    public void setRole(String role) {
//        this.role = role;
//    }
//
//    @Override
//    public String toString() {
//        return "Customer{" +
//                "id=" + id +
//                ", name='" + name + '\'' +
//                ", surname='" + surname + '\'' +
//                ", email='" + email + '\'' +
//                ", dob=" + dob +
//                ", age=" + age +
//                ", age=" + address +
//                '}';
//    }
//}///end class student
