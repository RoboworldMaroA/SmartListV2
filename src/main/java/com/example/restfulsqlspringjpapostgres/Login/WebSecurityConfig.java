//package com.example.restfulsqlspringjpapostgres.Login;
//
////import org.springframework.context.annotation.Bean;
////import org.springframework.context.annotation.Configuration;
////import org.springframework.security.authentication.AuthenticationProvider;
////import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
////import org.springframework.security.config.annotation.web.builders.HttpSecurity;
////import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
////import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
////import org.springframework.security.core.userdetails.UserDetailsService;
////import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
////
//////this class allows crating security on the webapp
////@Configuration
////@EnableWebSecurity
////public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
////
////
////    private UserDetailsService userDetailsService;
////
////    public WebSecurityConfig(UserDetailsService userDetailsService) {
////        this.userDetailsService = userDetailsService;
////    }
////
////
////    @Bean
////    AuthenticationProvider authenticationProvider(){
////        //create Data access object
////        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
////        provider.setUserDetailsService(userDetailsService);
////        //password encoder
////         provider.setPasswordEncoder(new BCryptPasswordEncoder());
////         return  provider;
////    }
////
////
////    //generate override method
////    //everyone is permited to home page
////    // To the User only autenticated user has access and to the Admin page as well
//////    @Override
//////    protected void configure(HttpSecurity http) throws Exception {
//////      http.authorizeRequests().antMatchers("http://localhost:8080/api/v1/**").permitAll().
//////              antMatchers( "http://localhost:8080/Login").hasAuthority("USER").antMatchers("http://localhost:8080/api/v1/trip").hasAuthority("ADMIN").
//////      anyRequest().authenticated( ).and().httpBasic()   ;
//////    }
////}
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.password.NoOpPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//
//@EnableWebSecurity
//public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
//
//   @Autowired
//    UserDetailsService userDetailsService;
//
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//    auth.userDetailsService(userDetailsService);
//    }
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.authorizeRequests()
//                .antMatchers("/api/v1/admin"  )
//                .hasAnyRole("ADMIN","USER")
//                .antMatchers("/api/v1/user")
//                .hasRole("USER")
//                .antMatchers("/api/v1/").permitAll().
//                antMatchers("/api/v1/trip/**").hasAnyRole("ADMIN","USER").
//                antMatchers("/api/v1/customer/**").permitAll().
//                antMatchers("/").permitAll()
//                .and().formLogin();
//    }
//
//    @Bean
//    public PasswordEncoder getPasswordEncoder(){
//
//        return NoOpPasswordEncoder.getInstance();
//    }
//
//
//
//}
