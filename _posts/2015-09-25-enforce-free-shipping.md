---
layout: post
title: WooCommerce – Enforce free shipping
color: ''
image:
excerpt: Make free shipping the only alternative if available.
tag: WooCommerce
redirect_from: /2015/09/enforce-free-shipping/
---


Make free shipping the only alternative if available.

    add_filter( 'woocommerce_package_rates', 'woocommerce_package_rates_prioritize_free_shipping' );

    function woocommerce_package_rates_prioritize_free_shipping( $rates ) {
        if ( isset( $rates['free_shipping'] ) ) {
            return ['free_shipping' => $rates['free_shipping']];
        }

        return $rates;
    }


* [https://wordpress.org/support/topic/shipping-automatically-set](https://wordpress.org/support/topic/shipping-automatically-set)
* [https://github.com/woothemes/woocommerce/pull/7598](https://github.com/woothemes/woocommerce/pull/7598)
