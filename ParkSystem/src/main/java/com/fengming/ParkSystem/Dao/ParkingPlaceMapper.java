package com.fengming.ParkSystem.Dao;

import java.util.List;

import com.fengming.ParkSystem.Entity.ParkingPlace;

public interface ParkingPlaceMapper {
    int deleteByPrimaryKey(String position);

    int insert(ParkingPlace record);

    int insertSelective(ParkingPlace record);

    List<ParkingPlace> selectAll();
    
    ParkingPlace selectByPrimaryKey(String position);

    int updateByPrimaryKeySelective(ParkingPlace record);

    int updateByPrimaryKey(ParkingPlace record);
}