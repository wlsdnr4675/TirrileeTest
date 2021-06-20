package kr.tirrilee.api.estimatedProgramm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import kr.tirrilee.api.estimatedProgramm.domain.Programm;

interface ProgrammCustomRepository {

}

@Repository
public interface ProgrammRepository extends JpaRepository<Programm, Long>, ProgrammCustomRepository {

}
