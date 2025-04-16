package generated.com.example;

import it.ant.jobsmatcher.preprocessors.annotations.Professionista;


import it.ant.jobsmatcher.entities.Persona;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "camionista")
@Data
@EqualsAndHashCode(callSuper = false)
public class Camionista extends Persona {
}
