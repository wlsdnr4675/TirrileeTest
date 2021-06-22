package kr.tirrilee.api.estimatedProgramm.service;

import kr.tirrilee.api.estimatedProgramm.domain.OptionDto;
import kr.tirrilee.api.estimatedProgramm.domain.Programm;
import kr.tirrilee.api.estimatedProgramm.domain.ProgrammDto;

public interface ProgrammService {

    String programmSave(ProgrammDto programmDto);

    String optionSave(OptionDto optionDto);

    Programm getByProgrammId(Long ProgrammId);
}
