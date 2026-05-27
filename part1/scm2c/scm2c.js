/*=====================================================================*/
/*    serrano/diffusion/talk/pliss26/part1/scm2c/scm2c.js              */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Tue Aug 22 10:08:53 2023                          */
/*    Last change :  Wed May 27 06:42:14 2026 (serrano)                */
/*    Copyright   :  2023-26 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Scheme primer                                                    */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    import/export                                                    */
/*---------------------------------------------------------------------*/
import { CHAPTER } from "../../chapter.js";
import { slide as challenges } from "./challenges.js";
import { slide as polymorphism } from "./polymorphism.js";
import { slide as boxing } from "./boxing.js";
import { slide as fixnum } from "./fixnum.js";
import { slide as slowfixnum } from "./slowfixnum.js";
import { slide as specialization } from "./specialization.js";
import { slide as fx } from "./fx.js";
import { slide as bib } from "./bib.js";
import { slide as ho } from "./ho.js";
import { slide as closure } from "./closure.js";
import { slide as cloalloc } from "./cloalloc.js";
import { slide as nontail } from "./nontail.js";
import { slide as lifting } from "./lifting.js";

/*---------------------------------------------------------------------*/
/*    scm2c                                                            */
/*---------------------------------------------------------------------*/
export const scm2c = [
   <chapter number="2" title=${<span class="care">Scheme->C</span>}/>,
   challenges,
   polymorphism, boxing, fixnum, slowfixnum, specialization, fx,
   ho, closure, cloalloc, nontail, lifting
];
