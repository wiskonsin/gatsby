import React from "react"
import CssStyles from "../css/index-css-modules.module.css"

export default ({client, format, slot,responsive = 'auto'}) => (
    <div>
    <ins  id={CssStyles.adsbygoogle} className="adsbygoogle"
        
    data_ad_client={client}
    data_ad_slot = {slot}
    data_ad_format ={format}
    data_full_width_responsive = {responsive}>
    </ins>
    </div>
  )