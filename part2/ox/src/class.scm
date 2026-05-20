(module mod
   (export point refY))

(define-class point x::long y::long)

(define (refY::long o::point) (-> o y))
