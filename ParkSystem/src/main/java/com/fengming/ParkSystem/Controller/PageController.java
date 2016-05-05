package com.fengming.ParkSystem.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController extends BaseController {

	@RequestMapping(value="index")
	public String index(){
		return "index";
	}
}
