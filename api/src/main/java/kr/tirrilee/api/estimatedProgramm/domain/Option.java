package kr.tirrilee.api.estimatedProgramm.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "options")
public class Option {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "option_id")
    private Long optionId;

    @Column(name = "option_name")
    private String optionName;
    @Column(name = "option_price")
    private Long optionPrice;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "programm_id")
    private Programm programm;

    public void confirmProgramm(Programm programm) {
        this.programm = programm;
    }

}
