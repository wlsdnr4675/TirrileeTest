package kr.tirrilee.api.estimatedProgramm.domain;

import org.springframework.stereotype.Component;

import kr.tirrilee.api.common.util.ModelMapperUtils;
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
    private Long optionPrice;

    private Long programmId;

    public static OptionDto of(Option option) {
        OptionDto optionDto = ModelMapperUtils.getModelMapper().map(option, OptionDto.class);
        return optionDto;
    }

}
