---
layout: post
title: WooCommerce – Remove product category count
color: ''
image:
excerpt: Remove product count from category listings
tag: WooCommerce
redirect_from: /2015/10/remove-product-category-count/
---

Remove product count from category listings

    add_filter( 'woocommerce_subcategory_count_html', '__return_false' );


