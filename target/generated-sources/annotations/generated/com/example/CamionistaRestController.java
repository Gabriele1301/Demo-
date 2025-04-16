package generated.com.example;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;import generated.com.example.Camionista;
@RestController
public class CamionistaRestController {
	@Autowired
	private CamionistaService camionistaService;

	@GetMapping("/camionista-all")
	public ResponseEntity<List<Camionista>> all(){
		return ResponseEntity.ok().body(camionistaService.findAll());
	}
	@PostMapping("/camionista-byparams")
	public ResponseEntity<List<Camionista>> byParams(@RequestBody Map<String, String> params){
		return ResponseEntity.ok().body(camionistaService.findByParams(params));
	}
}