package mainproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class Seb39MainProject002Application {

	public static void main(String[] args) {
		SpringApplication.run(Seb39MainProject002Application.class, args);
	}

}
