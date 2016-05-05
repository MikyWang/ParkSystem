package com.fengming.ParkSystem.Controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fengming.ParkSystem.Entity.ParkingPlace;
import com.fengming.ParkSystem.Service.ParkingPlaceService;

@Controller
public class ParkingController extends BaseController {

	@Resource
	ParkingPlaceService parkingPlaceService;

	@RequestMapping(value = "getParkingPlaces")
	@ResponseBody
	public List<ParkingPlace> getParkingPlaces() {
		return parkingPlaceService.selectAll();
	}
}
