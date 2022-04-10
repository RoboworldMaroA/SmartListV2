//package com.example.restfulsqlspringjpapostgres.Login;
//
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//
//import java.util.Collection;
//import java.util.Collections;
//
////User details are build in Springboot security
////reference https://www.youtube.com/watch?v=tDZPdovCH4I
//
//public class CustomCustomerDetail implements UserDetails {
//    // this is from com.example.restfulsringjpaposgres not from a Spring
//    private LoginCustomer loginCustomer;
//
//
//    //why super????
//    public CustomCustomerDetail(LoginCustomer loginCustomer) {
//        super();
//        this.loginCustomer = loginCustomer;
//    }
//
//
//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//     return Collections.singleton(new SimpleGrantedAuthority(loginCustomer.getRole()));
//    }
//
//    @Override
//    public String getPassword() {
//        return loginCustomer.getCustomerPassword() ;
//    }
//
//    @Override
//    public String getUsername() {
//        return loginCustomer.getName();
//    }
//    //temporary true
//    @Override
//    public boolean isAccountNonExpired() {
//        return true;
//    }
//    //temporary true
//    @Override
//    public boolean isAccountNonLocked() {
//        return true;
//    }
//    //temporary true
//    @Override
//    public boolean isCredentialsNonExpired() {
//        return true;
//    }
//
//    //temporary true
//    @Override
//    public boolean isEnabled() {
//        return true;
//    }
//}
