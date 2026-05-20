/*=====================================================================*/
/*    serrano/diffusion/talk/pliss26/part2/arithmetic/flonum.js        */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Sep 17 17:23:15 2025                          */
/*    Last change :  Wed May 20 14:48:12 2026 (serrano)                */
/*    Copyright   :  2025-26 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Flonum                                                           */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import { LSTINPUTLISTING } from "../listings.js";
export { flonum };

/*---------------------------------------------------------------------*/
/*    flonum ...                                                       */
/*---------------------------------------------------------------------*/
const flonum = <impress.slide title="flonum" class="oopsla25">

   <div class="title">Flonum</div>
   <ul class="center">
     <li step="1-"> IEEE 754 </li>
     <li step="2-"> Cannot trade value space </li>
   </ul>

   <br>
   <div class="conclusion" step="3"><span class="important">&Rightarrow;</span> Boxed representation</div>
   
</impress.slide>
   
/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
flonum.css = <style>
span.important {
   color: var(--orange);
}
</style>;
