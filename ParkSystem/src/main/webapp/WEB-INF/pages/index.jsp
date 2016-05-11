<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <%@ include file="header.jsp" %>
            <script src="JS/parkingSpace.js"></script>
            <script src="JS/parking.js"></script>
    </head>

    <body>
        <div class="container">

            <div class="row">

                <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                    <canvas id="parkingSpace" width="1000" height="600"></canvas>
                </div>
            </div>
        </div>

        <div class="row">
            <button id="calculatePlace" type="button" class="btn btn-primary col-xs-offset-3">开始计算最佳车位</button>
            <button id="startParking" type="button" class="btn btn-primary col-xs-offset-1">开始停车</button>
        </div>


    </body>

    </html>