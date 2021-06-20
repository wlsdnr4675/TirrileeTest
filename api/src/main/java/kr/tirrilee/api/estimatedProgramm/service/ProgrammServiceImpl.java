package kr.tirrilee.api.estimatedProgramm.service;

import org.springframework.stereotype.Service;

import kr.tirrilee.api.estimatedProgramm.repository.ProgrammRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProgrammServiceImpl {
    private final ProgrammRepository repo;
}
