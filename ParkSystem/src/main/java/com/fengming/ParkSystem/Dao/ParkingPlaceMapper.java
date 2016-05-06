package com.fengming.ParkSystem.Dao;

import java.util.List;

import com.fengming.ParkSystem.Entity.ParkingPlace;

public interface ParkingPlaceMapper {
    int deleteByPrimaryKey(Integer placeId);

    int insert(ParkingPlace record);

    int insertSelective(ParkingPlace record);

    ParkingPlace selectByPrimaryKey(Integer placeId);

    int updateByPrimaryKeySelective(ParkingPlace record);

    int updateByPrimaryKey(ParkingPlace record);

	List<ParkingPlace> selectAll();
}