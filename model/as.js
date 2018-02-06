SELECT tbl_transfer.topic_en as topic_en, tbl_transfer.onsale_top as pro_ontop, tbl_transfer.id as transfer_id, tbl_transfer.stay,tbl_transfer.stay_to, tbl_transfer.cartype, tbl_transfer.cost_a_sell, tbl_transfer.type, 
tbl_car.id as car_id, tbl_car.person as person, tbl_car.topic_en as car_topic_en,  tbl_car.pax, tbl_car.car_model ,  tbl_province.id as province_id, tbl_province.front_transfer as front_transfer, tbl_province.name as province_name,  tbl_province_to.id as province_id_to,  tbl_province_to.name as province_name_to, 
tbl_web_car_fac_list.car_fac,
tbl_web_car_fac.id as car_fac_id,tbl_web_car_fac.topic_en as car_fac_topic_en
FROM web_transferproduct as tbl_transfer
LEFT JOIN web_car as tbl_car ON tbl_transfer.cartype=tbl_car.id  
LEFT JOIN web_province as tbl_province  ON tbl_transfer.stay = tbl_province.id 
LEFT JOIN web_province as tbl_province_to  ON tbl_transfer.stay_to = tbl_province_to.id
LEFT JOIN web_car_fac_list as tbl_web_car_fac_list ON tbl_web_car_fac_list.car_model = tbl_car.car_model and  tbl_web_car_fac_list.status = 1
LEFT JOIN web_car_fac as tbl_web_car_fac ON tbl_web_car_fac.id = tbl_web_car_fac_list.car_fac
WHERE tbl_transfer.onsale_front = 1

SELECT tbl_transfer.topic_en as topic_en, tbl_transfer.onsale_top as pro_ontop, tbl_transfer.id as transfer_id, tbl_transfer.stay,tbl_transfer.stay_to, tbl_transfer.cartype, tbl_transfer.cost_a_sell, tbl_transfer.type, 
tbl_car.id as car_id, tbl_car.person as person, tbl_car.topic_en as car_topic_en,  tbl_car.pax, tbl_car.car_model ,  tbl_province.id as province_id, tbl_province.front_transfer as front_transfer, tbl_province.name as province_name,  tbl_province_to.id as province_id_to,  tbl_province_to.name as province_name_to, 
tbl_web_car_fac_list.car_fac,
tbl_web_car_fac.id as car_fac_id,tbl_web_car_fac.topic_en as car_fac_topic_en,
tbl_web_car_capacity.bag_big, tbl_web_car_capacity.bag_small,tbl_web_car_capacity.adult,tbl_web_car_capacity.child, tbl_web_car_capacity.plan
FROM web_transferproduct as tbl_transfer
LEFT JOIN web_car as tbl_car ON tbl_transfer.cartype=tbl_car.id  
LEFT JOIN web_province as tbl_province  ON tbl_transfer.stay = tbl_province.id 
LEFT JOIN web_province as tbl_province_to  ON tbl_transfer.stay_to = tbl_province_to.id
LEFT JOIN web_car_fac_list as tbl_web_car_fac_list ON tbl_web_car_fac_list.car_model = tbl_car.car_model and  tbl_web_car_fac_list.status = 1
LEFT JOIN web_car_fac as tbl_web_car_fac ON tbl_web_car_fac.id = tbl_web_car_fac_list.car_fac
LEFT JOIN web_car_capacity as tbl_web_car_capacity ON tbl_web_car_capacity.car_model = tbl_car.car_model
WHERE tbl_transfer.onsale_front = 1


SELECT tbl_transfer.topic_en as topic_en, tbl_transfer.onsale_top as pro_ontop, tbl_transfer.id as transfer_id, tbl_transfer.stay,tbl_transfer.stay_to, tbl_transfer.cartype, tbl_transfer.cost_a_sell, tbl_transfer.type,  tbl_car.id as car_id, tbl_car.person as person, tbl_car.topic_en as car_topic_en,  tbl_car.pax, tbl_car.car_model ,  tbl_province.id as province_id, tbl_province.front_transfer as front_transfer, tbl_province.name as province_name,  tbl_province_to.id as province_id_to,  tbl_province_to.name as province_name_to   FROM web_transferproduct as tbl_transfer LEFT JOIN web_car as tbl_car ON tbl_transfer.cartype=tbl_car.id  LEFT JOIN web_province as tbl_province  ON tbl_transfer.stay = tbl_province.id  LEFT JOIN web_province as tbl_province_to  ON tbl_transfer.stay_to = tbl_province_to.id WHERE tbl_transfer.onsale_front = 1 '

SELECT tbl_transfer.topic_en as topic_en, tbl_transfer.onsale_top as pro_ontop, tbl_transfer.id as transfer_id, tbl_transfer.stay,tbl_transfer.stay_to, tbl_transfer.cartype, tbl_transfer.cost_a_sell, tbl_transfer.type, 
tbl_car.id as car_id, tbl_car.person as person, tbl_car.topic_en as car_topic_en,  tbl_car.pax, tbl_car.car_model ,  tbl_province.id as province_id, tbl_province.front_transfer as front_transfer, tbl_province.name as province_name,  tbl_province_to.id as province_id_to,  tbl_province_to.name as province_name_to
FROM web_transferproduct as tbl_transfer
LEFT JOIN web_car as tbl_car ON tbl_transfer.cartype=tbl_car.id  
LEFT JOIN web_province as tbl_province  ON tbl_transfer.stay = tbl_province.id 
LEFT JOIN web_province as tbl_province_to  ON tbl_transfer.stay_to = tbl_province_to.id
WHERE tbl_transfer.onsale_front = 1

---------------------
SELECT tbl_car.id as car_id, tbl_car.car_model ,
tbl_web_car_capacity.bag_big, tbl_web_car_capacity.bag_small,tbl_web_car_capacity.adult,tbl_web_car_capacity.child, tbl_web_car_capacity.plan

FROM web_car_capacity as tbl_web_car_capacity

LEFT JOIN web_car as tbl_car ON tbl_car.car_model = tbl_web_car_capacity.car_model  
