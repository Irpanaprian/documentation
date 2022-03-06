(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{410:function(a,e,t){"use strict";t.r(e);var s=t(48),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"additional-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#additional-configuration"}},[a._v("#")]),a._v(" Additional Configuration")]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#backups"}},[a._v("Backups")]),t("ul",[t("li",[t("a",{attrs:{href:"#using-local-backups"}},[a._v("Using Local Backups")])]),t("li",[t("a",{attrs:{href:"#using-s3-backups"}},[a._v("Using S3 Backups")])])])]),t("li",[t("a",{attrs:{href:"#reverse-proxy-setup"}},[a._v("Reverse Proxy Setup")]),t("ul",[t("li",[t("a",{attrs:{href:"#nginx-specific-configuration"}},[a._v("NGINX Specific Configuration")])]),t("li",[t("a",{attrs:{href:"#cloudflare-specific-configuration"}},[a._v("Cloudflare Specific Configuration")])])])]),t("li",[t("a",{attrs:{href:"#recaptcha"}},[a._v("reCAPTCHA")]),t("ul",[t("li",[t("a",{attrs:{href:"#configuring-recaptcha"}},[a._v("Configuring reCAPTCHA")])]),t("li",[t("a",{attrs:{href:"#disabling-recaptcha"}},[a._v("Disabling reCAPTCHA")])])])]),t("li",[t("a",{attrs:{href:"#_2fa"}},[a._v("2FA")]),t("ul",[t("li",[t("a",{attrs:{href:"#disable-2fa-requirement"}},[a._v("Disable 2FA requirement")])]),t("li",[t("a",{attrs:{href:"#disable-2fa-for-a-specific-user"}},[a._v("Disable 2FA for a specific user")])])])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"backups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backups"}},[a._v("#")]),a._v(" Backups")]),a._v(" "),t("p",[a._v("Pterodactyl Panel allows users to create backups of their servers. In order to create backups, a backup storage method has to be configured.")]),a._v(" "),t("p",[a._v("When changing Pterodactyl Panel's backup storage method, users may still download or delete existing backups from the prior storage driver. In the instance of migrating from S3 to local backups, S3 credentials must remain configured after switching to the local backup storage method.")]),a._v(" "),t("h3",{attrs:{id:"using-local-backups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-local-backups"}},[a._v("#")]),a._v(" Using Local Backups")]),a._v(" "),t("p",[a._v("By default, Pterodactyl Panel uses local storage via Wings for backups. That said, this method of backup storage can be explicitly set with the following configuration in the "),t("code",[a._v(".env")]),a._v(" file:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Sets your panel to use local storage via Wings for backups")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("APP_BACKUP_DRIVER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("wings\n")])])]),t("p",[a._v("Do note that, when using local storage via Wings, the destination for backups is set in Wings' "),t("code",[a._v("config.yml")]),a._v(" with the following setting key:")]),a._v(" "),t("div",{staticClass:"language-yml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("system")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("backup_directory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" /path/to/backup/storage\n")])])]),t("h3",{attrs:{id:"using-s3-backups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-s3-backups"}},[a._v("#")]),a._v(" Using S3 Backups")]),a._v(" "),t("p",[a._v("AWS S3 (or compatible storage) can be used to store remote or cloud-based backups. The following configuration options have to be set in the "),t("code",[a._v(".env")]),a._v(" file or as environment variables in order to enable it:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Sets your panel to use s3 for backups")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("APP_BACKUP_DRIVER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("s3\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Info to actually use s3")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AWS_DEFAULT_REGION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AWS_ACCESS_KEY_ID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AWS_SECRET_ACCESS_KEY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AWS_BACKUPS_BUCKET")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AWS_ENDPOINT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n")])])]),t("p",[a._v("For some configurations, you might have to change your S3 URL from "),t("code",[a._v("bucket.domain.com")]),a._v(" to "),t("code",[a._v("domain.com/bucket")]),a._v(". To accomplish this, add "),t("code",[a._v("AWS_USE_PATH_STYLE_ENDPOINT=true")]),a._v(" to your "),t("code",[a._v(".env")]),a._v(" file.")]),a._v(" "),t("h2",{attrs:{id:"reverse-proxy-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reverse-proxy-setup"}},[a._v("#")]),a._v(" Reverse Proxy Setup")]),a._v(" "),t("p",[a._v("When running Pterodactyl behind a reverse proxy, such as "),t("a",{attrs:{href:"https://support.cloudflare.com/hc/en-us/articles/200170416-What-do-the-SSL-options-mean-",target:"_blank",rel:"noopener noreferrer"}},[a._v("Cloudflare's Flexible SSL"),t("OutboundLink")],1),a._v("\nor Nginx/Apache/Caddy, etc., you will need to make a quick modification to the Panel to ensure things continue to work as expected. By default, when using these reverse proxies,\nyour Panel will not correctly handle requests. You'll most likely be unable to login or see security warnings in your browser console as it attempts to load insecure assets.\nThis is because the internal logic the Panel uses to determine how links should be generated thinks it is running over HTTP and not over HTTPS.")]),a._v(" "),t("p",[a._v("You will need to edit the "),t("code",[a._v(".env")]),a._v(" file in the Panel's root directory to contain "),t("code",[a._v("TRUSTED_PROXIES=*")]),a._v(" at minimum. We highly suggest providing a specific IP address\n(or comma-separated list of IPs) rather than allowing "),t("code",[a._v("*")]),a._v(". For example, if your proxy is running on the same machine as the server,\nthe chances are that something like "),t("code",[a._v("TRUSTED_PROXIES=127.0.0.1")]),a._v(" will work for you.")]),a._v(" "),t("h3",{attrs:{id:"nginx-specific-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-specific-configuration"}},[a._v("#")]),a._v(" NGINX Specific Configuration")]),a._v(" "),t("p",[a._v("For Pterodactyl to properly respond to an NGINX reverse proxy, the NGINX "),t("code",[a._v("location")]),a._v(" config must contain the following lines:")]),a._v(" "),t("div",{staticClass:"language-Nginx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_set_header")]),a._v(" X"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Real"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("IP "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$remote_addr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_set_header")]),a._v(" Host "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_set_header")]),a._v(" X"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Forwarded"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("For "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$proxy_add_x_forwarded_for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_set_header")]),a._v(" X"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Forwarded"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Proto "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$scheme")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_redirect")]),a._v(" off"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("proxy_buffering")]),a._v(" off"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nproxy_request_buffering off"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"cloudflare-specific-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cloudflare-specific-configuration"}},[a._v("#")]),a._v(" Cloudflare Specific Configuration")]),a._v(" "),t("p",[a._v("If you're using Cloudflare's Flexible SSL you should set "),t("code",[a._v("TRUSTED_PROXIES")]),a._v(" to contain "),t("a",{attrs:{href:"https://www.cloudflare.com/ips/",target:"_blank",rel:"noopener noreferrer"}},[a._v("their IP addresses"),t("OutboundLink")],1),a._v(".\nBelow is an example of how to set this.")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("TRUSTED_PROXIES=173.245.48.0/20,103.21.244.0/22,103.22.200.0/22,103.31.4.0/22,141.101.64.0/18,108.162.192.0/18,190.93.240.0/20,188.114.96.0/20,197.234.240.0/22,198.41.128.0/17,162.158.0.0/15,104.16.0.0/13,104.24.0.0/14,172.64.0.0/13,131.0.72.0/22\n")])])]),t("h2",{attrs:{id:"recaptcha"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recaptcha"}},[a._v("#")]),a._v(" reCAPTCHA")]),a._v(" "),t("p",[a._v("The Panel uses invisible reCAPTCHA to secure the login page from brute-force attacks. If the login attempt is considered suspicious, users may be required to perform a reCAPTCHA challenge.")]),a._v(" "),t("h3",{attrs:{id:"configuring-recaptcha"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring-recaptcha"}},[a._v("#")]),a._v(" Configuring reCAPTCHA")]),a._v(" "),t("p",[a._v("While we provide a global Site Key and Secret Key by default, we highly recommend changing it for your own setup.")]),a._v(" "),t("p",[a._v("You can generate your own keys in the "),t("a",{attrs:{href:"https://www.google.com/recaptcha/admin",target:"_blank",rel:"noopener noreferrer"}},[a._v("reCAPTCHA Admin Console"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("p",[a._v("The keys can then be applied using the Settings in the admin panel. The reCAPTCHA settings can be found on the "),t("strong",[a._v("Advanced")]),a._v(" tab.")]),a._v(" "),t("h3",{attrs:{id:"disabling-recaptcha"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disabling-recaptcha"}},[a._v("#")]),a._v(" Disabling reCAPTCHA")]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("SECURITY WARNING")]),a._v(" "),t("p",[a._v("We do not recommend disabling reCAPTCHA. It is a security mechanism that makes it harder to perform brute-force attacks on user accounts.")])]),a._v(" "),t("p",[a._v("If users have trouble logging in, or your Panel isn't exposed to the internet, it can make sense to disable reCAPTCHA.")]),a._v(" "),t("p",[a._v("reCAPTCHA can easily be disabled using the admin panel. In the Settings, select the "),t("strong",[a._v("Advanced")]),a._v(" tab and set the "),t("strong",[a._v("Status")]),a._v(" of reCAPTCHA to "),t("strong",[a._v("disabled")]),a._v(".")]),a._v(" "),t("h4",{attrs:{id:"editing-your-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#editing-your-database"}},[a._v("#")]),a._v(" Editing your database")]),a._v(" "),t("p",[a._v("If you cannot access your panel, you can modify the database directly using the following commands.")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[a._v("mysql "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("u root "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("p\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("UPDATE")]),a._v(" panel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("settings "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("value")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'false'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'settings::recaptcha:enabled'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h2",{attrs:{id:"_2fa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2fa"}},[a._v("#")]),a._v(" 2FA")]),a._v(" "),t("p",[a._v("If possible you should use the panel to update your 2FA settings. If you can't access your panel for what ever reason you can use the following steps.")]),a._v(" "),t("h3",{attrs:{id:"disable-2fa-requirement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disable-2fa-requirement"}},[a._v("#")]),a._v(" Disable 2FA requirement")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[a._v("mysql "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("u root "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("p\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("UPDATE")]),a._v(" panel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("settings "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("value")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("`")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'settings::pterodactyl:auth:2fa_required'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"disable-2fa-for-a-specific-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disable-2fa-for-a-specific-user"}},[a._v("#")]),a._v(" Disable 2FA for a specific user")]),a._v(" "),t("p",[a._v("Run the following command in your "),t("code",[a._v("/var/www/pterodactyl")]),a._v(" directory.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("php artisan p:user:disable2fa\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);