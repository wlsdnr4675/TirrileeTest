package kr.tirrilee.api.estimatedProgramm.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

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

}
