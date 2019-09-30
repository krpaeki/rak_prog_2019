const utils = require("./utils.js");
console.log("itemList.js loaded");

const phones = [{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mf01AjU1VoEWA-_w8dPC7-Q/s-l225.webp","title":"P30 PRO 6.3'' Android 9.0 Phone 6GB+256GB Dual SIM Smartphone Free TF Card 128G","price":"$94.99","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/m7oihA40YQ3W1GrMQuPIhtA/s-l225.webp","title":"X27/X27 Plus Unlocked Smart Phone 5.0/5.7'' Android 8.0 HD Dual SIM Mobile","price":"$37.22 to $48.88","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mXanjjSc_TIBWFm8a2mE7wA/s-l225.webp","title":"Apple iPhone 7 Plus 32GB 128GB 256GB 12.0MP iOS Mobile Smartphone All Colours","price":"$375.52 to $474.00","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/moNoDtIorUp7m_imEq72Whw/s-l225.webp","title":"P30 PRO Android Smartphone 6Gb+128Gb Face Fingerprint Recognition Mobile Phone","price":"$85.49","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mGv0acKbKkoZ2oFhDOm_6FQ/s-l225.webp","title":"6.3\" P36 Pro Android 9.1 Smart Mobile Phone 6GB+128GB Face ID Unlocked 4800mAh","price":"$77.18","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/nm4AAOSwgW9ctdeI/s-l225.webp","title":"Samsung galaxy a40 64gb Dual Sim Black 24 months guarantee Italy","price":"$197.04","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mmLW0oqt5RpvmnP1iVblm3w/s-l225.webp","title":"P36 Pro 6.3'' HD Water Drop Screen Dual SIM 10 Core Unlocked Smartphone Face ID","price":"$75.04 to $76.66","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/iEMAAOSwkYxdX7C3/s-l225.webp","title":"P35 Pro 6.3\" Drop Screen Dual SIM 6GB+128GB Black Touch Smart Mobile Phone New","price":"$83.71","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mH_8H-Wj10AvwPEdPi_wKsw/s-l225.webp","title":"6.3'' Full HD Dual SIM 10 Core Unlocked Smartphone Android 6+128G Mobile Phone","price":"$72.71","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/myLa0Y-T-dNwLFQG9jC19kg/s-l225.webp","title":"P33/P33 Pro Unlocked Smart Phone 5.0/5.7'' Android 8.1 HD Dual SIM Mobile 4G+64G","price":"$41.79 to $48.44","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/svYAAOSwaD5dX7Ko/s-l225.webp","title":"P35 Pro 4G Smart Mobile Phone 6.3\" Drop Screen Dual SIM Cards 6GB+128GB Memory","price":"$84.32","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/rU0AAOSwTUpdGw7T/s-l225.webp","title":"SAMSUNG GALAXY S7 32Go 4G Android Téléphone Mobile Usine Débloqué Or","price":"$156.98","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/qgkAAOSwiqBcOGTE/s-l225.webp","title":"UMIDIGI A3 Pro Smartphone 5.7\" 4G Telefono Cellulari Sbloccato 3GB+32GB Face ID","price":"$87.14","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mEQJbVN9VM9wkKzOYB6WyWQ/s-l225.webp","title":"XIAOMI REDMI 7A BRAND NEW SEALED FACTORY UNLOCKED GLOBAL VERSION FAST DELIVERY ","price":"$97.26 to $121.89","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/muWh1HvkuGDehM03AhPvqGA/s-l225.webp","title":"Apple iPhone 8 - 64GB - 256GB - Unlocked - Various Colours Mobile Smartphone","price":"$448.99 to $536.41","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mmLW0oqt5RpvmnP1iVblm3w/s-l225.webp","title":"P36 Pro 6.3'' HD Water Drop Screen Dual SIM 10 Core Unlocked Smartphone","price":"$75.15 to $76.90","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mmiZ-0zIb6qJbM0rmB4ovdg/s-l225.webp","title":"X27 Plus Smartphone 6.3'' Android 9.1 Dual SIM Mobile Phone Face 6G+128G Unlock","price":"$70.17","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mB5Q5HTKXkAypo7jEFzmQKA/s-l225.webp","title":"P36 Pro Unlocked Smartphone 6.3 Inch 10 Core Dual SIM HD Water Drop Full Screen","price":"$76.94","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/md1fqduBlE7XPNu8Kcwpdvg/s-l225.webp","title":"P33 Plus Unlocked Smart Phone 5.0/5.8'' Android 8.1 HD Camera Dual SIM Mobile","price":"$49.11 to $54.75","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/wAgAAOSwnatddhXY/s-l225.webp","title":"P35 Pro Smart Mobile Phone 6.3\" Drop Screen Dual SIM Cards 6GB+128GB Memory","price":"$76.31","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/I~oAAOSwLsBZTJWM/s-l225.webp","title":"Samsung Galaxy S8 SM-G950U1 - 64GB - black (Unlocked) Very Good Shadow LCD","price":"$159.99","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mFpawDRbKvipO5gxQk6CVVg/s-l225.webp","title":"5.0''Inch 4GB+64GB Mobile Phone Face Full Screen Unlock Android 8.0 HOT","price":"$44.17 to $45.11","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/GOUAAOSwwVFdgytH/s-l225.webp","title":"2019 Unlocked UK Android 5.5\" Smart Mobile Phone Quad Core Dual SIM WiFi 3G GPS","price":"$49.22","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/m2GXxvgIK0r29GZBPimxYHg/s-l225.webp","title":"APPLE iPHONE 5C 8GB/16GB/32gb  - Unlocked/locked blue ,White,Green.Yellow Phone","price":"$49.24 to $86.17","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mcQWlBgVdywCB_P9YslyD4Q/s-l225.webp","title":"Samsung Galaxy S7 G930 32GB 5.1\" (Unlocked) Android Smartphone SIM Free 5 Colors","price":"$110.67 to $130.37","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mBcGb2e2MLVYCnf27oKhUug/s-l225.webp","title":"X27/X27 Plus Unlocked Smart Phone 5.0/5.7\" Android 8.0 HD Dual Sim Mobile NEW","price":"$37.57 to $39.61","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/NUIAAOSw0UhdARg~/s-l225.webp","title":"Samsung galaxy a10 (2019), Black, 32 GB Dual SIM 24 months guarantee Italy","price":"$142.31","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mgv2D9IMWAJB8wTcAZ9E_pw/s-l225.webp","title":"P30 Pro Unlocked Smart Phone 6.3'' Android 9.0 Dual SIM Mobile HD Full Screen","price":"$73.61","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mNehoU8jhc6rl4g9Amy6c9A/s-l225.webp","title":"X27/X27 Plus Unlocked Smart Phone 5.0/5.7'' Android8.0 Dual SIM Mobile Octa Core","price":"$37.87 to $39.90","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/FYoAAOSwvlVdiEgN/s-l225.webp","title":"P35 Pro Smart Phone 6.3\" HD Full Screen 128GB 4800mAh Android Face Mobile Phone","price":"$83.22","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mawV4Vr6Vli2ekunY37A2UA/s-l225.webp","title":"S9 Big Screen 5.7\" Inch LTE Smartphone Dual SIM Android 6.0 Mobile Phone GPS SD","price":"$36.09 to $47.34","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mKvajw2hOPCVV3Ga189to1w/s-l225.webp","title":"M20 Pro 4+32g Face Unlocked 5.8'' Android 8Core Dual-SIM Smartphone","price":"$49.97","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/m2MhVGgj9y5yHrRMrG-2slA/s-l225.webp","title":"S10 Unlocked Android 9.1 Smartphone Octa Core Cell Phone 4GB+64GB 8MP+16MP 6.1\"","price":"$64.06","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/CjoAAOSwy2Ncm7XJ/s-l225.webp","title":"Samsung galaxy a50 2019 Black 4g 6.4\" 128 GB 4gb RAM Dual SIM guarantee Italy 24","price":"$284.62","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mphyn8jqIO3rWTpybG247Hw/s-l225.webp","title":"N5 pro 6.1''Inch Mobile SmartPhone Face Full Screen Unlock Android 9.1 6GB+128GB","price":"$62.97 to $65.79","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mqGI8HuOQgwJR4eFEah4S6w/s-l225.webp","title":"Samsung Galaxy S7 SM-G930F - 32GB (Unlocked) Smartphone - Black - Gold - Pink UK","price":"$110.80 to $147.73","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mWNNxiO63KFqSgzf1zv2H4w/s-l225.webp","title":"Xiaomi Mi8 Lite 6.26'' Full Screen Octa Core 4+64G Smartphone Dual SIM lot","price":"$28.65","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mb94-E2GJV6XIsJvZ7Mu0Nw/s-l225.webp","title":"M20 Pro 4GB+32GB 5.8' Face Unlocked Android 8.0 Core Dual-SIM Mobile Smartphone","price":"$45.60","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mIVK8SBLBNdfhERCxfr9okg/s-l225.webp","title":"APPLE iPHONE 6 16GB / 64GB / 128GB - Unlocked / Voda -  Smartphone Mobile Phone ","price":"$97.26 to $166.21","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/cdIAAOSwso9dcwaY/s-l225.webp","title":"Samsung Galaxy A5 (2016) SM-A510F-16GB- Android Smart Phone BLACK UNLOCKED UK EU","price":"$113.01","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/m1IUK4-SpcPby9SkzEZ06pA/s-l225.webp","title":"S10+ 6.5'' Android 9.0 Phone 6GB+256GB Dual SIM Smartphone Free TF Card 128G","price":"$119.99","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mzSoqpzDG-HFuF6TNu6ZLPw/s-l225.webp","title":"S10+ 6.5\" HD Full Screen Smartphone Fingerprint Face ID Android 9.1 Mobile Phone","price":"$103.86","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mWHqBVBPJNJo-2oSlN_gKTA/s-l225.webp","title":"P35 Pro SmartPhone 6.3\" HD Full Screen 4800mAh Android 9.1 Face ID Cell Phone","price":"$81.47","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/m2NYLE2KXs7HHg9E_HykVdw/s-l225.webp","title":"6.3\" Unlock Smartphone P35 Pro HD Full Screen Face ID Android 9.1 3G Cell Phone","price":"$80.18 to $91.84","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mX8h2_HeCxQ38kCdfMaysmg/s-l225.webp","title":"New P36 Pro Smartphone Android 9.1 6GB+128GB 6.3\" Mobile Smart Phone Dual SIM","price":"$73.74 to $100.96","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/708AAOSwH2VZ52zp/s-l225.webp","title":"LG G6 AS993 (Latest Model) - 32GB - Black Smartphone Unlocked B stock","price":"$85.00","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mJhghLHNX8PWAeaV6Lj6pfw/s-l225.webp","title":"New Unlocked Smartphone Apple iPhone 6s 128GB 32GB 64GB Sim Free Rose Gold UK","price":"$177.97 to $228.94","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/miT9cHqRIuHCC2DaK-euxHw/s-l225.webp","title":"ANDROID Smart Phone P36 Pro 6.3'' HD Full Screen 10 core Dual SIM Unlocked Cheap","price":"$78.84","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/7oQAAOSwUsxdWm2A/s-l225.webp","title":"ASUS Zenfone 4 ZE554KL 5.5\" 4G LTE 4GB+64GB Snapdragon 630 Octa core Smart Phone","price":"$147.73","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/RCgAAOSwJcldbn52/s-l225.webp","title":"Xiaomi redmi 7a dual sim global version","price":"$85.93","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mcHKOOLj8xZ3Uj25fj0_hSA/s-l225.webp","title":"Android 8.0 6.2\" Screen Smartphone Quad Core Dual 6G+64GB WIFI Phone Dual SIM","price":"$75.10","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mzB1xHiL5zw1Avpz7BEdV6w/s-l225.webp","title":"Ultra Thin Melrose S9 Plus Mobile Phone 4G LTE 2.5 Inch Smallest Mobile Phone","price":"$84.99 to $97.99","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mdJi5AEu7IJmjgOoYvANtDg/s-l225.webp","title":"X27/X27 Plus Unlocked Smartphone 5.0/5.8 in  HD Dual SIM Mobile 4000mah 4G+64G","price":"$37.59 to $41.65","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/m5WPQQk2VO45n9xb8SnSg1Q/s-l225.webp","title":"P33 5.0\" 3G 8Core Dual Card Smart Phone Android 8.1 Unlocked Mobile Phone","price":"$45.29","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mtk48DjaDCIL7ocRC9sfbkQ/s-l225.webp","title":"P33 Plus Unlocked Smart Phone 5.0/5.8'' Android 8.1 HD Camera Dual SIM Mobile","price":"$39.99 to $49.99","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mcJSi_mYlK5gGVZYaW9g04g/s-l225.webp","title":"S10+ 6.5\"Android Smartphone 6GB+128GB Face Fingerprint Recognition Dual Unlocked","price":"$104.49","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/PrMAAOSwPAldkTK6/s-l225.webp","title":"New ListingSamsung Galaxy S6 SM-G920F - 32GB - Rose Gold Smartphone mobile phone ","price":"$97.26","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mDPBK_ZOg0Lz9hTgRn2o4iQ/s-l225.webp","title":"M20 Pro 4G+64GB Smartphone Factory Unlocked Octa core Mobile Cell Phone Dual SIM","price":"$45.69 to $47.77","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mmSh55Ch8lV_vcayq2-LyIA/s-l225.webp","title":"6\" 3G Android 7.0 Unlocked Cell Phone Quad Core Dual SIM 3G T-Mobile Smartphone","price":"$56.99 to $60.99","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mPD8atU6uAR8ymb8eiMguDw/s-l225.webp","title":"Mini 3.5 inch 4G LTE K-TOUCH I9 Android 8.1 Smartphone Face ID Wifi Bluetooth","price":"$94.54 to $108.33","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mQUGxwUQA_J59BU16v7PLfw/s-l225.webp","title":"X27 Plus Smartphone 6.3'' Android 9.1 Dual SIM  Mobile Phone Octa Core 6+128g","price":"$83.09","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mt7fBdb_0DVmeoGcl0iJV7g/s-l225.webp","title":"Apple iPhone 4S Mobile Phone 8GB 16GB 32GB Sim Free Factory Unlocked Smartphone","price":"$42.85 to $59.35","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mLJU3zkVLzuRSXmI0mnldSw/s-l225.webp","title":"Apple iPhone 3GS - (AT&T) A1303 Smart Phone 3G Speeds - Straight Talk Compatible","price":"$28.99","category":"phones"}]
const laptops = [{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/jVEAAOSwqbZdH3Ij/s-l225.webp","title":"Acer Iconia w701 2 in 1 Windows 10 Tablet Laptop Intel i3 1.90GHz 4GB 120GB","price":"$116.95","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mY8WVsB47sxniyc0fqcE_Jw/s-l225.webp","title":"CHEAP FAST INTEL CORE i3/ i5/ i7 LAPTOP WINDOWS 7/10 250GB/500GB HD 4GB/8GB RAM","price":"$92.33 to $160.04","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/m_2CoFXBQaz_1uIQIJjUJuQ/s-l225.webp","title":"MEGA DEAL Lenovo ThinkPad Office Laptop X220 Core i5 8GB Ram SSD/HDD Windows 10","price":"$160.04 to $307.79","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/eQcAAOSwi6dcUDyI/s-l225.webp","title":"Dell Latitude E5440 Laptop i5 4300U 1.9GHz 8GB RAM 500GB HDD Windows 10 WIFI. IJ","price":"$147.74","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mHdZy0gjdq5JV63S5Phdlow/s-l225.webp","title":"CHEAP DELL D630/620 LATITUDE 14.1\" Core2Duo Laptop WIND 7/10 500GB,4GB RAM Wi-Fi","price":"$73.86 to $129.26","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/h~4AAOSwjaBc-pgz/s-l225.webp","title":"Refurbished Dell Latitude E5420 Laptop - i3 - 4GB RAM - 250GB HDD - Win 10 Pro","price":"$104.59","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/D3EAAOSwCXBdkAs4/s-l225.webp","title":"LAPTOP LATiTUDE WINDOWS 10 CORE 2 DUO 4GB RAM WIN DVD WIFI PC HD COMPUTER DELL","price":"$34.75","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/fQoAAOSwy6ddkNEM/s-l225.webp","title":"New ListingASUS N551JX-CN242H 15.6\" Laptop, 232GB & 22.3 GB HDD, 8GB RAM - Great Condition","price":"$89.88","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/z6EAAOSwOjdc~78y/s-l225.webp","title":"Cheap Lenovo ThinkPad X1 Carbon Core i7-4600U 256GB SSD Ultrabook Win 10 Laptop","price":"$363.08","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/qsgAAOSwItFc5DX2/s-l225.webp","title":"New ListingLenovo ThinkPad T420 Laptop i5-2540M 2.60GHz 256GB SSD 4GB Ram ","price":"$36.00","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/~OkAAOSwhEhcSusV/s-l225.webp","title":"Lenovo ThinkPad X1 Carbon Laptop Core i7 4600U 240GB SSD 8GB RAM W10 Ultrabook","price":"$344.72","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ByIAAOSww6pdf~8e/s-l225.webp","title":"New ListingDell Inspiron 7348 Laptop/Core i3-5010U/500GB HDD/4 GB Memory/13.3\" Touch","price":"$215.00","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mTYfpO6CDSm9OCpd0f1rv0A/s-l225.webp","title":"HP EliteBook 2570p Intel i7 / i5 @ 2.60GHz, 8GB RAM, 256GB SSD Windows 10 Laptop","price":"$116.95 to $295.48","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/jL0AAOSwEcxb1zO5/s-l225.webp","title":"LENOVO THINKPAD T420i LAPTOP I3 2.4GHz 4GB RAM 320GB HDD DVDRW WEBCAM","price":"$110.80","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mwxHoevkD97TuJCa90bEuTQ/s-l225.webp","title":"CHEAP LAPTOP Dell Latitude Core i5 / i3 8GB Ram 128GB SSD  Win 10 HDMI","price":"$71.40 to $221.60","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/mlQAAOSwYS5c1ZtK/s-l225.webp","title":"Fujitsu Lifebook S762 Core i3 Windows 10 Laptop","price":"$97.26","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/m4w0IiJgaHTxknF8On87vBQ/s-l225.webp","title":"Gaming laptop Lenovo ThinkPad X220 12.5\" 500GB Intel i5 2.5GHz 8GB Win 7 10 SSD","price":"$135.42 to $246.23","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/30EAAOSw~b1dkJbg/s-l225.webp","title":"New ListingToshiba Satellite PRO C50 15.6\" Laptop intel i5-3230M, 4GB RAM 500GB HDD Win10","price":"$171.14","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mTE7rL-0lAYgO3SDihduMAg/s-l225.webp","title":"PANASONIC TOUGHBOOK CF-52 Laptop Core 2 Duo 4GB RAM 500GB HDD WINDOWS 7 10","price":"$153.89 to $221.60","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/yeAAAOSwkqhdhSiu/s-l225.webp","title":"HP Chromebook 14 G1 Laptop 14\" HD Graphics Webcam Chrome OS HDMI","price":"$129.97","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/EZ0AAOSw305dkVWZ/s-l225.webp","title":"New ListingAsus LAPTOP Transformer Book T100T PC Tablet","price":"$200.00","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/3OMAAOSwE-RdHelj/s-l225.webp","title":"Panasonic CF-C2 Toughbook Laptop 12.5\" - 3rd Gen i5 8Gb RAM 320GB HDD Windows 10","price":"$184.67","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/mGIAAOSwg7hdf35H/s-l225.webp","title":"CHEAP Panasonic Toughbook CF-18 MK4 10.4\" Laptop - Pentium M 1Gb RAM 80Gb Win XP","price":"$86.17","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/7AkAAOSwPXFcMJO7/s-l225.webp","title":"Dell Latitude e6230 Intel i5-3320m 2,60ghz 4gb 128gb BT Cam 1366x768 Windows 10","price":"$153.16","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/3GYAAOSw1mZdjfQ5/s-l225.webp","title":" FAST Lenovo ThinkPad T430 Core i5 2.6Ghz 8GB 500GB HDD Win 10 Laptop Webcam","price":"$172.36","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/fIAAAOSwcBpdiHTg/s-l225.webp","title":"PC Laptop Notebook Lenovo ThinkPad t400 Core Duo 4gb 160gb PCMCIA Windows 7","price":"$131.36","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/mccAAOSwKZtdkR62/s-l225.webp","title":"New ListingHP G60 LAPTOP WINDOWS 7 AMD DUALCORE WEBCAM 120GB SSD 4GB  LCD HDMI","price":"$67.72","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mVcY-IfJ81KRUc6_3TFSCHQ/s-l225.webp","title":"CHEAP Toshiba Core 2 Duo LAPTOP WINDOWS 7 10 2GB 4GB RAM 14\" WiFi Warranty","price":"$86.17 to $172.36","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/NqAAAOSwAzVcwIR6/s-l225.webp","title":"Dell Latitude E6440 Intel i5 4210M 8GB 500GB Gaming Notebook Laptop G.C Win 10","price":"$190.84","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/FgMAAOSwv8xdLN6~/s-l225.webp","title":"New ListingHP Laptop Windows 7 Home Premium","price":"$96.00","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/1y8AAOSwhfNdkUxE/s-l225.webp","title":"New ListingASUS Gaming Laptop 15.6”(Intel® Core™ i7-7700HQ, 256GB SSD + 1TB HDD, 12GB RAM)","price":"$644.00","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mYW-_qcz8y9OXBW-RyB3WZQ/s-l225.webp","title":"FAST CHEAP Wi-Fi WINDOWS 10 LAPTOP CORE i5 i3 4GB/8GB RAM 320GB/500GB HDD","price":"$73.86 to $158.81","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/gDUAAOSwrtxdh1MB/s-l225.webp","title":"New ListingDELL Inspiron 5378 LAPTOP 13.3 TOUCHSCREEN Grey 4415U 4GB RAM 1TB ","price":"$246.24","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/pioAAOSwQo9cjtq6/s-l225.webp","title":"Dell Gaming Laptop E5520 15.6\" Intel Core i3 2.20Ghz Win 10 HDMI 160gb hd....","price":"$116.96","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mtk3BrEfiLaVus3EwjlKA1A/s-l225.webp","title":"CHEAP FAST DUAL CORE LAPTOP WINDOWS 7 or 10 OS, 2GB 3GB 4GB RAM WITH WARRANTY","price":"$61.55 to $98.48","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/onQAAOSwkZxda2am/s-l225.webp","title":"Laptop HP Elitebook 820 G1 Core i7-4600U 2.1GHz 12,5 inch 128 SSD Bluetooth Cam","price":"$186.05","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ToAAAOSwLahdhME-/s-l225.webp","title":"New ListingHP 15-bw067sa 15.6\" Laptop 8GB Ram 256 SSD AMD A9-9420 3.0GHz Full HD W10","price":"$245.01","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mGnMKG2uA7b_lvCZbGySAVg/s-l225.webp","title":"CHEAP DELL HP FUJITSU CORE i5/i3 LAPTOP 16GB/8GB 1TB/500GB WiFi Win10/7 WARRANTY","price":"$80.02 to $166.20","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/m7_uQTbOuqkR6wN-CIMieUg/s-l225.webp","title":"Cheap Fast Kids Student Acer Netbook Laptop | 4GB | 320GB | WiFi | Win10 |HDMI","price":"$80.02 to $86.17","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mu19M0P5Ii4LPEtzOLh6C6g/s-l225.webp","title":"FAST CHEAP LAPTOP INTEL CORE i3/ i5/ i7  WINDOWS 7/10 128GB SSD 4GB/8GB RAM WIFI","price":"$61.55 to $158.81","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/cSsAAOSwqOldkRxd/s-l225.webp","title":"New ListingLENOVO G550 LAPTOP 2.1GHz / 2GB RAM / 250GB HDD","price":"$36.92","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/me-sT5wc-k1lMfQrpGOgC7g/s-l225.webp","title":"7A56 14'' GSP Laptop Notebook Computer Quad-Core Bluetooth Win10 WIRELESS OFFICE","price":"$1.85 to $213.90","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/N~MAAOSw-RNdkUyg/s-l225.webp","title":"New ListingDELL E7250 I5 | 2.3GHz | 8GB | 256GB | W10P | CAM Complete laptop  +BN OEM CHRGR","price":"$198.88","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/G-cAAOSwEO9dcC7l/s-l225.webp","title":"New ListingAsus Vivobook K570U Casual Gaming Laptop, i7-8550U, GTX1050, 8GB RAM, SSD+HDD","price":"$500.00","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/-aAAAOSwWq1dj4DG/s-l225.webp","title":"15.6Inch Intel 4G Ram 64GB SSD Windows 10 FHD Laptop Quad Core Yepbook Notebook","price":"$196.99","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/t5MAAOSwi-dbz0di/s-l225.webp","title":"Dell Latitude E7240 Intel i5-4300U 4GB 128GB SSD BT 1366x768 BT Windows 10 Grade B","price":"$147.68","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mepf813HGEEW0Q0D-gXsuPg/s-l225.webp","title":"Lenovo ThinkPad X240 Laptop Windows 10 Core i5-4th Gen 8GB 256GB SSD Webcam","price":"$147.73 to $221.60","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/6HwAAOSw48pdh7Xd/s-l225.webp","title":"New ListingOlivetti D33/C Laptop with Power Supply and zahlenschloßkoffer!","price":"$383.16","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ubwAAOSwwFlcgOR9/s-l225.webp","title":"LENOVO THINKPAD T460 14.1\" LAPTOP i5 2.4GHz 6TH GEN 8GB RAM 512GB SSD WIN 10","price":"$344.72","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/UL4AAOSwc1ZbtM-Q/s-l225.webp","title":"Lenovo X260 Laptop, 12.5\" Intel i5 2.4GHz, 8GB RAM, 128GB SSD, Windows 10 Pro","price":"$258.54","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/~tMAAOSwu~FdbkbG/s-l225.webp","title":"New ListingALLDOCUBE Kbook 13.5\" Laptop 8GB 512GB SSD Windows 10 OS Intel M3-6Y30 Dual Core","price":"$449.99","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mwNSQDU3cCos4k64sQZpwTg/s-l225.webp","title":"Dell Gaming Laptop E6220 I7 I5 2.9Ghz 8GB 500GB SSD Windows 10 HD HDMI 12.5\"","price":"$184.67 to $270.85","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mm3T-raNtqNqNxqqZ9oPzCQ/s-l225.webp","title":"Cheap gaming laptop Dell 14.1\" Intel I5 3rd 2.6Ghz 8GB 480GB SSD DVD Win 10 HDMI","price":"$160.04 to $344.72","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/JPsAAOSwWn1dUJMj/s-l225.webp","title":"New ListingDell 7490, 14\",  i5-7300. 256 SSD, 16 GB, WIN10P laptop ","price":"$700.00","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/47IAAOSwHu9cmzfh/s-l225.webp","title":"CHUWI herobook Notebook Laptop 4+64gb win10 Intel Atom Quad Core 14.1\" computer","price":"$224.42","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/wBgAAOSwunNdkU0c/s-l225.webp","title":"New ListingMicrosoft Surface Laptop 13.5\" Intel Core i5 7th Gen 8GB RAM 256GB SSD Win 10","price":"$599.00","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mSSlwNs7kQ8FzzFv6z7c3_A/s-l225.webp","title":"Cheap Lenovo Thinkpad E330 laptop I3 2.4Ghz 8GB 480GB SSD Webcam Win 13.3\" HDMI","price":"$110.80 to $295.48","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/4N4AAOSweIddkNMa/s-l225.webp","title":"New ListingDELL LATITUDE D-505 LAPTOP WINDOWS XP DELL BLACK LEATHER CASE LOOK! READ!!","price":"$25.00","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mZ92ISDArXlcpWJVrz8mplQ/s-l225.webp","title":"PANASONIC TOUGHBOOK CF-52 Laptop Core 2 Duo 4GB RAM 250GB HDD WINDOWS 7 XP","price":"$134.20","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/NMEAAOSw7OdcTvAe/s-l225.webp","title":"HP EliteBook 820 G1 12.5\" Laptop i5 1.9GHz 4th, 4GB RAM 320GB HDD, Win 7 Pro (BP","price":"$141.58","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/rfsAAOSwHShdIj-6/s-l225.webp","title":"New ListingLENOVO  3000/N100  WINDOWS  7 PRO  ACTIVATED  UPDATED  LAPTOP","price":"$47.50","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/WigAAOSwSzZc~x1y/s-l225.webp","title":"CHUWI HeroBook 14.1\" Laptop Windows 10 Intel Quad Core Notebook PC 4GB+64GB","price":"$220.00","category":"laptop"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mi10P7O5_LXY0KGRQZn7BzA/s-l225.webp","title":"FAST CHEAP Wi-Fi WINDOWS 10 LAPTOP INTEL CORE i3/i5 4GB/8GB RAM 320GB/500GB HDD","price":"$110.80 to $160.04","category":"laptop"}];

const categories = {
    PHONE: "phones",
    LAPTOP: "laptop",
  };

let selectedCategory = categories.PHONE;

function createItems(){

    const root = document.getElementById("item-list");

    root.innerHTML = null;

    let items = [];

    if(selectedCategory === categories.PHONE){
        items = phones;
    }
    else if(selectedCategory === categories.LAPTOP){
        items = laptops;
    }

    items.forEach((phone)=>{
        const element = utils.createItemElement(phone);
        root.append(element);
    })
}

function setupCategoryListener(){
    const dropdown = document.getElementById("category-dropdown");
    dropdown.addEventListener('change', (event) => {
      console.log(event.target.value);
      selectedCategory = event.target.value;
      createItems();
    });
  }

function setup(){

  const root = document.getElementById("item-list");
  if(!root) return;

  createItems();
  setupCategoryListener();
}

module.exports = {
  setup,
}