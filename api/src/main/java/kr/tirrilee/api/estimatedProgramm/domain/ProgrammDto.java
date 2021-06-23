package kr.tirrilee.api.estimatedProgramm.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProgrammDto {

    private Long programmId;
    private String serviceName;
    private String plan;
    private String design;
    private String pageNum;
    private Long price;

    private List<OptionDto> options;

}
