/*=====================================================================*/
/*    serrano/diffusion/talk/pliss26/part2/arithmetic/fstimpl.js       */
/*    -------------------------------------------------------------    */
/*    Author      :  manuel serrano                                    */
/*    Creation    :  Tue Oct 21 12:52:21 2025                          */
/*    Last change :  Wed May 20 14:54:15 2026 (serrano)                */
/*    Copyright   :  2025-26 manuel serrano                            */
/*    -------------------------------------------------------------    */
/*    FST implementation                                               */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import { LSTINPUTLISTING } from "../listings.js";
export { fstimpl };

/*---------------------------------------------------------------------*/
/*    fstimpl                                                          */
/*---------------------------------------------------------------------*/
const fstimpl = <impress.slide title="High bit implementation" class="oopsla25">

   <div class="title">Exponent bit implementation</div>

   <div class="center">
      <table class="center fl">
         <tr class="legend"><td>s</td><td>exponent</td><td>mantissa</td></tr>
         <tr class="encoding"><td><span class="sign">1</span></td><th><span class="tag">111</span><span class="exponent">110100101</span></th><td class="mantissa"><span class="mantissa">0111010010011101100001011</span><span class="mantissa">001</span></td></tr>
      </table>
   </div>

   <div class="rotation center" step="1-">
      <span class="important">&#8634;</span> 59 bits left rotation
   </div>
   

   <div class="center" step="3-">
      <table class="center fl">
         <tr class="legend"><td>s</td><td>exponent</td><td>mantissa</td></tr>
         <tr class="encoding"><td><span class="exponent">1</span></td><th><span class="exponent">10100101</span><span class="mantissa">0111</span></th><td><span class="mantissa">010010011101100001011001</span><span class="sign">1</span><span class="tag">111</span></td></tr>
      </table>
   </div>
   
   
   <div class="svgbg" step="4-">
     <svg:img width="95%" src=${require.resolve( "../svg/tagging3.svg" )}/>
   </div>
   
   <lstinputlisting language="c" src=${require.resolve("src/fsth.c")} step="5-"/>
</impress.slide>

   
/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
fstimpl.css = <style>
.encoding {
   font-family: CourierMono;
   font-weight: bold;
   font-size: 90%;
}

.title {
   margin-bottom: 1ex;
}

div.rotation {
   font-size: 60%;
   color: var(--greydark);
}

span.important {
   color: var(--purple );
}

table.fl {
   font-size: 62%;
   border-collapse: collapse;
   margin-bottom: 1ex;
}

.fl th {
   background-color: var(--greyverylight);
   border: 4px solid black;
}

.fl td {
   background-color: var(--greylight);
   border: 4px solid black;
}

.legend td, .legend th {
   font-size: 70%;
   font-family: Kaffeesatz;
   color: var(--grey);
   background-color: inherit;
   border: none;
}
   
.fl span.tag {
   color: var(--red);
   font-weight: bold;
   font-family: CourierMonoBold;
   transition: 0.5s all;
}

[data-step="2"] .fl span.sign,
[data-step="5"] .fl span.sign,
[data-step="4"] .fl span.sign,
[data-step="3"] .fl span.sign {
   color: var(--bluedark);
   transition: 0.5s all;
}

[data-step="2"] .fl span.mantissa,
[data-step="5"] .fl span.mantissa,
[data-step="4"] .fl span.mantissa,
[data-step="3"] .fl span.mantissa {
   color: var(--orange);
   transition: 0.5s all;
}

[data-step="2"] .fl span.exponent,
[data-step="5"] .fl span.exponent,
[data-step="4"] .fl span.exponent,
[data-step="3"] .fl span.exponent {
   color: var(--green);
   transition: 0.5s all;
}

div.svgbg {
   background-color: white;
   border: 1px solid var(--red);
   border-left: 8px solid var(--red);
   padding: 8px 4px 4px 4px;
   width: 95%;
   margin-left: auto;
   margin-right: auto;
}

svg .fst {
   fill: var(--red);
}

svg .tag {
   fill: var(--red);
}

.tag {
   color: var(--red);
}

[data-step="4"] {
   top: -6ex;
   transition: 1s all;
}

[data-step="5"] {
   top: -11ex;
   transition: 1s all;
}

</style>;
