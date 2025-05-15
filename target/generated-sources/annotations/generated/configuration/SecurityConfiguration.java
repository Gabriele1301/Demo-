package generated.configuration;

import org.springframework.context.annotation.Configuration;
import it.ant.jobsmatcher.security.AbstractSecurityConfiguration;
@Configuration
public class SecurityConfiguration extends AbstractSecurityConfiguration{
	@Override
	protected String[] endpointProfessionistaFromConfig(){
		String[] endpoint = new String[]{
			"/camionista-all",
			"/camionista-byauth",
			"/camionista-byparams",
			"/camionista-esperienza",
			"/camionista-qualifica",
			"/camionista-disponibilita",
			"/camionista-lavoroattuale",
			"/camionista-segnalazione",
		};
		return endpoint;
	}

	@Override
	protected String[] endpointClienteFromConfig(){
		String[] endpoint = new String[]{
		};
		return endpoint;
	}

	@Override
	protected String[] endpointDebugFromConfig(){
		String[] endpoint = new String[]{
		};
		return endpoint;
	}

}

