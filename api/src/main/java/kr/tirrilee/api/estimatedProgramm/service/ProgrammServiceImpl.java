package kr.tirrilee.api.estimatedProgramm.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import kr.tirrilee.api.estimatedProgramm.domain.Option;
import kr.tirrilee.api.estimatedProgramm.domain.OptionDto;
import kr.tirrilee.api.estimatedProgramm.domain.Programm;
import kr.tirrilee.api.estimatedProgramm.domain.ProgrammDto;
import kr.tirrilee.api.estimatedProgramm.repository.OptionRepository;
import kr.tirrilee.api.estimatedProgramm.repository.ProgrammRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProgrammServiceImpl implements ProgrammService {

    private final ProgrammRepository repo;
    private final OptionRepository optionRepo;

    @Transactional
    @Override
    public String programmSave(ProgrammDto programmDto) {
        Programm programm = Programm.of(programmDto);
        programm.saveAll(programmDto);
        List<OptionDto> options = programmDto.getOptions();
        if (!options.isEmpty()) {
            options.forEach(optionDto -> {
                Option option = dto2EntityOption(optionDto);
                option.confirmProgramm(programm);
                optionRepo.save(option);
            });
        }

        return (repo.save(programm) != null) ? "Save Success" : "Save Failed";
    }

    @Transactional
    @Override
    public ProgrammDto getByProgrammId(Long programmId) {
        Programm programm = repo.findById(programmId).orElseThrow(IllegalArgumentException::new);
        return Entity2DtoProgramm(programm);
    }
}
