package generated.com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import java.io.IOException;
import java.util.HashMap;
import java.util.LinkedHashMap;

import it.ant.jobsmatcher.frontendgenerator.PageGenerator;
import it.ant.jobsmatcher.preprocessors.annotations.JobsMatcherMain;



@ComponentScan(basePackages = {"com.*", "generated.*", "it.ant.jobsmatcher.*"})
@EntityScan(basePackages = {"*"})
@SpringBootApplication
public class Main {
	public static void main(String[] args){
		SpringApplication.run(Main.class, args);
	}

    // public static void main(String[] args) throws IOException {
        
    //     PageGenerator.login();
    //     PageGenerator.profilo();
    //     PageGenerator.homepage();
    //     PageGenerator.recPass();
    //     PageGenerator.reg();

    //     // HashMap<String,Class<?>> contattiMap=new LinkedHashMap<>();
    //     // contattiMap.put("email", String.class);
    //     // contattiMap.put("pec", String.class);
    //     // contattiMap.put("cellulare", String.class);
    //     // contattiMap.put("tel.fisso", String.class);
    //     // HashMap<String,Class<?>> compettenzeMap=new LinkedHashMap<>();
    //     // compettenzeMap.put("email", String.class);
    //     // compettenzeMap.put("pec", String.class);
    //     // compettenzeMap.put("cellulare", String.class);
    //     // compettenzeMap.put("tel.fisso", String.class);

    //     // HashMap<String,HashMap<String,Class<?>>> map=new LinkedHashMap<>();
    //     // map.put("CONTATTI", contattiMap);
    //     // map.put("COMPETENZE", compettenzeMap);

    //     // for (String title : map.keySet()) {


    //     //     for (String nome : map.get(title).keySet()) {

    //     //         String tipo=map.get(title).get(nome).getSimpleName().toLowerCase();
    //     //         System.out.println(title+nome+tipo);
    //     //     }
    //     // }
                
                

    // }
}
