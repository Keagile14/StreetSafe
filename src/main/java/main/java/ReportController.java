package main.java;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reports")
public class ReportController {

    private final ReportRepository reportRepository;

    public ReportController(ReportRepository reportRepository){
        this.reportRepository = reportRepository;
    }

    @PostMapping
    public Report createReport(@RequestBody Report report) {
        return reportRepository.save(report);
    }

    @GetMapping
    public List<Report> getReports(){
        return reportRepository.findAll();
    }

    @PutMapping("/{id}/status")

    public Report updateStatus(@PathVariable Long id, @RequestParam String status) {

        Report report = reportRepository.findById(id).orElseThrow();
        report.setStatus(status);
        return reportRepository.save(report);
    }

}
