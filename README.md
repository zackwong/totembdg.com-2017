totembdg.com-2017
=============

龙衍建材英文官网2017年版


域名绑定、301转向及nginx配置
-----

新建配置文件: ``sudo nano /etc/nginx/sites-available/totembdg.com``

编辑配置文件及保存: 

    server {
        server_name totembdg.com;
        return 301 http://www.totembdg.com$request_uri;
    }
    server {
        server_name www.totembdg.com;
        index index.html;
        root /srv/totembdg.com-2017/_site;
        error_page 404 /Error.html;
        location /download {
        auth_basic "Account password please contact customer service";
        auth_basic_user_file totembdg;
      }
    }

建立链接: ``sudo ln -s /etc/nginx/sites-available/totembdg.com /etc/nginx/sites-enabled/``

重启nginx: ``sudo service nginx restart``

编辑配置账号密码: ``sudo nano /etc/nginx/totembdg``

    账号:密码，密码必须是crypt加密，在线工具：http://tool.oschina.net/htpasswd


下载及生成网站
-----

1. 下载网站源码: ``git clone git://github.com/zackwong/totembdg.com-2017.git``

2. 进入源码根目录: ``cd totembdg.com-2017``

3. 生成网站: ``jekyll build``


开发者
---------

* Zack Wong &lt;hzzzoo@126.com&gt;
