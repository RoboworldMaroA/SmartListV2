package com.example.restfulsqlspringjpapostgres;

import com.example.restfulsqlspringjpapostgres.student.Student;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@SpringBootApplication
//@RestController
public class ResTfulSqLspringJpaPostgresApplication {

    public static void main(String[] args) {
        SpringApplication.run(ResTfulSqLspringJpaPostgresApplication.class, args);
    }


//    @Bean
//    public WebMvcConfigurer configure() {
//        return new WebMvcConfigurer() {
//            @Override
//            public void addCorsMappings(CorsRegistry reg) {
//                reg.addMapping("/api/v1/**").allowedOrigins("http://localhost:3000/").allowedMethods("*").allowedHeaders("*");
//            }
//        };
//
//    }


//    @GetMapping
//    public String hello(){
//        return "Hello";
//        }

   //list
//    @GetMapping
//    public List<String> helloList(){
//        return List.of("Hi","I","should be list");


        //printing list of the students
//        @GetMapping
//        public List<Student> helloListStudents(){
//            return List.of(new Student(1L,
//                    "Marek",
//                    "Augustyn",
//                    LocalDate.of(2000, Month.MAY,2),
//                    21
//
//                    ));
//
//
//        }


}//end class
