package com.example.restfulsqlspringjpapostgres;

//import com.example.restfulsqlspringjpapostgres.Login.UserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//@RestController
@SpringBootApplication
//@EnableJpaRepositories(basePackageClasses = UserRepository.class)
public class SmartListApplication {

    public static void main(String[] args) {
        SpringApplication.run(SmartListApplication.class, args);
    }


//    @Bean
//    public WebMv cConfigurer configure() {
//        return new WebMvcConfigurer() {
//            @Override
//            public void addCorsMappings(CorsRegistry reg) {
//                reg.addMapping("/api/v1/**").allowedOrigins("http://localhost:3000/").allowedMethods("*").allowedHeaders("*");
//            }
//        };
//
//    }

//    @Bean
//    public WebMvcConfigurer configure() {
//        return new WebMvcConfigurer() {
//            @Override
//            public void addCorsMappings(CorsRegistry reg) {
//                reg.addMapping("/**").allowedOrigins("http://localhost:3000/").allowedMethods("*").allowedHeaders("*");
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
