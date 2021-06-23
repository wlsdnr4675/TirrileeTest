package kr.tirrilee.api.estimatedProgramm.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import kr.tirrilee.api.common.util.ModelMapperUtils;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "programms")
@Builder
@ToString
public class Programm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "programm_id")
    private Long programmId;
    @Column(name = "service_name")
    private String serviceName;
    @Column(name = "plan")
    private String plan;
    @Column(name = "design")
    private String design;
    @Column(name = "page_num")
    private String pageNum;
    @Column(name = "price")
    private Long price;

    @OneToMany(mappedBy = "programm", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Option> options = new ArrayList<>();

    public void saveAll(ProgrammDto dto) {
        this.serviceName = dto.getServiceName();
        this.plan = dto.getPlan();
        this.pageNum = dto.getPageNum();
        this.price = dto.getPrice();
        this.design = dto.getDesign();

    }

    public static Programm of(ProgrammDto dto) {
        Programm programm = ModelMapperUtils.getModelMapper().map(dto, Programm.class);
        return programm;
    }

}
