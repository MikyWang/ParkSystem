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

	public void updateStatus(String placeId) throws Exception {
		ParkingPlace parkingPlace = parkingPlaceMapper.selectByPrimaryKey(Integer.valueOf(placeId));
		if (parkingPlace == null) {
			throw new Exception("没有这个停车位");
		}
		if (parkingPlace.getStatus().equals("full")) {
			throw new Exception("该停车位已满");
		}
		parkingPlace.setStatus("full");
		parkingPlaceMapper.updateByPrimaryKeySelective(parkingPlace);
	}

}
