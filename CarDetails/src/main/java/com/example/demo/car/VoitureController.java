package com.example.demo.car;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class VoitureController {

	
	@Autowired
	VoitureRepository voitureRepository;
	
	@GetMapping("/vot")
	public ResponseEntity<List<Voiture>> get(){
		List<Voiture> voit= voitureRepository.findAll();
		 return new ResponseEntity<List<Voiture>>(voit,HttpStatus.OK);
	}
	
	@PostMapping("/vot")
	public ResponseEntity<Voiture> save(@RequestBody Voiture voiture){
		Voiture voit = voitureRepository.save(voiture);
		return new ResponseEntity<Voiture>(voit,HttpStatus.OK);
	}
	
	@GetMapping("/vot/{id}")
	public ResponseEntity<Voiture> findById(@PathVariable("id") int id){
		Voiture voit = voitureRepository.findById(id);
		return new ResponseEntity<Voiture>(voit,HttpStatus.OK);
	}
	
	
	@DeleteMapping("/vot/{id}")
	public ResponseEntity<String> delete(@PathVariable("id") int id){
	voitureRepository.deleteById(id);
		return new ResponseEntity<String>("delete id sucessfully", HttpStatus.OK);
		
	}
	
	
	
	
	
	
	
}
