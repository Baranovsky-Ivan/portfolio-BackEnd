
package com.portfolio.iab.Controller;

import com.portfolio.iab.Dto.dtoHabilidades;
import com.portfolio.iab.Entity.Habilidades;
import com.portfolio.iab.Security.Controller.Mensaje;
import com.portfolio.iab.Service.SHabilidades;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/skills")
@CrossOrigin(origins = "https://argentina-programa-f4136.web.app")
public class CHabilidades {
    @Autowired
    SHabilidades sHabilidades;
    
    @GetMapping("/lista")
    public ResponseEntity<List<Habilidades>> list(){
        List<Habilidades> list = sHabilidades.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    @GetMapping("/detail/{id}")
    public ResponseEntity<Habilidades> getById(@PathVariable("id") int id){
        if(!sHabilidades.existsById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        Habilidades habilidades = sHabilidades.getOne(id).get();
        return new ResponseEntity(habilidades, HttpStatus.OK);
    }
    
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoHabilidades dtohab){
        if(StringUtils.isBlank(dtohab.getNombreHab()))
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        if(sHabilidades.existsByNombreHab(dtohab.getNombreHab()))
            return new ResponseEntity(new Mensaje("Esa Habilidad existe"), HttpStatus.BAD_REQUEST);
        
       Habilidades habilidades = new Habilidades(dtohab.getNombreHab(), dtohab.getPorcentajeHab(), dtohab.getImgHab());
        sHabilidades.save(habilidades);
        
        return new ResponseEntity(new Mensaje("Habilidad agregada"), HttpStatus.OK);
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoHabilidades dtohab) {
        //Validamos si existe el ID
        if(!sHabilidades.existsById(id))
            return new ResponseEntity(new Mensaje("El ID no existe"), HttpStatus.NOT_FOUND);
        //Compara nombre de experiencias
        if(sHabilidades.existsByNombreHab(dtohab.getNombreHab()) && sHabilidades.getByNombreHab(dtohab.getNombreHab()).get().getId() != id)
            return new ResponseEntity(new Mensaje("Esa habilidad ya existe"), HttpStatus.BAD_REQUEST);
        //No puede estar vacio
        if(StringUtils.isBlank(dtohab.getNombreHab()))
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        
        Habilidades habilidades = sHabilidades.getOne(id).get();
        habilidades.setNombreHab(dtohab.getNombreHab());
        habilidades.setPorcentajeHab(dtohab.getPorcentajeHab());
        habilidades.setImgHab(dtohab.getImgHab());
        
        sHabilidades.save(habilidades);
        return new ResponseEntity(new Mensaje("Habilidad actualizada"), HttpStatus.OK);
             
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id){
        if(!sHabilidades.existsById(id))
            return new ResponseEntity(new Mensaje("El ID no existe"), HttpStatus.NOT_FOUND);
        sHabilidades.delete(id);
        
        return new ResponseEntity(new Mensaje("Habilidad eliminada"), HttpStatus.OK);
    }
}
