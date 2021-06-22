package kr.tirrilee.api.estimatedProgramm.service;

import java.util.stream.Collectors;

import kr.tirrilee.api.estimatedProgramm.domain.Option;
import kr.tirrilee.api.estimatedProgramm.domain.OptionDto;
import kr.tirrilee.api.estimatedProgramm.domain.Programm;
import kr.tirrilee.api.estimatedProgramm.domain.ProgrammDto;

public interface ProgrammService {

    String programmSave(ProgrammDto programmDto);

    ProgrammDto getByProgrammId(Long ProgrammId);

    default Programm dto2EntityProgramm(ProgrammDto programmDto) {
        return Programm.builder().serviceName(programmDto.getServiceName()).plan(programmDto.getPlan())
                .design(programmDto.getDesign()).pageNum(programmDto.getPageNum()).price(programmDto.getPrice())
                .build();
    }

    default ProgrammDto Entity2DtoProgramm(Programm programm) {
        return ProgrammDto.builder().programmId(programm.getProgrammId()).serviceName(programm.getServiceName())
                .plan(programm.getPlan()).design(programm.getDesign()).pageNum(programm.getPageNum())
                .price(programm.getPrice())
                .options(
                        programm.getOptions().stream().map(option -> OptionDto.of(option)).collect(Collectors.toList()))
                .build();
    }

    default Option dto2EntityOption(OptionDto optionDto) {
        return Option.builder().optionName(optionDto.getOptionName()).optionPrice(optionDto.getOptionPrice()).build();
    }

    default OptionDto entity2DtoOption(Option option) {
        return OptionDto.builder().optionId(option.getOptionId()).optionName(option.getOptionName())
                .optionPrice(option.getOptionPrice()).build();
    }

}
