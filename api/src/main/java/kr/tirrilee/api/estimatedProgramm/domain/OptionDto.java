package kr.tirrilee.api.estimatedProgramm.domain;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OptionDto {
    private Long optionId;
    private String optionName;
    private Programm programm;

}
