
package com.portfolio.iab.Service;

import com.portfolio.iab.Entity.Habilidades;
import com.portfolio.iab.Repository.RHabilidades;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class SHabilidades {
    @Autowired
    RHabilidades rHabilidades;
    
    public List<Habilidades> list() {
        return rHabilidades.findAll();
    }
    
    public Optional<Habilidades> getOne(int id){
        return rHabilidades.findById(id);
    }
    
    public Optional<Habilidades> getByNombreHab(String nombreHab){
        return rHabilidades.findByNombreHab(nombreHab);
    }
    
    public void save(Habilidades hab){
        rHabilidades.save(hab);
    }
    
    public void delete(int id){
        rHabilidades.deleteById(id);
    }
    
    public boolean existsById(int id){
        return rHabilidades.existsById(id);
    }
    
    public boolean existsByNombreHab(String nombreHab){
        return rHabilidades.existsByNombreHab(nombreHab);
    }
}
