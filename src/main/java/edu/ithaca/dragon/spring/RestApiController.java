package edu.ithaca.dragon.spring;

import edu.ithaca.dragon.example.ClickCount;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class RestApiController {
    private ClickCount clickCount;

    public RestApiController(){
        clickCount = new ClickCount();
    }

    @GetMapping("/")
    public String apiDefault() {
        return "Default API response";
    }

    @GetMapping("/clickCount")
    public ClickCount clickCount() {
        return clickCount;
    }

    @PostMapping("/incrementClickCount")
    public ClickCount incrementClickCount(){
        clickCount.incrementClickCount();
        return clickCount;
    }

}