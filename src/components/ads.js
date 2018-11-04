import React from "react"

export default ({client, opcion = 'auto'}) => (
    <div>
    <ins className="adsbygoogle"
    google_ad_client={client}
    enable_page_level_ads={opcion}></ins>
    </div>
  )