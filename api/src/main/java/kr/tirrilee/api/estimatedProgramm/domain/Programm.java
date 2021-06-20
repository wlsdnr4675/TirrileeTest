package kr.tirrilee.api.estimatedProgramm.domain;

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
    private Long programmNo;

}
