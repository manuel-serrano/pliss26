/*=====================================================================*/
/*    serrano/diffusion/talk/pliss26/part2/arithmetic/self.js          */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Wed May 20 14:43:07 2026 (serrano)                */
/*    Copyright   :  2015-26 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Talk title                                                       */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as path from "path";
import { inriaSVG } from "../config.js";
import * as impress from "@hop/hopimpress";

export { title as self };

/*---------------------------------------------------------------------*/
/*    title ...                                                        */
/*---------------------------------------------------------------------*/
const title = <impress.slide title="Float Self Tagging">
   <div class="title-block-title">
   <div>Float</div>
      <div class="self">Self</div>
      <div>Tagging</div>
   </div>
   
   <div class="title-block-authors">
   <span class="title-conf">Olivier Melançon - Manuel Serrano - Marc Feeley</span>
   </div>
   
   <div class="title-block-location">
      <span class="title-conf">2025</span>
   </div>
</impress.slide>

/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
title.css = <style>
.body {
   color: var(--grey);
   background-color: var(--background);
   position: absolute;
}

.self {
   color: var(--red);
}

.title-block-title {
   color: var(--greydark);
   text-align: center;
   margin-left: auto;
   margin-right: auto;
   margin-top: 1ex;
   font-size: 130%;
   font-weight: bold;
}

.title-block-authors {
   color: var(--grey);
   border-top: 2px solid var(--grey);
   width: 15em;
   right: 0;
   left: 0;
   font-size: 50%;
   height: 2ex;
   margin-left: auto;
   margin-right: auto;
   text-align: center;
   bottom: 4ex;
   position: absolute;
}

.title-block-location {
   color: var(--grey);
   bottom: 0;
   right: 0;
   font-size: 50%;
   width: 100%;
   height: 1ex;
   margin-left: auto;
   margin-right: auto;
   text-align: center;
   bottom: 3ex;
   position: absolute;
}
</style>;

