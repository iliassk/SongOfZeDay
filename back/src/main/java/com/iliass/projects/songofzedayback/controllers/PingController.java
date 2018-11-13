package com.iliass.projects.songofzedayback.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;

@RestController
public class PingController {

    private Logger logger;

    public PingController() {
        logger = LoggerFactory.getLogger(PingController.class);
    }

    @GetMapping(value = "/ping", produces = MediaType.APPLICATION_JSON_VALUE)
    public Map getSignal() {
        logger.info("Pinging the backend");
        return Collections.singletonMap("response", "I'm ALIVE");
    }
}
