package kr.tirrilee.api.estimatedProgramm.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.tirrilee.api.estimatedProgramm.domain.ProgrammDto;
import kr.tirrilee.api.estimatedProgramm.service.ProgrammServiceImpl;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/programm")
@RequiredArgsConstructor
public class ProgrammController {
    private final ProgrammServiceImpl service;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody ProgrammDto programm) {
        return ResponseEntity.ok(service.programmSave(programm));
    }

    @GetMapping("/read/{programmId}")
    public ResponseEntity<ProgrammDto> read(@PathVariable("programmId") Long programmId) {
        System.out.println("ddddddd" + programmId);
        return ResponseEntity.ok(service.getByProgrammId(programmId));
    }

}
