package kr.tirrilee.api.estimatedProgramm.service;

import org.springframework.stereotype.Service;

import kr.tirrilee.api.estimatedProgramm.domain.OptionDto;
import kr.tirrilee.api.estimatedProgramm.domain.Programm;
import kr.tirrilee.api.estimatedProgramm.domain.ProgrammDto;
import kr.tirrilee.api.estimatedProgramm.repository.ProgrammRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProgrammServiceImpl implements ProgrammService {

    private final ProgrammRepository repo;

    @Override
    public String programmSave(ProgrammDto programmDto) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public String optionSave(OptionDto optionDto) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Programm getByProgrammId(Long ProgrammId) {
        // TODO Auto-generated method stub
        return null;
    }
}
