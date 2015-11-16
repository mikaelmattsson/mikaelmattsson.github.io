---
layout: post
title: Magento LEMP
color: ''
image:
excerpt: Step by step guide on how to set up Linux, Nginx, Mysql and PHP on Ubuntu for Magento.
tag: Magento
redirect_from: /2015/10/magento-lemp/
---

## Mysql

    sudo apt-get update
    sudo apt-get install mysql-server php5-mysql
    sudo mysql_install_db


mysql root password: custom_mysql_password

    sudo /usr/bin/mysql_secure_installation

* Change the root password? [Y/n] n
* Remove anonymous users? [Y/n] y
* Disallow root login remotely? [Y/n] n
* Remove test database and access to it? [Y/n] y
* Reload privilege tables now? [Y/n] y


## Nginx

    echo "deb http://ppa.launchpad.net/nginx/stable/ubuntu $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/nginx-stable.list
    sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys C300EE8C
    sudo apt-get update
    sudo apt-get install nginx

sudo service nginx start

## PHP

    sudo apt-get install php5-fpm
    sudo apt-get install php5-cli

## Nginx and php

    sudo nano /etc/nginx/sites-available/default

Change `root /var/www/html;` to `root /var/www/html/public;`

Replace

    location / {
        ## First attempt to serve request as file, then
        ## as directory, then fall back to displaying a 404.
        try_files $uri $uri/ =404;
    }

With

	location / {
		index index.html index.php;
		try_files $uri $uri/ @handler;
	}

	## Deny access to specific directories no one
	## in particular needs access to anyways.
	location /app/ { deny all; }
	location /includes/ { deny all; }
	location /lib/ { deny all; }
	location /media/downloadable/ { deny all; }
	location /pkginfo/ { deny all; }
	location /report/config.xml { deny all; }
	location /var/ { deny all; }

	## Allow only those who have a login name and password
	## to view the export folder. Refer to /etc/nginx/htpassword.
	location /var/export/ {
		auth_basic "Restricted";
		auth_basic_user_file htpasswd;
		autoindex on;
	}

	## Deny all attempts to access hidden files
	## such as .htaccess, .htpasswd, etc...
	location ~ /\. {
		 deny all;
		 access_log off;
		 log_not_found off;
	}

	## This redirect is added so to use Magentos
	## common front handler when handling incoming URLs.
	location @handler {
		rewrite / /index.php;
	}

	## Forward paths such as /js/index.php/x.js
	## to their relevant handler.
	location ~ .php/ {
		rewrite ^(.*.php)/ $1 last;
	}

	## Handle the exectution of .php files.
	location ~ .php$ {
		if (!-e $request_filename) {
			rewrite / /index.php last;
		}
		expires off;
		fastcgi_pass unix:/var/run/php5-fpm.sock;
		fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
		fastcgi_param MAGE_RUN_CODE default;
		fastcgi_param MAGE_RUN_TYPE store;
		include fastcgi_params;
	}


    mkdir /var/www/html/public/
    touch /var/www/html/public/index.php

## Swap

    sudo fallocate -l 4G /swapfile
    sudo chmod 600 /swapfile
    sudo mkswap /swapfile

    sudo nano /etc/fstab

Add the folowing to the bottom of the file: `/swapfile   none    swap    sw    0   0`

## Git

    apt-get install git

    ssh-keygen -t rsa -b 4096 -C "project-server@comapny.com" #promted to enter name and password for key
    cat ~/.ssh/id_rsa.pub #Save this for later

## Redis

    sudo apt-get install build-essential #expects confirmation

    sudo apt-get install tcl8.5 #expects confirmation

    wget http://download.redis.io/releases/redis-stable.tar.gz
    tar xzf redis-stable.tar.gz
    cd redis-stable
    make
    make test #takes a while
    sudo make install
    cd utils
    sudo ./install_server.sh #promts for configuration

Start at boot

    sudo update-rc.d redis_6379 defaults

I found out later that redis could be installed from the repositories using `sudo apt-get install redis-server`

