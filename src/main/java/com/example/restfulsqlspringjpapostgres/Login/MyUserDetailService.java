//package com.example.restfulsqlspringjpapostgres.Login;
//
//import com.example.restfulsqlspringjpapostgres.Login.model.MyUserDetails;
//import com.example.restfulsqlspringjpapostgres.Login.model.User;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import java.util.Optional;
//
//
//@Service
//public class MyUserDetailService implements UserDetailsService {
//
//    @Autowired
//    UserRepository userRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
//        //return new MyUserDetails(s);
//        Optional<User> user =userRepository.findByUserName(userName);
//        user.orElseThrow(()-> new UsernameNotFoundException("Not found"+userName) );
//
//        return  user.map(MyUserDetails::new).get();
//    }
//}
