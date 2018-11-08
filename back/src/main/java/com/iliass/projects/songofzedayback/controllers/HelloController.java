package com.iliass.projects.songofzedayback.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {

    @GetMapping(value = "/hello", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getSignal() {
        return new ResponseEntity<>("<h1>I'm ALIVE !</h1>", HttpStatus.OK);
    }
}
