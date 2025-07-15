# Shelly RGBW Bulb Chataigne module
This is a Chataigne custom module for basic control of Shelly RGBW bulbs. This module controls shelly bulbs via http. For more infos look at the shelly api reference gen1 :
[https://shelly-api-docs.shelly.cloud/gen1/#shelly-bulb-rgbw-settings-white-0](https://shelly-api-docs.shelly.cloud/gen1/#shelly-bulb-rgbw-settings-white-0)

## setup
-  make sure your shelly bulb and Chataigne host are on the same network 
- enter the shelly bulb ip address in the Base Address field; if you connected your Chataigne host to the wifi of the shelly bulb the default value should work

## note
For `set color` to work your bulb needs to be set in `color mode` via the web interface of the bulb or via this module `sys -> set mode`

