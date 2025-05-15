package generated.com.example;

import it.ant.jobsmatcher.services.AbstractPersistenceService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import it.ant.jobsmatcher.services.AbstractPersistenceService.ParametricQuery;

import it.ant.jobsmatcher.services.IPersonaServiceProxy;

@Service(value="camionista")
public class CamionistaService extends AbstractPersistenceService<Camionista, Long> implements IPersonaServiceProxy<Camionista>{
	public List<Camionista> findByParams(Map<String, String> params){
		ParametricQuery pq = findByParameters();
		int paramNumber = params.size();

		if(paramNumber == 0){
			return findAll();
		}

		int i = 0;
		for(Entry<String, String> entry : params.entrySet()){
			if(i == paramNumber - 1){
				return pq.parameter(entry).execute();
			} else {
				pq.parameter(entry)
				.and();
			}
			i++;
		}

		return null;
	}

	@Override
	public Camionista instantiate(Map<String, String> params) throws Exception{
		Camionista entity = new Camionista();
		entity.fromMap(params);
		return entity;
	}

}
