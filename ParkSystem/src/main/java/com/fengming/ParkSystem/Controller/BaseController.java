package com.fengming.ParkSystem.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class BaseController {

	@ExceptionHandler()
	@ResponseBody
	public String exp(Exception e){
		return e.getMessage();
	}
}
