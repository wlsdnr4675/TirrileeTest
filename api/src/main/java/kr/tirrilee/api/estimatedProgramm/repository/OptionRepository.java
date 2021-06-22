package kr.tirrilee.api.estimatedProgramm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import kr.tirrilee.api.estimatedProgramm.domain.Option;

@Repository
public interface OptionRepository extends JpaRepository<Option, Long> {

}
