/*=====================================================================*/
/*    serrano/diffusion/talk/pliss26/part2/arithmetic/fl.js            */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Sep 17 17:23:15 2025                          */
/*    Last change :  Wed May 20 14:49:19 2026 (serrano)                */
/*    Copyright   :  2025-26 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    One flonum                                                       */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import { LSTINPUTLISTING } from "../listings.js";
export { fl };

/*---------------------------------------------------------------------*/
/*    fl ...                                                           */
/*---------------------------------------------------------------------*/
const fl = <impress.slide title="fl" class="oopsla25">

   <div class="title">3.02</div>

   <div class="center" step="1-">
      <table class="center">
         <tr class="legend"><td>s</td><td>exponent</td><td colspan="2">mantissa</td></tr>
         <tr class="encoding"><td>1</td><th>111110100101</th><td class="mantissa">0111010010011101100001011</td><td class="tag">001</td></tr>
      </table>
   </div>
   <span step="2"/>

   <ul class="center">
     <li step="3-"> Distinguish <span class="fast">fast self-tagged</span> flonums </li>
     <li step="3-"> Distinguish <span class="slow">slow boxed</span> flonums </li>
   </ul>
   
</impress.slide>
   
/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
fl.css = <style>
.encoding {
   font-family: CourierMono;
   font-weight: bold;
   font-size: 90%;
}

.fast  {
    color: var(--red);
}

.slow  {
    color: var(--orange);
}

div.center {
   margin-bottom: 2ex;
}

table {
   font-size: 60%;
   border-collapse: collapse;
}

th {
   background-color: var(--greyverylight);
   border: 4px solid black;
}

td {
   background-color: var(--greylight);
   border: 4px solid black;
}

td.tag {
   border-left: none;
}

[data-step="2"] td.tag,
[data-step="3"] td.tag {
   color: var(--red);
   font-weight: bold;
}

td.mantissa {
   border-right: none;
}
   
.legend td, .legend th {
   font-size: 70%;
   font-family: Kaffeesatz;
   color: var(--grey);
   background-color: inherit;
   border: none;
}
</style>;
