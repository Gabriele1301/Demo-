package generated.com.example;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;
import org.springframework.security.core.Authentication;
import it.ant.jobsmatcher.services.UserService;
import it.ant.jobsmatcher.entities.Persona;
import it.ant.jobsmatcher.entities.Esperienza;
import it.ant.jobsmatcher.services.EsperienzaService;
import it.ant.jobsmatcher.entities.Qualifica;
import it.ant.jobsmatcher.services.QualificaService;
import it.ant.jobsmatcher.entities.Disponibilita;
import it.ant.jobsmatcher.services.DisponibilitaService;
import it.ant.jobsmatcher.entities.Segnalazione;
import it.ant.jobsmatcher.services.SegnalazioneService;
import it.ant.jobsmatcher.entities.LavoroAttuale;
import it.ant.jobsmatcher.services.LavoroAttualeService;
import generated.com.example.Camionista;

@RestController
public class CamionistaRestController {

	@Autowired
	private CamionistaService camionistaService;

	@Autowired
	private EsperienzaService esperienzaService;

	@Autowired
	private QualificaService qualificaService;

	@Autowired
	private DisponibilitaService disponibilitaService;

	@Autowired
	private SegnalazioneService segnalazioneService;

	@Autowired
	private LavoroAttualeService lavoroAttualeService;

	@Autowired
	private UserService userService;

	@GetMapping("/camionista-byauth")
	public ResponseEntity<Persona> byAuth(Authentication auth){
		String username = (String)auth.getPrincipal();
		Persona p = userService.findByUName(username).getPersona();
		return ResponseEntity.ok().body(p);
	}

	@GetMapping("/camionista-all")
	public ResponseEntity<List<Camionista>> all(){
		return ResponseEntity.ok().body(camionistaService.findAll());
	}

	@PostMapping("/camionista-byparams")
	public ResponseEntity<List<Camionista>> byParams(@RequestBody Map<String, String> params){
		return ResponseEntity.ok().body(camionistaService.findByParams(params));
	}

	@GetMapping("/camionista-esperienza")
	public ResponseEntity<List<Esperienza>> esperienza(Authentication auth){
	String user = (String)auth.getPrincipal();
		return ResponseEntity.ok().body(esperienzaService.allEntityByUser(user));
	}

	@GetMapping("/camionista-qualifica")
	public ResponseEntity<List<Qualifica>> qualifica(Authentication auth){
	String user = (String)auth.getPrincipal();
		return ResponseEntity.ok().body(qualificaService.allEntityByUser(user));
	}

	@GetMapping("/camionista-disponibilita")
	public ResponseEntity<List<Disponibilita>> disponibilita(Authentication auth){
	String user = (String)auth.getPrincipal();
		return ResponseEntity.ok().body(disponibilitaService.allEntityByUser(user));
	}

	@GetMapping("/camionista-segnalazione")
	public ResponseEntity<List<Segnalazione>> segnalazione(Authentication auth){
	String user = (String)auth.getPrincipal();
		return ResponseEntity.ok().body(segnalazioneService.allEntityByUser(user));
	}

	@GetMapping("/camionista-lavoroattuale")
	public ResponseEntity<List<LavoroAttuale>> lavoroAttuale(Authentication auth){
	String user = (String)auth.getPrincipal();
		return ResponseEntity.ok().body(lavoroAttualeService.allEntityByUser(user));
	}

}