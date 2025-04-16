package generated.com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import java.io.IOException;

import it.ant.jobsmatcher.frontendgenerator.PageGenerator;
import it.ant.jobsmatcher.preprocessors.annotations.JobsMatcherMain;


@ComponentScan(basePackages = {"com.*", "generated.*", "it.ant.jobsmatcher.*"})
@EntityScan(basePackages = {"*"})
@SpringBootApplication
public class Main {
	public static void main(String[] args){
		SpringApplication.run(Main.class, args);
	}

    
}
