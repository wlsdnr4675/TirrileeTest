package kr.tirrilee.api.estimatedProgramm.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import kr.tirrilee.api.estimatedProgramm.domain.Programm;

interface ProgrammCustomRepository {

    @EntityGraph(attributePaths = { "options" }, type = EntityGraph.EntityGraphType.FETCH)
    @Query("SELECT * FROM Programm p WHERE p.programmId= :programmId")
    Optional<Programm> getByProgrammId(@Param("programmId") Long programmId);

}

@Repository
public interface ProgrammRepository extends JpaRepository<Programm, Long>, ProgrammCustomRepository {

}
