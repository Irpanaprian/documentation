(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{254:function(t,e,a){t.exports=a.p+"assets/img/wings_configuration_example.9f3fdd0b.png"},280:function(t,e,a){t.exports=a.p+"assets/img/node_allocations.323d67f2.png"},332:function(t,e,a){"use strict";a.r(e);var s=a(15),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"installing-wings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-wings"}},[t._v("#")]),t._v(" Installing Wings")]),t._v(" "),e("p",[t._v("Wings is the next generation server control plane from Pterodactyl. It has been rebuilt from the\nground up using Go and lessons learned from our first Nodejs Daemon.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("You should only install Wings if you are running "),e("strong",[t._v("Pterodactyl 1.x")]),t._v(". Do not install this software\nfor previous versions of Pterodactyl.")])]),t._v(" "),e("h2",{attrs:{id:"supported-systems"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-systems"}},[t._v("#")]),t._v(" Supported Systems")]),t._v(" "),e("p",[t._v("The following is a list of supported operating systems. Please be aware that this is not an exhaustive list,\nthere is a high probability that you can run the software on other Linux distributions without much effort.\nYou are responsible for determining which packages may be necessary on those systems. There is also a very\nhigh probability that new releases of the supported OSes below will work just fine, you are not restricted to\nonly the versions listed below.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Operating System")]),t._v(" "),e("th",[t._v("Version")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Supported")]),t._v(" "),e("th",[t._v("Notes")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[t._v("Ubuntu")])]),t._v(" "),e("td",[t._v("20.04")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td",[t._v("Documentation written assuming Ubuntu 20.04 as the base OS.")])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v("22.04")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v("24.04")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("RHEL / Rocky Linux / AlmaLinux")])]),t._v(" "),e("td",[t._v("8")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v("9")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("Debian")])]),t._v(" "),e("td",[t._v("11")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v("12")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("Windows")])]),t._v(" "),e("td",[t._v("All")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",[t._v("This software will not run in Windows environments.")])])])]),t._v(" "),e("h2",{attrs:{id:"system-requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#system-requirements"}},[t._v("#")]),t._v(" System Requirements")]),t._v(" "),e("p",[t._v("To run Wings, you will need a Linux system capable of running Docker containers. Most VPS and almost all\ndedicated servers should be capable of running Docker, but there are edge cases.")]),t._v(" "),e("p",[t._v("When your provider uses "),e("code",[t._v("Virtuozzo")]),t._v(", "),e("code",[t._v("OpenVZ")]),t._v(" (or "),e("code",[t._v("OVZ")]),t._v("), or "),e("code",[t._v("LXC")]),t._v(" virtualization, you will most likely be unable to\nrun Wings. Some providers have made the necessary changes for nested virtualization to support Docker. Ask your provider's support team to make sure. KVM is guaranteed to work.")]),t._v(" "),e("p",[t._v("The easiest way to check is to type "),e("code",[t._v("systemd-detect-virt")]),t._v(".\nIf the result doesn't contain "),e("code",[t._v("OpenVZ")]),t._v(" or"),e("code",[t._v("LXC")]),t._v(", it should be fine. The result of "),e("code",[t._v("none")]),t._v(" will appear when running dedicated hardware without any virtualization.")]),t._v(" "),e("p",[t._v("Should that not work for some reason, or you're still unsure, you can also run the command below.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("dane@pterodactyl:~$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" dmidecode "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" system-manufacturer\nVMware, Inc.\n")])])]),e("h2",{attrs:{id:"dependencies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[t._v("#")]),t._v(" Dependencies")]),t._v(" "),e("ul",[e("li",[t._v("curl")]),t._v(" "),e("li",[t._v("Docker")])]),t._v(" "),e("h3",{attrs:{id:"installing-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-docker"}},[t._v("#")]),t._v(" Installing Docker")]),t._v(" "),e("p",[t._v("For a quick install of Docker CE, you can execute the command below:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-sSL")]),t._v(" https://get.docker.com/ "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CHANNEL")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("stable "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n")])])]),e("p",[t._v("If you would rather do a manual installation, please reference the "),e("a",{attrs:{href:"https://docs.docker.com/engine/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("official Docker documentation"),e("OutboundLink")],1),t._v(" for how to install Docker CE on your server.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Check your Kernel")]),t._v(" "),e("p",[t._v("Please be aware that some hosts install a modified kernel that does not support important docker features. Please\ncheck your kernel by running "),e("code",[t._v("uname -r")]),t._v(". If your kernel ends in "),e("code",[t._v("-xxxx-grs-ipv6-64")]),t._v(" or "),e("code",[t._v("-xxxx-mod-std-ipv6-64")]),t._v(" you're\nprobably using a non-supported kernel. Check our "),e("RouterLink",{attrs:{to:"/daemon/0.6/kernel_modifications.html"}},[t._v("Kernel Modifications")]),t._v(" guide for details.")],1)]),t._v(" "),e("h4",{attrs:{id:"start-docker-on-boot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-docker-on-boot"}},[t._v("#")]),t._v(" Start Docker on Boot")]),t._v(" "),e("p",[t._v("If you are on an operating system with systemd (Ubuntu 16+, Debian 8+, CentOS 7+) run the command below to have Docker start when you boot your machine.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--now")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n")])])]),e("h4",{attrs:{id:"enabling-swap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enabling-swap"}},[t._v("#")]),t._v(" Enabling Swap")]),t._v(" "),e("p",[t._v("On most systems, Docker will be unable to setup swap space by default. You can confirm this by running "),e("code",[t._v("docker info")]),t._v(" and looking for the output of "),e("code",[t._v("WARNING: No swap limit support")]),t._v(" near the bottom.")]),t._v(" "),e("p",[t._v("Enabling swap is entirely optional, but we recommended doing it if you will be hosting for others and to prevent OOM errors.")]),t._v(" "),e("p",[t._v("To enable swap, open "),e("code",[t._v("/etc/default/grub")]),t._v(" as a root user and find the line starting with "),e("code",[t._v("GRUB_CMDLINE_LINUX_DEFAULT")]),t._v(". Make\nsure the line includes "),e("code",[t._v("swapaccount=1")]),t._v(" somewhere inside the double-quotes.")]),t._v(" "),e("p",[t._v("After that, run "),e("code",[t._v("sudo update-grub")]),t._v(" followed by "),e("code",[t._v("sudo reboot")]),t._v(" to restart the server and have swap enabled.\nBelow is an example of what the line should look like, "),e("em",[t._v("do not copy this line verbatim. It often has additional OS-specific parameters.")])]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('GRUB_CMDLINE_LINUX_DEFAULT="swapaccount=1"\n')])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("GRUB Configuration")]),t._v(" "),e("p",[t._v("Some Linux distros may ignore "),e("code",[t._v("GRUB_CMDLINE_LINUX_DEFAULT")]),t._v(". Therefore you might have to use "),e("code",[t._v("GRUB_CMDLINE_LINUX")]),t._v(" instead should the default one not work for you.")])]),t._v(" "),e("h2",{attrs:{id:"installing-wings-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-wings-2"}},[t._v("#")]),t._v(" Installing Wings")]),t._v(" "),e("p",[t._v("The first step for installing Wings is to ensure we have the required directory structure setup. To do so,\nrun the commands below, which will create the base directory and download the wings executable.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" /etc/pterodactyl\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-L")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" /usr/local/bin/wings "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/pterodactyl/wings/releases/latest/download/wings_linux_$([[ "'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("uname")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x86_64"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"amd64"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arm64"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v('"\n'),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" u+x /usr/local/bin/wings\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("OVH/SYS Servers")]),t._v(" "),e("p",[t._v("If you are using a server provided by OVH or SoYouStart please be aware that your main drive space is probably allocated to\n"),e("code",[t._v("/home")]),t._v(", and not "),e("code",[t._v("/")]),t._v(" by default. Please consider using "),e("code",[t._v("/home/daemon-data")]),t._v(" for server data. This can be easily\nset when creating the node.")])]),t._v(" "),e("h2",{attrs:{id:"configure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure"}},[t._v("#")]),t._v(" Configure")]),t._v(" "),e("p",[t._v("Once you have installed Wings and the required components, the next step is to create a node on your installed Panel. Go to your Panel administrative view, select Nodes from the sidebar, and on the right side click Create New button.")]),t._v(" "),e("p",[t._v("After you have created a node, click on it and there will be a tab called Configuration. Copy the code block content, paste it into a new file called "),e("code",[t._v("config.yml")]),t._v(" in "),e("code",[t._v("/etc/pterodactyl")]),t._v(" and save it.")]),t._v(" "),e("p",[t._v("Alternatively, you can click on the Generate Token button, copy the bash command and paste it into your terminal.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(254),alt:"example image of wings configuration"}})]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("When your Panel is using SSL, the Wings must also have one created for its FQDN. See "),e("RouterLink",{attrs:{to:"/tutorials/creating_ssl_certificates.html"}},[t._v("Creating SSL Certificates")]),t._v(" documentation page for how to create these certificates before continuing.")],1)]),t._v(" "),e("h3",{attrs:{id:"starting-wings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#starting-wings"}},[t._v("#")]),t._v(" Starting Wings")]),t._v(" "),e("p",[t._v("To start Wings, simply run the command below, which will start it in a debug mode. Once you confirmed that it is running without errors, use "),e("code",[t._v("CTRL+C")]),t._v(" to terminate the process and daemonize it by following the instructions below. Depending on your server's internet connection pulling and starting Wings for the first time may take a few minutes.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" wings "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--debug")]),t._v("\n")])])]),e("p",[t._v("You may optionally add the "),e("code",[t._v("--debug")]),t._v(" flag to run Wings in debug mode.")]),t._v(" "),e("h3",{attrs:{id:"daemonizing-using-systemd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#daemonizing-using-systemd"}},[t._v("#")]),t._v(" Daemonizing (using systemd)")]),t._v(" "),e("p",[t._v("Running Wings in the background is a simple task, just make sure that it runs without errors before doing\nthis. Place the contents below in a file called "),e("code",[t._v("wings.service")]),t._v(" in the "),e("code",[t._v("/etc/systemd/system")]),t._v(" directory.")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[Unit]\nDescription=Pterodactyl Wings Daemon\nAfter=docker.service\nRequires=docker.service\nPartOf=docker.service\n\n[Service]\nUser=root\nWorkingDirectory=/etc/pterodactyl\nLimitNOFILE=4096\nPIDFile=/var/run/wings/daemon.pid\nExecStart=/usr/local/bin/wings\nRestart=on-failure\nStartLimitInterval=180\nStartLimitBurst=30\nRestartSec=5s\n\n[Install]\nWantedBy=multi-user.target\n")])])]),e("p",[t._v("Then, run the commands below to reload systemd and start Wings.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--now")]),t._v(" wings\n")])])]),e("h3",{attrs:{id:"node-allocations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-allocations"}},[t._v("#")]),t._v(" Node Allocations")]),t._v(" "),e("p",[t._v("Allocation is a combination of IP and Port that you can assign to a server. Each created server must have at least one allocation. The allocation would be the IP address of your network interface. In some cases, such as when behind NAT, it would be the internal IP. To create new allocations go to Nodes > your node > Allocation.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(280),alt:"example image of node allocations"}})]),t._v(" "),e("p",[t._v("Type "),e("code",[t._v("hostname -I | awk '{print $1}'")]),t._v(" to find the IP to be used for the allocation. Alternatively, you can type "),e("code",[t._v('ip addr | grep "inet "')]),t._v(" to see all your available interfaces and IP addresses. Do not use 127.0.0.1 for allocations.")])])}),[],!1,null,null,null);e.default=n.exports}}]);