/*=====================================================================*/
/*    serrano/diffusion/talk/pliss26/part2/arithmetic/nun.js           */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Sep 17 17:23:15 2025                          */
/*    Last change :  Wed May 20 14:48:54 2026 (serrano)                */
/*    Copyright   :  2025-26 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Nun tagging                                                      */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import { LSTINPUTLISTING } from "../listings.js";
export { nun };

/*---------------------------------------------------------------------*/
/*    nun ...                                                          */
/*---------------------------------------------------------------------*/
const nun = <impress.slide title="nun" class="oopsla25">

   <div class="title">NuN Tagging</div>
   <ul class="center">
     <li step="1-"> Biased floats with <span class="important encoding">0x0001_0000_0000_0000</span></li>
   </ul>

   <div class="center encoding" step="2-">
      <table class="center">
       <tr><td class="legend" rowspan=3><div>Tagged values/pointers</div></td><th>0x0000</th><td>0000_0000_0000</td></tr>
       <tr><td class="sep" colspan=2>&vellip;</td></tr>
       <tr><th>0x0000</th><td>ffff_ffff_ffff</td></tr>
      </table>
   </div>

   <div class="center encoding" step="2-">
      <table class="center">
       <tr><td class="legend" rowspan=3><div>Floating values</div></td><th>0x0001</th><td>0000_0000_0000</td></tr>
       <tr><td class="sep" colspan=2>&vellip;</td></tr>
       <tr><th>0xfffe</th><td>ffff_ffff_ffff</td></tr>
      </table>
   </div>

   <div class="center encoding" step="2-">
      <table class="center">
       <tr><td class="legend" rowspan=3><div>Negative Tagged/pointers</div></td><th>0xffff</th><td>0000_0000_0000</td></tr>
       <tr><td class="sep" colspan=2>&vellip;</td></tr>
       <tr><th>0xffff</th><td>ffff_ffff_ffff</td></tr>
      </table>
   </div>

   <ul class="center pros-and-cons" step="3-">
     <li> <span class="plus">&oplus;</span> fast object access</li>
     <li step="4-"> <span class="minus">&ominus;</span> floats encoding/decoding</li>
     <li step="4-"> <span class="minus">&ominus;</span> only for 64-bit platforms</li>
     <li step="4-"> <span class="minus">&ominus;</span> <em>"day-1"</em> technique</li>
   </ul>
</impress.slide>
   
/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
nun.css = <style>
.title {
   margin-bottom: 0ex;
}

span.important {
   color: var(--orange);
}

.encoding {
   font-family: CourierMono;
   font-weight: bold;
   font-size: 80%;
}

div.center {
   margin-bottom: 2ex;
}

table {
   font-size: 50%;
   border-collapse: collapse;
}

th {
   background-color: #777;
   border: 4px solid black;
}

td.legend {
   border: 0;
   margin-right: 4px;
   width: 6em;
   font-family: Kaffeesatz;
}

td.legend div {
   border-right: 3px dashed black;
   padding-right: 0.5em;
   margin-right: 0.2em;
}

td.sep {
   border: 0;
}

th, td {
   padding: 0 0.2em 0 0.2em;
   border: 4px solid black;
}

[data-step="3"] {
   top: -3.5ex;
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

[data-step="4"] {
   top: -8.5ex;
   transition: 1s all;
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
