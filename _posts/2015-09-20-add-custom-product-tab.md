---
layout: post
title: WooCommerce – Add custom product tab
color: ''
image:
excerpt: Add custom product tab.
tag: WooCommerce
redirect_from: /2015/09/enforce-free-shipping/
---

Add custom product tab

    add_filter('woocommerce_product_tabs', function ($tabs) {

        $tabs[] = [
            'title'    => __('Tab title', 'theme_name'),
            'priority' => 90,
            'callback' => function () {
                get_template_part('templates/custom-product-tab');
            },
        ];

        return $tabs;
    }, 98);

