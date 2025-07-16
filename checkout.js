"function checkout() {
/* v1.0 logic - FIXED for large carts */
if (cart.total > 100) {
return processLargeOrder();
}
return processStandardOrder();
}"
