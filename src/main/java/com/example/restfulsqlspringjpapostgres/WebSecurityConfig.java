//package com.example.restfulsqlspringjpapostgres;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationProvider;
//import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//
////this class allows crating security on the webapp
//@Configuration
//@EnableWebSecurity
//public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
//
//
//    private UserDetailsService userDetailsService;
//
//    public WebSecurityConfig(UserDetailsService userDetailsService) {
//        this.userDetailsService = userDetailsService;
//    }
//
//
//    @Bean
//    AuthenticationProvider authenticationProvider(){
//        //create Data access object
//        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
//        provider.setUserDetailsService(userDetailsService);
//        //password encoder
//         provider.setPasswordEncoder(new BCryptPasswordEncoder());
//         return  provider;
//    }
//
//
//    //generate override method
//    //everyone is permited to home page
//    // To the User only autenticated user has access and to the Admin page as well
////    @Override
////    protected void configure(HttpSecurity http) throws Exception {
////      http.authorizeRequests().antMatchers("http://localhost:8080/api/v1/**").permitAll().
////              antMatchers( "http://localhost:8080/Login").hasAuthority("USER").antMatchers("http://localhost:8080/api/v1/trip").hasAuthority("ADMIN").
////      anyRequest().authenticated( ).and().httpBasic()   ;
////    }
//}
