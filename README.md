## One Moment web app, built with AngularJS

##### backend data is from "Douban One Moment" backend APIs

### Index Page

![image index](https://github.com/felixyonex/one_moment/blob/master/img-folder/index.jpg)

### Menu

![image aside](https://github.com/felixyonex/one_moment/blob/master/img-folder/aside.jpg)

### Authors

![image author](https://github.com/felixyonex/one_moment/blob/master/img-folder/author.jpg)


### Category

![image category](https://github.com/felixyonex/one_moment/blob/master/img-folder/category.jpg)


### Setting

![image setting](https://github.com/felixyonex/one_moment/tree/master/img-folder/setting.jpg)

## Apache environment building

```html
DocumentRoot "e:/oneMoment/"
<Directory "e:/oneMoment/">
```

## config virtual host

### Step 1：httpd.conf, line498

```
# Virtual hosts
Include conf/extra/httpd-vhosts.conf
```
### Step 2：extra/httpd-vhost.conf
```

<VirtualHost \*:80>
DocumentRoot "e:/oneMoment"
ServerName yike.com
ServerAlias www.yike.com
</VirtualHost>

```
### Step 3：config hosts file (C:\Windows\system32\drivers\etc\hosts)
```

127.0.0.1 yike.com
127.0.0.1 www.yike.com

```
### Step 4: reboot Apache server

