/*=====================================================================*/
/*    serrano/diffusion/talk/pliss26/part2/arithmetic/nan.js           */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Sep 17 17:23:15 2025                          */
/*    Last change :  Wed May 20 14:48:46 2026 (serrano)                */
/*    Copyright   :  2025-26 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Nan tagging                                                      */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import { LSTINPUTLISTING } from "../listings.js";
export { nan };

/*---------------------------------------------------------------------*/
/*    nan ...                                                          */
/*---------------------------------------------------------------------*/
const nan = <impress.slide title="nan" class="oopsla25">

   <div class="title">NaN Tagging</div>

   <div class="svgbg" step="1-">
     <svg:img width="90%" src=${require.resolve( "../svg/nan.svg" )}/>
   </div>

   <ul class="center">
     <li step="2-"> <span class="important">2<sup>52</sup>-1</span> Not-a-Number (NaN)</li>
   </ul>

   <ul class="center">
     <li step="3-"> Leverage the limited address space (<span class="important">2<sup>48</sup></span>) </li>
   </ul>
   
   <div id="nantagging" class="svgbg" step="4-">
     <svg:img width="90%" src=${require.resolve( "../svg/nantagging.svg" )}/>
   </div>
   
   <ul class="center pros-and-cons" step="5-">
     <li> <span class="plus">&oplus;</span>optimal floating point encoding</li>
     <li step="6-"> <span class="minus">&ominus;</span> slow access</li>
     <li step="6-"> <span class="minus">&ominus;</span> slow type checking</li>
     <li step="6-"> <span class="minus">&ominus;</span> only for 64-bit platforms</li>
     <li step="6-"> <span class="minus">&ominus;</span> <em>"day-1"</em> technique</li>
   </ul>
</impress.slide>
   
/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
nan.css = <style>
.title {
   margin-bottom: 1ex;
}

ul {
   margin-bottom: 0.5ex;
}

span.important {
   color: var(--orange);
}

div.svgbg {
   background-color: white;
   border: 1px solid var(--red);
   border-left: 8px solid var(--red);
   padding: 8px 4px 4px 4px;
   width: 95%;
   margin-left: auto;
   margin-right: auto;
   margin-bottom: 1ex;
}

#nantagging {
   margin-top: 0.5ex;
}

svg .free {
   font-weight: bold;
   fill: var(--green);
}

svg .nan {
   font-weight: bold;
   fill: var(--red);
}

svg .mantissa,
svg .sign {
   fill: var(--greylight);
}

svg .addr {
   font-weight: bold;
   fill: var(--purpledark);
}

svg .quiet {
   font-weight: bold;
   fill: var(--blueverydark);
}

[data-step="5"] {
   top: -1.5ex;
   transition: 1s all;
}

[data-step="6"] {
   top: -8ex;
   transition: 1s all;
}

.plus {
   color: var(--green);
   font-size: 80%;
}

.minus {
   color: var(--red);
   font-size: 80%;
}

ul.pros-and-cons li:before,
ul.pros-and-cons li:after {
   content: "";
}

em {
   font-style: normal;
   background-color: var(--greydark);
   color: white;
   border-radius: 8px;
   padding: 0 0.2em 0 0.2em;
   font-size: 90%;
}
</style>;
