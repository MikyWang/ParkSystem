package com.fengming.ParkSystem.Service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.fengming.ParkSystem.Dao.ParkingPlaceMapper;
import com.fengming.ParkSystem.Entity.ParkingPlace;

@Service
public class ParkingPlaceService {

	@Resource
	ParkingPlaceMapper parkingPlaceMapper;

	public List<ParkingPlace> selectAll() {
		return parkingPlaceMapper.selectAll();
	}

}
