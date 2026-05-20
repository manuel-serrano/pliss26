/*=====================================================================*/
/*    serrano/diffusion/talk/pliss26/part2/arithmetic/lowb.js          */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Thu Sep 18 17:03:30 2025                          */
/*    Last change :  Wed May 20 14:49:39 2026 (serrano)                */
/*    Copyright   :  2025-26 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Low bit encoding                                                 */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import { LSTINPUTLISTING } from "../listings.js";
export { lowb };

/*---------------------------------------------------------------------*/
/*    lowb ...                                                         */
/*---------------------------------------------------------------------*/
const lowb = <impress.slide title="Low bit encoding" class="oopsla25">

   <div class="title">Least significant bit encoding</div>
   
   <ul class="center">
     <li step="1-"> 1-tag save 1/8 of allocations </li>
     <li step="2-"> 2-tag save 2/8 of allocations </li>
     <li step="3-"> &hellip; </li>
   </ul>

   <div class="conclusion" step="4"><span class="important">&Rightarrow;</span>
     <tt>while(true) { x += 0.1; }</tt>
   </div>
   
   </impress.slide>
   
/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
lowb.css = <style>
span.important {
   color: var(--orange);
}

.conclusion {
   font-size: 50%;
}

.conclusion tt {
   font-family: CourierMono;
   font-weight: bold;
}
</style>;
