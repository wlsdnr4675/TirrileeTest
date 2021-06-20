package kr.tirrilee.api.estimatedProgramm.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.tirrilee.api.estimatedProgramm.service.ProgrammServiceImpl;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/programm")
@RequiredArgsConstructor
public class ProgrammController {
    private final ProgrammServiceImpl service;

}
