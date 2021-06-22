package kr.tirrilee.api.estimatedProgramm.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import kr.tirrilee.api.estimatedProgramm.domain.Programm;

interface ProgrammCustomRepository {
}

@Repository
public interface ProgrammRepository extends JpaRepository<Programm, Long>, ProgrammCustomRepository {

}
