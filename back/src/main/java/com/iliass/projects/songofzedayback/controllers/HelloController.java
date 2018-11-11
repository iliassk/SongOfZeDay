package com.iliass.projects.songofzedayback.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {

    @GetMapping(value = "/hello")
    public ResponseEntity<String> getSignal() {
        return new ResponseEntity<>("I'm ALIVE", HttpStatus.OK);
    }
}