Optimize [redis](http://fbrnc.net/blog/2013/02/redis-optimization)

    echo 1 > /proc/sys/vm/overcommit_memory

## PHP Modules

    sudo apt-get install php5-redis
    sudo apt-get install php5-curl

    service php5-fpm restart

## sendmail

    sudo apt-get install sendmail

## crontab

    */5 *   * * *   www-data /bin/sh /path/to/magento/cron.sh cron.php -m=default
    */5 *   * * *   www-data /bin/sh /path/to/magento/cron.sh cron.php -m=always

[source](http://magento.stackexchange.com/questions/63707/which-cron-script-is-best-to-run-cron-php-or-cron-sh)

## Magento

local.xml

    <?xml version="1.0"?>
    <!--
    /**
     * Magento
     *
     * NOTICE OF LICENSE
     *
     * This source file is subject to the Academic Free License (AFL 3.0)
     * that is bundled with this package in the file LICENSE_AFL.txt.
     * It is also available through the world-wide-web at this URL:
     * http://opensource.org/licenses/afl-3.0.php
     * If you did not receive a copy of the license and are unable to
     * obtain it through the world-wide-web, please send an email
     * to license@magentocommerce.com so we can send you a copy immediately.
     *
     * DISCLAIMER
     *
     * Do not edit or add to this file if you wish to upgrade Magento to newer
     * versions in the future. If you wish to customize Magento for your
     * needs please refer to http://www.magentocommerce.com for more information.
     *
     * @category   Mage
     * @package    Mage_Core
     * @copyright  Copyright (c) 2008 Irubin Consulting Inc. DBA Varien (http://www.varien.com)
     * @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
     */
    -->
    <config>
        <global>
            <install>
                <date><![CDATA[Wed, 19 Feb 2014 19:36:45 +0000]]></date>
            </install>
            <crypt>
                <key><![CDATA[2216ce59a67e850bb4812f7f347fba35]]></key>
            </crypt>
            <disable_local_modules>false</disable_local_modules>
            <resources>
                <db>
                    <table_prefix><![CDATA[]]></table_prefix>
                </db>
                <default_setup>
                    <connection>
                        <host><![CDATA[localhost]]></host>
                        <username><![CDATA[root]]></username>
                        <password><![CDATA[custom_mysql_password]]></password>
                        <dbname><![CDATA[project]]></dbname>
                        <initStatements><![CDATA[SET NAMES utf8]]></initStatements>
                        <model><![CDATA[mysql4]]></model>
                        <type><![CDATA[pdo_mysql]]></type>
                        <pdoType><![CDATA[]]></pdoType>
                        <active>1</active>
                    </connection>
                </default_setup>
            </resources>
            <session_save><![CDATA[files]]></session_save>

            <cache>
              <backend>Cm_Cache_Backend_Redis</backend>
              <backend_options>
                <server>127.0.0.1</server>
                <port>6379</port>
                <persistent></persistent>
                <database>0</database>
                <password></password>
                <force_standalone>0</force_standalone>
                <connect_retries>1</connect_retries>
                <read_timeout>10</read_timeout>
                <automatic_cleaning_factor>0</automatic_cleaning_factor>
                <compress_data>1</compress_data>
                <compress_tags>1</compress_tags>
                <compress_threshold>20480</compress_threshold>
                <compression_lib>gzip</compression_lib>
                <use_lua>0</use_lua>
              </backend_options>
            </cache>

            <session_save>db</session_save>
            <redis_session>
                <host>127.0.0.1</host>
                <port>6379</port>
                <password></password>
                <timeout>2.5</timeout>
                <persistent></persistent>
                <db>0</db>
                <compression_threshold>2048</compression_threshold>
                <compression_lib>gzip</compression_lib>
                <log_level>1</log_level>
                <max_concurrency>6</max_concurrency>
                <break_after_frontend>5</break_after_frontend>
                <break_after_adminhtml>30</break_after_adminhtml>
                <first_lifetime>600</first_lifetime>
                <bot_first_lifetime>60</bot_first_lifetime>
                <bot_lifetime>7200</bot_lifetime>
                <disable_locking>0</disable_locking>
                <min_lifetime>60</min_lifetime>
                <max_lifetime>2592000</max_lifetime>
            </redis_session>

        </global>
        <admin>
            <routers>
                <adminhtml>
                    <args>
                        <frontName><![CDATA[admin]]></frontName>
                    </args>
                </adminhtml>
            </routers>
        </admin>
    </config>

Replace custom_mysql_password with your password



